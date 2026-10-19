import {
  Game,
  Action,
  Scene,
  Label,
  Shape,
  WebColors,
  GameParameters,
  GameOptions,
  TrialSchema,
  Timer,
  RgbaColor,
} from "@m2c2kit/core";
import { Session } from "@m2c2kit/session";
import { Button, CountdownScene } from "@m2c2kit/addons";

// make sure to switch to lettergonogo folder to run (i.e., npm run serve) cd lettergonogo
// when you finish just do ctrl + c :)

/*
 * MID-Go/NoGo task, adapted from the Letter Go/No-Go m2c2kit task.
 *
 * One trial:
 *   fixation "+" (2-8 s, mean 5.2 s)
 *   -> cue: square or circle, green (reward) or blue (neutral), 2-8 s, mean 4 s
 *   -> stimulus:
 *        target (star in a circle): shown for the adaptive window; tap = HIT
 *        NoGo signal (X in a circle): 600 ms window; tap = NoGo error
 *   -> feedback: target trials 2000 ms minus the window; NoGo trials 1400 ms
 *
 * Trial types (equal numbers of each, shuffled):
 *   MID       = square cue -> always a target
 *   MID-Go    = circle cue -> target
 *   MID-NoGo  = circle cue -> NoGo signal
 *   each in a reward (green) and neutral (blue) version = 6 types
 *
 * Money (reward trials only): hit +20c, miss 0, NoGo success +20c, NoGo error -40c.
 * Adaptive window: starts at 400 ms; -50 ms after a hit, +50 ms after a miss
 * (target trials only, reward and neutral share one staircase).
 */

// ---------------------------------------------------------------------------
// Types (think Rust enums / structs)
// ---------------------------------------------------------------------------

type Condition = "reward" | "neutral";
type TrialType = "MID" | "MID-Go" | "MID-NoGo";
type Outcome = "hit" | "miss" | "nogo_success" | "nogo_error";

/** Everything decided about a trial before the task starts. */
interface TrialConfiguration {
  condition: Condition;
  trialType: TrialType;
  cueShape: "square" | "circle";
  stimulus: "target" | "nogo";
  fixationBeforeMs: number;
  cueDurationMs: number;
}

/** Which part of the trial is on screen right now. */
type Phase = "idle" | "cue" | "window" | "feedback";

// ---------------------------------------------------------------------------
// Helper functions (pure; no m2c2kit needed)
// ---------------------------------------------------------------------------

/** Mean of an exponential with rate `rate`, truncated to [0, span]. */
function truncatedExpMean(rate: number, span: number): number {
  if (Math.abs(rate * span) < 1e-6) return span / 2; // rate ~ 0 => uniform
  return 1 / rate - span / Math.expm1(rate * span);
}

/**
 * Finds the rate that gives a truncated exponential on [0, span] the requested
 * mean. Rate > 0 skews toward short values (mean < midpoint); rate < 0 skews
 * toward long values (mean > midpoint).
 */
function solveTruncatedExpRate(targetMean: number, span: number): number {
  let lo = -60 / span; // mean close to span
  let hi = 60 / span; // mean close to 0
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    // mean decreases as rate increases
    if (truncatedExpMean(mid, span) > targetMean) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Draws a jitter value between min and max (ms) whose long-run mean is `mean`.
 * If mean is outside (min, max), it is clamped and a uniform-ish shape is used.
 */
function makeJitterSampler(min: number, max: number, mean: number): () => number {
  const span = max - min;
  if (span <= 0) return () => min;
  const clampedMean = Math.min(Math.max(mean, min + span * 0.01), max - span * 0.01);
  const rate = solveTruncatedExpRate(clampedMean - min, span);
  return () => {
    const u = Math.random();
    let x: number;
    if (Math.abs(rate * span) < 1e-6) {
      x = u * span; // uniform
    } else {
      // inverse CDF of the truncated exponential
      x = -Math.log1p(-u * -Math.expm1(-rate * span)) / rate;
    }
    return Math.round(min + Math.min(Math.max(x, 0), span));
  };
}

/** Fisher-Yates shuffle (same algorithm as the original go/no-go task). */
function shuffle<T>(items: T[]): void {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
}

/** 20 -> "$0.20", -40 -> "-$0.40". With showPlus, 20 -> "+$0.20". */
function formatCents(cents: number, showPlus = false): string {
  const sign = cents < 0 ? "-" : showPlus && cents > 0 ? "+" : "";
  return `${sign}$${(Math.abs(cents) / 100).toFixed(2)}`;
}

/**
 * SVG path string for a 5-pointed star, shifted so its bounding box starts at
 * (0, 0) (m2c2kit centers SVG shapes by their bounding box).
 */
function starSvgPath(outerRadius: number, innerRadius: number): string {
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5; // first point straight up
    points.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
  }
  const minX = Math.min(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  return (
    points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${(p.x - minX).toFixed(2)} ${(p.y - minY).toFixed(2)}`)
      .join(" ") + " Z"
  );
}

// Message names the Qualtrics page listens for. Change both here and in
// Qualtrics if you rename them.
const MESSAGE_DATA = "MIDGONOGO";
const MESSAGE_COMPLETE = "MIDGONOGO_COMPLETE";

const TRANSPARENT: RgbaColor = [0, 0, 0, 0];
const REWARD_COLOR: RgbaColor = WebColors.LimeGreen; // brighter than plain Green on black
const NEUTRAL_COLOR: RgbaColor = WebColors.DodgerBlue; // brighter than plain Blue on black

class MidGoNoGo extends Game {
  constructor() {
    const defaultParameters: GameParameters = {
      countdown_duration_ms: {
        default: 3000,
        type: "number",
        description: "Duration of the countdown before the first trial, milliseconds.",
      },
      trials_per_type: {
        default: 2, //adjust accordingly
        type: "integer",
        description:
          "Trials of EACH of the 6 trial types. 5 = 30 trials (one run in the paper); 25 = 150 trials (all five runs).",
      },
      cue_min_ms: { default: 2000, type: "number", description: "Shortest cue duration (ms)." },
      cue_max_ms: { default: 8000, type: "number", description: "Longest cue duration (ms)." },
      cue_mean_ms: { default: 4000, type: "number", description: "Average cue duration (ms)." },
      fixation_min_ms: { default: 2000, type: "number", description: "Shortest fixation between trials (ms)." },
      fixation_max_ms: { default: 8000, type: "number", description: "Longest fixation between trials (ms)." },
      fixation_mean_ms: { default: 5200, type: "number", description: "Average fixation between trials (ms)." },
      target_initial_ms: {
        default: 400,
        type: "number",
        description: "Starting target duration, i.e. the response window (ms).",
      },
      target_step_ms: {
        default: 50,
        type: "number",
        description: "Window shrinks by this after a hit and grows by this after a miss (ms).",
      },
      target_min_ms: {
        default: 100,
        type: "number",
        description: "Shortest allowed target window (ms). Not specified in the paper.",
      },
      target_max_ms: {
        default: 1000,
        type: "number",
        description: "Longest allowed target window (ms). Must stay below target_plus_feedback_ms. Not specified in the paper.",
      },
      target_plus_feedback_ms: {
        default: 2000,
        type: "number",
        description: "Target trials: feedback lasts this minus the target window (ms).",
      },
      nogo_window_ms: { default: 600, type: "number", description: "How long the NoGo signal is shown (ms)." },
      nogo_feedback_ms: { default: 1400, type: "number", description: "Feedback duration on NoGo trials (ms)." },
      hit_reward_cents: { default: 20, type: "integer", description: "Won for a hit on a reward trial (cents)." },
      nogo_success_cents: {
        default: 20,
        type: "integer",
        description: "Won for withholding on a reward NoGo trial (cents).",
      },
      nogo_error_cents: {
        default: 40,
        type: "integer",
        description: "Lost for tapping on a reward NoGo trial (cents).",
      },
      show_fps: { default: false, type: "boolean", description: "Should the FPS be shown?" },
    };

    const trialSchema: TrialSchema = {
      trial_index: { type: "integer", description: "Index of the trial, 0-based." },
      condition: { type: "string", description: "'reward' (green cue) or 'neutral' (blue cue)." },
      trial_type: { type: "string", description: "'MID' (square), 'MID-Go' (circle + target), or 'MID-NoGo' (circle + NoGo signal)." },
      cue_shape: { type: "string", description: "'square' or 'circle'." },
      stimulus: { type: "string", description: "'target' (star) or 'nogo' (X)." },
      fixation_before_ms: { type: "number", description: "Planned fixation duration before this trial (ms)." },
      cue_duration_ms: { type: "number", description: "Planned cue duration (ms)." },
      response_window_ms: { type: "number", description: "Planned stimulus duration: adaptive target window, or the NoGo window (ms)." },
      response_window_actual_ms: {
        type: "number",
        description: "Measured time between stimulus onset and offset callbacks (ms); check against the planned value.",
      },
      responded: { type: "boolean", description: "Did the participant tap while the stimulus was on screen?" },
      response_time_ms: {
        type: ["number", "null"],
        description: "Time from stimulus onset to tap (ms); null if no tap during the window.",
      },
      outcome: { type: "string", description: "'hit', 'miss', 'nogo_success', or 'nogo_error'." },
      correct: { type: "boolean", description: "True for hit or nogo_success." },
      premature_taps: { type: "integer", description: "Taps during the cue, before the stimulus appeared." },
      late_tap: { type: "boolean", description: "Did the participant tap during feedback, after the window closed?" },
      amount_cents: { type: "integer", description: "Money won (+) or lost (-) on this trial, in cents." },
      total_cents: { type: "integer", description: "Running total after this trial, in cents." },
    };

    const options: GameOptions = {
      name: "MID-Go/NoGo",
      // Keep id as "lettergonogo": m2c2kit loads fonts from assets/<id>/,
      // and your project's assets folder is named lettergonogo.
      id: "lettergonogo",
      publishUuid: "",
      version: "2.0.0",
      bodyBackgroundColor: WebColors.Black,
      shortDescription: "Monetary incentive delay Go/NoGo task.",
      longDescription:
        "Cues signal whether money can be won (green) or not (blue). Squares are always followed by a target; circles are followed by a target or a NoGo signal. Tap targets quickly; do not tap NoGo signals.",
      showFps: defaultParameters.show_fps.default,
      width: 400,
      height: 800,
      trialSchema: trialSchema,
      parameters: defaultParameters,
      fonts: [
        {
          fontName: "roboto",
          url: "fonts/roboto/Roboto-Regular.ttf",
        },
      ],
    };

    super(options);
  }

  override async initialize() {
    await super.initialize();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const game = this;

    // -----------------------------------------------------------------------
    // Read parameters once
    // -----------------------------------------------------------------------
    const p = <T>(name: string) => game.getParameter<T>(name);
    const trialsPerType = p<number>("trials_per_type");
    const targetStep = p<number>("target_step_ms");
    const targetMin = p<number>("target_min_ms");
    const targetMax = p<number>("target_max_ms");
    const targetPlusFeedback = p<number>("target_plus_feedback_ms");
    const nogoWindow = p<number>("nogo_window_ms");
    const nogoFeedback = p<number>("nogo_feedback_ms");
    const hitReward = p<number>("hit_reward_cents");
    const nogoSuccessReward = p<number>("nogo_success_cents");
    const nogoErrorLoss = p<number>("nogo_error_cents");

    const sampleCue = makeJitterSampler(p<number>("cue_min_ms"), p<number>("cue_max_ms"), p<number>("cue_mean_ms"));
    const sampleFixation = makeJitterSampler(
      p<number>("fixation_min_ms"),
      p<number>("fixation_max_ms"),
      p<number>("fixation_mean_ms"),
    );

    // -----------------------------------------------------------------------
    // Build and shuffle the trial list
    // -----------------------------------------------------------------------
    const trialConfigurations: TrialConfiguration[] = [];
    const conditions: Condition[] = ["reward", "neutral"];
    const trialTypes: TrialType[] = ["MID", "MID-Go", "MID-NoGo"];
    for (const condition of conditions) {
      for (const trialType of trialTypes) {
        for (let i = 0; i < trialsPerType; i++) {
          trialConfigurations.push({
            condition,
            trialType,
            cueShape: trialType === "MID" ? "square" : "circle",
            stimulus: trialType === "MID-NoGo" ? "nogo" : "target",
            fixationBeforeMs: sampleFixation(),
            cueDurationMs: sampleCue(),
          });
        }
      }
    }
    shuffle(trialConfigurations);
    const totalTrials = trialConfigurations.length;

    // State that persists across trials
    let targetWindowMs = p<number>("target_initial_ms"); // the adaptive staircase
    let totalCents = 0;

    // -----------------------------------------------------------------------
    // Scene: instructions
    // -----------------------------------------------------------------------
    const instructionsScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(instructionsScene);

    instructionsScene.addChild(
      new Label({
        text: "Win Money Task", // TODO: final task name
        fontSize: 30,
        fontColor: WebColors.White,
        preferredMaxLayoutWidth: 340,
        position: { x: 200, y: 110 },
      }),
    );

    instructionsScene.addChild(
      new Label({
        text:
          "GREEN shapes mean you can win money. BLUE shapes mean no money is at stake.\n\n" +
          "After a SQUARE, a star will always appear. Tap the screen (or press the spacebar) as fast as you can when you see the star.\n\n" +
          "After a CIRCLE, either a star or an X will appear. Tap for the star. Do NOT tap for the X.\n\n" +
          `On green trials: a fast tap on a star wins ${formatCents(hitReward)}. ` +
          `Not tapping an X wins ${formatCents(nogoSuccessReward)}, but tapping an X loses ${formatCents(nogoErrorLoss)}.`,
        fontSize: 17,
        fontColor: WebColors.White,
        preferredMaxLayoutWidth: 350,
        position: { x: 200, y: 400 },
      }),
    );

    const startButton = new Button({
      text: "START",
      backgroundColor: WebColors.Green,
      position: { x: 200, y: 700 },
      isUserInteractionEnabled: true,
    });
    startButton.onTapDown(() => {
      startButton.isUserInteractionEnabled = false; // prevent double taps
      game.presentScene(countdownScene);
    });
    instructionsScene.addChild(startButton);

    // -----------------------------------------------------------------------
    // Scene: countdown (moves on to the next added scene, fixation, by itself)
    // -----------------------------------------------------------------------
    const countdownScene = new CountdownScene({
      milliseconds: p<number>("countdown_duration_ms"),
      text: "",
      backgroundColor: WebColors.Black,
    });
    game.addScene(countdownScene);

    // -----------------------------------------------------------------------
    // Scene: fixation (replaces the old "Get Ready" preparation scene)
    // -----------------------------------------------------------------------
    const fixationScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(fixationScene);
    fixationScene.addChild(
      new Label({ text: "+", fontSize: 60, fontColor: WebColors.White, position: { x: 200, y: 400 } }),
    );

    fixationScene.onAppear(() => {
      if (game.trialIndex >= totalTrials) {
        game.presentScene(doneScene);
        return;
      }
      fixationScene.run(
        Action.sequence([
          Action.wait({ duration: trialConfigurations[game.trialIndex].fixationBeforeMs }),
          Action.custom({ callback: () => game.presentScene(trialScene) }),
        ]),
      );
    });

    // -----------------------------------------------------------------------
    // Scene: trial (cue -> target or NoGo signal -> feedback)
    // All nodes are created once here and shown/hidden each trial.
    // -----------------------------------------------------------------------
    const trialScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(trialScene);
    const center = { x: 200, y: 400 };

    const cueSquare = new Shape({
      rect: { size: { width: 140, height: 140 } },
      fillColor: REWARD_COLOR,
      position: center,
      hidden: true,
    });
    const cueCircle = new Shape({
      circleOfRadius: 70,
      fillColor: REWARD_COLOR,
      position: center,
      hidden: true,
    });
    trialScene.addChild(cueSquare);
    trialScene.addChild(cueCircle);

    // Both stimuli share a white ring; only the inside differs.
    const stimulusRing = new Shape({
      circleOfRadius: 70,
      fillColor: TRANSPARENT,
      strokeColor: WebColors.White,
      lineWidth: 6,
      position: center,
      hidden: true,
    });
    trialScene.addChild(stimulusRing);

    const starOuterRadius = 52;
    const targetStar = new Shape({
      path: { pathString: starSvgPath(starOuterRadius, starOuterRadius * 0.4) },
      fillColor: WebColors.White,
      // shapes are centered on their bounding box; nudge the star up so its
      // points are centered in the ring
      position: { x: center.x, y: center.y - 0.0955 * starOuterRadius },
      hidden: true,
    });
    trialScene.addChild(targetStar);

    // NoGo signal: the paper doesn't describe it, so this is a red X in the ring.
    const nogoX = new Label({
      text: "X",
      fontSize: 90,
      fontColor: WebColors.Red,
      position: center,
      hidden: true,
    });
    trialScene.addChild(nogoX);

    const feedbackOutcome = new Label({
      text: "",
      fontSize: 40,
      fontColor: WebColors.White,
      position: { x: 200, y: 330 },
      hidden: true,
    });
    const feedbackAmount = new Label({
      text: "",
      fontSize: 32,
      fontColor: WebColors.White,
      position: { x: 200, y: 400 },
      hidden: true,
    });
    const feedbackTotal = new Label({
      text: "",
      fontSize: 24,
      fontColor: WebColors.White,
      position: { x: 200, y: 470 },
      hidden: true,
    });
    trialScene.addChild(feedbackOutcome);
    trialScene.addChild(feedbackAmount);
    trialScene.addChild(feedbackTotal);

    // Invisible full-screen tap area, so a tap anywhere counts as a response.
    // alpha: 0 keeps it invisible; m2c2kit still detects taps on it.
    const tapArea = new Shape({
      rect: { size: { width: 400, height: 800 } },
      fillColor: WebColors.Black,
      alpha: 0,
      position: center,
      zPosition: 100,
      isUserInteractionEnabled: true,
    });
    trialScene.addChild(tapArea);

    const allTrialNodes = [cueSquare, cueCircle, stimulusRing, targetStar, nogoX, feedbackOutcome, feedbackAmount, feedbackTotal];
    const hideAll = () => allTrialNodes.forEach((node) => (node.hidden = true));

    // Per-trial state (reset in onAppear)
    let phase: Phase = "idle";
    let stimulusOnset = 0;
    let responded = false;
    let responseTimeMs: number | null = null;
    let prematureTaps = 0;
    let lateTap = false;

    // Called for a screen tap/click or a spacebar press (like a Rust `match`).
    const registerResponse = () => {
      const now = Timer.now();
      switch (phase) {
        case "cue":
          prematureTaps++;
          break;
        case "window":
          if (!responded) {
            responded = true;
            responseTimeMs = now - stimulusOnset;
          }
          break;
        case "feedback":
          if (!responded) lateTap = true;
          break;
        case "idle":
          break;
      }
    };
    tapArea.onTapDown(registerResponse);
    trialScene.onKeyDown((e) => {
      // ignore auto-repeat from holding the key down
      if (e.code === "Space" && !e.repeat) registerResponse();
    });

    trialScene.onAppear(() => {
      const idx = game.trialIndex;
      const trial = trialConfigurations[idx];
      const isTarget = trial.stimulus === "target";
      const windowMs = isTarget ? targetWindowMs : nogoWindow;
      const feedbackMs = isTarget ? targetPlusFeedback - windowMs : nogoFeedback;

      // reset per-trial state
      hideAll();
      responded = false;
      responseTimeMs = null;
      prematureTaps = 0;
      lateTap = false;
      let windowActualMs = 0;
      let outcome: Outcome = "miss";
      let amountCents = 0;

      // --- cue ---
      const cue = trial.cueShape === "square" ? cueSquare : cueCircle;
      cue.fillColor = trial.condition === "reward" ? REWARD_COLOR : NEUTRAL_COLOR;
      cue.hidden = false;
      phase = "cue";

      const showStimulus = () => {
        cue.hidden = true;
        stimulusRing.hidden = false;
        (isTarget ? targetStar : nogoX).hidden = false;
        stimulusOnset = Timer.now();
        phase = "window";
      };

      const closeWindowAndShowFeedback = () => {
        windowActualMs = Timer.now() - stimulusOnset;
        phase = "feedback";
        stimulusRing.hidden = true;
        targetStar.hidden = true;
        nogoX.hidden = true;

        const isReward = trial.condition === "reward";
        let outcomeText: string;
        if (isTarget) {
          outcome = responded ? "hit" : "miss";
          outcomeText = responded ? "HIT!" : "Too slow";
          amountCents = isReward && responded ? hitReward : 0;
          // adaptive staircase: harder after a hit, easier after a miss
          targetWindowMs = Math.min(
            targetMax,
            Math.max(targetMin, targetWindowMs + (responded ? -targetStep : targetStep)),
          );
        } else {
          outcome = responded ? "nogo_error" : "nogo_success";
          outcomeText = responded ? "Oops! That was an X" : "Correct - no tap!";
          amountCents = isReward ? (responded ? -nogoErrorLoss : nogoSuccessReward) : 0;
        }
        totalCents += amountCents;

        feedbackOutcome.text = outcomeText;
        feedbackAmount.text = isReward ? formatCents(amountCents, true) : "No money this trial";
        feedbackTotal.text = `Total: ${formatCents(totalCents)}`;
        feedbackOutcome.hidden = false;
        feedbackAmount.hidden = false;
        feedbackTotal.hidden = false;
      };

      const finishTrial = () => {
        phase = "idle";
        hideAll();

        game.addTrialData("trial_index", idx);
        game.addTrialData("condition", trial.condition);
        game.addTrialData("trial_type", trial.trialType);
        game.addTrialData("cue_shape", trial.cueShape);
        game.addTrialData("stimulus", trial.stimulus);
        game.addTrialData("fixation_before_ms", trial.fixationBeforeMs);
        game.addTrialData("cue_duration_ms", trial.cueDurationMs);
        game.addTrialData("response_window_ms", windowMs);
        game.addTrialData("response_window_actual_ms", windowActualMs);
        game.addTrialData("responded", responded);
        game.addTrialData("response_time_ms", responseTimeMs);
        game.addTrialData("outcome", outcome);
        game.addTrialData("correct", outcome === "hit" || outcome === "nogo_success");
        game.addTrialData("premature_taps", prematureTaps);
        game.addTrialData("late_tap", lateTap);
        game.addTrialData("amount_cents", amountCents);
        game.addTrialData("total_cents", totalCents);
        game.trialComplete();

        // fixationScene checks whether all trials are done
        game.presentScene(fixationScene);
      };

      // The whole trial runs on m2c2kit's frame clock. Taps never end a phase
      // early, so every trial keeps the same structure.
      trialScene.run(
        Action.sequence([
          Action.wait({ duration: trial.cueDurationMs }),
          Action.custom({ callback: showStimulus }),
          Action.wait({ duration: windowMs }),
          Action.custom({ callback: closeWindowAndShowFeedback }),
          Action.wait({ duration: feedbackMs }),
          Action.custom({ callback: finishTrial }),
        ]),
        "trial",
      );
    });

    // -----------------------------------------------------------------------
    // Scene: done
    // -----------------------------------------------------------------------
    const doneScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(doneScene);

    const doneSceneText = new Label({
      text: "",
      fontSize: 24,
      fontColor: WebColors.White,
      preferredMaxLayoutWidth: 340,
      position: { x: 200, y: 400 },
    });
    doneScene.addChild(doneSceneText);
    doneScene.onAppear(() => {
      doneSceneText.text = `You have finished the task.\n\nYou earned ${formatCents(totalCents)}.`;
    });

    const okButton = new Button({
      text: "OK",
      position: { x: 200, y: 600 },
      isUserInteractionEnabled: true,
    });
    okButton.onTapDown(() => {
      okButton.isUserInteractionEnabled = false; // don't allow repeat taps
      doneScene.removeAllChildren();
      console.log("User clicked OK. Signaling Qualtrics...");
      if (window.parent) {
        window.parent.postMessage({ type: MESSAGE_COMPLETE }, "*");
      }
      game.end();
    });
    doneScene.addChild(okButton);
  }
}

const activity = new MidGoNoGo();

// Set game parameters from URL parameters, e.g. ?trials_per_type=1
const urlParams = new URLSearchParams(window.location.search);
const gameParameters: { [key: string]: string } = {};
urlParams.forEach((value, key) => {
  gameParameters[key] = value;
});
activity.setParameters(gameParameters);

const session = new Session({ activities: [activity] });

session.onActivityData((ev) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trials = (ev.data as any).trials;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const config = ev.activityConfiguration as any;
  const totalTrialsNeeded = 6 * Number(config.trials_per_type);

  if (trials && trials.length === totalTrialsNeeded) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const correctCount = trials.filter((t: any) => t.correct === true).length;
    const accuracy = (correctCount / trials.length) * 100;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const simplifiedTrials = trials.map((t: any) => ({
      trial: t.trial_index,
      condition: t.condition,
      type: t.trial_type,
      outcome: t.outcome,
      correct: t.correct ? 1 : 0,
      rt: t.response_time_ms === null ? null : Math.round(t.response_time_ms),
      window: t.response_window_ms,
      amount: t.amount_cents,
    }));

    if (window.parent) {
      window.parent.postMessage(
        {
          type: MESSAGE_DATA,
          acc: accuracy.toFixed(2),
          total_cents: trials[trials.length - 1].total_cents,
          details: JSON.stringify(simplifiedTrials),
        },
        "*",
      );
      console.log("accuracy", accuracy);
    }
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as unknown as any).m2c2kitSession = session;
session.initialize();