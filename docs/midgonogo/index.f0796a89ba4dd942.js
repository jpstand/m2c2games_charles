var M2NodeType = /* @__PURE__ */ ((M2NodeType2) => {
  M2NodeType2["Node"] = "Node";
  M2NodeType2["Scene"] = "Scene";
  M2NodeType2["Sprite"] = "Sprite";
  M2NodeType2["Label"] = "Label";
  M2NodeType2["TextLine"] = "TextLine";
  M2NodeType2["Shape"] = "Shape";
  M2NodeType2["Composite"] = "Composite";
  M2NodeType2["SoundPlayer"] = "SoundPlayer";
  M2NodeType2["SoundRecorder"] = "SoundRecorder";
  return M2NodeType2;
})(M2NodeType || {});

const M2SoundStatus = {
  /** Sound was set for lazy loading, and loading has not yet been requested. */
  Deferred: "Deferred",
  /** Sound is indicated for fetching, but fetching has not begun. */
  WillFetch: "WillFetch",
  /** Sound is being fetched. */
  Fetching: "Fetching",
  /** Sound has been fetched. */
  Fetched: "Fetched",
  /** Sound is being decoded. */
  Decoding: "Decoding",
  /** Sound has fully finished loading and is ready to use. */
  Ready: "Ready",
  /** Error occurred in loading. */
  Error: "Error"
};

var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["Sequence"] = "Sequence";
  ActionType2["Group"] = "Group";
  ActionType2["Wait"] = "Wait";
  ActionType2["Custom"] = "Custom";
  ActionType2["Move"] = "Move";
  ActionType2["Scale"] = "Scale";
  ActionType2["FadeAlpha"] = "FadeAlpha";
  ActionType2["Rotate"] = "Rotate";
  ActionType2["Play"] = "Play";
  ActionType2["Repeat"] = "Repeat";
  ActionType2["RepeatForever"] = "RepeatForever";
  return ActionType2;
})(ActionType || {});

class M2Error extends Error {
  constructor(...params) {
    super(...params);
    this.name = "M2Error";
    Object.setPrototypeOf(this, M2Error.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, M2Error);
    }
  }
}

const _Easings = class _Easings {
  static toTypeAsString(easingFunction) {
    switch (easingFunction) {
      case _Easings.none: {
        return "None";
      }
      case _Easings.linear: {
        return "Linear";
      }
      case _Easings.quadraticIn: {
        return "QuadraticIn";
      }
      case _Easings.quadraticOut: {
        return "QuadraticOut";
      }
      case _Easings.quadraticInOut: {
        return "QuadraticInOut";
      }
      case _Easings.cubicIn: {
        return "CubicIn";
      }
      case _Easings.cubicOut: {
        return "CubicOut";
      }
      case _Easings.cubicInOut: {
        return "CubicInOut";
      }
      case _Easings.quarticIn: {
        return "QuarticIn";
      }
      case _Easings.quarticOut: {
        return "QuarticOut";
      }
      case _Easings.quarticInOut: {
        return "QuarticInOut";
      }
      case _Easings.quinticIn: {
        return "QuinticIn";
      }
      case _Easings.quinticOut: {
        return "QuinticOut";
      }
      case _Easings.quinticInOut: {
        return "QuinticInOut";
      }
      case _Easings.sinusoidalIn: {
        return "SinusoidalIn";
      }
      case _Easings.sinusoidalOut: {
        return "SinusoidalOut";
      }
      case _Easings.sinusoidalInOut: {
        return "SinusoidalInOut";
      }
      case _Easings.exponentialIn: {
        return "ExponentialIn";
      }
      case _Easings.exponentialOut: {
        return "ExponentialOut";
      }
      case _Easings.exponentialInOut: {
        return "ExponentialInOut";
      }
      case _Easings.circularIn: {
        return "CircularIn";
      }
      case _Easings.circularOut: {
        return "CircularOut";
      }
      case _Easings.circularInOut: {
        return "CircularInOut";
      }
      default: {
        throw new M2Error("Easings.toTypeAsString(): Unknown easing function");
      }
    }
  }
  static fromTypeAsString(easingType) {
    switch (easingType) {
      case "None": {
        return _Easings.none;
      }
      case "Linear": {
        return _Easings.linear;
      }
      case "QuadraticIn": {
        return _Easings.quadraticIn;
      }
      case "QuadraticOut": {
        return _Easings.quadraticOut;
      }
      case "QuadraticInOut": {
        return _Easings.quadraticInOut;
      }
      case "CubicIn": {
        return _Easings.cubicIn;
      }
      case "CubicOut": {
        return _Easings.cubicOut;
      }
      case "CubicInOut": {
        return _Easings.cubicInOut;
      }
      case "QuarticIn": {
        return _Easings.quarticIn;
      }
      case "QuarticOut": {
        return _Easings.quarticOut;
      }
      case "QuarticInOut": {
        return _Easings.quarticInOut;
      }
      case "QuinticIn": {
        return _Easings.quinticIn;
      }
      case "QuinticOut": {
        return _Easings.quinticOut;
      }
      case "QuinticInOut": {
        return _Easings.quinticInOut;
      }
      case "SinusoidalIn": {
        return _Easings.sinusoidalIn;
      }
      case "SinusoidalOut": {
        return _Easings.sinusoidalOut;
      }
      case "SinusoidalInOut": {
        return _Easings.sinusoidalInOut;
      }
      case "ExponentialIn": {
        return _Easings.exponentialIn;
      }
      case "ExponentialOut": {
        return _Easings.exponentialOut;
      }
      case "ExponentialInOut": {
        return _Easings.exponentialInOut;
      }
      case "CircularIn": {
        return _Easings.circularIn;
      }
      case "CircularOut": {
        return _Easings.circularOut;
      }
      case "CircularInOut": {
        return _Easings.circularInOut;
      }
      default: {
        throw new M2Error(
          `Easings.fromTypeAsString(): Unknown easing function type ${easingType}`
        );
      }
    }
  }
};
// These easing functions are adapted from work by Robert Penner
// Terms of Use: Easing Functions (Equations)
// Open source under the MIT License and the 3-Clause BSD License.
// MIT License
// Copyright © 2001 Robert Penner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// BSD License
// Copyright © 2001 Robert Penner
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
// Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
// Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
_Easings.none = (t, b, c, d) => {
  return c + b;
};
_Easings.linear = (t, b, c, d) => {
  return c * t / d + b;
};
_Easings.quadraticIn = (t, b, c, d) => {
  t /= d;
  return c * t * t + b;
};
_Easings.quadraticOut = (t, b, c, d) => {
  t /= d;
  return -c * t * (t - 2) + b;
};
_Easings.quadraticInOut = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
_Easings.cubicIn = (t, b, c, d) => {
  t /= d;
  return c * t * t * t + b;
};
_Easings.cubicOut = (t, b, c, d) => {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
};
_Easings.cubicInOut = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};
_Easings.quarticIn = (t, b, c, d) => {
  t /= d;
  return c * t * t * t * t + b;
};
_Easings.quarticOut = (t, b, c, d) => {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};
_Easings.quarticInOut = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t * t + b;
  t -= 2;
  return -c / 2 * (t * t * t * t - 2) + b;
};
_Easings.quinticIn = (t, b, c, d) => {
  t /= d;
  return c * t * t * t * t * t + b;
};
_Easings.quinticOut = (t, b, c, d) => {
  t /= d;
  t--;
  return c * (t * t * t * t * t + 1) + b;
};
_Easings.quinticInOut = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t * t * t + 2) + b;
};
_Easings.sinusoidalIn = (t, b, c, d) => {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
_Easings.sinusoidalOut = (t, b, c, d) => {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
_Easings.sinusoidalInOut = (t, b, c, d) => {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
_Easings.exponentialIn = (t, b, c, d) => {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
_Easings.exponentialOut = (t, b, c, d) => {
  return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
_Easings.exponentialInOut = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  t--;
  return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};
_Easings.circularIn = (t, b, c, d) => {
  t /= d;
  return -c * (Math.sqrt(1 - t * t) - 1) + b;
};
_Easings.circularOut = (t, b, c, d) => {
  t /= d;
  t--;
  return c * Math.sqrt(1 - t * t) + b;
};
_Easings.circularInOut = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  t -= 2;
  return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};
let Easings = _Easings;

var ShapeType = /* @__PURE__ */ ((ShapeType2) => {
  ShapeType2["Undefined"] = "Undefined";
  ShapeType2["Rectangle"] = "Rectangle";
  ShapeType2["Circle"] = "Circle";
  ShapeType2["Path"] = "Path";
  return ShapeType2;
})(ShapeType || {});

const _Timer = class _Timer {
  constructor(name) {
    // startTime is the timestamp of the current active run
    this.startTime = NaN;
    this.stopTime = NaN;
    this.stopped = true;
    /**
     * cumulativeElapsed is a cumulative total of elapsed time while the timer
     * was in previous started (running) states, NOT INCLUDING the possibly
     * active run's duration
     */
    this.cumulativeElapsed = NaN;
    this.name = name;
  }
  /**
   * Aliases performance.now()
   *
   * @remarks The m2c2kit Timer class is designed to measure elapsed durations
   * after a designated start point for a uniquely named timer. However, if a
   * timestamp based on the
   * [time origin](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin)
   * is needed, this method can be used.
   *
   * @returns a [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp)
   */
  static now() {
    return window.performance.now();
  }
  /**
   * Creates, but does not start, a new millisecond-resolution timer based on
   * [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).
   *
   * @remarks If a timer with the given name already exists, it will be created
   * and set back to zero, but not started.
   *
   * @param name - The name of the timer to be started
   */
  static new(name) {
    this._timers = this._timers.filter((t) => t.name !== name);
    const timer = new _Timer(name);
    timer.cumulativeElapsed = 0;
    this._timers.push(timer);
  }
  /**
   * Creates and starts a new millisecond-resolution timer based on
   * [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).
   *
   * @remarks If a timer with the given name already exists, it will be created,
   * set back to zero, and started.
   *
   * @param name - The name of the timer to be started
   */
  static startNew(name) {
    this.new(name);
    this.start(name);
  }
  /**
   * Starts a stopped millisecond-resolution timer based on
   * [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now).
   *
   * @remarks The method throws an error if a timer with the given name does
   * not exist or is not in a stopped state.
   *
   * @param name - The name of the timer to be started
   */
  static start(name) {
    const timer = this._timers.filter((t) => t.name === name).find(Boolean);
    if (timer === void 0) {
      throw new M2Error(
        `can't start timer. timer with name ${name} does not exist.`
      );
    } else {
      if (timer.stopped === false) {
        throw new M2Error(
          `can't start timer. timer with name ${name} is already started.`
        );
      }
    }
    timer.startTime = window.performance.now();
    timer.stopped = false;
  }
  /**
   * Stops a timer.
   *
   * @remarks The method throws an error if a timer with the given
   * name is already in a stopped state, or if a timer with the
   * given name has not been started.
   *
   * @param name - The name of the timer to be stopped
   */
  static stop(name) {
    const timer = this._timers.filter((t) => t.name === name).find(Boolean);
    if (timer === void 0) {
      throw new M2Error(
        `can't stop timer. timer with name ${name} does not exist.`
      );
    }
    if (timer.stopped === true) {
      throw new M2Error(
        `can't stop timer. timer with name ${name} is already stopped.`
      );
    }
    timer.stopTime = window.performance.now();
    timer.cumulativeElapsed = timer.cumulativeElapsed + timer.stopTime - timer.startTime;
    timer.stopped = true;
  }
  /**
   * Returns the total time elapsed, in milliseconds, of the timer.
   *
   * @remarks The total time elapsed will include all durations from multiple
   * starts and stops of the timer, if applicable. A timer's elapsed duration
   * can be read while it is in started or stopped state. The method throws
   * an error if a timer with the given name does not exist.
   *
   * @param name - The name of the timer whose elapsed duration is requested
   */
  static elapsed(name) {
    const timer = this._timers.filter((t) => t.name === name).find(Boolean);
    if (timer === void 0) {
      throw new M2Error(
        `can't get elapsed time. timer with name ${name} does not exist.`
      );
    }
    if (timer.stopped) {
      return timer.cumulativeElapsed;
    }
    return timer.cumulativeElapsed + window.performance.now() - timer.startTime;
  }
  /**
   * Removes a timer.
   *
   * @remarks After removal, no additional methods can be used with a timer
   * of the given name, other than to create a new timer with the given name,
   * whose duration will be set at 0 again. The method throws an error if
   * a timer with the given name does not exist.
   *
   * @param name - The name of the timer to be removed
   */
  static remove(name) {
    const timer = this._timers.filter((t) => t.name === name).find(Boolean);
    if (timer === void 0) {
      throw new M2Error(
        `can't remove timer. timer with name ${name} does not exist.`
      );
    }
    this._timers = this._timers.filter((t) => t.name != name);
  }
  /**
   * Remove all timers.
   *
   * @remarks This method will {@link remove} any timers in a started or
   * stopped state. This method is idempotent; method is safe to call even
   * if there are no timers to remove; no errors are thrown if there are
   * not any timers that can be removed.
   */
  static removeAll() {
    this._timers = new Array();
  }
  /**
   * Checks if a timer of the given name exists.
   *
   * @remarks The method checks if there is a timer with the given name.
   *
   * @param name - The name of the timer to check for existence
   * @returns boolean
   */
  static exists(name) {
    return this._timers.some((t) => t.name === name);
  }
};
_Timer._timers = new Array();
let Timer = _Timer;

class WebColors {
}
WebColors.Transparent = [0, 0, 0, 0];
WebColors.MediumVioletRed = [199, 21, 133, 1];
WebColors.DeepPink = [255, 20, 147, 1];
WebColors.PaleVioletRed = [219, 112, 147, 1];
WebColors.HotPink = [255, 105, 180, 1];
WebColors.LightPink = [255, 182, 193, 1];
WebColors.Pink = [255, 192, 203, 1];
WebColors.DarkRed = [139, 0, 0, 1];
WebColors.Red = [255, 0, 0, 1];
WebColors.Firebrick = [178, 34, 34, 1];
WebColors.Crimson = [220, 20, 60, 1];
WebColors.IndianRed = [205, 92, 92, 1];
WebColors.LightCoral = [240, 128, 128, 1];
WebColors.Salmon = [250, 128, 114, 1];
WebColors.DarkSalmon = [233, 150, 122, 1];
WebColors.LightSalmon = [255, 160, 122, 1];
WebColors.OrangeRed = [255, 69, 0, 1];
WebColors.Tomato = [255, 99, 71, 1];
WebColors.DarkOrange = [255, 140, 0, 1];
WebColors.Coral = [255, 127, 80, 1];
WebColors.Orange = [255, 165, 0, 1];
WebColors.DarkKhaki = [189, 183, 107, 1];
WebColors.Gold = [255, 215, 0, 1];
WebColors.Khaki = [240, 230, 140, 1];
WebColors.PeachPuff = [255, 218, 185, 1];
WebColors.Yellow = [255, 255, 0, 1];
WebColors.PaleGoldenrod = [238, 232, 170, 1];
WebColors.Moccasin = [255, 228, 181, 1];
WebColors.PapayaWhip = [255, 239, 213, 1];
WebColors.LightGoldenrodYellow = [250, 250, 210, 1];
WebColors.LemonChiffon = [255, 250, 205, 1];
WebColors.LightYellow = [255, 255, 224, 1];
WebColors.Maroon = [128, 0, 0, 1];
WebColors.Brown = [165, 42, 42, 1];
WebColors.SaddleBrown = [139, 69, 19, 1];
WebColors.Sienna = [160, 82, 45, 1];
WebColors.Chocolate = [210, 105, 30, 1];
WebColors.DarkGoldenrod = [184, 134, 11, 1];
WebColors.Peru = [205, 133, 63, 1];
WebColors.RosyBrown = [188, 143, 143, 1];
WebColors.Goldenrod = [218, 165, 32, 1];
WebColors.SandyBrown = [244, 164, 96, 1];
WebColors.Tan = [210, 180, 140, 1];
WebColors.Burlywood = [222, 184, 135, 1];
WebColors.Wheat = [245, 222, 179, 1];
WebColors.NavajoWhite = [255, 222, 173, 1];
WebColors.Bisque = [255, 228, 196, 1];
WebColors.BlanchedAlmond = [255, 235, 205, 1];
WebColors.Cornsilk = [255, 248, 220, 1];
WebColors.DarkGreen = [0, 100, 0, 1];
WebColors.Green = [0, 128, 0, 1];
WebColors.DarkOliveGreen = [85, 107, 47, 1];
WebColors.ForestGreen = [34, 139, 34, 1];
WebColors.SeaGreen = [46, 139, 87, 1];
WebColors.Olive = [128, 128, 0, 1];
WebColors.OliveDrab = [107, 142, 35, 1];
WebColors.MediumSeaGreen = [60, 179, 113, 1];
WebColors.LimeGreen = [50, 205, 50, 1];
WebColors.Lime = [0, 255, 0, 1];
WebColors.SpringGreen = [0, 255, 127, 1];
WebColors.MediumSpringGreen = [0, 250, 154, 1];
WebColors.DarkSeaGreen = [143, 188, 143, 1];
WebColors.MediumAquamarine = [102, 205, 170, 1];
WebColors.YellowGreen = [154, 205, 50, 1];
WebColors.LawnGreen = [124, 252, 0, 1];
WebColors.Chartreuse = [127, 255, 0, 1];
WebColors.LightGreen = [144, 238, 144, 1];
WebColors.GreenYellow = [173, 255, 47, 1];
WebColors.PaleGreen = [152, 251, 152, 1];
WebColors.Teal = [0, 128, 128, 1];
WebColors.DarkCyan = [0, 139, 139, 1];
WebColors.LightSeaGreen = [32, 178, 170, 1];
WebColors.CadetBlue = [95, 158, 160, 1];
WebColors.DarkTurquoise = [0, 206, 209, 1];
WebColors.MediumTurquoise = [72, 209, 204, 1];
WebColors.Turquoise = [64, 224, 208, 1];
WebColors.Aqua = [0, 255, 255, 1];
WebColors.Cyan = [0, 255, 255, 1];
WebColors.Aquamarine = [127, 255, 212, 1];
WebColors.PaleTurquoise = [175, 238, 238, 1];
WebColors.LightCyan = [224, 255, 255, 1];
WebColors.Navy = [0, 0, 128, 1];
WebColors.DarkBlue = [0, 0, 139, 1];
WebColors.MediumBlue = [0, 0, 205, 1];
WebColors.Blue = [0, 0, 255, 1];
WebColors.MidnightBlue = [25, 25, 112, 1];
WebColors.RoyalBlue = [65, 105, 225, 1];
WebColors.SteelBlue = [70, 130, 180, 1];
WebColors.DodgerBlue = [30, 144, 255, 1];
WebColors.DeepSkyBlue = [0, 191, 255, 1];
WebColors.CornflowerBlue = [100, 149, 237, 1];
WebColors.SkyBlue = [135, 206, 235, 1];
WebColors.LightSkyBlue = [135, 206, 250, 1];
WebColors.LightSteelBlue = [176, 196, 222, 1];
WebColors.LightBlue = [173, 216, 230, 1];
WebColors.PowderBlue = [176, 224, 230, 1];
WebColors.Indigo = [75, 0, 130, 1];
WebColors.Purple = [128, 0, 128, 1];
WebColors.DarkMagenta = [139, 0, 139, 1];
WebColors.DarkViolet = [148, 0, 211, 1];
WebColors.DarkSlateBlue = [72, 61, 139, 1];
WebColors.BlueViolet = [138, 43, 226, 1];
WebColors.DarkOrchid = [153, 50, 204, 1];
WebColors.Fuchsia = [255, 0, 255, 1];
WebColors.Magenta = [255, 0, 255, 1];
WebColors.SlateBlue = [106, 90, 205, 1];
WebColors.MediumSlateBlue = [123, 104, 238, 1];
WebColors.MediumOrchid = [186, 85, 211, 1];
WebColors.MediumPurple = [147, 112, 219, 1];
WebColors.Orchid = [218, 112, 214, 1];
WebColors.Violet = [238, 130, 238, 1];
WebColors.Plum = [221, 160, 221, 1];
WebColors.Thistle = [216, 191, 216, 1];
WebColors.Lavender = [230, 230, 250, 1];
WebColors.MistyRose = [255, 228, 225, 1];
WebColors.AntiqueWhite = [250, 235, 215, 1];
WebColors.Linen = [250, 240, 230, 1];
WebColors.Beige = [245, 245, 220, 1];
WebColors.WhiteSmoke = [245, 245, 245, 1];
WebColors.LavenderBlush = [255, 240, 245, 1];
WebColors.OldLace = [253, 245, 230, 1];
WebColors.AliceBlue = [240, 248, 255, 1];
WebColors.Seashell = [255, 245, 238, 1];
WebColors.GhostWhite = [248, 248, 255, 1];
WebColors.Honeydew = [240, 255, 240, 1];
WebColors.FloralWhite = [255, 250, 240, 1];
WebColors.Azure = [240, 255, 255, 1];
WebColors.MintCream = [245, 255, 250, 1];
WebColors.Snow = [255, 250, 250, 1];
WebColors.Ivory = [255, 255, 240, 1];
WebColors.White = [255, 255, 255, 1];
WebColors.Black = [0, 0, 0, 1];
WebColors.DarkSlateGray = [47, 79, 79, 1];
WebColors.DimGray = [105, 105, 105, 1];
WebColors.SlateGray = [112, 128, 144, 1];
WebColors.Gray = [128, 128, 128, 1];
WebColors.LightSlateGray = [119, 136, 153, 1];
WebColors.DarkGray = [169, 169, 169, 1];
WebColors.Silver = [192, 192, 192, 1];
WebColors.LightGray = [211, 211, 211, 1];
WebColors.Gainsboro = [220, 220, 220, 1];
WebColors.RebeccaPurple = [102, 51, 153, 1];

class Constants {
}
/** Size of the font showing frames per second */
Constants.FPS_DISPLAY_TEXT_FONT_SIZE = 12;
/** Color of the font showing frames per second */
Constants.FPS_DISPLAY_TEXT_COLOR = [0, 0, 0, 0.5];
/** Frequency, in milliseconds, at which to update frames per second metric shown on the screen */
Constants.FPS_DISPLAY_UPDATE_INTERVAL = 1e3;
/** Maximum number of activity metrics to log. */
Constants.MAXIMUM_RECORDED_ACTIVITY_METRICS = 32;
/** The frames per second will be logged in game metrics if the FPS is lower than this value */
Constants.FPS_METRIC_REPORT_THRESHOLD = 59;
/** Scene color, if none is specified. */
Constants.DEFAULT_SCENE_BACKGROUND_COLOR = WebColors.White;
/** Shape fill color, if none is specified. */
Constants.DEFAULT_SHAPE_FILL_COLOR = WebColors.Red;
/** Color of paths in a shape, if none is specified. */
Constants.DEFAULT_PATH_STROKE_COLOR = WebColors.Red;
/** Line width of paths in a shape, if none is specified. */
Constants.DEFAULT_PATH_LINE_WIDTH = 2;
/** Color of text in Label and TextLine, if none is specified. */
Constants.DEFAULT_FONT_COLOR = WebColors.Black;
/** Font size in Label and TextLine, if none is specified. */
Constants.DEFAULT_FONT_SIZE = 16;
Constants.LIMITED_FPS_RATE = 5;
Constants.FREE_NODES_SCENE_NAME = "__freeNodesScene";
Constants.OUTGOING_SCENE_NAME = "__outgoingScene";
Constants.OUTGOING_SCENE_SPRITE_NAME = "__outgoingSceneSprite";
Constants.OUTGOING_SCENE_IMAGE_NAME = "__outgoingSceneSnapshot";
Constants.SESSION_INITIALIZATION_POLLING_INTERVAL_MS = 50;
/** Placeholder that will be populated during the build process. */
Constants.MODULE_METADATA_PLACEHOLDER = {
  name: "",
  version: "",
  dependencies: {}
};
Constants.DEFAULT_ROOT_ELEMENT_ID = "m2c2kit";
Constants.ERUDA_URL = "https://cdn.jsdelivr.net/npm/eruda@3.4.1/eruda.js";
Constants.ERUDA_SRI = "sha384-daS5bEfWdSq146t9c4BureB/fQWO3lHohseXBelPqKvbOUx2D6PE3TxcQ9jrKZDM";

class M2c2KitHelpers {
  /**
   * Returns the URL as it appears in the game's manifest.json file.
   *
   * @remarks This is used to return the hashed URL.
   *
   * @param game - game object
   * @param url - the URL
   * @returns the hashed URL from the manifest, or the original URL if there is no manifest or the URL is not in the manifest.
   */
  static getUrlFromManifest(game, url) {
    const manifest = game.manifest;
    if (manifest && manifest[url]) {
      return manifest[url];
    }
    return url;
  }
  /**
   * Does the URL have a scheme?
   *
   * @param url - the URL to test
   * @returns true if the url begins with a scheme (e.g., "http://",
   * "https://", "file://", etc.)
   */
  static urlHasScheme(url) {
    return /^[a-z]+:\/\//i.test(url);
  }
  /**
   * Converts a value to a JSON schema type or one of types.
   *
   * @remarks The value can be of the target type, or a string that can be
   * parsed into the target type. For example, a string `"3"` can be converted
   * to a number, and a string `'{ "color" : "red" }'` can be converted to an
   * object. If the target type if an object or array, the value can be a
   * string parsable into the target type: this string can be the string
   * representation of the object or array, or the URI encoded string.
   * Throws an error if the value cannot be converted to the type or one of the
   * types. Converting an object, null, or array to a string is often not the
   * desired behavior, so a warning is logged if this occurs.
   *
   * @param value - the value to convert
   * @param type - A JSON Schema type or types to convert the value to, e.g.,
   * "string" or ["string", "null"]
   * @returns the converted value
   */
  static convertValueToType(value, type) {
    function canBeString(value2) {
      if (typeof value2 === "string") {
        return true;
      }
      if (typeof value2 === "object") {
        return true;
      }
      if (!Number.isNaN(parseFloat(value2))) {
        return true;
      }
      if (typeof value2 === "boolean") {
        return true;
      }
      return false;
    }
    function asString(value2) {
      if (typeof value2 === "string") {
        return value2;
      }
      if (typeof value2 === "object") {
        console.warn(
          `convertValueToType() converted an object to a string. This may not be the desired behavior. The object was: ${JSON.stringify(value2)}`
        );
        return JSON.stringify(value2);
      }
      if (!Number.isNaN(parseFloat(value2))) {
        return value2;
      }
      if (typeof value2 === "boolean") {
        return value2.toString();
      }
      throw new M2Error(`Error parsing "${value2}" as a string.`);
    }
    function canBeNumber(value2) {
      if (typeof value2 === "number") {
        return true;
      }
      if (typeof value2 !== "string") {
        return false;
      }
      const n = parseFloat(value2);
      if (Number.isNaN(n)) {
        return false;
      }
      return true;
    }
    function asNumber(value2) {
      if (typeof value2 === "number") {
        return value2;
      }
      if (typeof value2 !== "string") {
        throw new M2Error(`Error parsing "${value2}" as a number.`);
      }
      const n = parseFloat(value2);
      if (Number.isNaN(n)) {
        throw new M2Error(`Error parsing "${value2}" as a number.`);
      }
      return n;
    }
    function canBeInteger(value2) {
      if (typeof value2 === "number") {
        return true;
      }
      if (typeof value2 !== "string") {
        return false;
      }
      const n = parseInt(value2);
      if (Number.isNaN(n)) {
        return false;
      }
      return true;
    }
    function asInteger(value2) {
      if (typeof value2 === "number") {
        return value2;
      }
      if (typeof value2 !== "string") {
        throw new M2Error(`Error parsing "${value2}" as an integer.`);
      }
      const n = parseInt(value2);
      if (Number.isNaN(n)) {
        throw new M2Error(`Error parsing "${value2}" as an integer.`);
      }
      return n;
    }
    function canBeBoolean(value2) {
      if (typeof value2 === "boolean") {
        return true;
      }
      if (value2 !== "true" && value2 !== "false") {
        return false;
      }
      return true;
    }
    function asBoolean(value2) {
      if (typeof value2 === "boolean") {
        return value2;
      }
      if (value2 !== "true" && value2 !== "false") {
        throw new M2Error(`Error parsing "${value2}" as a boolean.`);
      }
      return value2 === "true";
    }
    function canBeArray(value2) {
      if (Array.isArray(value2)) {
        return true;
      }
      if (typeof value2 !== "string") {
        return false;
      }
      try {
        const a = JSON.parse(value2);
        if (Array.isArray(a)) {
          return true;
        }
      } catch {
        const a = JSON.parse(decodeURIComponent(value2));
        if (Array.isArray(a)) {
          return true;
        }
      }
      return false;
    }
    function asArray(value2) {
      if (Array.isArray(value2)) {
        return value2;
      }
      if (typeof value2 !== "string") {
        throw new M2Error(`Error parsing "${value2}" as an array.`);
      }
      try {
        const a = JSON.parse(value2);
        if (Array.isArray(a)) {
          return a;
        }
      } catch {
        const a = JSON.parse(decodeURIComponent(value2));
        if (Array.isArray(a)) {
          return a;
        }
      }
      throw new M2Error(`Error parsing "${value2}" as an array.`);
    }
    function canBeObject(value2) {
      if (typeof value2 === "object" && !Array.isArray(value2) && value2 !== null) {
        return true;
      }
      if (typeof value2 !== "string") {
        return false;
      }
      try {
        const o = JSON.parse(value2);
        if (typeof o === "object" && !Array.isArray(o) && o !== null) {
          return true;
        }
      } catch {
        const o = JSON.parse(decodeURIComponent(value2));
        if (typeof o === "object" && !Array.isArray(o) && o !== null) {
          return true;
        }
      }
      return false;
    }
    function asObject(value2) {
      if (typeof value2 === "object" && !Array.isArray(value2) && value2 !== null) {
        return value2;
      }
      if (typeof value2 !== "string") {
        throw new M2Error(`Error parsing "${value2}" as an object.`);
      }
      try {
        const o = JSON.parse(value2);
        if (typeof o === "object" && !Array.isArray(o) && o !== null) {
          return o;
        }
      } catch {
        const o = JSON.parse(decodeURIComponent(value2));
        if (typeof o === "object" && !Array.isArray(o) && o !== null) {
          return o;
        }
      }
      throw new M2Error(`Error parsing "${value2}" as an object.`);
    }
    function canBeNull(value2) {
      if (value2 === null || value2 === "null") {
        return true;
      }
      return false;
    }
    function asNull(value2) {
      if (value2 !== "null" && value2 !== null) {
        throw new M2Error(`Error parsing "${value2}" as null.`);
      }
      return null;
    }
    const typeCheckers = {
      string: canBeString,
      number: canBeNumber,
      integer: canBeInteger,
      boolean: canBeBoolean,
      array: canBeArray,
      object: canBeObject,
      null: canBeNull
    };
    const typeConverters = {
      string: asString,
      number: asNumber,
      integer: asInteger,
      boolean: asBoolean,
      array: asArray,
      object: asObject,
      null: asNull
    };
    if (type === void 0) {
      throw new M2Error(`Error with "${value}" as a target type.`);
    }
    if (!Array.isArray(type)) {
      if (typeCheckers[type](value)) {
        return typeConverters[type](value);
      }
      throw new M2Error(`Error parsing "${value}" as a ${type}.`);
    }
    for (const t of type) {
      if (typeCheckers[t](value)) {
        return typeConverters[t](value);
      }
    }
    throw new M2Error(`Error parsing "${value}" as one of ${type}.`);
  }
  /**
   * Load scripts from URLs.
   *
   * @remarks This is for debugging purposes only. If this is unwanted, it
   * can be disabled on the server side with an appropriate Content
   * Security Policy (CSP) header.
   *
   * @param urls - URLs with scripts to load
   */
  static loadScriptUrls(urls) {
    if (!Array.isArray(urls) || !urls.every((s) => typeof s === "string")) {
      console.warn(
        `Error parsing "scripts" parameter. "scripts" must be an array of URL strings, and it is recommended to be URI encoded.`
      );
      return;
    }
    urls.forEach((url) => {
      if (!m2c2Globals.addedScriptUrls.includes(url)) {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.head.appendChild(script);
        console.log(`\u26AA added script: ${url}`);
        m2c2Globals.addedScriptUrls.push(url);
      }
    });
  }
  /**
   * Loads eruda from a CDN and initializes it.
   *
   * @remarks This is for debugging purposes only. If this is unwanted, it
   * can be disabled on the server side with an appropriate Content
   * Security Policy (CSP) header.
   * eruda is a dev console overlay for mobile web browsers and web views.
   * see https://github.com/liriliri/eruda
   *
   * @param pollingIntervalMs - milliseconds between each attempt
   * @param maxAttempts - how many attempts to make
   */
  static loadEruda(pollingIntervalMs = 100, maxAttempts = 50) {
    if (m2c2Globals.erudaRequested === true) {
      return;
    }
    console.log(`\u26AA added eruda script: ${Constants.ERUDA_URL}`);
    const script = document.createElement("script");
    script.src = Constants.ERUDA_URL;
    script.integrity = Constants.ERUDA_SRI;
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);
    m2c2Globals.erudaRequested = true;
    let attempts = 0;
    const waitForEruda = () => {
      const eruda = window?.eruda;
      if (typeof eruda !== "undefined") {
        console.log("\u26AA eruda ready");
        eruda.init();
        m2c2Globals.erudaInitialized = true;
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(waitForEruda, pollingIntervalMs);
      } else {
        console.log(
          `eruda was requested, but could not be loaded after ${pollingIntervalMs * maxAttempts} milliseconds.`
        );
      }
    };
    waitForEruda();
  }
  /**
   * Registers a `M2Node` class with the global class registry.
   *
   * @remarks This is used to register a class so that it can be
   * instantiated by the `M2NodeFactory`.
   *
   * @param nodeClass - class or classes to register.
   */
  static registerM2NodeClass(...nodeClass) {
    if (!m2c2Globals.m2NodeClassRegistry) {
      m2c2Globals.m2NodeClassRegistry = {};
    }
    nodeClass.forEach((_nodeClass) => {
      m2c2Globals.m2NodeClassRegistry = {
        ...m2c2Globals.m2NodeClassRegistry,
        [_nodeClass.name]: _nodeClass
      };
    });
  }
  /**
   * Creates timestamps based on when the current frame's update began.
   *
   * @remarks When recording events related to node creation, node
   * parent-child relationships, and node properties, the timestamps should be
   * based on when current frame's update began -- not the current time. While
   * current time is most accurate for recording user interactions (use
   * `M2c2KitHelpers.createTimestamps()` for user interactions), the frame's
   * update is the best way to ensure that node events that occurred in the same
   * frame are recorded with the same timestamp and thus are replayed in the
   * correct order. For example, a node may be created, added to a scene, and
   * have its hidden property set to true, all in the same frame. If the
   * current timestamps were used for all these events, it could happen that
   * the hidden property is set slightly after the node is added to the scene.
   * When replayed, this could cause the node to be visible for a single frame
   * if the queue of replay events pulls only the creation and addition events.
   * By using the frame's update time, we ensure that all events related to a
   * node are recorded with the same timestamp and are replayed in the same
   * frame.
   * If game has not yet begun to run (i.e., frame updates have not yet started),
   * the timestamps will be based on the current time.
   *
   * @returns object with timestamps
   */
  static createFrameUpdateTimestamps() {
    return {
      timestamp: Number.isNaN(m2c2Globals?.now) || m2c2Globals?.now === void 0 ? Timer.now() : m2c2Globals.now,
      iso8601Timestamp: !m2c2Globals.iso8601Now ? (/* @__PURE__ */ new Date()).toISOString() : m2c2Globals.iso8601Now
    };
  }
  /**
   * Creates timestamps based on the current time.
   *
   * @remarks Use `M2c2KitHelpers.createFrameUpdateTimestamps()` when requesting
   * timestamps for events related to node creation, parent-child
   * relationships, and properties.
   * See {@link createFrameUpdateTimestamps()} for explanation.
   *
   * @returns object with `timestamp` and `iso8601Timestamp` properties
   */
  static createTimestamps() {
    return {
      timestamp: Timer.now(),
      iso8601Timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  /**
   * Calculates the four points of the bounding box of the node, taking
   * into account the node's rotation (as well as the rotation of its
   * ancestors).
   *
   * @remarks This method is used to calculate the rotated bounding box of an
   * node when in order to determine if a point is inside the node in
   * response to DOM pointer events. This method is NOT used to prepare the
   * CanvasKit canvas for drawing the node.
   *
   * @param drawableNode
   * @returns array of points representing the rotated node
   */
  static calculateRotatedPoints(drawableNode) {
    const nodes = drawableNode.ancestors;
    nodes.reverse();
    nodes.push(drawableNode);
    const nodePointsArray = nodes.map((node) => {
      const boundingBox = M2c2KitHelpers.calculateNodeAbsoluteBoundingBox(node);
      return M2c2KitHelpers.boundingBoxToPoints(boundingBox);
    });
    for (let i = 0; i < nodePointsArray.length; i++) {
      if (!nodeNeedsRotation(nodes[i])) {
        continue;
      }
      const nodePoints = nodePointsArray[i];
      const radians = nodes[i].zRotation;
      const center = M2c2KitHelpers.findCentroid(nodePoints);
      for (let j = i; j < nodes.length; j++) {
        nodePointsArray[j] = rotateRectangle(
          nodePointsArray[j],
          radians,
          center
        );
      }
    }
    return nodePointsArray[nodePointsArray.length - 1];
  }
  /**
   * Rotates the canvas so the node appears rotated when drawn.
   *
   * @remarks Nodes inherit rotations from their ancestors. Each ancestor,
   * however, rotates around its own anchor point. Thus, we must rotate the
   * canvas around the anchor point of each ancestor as well as the node's
   * anchor point.
   *
   * @param canvas - CanvasKit canvas to rotate
   * @param drawableNode - Node to rotate the canvas for
   */
  static rotateCanvasForDrawableNode(canvas, drawableNode) {
    const rotationTransforms = M2c2KitHelpers.calculateRotationTransforms(drawableNode);
    if (rotationTransforms.length === 0) {
      return;
    }
    const drawScale = m2c2Globals.canvasScale / drawableNode.absoluteScale;
    applyRotationTransformsToCanvas(rotationTransforms, drawScale, canvas);
  }
  /**
   * Calculates the absolute bounding box of the node before any rotation
   * is applied.
   *
   * @remarks The absolute bounding box is the bounding box of the node
   * relative to the scene's origin (0, 0).
   *
   * @param node
   * @returns the bounding box of the node
   */
  static calculateNodeAbsoluteBoundingBox(node) {
    const anchorPoint = node.anchorPoint;
    const scale = node.absoluteScale;
    let width = node.size.width;
    let height = node.size.height;
    if (node.type === M2NodeType.Shape && node.shapeType === ShapeType.Circle) {
      const radius = node.circleOfRadius;
      if (!radius) {
        throw "circleOfRadius is undefined";
      }
      width = radius * 2;
      height = radius * 2;
    }
    const xMin = node.absolutePosition.x - width * anchorPoint.x * scale;
    const xMax = node.absolutePosition.x + width * (1 - anchorPoint.x) * scale;
    const yMin = node.absolutePosition.y - height * anchorPoint.y * scale;
    const yMax = node.absolutePosition.y + height * (1 - anchorPoint.y) * scale;
    return { xMin, xMax, yMin, yMax };
  }
  /**
   * Converts an angle from radians to degrees.
   *
   * @remarks In m2c2kit, radians are counter clockwise from the positive
   * x-axis, but the rotate method in CanvasKit uses degrees clockwise. Thus
   * we negate after conversion from radians to degrees.
   *
   * @param radians - The angle in radians
   * @returns The angle in degrees
   */
  static radiansToDegrees(radians) {
    return -M2c2KitHelpers.normalizeAngleRadians(radians) * (180 / Math.PI);
  }
  /**
   * Normalizes an angle in radians to the range [0, 2*Math.PI)
   *
   * @param radians - angle in radians
   * @returns normalized angle in radians
   */
  static normalizeAngleRadians(radians) {
    const quotient = Math.floor(radians / (2 * Math.PI));
    let normalized = radians - quotient * (2 * Math.PI);
    if (normalized < 0) {
      normalized += 2 * Math.PI;
    }
    return normalized;
  }
  /**
   * Checks if two points are on the same side of a line.
   *
   * @remarks The line is defined by two points, a and b. The function uses
   * the cross product to determine the relative position of the points.
   *
   * @param p1 - point to check
   * @param p2 - point to check
   * @param a - point that defines one end of the line
   * @param b - point that defines the other end of the line
   * @returns true if p1 and p2 are on the same side of the line, or false
   * otherwise
   */
  static arePointsOnSameSideOfLine(p1, p2, a, b) {
    const cp1 = (b.x - a.x) * (p1.y - a.y) - (b.y - a.y) * (p1.x - a.x);
    const cp2 = (b.x - a.x) * (p2.y - a.y) - (b.y - a.y) * (p2.x - a.x);
    return cp1 * cp2 >= 0;
  }
  /**
   * Checks if a point is inside a rectangle.
   *
   * @remarks The rectangle may have been rotated (sides might not be parallel
   * to the axes).
   *
   * @param point - The Point to check
   * @param rect - An array of four Points representing the vertices of the
   * rectangle in clockwise order
   * @returns true if the Point is inside the rectangle
   */
  static isPointInsideRectangle(point, rect) {
    if (rect.length !== 4) {
      throw new M2Error("Invalid input: expected an array of four points");
    }
    return M2c2KitHelpers.arePointsOnSameSideOfLine(
      point,
      rect[2],
      rect[0],
      rect[1]
    ) && M2c2KitHelpers.arePointsOnSameSideOfLine(
      point,
      rect[3],
      rect[1],
      rect[2]
    ) && M2c2KitHelpers.arePointsOnSameSideOfLine(
      point,
      rect[0],
      rect[2],
      rect[3]
    ) && M2c2KitHelpers.arePointsOnSameSideOfLine(point, rect[1], rect[3], rect[0]);
  }
  /**
   * Checks if the node or any of its ancestors have been rotated.
   *
   * @param node - node to check
   * @returns true if the node or any of its ancestors have been rotated
   */
  static nodeOrAncestorHasBeenRotated(node) {
    const nodes = node.ancestors;
    nodes.push(node);
    return nodes.some((node2) => nodeNeedsRotation(node2));
  }
  /**
   * Converts a bounding box to an array of four points representing the
   * vertices of the rectangle.
   *
   * @remarks In m2c2kit, the y-axis is inverted: origin is in the upper-left.
   * Vertices are returned in clockwise order starting from the upper-left.
   *
   * @param boundingBox
   * @returns An array of four points
   */
  static boundingBoxToPoints(boundingBox) {
    const { xMin, xMax, yMin, yMax } = boundingBox;
    const points = [
      { x: xMin, y: yMin },
      // Top left
      { x: xMax, y: yMin },
      // Top right
      { x: xMax, y: yMax },
      // Bottom right
      { x: xMin, y: yMax }
      // Bottom left
    ];
    return points;
  }
  /**
   * Finds the centroid of a rectangle.
   *
   * @param points - An array of four points representing the vertices of the
   * rectangle.
   * @returns array of points representing the centroid of the rectangle.
   */
  static findCentroid(points) {
    if (points.length !== 4) {
      throw new M2Error("Invalid input: expected an array of four points");
    }
    let xSum = 0;
    let ySum = 0;
    for (const point of points) {
      xSum += point.x;
      ySum += point.y;
    }
    const xAvg = xSum / 4;
    const yAvg = ySum / 4;
    return { x: xAvg, y: yAvg };
  }
  /**
   * Rotates a point, counterclockwise, around another point by an angle in
   * radians.
   *
   * @param point - Point to rotate
   * @param radians - angle in radians
   * @param center - Point to rotate around
   * @returns rotated point
   */
  static rotatePoint(point, radians, center) {
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    const x = dx * Math.cos(-radians) - dy * Math.sin(-radians);
    const y = dx * Math.sin(-radians) + dy * Math.cos(-radians);
    return {
      x: x + center.x,
      y: y + center.y
    };
  }
  /**
   * Calculates the rotation transforms to apply to node, respecting any
   * ancestor rotations.
   *
   * @param drawableNode - node to calculate rotation transforms for
   * @returns array of rotation transforms to apply
   */
  static calculateRotationTransforms(drawableNode) {
    const rotationTransforms = [];
    const nodes = drawableNode.ancestors;
    nodes.reverse();
    nodes.push(drawableNode);
    nodes.forEach((node) => {
      if (nodeNeedsRotation(node)) {
        const drawable = node;
        if (drawable.type === M2NodeType.Scene) {
          const center2 = {
            x: drawable.absolutePosition.x + drawable.size.width * 0.5,
            y: drawable.absolutePosition.y + drawable.size.height * 0.5
          };
          rotationTransforms.push({
            radians: drawable.zRotation,
            center: center2
          });
          return;
        }
        const boundingBox = M2c2KitHelpers.calculateNodeAbsoluteBoundingBox(drawable);
        const points = M2c2KitHelpers.boundingBoxToPoints(boundingBox);
        const center = M2c2KitHelpers.findCentroid(points);
        rotationTransforms.push({
          radians: drawable.zRotation,
          center
        });
      }
    });
    return rotationTransforms;
  }
}
function applyRotationTransformsToCanvas(rotationTransforms, scale, canvas) {
  rotationTransforms.forEach((transform) => {
    canvas.rotate(
      M2c2KitHelpers.radiansToDegrees(transform.radians),
      transform.center.x * scale,
      transform.center.y * scale
    );
  });
}
function nodeNeedsRotation(node) {
  return M2c2KitHelpers.normalizeAngleRadians(node.zRotation) !== 0 && node.isDrawable;
}
function rotateRectangle(rect, radians, center) {
  if (rect.length !== 4) {
    throw new M2Error("Invalid input: expected an array of four points");
  }
  const rotated = [];
  for (const p of rect) {
    rotated.push(M2c2KitHelpers.rotatePoint(p, radians, center));
  }
  return rotated;
}

class Futurable {
  constructor(value) {
    /** The numbers, operators, and other Futurables that represent a value. */
    this.expression = new Array();
    /** Log a warning to console if a expression is this length. */
    this.WARNING_EXPRESSION_LENGTH = 32;
    if (typeof value === "number") {
      this.pushToExpression(value);
      return;
    }
    if (value === void 0) {
      this.pushToExpression(Infinity);
      return;
    }
    this.pushToExpression(value);
  }
  /**
   * Appends a number or another Futurable to this Futurable's expression.
   *
   * @remarks This method does a simple array push, but checks the length of
   * the expression array and warns if it gets "too long." This may indicate
   * a logic error, unintended recursion, etc. because our use cases will
   * likely not have expressions that are longer than
   * `Futural.WARNING_EXPRESSION_LENGTH` elements.
   *
   * @param value - value to add to the expression.
   */
  pushToExpression(value) {
    if (value === this) {
      throw new M2Error(
        "Cannot add, subtract, or assign a Futurable with itself."
      );
    }
    this.expression.push(value);
    if (this.expression.length === this.WARNING_EXPRESSION_LENGTH) {
      console.warn(
        `Expression length is ${this.WARNING_EXPRESSION_LENGTH} elements. Something may be wrong.`
      );
    }
  }
  /**
   * Assigns a value, either known or Futurable, to this Futurable.
   *
   * @remarks This method clears the current expression.
   *
   * @param value - value to assign to this Futurable.
   */
  assign(value) {
    while (this.expression.length > 0) {
      this.expression.pop();
    }
    this.pushToExpression(value);
  }
  /**
   * Performs addition on this Futurable.
   *
   * @remarks This method modifies the Futurable by adding the term(s) to the
   * Futurable's expression.
   *
   * @param terms - terms to add to this Futurable.
   * @returns the modified Futurable.
   */
  add(...terms) {
    this.appendOperation(Operator.Add, ...terms);
    return this;
  }
  /**
   * Performs subtraction on this Futurable.
   *
   * @remarks This method modifies the Futurable by subtracting the term(s)
   * from the Futurable's expression.
   *
   * @param terms - terms to subtract from this Futurable.
   * @returns the modified Futurable.
   */
  subtract(...terms) {
    this.appendOperation(Operator.Subtract, ...terms);
    return this;
  }
  /**
   * Adds an operation (an operator and term(s)) to the Futurable's
   * expression.
   *
   * @param operator - Add or Subtract.
   * @param terms - terms to add to the expression.
   */
  appendOperation(operator, ...terms) {
    terms.forEach((term) => {
      this.pushToExpression(operator);
      this.pushToExpression(term);
    });
  }
  /**
   * Gets the numeric value of this Futurable.
   *
   * @remarks This method evaluates the expression of the Futurable and
   * returns the numeric value. If any of the terms in the expression are
   * Futurables, it will recursively evaluate them. If any of the terms are
   * unknown (represented by Infinity), it will return Infinity.
   *
   * @returns the numeric value of this Futurable.
   */
  get value() {
    let result = 0;
    const terms = this.expression.flat(Infinity);
    let sign = 1;
    for (let i = 0; i < terms.length; i++) {
      if (typeof terms[i] === "number") {
        result = result + sign * terms[i];
        continue;
      }
      if (terms[i] instanceof Futurable) {
        result = result + sign * terms[i].value;
        continue;
      }
      if (terms[i] === Operator.Add) {
        sign = 1;
        continue;
      }
      if (terms[i] === Operator.Subtract) {
        sign = -1;
        continue;
      }
    }
    return result;
  }
}
const Operator = {
  /** Futurable addition operator  */
  Add: "Add",
  /** Futurable subtraction operator  */
  Subtract: "Subtract"
};

class Action {
  constructor(runDuringTransition = false) {
    this.startOffset = new Futurable(0);
    this.started = false;
    this.running = false;
    this._completed = false;
    /**
     * Start time of a running action is always known; it is not a `Futurable`.
     * -1 indicates that the root action has not yet started running.
     */
    this.runStartTime = -1;
    this.duration = new Futurable();
    this.runDuringTransition = runDuringTransition;
  }
  /**
   * Prepares the Action for evaluation.
   *
   * @remarks Calculates start times for all actions in the hierarchy
   * and returns a copy of the action that is prepared for evaluation during
   * the update loop.
   *
   * @param key - optional string to identify an action
   * @returns action prepared for evaluation
   */
  initialize(key) {
    const action = this.clone();
    this.assignParents(action, action, key);
    this.propagateRunDuringTransition(action);
    this.assignDurations(action);
    this.assignStartOffsets(action);
    return action;
  }
  /**
   * Parses the action hierarchy and assigns each action its parent and
   * root action.
   *
   * @remarks Uses recursion to handle arbitrary level of nesting parent
   * actions within parent actions. When this method is called from the
   * `initialize()` method, the root action is both the `action` and the
   * `rootAction`. This is because the action is the top-level action in the
   * hierarchy. When the method calls itself recursively, the `rootAction`
   * remains the same, but the `action` is a child action or the action of a
   * repeating action.
   *
   * @param action - the action to assign parents to
   * @param rootAction - top-level action passed to the run method
   * @param key - optional string to identify an action. The key is assigned
   * to every action in the hierarchy.
   */
  assignParents(action, rootAction, key) {
    if (key !== void 0) {
      action.key = key;
    }
    if (this.isParent(action)) {
      const children = action.children;
      children.forEach((child) => {
        child.parent = action;
      });
      children.filter((child) => this.isParent(child)).forEach((child) => this.assignParents(child, rootAction, key));
    }
  }
  /**
   * Sets the runDuringTransition property based on descendants.
   *
   * @remarks This ensures that a parent action has its `runDuringTransition`
   * property set to true if any of its descendants have their
   * `runDuringTransition` property set to true. Parent actions do not have a
   * way for the user to set this property directly; it is inferred (propagated
   * up) from the descendants.
   *
   * @param action to propagate runDuringTransition property to
   */
  propagateRunDuringTransition(action) {
    if (this.isParent(action)) {
      if (action.descendants.some((child) => child.runDuringTransition)) {
        action.runDuringTransition = true;
      }
      action.children.forEach(
        (child) => this.propagateRunDuringTransition(child)
      );
    }
  }
  /**
   * Assigns durations to all actions in the hierarchy.
   *
   * @remarks Uses recursion to handle arbitrary level of nesting parent
   * actions within parent actions.
   *
   * @param action - the action to assign durations to
   */
  assignDurations(action) {
    action.duration = this.calculateDuration(action);
    if (this.isParent(action)) {
      action.children.forEach((child) => this.assignDurations(child));
    }
  }
  /**
   * Calculates the duration of an action, including any children actions
   * the action may contain.
   *
   * @remarks Uses recursion to handle arbitrary level of nesting parent
   * actions within parent actions
   *
   * @param action
   * @returns the calculated duration
   */
  calculateDuration(action) {
    if (action.type === ActionType.Group) {
      const groupAction = action;
      const duration = groupAction.children.map((child) => this.calculateDuration(child)).reduce((max, dur) => {
        return Math.max(max, dur.value);
      }, 0);
      return new Futurable(duration);
    }
    if (action.type === ActionType.Sequence) {
      const sequenceAction = action;
      const duration = sequenceAction.children.map((child) => this.calculateDuration(child)).reduce((sum, dur) => {
        return sum + dur.value;
      }, 0);
      return new Futurable(duration);
    }
    if (this.isRepeating(action)) {
      return new Futurable();
    }
    return action.duration;
  }
  /**
   * Assigns start offsets to all actions in the hierarchy.
   *
   * @remarks Uses recursion to handle arbitrary level of nesting parent
   * actions within parent actions.
   *
   * @param action - the action to assign start offsets to
   */
  assignStartOffsets(action) {
    action.startOffset = this.calculateStartOffset(action);
    if (this.isParent(action)) {
      action.children.forEach((child) => this.assignStartOffsets(child));
    }
  }
  /**
   * Calculates the start offset. This is when an action should start,
   * relative to the start time of its parent (if it has a parent).
   *
   * @param action - the action to calculate the start offset for
   * @returns the start offset as a Futurable
   */
  calculateStartOffset(action) {
    if (action.parent === void 0) {
      return new Futurable(0);
    }
    if (action.parent.type !== ActionType.Sequence) {
      return action.parent.startOffset;
    }
    const startOffset = new Futurable(0);
    startOffset.add(action.parent.startOffset);
    for (const siblingAction of action.parent.children) {
      if (siblingAction === action) {
        break;
      }
      startOffset.add(siblingAction.duration);
    }
    return startOffset;
  }
  /**
   * Evaluates an action, updating the node's properties as needed.
   *
   * @remarks This method is called every frame by the M2Node's `update()`
   * method.
   *
   * @param action - the Action to be evaluated and possibly run
   * @param node - the `M2Node` that the action will be run on
   * @param now - the current elapsed time, from `performance.now()`
   * @param dt - the time since the last frame (delta time)
   */
  static evaluateAction(action, node, now, dt) {
    if (node.involvedInSceneTransition() && !action.runDuringTransition) {
      return;
    }
    if (action.runStartTime === -1) {
      action.assignRunStartTimes(action, now);
    }
    if (now < action.runStartTime + action.startOffset.value) {
      return;
    }
    if (action.shouldBeRunning(now)) {
      action.running = true;
    }
    if (action.isParent(action)) {
      action.children.forEach((child) => {
        Action.evaluateAction(child, node, now, dt);
      });
      if (!action.isRepeating(action)) {
        if (!action.started) {
          action.started = true;
        }
        if (action.running && action.completed) {
          action.running = false;
        }
        return;
      }
      Action.evaluateRepeatingActions(action, now);
      return;
    }
    if (!action.shouldBeRunning(now)) {
      action.running = false;
    }
    if (action.running === false && action.completed === true) {
      return;
    }
    const elapsed = now - (action.runStartTime + action.startOffset.value);
    switch (action.type) {
      case ActionType.Custom:
        Action.evaluateCustomAction(action);
        break;
      case ActionType.Play:
        Action.evaluatePlayAction(node, action);
        break;
      case ActionType.Wait:
        Action.evaluateWaitAction(action, now);
        break;
      case ActionType.Move:
        Action.evaluateMoveAction(action, node, elapsed);
        break;
      case ActionType.Scale:
        Action.evaluateScaleAction(action, node, elapsed, dt);
        break;
      case ActionType.FadeAlpha:
        Action.evaluateFadeAlphaAction(action, node, elapsed, dt);
        break;
      case ActionType.Rotate:
        Action.evaluateRotateAction(action, node, elapsed, dt);
        break;
      default:
        throw new M2Error(`Action type not recognized: ${action.type}`);
    }
  }
  static evaluateRepeatingActions(action, now) {
    if (!action.started) {
      action.started = true;
    }
    if (action.repetitionHasCompleted) {
      action.completedRepetitions++;
      const repetitionDuration = action.children[0].duration.value;
      action.cumulativeDuration = action.cumulativeDuration + repetitionDuration;
      if (!isFinite(repetitionDuration)) {
        throw "repetitionDuration is not finite";
      }
      if (!action.completed) {
        action.restartAction(action, now);
      } else {
        if (action.type === ActionType.RepeatForever) {
          throw new M2Error("RepeatForever action should never complete");
        }
        action.duration.assign(action.cumulativeDuration);
        action.running = false;
      }
    }
  }
  static evaluateRotateAction(action, node, elapsed, dt) {
    const rotateAction = action;
    if (!rotateAction.started) {
      if (rotateAction.byAngle !== void 0) {
        rotateAction.delta = rotateAction.byAngle;
      }
      if (rotateAction.toAngle !== void 0) {
        rotateAction.toAngle = M2c2KitHelpers.normalizeAngleRadians(
          rotateAction.toAngle
        );
        node.zRotation = M2c2KitHelpers.normalizeAngleRadians(node.zRotation);
        rotateAction.delta = rotateAction.toAngle - node.zRotation;
        if (rotateAction.shortestUnitArc === true && Math.abs(rotateAction.delta) > Math.PI) {
          rotateAction.delta = 2 * Math.PI - Math.abs(rotateAction.delta);
        }
      }
      rotateAction.started = true;
      rotateAction.finalValue = node.zRotation + rotateAction.delta;
    }
    if (elapsed < rotateAction.duration.value) {
      node.zRotation = node.zRotation + rotateAction.delta * (dt / rotateAction.duration.value);
      if (rotateAction.delta <= 0 && node.zRotation < rotateAction.finalValue) {
        node.zRotation = rotateAction.finalValue;
      }
      if (rotateAction.delta > 0 && node.zRotation > rotateAction.finalValue) {
        node.zRotation = rotateAction.finalValue;
      }
    } else {
      node.zRotation = rotateAction.finalValue;
      rotateAction.running = false;
      rotateAction.completed = true;
    }
  }
  static evaluateFadeAlphaAction(action, node, elapsed, dt) {
    const fadeAlphaAction = action;
    if (!fadeAlphaAction.started) {
      fadeAlphaAction.delta = fadeAlphaAction.alpha - node.alpha;
      fadeAlphaAction.started = true;
    }
    if (elapsed < fadeAlphaAction.duration.value) {
      node.alpha = node.alpha + fadeAlphaAction.delta * (dt / fadeAlphaAction.duration.value);
    } else {
      node.alpha = fadeAlphaAction.alpha;
      fadeAlphaAction.running = false;
      fadeAlphaAction.completed = true;
    }
  }
  static evaluateScaleAction(action, node, elapsed, dt) {
    const scaleAction = action;
    if (!scaleAction.started) {
      scaleAction.delta = scaleAction.scale - node.scale;
      scaleAction.started = true;
    }
    if (elapsed < scaleAction.duration.value) {
      node.scale = node.scale + scaleAction.delta * (dt / scaleAction.duration.value);
    } else {
      node.scale = scaleAction.scale;
      scaleAction.running = false;
      scaleAction.completed = true;
    }
  }
  static evaluateMoveAction(action, node, elapsed) {
    const moveAction = action;
    if (!moveAction.started) {
      moveAction.dx = moveAction.point.x - node.position.x;
      moveAction.dy = moveAction.point.y - node.position.y;
      moveAction.startPoint.x = node.position.x;
      moveAction.startPoint.y = node.position.y;
      moveAction.started = true;
    }
    if (elapsed < moveAction.duration.value) {
      node.position.x = moveAction.easing(
        elapsed,
        moveAction.startPoint.x,
        moveAction.dx,
        moveAction.duration.value
      );
      node.position.y = moveAction.easing(
        elapsed,
        moveAction.startPoint.y,
        moveAction.dy,
        moveAction.duration.value
      );
    } else {
      node.position.x = moveAction.point.x;
      node.position.y = moveAction.point.y;
      moveAction.running = false;
      moveAction.completed = true;
    }
  }
  static evaluateWaitAction(action, now) {
    const waitAction = action;
    if (now > action.runStartTime + action.startOffset.value + action.duration.value) {
      waitAction.running = false;
      waitAction.completed = true;
    }
  }
  static evaluatePlayAction(node, action) {
    if (node.type !== M2NodeType.SoundPlayer) {
      throw new M2Error("Play action can only be used with a SoundPlayer");
    }
    const playAction = action;
    const soundPlayer = node;
    const soundManager = soundPlayer.game.soundManager;
    if (!playAction.started) {
      const m2Sound = soundManager.getSound(soundPlayer.soundName);
      if (m2Sound.audioBuffer) {
        m2Sound.audioBufferSource = soundManager.audioContext.createBufferSource();
        m2Sound.audioBufferSource.buffer = m2Sound.audioBuffer;
        m2Sound.audioBufferSource.onended = () => {
          playAction.running = false;
          playAction.completed = true;
          const knownDuration = performance.now() - (action.runStartTime + action.startOffset.value);
          action.duration.assign(knownDuration);
        };
        m2Sound.audioBufferSource.connect(
          soundManager.audioContext.destination
        );
        m2Sound.audioBufferSource.start();
        playAction.started = true;
      } else {
        if (m2Sound.status === M2SoundStatus.Error) {
          throw new M2Error(
            `error loading sound ${m2Sound.soundName} (url ${m2Sound.url})`
          );
        }
        console.warn(
          `Play action: audio buffer not ready for sound ${soundPlayer.soundName} (url: ${m2Sound.url}); will try next frame`
        );
        if (m2Sound.status === M2SoundStatus.Deferred) {
          soundManager.fetchDeferredSound(m2Sound);
        }
      }
    }
  }
  static evaluateCustomAction(action) {
    const customAction = action;
    customAction.callback();
    customAction.running = false;
    customAction.completed = true;
  }
  /**
   * Assigns RunStartTime to all actions in the hierarchy.
   *
   * @remarks Uses recursion to handle arbitrary level of nesting parent
   * actions within parent actions.
   *
   * @param action - the action to assign RunStartTime to
   */
  assignRunStartTimes(action, runStartTime) {
    action.runStartTime = runStartTime;
    if (action.isParent(action)) {
      action.children.forEach((child) => {
        action.assignRunStartTimes(child, runStartTime);
      });
    }
  }
  /**
   * Configures action to be run again.
   *
   * @remarks This method is called on a repeating action's children when they
   * need to be run again.
   *
   * @param action - action to restart
   * @param now - current time
   */
  restartAction(action, now) {
    action.runStartTime = now;
    action.running = true;
    action.started = true;
    if (action.type === ActionType.Play) {
      action.duration = new Futurable();
    }
    if (action.isParent(action)) {
      action.children.forEach((child) => {
        action.restartAction(child, now);
      });
      return;
    }
    action.completed = false;
  }
  /**
   * Determines if the action should be running.
   *
   * @remarks An action should be running if current time is in the interval
   * [ start time + start offset, start time + start offset + duration ]
   *
   * @param now - current time
   * @returns true if the action should be running
   */
  shouldBeRunning(now) {
    return now >= this.runStartTime + this.startOffset.value && now <= this.runStartTime + this.startOffset.value + this.duration.value;
  }
  /**
   * Creates an action that will move a node to a point on the screen.
   *
   * @param options - {@link MoveActionOptions}
   * @returns The move action
   */
  static move(options) {
    return new MoveAction(
      options.point,
      new Futurable(options.duration),
      options.easing ?? Easings.linear,
      options.runDuringTransition ?? false
    );
  }
  /**
   * Creates an action that will wait a given duration before it is considered
   * complete.
   *
   * @param options - {@link WaitActionOptions}
   * @returns The wait action
   */
  static wait(options) {
    return new WaitAction(
      new Futurable(options.duration),
      options.runDuringTransition ?? false
    );
  }
  /**
   * Creates an action that will execute a callback function.
   *
   * @param options - {@link CustomActionOptions}
   * @returns The custom action
   */
  static custom(options) {
    return new CustomAction(
      options.callback,
      options.runDuringTransition ?? false
    );
  }
  /**
   * Creates an action that will play a sound.
   *
   * @remarks This action can only be used with a SoundPlayer node.
   * It will throw an error if used with any other node type.
   *
   * @param options - {@link PlayActionOptions}
   * @returns The play action
   */
  static play(options) {
    return new PlayAction(options?.runDuringTransition ?? false);
  }
  /**
   * Creates an action that will scale the node's size.
   *
   * @remarks Scaling is relative to any inherited scaling, which is
   * multiplicative. For example, if the node's parent is scaled to 2.0 and
   * this node's action scales to 3.0, then the node will appear 6 times as
   * large as original.
   *
   * @param options - {@link ScaleActionOptions}
   * @returns The scale action
   */
  static scale(options) {
    return new ScaleAction(
      options.scale,
      new Futurable(options.duration),
      options.runDuringTransition
    );
  }
  /**
   * Creates an action that will change the node's alpha (opacity).
   *
   * @remarks Alpha has multiplicative inheritance. For example, if the node's
   * parent is alpha .5 and this node's action fades alpha to .4, then the
   * node will appear with alpha .2.
   *
   * @param options - {@link FadeAlphaActionOptions}
   * @returns The fadeAlpha action
   */
  static fadeAlpha(options) {
    return new FadeAlphaAction(
      options.alpha,
      new Futurable(options.duration),
      options.runDuringTransition
    );
  }
  /**
   * Creates an action that will rotate the node.
   *
   * @remarks Rotate actions are applied to their children. In addition to this
   * node's rotate action, all ancestors' rotate actions will also be applied.
   *
   * @param options - {@link RotateActionOptions}
   * @returns The rotate action
   */
  static rotate(options) {
    if (options.byAngle !== void 0 && options.toAngle !== void 0) {
      throw new M2Error(
        "rotate Action: cannot specify both byAngle and toAngle"
      );
    }
    if (options.byAngle === void 0 && options.toAngle === void 0) {
      throw new M2Error(
        "rotate Action: must specify either byAngle or toAngle"
      );
    }
    if (options.toAngle === void 0 && options.shortestUnitArc !== void 0) {
      throw new M2Error(
        "rotate Action: shortestUnitArc can only be specified when toAngle is provided"
      );
    }
    if (options.toAngle !== void 0 && options.shortestUnitArc === void 0) {
      options.shortestUnitArc = true;
    }
    return new RotateAction(
      options.byAngle,
      options.toAngle,
      options.shortestUnitArc,
      new Futurable(options.duration),
      options.runDuringTransition
    );
  }
  /**
   * Creates an array of actions that will be run in order.
   *
   * @remarks The next action will not begin until the current one has
   * finished. The sequence will be considered completed when the last action
   * has completed.
   *
   * @param actions - One or more actions that form the sequence
   * @returns
   */
  static sequence(actions) {
    const sequence = new SequenceAction(actions);
    sequence.children = actions;
    return sequence;
  }
  /**
   * Create an array of actions that will be run simultaneously.
   *
   * @remarks All actions within the group will begin to run at the same time.
   * The group will be considered completed when the longest-running action
   * has completed.
   *
   * @param actions - One or more actions that form the group
   * @returns
   */
  static group(actions) {
    const group = new GroupAction(actions);
    group.children = actions;
    return group;
  }
  /**
   * Creates an action that will repeat another action a given number of times.
   *
   * @param options - {@link RepeatActionOptions}
   * @returns The repeat action
   */
  static repeat(options) {
    return new RepeatAction(
      options.action,
      options.count,
      options.runDuringTransition
    );
  }
  /**
   * Creates an action that will repeat another action forever.
   *
   * @remarks A repeat forever action is a special case of a repeat action
   * where the count is set to infinity.
   *
   * @param options - {@link RepeatForeverActionOptions}
   * @returns The repeat forever action
   */
  static repeatForever(options) {
    return new RepeatForeverAction(options.action, options.runDuringTransition);
  }
  /**
   * Type guard that returns true if the action is a parent action.
   *
   * @remarks Parent actions are Group, Sequence, Repeat, and RepeatForever
   * actions.
   *
   * @param action - action to check
   * @returns true if the action is a parent action
   */
  isParent(action) {
    return action.type === ActionType.Group || action.type === ActionType.Sequence || action.type === ActionType.Repeat || action.type === ActionType.RepeatForever;
  }
  /**
   * Type guard that returns true if the action can repeat.
   *
   * @remarks Repeating actions are Repeat and RepeatForever actions.
   *
   * @param action - action to check
   * @returns true if the action is a RepeatAction or RepeatForeverAction
   */
  isRepeating(action) {
    return action.type === ActionType.Repeat || action.type === ActionType.RepeatForever;
  }
  // Note: use getter and setter for completed property because we override
  // them in SequenceAction, GroupAction, RepeatAction, and
  // RepeatForeverAction.
  /**
   * Indicates whether the action has completed.
   */
  get completed() {
    return this._completed;
  }
  set completed(value) {
    this._completed = value;
  }
}
class SequenceAction extends Action {
  constructor(actions) {
    super();
    this.type = ActionType.Sequence;
    this.children = actions;
  }
  clone() {
    const clonedChildren = this.children.map((child) => child.clone());
    const clonedAction = Action.sequence(clonedChildren);
    clonedAction.children.forEach((child) => child.key = this.key);
    clonedAction.key = this.key;
    return clonedAction;
  }
  /**
   * Indicates whether the action has completed, taking into account all its
   * child actions.
   *
   * @remarks Is read-only for parent actions.
   */
  get completed() {
    return this.children.every((child) => child.completed);
  }
  get descendants() {
    return getParentActionDescendants(this);
  }
}
class GroupAction extends Action {
  constructor(actions) {
    super();
    this.type = ActionType.Group;
    this.children = new Array();
    this.children = actions;
  }
  clone() {
    const clonedChildren = this.children.map((child) => child.clone());
    const clonedAction = Action.group(clonedChildren);
    clonedAction.children.forEach((child) => child.key = this.key);
    clonedAction.key = this.key;
    return clonedAction;
  }
  /**
   * Indicates whether the action has completed, taking into account all its
   * child actions.
   *
   * @remarks Is read-only for parent actions.
   */
  get completed() {
    return this.children.every((child) => child.completed);
  }
  get descendants() {
    return getParentActionDescendants(this);
  }
}
class RepeatAction extends Action {
  constructor(action, count, runDuringTransition = false) {
    super(runDuringTransition);
    this.type = ActionType.Repeat;
    this.completedRepetitions = 0;
    this.cumulativeDuration = 0;
    this.children = [action];
    this.count = count;
    this.duration = new Futurable();
  }
  clone() {
    if (this.children.length !== 1) {
      throw new M2Error("Repeat action must have exactly one child");
    }
    const clonedAction = Action.repeat({
      // RepeatAction always has exactly one child
      action: this.children[0].clone(),
      count: this.count,
      runDuringTransition: this.runDuringTransition
    });
    clonedAction.children[0].key = this.key;
    clonedAction.key = this.key;
    return clonedAction;
  }
  /**
   * Indicates whether the action has completed, taking into account all its
   * child actions and the number of repetitions.
   *
   * @remarks Is read-only for parent actions.
   */
  get completed() {
    return this.children.every((child) => child.completed) && this.completedRepetitions === this.count;
  }
  get descendantsAreCompleted() {
    return this.children.every((child) => child.completed);
  }
  /**
   * Indicates whether a single repetition of a repeating action has just
   * completed.
   *
   * @returns returns true if a repetition has completed
   */
  get repetitionHasCompleted() {
    return this.running && this.descendantsAreCompleted && !this.completed;
  }
  get descendants() {
    return getParentActionDescendants(this);
  }
}
class RepeatForeverAction extends RepeatAction {
  constructor(action, runDuringTransition = false) {
    super(action, Infinity, runDuringTransition);
    this.type = ActionType.RepeatForever;
    this.count = Infinity;
  }
  clone() {
    if (this.children.length !== 1) {
      throw new M2Error("RepeatForever action must have exactly one child");
    }
    const clonedAction = Action.repeatForever({
      // RepeatForeverAction always has exactly one child
      action: this.children[0].clone(),
      runDuringTransition: this.runDuringTransition
    });
    clonedAction.children[0].key = this.key;
    clonedAction.key = this.key;
    return clonedAction;
  }
}
function getParentActionDescendants(parentAction) {
  const descendants = [];
  function traverse(action) {
    if (action.isParent(action)) {
      for (const child of action.children) {
        descendants.push(child);
        traverse(child);
      }
    }
  }
  traverse(parentAction);
  return descendants;
}
class CustomAction extends Action {
  constructor(callback, runDuringTransition = false) {
    super(runDuringTransition);
    this.type = ActionType.Custom;
    this.callback = callback;
    this.duration = new Futurable(0);
  }
  clone() {
    const cloned = Action.custom({
      callback: this.callback,
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}
class PlayAction extends Action {
  constructor(runDuringTransition = false) {
    super(runDuringTransition);
    this.type = ActionType.Play;
    this.duration = new Futurable();
  }
  clone() {
    const cloned = Action.play({
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}
class WaitAction extends Action {
  constructor(duration, runDuringTransition) {
    super(runDuringTransition);
    this.type = ActionType.Wait;
    this.duration = duration;
  }
  clone() {
    const cloned = Action.wait({
      duration: this.duration.value,
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}
class MoveAction extends Action {
  constructor(point, duration, easing, runDuringTransition) {
    super(runDuringTransition);
    this.type = ActionType.Move;
    this.startPoint = { x: NaN, y: NaN };
    this.dx = 0;
    this.dy = 0;
    this.duration = duration;
    this.point = point;
    this.easing = easing;
  }
  clone() {
    const cloned = Action.move({
      point: this.point,
      duration: this.duration.value,
      easing: this.easing,
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}
class ScaleAction extends Action {
  constructor(scale, duration, runDuringTransition = false) {
    super(runDuringTransition);
    this.type = ActionType.Scale;
    this.delta = 0;
    this.duration = duration;
    this.scale = scale;
  }
  clone() {
    const cloned = Action.scale({
      scale: this.scale,
      duration: this.duration.value,
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}
class FadeAlphaAction extends Action {
  constructor(alpha, duration, runDuringTransition = false) {
    super(runDuringTransition);
    this.type = ActionType.FadeAlpha;
    this.delta = 0;
    this.duration = duration;
    this.alpha = alpha;
  }
  clone() {
    const cloned = Action.fadeAlpha({
      alpha: this.alpha,
      duration: this.duration.value,
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}
class RotateAction extends Action {
  constructor(byAngle, toAngle, shortestUnitArc, duration, runDuringTransition = false) {
    super(runDuringTransition);
    this.type = ActionType.Rotate;
    this.delta = 0;
    this.finalValue = NaN;
    this.duration = duration;
    this.byAngle = byAngle;
    this.toAngle = toAngle;
    this.shortestUnitArc = shortestUnitArc;
  }
  clone() {
    const cloned = Action.rotate({
      byAngle: this.byAngle,
      toAngle: this.toAngle,
      shortestUnitArc: this.shortestUnitArc,
      duration: this.duration.value,
      runDuringTransition: this.runDuringTransition
    });
    cloned.key = this.key;
    return cloned;
  }
}

var ActivityType = /* @__PURE__ */ ((ActivityType2) => {
  ActivityType2["Game"] = "Game";
  ActivityType2["Survey"] = "Survey";
  return ActivityType2;
})(ActivityType || {});

class CanvasKitHelpers {
  /**
   * Frees up resources that were allocated by CanvasKit.
   *
   * @remarks This frees objects created in WebAssembly by
   * canvaskit-wasm. JavaScript garbage collection won't
   * free these wasm objects.
   */
  static Dispose(objects) {
    objects.filter((o) => !o?.isDeleted()).forEach((o) => o?.delete());
  }
  static makePaint(canvasKit, color, style, isAntialiased) {
    const paint = new canvasKit.Paint();
    paint.setColor(canvasKit.Color(color[0], color[1], color[2], color[3]));
    paint.setStyle(style);
    paint.setAntiAlias(isAntialiased);
    return paint;
  }
}

class MutablePath {
  constructor() {
    this._subpaths = new Array();
    this.currentPath = new Array();
  }
  get subpaths() {
    if (this.currentPath.length > 0) {
      return [...this._subpaths, this.currentPath];
    } else {
      return this._subpaths;
    }
  }
  /**
   * Starts a new subpath at a given point.
   *
   * @param point - location at which to start the new subpath
   */
  move(point) {
    if (this.currentPath.length > 0) {
      this._subpaths.push(this.currentPath);
    }
    this.currentPath = new Array();
    this.currentPath.push(point);
  }
  /**
   * Adds a straight line to the current subpath.
   *
   * @remarks The line is added from the last point in the current subpath to
   * the given point.
   *
   * @param point - location where the line will end
   */
  addLine(point) {
    this.currentPath.push(point);
  }
  /**
   * Removes all subpaths from the shape.
   */
  clear() {
    this._subpaths = new Array();
    this.currentPath = new Array();
  }
  /**
   * Makes a deep copy.
   *
   * @returns a deep copy
   */
  duplicate() {
    const newPath = new MutablePath();
    newPath._subpaths = JSON.parse(JSON.stringify(this._subpaths));
    newPath.currentPath = JSON.parse(JSON.stringify(this.currentPath));
    return newPath;
  }
}

var ConstraintType = /* @__PURE__ */ ((ConstraintType2) => {
  ConstraintType2["topToTopOf"] = "topToTopOf";
  ConstraintType2["topToBottomOf"] = "topToBottomOf";
  ConstraintType2["bottomToTopOf"] = "bottomToTopOf";
  ConstraintType2["bottomToBottomOf"] = "bottomToBottomOf";
  ConstraintType2["startToStartOf"] = "startToStartOf";
  ConstraintType2["startToEndOf"] = "startToEndOf";
  ConstraintType2["endToEndOf"] = "endToEndOf";
  ConstraintType2["endToStartOf"] = "endToStartOf";
  return ConstraintType2;
})(ConstraintType || {});

class LayoutConstraint {
  constructor(type, alterNode) {
    // the below 3 properties are calculated from the constraint type
    // (we set them to false by default to avoid undefined warnings, but
    // they will be definitely assigned in the constructor logic)
    // the properties are used in the positioning update step
    //
    // does the constraint affect the Y or X axis? If not, then it's
    // a horizontal constraint
    this.verticalConstraint = false;
    // does the constraint apply to the focal node's "minimum" position
    // along its axis? That is, does the constraint reference the focal
    // node's "top" or "start"? Top and start are considered minimums because
    // our origin (0, 0) in the upper left.
    // If not, then the constraint applies to the focal node's "maximum"
    // position, e.g., its "bottom" or "end".
    this.focalNodeMinimum = false;
    // does the constraint apply to the alter node's "minimum" position
    // along its axis?
    this.alterNodeMinimum = false;
    this.verticalTypes = [
      ConstraintType.topToTopOf,
      ConstraintType.topToBottomOf,
      ConstraintType.bottomToTopOf,
      ConstraintType.bottomToBottomOf
    ];
    // e.g., node A
    this.focalNodeMinimumTypes = [
      ConstraintType.topToTopOf,
      ConstraintType.topToBottomOf,
      ConstraintType.startToStartOf,
      ConstraintType.startToEndOf
    ];
    // e.g., node B
    this.alterNodeMinimumTypes = [
      ConstraintType.topToTopOf,
      ConstraintType.bottomToTopOf,
      ConstraintType.startToStartOf,
      ConstraintType.endToStartOf
    ];
    this.type = type;
    this.alterNode = alterNode;
    if (this.verticalTypes.includes(type)) {
      this.verticalConstraint = true;
      if (this.focalNodeMinimumTypes.includes(type)) {
        this.focalNodeMinimum = true;
      } else {
        this.focalNodeMinimum = false;
      }
      if (this.alterNodeMinimumTypes.includes(type)) {
        this.alterNodeMinimum = true;
      } else {
        this.alterNodeMinimum = false;
      }
    } else {
      this.verticalConstraint = false;
      if (this.focalNodeMinimumTypes.includes(type)) {
        this.focalNodeMinimum = true;
      } else {
        this.focalNodeMinimum = false;
      }
      if (this.alterNodeMinimumTypes.includes(type)) {
        this.alterNodeMinimum = true;
      } else {
        this.alterNodeMinimum = false;
      }
    }
  }
}

class Uuid {
  static generate() {
    try {
      return crypto.randomUUID();
    } catch {
      let randomValue;
      try {
        randomValue = () => crypto.getRandomValues(new Uint8Array(1))[0];
      } catch {
        randomValue = () => Math.floor(Math.random() * 256);
      }
      return (1e7.toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        (c) => (Number(c) ^ randomValue() & 15 >> Number(c) / 4).toString(16)
      );
    }
  }
  /**
   * Tests if a string is a valid UUID.
   *
   * @remarks Will match UUID versions 1 through 8, plus the nil UUID.
   *
   * @param uuid - the string to test
   * @returns true if the string is a valid UUID
   */
  static isValid(uuid) {
    if (!uuid) {
      return false;
    }
    if (uuid === "00000000-0000-0000-0000-000000000000") {
      return true;
    }
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      uuid
    );
  }
}

const M2EventType = {
  ActivityStart: "ActivityStart",
  ActivityEnd: "ActivityEnd",
  ActivityCancel: "ActivityCancel",
  ActivityData: "ActivityData",
  GameWarmupStart: "GameWarmupStart",
  GameWarmupEnd: "GameWarmupEnd",
  TapDown: "TapDown",
  TapUp: "TapUp",
  TapUpAny: "TapUpAny",
  TapLeave: "TapLeave",
  PointerDown: "PointerDown",
  PointerUp: "PointerUp",
  PointerMove: "PointerMove",
  PointerLeave: "PointerLeave",
  KeyDown: "KeyDown",
  KeyUp: "KeyUp",
  Drag: "Drag",
  DragStart: "DragStart",
  DragEnd: "DragEnd",
  Composite: "Composite",
  FrameDidSimulatePhysics: "FrameDidSimulatePhysics",
  SceneSetup: "SceneSetup",
  SceneAppear: "SceneAppear",
  ScenePresent: "ScenePresent",
  NodeNew: "NodeNew",
  NodeAddChild: "NodeAddChild",
  NodeRemoveChild: "NodeRemoveChild",
  NodePropertyChange: "NodePropertyChange",
  DomPointerDown: "DomPointerDown",
  BrowserImageDataReady: "BrowserImageDataReady",
  I18nDataReadyEvent: "I18nDataReadyEvent"
};

class Equal {
  /**
   * Compares two RgbaColor objects and returns true if they are equal.
   *
   * @remarks If either of the colors is undefined, the comparison will
   * return false. RgbaColor is an array of 4 numbers, and thus is a
   * reference type. We need this method to compare two RgbaColor objects
   * for value equality.
   *
   * @param color1
   * @param color2
   * @returns
   */
  static rgbaColor(color1, color2) {
    if (!color1 || !color2) {
      return false;
    }
    return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2] && color1[3] === color2[3];
  }
  /**
   * Compares two values for deep equality.
   *
   * @remarks Supported values are string, number, boolean, null, undefined,
   * and object (note that arrays are objects in JavaScript).
   *
   * @param value1 - value to compare
   * @param value2 - value to compare
   * @returns true if values have deep equality
   */
  static value(value1, value2) {
    if (typeof value1 !== typeof value2) {
      return false;
    }
    if (value1 && typeof value1 === "object" && value2 && typeof value2 === "object") {
      return Equal.objectsDeepEqual(value1, value2);
    }
    return value1 === value2;
  }
  /**
   * Compares two objects for deep equality.
   *
   * @remarks In JavaScript, arrays are objects, so this method will also
   * compare arrays for deep equality.
   *
   * @param obj1 - object to compare
   * @param obj2 - object to compare
   * @returns true if objects have deep equality
   */
  static objectsDeepEqual(obj1, obj2) {
    if (obj1 === obj2) {
      return true;
    }
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (let i = 0; i < obj1.length; i++) {
        if (!Equal.objectsDeepEqual(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    }
    if (typeof obj1 === "object" && !Array.isArray(obj1) && obj1 !== null && typeof obj2 === "object" && !Array.isArray(obj2) && obj2 !== null) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const key of keys1) {
        if (!(key in obj2) || !Equal.objectsDeepEqual(
          obj1[key],
          obj2[key]
        )) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}

function handleDrawableOptions(drawable, options) {
  if (options.anchorPoint) {
    drawable.anchorPoint = options.anchorPoint;
  }
  if (options.zPosition !== void 0) {
    drawable.zPosition = options.zPosition;
  }
}
function handleTextOptions(text, options) {
  if (options.text !== void 0) {
    text.text = options.text;
  }
  if (options.fontName !== void 0) {
    text.fontName = options.fontName;
  }
  if (options.fontColor) {
    text.fontColor = options.fontColor;
  }
  if (options.fontSize !== void 0) {
    text.fontSize = options.fontSize;
  }
  if (options.interpolation) {
    text.interpolation = options.interpolation;
  }
  if (options.localize !== void 0) {
    text.localize = options.localize;
  }
}
function handleInterfaceOptions(node, options) {
  if (node.isDrawable) {
    handleDrawableOptions(
      node,
      options
    );
  }
  if (node.isText) {
    handleTextOptions(node, options);
  }
}
class M2Node {
  constructor(options = {}) {
    this.type = M2NodeType.Node;
    this.isDrawable = false;
    this.isShape = false;
    this.isText = false;
    this._suppressEvents = false;
    this._position = { x: 0, y: 0 };
    // position of the node in the parent coordinate system
    this._scale = 1;
    this._alpha = 1;
    this._zRotation = 0;
    this._isUserInteractionEnabled = false;
    this._draggable = false;
    this._hidden = false;
    this.layout = {};
    this.children = new Array();
    this.absolutePosition = { x: 0, y: 0 };
    // position within the root coordinate system
    this._size = { width: 0, height: 0 };
    this.absoluteScale = 1;
    this.absoluteAlpha = 1;
    this.absoluteAlphaChange = 0;
    this.actions = new Array();
    this.eventListeners = new Array();
    this.uuid = Uuid.generate();
    this.needsInitialization = true;
    // library users might put anything in userData property
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.userData = {};
    this.loopMessages = /* @__PURE__ */ new Set();
    this.nodeEvents = new Array();
    /** Is the node in a pressed state? E.g., did the user put the pointer
     * down on the node and not yet release it? */
    this.pressed = false;
    this.withinHitArea = false;
    /** Is the node in a pressed state AND is the pointer within the node's
     * hit area? For example, a user may put the pointer down on the node, but
     * then move the pointer, while still down, beyond the node's hit area. In
     * this case, pressed = true, but pressedAndWithinHitArea = false. */
    this.pressedAndWithinHitArea = false;
    /** When the node initially enters the pressed state, what is the pointer
     * offset? (offset from the canvas's origin to the pointer position). We
     * save this because it will be needed if this press then led to a drag. */
    this.pressedInitialPointerOffset = { x: NaN, y: NaN };
    /** What was the previous pointer offset when the node was in a dragging
     * state? */
    this.draggingLastPointerOffset = { x: NaN, y: NaN };
    /** Is the node in a dragging state? */
    this.dragging = false;
    /**
     * Overrides toString() and returns a human-friendly description of the node.
     *
     * @remarks Inspiration from https://stackoverflow.com/a/35361695
     */
    this.toString = () => {
      let type = this.type.toString();
      if (this.type == M2NodeType.Composite) {
        type = this.compositeType;
      }
      if (this.name !== this.uuid) {
        return `${this.name} (${type}, ${this.uuid})`;
      } else {
        return `${type} (${this.uuid})`;
      }
    };
    if (options.suppressEvents !== void 0) {
      this.suppressEvents = options.suppressEvents;
    }
    this.constructionTimeStamp = Number.isNaN(m2c2Globals?.now) || m2c2Globals?.now === void 0 ? Timer.now() : m2c2Globals.now;
    this.constructionIso8601TimeStamp = (/* @__PURE__ */ new Date()).toISOString();
    this.constructionSequence = m2c2Globals.eventSequence;
    this.options = options;
    if (options.uuid !== void 0) {
      this.uuid = options.uuid;
    }
    if (options.name === void 0) {
      this.name = this.uuid;
    } else {
      this.name = options.name;
    }
    if (options.position !== void 0) {
      this.position = options.position;
    }
    if (options.scale !== void 0) {
      this.scale = options.scale;
    }
    if (options.alpha !== void 0) {
      this.alpha = options.alpha;
    }
    if (options.zRotation !== void 0) {
      this.zRotation = options.zRotation;
    }
    if (options.isUserInteractionEnabled !== void 0) {
      this.isUserInteractionEnabled = options.isUserInteractionEnabled;
    }
    if (options.draggable !== void 0) {
      this.draggable = options.draggable;
    }
    if (options.hidden !== void 0) {
      this.hidden = options.hidden;
    }
    if (options.layout !== void 0) {
      this.layout = options.layout;
    }
  }
  // we will override this in each derived class. This method will never be called.
  initialize() {
    throw new M2Error("initialize() called in abstract base class Node.");
  }
  get completeNodeOptions() {
    throw new M2Error(
      "get completeNodeOptions() called in abstract base class Node."
    );
  }
  /**
   * Save the node's construction event in the event store.
   */
  saveNodeNewEvent() {
    if (this.suppressEvents) {
      return;
    }
    const nodeNewEvent = {
      type: M2EventType.NodeNew,
      target: this,
      nodeType: this.type,
      compositeType: this.type === M2NodeType.Composite ? this.compositeType : void 0,
      timestamp: this.constructionTimeStamp,
      iso8601Timestamp: this.constructionIso8601TimeStamp,
      nodeOptions: this.completeNodeOptions,
      sequence: this.constructionSequence
    };
    this.saveEvent(nodeNewEvent);
  }
  /**
   * Saves the node's property change event in the event store.
   *
   * @param property - property name
   * @param value - property value
   */
  savePropertyChangeEvent(property, value) {
    if (this.suppressEvents) {
      return;
    }
    const nodePropertyChangeEvent = {
      type: M2EventType.NodePropertyChange,
      target: this,
      uuid: this.uuid,
      property,
      value,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    this.saveEvent(nodePropertyChangeEvent);
  }
  /**
   * Saves the node's event.
   *
   * @remarks If the game event store is not available, the event is saved
   * within the node's `nodeEvents` event array. It will be added to the game
   * event store when the node is added to the game.
   *
   * @param event - event to save
   */
  saveEvent(event) {
    if (event.sequence === void 0) {
      event.sequence = m2c2Globals.eventSequence;
    }
    try {
      this.game.eventStore.addEvent(event);
    } catch {
      this.nodeEvents.push(event);
    }
  }
  /**
   * The game which this node is a part of.
   *
   * @remarks Throws error if node is not part of the game object.
   */
  get game() {
    const findParentScene = (node) => {
      if (!node.parent) {
        throw new M2Error(`Node ${this} has not been added to a scene.`);
      } else if (node.parent.type === M2NodeType.Scene) {
        return node.parent;
      } else {
        return findParentScene(node.parent);
      }
    };
    return findParentScene(this).game;
  }
  /**
   * Determines if the node has been added to the game object.
   *
   * @returns true if node has been added
   */
  isPartOfGame() {
    if (this.type === M2NodeType.Scene && this._game === void 0) {
      return false;
    }
    if (this.type === M2NodeType.Scene && this._game !== void 0) {
      return true;
    }
    const findParentScene = (node) => {
      if (!node.parent) {
        return void 0;
      } else if (node.parent.type === M2NodeType.Scene) {
        return node.parent;
      } else {
        return findParentScene(node.parent);
      }
    };
    return findParentScene(this)?._game !== void 0;
  }
  /**
   * Adds a child to this parent node. Throws exception if the child's name
   * is not unique with respect to other children of this parent, or if the
   * child has already been added to another parent.
   *
   * @param child - The child node to add
   */
  addChild(child) {
    const suppressEvents = this.suppressEvents || child.suppressEvents;
    if (child === this) {
      throw new M2Error(
        `Cannot add node ${child.toString()} as a child to itself.`
      );
    }
    if (child.type == M2NodeType.Scene) {
      throw new M2Error(
        `Cannot add scene ${child.toString()} as a child to node ${this.toString()}. A scene cannot be the child of a node. A scene can only be added to a game object.`
      );
    }
    if (this.children.filter((c) => c !== child).map((c) => c.name).includes(child.name)) {
      throw new M2Error(
        `Cannot add child node ${child.toString()} to parent node ${this.toString()}. A child with name "${child.name}" already exists on this parent.`
      );
    }
    let otherParents = new Array();
    if (this.isPartOfGame()) {
      otherParents = this.game.nodes.filter((e) => e.children.includes(child));
    } else {
      const descendants = this.descendants;
      if (descendants.includes(child)) {
        otherParents = descendants.filter((d) => d.children.includes(child)).map((d) => d.parent ?? void 0);
      }
    }
    if (otherParents.length === 0) {
      child.parent = this;
      this.children.push(child);
      const nodeAddChildEvent = {
        type: "NodeAddChild",
        target: this,
        uuid: this.uuid,
        childUuid: child.uuid,
        ...M2c2KitHelpers.createFrameUpdateTimestamps()
      };
      if (!suppressEvents) {
        this.saveEvent(nodeAddChildEvent);
      }
      this.saveChildEvents(child);
      return;
    }
    const firstOtherParent = otherParents.find(Boolean);
    if (firstOtherParent === this) {
      throw new M2Error(
        `Cannot add child node ${child.toString()} to parent node ${this.toString()}. This child already exists on this parent. The child cannot be added again.`
      );
    }
    throw new M2Error(
      `Cannot add child node ${child.toString()} to parent node ${this.toString()}. This child already exists on other parent node: ${firstOtherParent?.toString()}}. Remove the child from the other parent first.`
    );
  }
  /**
   * Saves the child's events to the parent node.
   *
   * @remarks When a child is added to a parent, the parent receives all the
   * child's events and saves them.
   *
   * @param child - child node to save events to parent node
   */
  saveChildEvents(child) {
    child.nodeEvents.forEach((ev) => {
      this.saveEvent(ev);
    });
    child.nodeEvents.length = 0;
    for (const c of child.children) {
      this.saveChildEvents(c);
    }
  }
  /**
   * Removes all children from the node.
   */
  removeAllChildren() {
    this.children.forEach((child) => this.removeChild(child));
  }
  /**
   * Removes the specific child from this parent node. Throws exception if
   * this parent does not contain the child.
   *
   * @param child
   */
  removeChild(child) {
    const suppressEvents = this.suppressEvents || child.suppressEvents;
    if (this.children.includes(child)) {
      child.parent = void 0;
      this.children = this.children.filter((c) => c !== child);
    } else {
      throw new M2Error(
        `cannot remove node ${child} from parent ${this} because the node is not currently a child of the parent`
      );
    }
    const nodeRemoveChildEvent = {
      type: "NodeRemoveChild",
      target: this,
      uuid: this.uuid,
      childUuid: child.uuid,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    if (!suppressEvents) {
      this.saveEvent(nodeRemoveChildEvent);
    }
  }
  /**
   * Removes the children from the parent. Throws error if the parent does not
   * contain all of the children.
   *
   * @param children - An array of children to remove from the parent node
   */
  removeChildren(children) {
    children.forEach((child) => {
      if (!this.children.includes(child)) {
        throw new M2Error(
          `cannot remove node ${child} from parent ${this} because the node is not currently a child of the parent`
        );
      }
      this.removeChild(child);
    });
  }
  /**
   * Searches all descendants by name and returns first matching node.
   *
   * @remarks Descendants are children and children of children, recursively.
   * Throws exception if no descendant with the given name is found.
   *
   * @param name - Name of the descendant node to return
   * @returns
   */
  descendant(name) {
    const descendant = this.descendants.filter((child) => child.name === name).find(Boolean);
    if (descendant === void 0) {
      throw new M2Error(
        `descendant with name ${name} not found on parent ${this.toString()}`
      );
    }
    return descendant;
  }
  /**
   * Returns all descendant nodes.
   *
   * @remarks Descendants are children and children of children, recursively.
   */
  get descendants() {
    function getChildNodesRecursive(node, nodes2) {
      nodes2.push(node);
      node.children.forEach((child) => getChildNodesRecursive(child, nodes2));
    }
    const nodes = new Array();
    this.children.forEach((child) => getChildNodesRecursive(child, nodes));
    return nodes;
  }
  /**
   * Returns all ancestor nodes, not including the node itself.
   */
  get ancestors() {
    function getAncestorsRecursive(node, nodes2) {
      if (node.type == M2NodeType.Scene || !node.parent) {
        return nodes2;
      }
      nodes2.push(node.parent);
      return getAncestorsRecursive(node.parent, nodes2);
    }
    const nodes = new Array();
    return getAncestorsRecursive(this, nodes);
  }
  /**
   * Determines if this node or ancestor is part of an active action that
   * affects it appearance.
   *
   * @remarks This is used to determine if the node should be rendered with
   * anti-aliasing or not. Anti-aliasing on some devices causes a new shader
   * to be compiled during the action, which causes jank.
   *
   * @returns true if part of active action affecting appearance
   */
  involvedInActionAffectingAppearance() {
    const nodes = this.ancestors.concat(this);
    const actions = nodes.flatMap((node) => node.actions);
    return actions.some(
      (action) => action.running && (action.type === ActionType.Move || action.type === ActionType.Scale)
    );
  }
  /**
   * Determines if the node is a transitioning Scene or a descendant of a
   * transitioning Scene.
   *
   * @returns true if transitioning
   */
  involvedInSceneTransition() {
    let rootScene;
    if (this.type === M2NodeType.Scene) {
      rootScene = this;
    } else {
      rootScene = this.parentSceneAsNode;
    }
    return rootScene._transitioning;
  }
  /**
   * Executes a callback when the user presses down on the node.
   *
   * @remarks TapDown is a pointer down (mouse click or touches begin) within
   * the bounds of the node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onTapDown(callback, options) {
    this.addEventListener(M2EventType.TapDown, callback, options);
  }
  /**
   * Executes a callback when the user releases a press, that has been fully
   * within the node, from the node.
   *
   * @remarks TapUp is a pointer up (mouse click release or touches end) within
   * the bounds of the node and the pointer, while down, has never moved
   * beyond the bounds of the node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}ue.
   */
  onTapUp(callback, options) {
    this.addEventListener(M2EventType.TapUp, callback, options);
  }
  /**
   * Executes a callback when the user releases a press from the node within
   * the bounds of the node.
   *
   * @remarks TapUpAny is a pointer up (mouse click release or touches end)
   * within the bounds of the node and the pointer, while down, is allowed to
   * have been beyond the bounds of the node during the press before the
   * release.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onTapUpAny(callback, options) {
    this.addEventListener(M2EventType.TapUpAny, callback, options);
  }
  /**
   * Executes a callback when the user moves the pointer (mouse, touches) beyond
   * the bounds of the node while the pointer is down.
   *
   * @remarks TapLeave occurs when the pointer (mouse, touches) that has
   * previously pressed the node moves beyond the bounds of the node
   * before the press release.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onTapLeave(callback, options) {
    this.addEventListener(M2EventType.TapLeave, callback, options);
  }
  /**
   * Executes a callback when the pointer first is down on the node.
   *
   * @remarks PointerDown is a pointer down (mouse click or touches begin) within
   * the bounds of the node. It occurs under the same conditions as TapDown.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onPointerDown(callback, options) {
    this.addEventListener(M2EventType.PointerDown, callback, options);
  }
  /**
   * Executes a callback when the user releases a press from the node within
   * the bounds of the node.
   *
   * @remarks PointerUp is a pointer up (mouse click release or touches end)
   * within the bounds of the node. It does not require that there was a
   * previous PointerDown on the node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onPointerUp(callback, options) {
    this.addEventListener(M2EventType.PointerUp, callback, options);
  }
  /**
   * Executes a callback when the user moves the pointer (mouse or touches)
   * within the bounds of the node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onPointerMove(callback, options) {
    this.addEventListener(M2EventType.PointerMove, callback, options);
  }
  /**
   * Executes a callback when the user moves the pointer (mouse or touches)
   * outside the bounds of the node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onPointerLeave(callback, options) {
    this.addEventListener(M2EventType.PointerLeave, callback, options);
  }
  /**
   * Executes a callback when the user begins dragging a node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onDragStart(callback, options) {
    this.addEventListener(M2EventType.DragStart, callback, options);
  }
  /**
   * Executes a callback when the user continues dragging a node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onDrag(callback, options) {
    this.addEventListener(M2EventType.Drag, callback, options);
  }
  /**
   * Executes a callback when the user stop dragging a node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onDragEnd(callback, options) {
    this.addEventListener(M2EventType.DragEnd, callback, options);
  }
  addEventListener(type, callback, callbackOptions) {
    const eventListener = {
      type,
      nodeUuid: this.uuid,
      callback
    };
    if (callbackOptions?.replaceExisting) {
      this.eventListeners = this.eventListeners.filter(
        (listener) => !(listener.nodeUuid === eventListener.nodeUuid && listener.type === eventListener.type)
      );
    }
    this.eventListeners.push(eventListener);
  }
  parseLayoutConstraints(constraints, allGameNodes) {
    const layoutConstraints = new Array();
    const constraintTypes = Object.values(ConstraintType);
    constraintTypes.forEach((constraintType) => {
      if (constraints[constraintType] !== void 0) {
        let node;
        let additionalExceptionMessage = "";
        if (typeof constraints[constraintType] === "object") {
          node = constraints[constraintType];
        } else {
          const nodeName = constraints[constraintType];
          node = allGameNodes.filter((e) => e.name === nodeName || e.uuid === nodeName).find(Boolean);
          if (!node) {
            node = this.game.materializedNodes.filter((e) => e.name === nodeName || e.uuid === nodeName).find(Boolean);
          }
          additionalExceptionMessage = `. sibling node named "${nodeName}" has not been added to the game object`;
        }
        if (node === void 0) {
          throw new M2Error(
            "could not find sibling node for constraint" + additionalExceptionMessage
          );
        }
        const layoutConstraint = new LayoutConstraint(constraintType, node);
        layoutConstraints.push(layoutConstraint);
      }
    });
    return layoutConstraints;
  }
  calculateYFromConstraint(constraint, marginTop, marginBottom, scale) {
    let y = constraint.alterNode.absolutePosition.y;
    if (constraint.alterNodeMinimum) {
      if (!(constraint.alterNode.type === M2NodeType.Scene)) {
        y = y - constraint.alterNode.size.height * 0.5 * scale;
      }
    } else {
      if (!(constraint.alterNode.type === M2NodeType.Scene)) {
        y = y + constraint.alterNode.size.height * 0.5 * scale;
      } else {
        y = y + constraint.alterNode.size.height * scale;
      }
    }
    if (constraint.focalNodeMinimum) {
      y = y + this.size.height * 0.5 * scale;
      y = y + marginTop * scale;
    } else {
      y = y - this.size.height * 0.5 * scale;
      y = y - marginBottom * scale;
    }
    return y;
  }
  calculateXFromConstraint(constraint, marginStart, marginEnd, scale) {
    let x = constraint.alterNode.absolutePosition.x;
    if (constraint.alterNodeMinimum) {
      if (!(constraint.alterNode.type === M2NodeType.Scene)) {
        x = x - constraint.alterNode.size.width * 0.5 * scale;
      }
    } else {
      if (!(constraint.alterNode.type === M2NodeType.Scene)) {
        x = x + constraint.alterNode.size.width * 0.5 * scale;
      } else {
        x = x + constraint.alterNode.size.width * scale;
      }
    }
    if (constraint.focalNodeMinimum) {
      x = x + this.size.width * 0.5 * scale;
      x = x + marginStart * scale;
    } else {
      x = x - this.size.width * 0.5 * scale;
      x = x - marginEnd * scale;
    }
    return x;
  }
  /**
   * Calculates the absolute alpha of the node, taking into account the
   * alpha of all ancestor parent nodes.
   *
   * @remarks Alpha has multiplicative inheritance from all ancestors.
   *
   * @param alpha - Opacity of the node
   * @param ancestors - Array of ancestor parent nodes
   * @returns
   */
  calculateAbsoluteAlpha(alpha, ancestors) {
    const inheritedAlpha = ancestors.reduce((acc, ancestor) => {
      return acc * ancestor.alpha;
    }, 1);
    return alpha * inheritedAlpha;
  }
  update() {
    if (this.needsInitialization) {
      this.initialize();
    }
    this.absoluteAlphaChange = this.calculateAbsoluteAlpha(this.alpha, this.ancestors) - this.absoluteAlpha;
    this.absoluteAlpha += this.absoluteAlphaChange;
    if (this.parent === void 0) {
      this.absolutePosition.x = this.position.x * this.scale;
      this.absolutePosition.y = this.position.y * this.scale;
      this.absoluteScale = this.scale;
    } else {
      this.absoluteScale = this.parent.absoluteScale * this.scale;
      if (this.layout?.constraints === void 0) {
        this.absolutePosition.x = this.parent.absolutePosition.x + this.position.x * this.parent.absoluteScale;
        this.absolutePosition.y = this.parent.absolutePosition.y + this.position.y * this.parent.absoluteScale;
      } else {
        const horizontalBias = this.layout?.constraints?.horizontalBias ?? 0.5;
        const verticalBias = this.layout?.constraints?.verticalBias ?? 0.5;
        const marginTop = this.layout?.marginTop ?? 0;
        const marginBottom = this.layout?.marginBottom ?? 0;
        const marginStart = this.layout?.marginStart ?? 0;
        const marginEnd = this.layout?.marginEnd ?? 0;
        const layoutConstraints = this.parseLayoutConstraints(
          this.layout?.constraints,
          //this.parentScene.game.nodes
          this.parentSceneAsNode.descendants
        );
        const scale = this.parent.absoluteScale;
        const yPositions = layoutConstraints.filter((constraint) => constraint.verticalConstraint).map(
          (constraint) => this.calculateYFromConstraint(
            constraint,
            marginTop,
            marginBottom,
            scale
          )
        );
        if (yPositions.length === 0) ; else if (yPositions.length === 1) {
          this.absolutePosition.y = yPositions[0];
        } else if (yPositions.length === 2) {
          this.absolutePosition.y = Math.min(yPositions[0], yPositions[1]) + verticalBias * Math.abs(yPositions[0] - yPositions[1]);
        } else ;
        const xPositions = layoutConstraints.filter((constraint) => !constraint.verticalConstraint).map(
          (constraint) => this.calculateXFromConstraint(
            constraint,
            marginStart,
            marginEnd,
            scale
          )
        );
        if (xPositions.length === 0) ; else if (xPositions.length === 1) {
          this.absolutePosition.x = xPositions[0];
        } else if (xPositions.length === 2) {
          this.absolutePosition.x = Math.min(xPositions[0], xPositions[1]) + horizontalBias * Math.abs(xPositions[0] - xPositions[1]);
        } else ;
      }
    }
    this.actions.forEach(
      (action) => Action.evaluateAction(
        action,
        this,
        m2c2Globals.now,
        m2c2Globals.deltaTime
      )
    );
    function getSiblingConstraintUuids(parent, constraints) {
      const uuids = new Array();
      if (constraints === void 0) {
        return uuids;
      }
      const constraintTypes = Object.values(ConstraintType);
      constraintTypes.forEach((constraint) => {
        if (constraints[constraint] !== void 0) {
          let siblingConstraint;
          let additionalExceptionMessage = "";
          if (typeof constraints[constraint] === "object") {
            siblingConstraint = constraints[constraint];
          } else {
            const nodeName = constraints[constraint];
            let allGameNodes;
            if (parent.type === M2NodeType.Scene) {
              allGameNodes = parent.descendants;
            } else {
              allGameNodes = parent.parentSceneAsNode.descendants;
            }
            siblingConstraint = allGameNodes.filter((e) => e.name === nodeName || e.uuid === nodeName).find(Boolean);
            if (siblingConstraint === void 0) {
              siblingConstraint = parent.game.materializedNodes.filter((e) => e.name === nodeName || e.uuid === nodeName).find(Boolean);
            }
            if (siblingConstraint === void 0) {
              additionalExceptionMessage = `. sibling node named "${nodeName}" has not been added to the game object`;
            }
          }
          if (siblingConstraint === void 0) {
            throw new M2Error(
              "error getting uuid of sibling constraint" + additionalExceptionMessage
            );
          }
          if (siblingConstraint !== parent) {
            uuids.push(siblingConstraint.uuid);
          }
        }
      });
      return uuids;
    }
    const adjList = /* @__PURE__ */ new Map();
    this.children.forEach((child) => {
      adjList.set(
        child.uuid,
        getSiblingConstraintUuids(this, child.layout?.constraints)
      );
    });
    const sortedUuids = this.findTopologicalSort(adjList);
    if (sortedUuids.length > 0) {
      const uuidsInUpdateOrder = sortedUuids.reverse();
      const childrenInUpdateOrder = new Array();
      uuidsInUpdateOrder.forEach((uuid) => {
        const child = this.children.filter((c) => c.uuid === uuid).find(Boolean);
        if (child === void 0) {
          throw new M2Error("error in dag topological sort");
        }
        childrenInUpdateOrder.push(child);
      });
      childrenInUpdateOrder.forEach((child) => child.update());
    } else {
      this.children.forEach((child) => child.update());
    }
  }
  /**
   * Draws each child node that is Drawable and is not hidden, by zPosition
   * order (highest zPosition on top).
   *
   * @param canvas - CanvasKit canvas
   */
  drawChildren(canvas) {
    this.children.filter((child) => !child.hidden && child.isDrawable).map((child) => child).sort((a, b) => a.zPosition - b.zPosition).forEach((child) => child.draw(canvas));
  }
  /**
   * Runs an action on this node.
   *
   * @remarks If the node is part of an active scene, the action runs
   * immediately. Otherwise, the action will run when the node's scene
   * becomes active. Calling run() multiple times on a node will add
   * to existing actions, not replace them.
   *
   * @param action - The action to run
   * @param key - key (string identifier) used to identify the action.
   * Only needed if the action will be referred to later
   */
  run(action, key) {
    this.actions.push(action.initialize(key));
  }
  /**
   * Remove an action from this node. If the action is running, it will be
   * stopped.
   *
   * @param key - key (string identifier) of the action to remove
   */
  removeAction(key) {
    this.actions = this.actions.filter((action) => action.key !== key);
  }
  /**
   * Remove all actions from this node. If actions are running, they will be
   * stopped.
   */
  removeAllActions() {
    while (this.actions.length) {
      this.actions.pop();
    }
  }
  getNodeOptions() {
    const nodeOptions = {
      name: this.name,
      position: this.position,
      scale: this.scale,
      alpha: this.alpha,
      zRotation: this.zRotation,
      isUserInteractionEnabled: this.isUserInteractionEnabled,
      draggable: this.draggable,
      hidden: this.hidden,
      layout: this.layout,
      uuid: this.uuid
    };
    return nodeOptions;
  }
  getDrawableOptions() {
    if (!this.isDrawable) {
      throw new M2Error(
        "getDrawableOptions() called object that is not IDrawable"
      );
    }
    const drawableOptions = {
      anchorPoint: this.anchorPoint,
      zPosition: this.zPosition
    };
    return drawableOptions;
  }
  getTextOptions() {
    if (!this.isText) {
      throw new M2Error("getTextOptions() called object that is not IText");
    }
    const textOptions = {
      text: this.text,
      fontName: this.fontName,
      fontColor: this.fontColor,
      fontSize: this.fontSize
    };
    return textOptions;
  }
  /**
   * Gets the scene that contains this node by searching up the ancestor tree recursively. Throws exception if node is not part of a scene.
   *
   * @returns Scene that contains this node
   */
  // get parentScene(): Scene {
  //   if (this.type === M2NodeType.scene) {
  //     throw new M2Error(
  //       `Node ${this} is a scene and cannot have a parent scene`
  //     );
  //   }
  //   if (this.parent && this.parent.type === M2NodeType.scene) {
  //     return this.parent as Scene;
  //   } else if (this.parent) {
  //     return this.parent.parentScene;
  //   }
  //   throw new M2Error(`Node ${this} has not been added to a scene`);
  // }
  get canvasKit() {
    return this.game.canvasKit;
  }
  get parentSceneAsNode() {
    if (this.type === M2NodeType.Scene) {
      throw new M2Error(
        `Node ${this} is a scene and cannot have a parent scene`
      );
    }
    if (this.parent && this.parent.type === M2NodeType.Scene) {
      return this.parent;
    } else if (this.parent) {
      return this.parent.parentSceneAsNode;
    }
    throw new M2Error(`Node ${this} has not been added to a scene`);
  }
  get size() {
    const node = this;
    return {
      get height() {
        return node._size.height;
      },
      set height(height) {
        if (Equal.value(node._size.height, height)) {
          return;
        }
        node._size.height = height;
        node.savePropertyChangeEvent("size", node.size);
      },
      get width() {
        return node._size.width;
      },
      set width(width) {
        if (Equal.value(node._size.width, width)) {
          return;
        }
        node._size.width = width;
        node.savePropertyChangeEvent("size", node.size);
      }
    };
  }
  set size(size) {
    if (Equal.value(this._size.width, size.width)) {
      return;
    }
    this._size = size;
    this.savePropertyChangeEvent("size", this.size);
  }
  get position() {
    const node = this;
    return {
      get x() {
        return node._position.x;
      },
      set x(x) {
        if (Equal.value(node._position.x, x)) {
          return;
        }
        node._position.x = x;
        node.savePropertyChangeEvent("position", node.position);
      },
      get y() {
        return node._position.y;
      },
      set y(y) {
        if (Equal.value(node._position.y, y)) {
          return;
        }
        node._position.y = y;
        node.savePropertyChangeEvent("position", node.position);
      }
    };
  }
  set position(position) {
    if (Equal.value(this._position, position)) {
      return;
    }
    this._position = position;
    this.savePropertyChangeEvent("position", this.position);
  }
  get zRotation() {
    return this._zRotation;
  }
  set zRotation(zRotation) {
    if (Equal.value(this._zRotation, zRotation)) {
      return;
    }
    this._zRotation = zRotation;
    this.savePropertyChangeEvent("zRotation", zRotation);
  }
  get scale() {
    return this._scale;
  }
  set scale(scale) {
    if (Equal.value(this._scale, scale)) {
      return;
    }
    this._scale = scale;
    this.savePropertyChangeEvent("scale", scale);
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(alpha) {
    if (Equal.value(this._alpha, alpha)) {
      return;
    }
    this._alpha = alpha;
    this.savePropertyChangeEvent("alpha", alpha);
  }
  get isUserInteractionEnabled() {
    return this._isUserInteractionEnabled;
  }
  set isUserInteractionEnabled(isUserInteractionEnabled) {
    if (Equal.value(this._isUserInteractionEnabled, isUserInteractionEnabled)) {
      return;
    }
    this._isUserInteractionEnabled = isUserInteractionEnabled;
    this.savePropertyChangeEvent(
      "isUserInteractionEnabled",
      isUserInteractionEnabled
    );
  }
  get hidden() {
    return this._hidden;
  }
  set hidden(hidden) {
    if (Equal.value(this._hidden, hidden)) {
      return;
    }
    this._hidden = hidden;
    this.savePropertyChangeEvent("hidden", hidden);
  }
  get draggable() {
    return this._draggable;
  }
  set draggable(draggable) {
    if (Equal.value(this._draggable, draggable)) {
      return;
    }
    this._draggable = draggable;
    this.savePropertyChangeEvent("draggable", draggable);
  }
  get suppressEvents() {
    return this._suppressEvents;
  }
  set suppressEvents(value) {
    this._suppressEvents = value;
  }
  // from https://medium.com/@konduruharish/topological-sort-in-typescript-and-c-6d5ecc4bad95
  /**
   * For a given directed acyclic graph, topological ordering of the vertices will be identified using BFS
   * @param adjList Adjacency List that represent a graph with vertices and edges
   */
  findTopologicalSort(adjList) {
    const tSort = [];
    const inDegree = /* @__PURE__ */ new Map();
    adjList.forEach((edges, vertex) => {
      if (!inDegree.has(vertex)) {
        inDegree.set(vertex, 0);
      }
      edges.forEach((edge) => {
        if (inDegree.has(edge)) {
          const inDegreeCount = inDegree.get(edge);
          if (inDegreeCount === void 0) {
            throw new M2Error(`Could not find inDegree for edge ${edge}`);
          }
          inDegree.set(edge, inDegreeCount + 1);
        } else {
          inDegree.set(edge, 1);
        }
      });
    });
    const queue = [];
    inDegree.forEach((degree, vertex) => {
      if (degree == 0) {
        queue.push(vertex);
      }
    });
    while (queue.length > 0) {
      const current = queue.shift();
      if (current === void 0) {
        throw "current vertex is undefined";
      }
      tSort.push(current);
      if (adjList.has(current)) {
        adjList.get(current)?.forEach((edge) => {
          const inDegreeCount = inDegree.get(edge);
          if (inDegreeCount === void 0) {
            throw new M2Error(`Could not find inDegree for edge ${edge}`);
          }
          if (inDegree.has(edge) && inDegreeCount > 0) {
            const newDegree = inDegreeCount - 1;
            inDegree.set(edge, newDegree);
            if (newDegree == 0) {
              queue.push(edge);
            }
          }
        });
      }
    }
    return tSort;
  }
}

class Composite extends M2Node {
  /**
   * Base Drawable object for creating custom nodes ("composites") composed of primitive nodes.
   *
   * @param options
   */
  constructor(options = {}) {
    super(options);
    this.type = M2NodeType.Composite;
    this.compositeType = "<compositeType>";
    this.isDrawable = true;
    // Drawable options
    this._anchorPoint = { x: 0.5, y: 0.5 };
    this._zPosition = 0;
    handleInterfaceOptions(this, options);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initialize() {
  }
  // anchorPoint and zPosition are properties of the IDrawable interface and
  // must be implemented in all Drawable objects. These properties are NOT
  // inherited from the M2Node class.
  get anchorPoint() {
    const node = this;
    return {
      get x() {
        return node._anchorPoint.x;
      },
      set x(x) {
        if (Equal.value(node._anchorPoint.x, x)) {
          return;
        }
        node._anchorPoint.x = x;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      },
      get y() {
        return node._anchorPoint.y;
      },
      set y(y) {
        if (Equal.value(node._anchorPoint.y, y)) {
          return;
        }
        node._anchorPoint.y = y;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      }
    };
  }
  set anchorPoint(anchorPoint) {
    if (Equal.value(this._anchorPoint, anchorPoint)) {
      return;
    }
    this._anchorPoint = anchorPoint;
    this.savePropertyChangeEvent("anchorPoint", this.anchorPoint);
  }
  get zPosition() {
    return this._zPosition;
  }
  set zPosition(zPosition) {
    if (Equal.value(this._zPosition, zPosition)) {
      return;
    }
    this._zPosition = zPosition;
    this.savePropertyChangeEvent("zPosition", zPosition);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispose() {
  }
  update() {
    super.update();
  }
  draw(canvas) {
    super.drawChildren(canvas);
  }
  /**
   * Event handler for custom events a `Composite` may generate.
   *
   * @remarks If the `Composite` generates custom events, this method is
   * necessary for the `Composite` to work in replay mode.
   *
   * @param event - event to handle
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleCompositeEvent(event) {
  }
}

const M2ImageStatus = {
  /** Image was set for lazy loading, and loading has not yet been requested. */
  Deferred: "Deferred",
  /** Image is in the process of loading (fetching, rendering, and conversion to CanvasKit Image). */
  Loading: "Loading",
  /** Image has fully finished loading and is ready to use. */
  Ready: "Ready",
  /** Error occurred in loading. */
  Error: "Error"
};

class ImageManager {
  constructor(game, baseUrls) {
    this.images = {};
    this.game = game;
    this.baseUrls = baseUrls;
    this.canvasKit = game.canvasKit;
  }
  /**
   * Loads image assets and makes them ready to use during the game initialization.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't call this because the m2c2kit
   * framework will call this automatically.
   *
   * @param browserImages - array of BrowserImage objects
   * @returns A promise that completes when all images have loaded
   */
  initializeImages(browserImages) {
    return this.loadImages(browserImages ?? []);
  }
  /**
   * Loads an array of images and makes them ready for the game.
   *
   * @remarks Using the browser's image rendering, this method converts the
   * images (png, jpg, svg, or svg string) into m2c2kit images ({@link M2Image}).
   * Rendering is an async activity, and thus this method returns a promise.
   * Rendering of all images is done in parallel.
   *
   * @param browserImages - an array of {@link BrowserImage}
   * @returns A promise that completes when all images have loaded
   */
  async loadImages(browserImages) {
    if (browserImages.length === 0) {
      return;
    }
    this.checkImageNamesForDuplicates(browserImages);
    const renderImagesPromises = browserImages.map((browserImage) => {
      let url = browserImage.url;
      if (browserImage.url && !M2c2KitHelpers.urlHasScheme(browserImage.url)) {
        url = M2c2KitHelpers.getUrlFromManifest(
          this.game,
          `${this.baseUrls.assets}/${browserImage.url}`
        );
      }
      if (browserImage.dataUrl) {
        url = browserImage.dataUrl;
      }
      const m2Image = {
        imageName: browserImage.imageName,
        url,
        originalUrl: url,
        isFallback: false,
        localize: browserImage.localize ?? false,
        svgString: browserImage.svgString,
        canvaskitImage: void 0,
        width: browserImage.width,
        height: browserImage.height,
        status: browserImage.lazy ? M2ImageStatus.Deferred : M2ImageStatus.Loading
      };
      if (m2Image.localize) {
        this.configureImageLocalization(m2Image);
      }
      this.images[browserImage.imageName] = m2Image;
      if (m2Image.status === M2ImageStatus.Loading) {
        return this.renderM2Image(m2Image);
      }
      return Promise.resolve();
    });
    await Promise.all(renderImagesPromises);
  }
  configureImageLocalization(m2Image) {
    m2Image.fallbackLocalizationUrls = new Array();
    if (m2Image.originalUrl && this.game.i18n?.locale) {
      m2Image.status = "Deferred";
      if (this.game.i18n?.fallbackLocale) {
        if (this.game.i18n?.fallbackLocale !== this.game.i18n?.baseLocale) {
          m2Image.fallbackLocalizationUrls.push(
            this.localizeImageUrl(
              m2Image.originalUrl,
              this.game.i18n.fallbackLocale
            )
          );
        }
      }
      if (this.game.i18n?.locale === this.game.i18n?.baseLocale) {
        m2Image.url = m2Image.originalUrl;
      } else {
        m2Image.url = this.localizeImageUrl(
          m2Image.originalUrl,
          this.game.i18n.locale
        );
      }
      if (m2Image.url !== m2Image.originalUrl) {
        m2Image.fallbackLocalizationUrls.push(m2Image.originalUrl);
      }
      if (this.game.i18n.missingLocalizationColor && !this.missingLocalizationImagePaint) {
        this.missingLocalizationImagePaint = CanvasKitHelpers.makePaint(
          this.canvasKit,
          this.game.i18n.missingLocalizationColor,
          this.canvasKit.PaintStyle.Stroke,
          true
        );
        this.missingLocalizationImagePaint.setStrokeWidth(4);
      }
    }
  }
  /**
   * Localizes the image URL by appending the locale to the image URL,
   * immediately before the file extension.
   *
   * @remarks For example, `https://url.com/file.png` in en-US locale
   * becomes `https://url.com/file.en-US.png`. A URL without an extension
   * will throw an error.
   *
   * @param url - url of the image
   * @param locale - locale in format of xx-YY, where xx is the language code
   * and YY is the country code
   * @returns localized url
   */
  localizeImageUrl(url, locale) {
    const extensionIndex = url.lastIndexOf(".");
    if (extensionIndex === -1) {
      throw new M2Error("URL does not have an extension");
    }
    const localizedUrl = url.slice(0, extensionIndex) + `.${locale}` + url.slice(extensionIndex);
    return localizedUrl;
  }
  /**
   * Sets an image to be re-rendered within the current locale.
   */
  reinitializeLocalizedImages() {
    Object.keys(this.game.imageManager.images).forEach((imageName) => {
      const m2Image = this.game.imageManager.images[imageName];
      if (m2Image.localize) {
        this.game.imageManager.configureImageLocalization(m2Image);
      }
    });
    const sprites = this.game.nodes.filter(
      (node) => node.type === M2NodeType.Sprite
    );
    sprites.forEach((sprite) => {
      sprite.needsInitialization = true;
    });
  }
  checkImageNamesForDuplicates(browserImages) {
    const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
    const duplicateImageNames = findDuplicates(
      browserImages.map((i) => i.imageName)
    );
    if (duplicateImageNames.length > 0) {
      throw new M2Error(
        `image names must be unique. these image names are duplicated within a game ${this.game.id}: ` + duplicateImageNames.join(", ")
      );
    }
  }
  /**
   * Makes ready to the game a m2c2kit image ({@link M2Image}) that was
   * previously loaded, but whose browser rendering was deferred.
   *
   * @internal For m2c2kit library use only
   *
   * @param image - M2Image to render and make ready
   * @returns A promise that completes when the image is ready
   */
  prepareDeferredImage(image) {
    image.status = M2ImageStatus.Loading;
    image.isFallback = false;
    return this.renderM2Image(image).catch(async () => {
      image.isFallback = true;
      while (image.fallbackLocalizationUrls?.length) {
        image.url = image.fallbackLocalizationUrls.shift();
        try {
          await this.renderM2Image(image);
        } catch (error) {
          if (image.fallbackLocalizationUrls.length === 0) {
            if (error instanceof Error) {
              throw error;
            } else {
              throw new M2Error(
                `prepareDeferredImage(): unable to render image named ${image.imageName}. image source was ${image.svgString ? "svgString" : `url: ${image.url}`}`
              );
            }
          }
        }
      }
    });
  }
  /**
   * Uses the browser to render an image to a CanvasKit Image and make it
   * ready to the game as an M2Image.
   *
   * @remarks This is complex because we rely on the browser's rendering
   * and HTML image element processing. This involves a number of steps,
   * including events, callbacks, and error handling. In addition, there
   * are two types of images to be rendered: 1) url to an image (e.g., jpg,
   * png, svg), and 2) svg string.
   *
   * @param image - The M2Image to render
   * @returns A promise of type void that resolves when the image has been
   * rendered
   */
  renderM2Image(image) {
    const imgElement = document.createElement("img");
    const renderAfterBrowserLoad = (resolve) => {
      if (!this.scratchCanvas || !this.ctx || !this.scale) {
        throw new M2Error("image manager not set up");
      }
      this.scratchCanvas.width = image.width * this.scale;
      this.scratchCanvas.height = image.height * this.scale;
      this.ctx.scale(this.scale, this.scale);
      this.ctx.clearRect(0, 0, image.width, image.height);
      this.ctx.drawImage(imgElement, 0, 0, image.width, image.height);
      this.scratchCanvas.toBlob((blob) => {
        if (!blob) {
          throw new M2Error(
            `renderM2Image(): blob is undefined for ${image.imageName}`
          );
        }
        blob.arrayBuffer().then((buffer) => {
          const canvaskitImage = this.canvasKit.MakeImageFromEncoded(buffer);
          if (!canvaskitImage) {
            throw new M2Error(
              `could not create image with name "${image.imageName}."`
            );
          }
          console.log(
            `image loaded. name: ${image.imageName}, w: ${image.width}, h: ${image.height}`
          );
          this.images[image.imageName].canvaskitImage = canvaskitImage;
          this.images[image.imageName].status = M2ImageStatus.Ready;
          const sprites = this.game.nodes.filter(
            (e) => e.type === "Sprite"
          );
          sprites.forEach((sprite) => {
            if (sprite.imageName === image.imageName) {
              sprite.needsInitialization = true;
            }
          });
          resolve();
        });
      });
    };
    return new Promise((resolve, reject) => {
      imgElement.width = image.width;
      imgElement.height = image.height;
      imgElement.crossOrigin = "Anonymous";
      imgElement.onerror = () => {
        reject(
          new Error(
            `unable to render image named ${image.imageName}. image source was ${image.svgString ? "svgString" : `url: ${image.url}`}`
          )
        );
      };
      imgElement.onload = () => {
        renderAfterBrowserLoad(resolve);
      };
      if (!image.svgString && !image.url) {
        throw new M2Error(
          `no svgString or url provided for image named ${image.imageName}`
        );
      }
      if (image.svgString && image.url) {
        throw new M2Error(
          `provide svgString or url. both were provided for image named ${image.imageName}`
        );
      }
      if (image.svgString) {
        imgElement.src = "data:image/svg+xml," + encodeURIComponent(image.svgString);
        const browserImageDataReady = {
          type: M2EventType.BrowserImageDataReady,
          target: this,
          imageName: image.imageName,
          width: image.width,
          height: image.height,
          svgString: image.svgString,
          ...M2c2KitHelpers.createFrameUpdateTimestamps()
        };
        this.game.eventStore.addEvent(browserImageDataReady);
      } else if (image.url) {
        fetch(image.url).then((response) => response.arrayBuffer()).then((data) => {
          this.arrayBufferToBase64Async(data).then((base64String) => {
            const subtype = this.inferImageSubtypeFromUrl(image.url);
            imgElement.src = "data:image/" + subtype + ";base64," + base64String;
            const browserImageDataReady = {
              type: M2EventType.BrowserImageDataReady,
              target: this,
              imageName: image.imageName,
              width: image.width,
              height: image.height,
              dataUrl: imgElement.src,
              ...M2c2KitHelpers.createFrameUpdateTimestamps()
            };
            this.game.eventStore.addEvent(browserImageDataReady);
          });
        });
      }
    });
  }
  arrayBufferToBase64Async(buffer) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result?.toString().split(",")[1] ?? "");
      };
      fileReader.onerror = reject;
      fileReader.readAsDataURL(new Blob([buffer]));
    });
  }
  inferImageSubtypeFromUrl(url) {
    if (url?.startsWith("data:image/")) {
      const parts = url.split(";");
      const subtype2 = parts[0].split("/")[1];
      return subtype2;
    }
    let subtype = "jpeg";
    if (url?.includes(".")) {
      subtype = url.split(".").pop()?.toLowerCase() ?? "jpeg";
      if (subtype === "") {
        subtype = "jpeg";
      }
    }
    if (subtype === "svg") {
      subtype = "svg+xml";
    }
    return subtype;
  }
  /**
   * Returns a m2c2kit image ({@link M2Image}) that has been loaded by the ImageManager.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't call this because they use a higher-level
   * abstraction (m2c2kit Sprite).
   *
   * @param imageName - The name given to the previously rendered image
   * @returns A m2c2kit image
   */
  getImage(imageName) {
    return this.images[imageName];
  }
  /**
   * Adds a m2c2kit image ({@link M2Image}) to the images ready for the game.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a programmer won't call this because images will be
   * automatically rendered and loaded in initializeImages().
   * One reason this function is called in-game is when the game takes
   * a screenshot and adds it as an outgoing image for transitions.
   *
   * @param image - A m2c2kit image
   */
  addImage(image) {
    this.images[image.imageName] = image;
  }
  /**
   * Returns the scratchCanvas, which is an extra, non-visible canvas in the
   * DOM we use so the native browser can render images like svg, png, jpg,
   * that we later will convert to CanvasKit Image.
   */
  get scratchCanvas() {
    if (!this._scratchCanvas) {
      this._scratchCanvas = document.createElement("canvas");
      this._scratchCanvas.id = `m2c2kit-scratch-canvas-${this.game.id}-${Math.floor(Math.random() * 1e6)}`;
      this._scratchCanvas.hidden = true;
      document.body.appendChild(this._scratchCanvas);
      const context2d = this._scratchCanvas.getContext("2d");
      if (context2d === null) {
        throw new M2Error(
          "could not get 2d canvas context from scratch canvas"
        );
      }
      this.ctx = context2d;
      this.scale = window.devicePixelRatio;
    }
    return this._scratchCanvas;
  }
  removeScratchCanvas() {
    this.ctx = void 0;
    this._scratchCanvas?.remove();
  }
}

const STRING_INTERPOLATION_CHARACTERS = "{{}}";
const TRANSLATION_INTERPOLATION_CHARACTERS = "[[]]";
class I18n {
  /**
   * The I18n class localizes text and images.
   *
   * @param game - game instance
   * @param options - {@link LocalizationOptions}
   */
  constructor(game, options) {
    this.locale = "";
    this.fallbackLocale = "en-US";
    this.baseLocale = "en-US";
    this.game = game;
    this._translation = this.mergeAdditionalTranslation(
      options.translation,
      options.additionalTranslation
    ) ?? {};
    if (this.translation.configuration?.baseLocale) {
      this.baseLocale = this.translation.configuration.baseLocale;
    }
    if (options.missingLocalizationColor) {
      this.missingLocalizationColor = options.missingLocalizationColor;
    }
    if (options.locale) {
      this.locale = options.locale;
    }
    if (options.fallbackLocale) {
      this.fallbackLocale = options.fallbackLocale;
    }
  }
  /**
   * Initializes the I18n instance and sets the initial locale.
   *
   * @remarks If the game instance has been configured to use a data store,
   * the previously used locale and fallback locale will be retrieved from the
   * data store if they have been previously set.
   */
  async initialize() {
    await this.configureInitialLocale();
  }
  async configureInitialLocale() {
    if (this.game.hasDataStores()) {
      const locale = await this.game.storeGetItem("locale");
      const fallbackLocale = await this.game.storeGetItem("fallbackLocale");
      if (typeof locale === "string" && typeof fallbackLocale === "string") {
        this.locale = locale;
        this.fallbackLocale = fallbackLocale;
        return;
      }
    }
    if (this.locale?.toLowerCase() === "auto") {
      const attemptedLocale = this.getEnvironmentLocale();
      if (attemptedLocale) {
        if (this.localeTranslationAvailable(attemptedLocale)) {
          this.locale = attemptedLocale;
          if (!this.localeTranslationAvailable(this.fallbackLocale)) {
            this.fallbackLocale = this.baseLocale;
          }
        } else {
          if (this.fallbackLocale && this.localeTranslationAvailable(this.fallbackLocale)) {
            console.warn(
              `auto locale requested, but detected locale ${attemptedLocale} does not have translation. Setting locale to fallback locale ${this.fallbackLocale}`
            );
            this.locale = this.fallbackLocale;
            this.fallbackLocale = this.baseLocale;
          } else {
            console.warn(
              `auto locale requested, but detected locale ${attemptedLocale} does not have translation, and fallback locale does not have translation or was not specified (fallback locale is ${this.fallbackLocale}). Setting locale to base locale ${this.baseLocale}.`
            );
            this.locale = this.baseLocale;
            this.fallbackLocale = this.baseLocale;
          }
        }
      } else {
        if (this.fallbackLocale && this.localeTranslationAvailable(this.fallbackLocale)) {
          console.warn(
            `auto locale requested, but environment cannot detect locale. Setting locale to fallback locale ${this.fallbackLocale}`
          );
          this.locale = this.fallbackLocale;
          this.fallbackLocale = this.baseLocale;
        } else {
          console.warn(
            `auto locale requested, but environment cannot detect locale, and fallback locale does not have translation or was not specified (fallback locale is ${this.fallbackLocale}). Setting locale to base locale ${this.baseLocale}.`
          );
          this.locale = this.baseLocale;
          this.fallbackLocale = this.baseLocale;
        }
      }
    } else {
      this.locale = this.locale ?? "";
      if (!this.fallbackLocale) {
        this.fallbackLocale = this.baseLocale;
      }
    }
  }
  localeTranslationAvailable(locale) {
    return this.translation[locale] !== void 0 || locale === this.baseLocale;
  }
  switchToLocale(locale) {
    this.locale = locale;
    this.game.nodes.filter((node) => node.isText).forEach((node) => node.needsInitialization = true);
    this.game.imageManager.reinitializeLocalizedImages();
    if (this.game && this.game.hasDataStores()) {
      this.game.storeSetItem("locale", this.locale);
      this.game.storeSetItem("fallbackLocale", this.fallbackLocale);
    }
  }
  /**
   * Returns the localized text and font information for the given key in the
   * current locale.
   *
   * @param key - Translation key
   * @param interpolation - Interpolation keys and values to replace
   * string interpolation placeholders in the translated text
   * @returns object with the localized text, font information, and whether the
   * translation is a fallback.
   */
  getTextLocalization(key, interpolation) {
    const primaryResult = this.attemptTranslation(key, interpolation);
    if (primaryResult.isFallbackOrMissingTranslation) {
      const placeholdersResult = this.handleTranslationPlaceholders(
        key,
        primaryResult,
        interpolation
      );
      if (placeholdersResult) {
        if (interpolation !== void 0) {
          placeholdersResult.text = this.insertInterpolations(
            STRING_INTERPOLATION_CHARACTERS,
            placeholdersResult.text,
            interpolation
          );
        }
        return placeholdersResult;
      }
    }
    return primaryResult;
  }
  /**
   *
   * @param key - Translation key to be translated
   * @param interpolation - String interpolation keys and values to replace
   * @returns result object with the localized text, font
   */
  attemptTranslation(key, interpolation) {
    let tf = this.tf(key, interpolation);
    let isFallbackOrMissingTranslation = false;
    if (tf?.text === void 0) {
      tf = this.tf(key, {
        useFallbackLocale: true,
        ...interpolation
      });
      isFallbackOrMissingTranslation = true;
    }
    const text = tf?.text ?? key;
    return {
      text,
      fontSize: tf?.fontSize,
      fontName: tf?.fontName,
      fontNames: tf?.fontNames,
      isFallbackOrMissingTranslation
    };
  }
  /**
   * Handles translation placeholders in a string.
   *
   * @remarks The value of a translation placeholder (text within `[[]]`)
   * may also contain string interpolation placeholders (`{{}}`), so we need
   * to handle that as well.
   *
   * @param key - Translation key for the string to be localized
   * @param initialResult - Initial translation result for the string
   * @param interpolation - Interpolation keys and values to replace
   * interpolation placeholders in the translated text
   * @returns result object with the localized text,
   */
  handleTranslationPlaceholders(key, initialResult, interpolation) {
    const placeholders = this.getTranslationPlaceholders(key);
    if (placeholders.length === 0) {
      return null;
    }
    const fontProps = {
      size: /* @__PURE__ */ new Set(),
      name: /* @__PURE__ */ new Set(),
      names: /* @__PURE__ */ new Set()
    };
    const interpolationMap = {};
    let isFallbackOrMissingTranslation = false;
    placeholders.forEach((placeholderKey) => {
      const placeholderResult = this.translatePlaceholder(
        placeholderKey,
        fontProps,
        interpolation
      );
      interpolationMap[placeholderKey] = placeholderResult.text;
      isFallbackOrMissingTranslation = isFallbackOrMissingTranslation || placeholderResult.isFallback;
    });
    this.warnConflictingFontProperties(key, fontProps);
    const text = this.insertInterpolations(
      TRANSLATION_INTERPOLATION_CHARACTERS,
      key,
      interpolationMap
    );
    const fontSize = initialResult.fontSize || (fontProps.size.size > 0 ? [...fontProps.size][0] : void 0);
    const fontName = initialResult.fontName || (fontProps.name.size > 0 ? [...fontProps.name][0] : void 0);
    const fontNames = initialResult.fontNames || (fontProps.names.size > 0 ? [...fontProps.names][0].split(",") : void 0);
    return {
      text,
      fontSize,
      fontName,
      fontNames,
      isFallbackOrMissingTranslation
    };
  }
  /**
   * Translates a translation placeholder key to its text and collects font properties.
   *
   * @param placeholderKey - Translation key for the placeholder
   * @param fontProps - Font properties sets to collect font information
   * @param interpolation - Interpolation keys and values to replace
   * string interpolation placeholders in the translated text
   * @returns result object with the translated text and whether it is a fallback translation
   */
  translatePlaceholder(placeholderKey, fontProps, interpolation) {
    let tf = this.tf(placeholderKey, interpolation);
    let isFallback = false;
    if (tf?.text === void 0) {
      tf = this.tf(placeholderKey, {
        useFallbackLocale: true,
        ...interpolation
      });
      isFallback = true;
    }
    if (tf?.fontSize !== void 0) {
      fontProps.size.add(tf.fontSize);
    }
    if (tf?.fontName !== void 0) {
      fontProps.name.add(tf.fontName);
    }
    if (tf?.fontNames !== void 0) {
      fontProps.names.add(tf.fontNames.sort().join(","));
    }
    return {
      text: tf?.text ?? placeholderKey,
      isFallback
    };
  }
  /**
   * Extracts translation key placeholders from a string.
   *
   * @remarks Translation key placeholders are denoted by double square brackets,
   * e.g., "The translated word is [[RED]]", and RED is a key for translation.
   *
   * @param s - string to search for placeholders
   * @returns an array of placeholders found in the string, without the square
   * brackets
   */
  getTranslationPlaceholders(s) {
    const [open, close] = [
      TRANSLATION_INTERPOLATION_CHARACTERS.slice(0, 2),
      TRANSLATION_INTERPOLATION_CHARACTERS.slice(2)
    ];
    const escapedOpen = open.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escapedClose = close.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`${escapedOpen}(.*?)${escapedClose}`, "g");
    const matches = s.match(regex);
    if (!matches) {
      return [];
    }
    return matches.map(
      (placeholder) => placeholder.slice(open.length, -close.length).trim()
    );
  }
  /**
   * Logs warnings if the string to be localized has conflicting font
   * properties.
   *
   * @remarks This can happen due to multiple placeholders in the string
   * that specify different font sizes, font names, or font names arrays.
   *
   * @param key - Translation key for which the string is being localized
   * @param fontProps - font properties sets collected from the placeholders
   */
  warnConflictingFontProperties(key, fontProps) {
    if (fontProps.size.size > 1) {
      console.warn(
        `i18n: placeholders set multiple different font sizes in string to be localized. Only one will be used. String: ${key}`
      );
    }
    if (fontProps.name.size > 1) {
      console.warn(
        `i18n: placeholders set multiple different font names within string to be localized. Only one will be used. String: ${key}`
      );
    }
    if (fontProps.names.size > 1) {
      console.warn(
        `i18n: placeholders set multiple different font names arrays within string to be localized. Only one will be used. String: ${key}`
      );
    }
  }
  /**
   * Returns the translation text for the given key in the current locale.
   *
   * @remarks Optional interpolation keys and values can be provided to replace
   * placeholders in the translated text. Placeholders are denoted by double
   * curly braces.
   *
   * @param key - key to look up in the translation
   * @param options - `TranslationOptions`, such as interpolation keys/values
   * and whether to translate using the fallback locale
   * @returns the translation text for the key in the current locale, or
   * undefined if the key is not found
   *
   * @example
   *
   * ```
   * const translation: Translation = {
   *   "en-US": {
   *     "GREETING": "Hello, {{name}}."
   *   }
   * }
   * ...
   * i18n.t("GREETING", { name: "World" }); // returns "Hello, World."
   *
   * ```
   */
  t(key, options) {
    const { useFallbackLocale, ...interpolationMap } = options ?? {};
    if (useFallbackLocale !== true) {
      const t = this.translation[this.locale]?.[key];
      if (this.isStringOrTextWithFontCustomization(t)) {
        return this.insertInterpolations(
          STRING_INTERPOLATION_CHARACTERS,
          this.getKeyText(t),
          interpolationMap
        );
      }
      return void 0;
    }
    const fallbackT = this.translation[this.fallbackLocale]?.[key];
    if (this.isStringOrTextWithFontCustomization(fallbackT)) {
      return this.insertInterpolations(
        STRING_INTERPOLATION_CHARACTERS,
        this.getKeyText(fallbackT),
        interpolationMap
      );
    }
    return void 0;
  }
  /**
   * Returns the translation text and font information for the given key in the
   * current locale.
   *
   * @remarks Optional interpolation keys and values can be provided to replace
   * placeholders in the translated text. Placeholders are denoted by double
   * curly braces. See method {@link I18n.t()} for interpolation example.
   *
   * @param key - key to look up in the translation
   * @param options - `TranslationOptions`, such as interpolation keys/values
   * and whether to translate using the fallback locale
   * @returns the translation text and font information for the key in the
   * current locale, or undefined if the key is not found
   */
  tf(key, options) {
    const { useFallbackLocale, ...interpolationMap } = options ?? {};
    if (useFallbackLocale !== true) {
      const t = this.translation[this.locale]?.[key];
      if (this.isStringOrTextWithFontCustomization(t)) {
        const tf = this.getKeyTextAndFont(t, this.locale);
        if (tf.text) {
          tf.text = this.insertInterpolations(
            STRING_INTERPOLATION_CHARACTERS,
            tf.text,
            interpolationMap
          );
        }
        return tf;
      }
      return void 0;
    }
    const fallbackTranslation = this.translation[this.fallbackLocale]?.[key];
    if (this.isStringOrTextWithFontCustomization(fallbackTranslation)) {
      const tf = this.getKeyTextAndFont(
        fallbackTranslation,
        this.fallbackLocale
      );
      if (tf.text) {
        tf.text = this.insertInterpolations(
          STRING_INTERPOLATION_CHARACTERS,
          tf.text,
          interpolationMap
        );
      }
      return tf;
    }
    return void 0;
  }
  getKeyText(t) {
    if (this.isTextWithFontCustomization(t)) {
      return t.text;
    }
    return t;
  }
  getKeyTextAndFont(t, locale) {
    let fontSize = void 0;
    let fontNames = new Array();
    if (this.isString(this.translation[locale]?.fontName)) {
      fontNames.push(this.translation[locale].fontName);
    } else if (this.isStringArray(this.translation[locale]?.fontName)) {
      fontNames.push(...this.translation[locale].fontName);
    } else {
      fontNames.push("default");
    }
    let text;
    if (this.isTextWithFontCustomization(t)) {
      text = t.text;
      fontSize = t.fontSize;
      if (this.isString(t.additionalFontName)) {
        fontNames.push(t.additionalFontName);
      }
      if (this.isStringArray(t.additionalFontName)) {
        fontNames.push(...t.additionalFontName);
      }
      if (t.overrideFontName) {
        fontNames.length = 0;
        if (this.isString(t.overrideFontName)) {
          fontNames.push(t.overrideFontName);
        }
        if (this.isStringArray(t.overrideFontName)) {
          fontNames.push(...t.overrideFontName);
        }
      }
    } else {
      text = t;
    }
    fontNames = fontNames.filter((f) => f !== "default");
    switch (fontNames.length) {
      case 0:
        return { text, fontSize };
      case 1:
        return { text, fontSize, fontName: fontNames[0] };
      default:
        return { text, fontSize, fontNames };
    }
  }
  insertInterpolations(specialChars, text, options) {
    if (!options) {
      return text;
    }
    const [open, close] = [specialChars.slice(0, 2), specialChars.slice(2)];
    const escapedOpen = open.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escapedClose = close.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`${escapedOpen}(.*?)${escapedClose}`, "g");
    return text.replace(regex, (_match, key) => {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        return options[key];
      } else {
        throw new M2Error(
          `insertInterpolations(): placeholder "${key}" not found. Text was ${text}, provided interpolation was ${JSON.stringify(options)}`
        );
      }
    });
  }
  get translation() {
    return this._translation;
  }
  set translation(value) {
    this._translation = value;
  }
  getEnvironmentLocale() {
    return (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language) ?? "";
  }
  mergeAdditionalTranslation(baseTranslation, additionalTranslation) {
    if (!baseTranslation && !additionalTranslation) {
      return void 0;
    }
    if (!additionalTranslation) {
      return baseTranslation;
    }
    if (!baseTranslation) {
      return additionalTranslation;
    }
    const result = {};
    const processedLocales = new Array();
    for (const locale in baseTranslation) {
      processedLocales.push(locale);
      result[locale] = {
        ...baseTranslation[locale],
        ...additionalTranslation[locale]
      };
    }
    for (const locale in additionalTranslation) {
      if (processedLocales.includes(locale)) {
        continue;
      }
      result[locale] = additionalTranslation[locale];
    }
    return result;
  }
  static makeLocalizationParameters() {
    const localizationParameters = JSON.parse(
      JSON.stringify({
        locale: {
          type: ["string", "null"],
          default: null,
          description: `Locale to use for localization, or "auto" to request from the environment.`
        },
        fallback_locale: {
          type: ["string", "null"],
          default: null,
          description: `Locale to use if requested locale translation is not available, or if "auto" locale was requested and environment cannot provide a locale.`
        },
        missing_localization_color: {
          type: ["array", "null"],
          default: null,
          description: "Font color for strings that are missing translation and outline color for images that are missing localization, [r,g,b,a].",
          items: {
            type: "number"
          }
        },
        translation: {
          type: ["object", "null"],
          default: null,
          description: "Additional translation for localization."
        }
      })
    );
    return localizationParameters;
  }
  isTextWithFontCustomization(value) {
    return value?.text !== void 0;
  }
  isStringOrTextWithFontCustomization(value) {
    return typeof value === "string" || this.isTextWithFontCustomization(value);
  }
  isStringArray(value) {
    return Array.isArray(value) && value.every((item) => typeof item === "string");
  }
  isString(value) {
    return typeof value === "string";
  }
}

const EventStoreMode = {
  Disabled: "Disabled",
  Record: "Record",
  Replay: "Replay"
};
class EventStore {
  constructor() {
    this.events = new Array();
    this.replayBeginTimestamp = NaN;
    this.firstTimestamp = NaN;
    this.replayThoughSequence = Number.MAX_VALUE;
    this.serializedEventsBeforeReplay = "";
    this.mode = EventStoreMode.Disabled;
  }
  serializeEvent(event) {
    const target = event.target;
    if (event.type === M2EventType.NodeNew && event.nodeOptions?.layout?.constraints !== void 0) {
      const constraints = event.nodeOptions?.layout?.constraints;
      const constraintsWithStringKeys = {};
      for (const constraintType in constraints) {
        if (constraintType === "horizontalBias" || constraintType === "verticalBias") {
          constraintsWithStringKeys[constraintType] = constraints[constraintType];
          continue;
        }
        const node = constraints[constraintType];
        if (node instanceof M2Node) {
          constraintsWithStringKeys[constraintType] = node.uuid;
        }
      }
      event.target = target.uuid;
      event.nodeOptions.layout.constraints = constraintsWithStringKeys;
      const s2 = JSON.stringify(event);
      event.target = target;
      event.nodeOptions.layout.constraints = constraints;
      return s2;
    }
    if (target instanceof M2Node) {
      event.target = target.uuid;
      const s2 = JSON.stringify(event);
      event.target = target;
      return s2;
    }
    if (target instanceof Element) {
      event.target = target.nodeName;
      const s2 = JSON.stringify(event);
      event.target = target;
      return s2;
    }
    if (target instanceof ImageManager) {
      event.target = "ImageManager";
      const s2 = JSON.stringify(event);
      event.target = target;
      return s2;
    }
    if (target instanceof I18n) {
      event.target = "I18n";
      const s2 = JSON.stringify(event);
      event.target = target;
      return s2;
    }
    event.target = "object";
    const s = JSON.stringify(event);
    event.target = target;
    return s;
  }
  addEvent(event) {
    if (this.mode === EventStoreMode.Record) {
      if (event.sequence === void 0) {
        event.sequence = m2c2Globals.eventSequence;
      }
      const s = this.serializeEvent(event);
      this.events.push(JSON.parse(s));
    }
  }
  addEvents(events) {
    events.forEach((event) => {
      this.addEvent(event);
    });
  }
  clearEvents() {
    this.events = [];
  }
  record() {
    this.mode = EventStoreMode.Record;
  }
  replay(events) {
    if (events) {
      this.events = events;
    }
    if (this.events.length === 0) {
      if (this.serializedEventsBeforeReplay !== "") {
        this.events = JSON.parse(this.serializedEventsBeforeReplay);
      } else {
        console.log("Event store has no events to replay.");
        return;
      }
    }
    this.mode = EventStoreMode.Replay;
    this.replayBeginTimestamp = Timer.now();
    this.sortEventStore(this.events);
    if (this.serializedEventsBeforeReplay === "") {
      this.serializedEventsBeforeReplay = JSON.stringify(this.events);
    }
    this.firstTimestamp = this.events[0].timestamp;
    console.log(
      `Event store has ${this.events.length} events. Replay beginning.`
    );
    const sequenceInput = document.getElementById("sequence-number");
    if (sequenceInput) {
      this.replayThoughSequence = parseInt(
        sequenceInput.value
      );
    }
  }
  getEvents() {
    this.sortEventStore(this.events);
    return this.events;
  }
  dequeueEvents(timestamp) {
    const events = new Array();
    const replayTimestamp = timestamp - this.replayBeginTimestamp + this.firstTimestamp;
    while (this.events.length > 0 && this.events[0].timestamp <= replayTimestamp) {
      const event = this.events.shift();
      if (!event) {
        throw new M2Error("EventStore.dequeueEvents(): undefined event");
      }
      if (event.sequence !== void 0 && event.sequence > this.replayThoughSequence) {
        continue;
      }
      events.push(event);
    }
    return events;
  }
  get eventQueueLength() {
    return this.events.length;
  }
  /**
   * Sorts the events in the event store.
   *
   * @remarks The events are sorted by sequence number in ascending order.
   */
  sortEventStore(events) {
    events.sort((a, b) => {
      if (a.sequence === void 0 || b.sequence === void 0) {
        throw new M2Error("EventStore.sortEventStore(): undefined sequence");
      }
      if (a.sequence !== b.sequence) {
        return a.sequence - b.sequence;
      }
      return 0;
    });
  }
}

var LabelHorizontalAlignmentMode = /* @__PURE__ */ ((LabelHorizontalAlignmentMode2) => {
  LabelHorizontalAlignmentMode2[LabelHorizontalAlignmentMode2["Center"] = 0] = "Center";
  LabelHorizontalAlignmentMode2[LabelHorizontalAlignmentMode2["Left"] = 1] = "Left";
  LabelHorizontalAlignmentMode2[LabelHorizontalAlignmentMode2["Right"] = 2] = "Right";
  return LabelHorizontalAlignmentMode2;
})(LabelHorizontalAlignmentMode || {});

const M2FontStatus = {
  /** Font was set for lazy loading, and loading has not yet been requested. */
  Deferred: "Deferred",
  /** Font is in the process of loading. */
  Loading: "Loading",
  /** Font has fully finished loading and is ready to use. */
  Ready: "Ready"};

const TAG_NAME = {
  UNDERLINE: "u",
  ITALIC: "i",
  BOLD: "b",
  STRIKETHROUGH: "s",
  OVERLINE: "o"
};
class Label extends M2Node {
  /**
   * Single or multi-line text formatted and rendered on the screen.
   *
   * @remarks Label (in contrast to TextLine) has enhanced text support for
   * line wrapping, centering/alignment, and background colors.
   *
   * @param options - {@link LabelOptions}
   */
  constructor(options = {}) {
    super(options);
    this.type = M2NodeType.Label;
    this.isDrawable = true;
    this.isText = true;
    // Drawable options
    this._anchorPoint = { x: 0.5, y: 0.5 };
    this._zPosition = 0;
    // Text options
    this._text = "";
    // public getter/setter is below
    this._fontColor = Constants.DEFAULT_FONT_COLOR;
    // public getter/setter is below
    this._fontSize = Constants.DEFAULT_FONT_SIZE;
    // public getter/setter is below
    this._interpolation = {};
    // Label options
    this._horizontalAlignmentMode = LabelHorizontalAlignmentMode.Center;
    // public getter/setter is below
    this._localize = true;
    this.localizedFontNames = [];
    this.textAfterLocalization = "";
    this.plainText = "";
    this.styleSegments = [];
    handleInterfaceOptions(this, options);
    if (options.horizontalAlignmentMode) {
      this.horizontalAlignmentMode = options.horizontalAlignmentMode;
    }
    if (options.preferredMaxLayoutWidth !== void 0) {
      this.preferredMaxLayoutWidth = options.preferredMaxLayoutWidth;
    }
    if (options.backgroundColor) {
      this.backgroundColor = options.backgroundColor;
    }
    if (options.fontNames) {
      this.fontNames = options.fontNames;
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.getTextOptions(),
      horizontalAlignmentMode: this.horizontalAlignmentMode,
      preferredMaxLayoutWidth: this.preferredMaxLayoutWidth,
      backgroundColor: this.backgroundColor,
      fontNames: this.fontNames
    };
  }
  initialize() {
    let ckTextAlign = this.canvasKit.TextAlign.Center;
    switch (this.horizontalAlignmentMode) {
      case LabelHorizontalAlignmentMode.Center:
        ckTextAlign = this.canvasKit.TextAlign.Center;
        break;
      case LabelHorizontalAlignmentMode.Left:
        ckTextAlign = this.canvasKit.TextAlign.Left;
        break;
      case LabelHorizontalAlignmentMode.Right:
        ckTextAlign = this.canvasKit.TextAlign.Right;
        break;
      default:
        throw new M2Error("unknown horizontalAlignmentMode");
    }
    if (!this.text) {
      this.text = "";
    }
    let textColor = this.canvasKit.Color(
      this.fontColor[0],
      this.fontColor[1],
      this.fontColor[2],
      this.fontColor[3]
    );
    const i18n = this.game.i18n;
    if (i18n && this.localize !== false) {
      const textLocalization = i18n.getTextLocalization(
        this.text,
        this.interpolation
      );
      this.textAfterLocalization = textLocalization.text;
      this.localizedFontSize = textLocalization.fontSize;
      this.localizedFontName = textLocalization.fontName;
      this.localizedFontNames = textLocalization.fontNames ?? [];
      if (textLocalization.isFallbackOrMissingTranslation && i18n.missingLocalizationColor) {
        textColor = this.canvasKit.Color(
          i18n.missingLocalizationColor[0],
          i18n.missingLocalizationColor[1],
          i18n.missingLocalizationColor[2],
          i18n.missingLocalizationColor[3]
        );
      }
    } else {
      this.textAfterLocalization = this.text;
    }
    const parsedText = this.parseFormattedText(this.textAfterLocalization);
    this.plainText = parsedText.plainText;
    this.styleSegments = parsedText.styleSegments;
    if (this.fontName && this.fontNames) {
      throw new M2Error("cannot specify both fontName and fontNames");
    }
    const fontManager = this.game.fontManager;
    const requiredFonts = this.getRequiredLabelFonts(fontManager);
    requiredFonts.forEach((font) => {
      if (font.status === M2FontStatus.Deferred) {
        fontManager.prepareDeferredFont(font);
        return;
      }
    });
    if (!requiredFonts.every((font) => font.status === M2FontStatus.Ready)) {
      return;
    }
    this.paraStyle = new this.canvasKit.ParagraphStyle({
      textStyle: {},
      textAlign: ckTextAlign
    });
    if (this.builder) {
      this.builder.delete();
    }
    this.builder = this.canvasKit.ParagraphBuilder.MakeFromFontProvider(
      this.paraStyle,
      fontManager.provider
    );
    if (!this._backgroundPaint) {
      this._backgroundPaint = new this.canvasKit.Paint();
    }
    if (!this._fontPaint) {
      this._fontPaint = new this.canvasKit.Paint();
    }
    this.fontPaint.setColor(textColor);
    this.fontPaint.setAlphaf(this.absoluteAlpha);
    if (this.backgroundColor) {
      this.backgroundPaint.setColor(this.backgroundColor);
      this.backgroundPaint.setAlphaf(this.absoluteAlpha);
    } else {
      this.backgroundPaint.setColor(this.canvasKit.Color(0, 0, 0, 0));
    }
    const defaultStyle = {
      fontFamilies: requiredFonts.map((font) => font.fontName),
      fontSize: (this.localizedFontSize ?? this.fontSize) * m2c2Globals.canvasScale,
      fontStyle: {
        weight: this.canvasKit.FontWeight.Normal,
        width: this.canvasKit.FontWidth.Normal,
        slant: this.canvasKit.FontSlant.Upright
      },
      // Normal font style
      decoration: 0,
      // No decoration
      decorationThickness: 1,
      // Default decoration thickness
      decorationStyle: this.canvasKit.DecorationStyle.Solid,
      heightMultiplier: -1,
      // Providing -1, rather than 1.0, gives default height multiplier
      halfLeading: false,
      letterSpacing: 0,
      wordSpacing: 0
    };
    this.builder.pushPaintStyle(
      defaultStyle,
      this.fontPaint,
      this.backgroundPaint
    );
    this.addStyleSegmentsToParagraphBuilder(
      this.builder,
      this.styleSegments,
      defaultStyle
    );
    if (this.paragraph) {
      this.paragraph.delete();
    }
    this.paragraph = this.builder.build();
    const preferredWidth = (
      //this.preferredMaxLayoutWidth ?? this.parentScene.game.canvasCssWidth;
      this.preferredMaxLayoutWidth ?? m2c2Globals.canvasCssWidth
    );
    let calculatedWidth = preferredWidth;
    if (preferredWidth === 0 || this.layout.width === 0) {
      if (this.parent === void 0) {
        throw new M2Error(
          "width is set to match parent, but node has no parent"
        );
      }
      const marginStart = this.layout.marginStart ?? 0;
      const marginEnd = this.layout.marginEnd ?? 0;
      calculatedWidth = this.parent.size.width - (marginStart + marginEnd);
    }
    this.paragraph.layout(calculatedWidth * m2c2Globals.canvasScale);
    if (preferredWidth === 0 || this.layout.width === 0) {
      this.size.width = calculatedWidth;
    } else {
      this.paragraph.layout(Math.ceil(this.paragraph.getLongestLine()));
      this.size.width = this.paragraph.getMaxWidth() / m2c2Globals.canvasScale;
    }
    this.size.height = this.paragraph.getHeight() / m2c2Globals.canvasScale;
    this.needsInitialization = false;
  }
  /**
   * Parses text with formatting tags and returns plain text and style segments.
   * Supports <b> for bold, <i> for italics, and <u> for underline.
   * Properly handles nested tags like <b><u>bold and underlined</u></b>.
   * Throws errors for malformed tags, but treats unknown tags as plain text.
   *
   * @param text - The text with formatting tags
   * @returns The parsed text result
   * @throws Error if tags are improperly nested or unclosed
   */
  parseFormattedText(text) {
    let plainText = "";
    const styleChanges = [];
    const tagStack = [];
    const validTags = /* @__PURE__ */ new Set([
      TAG_NAME.UNDERLINE,
      TAG_NAME.BOLD,
      TAG_NAME.ITALIC,
      TAG_NAME.STRIKETHROUGH,
      TAG_NAME.OVERLINE
    ]);
    const tagPattern = /<\/?([^>]+)>/g;
    let lastIndex = 0;
    let plainIndex = 0;
    let match = null;
    const getPosition = (index) => {
      let line = 1;
      let column = 1;
      for (let i = 0; i < index; i++) {
        if (text[i] === "\n") {
          line++;
          column = 1;
        } else {
          column++;
        }
      }
      return `line ${line}, column ${column}`;
    };
    while ((match = tagPattern.exec(text)) !== null) {
      const fullTag = match[0];
      const tagName = match[1];
      const isClosing = fullTag.charAt(1) === "/";
      const position = getPosition(match.index);
      if (!validTags.has(tagName)) {
        const beforeTag2 = text.substring(lastIndex, match.index);
        plainText += beforeTag2;
        plainIndex += beforeTag2.length;
        plainText += fullTag;
        plainIndex += fullTag.length;
        lastIndex = match.index + fullTag.length;
        continue;
      }
      const beforeTag = text.substring(lastIndex, match.index);
      plainText += beforeTag;
      plainIndex += beforeTag.length;
      if (isClosing) {
        if (tagStack.length === 0) {
          throw new M2Error(
            `Label has closing tag </${tagName}> at ${position} without matching opening tag. Text is: ${text}`
          );
        }
        const lastOpenTag = tagStack.pop();
        if (lastOpenTag !== tagName) {
          throw new M2Error(
            `Label has improperly nested tags at ${position}. Expected </${lastOpenTag}> but found </${tagName}>. Tags must be properly nested. Text is: ${text}`
          );
        }
        styleChanges.push({
          position: plainIndex,
          style: tagName,
          isStart: false
        });
      } else {
        tagStack.push(tagName);
        styleChanges.push({
          position: plainIndex,
          style: tagName,
          isStart: true
        });
      }
      lastIndex = match.index + fullTag.length;
    }
    plainText += text.substring(lastIndex);
    if (tagStack.length > 0) {
      throw new M2Error(
        `Label has unclosed format tags: <${tagStack.join(">, <")}>. All tags must be closed. Text is: ${text}`
      );
    }
    const activeStyles = /* @__PURE__ */ new Set();
    const segments = [];
    let lastPosition = 0;
    styleChanges.sort((a, b) => a.position - b.position);
    for (const change of styleChanges) {
      if (change.position > lastPosition && activeStyles.size > 0) {
        segments.push({
          start: lastPosition,
          end: change.position,
          styles: new Set(activeStyles)
          // Create a copy of the current styles
        });
      }
      if (change.isStart) {
        activeStyles.add(change.style);
      } else {
        activeStyles.delete(change.style);
      }
      lastPosition = change.position;
    }
    return {
      plainText,
      styleSegments: segments
    };
  }
  /**
   * Adds text segments with consistent styling to the paragraph builder.
   *
   * @param builder - {@link ParagraphBuilder}
   * @param styleSegments - Segments of text with consistent styling
   * @param defaultStyle - Default style to apply
   */
  addStyleSegmentsToParagraphBuilder(builder, styleSegments, defaultStyle) {
    if (styleSegments.length === 0) {
      builder.addText(this.plainText);
    } else {
      let lastIndex = 0;
      for (const segment of styleSegments) {
        if (segment.start > lastIndex) {
          this.addTextWithStyle(
            builder,
            this.plainText.substring(lastIndex, segment.start),
            defaultStyle
          );
        }
        const styleModifiers = {};
        if (segment.styles.has(TAG_NAME.BOLD)) {
          styleModifiers.fontStyle = {
            ...styleModifiers.fontStyle || defaultStyle.fontStyle,
            weight: this.canvasKit.FontWeight.Black
          };
        }
        if (segment.styles.has(TAG_NAME.ITALIC)) {
          styleModifiers.fontStyle = {
            ...styleModifiers.fontStyle || defaultStyle.fontStyle,
            slant: this.canvasKit.FontSlant.Italic
          };
        }
        if (segment.styles.has(TAG_NAME.UNDERLINE)) {
          styleModifiers.decoration = this.canvasKit.UnderlineDecoration;
          styleModifiers.decorationThickness = 1;
          styleModifiers.decorationStyle = this.canvasKit.DecorationStyle.Solid;
          styleModifiers.decorationColor = this.fontColor;
        }
        if (segment.styles.has(TAG_NAME.STRIKETHROUGH)) {
          styleModifiers.decoration = this.canvasKit.LineThroughDecoration;
          styleModifiers.decorationThickness = 1;
          styleModifiers.decorationStyle = this.canvasKit.DecorationStyle.Solid;
          styleModifiers.decorationColor = this.fontColor;
        }
        if (segment.styles.has(TAG_NAME.OVERLINE)) {
          styleModifiers.decoration = this.canvasKit.OverlineDecoration;
          styleModifiers.decorationThickness = 1;
          styleModifiers.decorationStyle = this.canvasKit.DecorationStyle.Solid;
          styleModifiers.decorationColor = this.fontColor;
        }
        const numberOfDecorations = [
          TAG_NAME.UNDERLINE,
          TAG_NAME.STRIKETHROUGH,
          TAG_NAME.OVERLINE
        ].filter((tag) => segment.styles.has(tag)).length;
        if (numberOfDecorations > 1) {
          throw new M2Error(
            `Label does not support multiple text decorations (underline, overline, or strikethrough) on a single text segment. Text is: ${this.textAfterLocalization}`
          );
        }
        this.addTextWithStyle(
          builder,
          this.plainText.substring(segment.start, segment.end),
          defaultStyle,
          styleModifiers
        );
        lastIndex = segment.end;
      }
      if (lastIndex < this.plainText.length) {
        this.addTextWithStyle(
          builder,
          this.plainText.substring(lastIndex),
          defaultStyle
        );
      }
    }
  }
  /**
   * Helper that adds text to the paragraph builder with the specified style.
   *
   * @param builder - {@link ParagraphBuilder}
   * @param text - The text to add
   * @param defaultStyle - The default style to apply
   * @param styleModifiers - Additional style modifications
   * @returns void
   */
  addTextWithStyle(builder, text, defaultStyle, styleModifiers = {}) {
    if (!text) return;
    const style = {
      ...defaultStyle,
      ...styleModifiers
    };
    builder.pushPaintStyle(style, this.fontPaint, this.backgroundPaint);
    builder.addText(text);
    builder.pop();
  }
  /**
   * Determines the M2Font objects that need to be ready in order to draw
   * the Label.
   *
   * @remarks It needs a FontManager because it may need to look up the
   * default font.
   *
   * @param fontManager - {@link FontManager}
   * @returns an array of M2Font objects that are required for the Label
   */
  getRequiredLabelFonts(fontManager) {
    let requiredFonts;
    if (this.game.i18n && this.localize !== false) {
      if (this.localizedFontName) {
        requiredFonts = [fontManager.fonts[this.localizedFontName]];
        return requiredFonts;
      } else if (this.localizedFontNames.length > 0) {
        requiredFonts = this.localizedFontNames.map(
          (font) => fontManager.fonts[font]
        );
        return requiredFonts;
      }
    }
    if (this.fontName === void 0 && this.fontNames === void 0) {
      requiredFonts = [fontManager.getDefaultFont()];
    } else if (this.fontName !== void 0) {
      requiredFonts = [fontManager.fonts[this.fontName]];
    } else if (this.fontNames !== void 0 && this.fontNames.length > 0) {
      requiredFonts = this.fontNames.map((font) => fontManager.fonts[font]);
    } else {
      throw new M2Error("cannot determine required fonts");
    }
    return requiredFonts;
  }
  dispose() {
    CanvasKitHelpers.Dispose([
      this.paragraph,
      this.builder,
      this._fontPaint,
      // use backing field since it may be undefined
      this._backgroundPaint
      // use backing field since it may be undefined
    ]);
  }
  get text() {
    return this._text;
  }
  set text(text) {
    if (Equal.value(this._text, text)) {
      return;
    }
    this._text = text;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("text", text);
  }
  get interpolation() {
    return this._interpolation;
  }
  set interpolation(interpolation) {
    if (Equal.value(this._interpolation, interpolation)) {
      return;
    }
    this._interpolation = interpolation;
    Object.freeze(this._interpolation);
    this.needsInitialization = true;
    this.savePropertyChangeEvent("interpolation", interpolation);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(fontName) {
    if (Equal.value(this._fontName, fontName)) {
      return;
    }
    this._fontName = fontName;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontName", fontName);
  }
  get fontNames() {
    return this._fontNames;
  }
  set fontNames(fontNames) {
    if (Equal.value(this._fontNames, fontNames)) {
      return;
    }
    this._fontNames = fontNames;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontNames", fontNames);
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(fontColor) {
    if (Equal.value(this._fontColor, fontColor)) {
      return;
    }
    this._fontColor = fontColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontColor", fontColor);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(fontSize) {
    if (Equal.value(this._fontSize, fontSize)) {
      return;
    }
    this._fontSize = fontSize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontSize", fontSize);
  }
  get horizontalAlignmentMode() {
    return this._horizontalAlignmentMode;
  }
  set horizontalAlignmentMode(horizontalAlignmentMode) {
    if (Equal.value(this._horizontalAlignmentMode, horizontalAlignmentMode)) {
      return;
    }
    this._horizontalAlignmentMode = horizontalAlignmentMode;
    this.needsInitialization = true;
    this.savePropertyChangeEvent(
      "horizontalAlignmentMode",
      horizontalAlignmentMode
    );
  }
  get preferredMaxLayoutWidth() {
    return this._preferredMaxLayoutWidth;
  }
  set preferredMaxLayoutWidth(preferredMaxLayoutWidth) {
    if (Equal.value(this._preferredMaxLayoutWidth, preferredMaxLayoutWidth)) {
      return;
    }
    this._preferredMaxLayoutWidth = preferredMaxLayoutWidth;
    this.needsInitialization = true;
    this.savePropertyChangeEvent(
      "preferredMaxLayoutWidth",
      preferredMaxLayoutWidth
    );
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(backgroundColor) {
    if (Equal.value(this._backgroundColor, backgroundColor)) {
      return;
    }
    this._backgroundColor = backgroundColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("backgroundColor", backgroundColor);
  }
  get localize() {
    return this._localize;
  }
  set localize(localize) {
    if (Equal.value(this._localize, localize)) {
      return;
    }
    this._localize = localize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("localize", localize);
  }
  get anchorPoint() {
    const node = this;
    return {
      get x() {
        return node._anchorPoint.x;
      },
      set x(x) {
        if (Equal.value(node._anchorPoint.x, x)) {
          return;
        }
        node._anchorPoint.x = x;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      },
      get y() {
        return node._anchorPoint.y;
      },
      set y(y) {
        if (Equal.value(node._anchorPoint.y, y)) {
          return;
        }
        node._anchorPoint.y = y;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      }
    };
  }
  set anchorPoint(anchorPoint) {
    if (Equal.value(this._anchorPoint, anchorPoint)) {
      return;
    }
    this._anchorPoint = anchorPoint;
    this.savePropertyChangeEvent("anchorPoint", this.anchorPoint);
  }
  get zPosition() {
    return this._zPosition;
  }
  set zPosition(zPosition) {
    if (Equal.value(this._zPosition, zPosition)) {
      return;
    }
    this._zPosition = zPosition;
    this.savePropertyChangeEvent("zPosition", zPosition);
  }
  get backgroundPaint() {
    if (!this._backgroundPaint) {
      throw new M2Error("backgroundPaint cannot be undefined");
    }
    return this._backgroundPaint;
  }
  set backgroundPaint(backgroundPaint) {
    this._backgroundPaint = backgroundPaint;
  }
  get fontPaint() {
    if (!this._fontPaint) {
      throw new M2Error("fontPaint cannot be undefined");
    }
    return this._fontPaint;
  }
  set fontPaint(fontPaint) {
    this._fontPaint = fontPaint;
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new Label({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.getTextOptions(),
      horizontalAlignmentMode: this.horizontalAlignmentMode,
      preferredMaxLayoutWidth: this.preferredMaxLayoutWidth,
      backgroundColor: this.backgroundColor,
      name: newName
    });
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  update() {
    super.update();
    if (this.absoluteAlphaChange !== 0) {
      this.initialize();
    }
  }
  draw(canvas) {
    if (this.parent && this.text !== "" && !this.needsInitialization) {
      canvas.save();
      const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
      canvas.scale(1 / drawScale, 1 / drawScale);
      M2c2KitHelpers.rotateCanvasForDrawableNode(canvas, this);
      const x = (this.absolutePosition.x - this.size.width * this.anchorPoint.x * this.absoluteScale) * drawScale;
      const y = (this.absolutePosition.y - this.size.height * this.anchorPoint.y * this.absoluteScale) * drawScale;
      if (this.paragraph === void 0) {
        throw new M2Error("no paragraph");
      }
      canvas.drawParagraph(this.paragraph, x, y);
      canvas.restore();
    }
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    const i18n = this.game.i18n;
    if (i18n && this.localize !== false) {
      const textLocalization = i18n.getTextLocalization(
        this.text,
        this.interpolation
      );
      this.localizedFontName = textLocalization.fontName;
      this.localizedFontNames = textLocalization.fontNames ?? [];
    }
    const requiredFonts = this.getRequiredLabelFonts(this.game.fontManager);
    if (requiredFonts.some((font) => font.status === M2FontStatus.Deferred)) {
      return;
    }
    if (Object.keys(this.layout).length !== 0) {
      return;
    }
    this.initialize();
    if (!this.paragraph) {
      throw new M2Error(
        `warmup Label node ${this.toString()}: paragraph is undefined`
      );
    }
    canvas.drawParagraph(this.paragraph, 0, 0);
  }
}

class Scene extends M2Node {
  /**
   * Top-level node that holds all other nodes, such as sprites, rectangles, or labels, that will be displayed on the screen
   *
   * @remarks The scene is the game screen or stage, and fills the entire available screen. There are usually multiple screens to contain multiple stages of the game, such as various instruction pages or phases of a game.
   *
   * @param options - {@link SceneOptions}
   */
  constructor(options = {}) {
    super(options);
    this.type = M2NodeType.Scene;
    this.isDrawable = true;
    // Drawable options
    this._anchorPoint = { x: 0, y: 0 };
    this._zPosition = 0;
    // Scene options
    this._backgroundColor = Constants.DEFAULT_SCENE_BACKGROUND_COLOR;
    this._active = false;
    this._transitioning = false;
    handleInterfaceOptions(this, options);
    if (options.backgroundColor) {
      this.backgroundColor = options.backgroundColor;
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      backgroundColor: this.backgroundColor
    };
  }
  initialize() {
    this.scale = m2c2Globals.rootScale;
    this.size.width = this.game.canvasCssWidth;
    this.size.height = this.game.canvasCssHeight;
    if (this.backgroundPaint) {
      this.backgroundPaint.delete();
    }
    this.backgroundPaint = CanvasKitHelpers.makePaint(
      this.canvasKit,
      this.backgroundColor,
      this.canvasKit.PaintStyle.Fill,
      false
    );
    this.needsInitialization = false;
  }
  dispose() {
    CanvasKitHelpers.Dispose([this.backgroundPaint]);
  }
  set game(game) {
    this._game = game;
  }
  /**
   * The game which this scene is a part of.
   *
   * @remarks Throws error if scene is not part of the game object.
   */
  get game() {
    if (this._game === void 0) {
      throw new M2Error(`Scene ${this} has not been added to a game.`);
    }
    return this._game;
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(backgroundColor) {
    if (Equal.value(this._backgroundColor, backgroundColor)) {
      return;
    }
    this._backgroundColor = backgroundColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("backgroundColor", backgroundColor);
  }
  get anchorPoint() {
    const node = this;
    return {
      get x() {
        return node._anchorPoint.x;
      },
      set x(x) {
        if (Equal.value(node._anchorPoint.x, x)) {
          return;
        }
        node._anchorPoint.x = x;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      },
      get y() {
        return node._anchorPoint.y;
      },
      set y(y) {
        if (Equal.value(node._anchorPoint.y, y)) {
          return;
        }
        node._anchorPoint.y = y;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      }
    };
  }
  set anchorPoint(anchorPoint) {
    if (Equal.value(this._anchorPoint, anchorPoint)) {
      return;
    }
    this._anchorPoint = anchorPoint;
    this.savePropertyChangeEvent("anchorPoint", this.anchorPoint);
  }
  get zPosition() {
    return this._zPosition;
  }
  set zPosition(zPosition) {
    if (Equal.value(this._zPosition, zPosition)) {
      return;
    }
    this._zPosition = zPosition;
    this.savePropertyChangeEvent("zPosition", zPosition);
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new Scene({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      backgroundColor: this.backgroundColor,
      name: newName
    });
    dest.game = this.game;
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  /**
   * Code that will be called every time the scene is presented.
   *
   * @remarks Use this callback to set nodes to their initial state, if
   * that state might be changed later. For example, if a scene allows
   * players to place dots on a grid, the setup() method should ensure the
   * grid is clear of any prior dots from previous times this scene may
   * have been displayed. In addition, if nodes should vary in each
   * iteration, that should be done here.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onSetup(callback, options) {
    this.addEventListener("SceneSetup", callback, options);
  }
  /**
   *
   * Code that will be called after the scene has finished any transitions
   * and has fully appeared on the screen.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onAppear(callback, options) {
    this.addEventListener("SceneAppear", callback, options);
  }
  /**
   * Code that will be called after a key is pressed on the device's
   * built-in keyboard.
   *
   * @remarks The built-in keyboard is defined as the hardware keyboard on a
   * desktop/laptop or the built-in soft keyboard on a tablet or phone. The
   * latter is not used in m2c2kit. On tablet or phone, the `VirtualKeyboard`
   * in the `@m2c2kit/addons` package should be used for key events.
   * @remarks Key events can occur only on a `Scene` node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onKeyDown(callback, options) {
    this.addEventListener(M2EventType.KeyDown, callback, options);
  }
  /**
   * Code that will be called after a key is released on the device's
   * built-in keyboard.
   *
   * @remarks The built-in keyboard is defined as the hardware keyboard on a
   * desktop/laptop or the built-in soft keyboard on a tablet or phone. The
   * latter is not used in m2c2kit. On tablet or phone, the `VirtualKeyboard`
   * in the `@m2c2kit/addons` package should be used for key events.
   * @remarks Key events can occur only on a `Scene` node.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onKeyUp(callback, options) {
    this.addEventListener(M2EventType.KeyUp, callback, options);
  }
  update() {
    super.update();
  }
  draw(canvas) {
    canvas.save();
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    canvas.scale(1 / drawScale, 1 / drawScale);
    M2c2KitHelpers.rotateCanvasForDrawableNode(canvas, this);
    if (!this.backgroundPaint) {
      throw new M2Error(`in Scene ${this}, background paint is undefined.`);
    }
    if (this.absoluteAlphaChange !== 0) {
      this.backgroundPaint.setAlphaf(this.absoluteAlpha);
    }
    canvas.drawRect(
      [
        this.position.x * drawScale * m2c2Globals.rootScale,
        this.position.y * drawScale * m2c2Globals.rootScale,
        (this.position.x + this.size.width) * drawScale * m2c2Globals.rootScale,
        (this.position.y + this.size.height) * drawScale * m2c2Globals.rootScale
      ],
      this.backgroundPaint
    );
    canvas.restore();
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    this.initialize();
    canvas.save();
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    canvas.scale(1 / drawScale, 1 / drawScale);
    if (!this.backgroundPaint) {
      throw new M2Error(`in Scene ${this}, background paint is undefined.`);
    }
    canvas.drawRect(
      [
        this.position.x * drawScale * m2c2Globals.rootScale,
        this.position.y * drawScale * m2c2Globals.rootScale,
        (this.position.x + this.size.width) * drawScale * m2c2Globals.rootScale,
        (this.position.y + this.size.height) * drawScale * m2c2Globals.rootScale
      ],
      this.backgroundPaint
    );
    canvas.restore();
    this.children.forEach((child) => {
      if (child.isDrawable) {
        child.warmup(canvas);
      }
    });
  }
}

class Shape extends M2Node {
  /**
   * Rectangular, circular, or path-based shape
   *
   * @param options - {@link ShapeOptions}
   */
  constructor(options = {}) {
    super(options);
    this.type = M2NodeType.Shape;
    this.isDrawable = true;
    this.isShape = true;
    // Drawable options
    this._anchorPoint = { x: 0.5, y: 0.5 };
    this._zPosition = 0;
    // Shape options
    // TODO: fix the Size issue; should be readonly (calculated value) in all nodes, but Rectangle
    this.shapeType = ShapeType.Undefined;
    this.ckPath = null;
    this._cornerRadius = 0;
    this._fillColor = Constants.DEFAULT_SHAPE_FILL_COLOR;
    this._isAntialiased = true;
    this.svgPathScaleForResizing = 1;
    this.svgPathWidth = 0;
    this.svgPathHeight = 0;
    this.svgPreviousAbsoluteX = NaN;
    this.svgPreviousAbsoluteY = NaN;
    this.svgFirstPathDraw = true;
    this.colorfulPathPaints = /* @__PURE__ */ new Map();
    handleInterfaceOptions(this, options);
    if (options.path !== void 0) {
      this.path = options.path;
      this.shapeType = ShapeType.Path;
      if (this.shapeIsM2Path()) {
        if (options.size !== void 0) {
          this.size = options.size;
        }
      }
      if (this.shapeIsSvgStringPath()) {
        if (options.size !== void 0) {
          throw new M2Error(
            "Size cannot be specified when path is SVG string path"
          );
        }
      }
      this.svgPathRequestedWidth = options.path.width;
      this.svgPathRequestedHeight = options.path.height;
      if (this.svgPathRequestedHeight !== void 0 && this.svgPathRequestedWidth !== void 0) {
        throw new M2Error(
          "Cannot specify both width and height for SVG string path."
        );
      }
      if (!this.strokeColor) {
        this.strokeColor = Constants.DEFAULT_PATH_STROKE_COLOR;
      }
      if (this.lineWidth === void 0) {
        this.lineWidth = Constants.DEFAULT_PATH_LINE_WIDTH;
      }
      if (options.circleOfRadius || options.rect) {
        throw new M2Error(
          "Shape must specify only one of: path, circleOfRadius, or rect"
        );
      }
    }
    if (options.circleOfRadius !== void 0) {
      this.circleOfRadius = options.circleOfRadius;
      this.shapeType = ShapeType.Circle;
      if (options.size !== void 0) {
        throw new M2Error("Size cannot be specified for circle shape");
      }
      if (options.path || options.rect) {
        throw new M2Error(
          "Shape must specify only one of: path, circleOfRadius, or rect"
        );
      }
      this.size.width = this.circleOfRadius * 2;
      this.size.height = this.circleOfRadius * 2;
    }
    if (options.rect) {
      this.rect = options.rect;
      if (options.rect.size) {
        this.size.width = options.rect.size.width;
        this.size.height = options.rect.size.height;
      } else if (options.rect.width !== void 0 && options.rect.height !== void 0) {
        this.size.width = options.rect.width;
        this.size.height = options.rect.height;
      }
      if (options.rect.origin) {
        this.position = options.rect.origin;
      } else if (options.rect.x !== void 0 && options.rect.y !== void 0) {
        this.position = { x: options.rect.x, y: options.rect.y };
      }
      this.shapeType = ShapeType.Rectangle;
      if (options.size !== void 0) {
        throw new M2Error("Size cannot be specified for rectangle shape");
      }
    }
    if (options.cornerRadius !== void 0) {
      this.cornerRadius = options.cornerRadius;
    }
    if (options.fillColor) {
      this.fillColor = options.fillColor;
    }
    if (options.strokeColor) {
      this.strokeColor = options.strokeColor;
    }
    if (options.lineWidth !== void 0) {
      this.lineWidth = options.lineWidth;
    }
    if (options.isAntialiased !== void 0) {
      this.isAntialiased = options.isAntialiased;
    }
    if (options.strokeColor && !options.lineWidth) {
      console.warn(
        `warning: for node ${this}, strokeColor = ${options.strokeColor} but lineWidth is non-zero. In normal usage, both would be set or both would be undefined.`
      );
    }
    if (options.strokeColor === void 0 && options.lineWidth) {
      console.warn(
        `warning: for node ${this}, lineWidth = ${options.lineWidth} but strokeColor is undefined. In normal usage, both would be set or both would be undefined.`
      );
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    let size = void 0;
    if (this.shapeIsM2Path()) {
      size = this.size;
    }
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      circleOfRadius: this.circleOfRadius,
      rect: this.rect,
      cornerRadius: this.cornerRadius,
      fillColor: this.fillColor,
      strokeColor: this.strokeColor,
      lineWidth: this.lineWidth,
      path: this.path,
      size,
      isAntialiased: this.isAntialiased
    };
  }
  initialize() {
    if (this.shapeType === ShapeType.Path) {
      if (this.shapeIsSvgStringPath()) {
        const pathString = this.path.pathString ?? this.path.svgPathString;
        if (!pathString) {
          throw new M2Error("SVG Path string is null/undefined");
        }
        if (this.path.svgPathString !== void 0) {
          console.warn(
            `warning: svgPathString is deprecated. Use pathString instead.`
          );
        }
        this.ckPath = this.canvasKit.Path.MakeFromSVGString(pathString);
        if (!this.ckPath) {
          throw new M2Error("could not make CanvasKit Path from SVG string");
        }
        const bounds = this.ckPath.getBounds();
        this.svgPathWidth = bounds[2] + (bounds[0] < 0 ? Math.abs(bounds[0]) : 0);
        this.svgPathHeight = bounds[3] + (bounds[1] < 0 ? Math.abs(bounds[1]) : 0);
        if (this.svgPathRequestedHeight !== void 0) {
          this.svgPathScaleForResizing = this.svgPathRequestedHeight / this.svgPathHeight;
        } else if (this.svgPathRequestedWidth !== void 0) {
          this.svgPathScaleForResizing = this.svgPathRequestedWidth / this.svgPathWidth;
        }
        this.size.width = this.svgPathWidth * this.svgPathScaleForResizing;
        this.size.height = this.svgPathHeight * this.svgPathScaleForResizing;
        this.svgPreviousAbsoluteX = 0;
        this.svgPreviousAbsoluteY = 0;
      }
    }
    if (this.shapeIsM2Path()) {
      if (this.size.width === 0 || this.size.height === 0 || this.size.width === void 0 || this.size.height === void 0) {
        throw new M2Error(
          "Size of shape must have non-zero height and width when path is M2Path"
        );
      }
    }
    if (this.fillColor) {
      this.fillColorPaintAntialiased = CanvasKitHelpers.makePaint(
        this.canvasKit,
        this.fillColor,
        this.canvasKit.PaintStyle.Fill,
        true
      );
      this.fillColorPaintNotAntialiased = CanvasKitHelpers.makePaint(
        this.canvasKit,
        this.fillColor,
        this.canvasKit.PaintStyle.Fill,
        false
      );
    }
    if (this.strokeColor) {
      this.strokeColorPaintAntialiased = CanvasKitHelpers.makePaint(
        this.canvasKit,
        this.strokeColor,
        this.canvasKit.PaintStyle.Stroke,
        true
      );
      this.strokeColorPaintNotAntialiased = CanvasKitHelpers.makePaint(
        this.canvasKit,
        this.strokeColor,
        this.canvasKit.PaintStyle.Stroke,
        false
      );
    }
    this.svgFirstPathDraw = true;
    this.needsInitialization = false;
  }
  get anchorPoint() {
    const node = this;
    return {
      get x() {
        return node._anchorPoint.x;
      },
      set x(x) {
        if (Equal.value(node._anchorPoint.x, x)) {
          return;
        }
        node._anchorPoint.x = x;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      },
      get y() {
        return node._anchorPoint.y;
      },
      set y(y) {
        if (Equal.value(node._anchorPoint.y, y)) {
          return;
        }
        node._anchorPoint.y = y;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      }
    };
  }
  set anchorPoint(anchorPoint) {
    if (Equal.value(this._anchorPoint, anchorPoint)) {
      return;
    }
    this._anchorPoint = anchorPoint;
    this.savePropertyChangeEvent("anchorPoint", this.anchorPoint);
  }
  get zPosition() {
    return this._zPosition;
  }
  set zPosition(zPosition) {
    if (Equal.value(this._zPosition, zPosition)) {
      return;
    }
    this._zPosition = zPosition;
    this.savePropertyChangeEvent("zPosition", zPosition);
  }
  dispose() {
    CanvasKitHelpers.Dispose([
      // use backing fields, since paints may be undefined
      this._strokeColorPaintAntialiased,
      this._strokeColorPaintNotAntialiased,
      this._fillColorPaintAntialiased,
      this._fillColorPaintNotAntialiased,
      this.ckPath,
      ...Array.from(this.colorfulPathPaints.values())
    ]);
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new Shape({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      shapeType: this.shapeType,
      circleOfRadius: this.circleOfRadius,
      rect: this.rect,
      cornerRadius: this.cornerRadius,
      fillColor: this.fillColor,
      strokeColor: this.strokeColor,
      lineWidth: this.lineWidth,
      name: newName
    });
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  update() {
    super.update();
  }
  draw(canvas) {
    canvas.save();
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    canvas.scale(1 / drawScale, 1 / drawScale);
    M2c2KitHelpers.rotateCanvasForDrawableNode(canvas, this);
    if (this.absoluteAlphaChange !== 0) {
      this.applyAlphaToPaints(this.absoluteAlpha, [
        this._fillColorPaintAntialiased,
        this._fillColorPaintNotAntialiased,
        this._strokeColorPaintAntialiased,
        this._strokeColorPaintNotAntialiased
      ]);
    }
    if (this.shapeIsM2Path()) {
      this.drawPathFromM2Path(canvas);
    }
    if (this.shapeIsSvgStringPath()) {
      this.drawPathFromSvgString(canvas);
    }
    if (this.shapeType === ShapeType.Circle) {
      this.drawCircle(canvas);
    }
    if (this.shapeType === ShapeType.Rectangle) {
      this.drawRectangle(canvas);
    }
    canvas.restore();
    super.drawChildren(canvas);
  }
  applyAlphaToPaints(alpha, paints) {
    paints.forEach((paint) => {
      if (paint) {
        paint.setAlphaf(alpha);
      }
    });
  }
  drawPathFromM2Path(canvas) {
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    const pathOriginX = (this.absolutePosition.x - this.anchorPoint.x * this.size.width * this.absoluteScale) * drawScale;
    const pathOriginY = (this.absolutePosition.y - this.anchorPoint.y * this.size.height * this.absoluteScale) * drawScale;
    if (this.pathIsM2ColorfulPath(this.path)) {
      const linePresentations = this.path.linePresentations;
      let lp = 0;
      const subpaths = this.path.subpaths;
      let paint;
      for (let s = 0; s < subpaths.length; s++) {
        const subpath = subpaths[s];
        const points = subpath.flat();
        for (let i = 0; i < points.length - 1; i++) {
          if (linePresentations[lp].subpathIndex === s && linePresentations[lp].pointIndex === i) {
            const strokeColor = linePresentations[lp].strokeColor;
            const lineWidth = linePresentations[lp].lineWidth;
            const paintKey = [...strokeColor, lineWidth].toString();
            paint = this.colorfulPathPaints.get(paintKey);
            if (paint === void 0) {
              paint = CanvasKitHelpers.makePaint(
                this.canvasKit,
                strokeColor,
                this.canvasKit.PaintStyle.Stroke,
                true
              );
              paint.setStrokeWidth(lineWidth * m2c2Globals.canvasScale);
              this.colorfulPathPaints.set(paintKey, paint);
            }
            if (lp < linePresentations.length - 1) {
              lp++;
            }
          }
          if (paint === void 0) {
            throw new M2Error("paint is undefined");
          }
          canvas.drawLine(
            pathOriginX + points[i].x * m2c2Globals.canvasScale,
            pathOriginY + points[i].y * m2c2Globals.canvasScale,
            pathOriginX + points[i + 1].x * m2c2Globals.canvasScale,
            pathOriginY + points[i + 1].y * m2c2Globals.canvasScale,
            paint
          );
        }
      }
      return;
    }
    if (this.strokeColor && this.strokeColorPaintAntialiased && this.lineWidth) {
      this.strokeColorPaintAntialiased.setStrokeWidth(
        this.lineWidth * m2c2Globals.canvasScale
      );
      const subpaths = this.path.subpaths;
      for (const subpath of subpaths) {
        const points = subpath.flat();
        for (let i = 0; i < points.length - 1; i++) {
          canvas.drawLine(
            pathOriginX + points[i].x * m2c2Globals.canvasScale,
            pathOriginY + points[i].y * m2c2Globals.canvasScale,
            pathOriginX + points[i + 1].x * m2c2Globals.canvasScale,
            pathOriginY + points[i + 1].y * m2c2Globals.canvasScale,
            this.strokeColorPaintAntialiased
          );
        }
      }
    }
  }
  drawPathFromSvgString(canvas) {
    if (!this.ckPath) {
      return;
    }
    const x = this.calculateSvgPathX();
    const y = this.calculateSvgPathY();
    if (this.pathNeedsTransform(x, y)) {
      const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
      const pathScale = drawScale * this.svgPathScaleForResizing * m2c2Globals.rootScale;
      const matrix = this.calculateTransformationMatrix(pathScale, x, y);
      this.ckPath = this.ckPath.transform(matrix);
      this.saveSvgPathAbsolutePosition(x, y);
    }
    if (this.fillColor) {
      const paint = this.getFillPaint();
      canvas.drawPath(this.ckPath, paint);
    }
    if (this.strokeColor && this.lineWidth) {
      const paint = this.getStrokePaint(this.lineWidth);
      canvas.drawPath(this.ckPath, paint);
    }
  }
  calculateSvgPathY() {
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    return (this.absolutePosition.y - this.size.height * this.absoluteScale / 2) * drawScale;
  }
  calculateSvgPathX() {
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    return (this.absolutePosition.x - this.size.width * this.absoluteScale / 2) * drawScale;
  }
  saveSvgPathAbsolutePosition(x, y) {
    this.svgPreviousAbsoluteX = x;
    this.svgPreviousAbsoluteY = y;
  }
  calculateTransformationMatrix(pathScale, x, y) {
    let dScale;
    if (this.svgFirstPathDraw) {
      dScale = pathScale;
      this.svgFirstPathDraw = false;
    } else {
      dScale = 1;
    }
    const dX = x - this.svgPreviousAbsoluteX;
    const dY = y - this.svgPreviousAbsoluteY;
    return [dScale, 0, dX, 0, dScale, dY, 0, 0, 1];
  }
  pathNeedsTransform(x, y) {
    return this.svgFirstPathDraw === true || x !== this.svgPreviousAbsoluteX || y !== this.svgPreviousAbsoluteY;
  }
  shapeIsSvgStringPath() {
    return this.path?.pathString !== void 0 || this.path?.svgPathString !== void 0;
  }
  shapeIsM2Path() {
    return this.path?.subpaths !== void 0;
  }
  pathIsM2ColorfulPath(path) {
    return path !== void 0 && "linePresentations" in path;
  }
  drawCircle(canvas) {
    if (!this.circleOfRadius) {
      return;
    }
    if (this.fillColor) {
      const paint = this.getFillPaint();
      this.drawCircleWithCanvasKit(canvas, paint);
    }
    if (this.strokeColor && this.lineWidth) {
      const paint = this.getStrokePaint(this.lineWidth);
      this.drawCircleWithCanvasKit(canvas, paint);
    }
  }
  drawRectangle(canvas) {
    if (this.fillColor) {
      const paint = this.getFillPaint();
      this.drawRectangleWithCanvasKit(canvas, paint);
    }
    if (this.strokeColor && this.lineWidth) {
      const paint = this.getStrokePaint(this.lineWidth);
      this.drawRectangleWithCanvasKit(canvas, paint);
    }
  }
  drawCircleWithCanvasKit(canvas, paint) {
    if (!this.circleOfRadius) {
      return;
    }
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    const cx = this.absolutePosition.x * drawScale;
    const cy = this.absolutePosition.y * drawScale;
    const radius = this.circleOfRadius * this.absoluteScale * drawScale;
    canvas.drawCircle(cx, cy, radius, paint);
  }
  drawRectangleWithCanvasKit(canvas, paint) {
    const rr = this.calculateCKRoundedRectangle();
    canvas.drawRRect(rr, paint);
  }
  calculateCKRoundedRectangle() {
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    return this.canvasKit.RRectXY(
      this.canvasKit.LTRBRect(
        (this.absolutePosition.x - this.anchorPoint.x * this.size.width * this.absoluteScale) * drawScale,
        (this.absolutePosition.y - this.anchorPoint.y * this.size.height * this.absoluteScale) * drawScale,
        (this.absolutePosition.x + this.size.width * this.absoluteScale - this.anchorPoint.x * this.size.width * this.absoluteScale) * drawScale,
        (this.absolutePosition.y + this.size.height * this.absoluteScale - this.anchorPoint.y * this.size.height * this.absoluteScale) * drawScale
      ),
      this.cornerRadius * drawScale,
      this.cornerRadius * drawScale
    );
  }
  getFillPaint() {
    if (this.involvedInActionAffectingAppearance()) {
      return this.fillColorPaintNotAntialiased;
    }
    return this.isAntialiased ? this.fillColorPaintAntialiased : this.fillColorPaintNotAntialiased;
  }
  getStrokePaint(lineWidth) {
    let paint;
    if (this.involvedInActionAffectingAppearance()) {
      paint = this.strokeColorPaintNotAntialiased;
    } else {
      paint = this.isAntialiased ? this.strokeColorPaintAntialiased : this.strokeColorPaintNotAntialiased;
    }
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    paint.setStrokeWidth(lineWidth * drawScale);
    return paint;
  }
  warmup(canvas) {
    this.initialize();
    canvas.save();
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    canvas.scale(1 / drawScale, 1 / drawScale);
    if (this.shapeType === ShapeType.Circle) {
      if (this.fillColor) {
        this.warmupFilledCircle(canvas);
      }
      if (this.strokeColor && this.lineWidth) {
        this.warmupStrokedCircle(canvas);
      }
    }
    if (this.shapeType === ShapeType.Rectangle) {
      if (this.fillColor) {
        this.warmupFilledRectangle(canvas);
      }
      if (this.strokeColor && this.lineWidth) {
        this.warmupStrokedRectangle(canvas);
      }
    }
    canvas.restore();
    this.children.forEach((child) => {
      if (child.isDrawable) {
        child.warmup(canvas);
      }
    });
  }
  warmupFilledCircle(canvas) {
    if (!this.circleOfRadius) {
      return;
    }
    this.drawCircleWithCanvasKit(canvas, this.fillColorPaintAntialiased);
    this.drawCircleWithCanvasKit(canvas, this.fillColorPaintNotAntialiased);
  }
  warmupStrokedCircle(canvas) {
    if (!this.lineWidth || !this.circleOfRadius) {
      return;
    }
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    this.strokeColorPaintAntialiased.setStrokeWidth(this.lineWidth * drawScale);
    this.drawCircleWithCanvasKit(canvas, this.strokeColorPaintAntialiased);
    this.strokeColorPaintNotAntialiased.setStrokeWidth(
      this.lineWidth * drawScale
    );
    this.drawCircleWithCanvasKit(canvas, this.strokeColorPaintNotAntialiased);
  }
  warmupFilledRectangle(canvas) {
    this.drawRectangleWithCanvasKit(canvas, this.fillColorPaintAntialiased);
    this.drawRectangleWithCanvasKit(canvas, this.fillColorPaintNotAntialiased);
  }
  warmupStrokedRectangle(canvas) {
    if (!this.lineWidth || !this.circleOfRadius) {
      return;
    }
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    this.strokeColorPaintAntialiased.setStrokeWidth(this.lineWidth * drawScale);
    this.drawRectangleWithCanvasKit(canvas, this.strokeColorPaintAntialiased);
    this.strokeColorPaintNotAntialiased.setStrokeWidth(
      this.lineWidth * drawScale
    );
    this.drawRectangleWithCanvasKit(
      canvas,
      this.strokeColorPaintNotAntialiased
    );
  }
  get circleOfRadius() {
    return this._circleOfRadius;
  }
  set circleOfRadius(circleOfRadius) {
    if (Equal.value(circleOfRadius, this._circleOfRadius)) {
      return;
    }
    this._circleOfRadius = circleOfRadius;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("circleOfRadius", circleOfRadius);
  }
  get rect() {
    return this._rect;
  }
  set rect(rect) {
    if (Equal.value(rect, this._rect)) {
      return;
    }
    this._rect = rect;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("rect", rect);
  }
  get cornerRadius() {
    return this._cornerRadius;
  }
  set cornerRadius(cornerRadius) {
    if (Equal.value(cornerRadius, this._cornerRadius)) {
      return;
    }
    this._cornerRadius = cornerRadius ?? 0;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("cornerRadius", cornerRadius ?? 0);
  }
  get lineWidth() {
    return this._lineWidth;
  }
  set lineWidth(lineWidth) {
    if (Equal.value(lineWidth, this._lineWidth)) {
      return;
    }
    this._lineWidth = lineWidth;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("lineWidth", lineWidth);
  }
  get path() {
    return this._path;
  }
  set path(path) {
    if (Equal.value(path, this._path)) {
      return;
    }
    this._path = path;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("path", path);
  }
  get fillColor() {
    return this._fillColor;
  }
  set fillColor(fillColor) {
    if (Equal.value(fillColor, this._fillColor)) {
      return;
    }
    this._fillColor = fillColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fillColor", fillColor);
  }
  get strokeColor() {
    return this._strokeColor;
  }
  set strokeColor(strokeColor) {
    if (Equal.value(strokeColor, this._strokeColor)) {
      return;
    }
    this._strokeColor = strokeColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("strokeColor", strokeColor);
  }
  get isAntialiased() {
    return this._isAntialiased;
  }
  set isAntialiased(isAntialiased) {
    if (Equal.value(isAntialiased, this._isAntialiased)) {
      return;
    }
    this._isAntialiased = isAntialiased;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("isAntialiased", isAntialiased);
  }
  get fillColorPaintAntialiased() {
    if (!this._fillColorPaintAntialiased) {
      throw new M2Error("fillColorPaintAntiAliased is undefined");
    }
    return this._fillColorPaintAntialiased;
  }
  set fillColorPaintAntialiased(value) {
    this._fillColorPaintAntialiased = value;
  }
  get strokeColorPaintAntialiased() {
    if (!this._strokeColorPaintAntialiased) {
      throw new M2Error("strokeColorPaintAntiAliased is undefined");
    }
    return this._strokeColorPaintAntialiased;
  }
  set strokeColorPaintAntialiased(value) {
    this._strokeColorPaintAntialiased = value;
  }
  get fillColorPaintNotAntialiased() {
    if (!this._fillColorPaintNotAntialiased) {
      throw new M2Error("fillColorPaintNotAntiAliased is undefined");
    }
    return this._fillColorPaintNotAntialiased;
  }
  set fillColorPaintNotAntialiased(value) {
    this._fillColorPaintNotAntialiased = value;
  }
  get strokeColorPaintNotAntialiased() {
    if (!this._strokeColorPaintNotAntialiased) {
      throw new M2Error("strokeColorPaintNotAntiAliased is undefined");
    }
    return this._strokeColorPaintNotAntialiased;
  }
  set strokeColorPaintNotAntialiased(value) {
    this._strokeColorPaintNotAntialiased = value;
  }
}

class TextLine extends M2Node {
  /**
   * Single-line text rendered on the screen.
   *
   * @remarks TextLine has no paragraph formatting options; Label will be preferred in most use cases.
   *
   * @param options - {@link TextLineOptions}
   */
  constructor(options = {}) {
    super(options);
    this.type = M2NodeType.TextLine;
    this.isDrawable = true;
    this.isText = true;
    // Drawable options
    this._zPosition = 0;
    //   We don't know TextLine width in advance, so we must text align left,
    //   and so anchorPoint is (0, .5). (we do know height, which is fontSize)
    this._anchorPoint = { x: 0, y: 0.5 };
    // Text options
    this._text = "";
    // public getter/setter is below
    this._fontColor = Constants.DEFAULT_FONT_COLOR;
    // public getter/setter is below
    this._fontSize = Constants.DEFAULT_FONT_SIZE;
    // public getter/setter is below
    this._interpolation = {};
    this._localize = true;
    this.typeface = null;
    this.tryMissingTranslationPaint = false;
    this.textForDraw = "";
    this.localizedFontNames = [];
    handleInterfaceOptions(this, options);
    this.size.height = this.localizedFontSize ?? this.fontSize;
    this.size.width = options.width ?? NaN;
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.getTextOptions(),
      width: this.size.width
    };
  }
  initialize() {
    const i18n = this.game.i18n;
    this.tryMissingTranslationPaint = false;
    if (i18n && this.localize !== false) {
      const textLocalization = i18n.getTextLocalization(
        this.text,
        this.interpolation
      );
      this.textForDraw = textLocalization.text;
      this.localizedFontSize = textLocalization.fontSize;
      this.localizedFontName = textLocalization.fontName;
      this.localizedFontNames = textLocalization.fontNames ?? [];
      if (textLocalization.isFallbackOrMissingTranslation) {
        this.tryMissingTranslationPaint = true;
      }
    } else {
      this.textForDraw = this.text;
    }
    const fontManager = this.game.fontManager;
    this.fontForDraw = this.getRequiredTextLineFont(fontManager);
    if (this.fontForDraw.status === M2FontStatus.Deferred) {
      fontManager.prepareDeferredFont(this.fontForDraw);
      return;
    }
    if (this.fontForDraw.status === M2FontStatus.Loading) {
      return;
    }
    this.createFontPaint(i18n);
    this.createFont(fontManager);
    this.needsInitialization = false;
  }
  /**
   * Determines the M2Font object that needs to be ready in order to draw
   * the TextLine.
   *
   * @remarks It needs a FontManager because it may need to look up the
   * default font.
   *
   * @param fontManager - {@link FontManager}
   * @returns a M2Font object that is required for the TextLine
   */
  getRequiredTextLineFont(fontManager) {
    if (this.game.i18n) {
      if (this.localizedFontName !== void 0 && this.localizedFontNames.length !== 0 || this.localizedFontNames.length > 1) {
        throw new M2Error(
          `TextLine supports only one font, but multiple fonts are specified in translation.`
        );
      }
      if (this.localizedFontName !== void 0) {
        return fontManager.fonts[this.localizedFontName];
      } else if (this.localizedFontNames.length == 1) {
        return fontManager.fonts[this.localizedFontNames[0]];
      }
    }
    if (this.fontName === void 0) {
      return fontManager.getDefaultFont();
    }
    return fontManager.getFont(this.fontName);
  }
  createFontPaint(i18n) {
    if (this.paint) {
      this.paint.delete();
    }
    this.paint = new this.canvasKit.Paint();
    if (this.tryMissingTranslationPaint && this.localize !== false) {
      if (i18n?.missingLocalizationColor) {
        this.paint.setColor(
          this.canvasKit.Color(
            i18n.missingLocalizationColor[0],
            i18n.missingLocalizationColor[1],
            i18n.missingLocalizationColor[2],
            i18n.missingLocalizationColor[3]
          )
        );
      }
    } else {
      this.paint.setColor(
        this.canvasKit.Color(
          this.fontColor[0],
          this.fontColor[1],
          this.fontColor[2],
          this.fontColor[3]
        )
      );
    }
    this.paint.setStyle(this.canvasKit.PaintStyle.Fill);
    this.paint.setAntiAlias(true);
  }
  createFont(fontManager) {
    if (this.fontForDraw) {
      this.typeface = fontManager.getTypeface(this.fontForDraw.fontName);
    } else {
      const fontNames = fontManager.getFontNames();
      if (fontNames.length > 0) {
        this.typeface = fontManager.getTypeface(fontNames[0]);
      }
    }
    if (this.font) {
      this.font.delete();
    }
    this.font = new this.canvasKit.Font(
      this.typeface,
      (this.localizedFontSize ?? this.fontSize) * m2c2Globals.canvasScale
    );
  }
  get text() {
    return this._text;
  }
  set text(text) {
    if (Equal.value(this._text, text)) {
      return;
    }
    this._text = text;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("text", text);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(fontName) {
    if (Equal.value(this._fontName, fontName)) {
      return;
    }
    this._fontName = fontName;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontName", fontName);
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(fontColor) {
    if (Equal.value(this._fontColor, fontColor)) {
      return;
    }
    this._fontColor = fontColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontColor", fontColor);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(fontSize) {
    if (Equal.value(this._fontSize, fontSize)) {
      return;
    }
    this._fontSize = fontSize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontSize", fontSize);
  }
  get interpolation() {
    return this._interpolation;
  }
  set interpolation(interpolation) {
    if (Equal.value(this._interpolation, interpolation)) {
      return;
    }
    this._interpolation = interpolation;
    Object.freeze(this._interpolation);
    this.needsInitialization = true;
    this.savePropertyChangeEvent("interpolation", interpolation);
  }
  get localize() {
    return this._localize;
  }
  set localize(localize) {
    if (Equal.value(this._localize, localize)) {
      return;
    }
    this._localize = localize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("localize", localize);
  }
  get anchorPoint() {
    const node = this;
    return {
      get x() {
        return node._anchorPoint.x;
      },
      set x(x) {
        if (Equal.value(node._anchorPoint.x, x)) {
          return;
        }
        node._anchorPoint.x = x;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      },
      get y() {
        return node._anchorPoint.y;
      },
      set y(y) {
        if (Equal.value(node._anchorPoint.y, y)) {
          return;
        }
        node._anchorPoint.y = y;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      }
    };
  }
  set anchorPoint(anchorPoint) {
    if (Equal.value(this._anchorPoint, anchorPoint)) {
      return;
    }
    this._anchorPoint = anchorPoint;
    this.savePropertyChangeEvent("anchorPoint", this.anchorPoint);
  }
  get zPosition() {
    return this._zPosition;
  }
  set zPosition(zPosition) {
    if (Equal.value(this._zPosition, zPosition)) {
      return;
    }
    this._zPosition = zPosition;
    this.savePropertyChangeEvent("zPosition", zPosition);
  }
  dispose() {
    CanvasKitHelpers.Dispose([this.font, this.typeface, this.paint]);
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new TextLine({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.getTextOptions(),
      width: this.size.width,
      name: newName
    });
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  update() {
    super.update();
  }
  draw(canvas) {
    if (this.parent && this.text && !this.needsInitialization) {
      canvas.save();
      const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
      canvas.scale(1 / drawScale, 1 / drawScale);
      M2c2KitHelpers.rotateCanvasForDrawableNode(canvas, this);
      const x = this.absolutePosition.x * drawScale;
      const y = (this.absolutePosition.y + this.size.height * this.anchorPoint.y * this.absoluteScale) * drawScale;
      if (this.paint === void 0 || this.font === void 0) {
        throw new M2Error(
          `in TextLine node ${this}, Paint or Font is undefined.`
        );
      }
      if (this.absoluteAlphaChange !== 0) {
        this.paint.setAlphaf(this.absoluteAlpha);
      }
      canvas.drawText(this.textForDraw, x, y, this.paint, this.font);
      canvas.restore();
    }
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    const i18n = this.game.i18n;
    if (i18n && this.localize !== false) {
      const textLocalization = i18n.getTextLocalization(
        this.text,
        this.interpolation
      );
      this.localizedFontName = textLocalization.fontName;
      this.localizedFontNames = textLocalization.fontNames ?? [];
    }
    const requiredFont = this.getRequiredTextLineFont(this.game.fontManager);
    if (requiredFont.status === M2FontStatus.Deferred) {
      return;
    }
    this.initialize();
    if (this.paint === void 0 || this.font === void 0) {
      throw new M2Error(
        `warmup TextLine node ${this.toString()}: Paint or Font is undefined.`
      );
    }
    canvas.drawText(this.text, 0, 0, this.paint, this.font);
  }
}

class Sprite extends M2Node {
  /**
   * Visual image displayed on the screen.
   *
   * @remarks Images that will be used to create the sprite must be loaded during the Game.initialize() method prior to their use.
   *
   * @param options - {@link SpriteOptions}
   */
  constructor(options = {}) {
    super(options);
    this.type = M2NodeType.Sprite;
    this.isDrawable = true;
    // Drawable options
    this._anchorPoint = { x: 0.5, y: 0.5 };
    this._zPosition = 0;
    // Sprite options
    this._imageName = "";
    handleInterfaceOptions(this, options);
    if (options.imageName !== void 0) {
      this.imageName = options.imageName;
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      imageName: this.imageName
    };
  }
  initialize() {
    this.m2Image = this.game.imageManager.getImage(this._imageName);
    if (!this.m2Image) {
      throw new M2Error(
        `could not create sprite. the image named ${this._imageName} has not been loaded`
      );
    }
    this.size.width = this.m2Image.width;
    this.size.height = this.m2Image.height;
    if (!this._paint) {
      this.paint = new this.canvasKit.Paint();
    }
    this.needsInitialization = false;
  }
  dispose() {
    CanvasKitHelpers.Dispose([this.m2Image?.canvaskitImage, this._paint]);
  }
  get imageName() {
    return this._imageName;
  }
  set imageName(imageName) {
    if (Equal.value(this._imageName, imageName)) {
      return;
    }
    this._imageName = imageName;
    this.needsInitialization = true;
  }
  get anchorPoint() {
    const node = this;
    return {
      get x() {
        return node._anchorPoint.x;
      },
      set x(x) {
        if (Equal.value(node._anchorPoint.x, x)) {
          return;
        }
        node._anchorPoint.x = x;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      },
      get y() {
        return node._anchorPoint.y;
      },
      set y(y) {
        if (Equal.value(node._anchorPoint.y, y)) {
          return;
        }
        node._anchorPoint.y = y;
        node.savePropertyChangeEvent("anchorPoint", node.anchorPoint);
      }
    };
  }
  set anchorPoint(anchorPoint) {
    if (Equal.value(this._anchorPoint, anchorPoint)) {
      return;
    }
    this._anchorPoint = anchorPoint;
    this.savePropertyChangeEvent("anchorPoint", this.anchorPoint);
  }
  get zPosition() {
    return this._zPosition;
  }
  set zPosition(zPosition) {
    if (Equal.value(this._zPosition, zPosition)) {
      return;
    }
    this._zPosition = zPosition;
    this.savePropertyChangeEvent("zPosition", zPosition);
  }
  set paint(paint) {
    this._paint = paint;
  }
  get paint() {
    if (!this._paint) {
      throw new M2Error(
        `in paint getter: Sprite node ${this.toString()} paint is undefined.`
      );
    }
    return this._paint;
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new Sprite({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      imageName: this.imageName,
      name: newName
    });
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  update() {
    super.update();
  }
  draw(canvas) {
    if (!this.hidden) {
      if (this.m2Image) {
        canvas.save();
        const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
        canvas.scale(1 / drawScale, 1 / drawScale);
        M2c2KitHelpers.rotateCanvasForDrawableNode(canvas, this);
        const x = (this.absolutePosition.x - this.size.width * this.anchorPoint.x * this.absoluteScale) * drawScale;
        const y = (this.absolutePosition.y - this.size.height * this.anchorPoint.y * this.absoluteScale) * drawScale;
        if (this.absoluteAlphaChange !== 0) {
          this.paint.setAlphaf(this.absoluteAlpha);
        }
        if (this.m2Image.status === M2ImageStatus.Ready && this.m2Image.canvaskitImage) {
          if (this.m2Image.isFallback) {
            this.drawFallbackImageBorder(canvas);
          }
          canvas.drawImage(this.m2Image.canvaskitImage, x, y, this.paint);
        } else {
          if (this.m2Image.status === M2ImageStatus.Deferred) {
            console.log(
              `begin loading lazy image ${this.m2Image.imageName} for Sprite node ${this.toString()}`
            );
            this.game.imageManager.prepareDeferredImage(this.m2Image);
          }
          if (this.m2Image.status === M2ImageStatus.Error) {
            throw new M2Error(
              `error status on image ${this.m2Image.imageName} for Sprite node ${this.toString()}`
            );
          }
        }
        canvas.restore();
      }
      super.drawChildren(canvas);
    }
  }
  warmup(canvas) {
    if (this.m2Image?.status === M2ImageStatus.Ready) {
      this.initialize();
      if (!this.m2Image) {
        throw new M2Error(
          `in Sprite.warmup(): Sprite node ${this.toString()}: image not loaded.`
        );
      }
      if (!this.m2Image.canvaskitImage) {
        throw new M2Error(
          `in Sprite.warmup(): Sprite node ${this.toString()} image ${this.m2Image.imageName} is undefined.`
        );
      }
      canvas.drawImage(this.m2Image.canvaskitImage, 0, 0);
    }
    this.children.forEach((child) => {
      if (child.isDrawable) {
        child.warmup(canvas);
      }
    });
  }
  /**
   * Draws a rectangle border around the image to indicate that a fallback
   * image is being used.
   *
   * @remarks The size of the rectangle is the same as the image, but because
   * the stroke width of the paint is wider than 1 pixel (see method
   * `configureImageLocalization()` in `ImageManager.ts`), the rectangle will
   * be larger than the image and thus be visible.
   *
   * @param canvas - CanvasKit canvas to draw on
   */
  drawFallbackImageBorder(canvas) {
    const paint = this.game.imageManager.missingLocalizationImagePaint;
    if (!paint) {
      return;
    }
    const drawScale = m2c2Globals.canvasScale / this.absoluteScale;
    const rect = this.canvasKit.RRectXY(
      this.canvasKit.LTRBRect(
        (this.absolutePosition.x - this.anchorPoint.x * this.size.width * this.absoluteScale) * drawScale,
        (this.absolutePosition.y - this.anchorPoint.y * this.size.height * this.absoluteScale) * drawScale,
        (this.absolutePosition.x + this.size.width * this.absoluteScale - this.anchorPoint.x * this.size.width * this.absoluteScale) * drawScale,
        (this.absolutePosition.y + this.size.height * this.absoluteScale - this.anchorPoint.y * this.size.height * this.absoluteScale) * drawScale
      ),
      0,
      0
    );
    canvas.drawRRect(rect, paint);
  }
}

class M2NodeFactory {
  /**
   * The `M2NodeFactory` creates nodes of the specified type with the specified
   * options for event replay.
   */
  constructor() {
    M2c2KitHelpers.registerM2NodeClass(Label, Shape, Sprite, Scene, TextLine);
  }
  /**
   * Creates a new node of the specified type with the specified options.
   *
   * @param type - The type of node to create
   * @param compositeType - The composite type of the node to create
   * @param options - The options to use when creating the node
   * @returns created node
   */
  createNode(type, compositeType, options) {
    const classNameToCreate = compositeType ? compositeType : type;
    if (!this.hasClassRegistration(classNameToCreate)) {
      throw new M2Error(`Unknown node type: ${classNameToCreate}`);
    }
    if (!m2c2Globals.m2NodeClassRegistry) {
      throw new M2Error("Node class registry is not initialized.");
    }
    const classToInstantiate = m2c2Globals.m2NodeClassRegistry[classNameToCreate];
    const node = new classToInstantiate(options);
    return node;
  }
  hasClassRegistration(className) {
    return Object.keys(m2c2Globals.m2NodeClassRegistry ?? {}).includes(
      className
    );
  }
}

class FontManager {
  constructor(game, baseUrls) {
    this.fonts = {};
    this.game = game;
    this.baseUrls = baseUrls;
    this.canvasKit = game.canvasKit;
    this.provider = this.canvasKit.TypefaceFontProvider.Make();
  }
  /**
   * Loads font assets and makes them ready to use during the game initialization.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't call this because the m2c2kit
   * framework will call this automatically.
   *
   * @param fonts - array of FontAsset objects (name and url)
   */
  initializeFonts(fonts) {
    return this.loadFonts(fonts ?? []);
  }
  /**
   * Loads an array of fonts and makes them ready for the game.
   *
   * @param fonts - an array of {@link FontAsset}
   * @returns A promise that completes when all fonts have loaded
   */
  async loadFonts(fonts) {
    if (fonts.length === 0) {
      return;
    }
    const prepareFontsPromises = fonts.map((font, i) => {
      let url = font.url;
      if (!M2c2KitHelpers.urlHasScheme(font.url)) {
        url = M2c2KitHelpers.getUrlFromManifest(
          this.game,
          `${this.baseUrls.assets}/${font.url}`
        );
      }
      const m2Font = {
        fontName: font.fontName,
        typeface: void 0,
        /**
         * sharedFont is undefined if the font is not shared with other games
         * in the session. Otherwise, it has the already loaded font data and
         * the url from which it was loaded.
         */
        data: font.sharedFont?.data,
        default: i === 0,
        url: font.sharedFont?.url ?? url,
        status: font.lazy ? M2FontStatus.Deferred : M2FontStatus.Loading
      };
      this.fonts[font.fontName] = m2Font;
      if (m2Font.status === M2FontStatus.Loading) {
        return this.prepareFont(m2Font);
      }
      return;
    });
    await Promise.all(prepareFontsPromises);
  }
  async prepareFont(font) {
    const arrayBuffer = font.data ?? await this.fetchFontAsArrayBuffer(font);
    this.registerFont(arrayBuffer, font);
    console.log(
      `\u26AA font ${font.fontName}${font.default ? " (default)" : ""} loaded for game ${this.game.id} from ${font.url}`
    );
  }
  /**
   * Makes ready to the game a m2c2kit font ({@link M2Font}) that was
   * previously loaded, but whose processing was deferred.
   *
   * @internal For m2c2kit library use only
   *
   * @param font - M2Font to make ready
   * @returns A promise that completes when the font is ready
   */
  async prepareDeferredFont(font) {
    font.status = M2FontStatus.Loading;
    return this.prepareFont(font);
  }
  async fetchFontAsArrayBuffer(font) {
    const response = await fetch(font.url);
    if (!response.ok) {
      throw new M2Error(
        `cannot fetch font ${font.fontName} at url ${font.url}: ${response.statusText}`
      );
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
  }
  registerFont(arrayBuffer, font) {
    this.provider.registerFont(arrayBuffer, font.fontName);
    const typeface = this.canvasKit.Typeface.MakeFreeTypeFaceFromData(arrayBuffer);
    if (!typeface) {
      throw new M2Error(
        `cannot make typeface for font ${font.fontName} at url ${font.url}`
      );
    }
    font.typeface = typeface;
    font.status = M2FontStatus.Ready;
  }
  /**
   * Returns a m2c2kit font ({@link M2Font}) that has been loaded by the
   * FontManager.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't need to call this because font
   * initialization and processing is handled by the framework.
   *
   * @param fontName - font's name as defined in the game's font assets
   * @returns a m2c2kit font
   */
  getFont(fontName) {
    const font = this.fonts[fontName];
    return font;
  }
  /**
   * Returns the m2c2kit default font ({@link M2Font}) that has been loaded
   * by the FontManager.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't need to call this because font
   * initialization and processing is handled by the framework.
   *
   * @returns a m2c2kit font
   */
  getDefaultFont() {
    const defaultFont = Object.values(this.fonts).find((font) => font.default);
    if (!defaultFont) {
      throw new M2Error(
        `no default font found; please make sure at least one font is loaded`
      );
    }
    return defaultFont;
  }
  /**
   * Frees up resources allocated by the FontManager.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks This will be done automatically by the m2c2kit library; the
   * end-user must not call this.
   */
  dispose() {
    const typefaces = Object.entries(this.fonts).map(([, val]) => val.typeface);
    CanvasKitHelpers.Dispose([...typefaces, this.provider]);
  }
  /**
   * Gets a CanvasKit Typeface that has been loaded.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't need to call this because font
   * initialization and processing is handled by the framework.
   *
   * @param fontName - name as defined in the game's font assets
   * @returns the requested Typeface
   */
  getTypeface(fontName) {
    const typeface = this.fonts[fontName]?.typeface;
    if (!typeface) {
      throw new M2Error(`font ${fontName} not found`);
    }
    return typeface;
  }
  /**
   * Gets names of fonts loaded.
   *
   * @returns array of font names loaded from the game's font assets and
   * converted into M2Font objects. The names are the names as defined
   * in the game's font assets.
   */
  getFontNames() {
    return Object.keys(this.fonts);
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var canvaskit = {exports: {}};

var _polyfillNode_fs = {};

var _polyfillNode_fs$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _polyfillNode_fs
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_fs$1);

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
}
// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isPathAbsolute ? '/' : '') + path;
}
// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}


// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

var sep = '/';
var delimiter = ':';

function dirname(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}

function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


function extname(path) {
  return splitPath(path)[3];
}
var _polyfillNode_path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

var _polyfillNode_path$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  basename: basename,
  default: _polyfillNode_path,
  delimiter: delimiter,
  dirname: dirname,
  extname: extname,
  isAbsolute: isAbsolute,
  join: join,
  normalize: normalize,
  relative: relative,
  resolve: resolve,
  sep: sep
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_path$1);

var hasRequiredCanvaskit;

function requireCanvaskit () {
	if (hasRequiredCanvaskit) return canvaskit.exports;
	hasRequiredCanvaskit = 1;
	(function (module, exports) {
		var CanvasKitInit = (() => {
		  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
		  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
		  return (
		function(moduleArg = {}) {

		var w=moduleArg,aa,ca;w.ready=new Promise((a,b)=>{aa=a;ca=b;});
		(function(a){a.ke=a.ke||[];a.ke.push(function(){a.MakeSWCanvasSurface=function(b){var c=b,f="undefined"!==typeof OffscreenCanvas&&c instanceof OffscreenCanvas;if(!("undefined"!==typeof HTMLCanvasElement&&c instanceof HTMLCanvasElement||f||(c=document.getElementById(b),c)))throw "Canvas with id "+b+" was not found";if(b=a.MakeSurface(c.width,c.height))b.ce=c;return b};a.MakeCanvasSurface||(a.MakeCanvasSurface=a.MakeSWCanvasSurface);a.MakeSurface=function(b,c){var f={width:b,height:c,colorType:a.ColorType.RGBA_8888,
		alphaType:a.AlphaType.Unpremul,colorSpace:a.ColorSpace.SRGB},h=b*c*4,m=a._malloc(h);if(f=a.Surface._makeRasterDirect(f,m,4*b))f.ce=null,f.Xf=b,f.Tf=c,f.Vf=h,f.wf=m,f.getCanvas().clear(a.TRANSPARENT);return f};a.MakeRasterDirectSurface=function(b,c,f){return a.Surface._makeRasterDirect(b,c.byteOffset,f)};a.Surface.prototype.flush=function(b){a.de(this.be);this._flush();if(this.ce){var c=new Uint8ClampedArray(a.HEAPU8.buffer,this.wf,this.Vf);c=new ImageData(c,this.Xf,this.Tf);b?this.ce.getContext("2d").putImageData(c,
		0,0,b[0],b[1],b[2]-b[0],b[3]-b[1]):this.ce.getContext("2d").putImageData(c,0,0);}};a.Surface.prototype.dispose=function(){this.wf&&a._free(this.wf);this.delete();};a.de=a.de||function(){};a.mf=a.mf||function(){return null};});})(w);
		(function(a){a.ke=a.ke||[];a.ke.push(function(){function b(n,p,v){return n&&n.hasOwnProperty(p)?n[p]:v}function c(n){var p=da(ha);ha[p]=n;return p}function f(n){return n.naturalHeight||n.videoHeight||n.displayHeight||n.height}function h(n){return n.naturalWidth||n.videoWidth||n.displayWidth||n.width}function m(n,p,v,E){n.bindTexture(n.TEXTURE_2D,p);E||v.alphaType!==a.AlphaType.Premul||n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);return p}function u(n,p,v){v||p.alphaType!==a.AlphaType.Premul||
		n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);n.bindTexture(n.TEXTURE_2D,null);}a.GetWebGLContext=function(n,p){if(!n)throw "null canvas passed into makeWebGLContext";var v={alpha:b(p,"alpha",1),depth:b(p,"depth",1),stencil:b(p,"stencil",8),antialias:b(p,"antialias",0),premultipliedAlpha:b(p,"premultipliedAlpha",1),preserveDrawingBuffer:b(p,"preserveDrawingBuffer",0),preferLowPowerToHighPerformance:b(p,"preferLowPowerToHighPerformance",0),failIfMajorPerformanceCaveat:b(p,"failIfMajorPerformanceCaveat",
		0),enableExtensionsByDefault:b(p,"enableExtensionsByDefault",1),explicitSwapControl:b(p,"explicitSwapControl",0),renderViaOffscreenBackBuffer:b(p,"renderViaOffscreenBackBuffer",0)};v.majorVersion=p&&p.majorVersion?p.majorVersion:"undefined"!==typeof WebGL2RenderingContext?2:1;if(v.explicitSwapControl)throw "explicitSwapControl is not supported";n=ia(n,v);if(!n)return 0;ja(n);B.xe.getExtension("WEBGL_debug_renderer_info");return n};a.deleteContext=function(n){B===ma[n]&&(B=null);"object"==typeof JSEvents&&
		JSEvents.Mg(ma[n].xe.canvas);ma[n]&&ma[n].xe.canvas&&(ma[n].xe.canvas.Rf=void 0);ma[n]=null;};a._setTextureCleanup({deleteTexture:function(n,p){var v=ha[p];v&&ma[n].xe.deleteTexture(v);ha[p]=null;}});a.MakeWebGLContext=function(n){if(!this.de(n))return null;var p=this._MakeGrContext();if(!p)return null;p.be=n;var v=p.delete.bind(p);p["delete"]=function(){a.de(this.be);v();}.bind(p);return B.Af=p};a.MakeGrContext=a.MakeWebGLContext;a.GrDirectContext.prototype.getResourceCacheLimitBytes=function(){a.de(this.be);
		this._getResourceCacheLimitBytes();};a.GrDirectContext.prototype.getResourceCacheUsageBytes=function(){a.de(this.be);this._getResourceCacheUsageBytes();};a.GrDirectContext.prototype.releaseResourcesAndAbandonContext=function(){a.de(this.be);this._releaseResourcesAndAbandonContext();};a.GrDirectContext.prototype.setResourceCacheLimitBytes=function(n){a.de(this.be);this._setResourceCacheLimitBytes(n);};a.MakeOnScreenGLSurface=function(n,p,v,E,G,L){if(!this.de(n.be))return null;p=void 0===G||void 0===L?
		this._MakeOnScreenGLSurface(n,p,v,E):this._MakeOnScreenGLSurface(n,p,v,E,G,L);if(!p)return null;p.be=n.be;return p};a.MakeRenderTarget=function(){var n=arguments[0];if(!this.de(n.be))return null;if(3===arguments.length){var p=this._MakeRenderTargetWH(n,arguments[1],arguments[2]);if(!p)return null}else if(2===arguments.length){if(p=this._MakeRenderTargetII(n,arguments[1]),!p)return null}else return null;p.be=n.be;return p};a.MakeWebGLCanvasSurface=function(n,p,v){p=p||null;var E=n,G="undefined"!==
		typeof OffscreenCanvas&&E instanceof OffscreenCanvas;if(!("undefined"!==typeof HTMLCanvasElement&&E instanceof HTMLCanvasElement||G||(E=document.getElementById(n),E)))throw "Canvas with id "+n+" was not found";n=this.GetWebGLContext(E,v);if(!n||0>n)throw "failed to create webgl context: err "+n;n=this.MakeWebGLContext(n);p=this.MakeOnScreenGLSurface(n,E.width,E.height,p);return p?p:(p=E.cloneNode(true),E.parentNode.replaceChild(p,E),p.classList.add("ck-replaced"),a.MakeSWCanvasSurface(p))};a.MakeCanvasSurface=
		a.MakeWebGLCanvasSurface;a.Surface.prototype.makeImageFromTexture=function(n,p){a.de(this.be);n=c(n);if(p=this._makeImageFromTexture(this.be,n,p))p.cf=n;return p};a.Surface.prototype.makeImageFromTextureSource=function(n,p,v){p||(p={height:f(n),width:h(n),colorType:a.ColorType.RGBA_8888,alphaType:v?a.AlphaType.Premul:a.AlphaType.Unpremul});p.colorSpace||(p.colorSpace=a.ColorSpace.SRGB);a.de(this.be);var E=B.xe;v=m(E,E.createTexture(),p,v);2===B.version?E.texImage2D(E.TEXTURE_2D,0,E.RGBA,p.width,p.height,
		0,E.RGBA,E.UNSIGNED_BYTE,n):E.texImage2D(E.TEXTURE_2D,0,E.RGBA,E.RGBA,E.UNSIGNED_BYTE,n);u(E,p);this._resetContext();return this.makeImageFromTexture(v,p)};a.Surface.prototype.updateTextureFromSource=function(n,p,v){if(n.cf){a.de(this.be);var E=n.getImageInfo(),G=B.xe,L=m(G,ha[n.cf],E,v);2===B.version?G.texImage2D(G.TEXTURE_2D,0,G.RGBA,h(p),f(p),0,G.RGBA,G.UNSIGNED_BYTE,p):G.texImage2D(G.TEXTURE_2D,0,G.RGBA,G.RGBA,G.UNSIGNED_BYTE,p);u(G,E,v);this._resetContext();ha[n.cf]=null;n.cf=c(L);E.colorSpace=
		n.getColorSpace();p=this._makeImageFromTexture(this.be,n.cf,E);v=n.ae.ie;G=n.ae.pe;n.ae.ie=p.ae.ie;n.ae.pe=p.ae.pe;p.ae.ie=v;p.ae.pe=G;p.delete();E.colorSpace.delete();}};a.MakeLazyImageFromTextureSource=function(n,p,v){p||(p={height:f(n),width:h(n),colorType:a.ColorType.RGBA_8888,alphaType:v?a.AlphaType.Premul:a.AlphaType.Unpremul});p.colorSpace||(p.colorSpace=a.ColorSpace.SRGB);var E={makeTexture:function(){var G=B,L=G.xe,y=m(L,L.createTexture(),p,v);2===G.version?L.texImage2D(L.TEXTURE_2D,0,L.RGBA,
		p.width,p.height,0,L.RGBA,L.UNSIGNED_BYTE,n):L.texImage2D(L.TEXTURE_2D,0,L.RGBA,L.RGBA,L.UNSIGNED_BYTE,n);u(L,p,v);return c(y)},freeSrc:function(){}};"VideoFrame"===n.constructor.name&&(E.freeSrc=function(){n.close();});return a.Image._makeFromGenerator(p,E)};a.de=function(n){return n?ja(n):false};a.mf=function(){return B&&B.Af&&!B.Af.isDeleted()?B.Af:null};});})(w);
		(function(a){function b(e,d,g,l,t){for(var x=0;x<e.length;x++)d[x*g+(x*t+l+g)%g]=e[x];return d}function c(e){for(var d=e*e,g=Array(d);d--;)g[d]=0===d%(e+1)?1:0;return g}function f(e){return e?e.constructor===Float32Array&&4===e.length:false}function h(e){return (n(255*e[3])<<24|n(255*e[0])<<16|n(255*e[1])<<8|n(255*e[2])<<0)>>>0}function m(e){if(e&&e._ck)return e;if(e instanceof Float32Array){for(var d=Math.floor(e.length/4),g=new Uint32Array(d),l=0;l<d;l++)g[l]=h(e.slice(4*l,4*(l+1)));return g}if(e instanceof
		Uint32Array)return e;if(e instanceof Array&&e[0]instanceof Float32Array)return e.map(h)}function u(e){if(void 0===e)return 1;var d=parseFloat(e);return e&&-1!==e.indexOf("%")?d/100:d}function n(e){return Math.round(Math.max(0,Math.min(e||0,255)))}function p(e,d){d&&d._ck||a._free(e);}function v(e,d,g){if(!e||!e.length)return X;if(e&&e._ck)return e.byteOffset;var l=a[d].BYTES_PER_ELEMENT;g||(g=a._malloc(e.length*l));a[d].set(e,g/l);return g}function E(e){var d={te:X,count:e.length,colorType:a.ColorType.RGBA_F32};
		if(e instanceof Float32Array)d.te=v(e,"HEAPF32"),d.count=e.length/4;else if(e instanceof Uint32Array)d.te=v(e,"HEAPU32"),d.colorType=a.ColorType.RGBA_8888;else if(e instanceof Array){if(e&&e.length){for(var g=a._malloc(16*e.length),l=0,t=g/4,x=0;x<e.length;x++)for(var C=0;4>C;C++)a.HEAPF32[t+l]=e[x][C],l++;e=g;}else e=X;d.te=e;}else throw "Invalid argument to copyFlexibleColorArray, Not a color array "+typeof e;return d}function G(e){if(!e)return X;var d=Xb.toTypedArray();if(e.length){if(6===e.length||
		9===e.length)return v(e,"HEAPF32",Oa),6===e.length&&a.HEAPF32.set(Hd,6+Oa/4),Oa;if(16===e.length)return d[0]=e[0],d[1]=e[1],d[2]=e[3],d[3]=e[4],d[4]=e[5],d[5]=e[7],d[6]=e[12],d[7]=e[13],d[8]=e[15],Oa;throw "invalid matrix size";}if(void 0===e.m11)throw "invalid matrix argument";d[0]=e.m11;d[1]=e.m21;d[2]=e.m41;d[3]=e.m12;d[4]=e.m22;d[5]=e.m42;d[6]=e.m14;d[7]=e.m24;d[8]=e.m44;return Oa}function L(e){if(!e)return X;var d=Yb.toTypedArray();if(e.length){if(16!==e.length&&6!==e.length&&9!==e.length)throw "invalid matrix size";
		if(16===e.length)return v(e,"HEAPF32",bb);d.fill(0);d[0]=e[0];d[1]=e[1];d[3]=e[2];d[4]=e[3];d[5]=e[4];d[7]=e[5];d[10]=1;d[12]=e[6];d[13]=e[7];d[15]=e[8];6===e.length&&(d[12]=0,d[13]=0,d[15]=1);return bb}if(void 0===e.m11)throw "invalid matrix argument";d[0]=e.m11;d[1]=e.m21;d[2]=e.m31;d[3]=e.m41;d[4]=e.m12;d[5]=e.m22;d[6]=e.m32;d[7]=e.m42;d[8]=e.m13;d[9]=e.m23;d[10]=e.m33;d[11]=e.m43;d[12]=e.m14;d[13]=e.m24;d[14]=e.m34;d[15]=e.m44;return bb}function y(e,d){return v(e,"HEAPF32",d||Va)}function M(e,
		d,g,l){var t=Zb.toTypedArray();t[0]=e;t[1]=d;t[2]=g;t[3]=l;return Va}function T(e){for(var d=new Float32Array(4),g=0;4>g;g++)d[g]=a.HEAPF32[e/4+g];return d}function S(e,d){return v(e,"HEAPF32",d||ka)}function sa(e,d){return v(e,"HEAPF32",d||$b)}function pa(){for(var e=0,d=0;d<arguments.length-1;d+=2)e+=arguments[d]*arguments[d+1];return e}function ib(e,d,g){for(var l=Array(e.length),t=0;t<g;t++)for(var x=0;x<g;x++){for(var C=0,K=0;K<g;K++)C+=e[g*t+K]*d[g*K+x];l[t*g+x]=C;}return l}function jb(e,d){for(var g=
		ib(d[0],d[1],e),l=2;l<d.length;)g=ib(g,d[l],e),l++;return g}a.Color=function(e,d,g,l){ void 0===l&&(l=1);return a.Color4f(n(e)/255,n(d)/255,n(g)/255,l)};a.ColorAsInt=function(e,d,g,l){ void 0===l&&(l=255);return (n(l)<<24|n(e)<<16|n(d)<<8|n(g)<<0&268435455)>>>0};a.Color4f=function(e,d,g,l){ void 0===l&&(l=1);return Float32Array.of(e,d,g,l)};Object.defineProperty(a,"TRANSPARENT",{get:function(){return a.Color4f(0,0,0,0)}});Object.defineProperty(a,"BLACK",{get:function(){return a.Color4f(0,0,0,1)}});Object.defineProperty(a,
		"WHITE",{get:function(){return a.Color4f(1,1,1,1)}});Object.defineProperty(a,"RED",{get:function(){return a.Color4f(1,0,0,1)}});Object.defineProperty(a,"GREEN",{get:function(){return a.Color4f(0,1,0,1)}});Object.defineProperty(a,"BLUE",{get:function(){return a.Color4f(0,0,1,1)}});Object.defineProperty(a,"YELLOW",{get:function(){return a.Color4f(1,1,0,1)}});Object.defineProperty(a,"CYAN",{get:function(){return a.Color4f(0,1,1,1)}});Object.defineProperty(a,"MAGENTA",{get:function(){return a.Color4f(1,
		0,1,1)}});a.getColorComponents=function(e){return [Math.floor(255*e[0]),Math.floor(255*e[1]),Math.floor(255*e[2]),e[3]]};a.parseColorString=function(e,d){e=e.toLowerCase();if(e.startsWith("#")){d=255;switch(e.length){case 9:d=parseInt(e.slice(7,9),16);case 7:var g=parseInt(e.slice(1,3),16);var l=parseInt(e.slice(3,5),16);var t=parseInt(e.slice(5,7),16);break;case 5:d=17*parseInt(e.slice(4,5),16);case 4:g=17*parseInt(e.slice(1,2),16),l=17*parseInt(e.slice(2,3),16),t=17*parseInt(e.slice(3,4),16);}return a.Color(g,
		l,t,d/255)}return e.startsWith("rgba")?(e=e.slice(5,-1),e=e.split(","),a.Color(+e[0],+e[1],+e[2],u(e[3]))):e.startsWith("rgb")?(e=e.slice(4,-1),e=e.split(","),a.Color(+e[0],+e[1],+e[2],u(e[3]))):e.startsWith("gray(")||e.startsWith("hsl")||!d||(e=d[e],void 0===e)?a.BLACK:e};a.multiplyByAlpha=function(e,d){e=e.slice();e[3]=Math.max(0,Math.min(e[3]*d,1));return e};a.Malloc=function(e,d){var g=a._malloc(d*e.BYTES_PER_ELEMENT);return {_ck:true,length:d,byteOffset:g,Je:null,subarray:function(l,t){l=this.toTypedArray().subarray(l,
		t);l._ck=true;return l},toTypedArray:function(){if(this.Je&&this.Je.length)return this.Je;this.Je=new e(a.HEAPU8.buffer,g,d);this.Je._ck=true;return this.Je}}};a.Free=function(e){a._free(e.byteOffset);e.byteOffset=X;e.toTypedArray=null;e.Je=null;};var Oa=X,Xb,bb=X,Yb,Va=X,Zb,Ca,ka=X,zc,Pa=X,Ac,ac=X,Bc,bc=X,Ab,kb=X,Cc,$b=X,Dc,Ec=X,Hd=Float32Array.of(0,0,1),X=0;a.onRuntimeInitialized=function(){function e(d,g,l,t,x,C,K){C||(C=4*t.width,t.colorType===a.ColorType.RGBA_F16?C*=2:t.colorType===a.ColorType.RGBA_F32&&
		(C*=4));var O=C*t.height;var P=x?x.byteOffset:a._malloc(O);if(K?!d._readPixels(t,P,C,g,l,K):!d._readPixels(t,P,C,g,l))return x||a._free(P),null;if(x)return x.toTypedArray();switch(t.colorType){case a.ColorType.RGBA_8888:case a.ColorType.RGBA_F16:d=(new Uint8Array(a.HEAPU8.buffer,P,O)).slice();break;case a.ColorType.RGBA_F32:d=(new Float32Array(a.HEAPU8.buffer,P,O)).slice();break;default:return null}a._free(P);return d}Zb=a.Malloc(Float32Array,4);Va=Zb.byteOffset;Yb=a.Malloc(Float32Array,16);bb=Yb.byteOffset;
		Xb=a.Malloc(Float32Array,9);Oa=Xb.byteOffset;Cc=a.Malloc(Float32Array,12);$b=Cc.byteOffset;Dc=a.Malloc(Float32Array,12);Ec=Dc.byteOffset;Ca=a.Malloc(Float32Array,4);ka=Ca.byteOffset;zc=a.Malloc(Float32Array,4);Pa=zc.byteOffset;Ac=a.Malloc(Float32Array,3);ac=Ac.byteOffset;Bc=a.Malloc(Float32Array,3);bc=Bc.byteOffset;Ab=a.Malloc(Int32Array,4);kb=Ab.byteOffset;a.ColorSpace.SRGB=a.ColorSpace._MakeSRGB();a.ColorSpace.DISPLAY_P3=a.ColorSpace._MakeDisplayP3();a.ColorSpace.ADOBE_RGB=a.ColorSpace._MakeAdobeRGB();
		a.GlyphRunFlags={IsWhiteSpace:a._GlyphRunFlags_isWhiteSpace};a.Path.MakeFromCmds=function(d){var g=v(d,"HEAPF32"),l=a.Path._MakeFromCmds(g,d.length);p(g,d);return l};a.Path.MakeFromVerbsPointsWeights=function(d,g,l){var t=v(d,"HEAPU8"),x=v(g,"HEAPF32"),C=v(l,"HEAPF32"),K=a.Path._MakeFromVerbsPointsWeights(t,d.length,x,g.length,C,l&&l.length||0);p(t,d);p(x,g);p(C,l);return K};a.Path.prototype.addArc=function(d,g,l){d=S(d);this._addArc(d,g,l);return this};a.Path.prototype.addCircle=function(d,g,l,t){this._addCircle(d,
		g,l,!!t);return this};a.Path.prototype.addOval=function(d,g,l){ void 0===l&&(l=1);d=S(d);this._addOval(d,!!g,l);return this};a.Path.prototype.addPath=function(){var d=Array.prototype.slice.call(arguments),g=d[0],l=false;"boolean"===typeof d[d.length-1]&&(l=d.pop());if(1===d.length)this._addPath(g,1,0,0,0,1,0,0,0,1,l);else if(2===d.length)d=d[1],this._addPath(g,d[0],d[1],d[2],d[3],d[4],d[5],d[6]||0,d[7]||0,d[8]||1,l);else if(7===d.length||10===d.length)this._addPath(g,d[1],d[2],d[3],d[4],d[5],d[6],d[7]||
		0,d[8]||0,d[9]||1,l);else return null;return this};a.Path.prototype.addPoly=function(d,g){var l=v(d,"HEAPF32");this._addPoly(l,d.length/2,g);p(l,d);return this};a.Path.prototype.addRect=function(d,g){d=S(d);this._addRect(d,!!g);return this};a.Path.prototype.addRRect=function(d,g){d=sa(d);this._addRRect(d,!!g);return this};a.Path.prototype.addVerbsPointsWeights=function(d,g,l){var t=v(d,"HEAPU8"),x=v(g,"HEAPF32"),C=v(l,"HEAPF32");this._addVerbsPointsWeights(t,d.length,x,g.length,C,l&&l.length||0);
		p(t,d);p(x,g);p(C,l);};a.Path.prototype.arc=function(d,g,l,t,x,C){d=a.LTRBRect(d-l,g-l,d+l,g+l);x=(x-t)/Math.PI*180-360*!!C;C=new a.Path;C.addArc(d,t/Math.PI*180,x);this.addPath(C,true);C.delete();return this};a.Path.prototype.arcToOval=function(d,g,l,t){d=S(d);this._arcToOval(d,g,l,t);return this};a.Path.prototype.arcToRotated=function(d,g,l,t,x,C,K){this._arcToRotated(d,g,l,!!t,!!x,C,K);return this};a.Path.prototype.arcToTangent=function(d,g,l,t,x){this._arcToTangent(d,g,l,t,x);return this};a.Path.prototype.close=
		function(){this._close();return this};a.Path.prototype.conicTo=function(d,g,l,t,x){this._conicTo(d,g,l,t,x);return this};a.Path.prototype.computeTightBounds=function(d){this._computeTightBounds(ka);var g=Ca.toTypedArray();return d?(d.set(g),d):g.slice()};a.Path.prototype.cubicTo=function(d,g,l,t,x,C){this._cubicTo(d,g,l,t,x,C);return this};a.Path.prototype.dash=function(d,g,l){return this._dash(d,g,l)?this:null};a.Path.prototype.getBounds=function(d){this._getBounds(ka);var g=Ca.toTypedArray();return d?
		(d.set(g),d):g.slice()};a.Path.prototype.lineTo=function(d,g){this._lineTo(d,g);return this};a.Path.prototype.moveTo=function(d,g){this._moveTo(d,g);return this};a.Path.prototype.offset=function(d,g){this._transform(1,0,d,0,1,g,0,0,1);return this};a.Path.prototype.quadTo=function(d,g,l,t){this._quadTo(d,g,l,t);return this};a.Path.prototype.rArcTo=function(d,g,l,t,x,C,K){this._rArcTo(d,g,l,t,x,C,K);return this};a.Path.prototype.rConicTo=function(d,g,l,t,x){this._rConicTo(d,g,l,t,x);return this};a.Path.prototype.rCubicTo=
		function(d,g,l,t,x,C){this._rCubicTo(d,g,l,t,x,C);return this};a.Path.prototype.rLineTo=function(d,g){this._rLineTo(d,g);return this};a.Path.prototype.rMoveTo=function(d,g){this._rMoveTo(d,g);return this};a.Path.prototype.rQuadTo=function(d,g,l,t){this._rQuadTo(d,g,l,t);return this};a.Path.prototype.stroke=function(d){d=d||{};d.width=d.width||1;d.miter_limit=d.miter_limit||4;d.cap=d.cap||a.StrokeCap.Butt;d.join=d.join||a.StrokeJoin.Miter;d.precision=d.precision||1;return this._stroke(d)?this:null};
		a.Path.prototype.transform=function(){if(1===arguments.length){var d=arguments[0];this._transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6]||0,d[7]||0,d[8]||1);}else if(6===arguments.length||9===arguments.length)d=arguments,this._transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6]||0,d[7]||0,d[8]||1);else throw "transform expected to take 1 or 9 arguments. Got "+arguments.length;return this};a.Path.prototype.trim=function(d,g,l){return this._trim(d,g,!!l)?this:null};a.Image.prototype.encodeToBytes=function(d,g){var l=
		a.mf();d=d||a.ImageFormat.PNG;g=g||100;return l?this._encodeToBytes(d,g,l):this._encodeToBytes(d,g)};a.Image.prototype.makeShaderCubic=function(d,g,l,t,x){x=G(x);return this._makeShaderCubic(d,g,l,t,x)};a.Image.prototype.makeShaderOptions=function(d,g,l,t,x){x=G(x);return this._makeShaderOptions(d,g,l,t,x)};a.Image.prototype.readPixels=function(d,g,l,t,x){var C=a.mf();return e(this,d,g,l,t,x,C)};a.Canvas.prototype.clear=function(d){a.de(this.be);d=y(d);this._clear(d);};a.Canvas.prototype.clipRRect=
		function(d,g,l){a.de(this.be);d=sa(d);this._clipRRect(d,g,l);};a.Canvas.prototype.clipRect=function(d,g,l){a.de(this.be);d=S(d);this._clipRect(d,g,l);};a.Canvas.prototype.concat=function(d){a.de(this.be);d=L(d);this._concat(d);};a.Canvas.prototype.drawArc=function(d,g,l,t,x){a.de(this.be);d=S(d);this._drawArc(d,g,l,t,x);};a.Canvas.prototype.drawAtlas=function(d,g,l,t,x,C,K){if(d&&t&&g&&l&&g.length===l.length){a.de(this.be);x||(x=a.BlendMode.SrcOver);var O=v(g,"HEAPF32"),P=v(l,"HEAPF32"),Y=l.length/4,
		ba=v(m(C),"HEAPU32");if(K&&"B"in K&&"C"in K)this._drawAtlasCubic(d,P,O,ba,Y,x,K.B,K.C,t);else {let r=a.FilterMode.Linear,D=a.MipmapMode.None;K&&(r=K.filter,"mipmap"in K&&(D=K.mipmap));this._drawAtlasOptions(d,P,O,ba,Y,x,r,D,t);}p(O,g);p(P,l);p(ba,C);}};a.Canvas.prototype.drawCircle=function(d,g,l,t){a.de(this.be);this._drawCircle(d,g,l,t);};a.Canvas.prototype.drawColor=function(d,g){a.de(this.be);d=y(d);void 0!==g?this._drawColor(d,g):this._drawColor(d);};a.Canvas.prototype.drawColorInt=function(d,g){a.de(this.be);
		this._drawColorInt(d,g||a.BlendMode.SrcOver);};a.Canvas.prototype.drawColorComponents=function(d,g,l,t,x){a.de(this.be);d=M(d,g,l,t);void 0!==x?this._drawColor(d,x):this._drawColor(d);};a.Canvas.prototype.drawDRRect=function(d,g,l){a.de(this.be);d=sa(d,$b);g=sa(g,Ec);this._drawDRRect(d,g,l);};a.Canvas.prototype.drawImage=function(d,g,l,t){a.de(this.be);this._drawImage(d,g,l,t||null);};a.Canvas.prototype.drawImageCubic=function(d,g,l,t,x,C){a.de(this.be);this._drawImageCubic(d,g,l,t,x,C||null);};a.Canvas.prototype.drawImageOptions=
		function(d,g,l,t,x,C){a.de(this.be);this._drawImageOptions(d,g,l,t,x,C||null);};a.Canvas.prototype.drawImageNine=function(d,g,l,t,x){a.de(this.be);g=v(g,"HEAP32",kb);l=S(l);this._drawImageNine(d,g,l,t,x||null);};a.Canvas.prototype.drawImageRect=function(d,g,l,t,x){a.de(this.be);S(g,ka);S(l,Pa);this._drawImageRect(d,ka,Pa,t,!!x);};a.Canvas.prototype.drawImageRectCubic=function(d,g,l,t,x,C){a.de(this.be);S(g,ka);S(l,Pa);this._drawImageRectCubic(d,ka,Pa,t,x,C||null);};a.Canvas.prototype.drawImageRectOptions=
		function(d,g,l,t,x,C){a.de(this.be);S(g,ka);S(l,Pa);this._drawImageRectOptions(d,ka,Pa,t,x,C||null);};a.Canvas.prototype.drawLine=function(d,g,l,t,x){a.de(this.be);this._drawLine(d,g,l,t,x);};a.Canvas.prototype.drawOval=function(d,g){a.de(this.be);d=S(d);this._drawOval(d,g);};a.Canvas.prototype.drawPaint=function(d){a.de(this.be);this._drawPaint(d);};a.Canvas.prototype.drawParagraph=function(d,g,l){a.de(this.be);this._drawParagraph(d,g,l);};a.Canvas.prototype.drawPatch=function(d,g,l,t,x){if(24>d.length)throw "Need 12 cubic points";
		if(g&&4>g.length)throw "Need 4 colors";if(l&&8>l.length)throw "Need 4 shader coordinates";a.de(this.be);const C=v(d,"HEAPF32"),K=g?v(m(g),"HEAPU32"):X,O=l?v(l,"HEAPF32"):X;t||(t=a.BlendMode.Modulate);this._drawPatch(C,K,O,t,x);p(O,l);p(K,g);p(C,d);};a.Canvas.prototype.drawPath=function(d,g){a.de(this.be);this._drawPath(d,g);};a.Canvas.prototype.drawPicture=function(d){a.de(this.be);this._drawPicture(d);};a.Canvas.prototype.drawPoints=function(d,g,l){a.de(this.be);var t=v(g,"HEAPF32");this._drawPoints(d,
		t,g.length/2,l);p(t,g);};a.Canvas.prototype.drawRRect=function(d,g){a.de(this.be);d=sa(d);this._drawRRect(d,g);};a.Canvas.prototype.drawRect=function(d,g){a.de(this.be);d=S(d);this._drawRect(d,g);};a.Canvas.prototype.drawRect4f=function(d,g,l,t,x){a.de(this.be);this._drawRect4f(d,g,l,t,x);};a.Canvas.prototype.drawShadow=function(d,g,l,t,x,C,K){a.de(this.be);var O=v(x,"HEAPF32"),P=v(C,"HEAPF32");g=v(g,"HEAPF32",ac);l=v(l,"HEAPF32",bc);this._drawShadow(d,g,l,t,O,P,K);p(O,x);p(P,C);};a.getShadowLocalBounds=
		function(d,g,l,t,x,C,K){d=G(d);l=v(l,"HEAPF32",ac);t=v(t,"HEAPF32",bc);if(!this._getShadowLocalBounds(d,g,l,t,x,C,ka))return null;g=Ca.toTypedArray();return K?(K.set(g),K):g.slice()};a.Canvas.prototype.drawTextBlob=function(d,g,l,t){a.de(this.be);this._drawTextBlob(d,g,l,t);};a.Canvas.prototype.drawVertices=function(d,g,l){a.de(this.be);this._drawVertices(d,g,l);};a.Canvas.prototype.getDeviceClipBounds=function(d){this._getDeviceClipBounds(kb);var g=Ab.toTypedArray();d?d.set(g):d=g.slice();return d};
		a.Canvas.prototype.quickReject=function(d){d=S(d);return this._quickReject(d)};a.Canvas.prototype.getLocalToDevice=function(){this._getLocalToDevice(bb);for(var d=bb,g=Array(16),l=0;16>l;l++)g[l]=a.HEAPF32[d/4+l];return g};a.Canvas.prototype.getTotalMatrix=function(){this._getTotalMatrix(Oa);for(var d=Array(9),g=0;9>g;g++)d[g]=a.HEAPF32[Oa/4+g];return d};a.Canvas.prototype.makeSurface=function(d){d=this._makeSurface(d);d.be=this.be;return d};a.Canvas.prototype.readPixels=function(d,g,l,t,x){a.de(this.be);
		return e(this,d,g,l,t,x)};a.Canvas.prototype.saveLayer=function(d,g,l,t,x){g=S(g);return this._saveLayer(d||null,g,l||null,t||0,x||a.TileMode.Clamp)};a.Canvas.prototype.writePixels=function(d,g,l,t,x,C,K,O){if(d.byteLength%(g*l))throw "pixels length must be a multiple of the srcWidth * srcHeight";a.de(this.be);var P=d.byteLength/(g*l);C=C||a.AlphaType.Unpremul;K=K||a.ColorType.RGBA_8888;O=O||a.ColorSpace.SRGB;var Y=P*g;P=v(d,"HEAPU8");g=this._writePixels({width:g,height:l,colorType:K,alphaType:C,colorSpace:O},
		P,Y,t,x);p(P,d);return g};a.ColorFilter.MakeBlend=function(d,g,l){d=y(d);l=l||a.ColorSpace.SRGB;return a.ColorFilter._MakeBlend(d,g,l)};a.ColorFilter.MakeMatrix=function(d){if(!d||20!==d.length)throw "invalid color matrix";var g=v(d,"HEAPF32"),l=a.ColorFilter._makeMatrix(g);p(g,d);return l};a.ContourMeasure.prototype.getPosTan=function(d,g){this._getPosTan(d,ka);d=Ca.toTypedArray();return g?(g.set(d),g):d.slice()};a.ImageFilter.prototype.getOutputBounds=function(d,g,l){d=S(d,ka);g=G(g);this._getOutputBounds(d,
		g,kb);g=Ab.toTypedArray();return l?(l.set(g),l):g.slice()};a.ImageFilter.MakeDropShadow=function(d,g,l,t,x,C){x=y(x,Va);return a.ImageFilter._MakeDropShadow(d,g,l,t,x,C)};a.ImageFilter.MakeDropShadowOnly=function(d,g,l,t,x,C){x=y(x,Va);return a.ImageFilter._MakeDropShadowOnly(d,g,l,t,x,C)};a.ImageFilter.MakeImage=function(d,g,l,t){l=S(l,ka);t=S(t,Pa);if("B"in g&&"C"in g)return a.ImageFilter._MakeImageCubic(d,g.B,g.C,l,t);const x=g.filter;let C=a.MipmapMode.None;"mipmap"in g&&(C=g.mipmap);return a.ImageFilter._MakeImageOptions(d,
		x,C,l,t)};a.ImageFilter.MakeMatrixTransform=function(d,g,l){d=G(d);if("B"in g&&"C"in g)return a.ImageFilter._MakeMatrixTransformCubic(d,g.B,g.C,l);const t=g.filter;let x=a.MipmapMode.None;"mipmap"in g&&(x=g.mipmap);return a.ImageFilter._MakeMatrixTransformOptions(d,t,x,l)};a.Paint.prototype.getColor=function(){this._getColor(Va);return T(Va)};a.Paint.prototype.setColor=function(d,g){g=g||null;d=y(d);this._setColor(d,g);};a.Paint.prototype.setColorComponents=function(d,g,l,t,x){x=x||null;d=M(d,g,l,
		t);this._setColor(d,x);};a.Path.prototype.getPoint=function(d,g){this._getPoint(d,ka);d=Ca.toTypedArray();return g?(g[0]=d[0],g[1]=d[1],g):d.slice(0,2)};a.Picture.prototype.makeShader=function(d,g,l,t,x){t=G(t);x=S(x);return this._makeShader(d,g,l,t,x)};a.Picture.prototype.cullRect=function(d){this._cullRect(ka);var g=Ca.toTypedArray();return d?(d.set(g),d):g.slice()};a.PictureRecorder.prototype.beginRecording=function(d,g){d=S(d);return this._beginRecording(d,!!g)};a.Surface.prototype.getCanvas=function(){var d=
		this._getCanvas();d.be=this.be;return d};a.Surface.prototype.makeImageSnapshot=function(d){a.de(this.be);d=v(d,"HEAP32",kb);return this._makeImageSnapshot(d)};a.Surface.prototype.makeSurface=function(d){a.de(this.be);d=this._makeSurface(d);d.be=this.be;return d};a.Surface.prototype.Wf=function(d,g){this.Ze||(this.Ze=this.getCanvas());return requestAnimationFrame(function(){a.de(this.be);d(this.Ze);this.flush(g);}.bind(this))};a.Surface.prototype.requestAnimationFrame||(a.Surface.prototype.requestAnimationFrame=
		a.Surface.prototype.Wf);a.Surface.prototype.Sf=function(d,g){this.Ze||(this.Ze=this.getCanvas());requestAnimationFrame(function(){a.de(this.be);d(this.Ze);this.flush(g);this.dispose();}.bind(this));};a.Surface.prototype.drawOnce||(a.Surface.prototype.drawOnce=a.Surface.prototype.Sf);a.PathEffect.MakeDash=function(d,g){g||(g=0);if(!d.length||1===d.length%2)throw "Intervals array must have even length";var l=v(d,"HEAPF32");g=a.PathEffect._MakeDash(l,d.length,g);p(l,d);return g};a.PathEffect.MakeLine2D=
		function(d,g){g=G(g);return a.PathEffect._MakeLine2D(d,g)};a.PathEffect.MakePath2D=function(d,g){d=G(d);return a.PathEffect._MakePath2D(d,g)};a.Shader.MakeColor=function(d,g){g=g||null;d=y(d);return a.Shader._MakeColor(d,g)};a.Shader.Blend=a.Shader.MakeBlend;a.Shader.Color=a.Shader.MakeColor;a.Shader.MakeLinearGradient=function(d,g,l,t,x,C,K,O){O=O||null;var P=E(l),Y=v(t,"HEAPF32");K=K||0;C=G(C);var ba=Ca.toTypedArray();ba.set(d);ba.set(g,2);d=a.Shader._MakeLinearGradient(ka,P.te,P.colorType,Y,P.count,
		x,K,C,O);p(P.te,l);t&&p(Y,t);return d};a.Shader.MakeRadialGradient=function(d,g,l,t,x,C,K,O){O=O||null;var P=E(l),Y=v(t,"HEAPF32");K=K||0;C=G(C);d=a.Shader._MakeRadialGradient(d[0],d[1],g,P.te,P.colorType,Y,P.count,x,K,C,O);p(P.te,l);t&&p(Y,t);return d};a.Shader.MakeSweepGradient=function(d,g,l,t,x,C,K,O,P,Y){Y=Y||null;var ba=E(l),r=v(t,"HEAPF32");K=K||0;O=O||0;P=P||360;C=G(C);d=a.Shader._MakeSweepGradient(d,g,ba.te,ba.colorType,r,ba.count,x,O,P,K,C,Y);p(ba.te,l);t&&p(r,t);return d};a.Shader.MakeTwoPointConicalGradient=
		function(d,g,l,t,x,C,K,O,P,Y){Y=Y||null;var ba=E(x),r=v(C,"HEAPF32");P=P||0;O=G(O);var D=Ca.toTypedArray();D.set(d);D.set(l,2);d=a.Shader._MakeTwoPointConicalGradient(ka,g,t,ba.te,ba.colorType,r,ba.count,K,P,O,Y);p(ba.te,x);C&&p(r,C);return d};a.Vertices.prototype.bounds=function(d){this._bounds(ka);var g=Ca.toTypedArray();return d?(d.set(g),d):g.slice()};a.ke&&a.ke.forEach(function(d){d();});};a.computeTonalColors=function(e){var d=v(e.ambient,"HEAPF32"),g=v(e.spot,"HEAPF32");this._computeTonalColors(d,
		g);var l={ambient:T(d),spot:T(g)};p(d,e.ambient);p(g,e.spot);return l};a.LTRBRect=function(e,d,g,l){return Float32Array.of(e,d,g,l)};a.XYWHRect=function(e,d,g,l){return Float32Array.of(e,d,e+g,d+l)};a.LTRBiRect=function(e,d,g,l){return Int32Array.of(e,d,g,l)};a.XYWHiRect=function(e,d,g,l){return Int32Array.of(e,d,e+g,d+l)};a.RRectXY=function(e,d,g){return Float32Array.of(e[0],e[1],e[2],e[3],d,g,d,g,d,g,d,g)};a.MakeAnimatedImageFromEncoded=function(e){e=new Uint8Array(e);var d=a._malloc(e.byteLength);
		a.HEAPU8.set(e,d);return (e=a._decodeAnimatedImage(d,e.byteLength))?e:null};a.MakeImageFromEncoded=function(e){e=new Uint8Array(e);var d=a._malloc(e.byteLength);a.HEAPU8.set(e,d);return (e=a._decodeImage(d,e.byteLength))?e:null};var lb=null;a.MakeImageFromCanvasImageSource=function(e){var d=e.width,g=e.height;lb||(lb=document.createElement("canvas"));lb.width=d;lb.height=g;var l=lb.getContext("2d",{willReadFrequently:true});l.drawImage(e,0,0);e=l.getImageData(0,0,d,g);return a.MakeImage({width:d,height:g,
		alphaType:a.AlphaType.Unpremul,colorType:a.ColorType.RGBA_8888,colorSpace:a.ColorSpace.SRGB},e.data,4*d)};a.MakeImage=function(e,d,g){var l=a._malloc(d.length);a.HEAPU8.set(d,l);return a._MakeImage(e,l,d.length,g)};a.MakeVertices=function(e,d,g,l,t,x){var C=t&&t.length||0,K=0;g&&g.length&&(K|=1);l&&l.length&&(K|=2);void 0===x||x||(K|=4);e=new a._VerticesBuilder(e,d.length/2,C,K);v(d,"HEAPF32",e.positions());e.texCoords()&&v(g,"HEAPF32",e.texCoords());e.colors()&&v(m(l),"HEAPU32",e.colors());e.indices()&&
		v(t,"HEAPU16",e.indices());return e.detach()};a.Matrix={};a.Matrix.identity=function(){return c(3)};a.Matrix.invert=function(e){var d=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return d?[(e[4]*e[8]-e[5]*e[7])/d,(e[2]*e[7]-e[1]*e[8])/d,(e[1]*e[5]-e[2]*e[4])/d,(e[5]*e[6]-e[3]*e[8])/d,(e[0]*e[8]-e[2]*e[6])/d,(e[2]*e[3]-e[0]*e[5])/d,(e[3]*e[7]-e[4]*e[6])/d,(e[1]*e[6]-e[0]*e[7])/d,(e[0]*e[4]-e[1]*e[3])/d]:null};a.Matrix.mapPoints=function(e,d){for(var g=0;g<
		d.length;g+=2){var l=d[g],t=d[g+1],x=e[6]*l+e[7]*t+e[8],C=e[3]*l+e[4]*t+e[5];d[g]=(e[0]*l+e[1]*t+e[2])/x;d[g+1]=C/x;}return d};a.Matrix.multiply=function(){return jb(3,arguments)};a.Matrix.rotated=function(e,d,g){d=d||0;g=g||0;var l=Math.sin(e);e=Math.cos(e);return [e,-l,pa(l,g,1-e,d),l,e,pa(-l,d,1-e,g),0,0,1]};a.Matrix.scaled=function(e,d,g,l){g=g||0;l=l||0;var t=b([e,d],c(3),3,0,1);return b([g-e*g,l-d*l],t,3,2,0)};a.Matrix.skewed=function(e,d,g,l){g=g||0;l=l||0;var t=b([e,d],c(3),3,1,-1);return b([-e*
		g,-d*l],t,3,2,0)};a.Matrix.translated=function(e,d){return b(arguments,c(3),3,2,0)};a.Vector={};a.Vector.dot=function(e,d){return e.map(function(g,l){return g*d[l]}).reduce(function(g,l){return g+l})};a.Vector.lengthSquared=function(e){return a.Vector.dot(e,e)};a.Vector.length=function(e){return Math.sqrt(a.Vector.lengthSquared(e))};a.Vector.mulScalar=function(e,d){return e.map(function(g){return g*d})};a.Vector.add=function(e,d){return e.map(function(g,l){return g+d[l]})};a.Vector.sub=function(e,
		d){return e.map(function(g,l){return g-d[l]})};a.Vector.dist=function(e,d){return a.Vector.length(a.Vector.sub(e,d))};a.Vector.normalize=function(e){return a.Vector.mulScalar(e,1/a.Vector.length(e))};a.Vector.cross=function(e,d){return [e[1]*d[2]-e[2]*d[1],e[2]*d[0]-e[0]*d[2],e[0]*d[1]-e[1]*d[0]]};a.M44={};a.M44.identity=function(){return c(4)};a.M44.translated=function(e){return b(e,c(4),4,3,0)};a.M44.scaled=function(e){return b(e,c(4),4,0,1)};a.M44.rotated=function(e,d){return a.M44.rotatedUnitSinCos(a.Vector.normalize(e),
		Math.sin(d),Math.cos(d))};a.M44.rotatedUnitSinCos=function(e,d,g){var l=e[0],t=e[1];e=e[2];var x=1-g;return [x*l*l+g,x*l*t-d*e,x*l*e+d*t,0,x*l*t+d*e,x*t*t+g,x*t*e-d*l,0,x*l*e-d*t,x*t*e+d*l,x*e*e+g,0,0,0,0,1]};a.M44.lookat=function(e,d,g){d=a.Vector.normalize(a.Vector.sub(d,e));g=a.Vector.normalize(g);g=a.Vector.normalize(a.Vector.cross(d,g));var l=a.M44.identity();b(g,l,4,0,0);b(a.Vector.cross(g,d),l,4,1,0);b(a.Vector.mulScalar(d,-1),l,4,2,0);b(e,l,4,3,0);e=a.M44.invert(l);return null===e?a.M44.identity():
		e};a.M44.perspective=function(e,d,g){var l=1/(d-e);g/=2;g=Math.cos(g)/Math.sin(g);return [g,0,0,0,0,g,0,0,0,0,(d+e)*l,2*d*e*l,0,0,-1,1]};a.M44.rc=function(e,d,g){return e[4*d+g]};a.M44.multiply=function(){return jb(4,arguments)};a.M44.invert=function(e){var d=e[0],g=e[4],l=e[8],t=e[12],x=e[1],C=e[5],K=e[9],O=e[13],P=e[2],Y=e[6],ba=e[10],r=e[14],D=e[3],U=e[7],ea=e[11];e=e[15];var la=d*C-g*x,ta=d*K-l*x,xa=d*O-t*x,Da=g*K-l*C,fa=g*O-t*C,I=l*O-t*K,k=P*U-Y*D,q=P*ea-ba*D,z=P*e-r*D,A=Y*ea-ba*U,F=Y*e-r*U,H=
		ba*e-r*ea,N=la*H-ta*F+xa*A+Da*z-fa*q+I*k,V=1/N;if(0===N||Infinity===V)return null;la*=V;ta*=V;xa*=V;Da*=V;fa*=V;I*=V;k*=V;q*=V;z*=V;A*=V;F*=V;H*=V;d=[C*H-K*F+O*A,K*z-x*H-O*q,x*F-C*z+O*k,C*q-x*A-K*k,l*F-g*H-t*A,d*H-l*z+t*q,g*z-d*F-t*k,d*A-g*q+l*k,U*I-ea*fa+e*Da,ea*xa-D*I-e*ta,D*fa-U*xa+e*la,U*ta-D*Da-ea*la,ba*fa-Y*I-r*Da,P*I-ba*xa+r*ta,Y*xa-P*fa-r*la,P*Da-Y*ta+ba*la];return d.every(function(qa){return !isNaN(qa)&&Infinity!==qa&&-Infinity!==qa})?d:null};a.M44.transpose=function(e){return [e[0],e[4],e[8],
		e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]]};a.M44.mustInvert=function(e){e=a.M44.invert(e);if(null===e)throw "Matrix not invertible";return e};a.M44.setupCamera=function(e,d,g){var l=a.M44.lookat(g.eye,g.coa,g.up);g=a.M44.perspective(g.near,g.far,g.angle);d=[(e[2]-e[0])/2,(e[3]-e[1])/2,d];e=a.M44.multiply(a.M44.translated([(e[0]+e[2])/2,(e[1]+e[3])/2,0]),a.M44.scaled(d));return a.M44.multiply(e,g,l,a.M44.mustInvert(e))};a.ColorMatrix={};a.ColorMatrix.identity=function(){var e=
		new Float32Array(20);e[0]=1;e[6]=1;e[12]=1;e[18]=1;return e};a.ColorMatrix.scaled=function(e,d,g,l){var t=new Float32Array(20);t[0]=e;t[6]=d;t[12]=g;t[18]=l;return t};var Id=[[6,7,11,12],[0,10,2,12],[0,1,5,6]];a.ColorMatrix.rotated=function(e,d,g){var l=a.ColorMatrix.identity();e=Id[e];l[e[0]]=g;l[e[1]]=d;l[e[2]]=-d;l[e[3]]=g;return l};a.ColorMatrix.postTranslate=function(e,d,g,l,t){e[4]+=d;e[9]+=g;e[14]+=l;e[19]+=t;return e};a.ColorMatrix.concat=function(e,d){for(var g=new Float32Array(20),l=0,t=
		0;20>t;t+=5){for(var x=0;4>x;x++)g[l++]=e[t]*d[x]+e[t+1]*d[x+5]+e[t+2]*d[x+10]+e[t+3]*d[x+15];g[l++]=e[t]*d[4]+e[t+1]*d[9]+e[t+2]*d[14]+e[t+3]*d[19]+e[t+4];}return g};(function(e){e.ke=e.ke||[];e.ke.push(function(){function d(r){r&&(r.dir=0===r.dir?e.TextDirection.RTL:e.TextDirection.LTR);return r}function g(r){if(!r||!r.length)return [];for(var D=[],U=0;U<r.length;U+=5){var ea=e.LTRBRect(r[U],r[U+1],r[U+2],r[U+3]),la=e.TextDirection.LTR;0===r[U+4]&&(la=e.TextDirection.RTL);D.push({rect:ea,dir:la});}e._free(r.byteOffset);
		return D}function l(r){r=r||{};void 0===r.weight&&(r.weight=e.FontWeight.Normal);r.width=r.width||e.FontWidth.Normal;r.slant=r.slant||e.FontSlant.Upright;return r}function t(r){if(!r||!r.length)return X;for(var D=[],U=0;U<r.length;U++){var ea=x(r[U]);D.push(ea);}return v(D,"HEAPU32")}function x(r){if(O[r])return O[r];var D=na(r)+1,U=e._malloc(D);oa(r,J,U,D);return O[r]=U}function C(r){r._colorPtr=y(r.color);r._foregroundColorPtr=X;r._backgroundColorPtr=X;r._decorationColorPtr=X;r.foregroundColor&&
		(r._foregroundColorPtr=y(r.foregroundColor,P));r.backgroundColor&&(r._backgroundColorPtr=y(r.backgroundColor,Y));r.decorationColor&&(r._decorationColorPtr=y(r.decorationColor,ba));Array.isArray(r.fontFamilies)&&r.fontFamilies.length?(r._fontFamiliesPtr=t(r.fontFamilies),r._fontFamiliesLen=r.fontFamilies.length):(r._fontFamiliesPtr=X,r._fontFamiliesLen=0);if(r.locale){var D=r.locale;r._localePtr=x(D);r._localeLen=na(D);}else r._localePtr=X,r._localeLen=0;if(Array.isArray(r.shadows)&&r.shadows.length){D=
		r.shadows;var U=D.map(function(fa){return fa.color||e.BLACK}),ea=D.map(function(fa){return fa.blurRadius||0});r._shadowLen=D.length;for(var la=e._malloc(8*D.length),ta=la/4,xa=0;xa<D.length;xa++){var Da=D[xa].offset||[0,0];e.HEAPF32[ta]=Da[0];e.HEAPF32[ta+1]=Da[1];ta+=2;}r._shadowColorsPtr=E(U).te;r._shadowOffsetsPtr=la;r._shadowBlurRadiiPtr=v(ea,"HEAPF32");}else r._shadowLen=0,r._shadowColorsPtr=X,r._shadowOffsetsPtr=X,r._shadowBlurRadiiPtr=X;Array.isArray(r.fontFeatures)&&r.fontFeatures.length?(D=
		r.fontFeatures,U=D.map(function(fa){return fa.name}),ea=D.map(function(fa){return fa.value}),r._fontFeatureLen=D.length,r._fontFeatureNamesPtr=t(U),r._fontFeatureValuesPtr=v(ea,"HEAPU32")):(r._fontFeatureLen=0,r._fontFeatureNamesPtr=X,r._fontFeatureValuesPtr=X);Array.isArray(r.fontVariations)&&r.fontVariations.length?(D=r.fontVariations,U=D.map(function(fa){return fa.axis}),ea=D.map(function(fa){return fa.value}),r._fontVariationLen=D.length,r._fontVariationAxesPtr=t(U),r._fontVariationValuesPtr=
		v(ea,"HEAPF32")):(r._fontVariationLen=0,r._fontVariationAxesPtr=X,r._fontVariationValuesPtr=X);}function K(r){e._free(r._fontFamiliesPtr);e._free(r._shadowColorsPtr);e._free(r._shadowOffsetsPtr);e._free(r._shadowBlurRadiiPtr);e._free(r._fontFeatureNamesPtr);e._free(r._fontFeatureValuesPtr);e._free(r._fontVariationAxesPtr);e._free(r._fontVariationValuesPtr);}e.Paragraph.prototype.getRectsForRange=function(r,D,U,ea){r=this._getRectsForRange(r,D,U,ea);return g(r)};e.Paragraph.prototype.getRectsForPlaceholders=
		function(){var r=this._getRectsForPlaceholders();return g(r)};e.Paragraph.prototype.getGlyphInfoAt=function(r){return d(this._getGlyphInfoAt(r))};e.Paragraph.prototype.getClosestGlyphInfoAtCoordinate=function(r,D){return d(this._getClosestGlyphInfoAtCoordinate(r,D))};e.TypefaceFontProvider.prototype.registerFont=function(r,D){r=e.Typeface.MakeTypefaceFromData(r);if(!r)return null;D=x(D);this._registerFont(r,D);r.delete();};e.ParagraphStyle=function(r){r.disableHinting=r.disableHinting||false;if(r.ellipsis){var D=
		r.ellipsis;r._ellipsisPtr=x(D);r._ellipsisLen=na(D);}else r._ellipsisPtr=X,r._ellipsisLen=0;null==r.heightMultiplier&&(r.heightMultiplier=-1);r.maxLines=r.maxLines||0;r.replaceTabCharacters=r.replaceTabCharacters||false;D=(D=r.strutStyle)||{};D.strutEnabled=D.strutEnabled||false;D.strutEnabled&&Array.isArray(D.fontFamilies)&&D.fontFamilies.length?(D._fontFamiliesPtr=t(D.fontFamilies),D._fontFamiliesLen=D.fontFamilies.length):(D._fontFamiliesPtr=X,D._fontFamiliesLen=0);D.fontStyle=l(D.fontStyle);null==D.fontSize&&
		(D.fontSize=-1);null==D.heightMultiplier&&(D.heightMultiplier=-1);D.halfLeading=D.halfLeading||false;D.leading=D.leading||0;D.forceStrutHeight=D.forceStrutHeight||false;r.strutStyle=D;r.textAlign=r.textAlign||e.TextAlign.Start;r.textDirection=r.textDirection||e.TextDirection.LTR;r.textHeightBehavior=r.textHeightBehavior||e.TextHeightBehavior.All;r.textStyle=e.TextStyle(r.textStyle);r.applyRoundingHack=false!==r.applyRoundingHack;return r};e.TextStyle=function(r){r.color||(r.color=e.BLACK);r.decoration=r.decoration||
		0;r.decorationThickness=r.decorationThickness||0;r.decorationStyle=r.decorationStyle||e.DecorationStyle.Solid;r.textBaseline=r.textBaseline||e.TextBaseline.Alphabetic;null==r.fontSize&&(r.fontSize=-1);r.letterSpacing=r.letterSpacing||0;r.wordSpacing=r.wordSpacing||0;null==r.heightMultiplier&&(r.heightMultiplier=-1);r.halfLeading=r.halfLeading||false;r.fontStyle=l(r.fontStyle);return r};var O={},P=e._malloc(16),Y=e._malloc(16),ba=e._malloc(16);e.ParagraphBuilder.Make=function(r,D){C(r.textStyle);D=e.ParagraphBuilder._Make(r,
		D);K(r.textStyle);return D};e.ParagraphBuilder.MakeFromFontProvider=function(r,D){C(r.textStyle);D=e.ParagraphBuilder._MakeFromFontProvider(r,D);K(r.textStyle);return D};e.ParagraphBuilder.MakeFromFontCollection=function(r,D){C(r.textStyle);D=e.ParagraphBuilder._MakeFromFontCollection(r,D);K(r.textStyle);return D};e.ParagraphBuilder.ShapeText=function(r,D,U){let ea=0;for(const la of D)ea+=la.length;if(ea!==r.length)throw "Accumulated block lengths must equal text.length";return e.ParagraphBuilder._ShapeText(r,
		D,U)};e.ParagraphBuilder.prototype.pushStyle=function(r){C(r);this._pushStyle(r);K(r);};e.ParagraphBuilder.prototype.pushPaintStyle=function(r,D,U){C(r);this._pushPaintStyle(r,D,U);K(r);};e.ParagraphBuilder.prototype.addPlaceholder=function(r,D,U,ea,la){U=U||e.PlaceholderAlignment.Baseline;ea=ea||e.TextBaseline.Alphabetic;this._addPlaceholder(r||0,D||0,U,ea,la||0);};e.ParagraphBuilder.prototype.setWordsUtf8=function(r){var D=v(r,"HEAPU32");this._setWordsUtf8(D,r&&r.length||0);p(D,r);};e.ParagraphBuilder.prototype.setWordsUtf16=
		function(r){var D=v(r,"HEAPU32");this._setWordsUtf16(D,r&&r.length||0);p(D,r);};e.ParagraphBuilder.prototype.setGraphemeBreaksUtf8=function(r){var D=v(r,"HEAPU32");this._setGraphemeBreaksUtf8(D,r&&r.length||0);p(D,r);};e.ParagraphBuilder.prototype.setGraphemeBreaksUtf16=function(r){var D=v(r,"HEAPU32");this._setGraphemeBreaksUtf16(D,r&&r.length||0);p(D,r);};e.ParagraphBuilder.prototype.setLineBreaksUtf8=function(r){var D=v(r,"HEAPU32");this._setLineBreaksUtf8(D,r&&r.length||0);p(D,r);};e.ParagraphBuilder.prototype.setLineBreaksUtf16=
		function(r){var D=v(r,"HEAPU32");this._setLineBreaksUtf16(D,r&&r.length||0);p(D,r);};});})(w);a.ke=a.ke||[];a.ke.push(function(){a.Path.prototype.op=function(e,d){return this._op(e,d)?this:null};a.Path.prototype.simplify=function(){return this._simplify()?this:null};});a.ke=a.ke||[];a.ke.push(function(){a.Canvas.prototype.drawText=function(e,d,g,l,t){var x=na(e),C=a._malloc(x+1);oa(e,J,C,x+1);this._drawSimpleText(C,x,d,g,t,l);a._free(C);};a.Canvas.prototype.drawGlyphs=function(e,d,g,l,t,x){if(!(2*e.length<=
		d.length))throw "Not enough positions for the array of gyphs";a.de(this.be);const C=v(e,"HEAPU16"),K=v(d,"HEAPF32");this._drawGlyphs(e.length,C,K,g,l,t,x);p(K,d);p(C,e);};a.Font.prototype.getGlyphBounds=function(e,d,g){var l=v(e,"HEAPU16"),t=a._malloc(16*e.length);this._getGlyphWidthBounds(l,e.length,X,t,d||null);d=new Float32Array(a.HEAPU8.buffer,t,4*e.length);p(l,e);if(g)return g.set(d),a._free(t),g;e=Float32Array.from(d);a._free(t);return e};a.Font.prototype.getGlyphIDs=function(e,d,g){d||(d=e.length);
		var l=na(e)+1,t=a._malloc(l);oa(e,J,t,l);e=a._malloc(2*d);d=this._getGlyphIDs(t,l-1,d,e);a._free(t);if(0>d)return a._free(e),null;t=new Uint16Array(a.HEAPU8.buffer,e,d);if(g)return g.set(t),a._free(e),g;g=Uint16Array.from(t);a._free(e);return g};a.Font.prototype.getGlyphIntercepts=function(e,d,g,l){var t=v(e,"HEAPU16"),x=v(d,"HEAPF32");return this._getGlyphIntercepts(t,e.length,!(e&&e._ck),x,d.length,!(d&&d._ck),g,l)};a.Font.prototype.getGlyphWidths=function(e,d,g){var l=v(e,"HEAPU16"),t=a._malloc(4*
		e.length);this._getGlyphWidthBounds(l,e.length,t,X,d||null);d=new Float32Array(a.HEAPU8.buffer,t,e.length);p(l,e);if(g)return g.set(d),a._free(t),g;e=Float32Array.from(d);a._free(t);return e};a.FontMgr.FromData=function(){if(!arguments.length)return null;var e=arguments;1===e.length&&Array.isArray(e[0])&&(e=arguments[0]);if(!e.length)return null;for(var d=[],g=[],l=0;l<e.length;l++){var t=new Uint8Array(e[l]),x=v(t,"HEAPU8");d.push(x);g.push(t.byteLength);}d=v(d,"HEAPU32");g=v(g,"HEAPU32");e=a.FontMgr._fromData(d,
		g,e.length);a._free(d);a._free(g);return e};a.Typeface.MakeTypefaceFromData=function(e){e=new Uint8Array(e);var d=v(e,"HEAPU8");return (e=a.Typeface._MakeTypefaceFromData(d,e.byteLength))?e:null};a.Typeface.MakeFreeTypeFaceFromData=a.Typeface.MakeTypefaceFromData;a.Typeface.prototype.getGlyphIDs=function(e,d,g){d||(d=e.length);var l=na(e)+1,t=a._malloc(l);oa(e,J,t,l);e=a._malloc(2*d);d=this._getGlyphIDs(t,l-1,d,e);a._free(t);if(0>d)return a._free(e),null;t=new Uint16Array(a.HEAPU8.buffer,e,d);if(g)return g.set(t),
		a._free(e),g;g=Uint16Array.from(t);a._free(e);return g};a.TextBlob.MakeOnPath=function(e,d,g,l){if(e&&e.length&&d&&d.countPoints()){if(1===d.countPoints())return this.MakeFromText(e,g);l||(l=0);var t=g.getGlyphIDs(e);t=g.getGlyphWidths(t);var x=[];d=new a.ContourMeasureIter(d,false,1);for(var C=d.next(),K=new Float32Array(4),O=0;O<e.length&&C;O++){var P=t[O];l+=P/2;if(l>C.length()){C.delete();C=d.next();if(!C){e=e.substring(0,O);break}l=P/2;}C.getPosTan(l,K);var Y=K[2],ba=K[3];x.push(Y,ba,K[0]-P/2*Y,
		K[1]-P/2*ba);l+=P/2;}e=this.MakeFromRSXform(e,x,g);C&&C.delete();d.delete();return e}};a.TextBlob.MakeFromRSXform=function(e,d,g){var l=na(e)+1,t=a._malloc(l);oa(e,J,t,l);e=v(d,"HEAPF32");g=a.TextBlob._MakeFromRSXform(t,l-1,e,g);a._free(t);return g?g:null};a.TextBlob.MakeFromRSXformGlyphs=function(e,d,g){var l=v(e,"HEAPU16");d=v(d,"HEAPF32");g=a.TextBlob._MakeFromRSXformGlyphs(l,2*e.length,d,g);p(l,e);return g?g:null};a.TextBlob.MakeFromGlyphs=function(e,d){var g=v(e,"HEAPU16");d=a.TextBlob._MakeFromGlyphs(g,
		2*e.length,d);p(g,e);return d?d:null};a.TextBlob.MakeFromText=function(e,d){var g=na(e)+1,l=a._malloc(g);oa(e,J,l,g);e=a.TextBlob._MakeFromText(l,g-1,d);a._free(l);return e?e:null};a.MallocGlyphIDs=function(e){return a.Malloc(Uint16Array,e)};});a.ke=a.ke||[];a.ke.push(function(){a.MakePicture=function(e){e=new Uint8Array(e);var d=a._malloc(e.byteLength);a.HEAPU8.set(e,d);return (e=a._MakePicture(d,e.byteLength))?e:null};});a.ke=a.ke||[];a.ke.push(function(){a.RuntimeEffect.Make=function(e,d){return a.RuntimeEffect._Make(e,
		{onError:d||function(g){console.log("RuntimeEffect error",g);}})};a.RuntimeEffect.MakeForBlender=function(e,d){return a.RuntimeEffect._MakeForBlender(e,{onError:d||function(g){console.log("RuntimeEffect error",g);}})};a.RuntimeEffect.prototype.makeShader=function(e,d){var g=!e._ck,l=v(e,"HEAPF32");d=G(d);return this._makeShader(l,4*e.length,g,d)};a.RuntimeEffect.prototype.makeShaderWithChildren=function(e,d,g){var l=!e._ck,t=v(e,"HEAPF32");g=G(g);for(var x=[],C=0;C<d.length;C++)x.push(d[C].ae.ie);d=
		v(x,"HEAPU32");return this._makeShaderWithChildren(t,4*e.length,l,d,x.length,g)};a.RuntimeEffect.prototype.makeBlender=function(e){var d=!e._ck,g=v(e,"HEAPF32");return this._makeBlender(g,4*e.length,d)};});(function(){function e(I){for(var k=0;k<I.length;k++)if(void 0!==I[k]&&!Number.isFinite(I[k]))return  false;return  true}function d(I){var k=a.getColorComponents(I);I=k[0];var q=k[1],z=k[2];k=k[3];if(1===k)return I=I.toString(16).toLowerCase(),q=q.toString(16).toLowerCase(),z=z.toString(16).toLowerCase(),
		I=1===I.length?"0"+I:I,q=1===q.length?"0"+q:q,z=1===z.length?"0"+z:z,"#"+I+q+z;k=0===k||1===k?k:k.toFixed(8);return "rgba("+I+", "+q+", "+z+", "+k+")"}function g(I){return a.parseColorString(I,xa)}function l(I){I=Da.exec(I);if(!I)return null;var k=parseFloat(I[4]),q=16;switch(I[5]){case "em":case "rem":q=16*k;break;case "pt":q=4*k/3;break;case "px":q=k;break;case "pc":q=16*k;break;case "in":q=96*k;break;case "cm":q=96*k/2.54;break;case "mm":q=96/25.4*k;break;case "q":q=96/25.4/4*k;break;case "%":q=
		16/75*k;}return {style:I[1],variant:I[2],weight:I[3],sizePx:q,family:I[6].trim()}}function t(){fa||(fa={"Noto Mono":{"*":a.Typeface.GetDefault()},monospace:{"*":a.Typeface.GetDefault()}});}function x(I){this.ce=I;this.fe=new a.Paint;this.fe.setAntiAlias(true);this.fe.setStrokeMiter(10);this.fe.setStrokeCap(a.StrokeCap.Butt);this.fe.setStrokeJoin(a.StrokeJoin.Miter);this.kf="10px monospace";this.Fe=new a.Font(a.Typeface.GetDefault(),10);this.Fe.setSubpixel(true);this.se=this.ye=a.BLACK;this.Oe=0;this.af=
		a.TRANSPARENT;this.Qe=this.Pe=0;this.bf=this.Be=1;this.$e=0;this.Ne=[];this.ee=a.BlendMode.SrcOver;this.fe.setStrokeWidth(this.bf);this.fe.setBlendMode(this.ee);this.he=new a.Path;this.je=a.Matrix.identity();this.Ff=[];this.Ue=[];this.Ee=function(){this.he.delete();this.fe.delete();this.Fe.delete();this.Ue.forEach(function(k){k.Ee();});};Object.defineProperty(this,"currentTransform",{enumerable:true,get:function(){return {a:this.je[0],c:this.je[1],e:this.je[2],b:this.je[3],d:this.je[4],f:this.je[5]}},
		set:function(k){k.a&&this.setTransform(k.a,k.b,k.c,k.d,k.e,k.f);}});Object.defineProperty(this,"fillStyle",{enumerable:true,get:function(){return f(this.se)?d(this.se):this.se},set:function(k){"string"===typeof k?this.se=g(k):k.Me&&(this.se=k);}});Object.defineProperty(this,"font",{enumerable:true,get:function(){return this.kf},set:function(k){var q=l(k);var z=(q.style||"normal")+"|"+(q.variant||"normal")+"|"+(q.weight||"normal");var A=q.family;t();z=fa[A]?fa[A][z]||fa[A]["*"]:a.Typeface.GetDefault();q.typeface=
		z;q&&(this.Fe.setSize(q.sizePx),this.Fe.setTypeface(q.typeface),this.kf=k);}});Object.defineProperty(this,"globalAlpha",{enumerable:true,get:function(){return this.Be},set:function(k){!isFinite(k)||0>k||1<k||(this.Be=k);}});Object.defineProperty(this,"globalCompositeOperation",{enumerable:true,get:function(){switch(this.ee){case a.BlendMode.SrcOver:return "source-over";case a.BlendMode.DstOver:return "destination-over";case a.BlendMode.Src:return "copy";case a.BlendMode.Dst:return "destination";case a.BlendMode.Clear:return "clear";
		case a.BlendMode.SrcIn:return "source-in";case a.BlendMode.DstIn:return "destination-in";case a.BlendMode.SrcOut:return "source-out";case a.BlendMode.DstOut:return "destination-out";case a.BlendMode.SrcATop:return "source-atop";case a.BlendMode.DstATop:return "destination-atop";case a.BlendMode.Xor:return "xor";case a.BlendMode.Plus:return "lighter";case a.BlendMode.Multiply:return "multiply";case a.BlendMode.Screen:return "screen";case a.BlendMode.Overlay:return "overlay";case a.BlendMode.Darken:return "darken";
		case a.BlendMode.Lighten:return "lighten";case a.BlendMode.ColorDodge:return "color-dodge";case a.BlendMode.ColorBurn:return "color-burn";case a.BlendMode.HardLight:return "hard-light";case a.BlendMode.SoftLight:return "soft-light";case a.BlendMode.Difference:return "difference";case a.BlendMode.Exclusion:return "exclusion";case a.BlendMode.Hue:return "hue";case a.BlendMode.Saturation:return "saturation";case a.BlendMode.Color:return "color";case a.BlendMode.Luminosity:return "luminosity"}},set:function(k){switch(k){case "source-over":this.ee=
		a.BlendMode.SrcOver;break;case "destination-over":this.ee=a.BlendMode.DstOver;break;case "copy":this.ee=a.BlendMode.Src;break;case "destination":this.ee=a.BlendMode.Dst;break;case "clear":this.ee=a.BlendMode.Clear;break;case "source-in":this.ee=a.BlendMode.SrcIn;break;case "destination-in":this.ee=a.BlendMode.DstIn;break;case "source-out":this.ee=a.BlendMode.SrcOut;break;case "destination-out":this.ee=a.BlendMode.DstOut;break;case "source-atop":this.ee=a.BlendMode.SrcATop;break;case "destination-atop":this.ee=
		a.BlendMode.DstATop;break;case "xor":this.ee=a.BlendMode.Xor;break;case "lighter":this.ee=a.BlendMode.Plus;break;case "plus-lighter":this.ee=a.BlendMode.Plus;break;case "plus-darker":throw "plus-darker is not supported";case "multiply":this.ee=a.BlendMode.Multiply;break;case "screen":this.ee=a.BlendMode.Screen;break;case "overlay":this.ee=a.BlendMode.Overlay;break;case "darken":this.ee=a.BlendMode.Darken;break;case "lighten":this.ee=a.BlendMode.Lighten;break;case "color-dodge":this.ee=a.BlendMode.ColorDodge;
		break;case "color-burn":this.ee=a.BlendMode.ColorBurn;break;case "hard-light":this.ee=a.BlendMode.HardLight;break;case "soft-light":this.ee=a.BlendMode.SoftLight;break;case "difference":this.ee=a.BlendMode.Difference;break;case "exclusion":this.ee=a.BlendMode.Exclusion;break;case "hue":this.ee=a.BlendMode.Hue;break;case "saturation":this.ee=a.BlendMode.Saturation;break;case "color":this.ee=a.BlendMode.Color;break;case "luminosity":this.ee=a.BlendMode.Luminosity;break;default:return}this.fe.setBlendMode(this.ee);}});
		Object.defineProperty(this,"imageSmoothingEnabled",{enumerable:true,get:function(){return  true},set:function(){}});Object.defineProperty(this,"imageSmoothingQuality",{enumerable:true,get:function(){return "high"},set:function(){}});Object.defineProperty(this,"lineCap",{enumerable:true,get:function(){switch(this.fe.getStrokeCap()){case a.StrokeCap.Butt:return "butt";case a.StrokeCap.Round:return "round";case a.StrokeCap.Square:return "square"}},set:function(k){switch(k){case "butt":this.fe.setStrokeCap(a.StrokeCap.Butt);
		break;case "round":this.fe.setStrokeCap(a.StrokeCap.Round);break;case "square":this.fe.setStrokeCap(a.StrokeCap.Square);}}});Object.defineProperty(this,"lineDashOffset",{enumerable:true,get:function(){return this.$e},set:function(k){isFinite(k)&&(this.$e=k);}});Object.defineProperty(this,"lineJoin",{enumerable:true,get:function(){switch(this.fe.getStrokeJoin()){case a.StrokeJoin.Miter:return "miter";case a.StrokeJoin.Round:return "round";case a.StrokeJoin.Bevel:return "bevel"}},set:function(k){switch(k){case "miter":this.fe.setStrokeJoin(a.StrokeJoin.Miter);
		break;case "round":this.fe.setStrokeJoin(a.StrokeJoin.Round);break;case "bevel":this.fe.setStrokeJoin(a.StrokeJoin.Bevel);}}});Object.defineProperty(this,"lineWidth",{enumerable:true,get:function(){return this.fe.getStrokeWidth()},set:function(k){0>=k||!k||(this.bf=k,this.fe.setStrokeWidth(k));}});Object.defineProperty(this,"miterLimit",{enumerable:true,get:function(){return this.fe.getStrokeMiter()},set:function(k){0>=k||!k||this.fe.setStrokeMiter(k);}});Object.defineProperty(this,"shadowBlur",{enumerable:true,
		get:function(){return this.Oe},set:function(k){0>k||!isFinite(k)||(this.Oe=k);}});Object.defineProperty(this,"shadowColor",{enumerable:true,get:function(){return d(this.af)},set:function(k){this.af=g(k);}});Object.defineProperty(this,"shadowOffsetX",{enumerable:true,get:function(){return this.Pe},set:function(k){isFinite(k)&&(this.Pe=k);}});Object.defineProperty(this,"shadowOffsetY",{enumerable:true,get:function(){return this.Qe},set:function(k){isFinite(k)&&(this.Qe=k);}});Object.defineProperty(this,"strokeStyle",
		{enumerable:true,get:function(){return d(this.ye)},set:function(k){"string"===typeof k?this.ye=g(k):k.Me&&(this.ye=k);}});this.arc=function(k,q,z,A,F,H){D(this.he,k,q,z,z,0,A,F,H);};this.arcTo=function(k,q,z,A,F){Y(this.he,k,q,z,A,F);};this.beginPath=function(){this.he.delete();this.he=new a.Path;};this.bezierCurveTo=function(k,q,z,A,F,H){var N=this.he;e([k,q,z,A,F,H])&&(N.isEmpty()&&N.moveTo(k,q),N.cubicTo(k,q,z,A,F,H));};this.clearRect=function(k,q,z,A){this.fe.setStyle(a.PaintStyle.Fill);this.fe.setBlendMode(a.BlendMode.Clear);
		this.ce.drawRect(a.XYWHRect(k,q,z,A),this.fe);this.fe.setBlendMode(this.ee);};this.clip=function(k,q){"string"===typeof k?(q=k,k=this.he):k&&k.vf&&(k=k.le);k||(k=this.he);k=k.copy();q&&"evenodd"===q.toLowerCase()?k.setFillType(a.FillType.EvenOdd):k.setFillType(a.FillType.Winding);this.ce.clipPath(k,a.ClipOp.Intersect,true);k.delete();};this.closePath=function(){ba(this.he);};this.createImageData=function(){if(1===arguments.length){var k=arguments[0];return new O(new Uint8ClampedArray(4*k.width*k.height),
		k.width,k.height)}if(2===arguments.length){k=arguments[0];var q=arguments[1];return new O(new Uint8ClampedArray(4*k*q),k,q)}throw "createImageData expects 1 or 2 arguments, got "+arguments.length;};this.createLinearGradient=function(k,q,z,A){if(e(arguments)){var F=new P(k,q,z,A);this.Ue.push(F);return F}};this.createPattern=function(k,q){k=new la(k,q);this.Ue.push(k);return k};this.createRadialGradient=function(k,q,z,A,F,H){if(e(arguments)){var N=new ta(k,q,z,A,F,H);this.Ue.push(N);return N}};this.drawImage=
		function(k){k instanceof K&&(k=k.Lf());var q=this.jf();if(3===arguments.length||5===arguments.length)var z=a.XYWHRect(arguments[1],arguments[2],arguments[3]||k.width(),arguments[4]||k.height()),A=a.XYWHRect(0,0,k.width(),k.height());else if(9===arguments.length)z=a.XYWHRect(arguments[5],arguments[6],arguments[7],arguments[8]),A=a.XYWHRect(arguments[1],arguments[2],arguments[3],arguments[4]);else throw "invalid number of args for drawImage, need 3, 5, or 9; got "+arguments.length;this.ce.drawImageRect(k,
		A,z,q,false);q.dispose();};this.ellipse=function(k,q,z,A,F,H,N,V){D(this.he,k,q,z,A,F,H,N,V);};this.jf=function(){var k=this.fe.copy();k.setStyle(a.PaintStyle.Fill);if(f(this.se)){var q=a.multiplyByAlpha(this.se,this.Be);k.setColor(q);}else q=this.se.Me(this.je),k.setColor(a.Color(0,0,0,this.Be)),k.setShader(q);k.dispose=function(){this.delete();};return k};this.fill=function(k,q){"string"===typeof k?(q=k,k=this.he):k&&k.vf&&(k=k.le);if("evenodd"===q)this.he.setFillType(a.FillType.EvenOdd);else {if("nonzero"!==
		q&&q)throw "invalid fill rule";this.he.setFillType(a.FillType.Winding);}k||(k=this.he);q=this.jf();var z=this.Re(q);z&&(this.ce.save(),this.Ke(),this.ce.drawPath(k,z),this.ce.restore(),z.dispose());this.ce.drawPath(k,q);q.dispose();};this.fillRect=function(k,q,z,A){var F=this.jf(),H=this.Re(F);H&&(this.ce.save(),this.Ke(),this.ce.drawRect(a.XYWHRect(k,q,z,A),H),this.ce.restore(),H.dispose());this.ce.drawRect(a.XYWHRect(k,q,z,A),F);F.dispose();};this.fillText=function(k,q,z){var A=this.jf();k=a.TextBlob.MakeFromText(k,
		this.Fe);var F=this.Re(A);F&&(this.ce.save(),this.Ke(),this.ce.drawTextBlob(k,q,z,F),this.ce.restore(),F.dispose());this.ce.drawTextBlob(k,q,z,A);k.delete();A.dispose();};this.getImageData=function(k,q,z,A){return (k=this.ce.readPixels(k,q,{width:z,height:A,colorType:a.ColorType.RGBA_8888,alphaType:a.AlphaType.Unpremul,colorSpace:a.ColorSpace.SRGB}))?new O(new Uint8ClampedArray(k.buffer),z,A):null};this.getLineDash=function(){return this.Ne.slice()};this.Gf=function(k){var q=a.Matrix.invert(this.je);
		a.Matrix.mapPoints(q,k);return k};this.isPointInPath=function(k,q,z){var A=arguments;if(3===A.length)var F=this.he;else if(4===A.length)F=A[0],k=A[1],q=A[2],z=A[3];else throw "invalid arg count, need 3 or 4, got "+A.length;if(!isFinite(k)||!isFinite(q))return  false;z=z||"nonzero";if("nonzero"!==z&&"evenodd"!==z)return  false;A=this.Gf([k,q]);k=A[0];q=A[1];F.setFillType("nonzero"===z?a.FillType.Winding:a.FillType.EvenOdd);return F.contains(k,q)};this.isPointInStroke=function(k,q){var z=arguments;if(2===z.length)var A=
		this.he;else if(3===z.length)A=z[0],k=z[1],q=z[2];else throw "invalid arg count, need 2 or 3, got "+z.length;if(!isFinite(k)||!isFinite(q))return  false;z=this.Gf([k,q]);k=z[0];q=z[1];A=A.copy();A.setFillType(a.FillType.Winding);A.stroke({width:this.lineWidth,miter_limit:this.miterLimit,cap:this.fe.getStrokeCap(),join:this.fe.getStrokeJoin(),precision:.3});z=A.contains(k,q);A.delete();return z};this.lineTo=function(k,q){U(this.he,k,q);};this.measureText=function(k){k=this.Fe.getGlyphIDs(k);k=this.Fe.getGlyphWidths(k);
		let q=0;for(const z of k)q+=z;return {width:q}};this.moveTo=function(k,q){var z=this.he;e([k,q])&&z.moveTo(k,q);};this.putImageData=function(k,q,z,A,F,H,N){if(e([q,z,A,F,H,N]))if(void 0===A)this.ce.writePixels(k.data,k.width,k.height,q,z);else if(A=A||0,F=F||0,H=H||k.width,N=N||k.height,0>H&&(A+=H,H=Math.abs(H)),0>N&&(F+=N,N=Math.abs(N)),0>A&&(H+=A,A=0),0>F&&(N+=F,F=0),!(0>=H||0>=N)){k=a.MakeImage({width:k.width,height:k.height,alphaType:a.AlphaType.Unpremul,colorType:a.ColorType.RGBA_8888,colorSpace:a.ColorSpace.SRGB},
		k.data,4*k.width);var V=a.XYWHRect(A,F,H,N);q=a.XYWHRect(q+A,z+F,H,N);z=a.Matrix.invert(this.je);this.ce.save();this.ce.concat(z);this.ce.drawImageRect(k,V,q,null,false);this.ce.restore();k.delete();}};this.quadraticCurveTo=function(k,q,z,A){var F=this.he;e([k,q,z,A])&&(F.isEmpty()&&F.moveTo(k,q),F.quadTo(k,q,z,A));};this.rect=function(k,q,z,A){var F=this.he;k=a.XYWHRect(k,q,z,A);e(k)&&F.addRect(k);};this.resetTransform=function(){this.he.transform(this.je);var k=a.Matrix.invert(this.je);this.ce.concat(k);
		this.je=this.ce.getTotalMatrix();};this.restore=function(){var k=this.Ff.pop();if(k){var q=a.Matrix.multiply(this.je,a.Matrix.invert(k.ag));this.he.transform(q);this.fe.delete();this.fe=k.sg;this.Ne=k.qg;this.bf=k.Eg;this.ye=k.Dg;this.se=k.fs;this.Pe=k.Bg;this.Qe=k.Cg;this.Oe=k.sb;this.af=k.Ag;this.Be=k.ga;this.ee=k.hg;this.$e=k.rg;this.kf=k.gg;this.ce.restore();this.je=this.ce.getTotalMatrix();}};this.rotate=function(k){if(isFinite(k)){var q=a.Matrix.rotated(-k);this.he.transform(q);this.ce.rotate(k/
		Math.PI*180,0,0);this.je=this.ce.getTotalMatrix();}};this.save=function(){if(this.se.Le){var k=this.se.Le();this.Ue.push(k);}else k=this.se;if(this.ye.Le){var q=this.ye.Le();this.Ue.push(q);}else q=this.ye;this.Ff.push({ag:this.je.slice(),qg:this.Ne.slice(),Eg:this.bf,Dg:q,fs:k,Bg:this.Pe,Cg:this.Qe,sb:this.Oe,Ag:this.af,ga:this.Be,rg:this.$e,hg:this.ee,sg:this.fe.copy(),gg:this.kf});this.ce.save();};this.scale=function(k,q){if(e(arguments)){var z=a.Matrix.scaled(1/k,1/q);this.he.transform(z);this.ce.scale(k,
		q);this.je=this.ce.getTotalMatrix();}};this.setLineDash=function(k){for(var q=0;q<k.length;q++)if(!isFinite(k[q])||0>k[q])return;1===k.length%2&&Array.prototype.push.apply(k,k);this.Ne=k;};this.setTransform=function(k,q,z,A,F,H){e(arguments)&&(this.resetTransform(),this.transform(k,q,z,A,F,H));};this.Ke=function(){var k=a.Matrix.invert(this.je);this.ce.concat(k);this.ce.concat(a.Matrix.translated(this.Pe,this.Qe));this.ce.concat(this.je);};this.Re=function(k){var q=a.multiplyByAlpha(this.af,this.Be);
		if(!a.getColorComponents(q)[3]||!(this.Oe||this.Qe||this.Pe))return null;k=k.copy();k.setColor(q);var z=a.MaskFilter.MakeBlur(a.BlurStyle.Normal,this.Oe/2,false);k.setMaskFilter(z);k.dispose=function(){z.delete();this.delete();};return k};this.xf=function(){var k=this.fe.copy();k.setStyle(a.PaintStyle.Stroke);if(f(this.ye)){var q=a.multiplyByAlpha(this.ye,this.Be);k.setColor(q);}else q=this.ye.Me(this.je),k.setColor(a.Color(0,0,0,this.Be)),k.setShader(q);k.setStrokeWidth(this.bf);if(this.Ne.length){var z=
		a.PathEffect.MakeDash(this.Ne,this.$e);k.setPathEffect(z);}k.dispose=function(){z&&z.delete();this.delete();};return k};this.stroke=function(k){k=k?k.le:this.he;var q=this.xf(),z=this.Re(q);z&&(this.ce.save(),this.Ke(),this.ce.drawPath(k,z),this.ce.restore(),z.dispose());this.ce.drawPath(k,q);q.dispose();};this.strokeRect=function(k,q,z,A){var F=this.xf(),H=this.Re(F);H&&(this.ce.save(),this.Ke(),this.ce.drawRect(a.XYWHRect(k,q,z,A),H),this.ce.restore(),H.dispose());this.ce.drawRect(a.XYWHRect(k,q,z,
		A),F);F.dispose();};this.strokeText=function(k,q,z){var A=this.xf();k=a.TextBlob.MakeFromText(k,this.Fe);var F=this.Re(A);F&&(this.ce.save(),this.Ke(),this.ce.drawTextBlob(k,q,z,F),this.ce.restore(),F.dispose());this.ce.drawTextBlob(k,q,z,A);k.delete();A.dispose();};this.translate=function(k,q){if(e(arguments)){var z=a.Matrix.translated(-k,-q);this.he.transform(z);this.ce.translate(k,q);this.je=this.ce.getTotalMatrix();}};this.transform=function(k,q,z,A,F,H){k=[k,z,F,q,A,H,0,0,1];q=a.Matrix.invert(k);
		this.he.transform(q);this.ce.concat(k);this.je=this.ce.getTotalMatrix();};this.addHitRegion=function(){};this.clearHitRegions=function(){};this.drawFocusIfNeeded=function(){};this.removeHitRegion=function(){};this.scrollPathIntoView=function(){};Object.defineProperty(this,"canvas",{value:null,writable:false});}function C(I){this.yf=I;this.be=new x(I.getCanvas());this.lf=[];this.decodeImage=function(k){k=a.MakeImageFromEncoded(k);if(!k)throw "Invalid input";this.lf.push(k);return new K(k)};this.loadFont=
		function(k,q){k=a.Typeface.MakeTypefaceFromData(k);if(!k)return null;this.lf.push(k);var z=(q.style||"normal")+"|"+(q.variant||"normal")+"|"+(q.weight||"normal");q=q.family;t();fa[q]||(fa[q]={"*":k});fa[q][z]=k;};this.makePath2D=function(k){k=new ea(k);this.lf.push(k.le);return k};this.getContext=function(k){return "2d"===k?this.be:null};this.toDataURL=function(k,q){this.yf.flush();var z=this.yf.makeImageSnapshot();if(z){k=k||"image/png";var A=a.ImageFormat.PNG;"image/jpeg"===k&&(A=a.ImageFormat.JPEG);
		if(q=z.encodeToBytes(A,q||.92)){z.delete();k="data:"+k+";base64,";if("undefined"!==typeof Buffer)q=Buffer.from(q).toString("base64");else {z=0;A=q.length;for(var F="",H;z<A;)H=q.slice(z,Math.min(z+32768,A)),F+=String.fromCharCode.apply(null,H),z+=32768;q=btoa(F);}return k+q}}};this.dispose=function(){this.be.Ee();this.lf.forEach(function(k){k.delete();});this.yf.dispose();};}function K(I){this.width=I.width();this.height=I.height();this.naturalWidth=this.width;this.naturalHeight=this.height;this.Lf=function(){return I};}
		function O(I,k,q){if(!k||0===q)throw new TypeError("invalid dimensions, width and height must be non-zero");if(I.length%4)throw new TypeError("arr must be a multiple of 4");q=q||I.length/(4*k);Object.defineProperty(this,"data",{value:I,writable:false});Object.defineProperty(this,"height",{value:q,writable:false});Object.defineProperty(this,"width",{value:k,writable:false});}function P(I,k,q,z){this.ne=null;this.ue=[];this.qe=[];this.addColorStop=function(A,F){if(0>A||1<A||!isFinite(A))throw "offset must be between 0 and 1 inclusively";
		F=g(F);var H=this.qe.indexOf(A);if(-1!==H)this.ue[H]=F;else {for(H=0;H<this.qe.length&&!(this.qe[H]>A);H++);this.qe.splice(H,0,A);this.ue.splice(H,0,F);}};this.Le=function(){var A=new P(I,k,q,z);A.ue=this.ue.slice();A.qe=this.qe.slice();return A};this.Ee=function(){this.ne&&(this.ne.delete(),this.ne=null);};this.Me=function(A){var F=[I,k,q,z];a.Matrix.mapPoints(A,F);A=F[0];var H=F[1],N=F[2];F=F[3];this.Ee();return this.ne=a.Shader.MakeLinearGradient([A,H],[N,F],this.ue,this.qe,a.TileMode.Clamp)};}function Y(I,
		k,q,z,A,F){if(e([k,q,z,A,F])){if(0>F)throw "radii cannot be negative";I.isEmpty()&&I.moveTo(k,q);I.arcToTangent(k,q,z,A,F);}}function ba(I){if(!I.isEmpty()){var k=I.getBounds();(k[3]-k[1]||k[2]-k[0])&&I.close();}}function r(I,k,q,z,A,F,H){H=(H-F)/Math.PI*180;F=F/Math.PI*180;k=a.LTRBRect(k-z,q-A,k+z,q+A);1E-5>Math.abs(Math.abs(H)-360)?(q=H/2,I.arcToOval(k,F,q,false),I.arcToOval(k,F+q,q,false)):I.arcToOval(k,F,H,false);}function D(I,k,q,z,A,F,H,N,V){if(e([k,q,z,A,F,H,N])){if(0>z||0>A)throw "radii cannot be negative";
		var qa=2*Math.PI,cb=H%qa;0>cb&&(cb+=qa);var db=cb-H;H=cb;N+=db;!V&&N-H>=qa?N=H+qa:V&&H-N>=qa?N=H-qa:!V&&H>N?N=H+(qa-(H-N)%qa):V&&H<N&&(N=H-(qa-(N-H)%qa));F?(V=a.Matrix.rotated(F,k,q),F=a.Matrix.rotated(-F,k,q),I.transform(F),r(I,k,q,z,A,H,N),I.transform(V)):r(I,k,q,z,A,H,N);}}function U(I,k,q){e([k,q])&&(I.isEmpty()&&I.moveTo(k,q),I.lineTo(k,q));}function ea(I){this.le=null;this.le="string"===typeof I?a.Path.MakeFromSVGString(I):I&&I.vf?I.le.copy():new a.Path;this.vf=function(){return this.le};this.addPath=
		function(k,q){q||(q={a:1,c:0,e:0,b:0,d:1,f:0});this.le.addPath(k.le,[q.a,q.c,q.e,q.b,q.d,q.f]);};this.arc=function(k,q,z,A,F,H){D(this.le,k,q,z,z,0,A,F,H);};this.arcTo=function(k,q,z,A,F){Y(this.le,k,q,z,A,F);};this.bezierCurveTo=function(k,q,z,A,F,H){var N=this.le;e([k,q,z,A,F,H])&&(N.isEmpty()&&N.moveTo(k,q),N.cubicTo(k,q,z,A,F,H));};this.closePath=function(){ba(this.le);};this.ellipse=function(k,q,z,A,F,H,N,V){D(this.le,k,q,z,A,F,H,N,V);};this.lineTo=function(k,q){U(this.le,k,q);};this.moveTo=function(k,
		q){var z=this.le;e([k,q])&&z.moveTo(k,q);};this.quadraticCurveTo=function(k,q,z,A){var F=this.le;e([k,q,z,A])&&(F.isEmpty()&&F.moveTo(k,q),F.quadTo(k,q,z,A));};this.rect=function(k,q,z,A){var F=this.le;k=a.XYWHRect(k,q,z,A);e(k)&&F.addRect(k);};}function la(I,k){this.ne=null;I instanceof K&&(I=I.Lf());this.Uf=I;this._transform=a.Matrix.identity();""===k&&(k="repeat");switch(k){case "repeat-x":this.Se=a.TileMode.Repeat;this.Te=a.TileMode.Decal;break;case "repeat-y":this.Se=a.TileMode.Decal;this.Te=a.TileMode.Repeat;
		break;case "repeat":this.Te=this.Se=a.TileMode.Repeat;break;case "no-repeat":this.Te=this.Se=a.TileMode.Decal;break;default:throw "invalid repetition mode "+k;}this.setTransform=function(q){q=[q.a,q.c,q.e,q.b,q.d,q.f,0,0,1];e(q)&&(this._transform=q);};this.Le=function(){var q=new la;q.Se=this.Se;q.Te=this.Te;return q};this.Ee=function(){this.ne&&(this.ne.delete(),this.ne=null);};this.Me=function(){this.Ee();return this.ne=this.Uf.makeShaderCubic(this.Se,this.Te,1/3,1/3,this._transform)};}function ta(I,
		k,q,z,A,F){this.ne=null;this.ue=[];this.qe=[];this.addColorStop=function(H,N){if(0>H||1<H||!isFinite(H))throw "offset must be between 0 and 1 inclusively";N=g(N);var V=this.qe.indexOf(H);if(-1!==V)this.ue[V]=N;else {for(V=0;V<this.qe.length&&!(this.qe[V]>H);V++);this.qe.splice(V,0,H);this.ue.splice(V,0,N);}};this.Le=function(){var H=new ta(I,k,q,z,A,F);H.ue=this.ue.slice();H.qe=this.qe.slice();return H};this.Ee=function(){this.ne&&(this.ne.delete(),this.ne=null);};this.Me=function(H){var N=[I,k,z,A];
		a.Matrix.mapPoints(H,N);var V=N[0],qa=N[1],cb=N[2];N=N[3];var db=(Math.abs(H[0])+Math.abs(H[4]))/2;H=q*db;db*=F;this.Ee();return this.ne=a.Shader.MakeTwoPointConicalGradient([V,qa],H,[cb,N],db,this.ue,this.qe,a.TileMode.Clamp)};}a._testing={};var xa={aliceblue:Float32Array.of(.941,.973,1,1),antiquewhite:Float32Array.of(.98,.922,.843,1),aqua:Float32Array.of(0,1,1,1),aquamarine:Float32Array.of(.498,1,.831,1),azure:Float32Array.of(.941,1,1,1),beige:Float32Array.of(.961,.961,.863,1),bisque:Float32Array.of(1,
		.894,.769,1),black:Float32Array.of(0,0,0,1),blanchedalmond:Float32Array.of(1,.922,.804,1),blue:Float32Array.of(0,0,1,1),blueviolet:Float32Array.of(.541,.169,.886,1),brown:Float32Array.of(.647,.165,.165,1),burlywood:Float32Array.of(.871,.722,.529,1),cadetblue:Float32Array.of(.373,.62,.627,1),chartreuse:Float32Array.of(.498,1,0,1),chocolate:Float32Array.of(.824,.412,.118,1),coral:Float32Array.of(1,.498,.314,1),cornflowerblue:Float32Array.of(.392,.584,.929,1),cornsilk:Float32Array.of(1,.973,.863,1),
		crimson:Float32Array.of(.863,.078,.235,1),cyan:Float32Array.of(0,1,1,1),darkblue:Float32Array.of(0,0,.545,1),darkcyan:Float32Array.of(0,.545,.545,1),darkgoldenrod:Float32Array.of(.722,.525,.043,1),darkgray:Float32Array.of(.663,.663,.663,1),darkgreen:Float32Array.of(0,.392,0,1),darkgrey:Float32Array.of(.663,.663,.663,1),darkkhaki:Float32Array.of(.741,.718,.42,1),darkmagenta:Float32Array.of(.545,0,.545,1),darkolivegreen:Float32Array.of(.333,.42,.184,1),darkorange:Float32Array.of(1,.549,0,1),darkorchid:Float32Array.of(.6,
		.196,.8,1),darkred:Float32Array.of(.545,0,0,1),darksalmon:Float32Array.of(.914,.588,.478,1),darkseagreen:Float32Array.of(.561,.737,.561,1),darkslateblue:Float32Array.of(.282,.239,.545,1),darkslategray:Float32Array.of(.184,.31,.31,1),darkslategrey:Float32Array.of(.184,.31,.31,1),darkturquoise:Float32Array.of(0,.808,.82,1),darkviolet:Float32Array.of(.58,0,.827,1),deeppink:Float32Array.of(1,.078,.576,1),deepskyblue:Float32Array.of(0,.749,1,1),dimgray:Float32Array.of(.412,.412,.412,1),dimgrey:Float32Array.of(.412,
		.412,.412,1),dodgerblue:Float32Array.of(.118,.565,1,1),firebrick:Float32Array.of(.698,.133,.133,1),floralwhite:Float32Array.of(1,.98,.941,1),forestgreen:Float32Array.of(.133,.545,.133,1),fuchsia:Float32Array.of(1,0,1,1),gainsboro:Float32Array.of(.863,.863,.863,1),ghostwhite:Float32Array.of(.973,.973,1,1),gold:Float32Array.of(1,.843,0,1),goldenrod:Float32Array.of(.855,.647,.125,1),gray:Float32Array.of(.502,.502,.502,1),green:Float32Array.of(0,.502,0,1),greenyellow:Float32Array.of(.678,1,.184,1),grey:Float32Array.of(.502,
		.502,.502,1),honeydew:Float32Array.of(.941,1,.941,1),hotpink:Float32Array.of(1,.412,.706,1),indianred:Float32Array.of(.804,.361,.361,1),indigo:Float32Array.of(.294,0,.51,1),ivory:Float32Array.of(1,1,.941,1),khaki:Float32Array.of(.941,.902,.549,1),lavender:Float32Array.of(.902,.902,.98,1),lavenderblush:Float32Array.of(1,.941,.961,1),lawngreen:Float32Array.of(.486,.988,0,1),lemonchiffon:Float32Array.of(1,.98,.804,1),lightblue:Float32Array.of(.678,.847,.902,1),lightcoral:Float32Array.of(.941,.502,.502,
		1),lightcyan:Float32Array.of(.878,1,1,1),lightgoldenrodyellow:Float32Array.of(.98,.98,.824,1),lightgray:Float32Array.of(.827,.827,.827,1),lightgreen:Float32Array.of(.565,.933,.565,1),lightgrey:Float32Array.of(.827,.827,.827,1),lightpink:Float32Array.of(1,.714,.757,1),lightsalmon:Float32Array.of(1,.627,.478,1),lightseagreen:Float32Array.of(.125,.698,.667,1),lightskyblue:Float32Array.of(.529,.808,.98,1),lightslategray:Float32Array.of(.467,.533,.6,1),lightslategrey:Float32Array.of(.467,.533,.6,1),lightsteelblue:Float32Array.of(.69,
		.769,.871,1),lightyellow:Float32Array.of(1,1,.878,1),lime:Float32Array.of(0,1,0,1),limegreen:Float32Array.of(.196,.804,.196,1),linen:Float32Array.of(.98,.941,.902,1),magenta:Float32Array.of(1,0,1,1),maroon:Float32Array.of(.502,0,0,1),mediumaquamarine:Float32Array.of(.4,.804,.667,1),mediumblue:Float32Array.of(0,0,.804,1),mediumorchid:Float32Array.of(.729,.333,.827,1),mediumpurple:Float32Array.of(.576,.439,.859,1),mediumseagreen:Float32Array.of(.235,.702,.443,1),mediumslateblue:Float32Array.of(.482,
		.408,.933,1),mediumspringgreen:Float32Array.of(0,.98,.604,1),mediumturquoise:Float32Array.of(.282,.82,.8,1),mediumvioletred:Float32Array.of(.78,.082,.522,1),midnightblue:Float32Array.of(.098,.098,.439,1),mintcream:Float32Array.of(.961,1,.98,1),mistyrose:Float32Array.of(1,.894,.882,1),moccasin:Float32Array.of(1,.894,.71,1),navajowhite:Float32Array.of(1,.871,.678,1),navy:Float32Array.of(0,0,.502,1),oldlace:Float32Array.of(.992,.961,.902,1),olive:Float32Array.of(.502,.502,0,1),olivedrab:Float32Array.of(.42,
		.557,.137,1),orange:Float32Array.of(1,.647,0,1),orangered:Float32Array.of(1,.271,0,1),orchid:Float32Array.of(.855,.439,.839,1),palegoldenrod:Float32Array.of(.933,.91,.667,1),palegreen:Float32Array.of(.596,.984,.596,1),paleturquoise:Float32Array.of(.686,.933,.933,1),palevioletred:Float32Array.of(.859,.439,.576,1),papayawhip:Float32Array.of(1,.937,.835,1),peachpuff:Float32Array.of(1,.855,.725,1),peru:Float32Array.of(.804,.522,.247,1),pink:Float32Array.of(1,.753,.796,1),plum:Float32Array.of(.867,.627,
		.867,1),powderblue:Float32Array.of(.69,.878,.902,1),purple:Float32Array.of(.502,0,.502,1),rebeccapurple:Float32Array.of(.4,.2,.6,1),red:Float32Array.of(1,0,0,1),rosybrown:Float32Array.of(.737,.561,.561,1),royalblue:Float32Array.of(.255,.412,.882,1),saddlebrown:Float32Array.of(.545,.271,.075,1),salmon:Float32Array.of(.98,.502,.447,1),sandybrown:Float32Array.of(.957,.643,.376,1),seagreen:Float32Array.of(.18,.545,.341,1),seashell:Float32Array.of(1,.961,.933,1),sienna:Float32Array.of(.627,.322,.176,1),
		silver:Float32Array.of(.753,.753,.753,1),skyblue:Float32Array.of(.529,.808,.922,1),slateblue:Float32Array.of(.416,.353,.804,1),slategray:Float32Array.of(.439,.502,.565,1),slategrey:Float32Array.of(.439,.502,.565,1),snow:Float32Array.of(1,.98,.98,1),springgreen:Float32Array.of(0,1,.498,1),steelblue:Float32Array.of(.275,.51,.706,1),tan:Float32Array.of(.824,.706,.549,1),teal:Float32Array.of(0,.502,.502,1),thistle:Float32Array.of(.847,.749,.847,1),tomato:Float32Array.of(1,.388,.278,1),transparent:Float32Array.of(0,
		0,0,0),turquoise:Float32Array.of(.251,.878,.816,1),violet:Float32Array.of(.933,.51,.933,1),wheat:Float32Array.of(.961,.871,.702,1),white:Float32Array.of(1,1,1,1),whitesmoke:Float32Array.of(.961,.961,.961,1),yellow:Float32Array.of(1,1,0,1),yellowgreen:Float32Array.of(.604,.804,.196,1)};a._testing.parseColor=g;a._testing.colorToString=d;var Da=RegExp("(italic|oblique|normal|)\\s*(small-caps|normal|)\\s*(bold|bolder|lighter|[1-9]00|normal|)\\s*([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)(.+)"),fa;
		a._testing.parseFontString=l;a.MakeCanvas=function(I,k){return (I=a.MakeSurface(I,k))?new C(I):null};a.ImageData=function(){if(2===arguments.length){var I=arguments[0],k=arguments[1];return new O(new Uint8ClampedArray(4*I*k),I,k)}if(3===arguments.length){var q=arguments[0];if(q.prototype.constructor!==Uint8ClampedArray)throw new TypeError("bytes must be given as a Uint8ClampedArray");I=arguments[1];k=arguments[2];if(q%4)throw new TypeError("bytes must be given in a multiple of 4");if(q%I)throw new TypeError("bytes must divide evenly by width");
		if(k&&k!==q/(4*I))throw new TypeError("invalid height given");return new O(q,I,q/(4*I))}throw new TypeError("invalid number of arguments - takes 2 or 3, saw "+arguments.length);};})();})(w);var ra=Object.assign({},w),ua="./this.program",va=(a,b)=>{throw b;},wa="object"==typeof window,ya="function"==typeof importScripts,za="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,Aa="",Ba,Ea,Fa;
		if(za){var fs=require$$0,Ga=require$$1;Aa=ya?Ga.dirname(Aa)+"/":__dirname+"/";Ba=(a,b)=>{a=a.startsWith("file://")?new URL(a):Ga.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};Fa=a=>{a=Ba(a,true);a.buffer||(a=new Uint8Array(a));return a};Ea=(a,b,c,f=true)=>{a=a.startsWith("file://")?new URL(a):Ga.normalize(a);fs.readFile(a,f?void 0:"utf8",(h,m)=>{h?c(h):b(f?m.buffer:m);});};!w.thisProgram&&1<process.argv.length&&(ua=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);va=(a,b)=>{process.exitCode=
		a;throw b;};w.inspect=()=>"[Emscripten Module object]";}else if(wa||ya)ya?Aa=self.location.href:"undefined"!=typeof document&&document.currentScript&&(Aa=document.currentScript.src),_scriptDir&&(Aa=_scriptDir),0!==Aa.indexOf("blob:")?Aa=Aa.substr(0,Aa.replace(/[?#].*/,"").lastIndexOf("/")+1):Aa="",Ba=a=>{var b=new XMLHttpRequest;b.open("GET",a,false);b.send(null);return b.responseText},ya&&(Fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,false);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
		Ea=(a,b,c)=>{var f=new XMLHttpRequest;f.open("GET",a,true);f.responseType="arraybuffer";f.onload=()=>{200==f.status||0==f.status&&f.response?b(f.response):c();};f.onerror=c;f.send(null);};var Ha=w.print||console.log.bind(console),Ia=w.printErr||console.error.bind(console);Object.assign(w,ra);ra=null;w.thisProgram&&(ua=w.thisProgram);w.quit&&(va=w.quit);var Ja;w.wasmBinary&&(Ja=w.wasmBinary);w.noExitRuntime||true;"object"!=typeof WebAssembly&&Ka("no native wasm support detected");
		var La,Ma,Na=false,Qa,J,Ra,Sa,Q,Ta,R,Ua;function Wa(){var a=La.buffer;w.HEAP8=Qa=new Int8Array(a);w.HEAP16=Ra=new Int16Array(a);w.HEAP32=Q=new Int32Array(a);w.HEAPU8=J=new Uint8Array(a);w.HEAPU16=Sa=new Uint16Array(a);w.HEAPU32=Ta=new Uint32Array(a);w.HEAPF32=R=new Float32Array(a);w.HEAPF64=Ua=new Float64Array(a);}var Xa,Ya=[],Za=[],$a=[];function ab(){var a=w.preRun.shift();Ya.unshift(a);}var eb=0,gb=null;
		function Ka(a){if(w.onAbort)w.onAbort(a);a="Aborted("+a+")";Ia(a);Na=true;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");ca(a);throw a;}function hb(a){return a.startsWith("data:application/octet-stream;base64,")}var mb;mb="canvaskit.wasm";if(!hb(mb)){var nb=mb;mb=w.locateFile?w.locateFile(nb,Aa):Aa+nb;}function ob(a){if(a==mb&&Ja)return new Uint8Array(Ja);if(Fa)return Fa(a);throw "both async and sync fetching of the wasm failed";}
		function pb(a){if(!Ja&&(wa||ya)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw "failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>ob(a));if(Ea)return new Promise((b,c)=>{Ea(a,f=>b(new Uint8Array(f)),c);})}return Promise.resolve().then(()=>ob(a))}function qb(a,b,c){return pb(a).then(f=>WebAssembly.instantiate(f,b)).then(f=>f).then(c,f=>{Ia("failed to asynchronously prepare wasm: "+f);Ka(f);})}
		function rb(a,b){var c=mb;return Ja||"function"!=typeof WebAssembly.instantiateStreaming||hb(c)||c.startsWith("file://")||za||"function"!=typeof fetch?qb(c,a,b):fetch(c,{credentials:"same-origin"}).then(f=>WebAssembly.instantiateStreaming(f,a).then(b,function(h){Ia("wasm streaming compile failed: "+h);Ia("falling back to ArrayBuffer instantiation");return qb(c,a,b)}))}function sb(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a;}
		var tb=a=>{for(;0<a.length;)a.shift()(w);},ub="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,vb=(a,b,c)=>{var f=b+c;for(c=b;a[c]&&!(c>=f);)++c;if(16<c-b&&a.buffer&&ub)return ub.decode(a.subarray(b,c));for(f="";b<c;){var h=a[b++];if(h&128){var m=a[b++]&63;if(192==(h&224))f+=String.fromCharCode((h&31)<<6|m);else {var u=a[b++]&63;h=224==(h&240)?(h&15)<<12|m<<6|u:(h&7)<<18|m<<12|u<<6|a[b++]&63;65536>h?f+=String.fromCharCode(h):(h-=65536,f+=String.fromCharCode(55296|h>>10,56320|h&1023));}}else f+=
		String.fromCharCode(h);}return f},wb={};function xb(a){for(;a.length;){var b=a.pop();a.pop()(b);}}function yb(a){return this.fromWireType(Q[a>>2])}var zb={},Bb={},Cb={},Db=void 0;function Eb(a){throw new Db(a);}
		function Fb(a,b,c){function f(n){n=c(n);n.length!==a.length&&Eb("Mismatched type converter count");for(var p=0;p<a.length;++p)Gb(a[p],n[p]);}a.forEach(function(n){Cb[n]=b;});var h=Array(b.length),m=[],u=0;b.forEach((n,p)=>{Bb.hasOwnProperty(n)?h[p]=Bb[n]:(m.push(n),zb.hasOwnProperty(n)||(zb[n]=[]),zb[n].push(()=>{h[p]=Bb[n];++u;u===m.length&&f(h);}));});0===m.length&&f(h);}
		function Hb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${a}`);}}var Ib=void 0;function Jb(a){for(var b="";J[a];)b+=Ib[J[a++]];return b}var Kb=void 0;function W(a){throw new Kb(a);}
		function Lb(a,b,c={}){var f=b.name;a||W(`type "${f}" must have a positive integer typeid pointer`);if(Bb.hasOwnProperty(a)){if(c.ng)return;W(`Cannot register type '${f}' twice`);}Bb[a]=b;delete Cb[a];zb.hasOwnProperty(a)&&(b=zb[a],delete zb[a],b.forEach(h=>h()));}function Gb(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");Lb(a,b,c);}function Mb(a){W(a.ae.me.ge.name+" instance already deleted");}var Nb=false;function Ob(){}
		function Pb(a){--a.count.value;0===a.count.value&&(a.pe?a.we.De(a.pe):a.me.ge.De(a.ie));}function Qb(a,b,c){if(b===c)return a;if(void 0===c.re)return null;a=Qb(a,b,c.re);return null===a?null:c.dg(a)}var Rb={},Sb=[];function Tb(){for(;Sb.length;){var a=Sb.pop();a.ae.Xe=false;a["delete"]();}}var Ub=void 0,Vb={};function Wb(a,b){for(void 0===b&&W("ptr should not be undefined");a.re;)b=a.gf(b),a=a.re;return Vb[b]}
		function cc(a,b){b.me&&b.ie||Eb("makeClassHandle requires ptr and ptrType");!!b.we!==!!b.pe&&Eb("Both smartPtrType and smartPtr must be specified");b.count={value:1};return dc(Object.create(a,{ae:{value:b}}))}function dc(a){if("undefined"===typeof FinalizationRegistry)return dc=b=>b,a;Nb=new FinalizationRegistry(b=>{Pb(b.ae);});dc=b=>{var c=b.ae;c.pe&&Nb.register(b,{ae:c},b);return b};Ob=b=>{Nb.unregister(b);};return dc(a)}function ec(){}
		function fc(a){if(void 0===a)return "_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?`_${a}`:a}function gc(a,b){a=fc(a);return {[a]:function(){return b.apply(this,arguments)}}[a]}
		function hc(a,b,c){if(void 0===a[b].oe){var f=a[b];a[b]=function(){a[b].oe.hasOwnProperty(arguments.length)||W(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].oe})!`);return a[b].oe[arguments.length].apply(this,arguments)};a[b].oe=[];a[b].oe[f.Ve]=f;}}
		function ic(a,b,c){w.hasOwnProperty(a)?((void 0===c||void 0!==w[a].oe&&void 0!==w[a].oe[c])&&W(`Cannot register public name '${a}' twice`),hc(w,a,a),w.hasOwnProperty(c)&&W(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),w[a].oe[c]=b):(w[a]=b,void 0!==c&&(w[a].Lg=c));}function jc(a,b,c,f,h,m,u,n){this.name=a;this.constructor=b;this.Ye=c;this.De=f;this.re=h;this.ig=m;this.gf=u;this.dg=n;this.ug=[];}
		function kc(a,b,c){for(;b!==c;)b.gf||W(`Expected null or instance of ${c.name}, got an instance of ${b.name}`),a=b.gf(a),b=b.re;return a}function lc(a,b){if(null===b)return this.Bf&&W(`null is not a valid ${this.name}`),0;b.ae||W(`Cannot pass "${mc(b)}" as a ${this.name}`);b.ae.ie||W(`Cannot pass deleted object as a pointer of type ${this.name}`);return kc(b.ae.ie,b.ae.me.ge,this.ge)}
		function nc(a,b){if(null===b){this.Bf&&W(`null is not a valid ${this.name}`);if(this.pf){var c=this.Cf();null!==a&&a.push(this.De,c);return c}return 0}b.ae||W(`Cannot pass "${mc(b)}" as a ${this.name}`);b.ae.ie||W(`Cannot pass deleted object as a pointer of type ${this.name}`);!this.nf&&b.ae.me.nf&&W(`Cannot convert argument of type ${b.ae.we?b.ae.we.name:b.ae.me.name} to parameter type ${this.name}`);c=kc(b.ae.ie,b.ae.me.ge,this.ge);if(this.pf)switch(void 0===b.ae.pe&&W("Passing raw pointer to smart pointer is illegal"),
		this.zg){case 0:b.ae.we===this?c=b.ae.pe:W(`Cannot convert argument of type ${b.ae.we?b.ae.we.name:b.ae.me.name} to parameter type ${this.name}`);break;case 1:c=b.ae.pe;break;case 2:if(b.ae.we===this)c=b.ae.pe;else {var f=b.clone();c=this.vg(c,oc(function(){f["delete"]();}));null!==a&&a.push(this.De,c);}break;default:W("Unsupporting sharing policy");}return c}
		function pc(a,b){if(null===b)return this.Bf&&W(`null is not a valid ${this.name}`),0;b.ae||W(`Cannot pass "${mc(b)}" as a ${this.name}`);b.ae.ie||W(`Cannot pass deleted object as a pointer of type ${this.name}`);b.ae.me.nf&&W(`Cannot convert argument of type ${b.ae.me.name} to parameter type ${this.name}`);return kc(b.ae.ie,b.ae.me.ge,this.ge)}
		function qc(a,b,c,f,h,m,u,n,p,v,E){this.name=a;this.ge=b;this.Bf=c;this.nf=f;this.pf=h;this.tg=m;this.zg=u;this.Nf=n;this.Cf=p;this.vg=v;this.De=E;h||void 0!==b.re?this.toWireType=nc:(this.toWireType=f?lc:pc,this.ve=null);}function rc(a,b,c){w.hasOwnProperty(a)||Eb("Replacing nonexistant public symbol");void 0!==w[a].oe&&void 0!==c?w[a].oe[c]=b:(w[a]=b,w[a].Ve=c);}
		var sc=(a,b)=>{var c=[];return function(){c.length=0;Object.assign(c,arguments);if(a.includes("j")){var f=w["dynCall_"+a];f=c&&c.length?f.apply(null,[b].concat(c)):f.call(null,b);}else f=Xa.get(b).apply(null,c);return f}};function tc(a,b){a=Jb(a);var c=a.includes("j")?sc(a,b):Xa.get(b);"function"!=typeof c&&W(`unknown function pointer with signature ${a}: ${b}`);return c}var uc=void 0;function vc(a){a=wc(a);var b=Jb(a);xc(a);return b}
		function yc(a,b){function c(m){h[m]||Bb[m]||(Cb[m]?Cb[m].forEach(c):(f.push(m),h[m]=true));}var f=[],h={};b.forEach(c);throw new uc(`${a}: `+f.map(vc).join([", "]));}
		function Fc(a,b,c,f,h){var m=b.length;2>m&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=null!==b[1]&&null!==c,n=false;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].ve){n=true;break}var p="void"!==b[0].name,v=m-2,E=Array(v),G=[],L=[];return function(){arguments.length!==v&&W(`function ${a} called with ${arguments.length} arguments, expected ${v} args!`);L.length=0;G.length=u?2:1;G[0]=h;if(u){var y=b[1].toWireType(L,this);G[1]=y;}for(var M=0;M<v;++M)E[M]=
		b[M+2].toWireType(L,arguments[M]),G.push(E[M]);M=f.apply(null,G);if(n)xb(L);else for(var T=u?1:2;T<b.length;T++){var S=1===T?y:E[T-2];null!==b[T].ve&&b[T].ve(S);}y=p?b[0].fromWireType(M):void 0;return y}}function Gc(a,b){for(var c=[],f=0;f<a;f++)c.push(Ta[b+4*f>>2]);return c}function Hc(){this.Ce=[void 0];this.Kf=[];}var Ic=new Hc;function Jc(a){a>=Ic.df&&0===--Ic.get(a).Of&&Ic.Zf(a);}
		var Kc=a=>{a||W("Cannot use deleted val. handle = "+a);return Ic.get(a).value},oc=a=>{switch(a){case void 0:return 1;case null:return 2;case true:return 3;case false:return 4;default:return Ic.Yf({Of:1,value:a})}};function Lc(a,b,c){switch(b){case 0:return function(f){return this.fromWireType((c?Qa:J)[f])};case 1:return function(f){return this.fromWireType((c?Ra:Sa)[f>>1])};case 2:return function(f){return this.fromWireType((c?Q:Ta)[f>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
		function Mc(a,b){var c=Bb[a];void 0===c&&W(b+" has unknown type "+vc(a));return c}function mc(a){if(null===a)return "null";var b=typeof a;return "object"===b||"array"===b||"function"===b?a.toString():""+a}function Nc(a,b){switch(b){case 2:return function(c){return this.fromWireType(R[c>>2])};case 3:return function(c){return this.fromWireType(Ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
		function Oc(a,b,c){switch(b){case 0:return c?function(f){return Qa[f]}:function(f){return J[f]};case 1:return c?function(f){return Ra[f>>1]}:function(f){return Sa[f>>1]};case 2:return c?function(f){return Q[f>>2]}:function(f){return Ta[f>>2]};default:throw new TypeError("Unknown integer type: "+a);}}
		var oa=(a,b,c,f)=>{if(!(0<f))return 0;var h=c;f=c+f-1;for(var m=0;m<a.length;++m){var u=a.charCodeAt(m);if(55296<=u&&57343>=u){var n=a.charCodeAt(++m);u=65536+((u&1023)<<10)|n&1023;}if(127>=u){if(c>=f)break;b[c++]=u;}else {if(2047>=u){if(c+1>=f)break;b[c++]=192|u>>6;}else {if(65535>=u){if(c+2>=f)break;b[c++]=224|u>>12;}else {if(c+3>=f)break;b[c++]=240|u>>18;b[c++]=128|u>>12&63;}b[c++]=128|u>>6&63;}b[c++]=128|u&63;}}b[c]=0;return c-h},na=a=>{for(var b=0,c=0;c<a.length;++c){var f=a.charCodeAt(c);127>=f?b++:2047>=
		f?b+=2:55296<=f&&57343>=f?(b+=4,++c):b+=3;}return b},Pc="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Qc=(a,b)=>{var c=a>>1;for(var f=c+b/2;!(c>=f)&&Sa[c];)++c;c<<=1;if(32<c-a&&Pc)return Pc.decode(J.subarray(a,c));c="";for(f=0;!(f>=b/2);++f){var h=Ra[a+2*f>>1];if(0==h)break;c+=String.fromCharCode(h);}return c},Rc=(a,b,c)=>{ void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var f=b;c=c<2*a.length?c/2:a.length;for(var h=0;h<c;++h)Ra[b>>1]=a.charCodeAt(h),b+=2;Ra[b>>1]=0;return b-f},
		Sc=a=>2*a.length,Tc=(a,b)=>{for(var c=0,f="";!(c>=b/4);){var h=Q[a+4*c>>2];if(0==h)break;++c;65536<=h?(h-=65536,f+=String.fromCharCode(55296|h>>10,56320|h&1023)):f+=String.fromCharCode(h);}return f},Uc=(a,b,c)=>{ void 0===c&&(c=2147483647);if(4>c)return 0;var f=b;c=f+c-4;for(var h=0;h<a.length;++h){var m=a.charCodeAt(h);if(55296<=m&&57343>=m){var u=a.charCodeAt(++h);m=65536+((m&1023)<<10)|u&1023;}Q[b>>2]=m;b+=4;if(b+4>c)break}Q[b>>2]=0;return b-f},Vc=a=>{for(var b=0,c=0;c<a.length;++c){var f=a.charCodeAt(c);
		55296<=f&&57343>=f&&++c;b+=4;}return b},Wc={};function Xc(a){var b=Wc[a];return void 0===b?Jb(a):b}var Yc=[];
		function Zc(){function a(b){b.$$$embind_global$$$=b;var c="object"==typeof $$$embind_global$$$&&b.$$$embind_global$$$==b;c||delete b.$$$embind_global$$$;return c}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;"object"==typeof commonjsGlobal&&a(commonjsGlobal)?$$$embind_global$$$=commonjsGlobal:"object"==typeof self&&a(self)&&($$$embind_global$$$=self);if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.");
		}function $c(a){var b=Yc.length;Yc.push(a);return b}function ad(a,b){for(var c=Array(a),f=0;f<a;++f)c[f]=Mc(Ta[b+4*f>>2],"parameter "+f);return c}var bd=[];function cd(a){var b=Array(a+1);return function(c,f,h){b[0]=c;for(var m=0;m<a;++m){var u=Mc(Ta[f+4*m>>2],"parameter "+m);b[m+1]=u.readValueFromPointer(h);h+=u.argPackAdvance;}c=new (c.bind.apply(c,b));return oc(c)}}var dd={};
		function ed(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,f){b.vertexAttribDivisorANGLE(c,f);},a.drawArraysInstanced=function(c,f,h,m){b.drawArraysInstancedANGLE(c,f,h,m);},a.drawElementsInstanced=function(c,f,h,m,u){b.drawElementsInstancedANGLE(c,f,h,m,u);});}
		function fd(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c);},a.bindVertexArray=function(c){b.bindVertexArrayOES(c);},a.isVertexArray=function(c){return b.isVertexArrayOES(c)});}function gd(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,f){b.drawBuffersWEBGL(c,f);});}
		var hd=1,jd=[],kd=[],ld=[],md=[],ha=[],nd=[],od=[],ma=[],pd=[],qd=[],rd=[],sd={},td={},ud=4;function vd(a){wd||(wd=a);}function da(a){for(var b=hd++,c=a.length;c<b;c++)a[c]=null;return b}function ia(a,b){a.df||(a.df=a.getContext,a.getContext=function(f,h){h=a.df(f,h);return "webgl"==f==h instanceof WebGLRenderingContext?h:null});var c=1<b.majorVersion?a.getContext("webgl2",b):a.getContext("webgl",b);return c?xd(c,b):0}
		function xd(a,b){var c=da(ma),f={handle:c,attributes:b,version:b.majorVersion,xe:a};a.canvas&&(a.canvas.Rf=f);ma[c]=f;("undefined"==typeof b.eg||b.eg)&&yd(f);return c}function ja(a){B=ma[a];w.Jg=Z=B&&B.xe;return !(a&&!Z)}
		function yd(a){a||(a=B);if(!a.og){a.og=true;var b=a.xe;ed(b);fd(b);gd(b);b.If=b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");b.Mf=b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");2<=a.version&&(b.ze=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.ze)b.ze=b.getExtension("EXT_disjoint_timer_query");b.Kg=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c);});}}
		var B,wd;function zd(a,b){Z.bindFramebuffer(a,ld[b]);}function Ad(a){Z.bindVertexArray(od[a]);}function Bd(a){Z.clear(a);}function Cd(a,b,c,f){Z.clearColor(a,b,c,f);}function Dd(a){Z.clearStencil(a);}function Ed(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2];Z.deleteVertexArray(od[f]);od[f]=null;}}var Fd=[];function Gd(a,b,c,f){Z.drawElements(a,b,c,f);}function Jd(a,b,c,f){for(var h=0;h<a;h++){var m=Z[c](),u=m&&da(f);m?(m.name=u,f[u]=m):vd(1282);Q[b+4*h>>2]=u;}}
		function Kd(a,b){Jd(a,b,"createVertexArray",od);}function Ld(a,b){Ta[a>>2]=b;Ta[a+4>>2]=(b-Ta[a>>2])/4294967296;}
		function Md(a,b,c){if(b){var f=void 0;switch(a){case 36346:f=1;break;case 36344:0!=c&&1!=c&&vd(1280);return;case 34814:case 36345:f=0;break;case 34466:var h=Z.getParameter(34467);f=h?h.length:0;break;case 33309:if(2>B.version){vd(1282);return}f=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>B.version){vd(1280);return}f=33307==a?3:0;}if(void 0===f)switch(h=Z.getParameter(a),typeof h){case "number":f=h;break;case "boolean":f=h?1:0;break;case "string":vd(1280);return;case "object":if(null===
		h)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:f=0;break;default:vd(1280);return}else {if(h instanceof Float32Array||h instanceof Uint32Array||h instanceof Int32Array||h instanceof Array){for(a=0;a<h.length;++a)switch(c){case 0:Q[b+4*a>>2]=h[a];break;case 2:R[b+4*a>>2]=h[a];break;case 4:Qa[b+a>>0]=h[a]?1:0;}return}try{f=h.name|
		0;}catch(m){vd(1280);Ia("GL_INVALID_ENUM in glGet"+c+"v: Unknown object returned from WebGL getParameter("+a+")! (error: "+m+")");return}}break;default:vd(1280);Ia("GL_INVALID_ENUM in glGet"+c+"v: Native code calling glGet"+c+"v("+a+") and it returns "+h+" of type "+typeof h+"!");return}switch(c){case 1:Ld(b,f);break;case 0:Q[b>>2]=f;break;case 2:R[b>>2]=f;break;case 4:Qa[b>>0]=f?1:0;}}else vd(1281);}function Nd(a,b){Md(a,b,0);}
		function Od(a,b,c){if(c){a=pd[a];b=2>B.version?Z.ze.getQueryObjectEXT(a,b):Z.getQueryParameter(a,b);var f;"boolean"==typeof b?f=b?1:0:f=b;Ld(c,f);}else vd(1281);}var Qd=a=>{var b=na(a)+1,c=Pd(b);c&&oa(a,J,c,b);return c};
		function Rd(a){var b=sd[a];if(!b){switch(a){case 7939:b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(f){return "GL_"+f}));b=Qd(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||vd(1280);b=b&&Qd(b);break;case 7938:b=Z.getParameter(7938);b=2<=B.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Qd(b);break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+
		c[1]+" ("+b+")");b=Qd(b);break;default:vd(1280);}sd[a]=b;}return b}function Sd(a,b){if(2>B.version)return vd(1282),0;var c=td[a];if(c)return 0>b||b>=c.length?(vd(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(f){return "GL_"+f})),c=c.map(function(f){return Qd(f)}),c=td[a]=c,0>b||b>=c.length?(vd(1281),0):c[b];default:return vd(1280),0}}function Td(a){return "]"==a.slice(-1)&&a.lastIndexOf("[")}
		function Ud(a){a-=5120;return 0==a?Qa:1==a?J:2==a?Ra:4==a?Q:6==a?R:5==a||28922==a||28520==a||30779==a||30782==a?Ta:Sa}function Vd(a,b,c,f,h){a=Ud(a);var m=31-Math.clz32(a.BYTES_PER_ELEMENT),u=ud;return a.subarray(h>>m,h+f*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<m)+u-1&-u)>>m)}function Wd(a){var b=Z.bg;if(b){var c=b.ff[a];"number"==typeof c&&(b.ff[a]=c=Z.getUniformLocation(b,b.Pf[a]+(0<c?"["+c+"]":"")));return c}vd(1282);}
		var Xd=[],Yd=[],Zd={},ae=()=>{if(!$d){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ua||"./this.program"},b;for(b in Zd) void 0===Zd[b]?delete a[b]:a[b]=Zd[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);$d=c;}return $d},$d,be=[null,[],[]],ce=a=>0===a%4&&(0!==a%100||0===a%400),de=[31,29,31,30,31,30,31,31,30,31,30,31],ee=[31,28,31,30,31,30,31,31,30,31,30,31];
		function fe(a){var b=Array(na(a)+1);oa(a,b,0,b.length);return b}
		var ge=(a,b,c,f)=>{function h(y,M,T){for(y="number"==typeof y?y.toString():y||"";y.length<M;)y=T[0]+y;return y}function m(y,M){return h(y,M,"0")}function u(y,M){function T(sa){return 0>sa?-1:0<sa?1:0}var S;0===(S=T(y.getFullYear()-M.getFullYear()))&&0===(S=T(y.getMonth()-M.getMonth()))&&(S=T(y.getDate()-M.getDate()));return S}function n(y){switch(y.getDay()){case 0:return new Date(y.getFullYear()-1,11,29);case 1:return y;case 2:return new Date(y.getFullYear(),0,3);case 3:return new Date(y.getFullYear(),
		0,2);case 4:return new Date(y.getFullYear(),0,1);case 5:return new Date(y.getFullYear()-1,11,31);case 6:return new Date(y.getFullYear()-1,11,30)}}function p(y){var M=y.He;for(y=new Date((new Date(y.Ie+1900,0,1)).getTime());0<M;){var T=y.getMonth(),S=(ce(y.getFullYear())?de:ee)[T];if(M>S-y.getDate())M-=S-y.getDate()+1,y.setDate(1),11>T?y.setMonth(T+1):(y.setMonth(0),y.setFullYear(y.getFullYear()+1));else {y.setDate(y.getDate()+M);break}}T=new Date(y.getFullYear()+1,0,4);M=n(new Date(y.getFullYear(),
		0,4));T=n(T);return 0>=u(M,y)?0>=u(T,y)?y.getFullYear()+1:y.getFullYear():y.getFullYear()-1}var v=Q[f+40>>2];f={Hg:Q[f>>2],Gg:Q[f+4>>2],tf:Q[f+8>>2],Df:Q[f+12>>2],uf:Q[f+16>>2],Ie:Q[f+20>>2],Ae:Q[f+24>>2],He:Q[f+28>>2],Ng:Q[f+32>>2],Fg:Q[f+36>>2],Ig:v?v?vb(J,v):"":""};c=c?vb(J,c):"";v={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y",
		"%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var E in v)c=c.replace(new RegExp(E,"g"),v[E]);var G="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),L="January February March April May June July August September October November December".split(" ");v={"%a":y=>G[y.Ae].substring(0,3),"%A":y=>G[y.Ae],"%b":y=>L[y.uf].substring(0,3),"%B":y=>L[y.uf],"%C":y=>m((y.Ie+1900)/
		100|0,2),"%d":y=>m(y.Df,2),"%e":y=>h(y.Df,2," "),"%g":y=>p(y).toString().substring(2),"%G":y=>p(y),"%H":y=>m(y.tf,2),"%I":y=>{y=y.tf;0==y?y=12:12<y&&(y-=12);return m(y,2)},"%j":y=>{for(var M=0,T=0;T<=y.uf-1;M+=(ce(y.Ie+1900)?de:ee)[T++]);return m(y.Df+M,3)},"%m":y=>m(y.uf+1,2),"%M":y=>m(y.Gg,2),"%n":()=>"\n","%p":y=>0<=y.tf&&12>y.tf?"AM":"PM","%S":y=>m(y.Hg,2),"%t":()=>"\t","%u":y=>y.Ae||7,"%U":y=>m(Math.floor((y.He+7-y.Ae)/7),2),"%V":y=>{var M=Math.floor((y.He+7-(y.Ae+6)%7)/7);2>=(y.Ae+371-y.He-
		2)%7&&M++;if(M)53==M&&(T=(y.Ae+371-y.He)%7,4==T||3==T&&ce(y.Ie)||(M=1));else {M=52;var T=(y.Ae+7-y.He-1)%7;(4==T||5==T&&ce(y.Ie%400-1))&&M++;}return m(M,2)},"%w":y=>y.Ae,"%W":y=>m(Math.floor((y.He+7-(y.Ae+6)%7)/7),2),"%y":y=>(y.Ie+1900).toString().substring(2),"%Y":y=>y.Ie+1900,"%z":y=>{y=y.Fg;var M=0<=y;y=Math.abs(y)/60;return (M?"+":"-")+String("0000"+(y/60*100+y%60)).slice(-4)},"%Z":y=>y.Ig,"%%":()=>"%"};c=c.replace(/%%/g,"\x00\x00");for(E in v)c.includes(E)&&(c=c.replace(new RegExp(E,"g"),v[E](f)));
		c=c.replace(/\0\0/g,"%");E=fe(c);if(E.length>b)return 0;Qa.set(E,a);return E.length-1};Db=w.InternalError=class extends Error{constructor(a){super(a);this.name="InternalError";}};for(var he=Array(256),ie=0;256>ie;++ie)he[ie]=String.fromCharCode(ie);Ib=he;Kb=w.BindingError=class extends Error{constructor(a){super(a);this.name="BindingError";}};
		ec.prototype.isAliasOf=function(a){if(!(this instanceof ec&&a instanceof ec))return  false;var b=this.ae.me.ge,c=this.ae.ie,f=a.ae.me.ge;for(a=a.ae.ie;b.re;)c=b.gf(c),b=b.re;for(;f.re;)a=f.gf(a),f=f.re;return b===f&&c===a};
		ec.prototype.clone=function(){this.ae.ie||Mb(this);if(this.ae.ef)return this.ae.count.value+=1,this;var a=dc,b=Object,c=b.create,f=Object.getPrototypeOf(this),h=this.ae;a=a(c.call(b,f,{ae:{value:{count:h.count,Xe:h.Xe,ef:h.ef,ie:h.ie,me:h.me,pe:h.pe,we:h.we}}}));a.ae.count.value+=1;a.ae.Xe=false;return a};ec.prototype["delete"]=function(){this.ae.ie||Mb(this);this.ae.Xe&&!this.ae.ef&&W("Object already scheduled for deletion");Ob(this);Pb(this.ae);this.ae.ef||(this.ae.pe=void 0,this.ae.ie=void 0);};
		ec.prototype.isDeleted=function(){return !this.ae.ie};ec.prototype.deleteLater=function(){this.ae.ie||Mb(this);this.ae.Xe&&!this.ae.ef&&W("Object already scheduled for deletion");Sb.push(this);1===Sb.length&&Ub&&Ub(Tb);this.ae.Xe=true;return this};w.getInheritedInstanceCount=function(){return Object.keys(Vb).length};w.getLiveInheritedInstances=function(){var a=[],b;for(b in Vb)Vb.hasOwnProperty(b)&&a.push(Vb[b]);return a};w.flushPendingDeletes=Tb;w.setDelayFunction=function(a){Ub=a;Sb.length&&Ub&&Ub(Tb);};
		qc.prototype.jg=function(a){this.Nf&&(a=this.Nf(a));return a};qc.prototype.Hf=function(a){this.De&&this.De(a);};qc.prototype.argPackAdvance=8;qc.prototype.readValueFromPointer=yb;qc.prototype.deleteObject=function(a){if(null!==a)a["delete"]();};
		qc.prototype.fromWireType=function(a){function b(){return this.pf?cc(this.ge.Ye,{me:this.tg,ie:c,we:this,pe:a}):cc(this.ge.Ye,{me:this,ie:a})}var c=this.jg(a);if(!c)return this.Hf(a),null;var f=Wb(this.ge,c);if(void 0!==f){if(0===f.ae.count.value)return f.ae.ie=c,f.ae.pe=a,f.clone();f=f.clone();this.Hf(a);return f}f=this.ge.ig(c);f=Rb[f];if(!f)return b.call(this);f=this.nf?f.$f:f.pointerType;var h=Qb(c,this.ge,f.ge);return null===h?b.call(this):this.pf?cc(f.ge.Ye,{me:f,ie:h,we:this,pe:a}):cc(f.ge.Ye,
		{me:f,ie:h})};uc=w.UnboundTypeError=function(a,b){var c=gc(b,function(f){this.name=b;this.message=f;f=Error(f).stack;void 0!==f&&(this.stack=this.toString()+"\n"+f.replace(/^Error(:[^\n]*)?\n/,""));});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`};return c}(Error,"UnboundTypeError");
		Object.assign(Hc.prototype,{get(a){return this.Ce[a]},has(a){return void 0!==this.Ce[a]},Yf(a){var b=this.Kf.pop()||this.Ce.length;this.Ce[b]=a;return b},Zf(a){this.Ce[a]=void 0;this.Kf.push(a);}});Ic.Ce.push({value:void 0},{value:null},{value:true},{value:false});Ic.df=Ic.Ce.length;w.count_emval_handles=function(){for(var a=0,b=Ic.df;b<Ic.Ce.length;++b) void 0!==Ic.Ce[b]&&++a;return a};for(var Z,je=0;32>je;++je)Fd.push(Array(je));var ke=new Float32Array(288);
		for(je=0;288>je;++je)Xd[je]=ke.subarray(0,je+1);var le=new Int32Array(288);for(je=0;288>je;++je)Yd[je]=le.subarray(0,je+1);
		var De={R:function(){return 0},wb:()=>{},yb:function(){return 0},tb:()=>{},ub:()=>{},S:function(){},vb:()=>{},B:function(a){var b=wb[a];delete wb[a];var c=b.Cf,f=b.De,h=b.Jf,m=h.map(u=>u.mg).concat(h.map(u=>u.xg));Fb([a],m,u=>{var n={};h.forEach((p,v)=>{var E=u[v],G=p.kg,L=p.lg,y=u[v+h.length],M=p.wg,T=p.yg;n[p.fg]={read:S=>E.fromWireType(G(L,S)),write:(S,sa)=>{var pa=[];M(T,S,y.toWireType(pa,sa));xb(pa);}};});return [{name:b.name,fromWireType:function(p){var v={},E;for(E in n)v[E]=n[E].read(p);f(p);
		return v},toWireType:function(p,v){for(var E in n)if(!(E in v))throw new TypeError(`Missing field: "${E}"`);var G=c();for(E in n)n[E].write(G,v[E]);null!==p&&p.push(f,G);return G},argPackAdvance:8,readValueFromPointer:yb,ve:f}]});},nb:function(){},Cb:function(a,b,c,f,h){var m=Hb(c);b=Jb(b);Gb(a,{name:b,fromWireType:function(u){return !!u},toWireType:function(u,n){return n?f:h},argPackAdvance:8,readValueFromPointer:function(u){if(1===c)var n=Qa;else if(2===c)n=Ra;else if(4===c)n=Q;else throw new TypeError("Unknown boolean type size: "+
		b);return this.fromWireType(n[u>>m])},ve:null});},n:function(a,b,c,f,h,m,u,n,p,v,E,G,L){E=Jb(E);m=tc(h,m);n&&(n=tc(u,n));v&&(v=tc(p,v));L=tc(G,L);var y=fc(E);ic(y,function(){yc(`Cannot construct ${E} due to unbound types`,[f]);});Fb([a,b,c],f?[f]:[],function(M){M=M[0];if(f){var T=M.ge;var S=T.Ye;}else S=ec.prototype;M=gc(y,function(){if(Object.getPrototypeOf(this)!==sa)throw new Kb("Use 'new' to construct "+E);if(void 0===pa.Ge)throw new Kb(E+" has no accessible constructor");var jb=pa.Ge[arguments.length];
		if(void 0===jb)throw new Kb(`Tried to invoke ctor of ${E} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(pa.Ge).toString()}) parameters instead!`);return jb.apply(this,arguments)});var sa=Object.create(S,{constructor:{value:M}});M.prototype=sa;var pa=new jc(E,M,sa,L,T,m,n,v);pa.re&&(void 0===pa.re.hf&&(pa.re.hf=[]),pa.re.hf.push(pa));T=new qc(E,pa,true,false,false);S=new qc(E+"*",pa,false,false,false);var ib=new qc(E+" const*",pa,false,true,false);Rb[a]={pointerType:S,$f:ib};rc(y,M);return [T,
		S,ib]});},f:function(a,b,c,f,h,m,u){var n=Gc(c,f);b=Jb(b);m=tc(h,m);Fb([],[a],function(p){function v(){yc(`Cannot call ${E} due to unbound types`,n);}p=p[0];var E=`${p.name}.${b}`;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);var G=p.ge.constructor;void 0===G[b]?(v.Ve=c-1,G[b]=v):(hc(G,b,E),G[b].oe[c-1]=v);Fb([],n,function(L){L=[L[0],null].concat(L.slice(1));L=Fc(E,L,null,m,u);void 0===G[b].oe?(L.Ve=c-1,G[b]=L):G[b].oe[c-1]=L;if(p.ge.hf)for(const y of p.ge.hf)y.constructor.hasOwnProperty(b)||(y.constructor[b]=
		L);return []});return []});},A:function(a,b,c,f,h,m){var u=Gc(b,c);h=tc(f,h);Fb([],[a],function(n){n=n[0];var p=`constructor ${n.name}`;void 0===n.ge.Ge&&(n.ge.Ge=[]);if(void 0!==n.ge.Ge[b-1])throw new Kb(`Cannot register multiple constructors with identical number of parameters (${b-1}) for class '${n.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);n.ge.Ge[b-1]=()=>{yc(`Cannot construct ${n.name} due to unbound types`,u);};Fb([],u,function(v){v.splice(1,
		0,null);n.ge.Ge[b-1]=Fc(p,v,null,h,m);return []});return []});},b:function(a,b,c,f,h,m,u,n){var p=Gc(c,f);b=Jb(b);m=tc(h,m);Fb([],[a],function(v){function E(){yc(`Cannot call ${G} due to unbound types`,p);}v=v[0];var G=`${v.name}.${b}`;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);n&&v.ge.ug.push(b);var L=v.ge.Ye,y=L[b];void 0===y||void 0===y.oe&&y.className!==v.name&&y.Ve===c-2?(E.Ve=c-2,E.className=v.name,L[b]=E):(hc(L,b,G),L[b].oe[c-2]=E);Fb([],p,function(M){M=Fc(G,M,v,m,u);void 0===L[b].oe?(M.Ve=
		c-2,L[b]=M):L[b].oe[c-2]=M;return []});return []});},t:function(a,b,c){a=Jb(a);Fb([],[b],function(f){f=f[0];w[a]=f.fromWireType(c);return []});},Bb:function(a,b){b=Jb(b);Gb(a,{name:b,fromWireType:function(c){var f=Kc(c);Jc(c);return f},toWireType:function(c,f){return oc(f)},argPackAdvance:8,readValueFromPointer:yb,ve:null});},m:function(a,b,c,f){function h(){}c=Hb(c);b=Jb(b);h.values={};Gb(a,{name:b,constructor:h,fromWireType:function(m){return this.constructor.values[m]},toWireType:function(m,u){return u.value},
		argPackAdvance:8,readValueFromPointer:Lc(b,c,f),ve:null});ic(b,h);},c:function(a,b,c){var f=Mc(a,"enum");b=Jb(b);a=f.constructor;f=Object.create(f.constructor.prototype,{value:{value:c},constructor:{value:gc(`${f.name}_${b}`,function(){})}});a.values[c]=f;a[b]=f;},U:function(a,b,c){c=Hb(c);b=Jb(b);Gb(a,{name:b,fromWireType:function(f){return f},toWireType:function(f,h){return h},argPackAdvance:8,readValueFromPointer:Nc(b,c),ve:null});},y:function(a,b,c,f,h,m){var u=Gc(b,c);a=Jb(a);h=tc(f,h);ic(a,function(){yc(`Cannot call ${a} due to unbound types`,
		u);},b-1);Fb([],u,function(n){n=[n[0],null].concat(n.slice(1));rc(a,Fc(a,n,null,h,m),b-1);return []});},E:function(a,b,c,f,h){b=Jb(b);-1===h&&(h=4294967295);h=Hb(c);var m=n=>n;if(0===f){var u=32-8*c;m=n=>n<<u>>>u;}c=b.includes("unsigned")?function(n,p){return p>>>0}:function(n,p){return p};Gb(a,{name:b,fromWireType:m,toWireType:c,argPackAdvance:8,readValueFromPointer:Oc(b,h,0!==f),ve:null});},r:function(a,b,c){function f(m){m>>=2;var u=Ta;return new h(u.buffer,u[m+1],u[m])}var h=[Int8Array,Uint8Array,
		Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=Jb(c);Gb(a,{name:c,fromWireType:f,argPackAdvance:8,readValueFromPointer:f},{ng:true});},q:function(a,b,c,f,h,m,u,n,p,v,E,G){c=Jb(c);m=tc(h,m);n=tc(u,n);v=tc(p,v);G=tc(E,G);Fb([a],[b],function(L){L=L[0];return [new qc(c,L.ge,false,false,true,L,f,m,n,v,G)]});},T:function(a,b){b=Jb(b);var c="std::string"===b;Gb(a,{name:b,fromWireType:function(f){var h=Ta[f>>2],m=f+4;if(c)for(var u=m,n=0;n<=h;++n){var p=m+n;if(n==h||0==J[p]){u=u?vb(J,u,
		p-u):"";if(void 0===v)var v=u;else v+=String.fromCharCode(0),v+=u;u=p+1;}}else {v=Array(h);for(n=0;n<h;++n)v[n]=String.fromCharCode(J[m+n]);v=v.join("");}xc(f);return v},toWireType:function(f,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var m="string"==typeof h;m||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array||W("Cannot pass non-string to std::string");var u=c&&m?na(h):h.length;var n=Pd(4+u+1),p=n+4;Ta[n>>2]=u;if(c&&m)oa(h,J,p,u+1);else if(m)for(m=0;m<u;++m){var v=
		h.charCodeAt(m);255<v&&(xc(p),W("String has UTF-16 code units that do not fit in 8 bits"));J[p+m]=v;}else for(m=0;m<u;++m)J[p+m]=h[m];null!==f&&f.push(xc,n);return n},argPackAdvance:8,readValueFromPointer:yb,ve:function(f){xc(f);}});},N:function(a,b,c){c=Jb(c);if(2===b){var f=Qc;var h=Rc;var m=Sc;var u=()=>Sa;var n=1;}else 4===b&&(f=Tc,h=Uc,m=Vc,u=()=>Ta,n=2);Gb(a,{name:c,fromWireType:function(p){for(var v=Ta[p>>2],E=u(),G,L=p+4,y=0;y<=v;++y){var M=p+4+y*b;if(y==v||0==E[M>>n])L=f(L,M-L),void 0===G?G=
		L:(G+=String.fromCharCode(0),G+=L),L=M+b;}xc(p);return G},toWireType:function(p,v){"string"!=typeof v&&W(`Cannot pass non-string to C++ string type ${c}`);var E=m(v),G=Pd(4+E+b);Ta[G>>2]=E>>n;h(v,G+4,E+b);null!==p&&p.push(xc,G);return G},argPackAdvance:8,readValueFromPointer:yb,ve:function(p){xc(p);}});},C:function(a,b,c,f,h,m){wb[a]={name:Jb(b),Cf:tc(c,f),De:tc(h,m),Jf:[]};},e:function(a,b,c,f,h,m,u,n,p,v){wb[a].Jf.push({fg:Jb(b),mg:c,kg:tc(f,h),lg:m,xg:u,wg:tc(n,p),yg:v});},Db:function(a,b){b=Jb(b);
		Gb(a,{pg:true,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}});},Ab:()=>true,pb:()=>{throw Infinity;},F:function(a,b,c){a=Kc(a);b=Mc(b,"emval::as");var f=[],h=oc(f);Ta[c>>2]=h;return b.toWireType(f,a)},X:function(a,b,c,f,h){a=Yc[a];b=Kc(b);c=Xc(c);var m=[];Ta[f>>2]=oc(m);return a(b,c,m,h)},x:function(a,b,c,f){a=Yc[a];b=Kc(b);c=Xc(c);a(b,c,null,f);},d:Jc,K:function(a){if(0===a)return oc(Zc());a=Xc(a);return oc(Zc()[a])},u:function(a,b){var c=ad(a,b),f=c[0];b=f.name+"_$"+c.slice(1).map(function(u){return u.name}).join("_")+
		"$";var h=bd[b];if(void 0!==h)return h;var m=Array(a-1);h=$c((u,n,p,v)=>{for(var E=0,G=0;G<a-1;++G)m[G]=c[G+1].readValueFromPointer(v+E),E+=c[G+1].argPackAdvance;u=u[n].apply(u,m);for(G=0;G<a-1;++G)c[G+1].cg&&c[G+1].cg(m[G]);if(!f.pg)return f.toWireType(p,u)});return bd[b]=h},z:function(a,b){a=Kc(a);b=Kc(b);return oc(a[b])},p:function(a){4<a&&(Ic.get(a).Of+=1);},J:function(a,b,c,f){a=Kc(a);var h=dd[b];h||(h=cd(b),dd[b]=h);return h(a,c,f)},H:function(){return oc([])},g:function(a){return oc(Xc(a))},
		G:function(){return oc({})},gb:function(a){a=Kc(a);return !a},D:function(a){var b=Kc(a);xb(b);Jc(a);},l:function(a,b,c){a=Kc(a);b=Kc(b);c=Kc(c);a[b]=c;},h:function(a,b){a=Mc(a,"_emval_take_value");a=a.readValueFromPointer(b);return oc(a)},kb:function(){return  -52},lb:function(){},a:()=>{Ka("");},zb:()=>performance.now(),sd:function(a){Z.activeTexture(a);},td:function(a,b){Z.attachShader(kd[a],nd[b]);},Yb:function(a,b){Z.beginQuery(a,pd[b]);},Sb:function(a,b){Z.ze.beginQueryEXT(a,pd[b]);},ud:function(a,b,c){Z.bindAttribLocation(kd[a],
		b,c?vb(J,c):"");},vd:function(a,b){35051==a?Z.zf=b:35052==a&&(Z.We=b);Z.bindBuffer(a,jd[b]);},uc:zd,vc:function(a,b){Z.bindRenderbuffer(a,md[b]);},cc:function(a,b){Z.bindSampler(a,qd[b]);},wd:function(a,b){Z.bindTexture(a,ha[b]);},Pc:Ad,Tc:Ad,Y:function(a,b,c,f){Z.blendColor(a,b,c,f);},Z:function(a){Z.blendEquation(a);},_:function(a,b){Z.blendFunc(a,b);},oc:function(a,b,c,f,h,m,u,n,p,v){Z.blitFramebuffer(a,b,c,f,h,m,u,n,p,v);},$:function(a,b,c,f){2<=B.version?c&&b?Z.bufferData(a,J,f,c,b):Z.bufferData(a,b,
		f):Z.bufferData(a,c?J.subarray(c,c+b):b,f);},aa:function(a,b,c,f){2<=B.version?c&&Z.bufferSubData(a,b,J,f,c):Z.bufferSubData(a,b,J.subarray(f,f+c));},wc:function(a){return Z.checkFramebufferStatus(a)},ba:Bd,ca:Cd,da:Dd,lc:function(a,b,c,f){return Z.clientWaitSync(rd[a],b,(c>>>0)+4294967296*f)},ea:function(a,b,c,f){Z.colorMask(!!a,!!b,!!c,!!f);},fa:function(a){Z.compileShader(nd[a]);},ga:function(a,b,c,f,h,m,u,n){2<=B.version?Z.We||!u?Z.compressedTexImage2D(a,b,c,f,h,m,u,n):Z.compressedTexImage2D(a,b,
		c,f,h,m,J,n,u):Z.compressedTexImage2D(a,b,c,f,h,m,n?J.subarray(n,n+u):null);},ha:function(a,b,c,f,h,m,u,n,p){2<=B.version?Z.We||!n?Z.compressedTexSubImage2D(a,b,c,f,h,m,u,n,p):Z.compressedTexSubImage2D(a,b,c,f,h,m,u,J,p,n):Z.compressedTexSubImage2D(a,b,c,f,h,m,u,p?J.subarray(p,p+n):null);},nc:function(a,b,c,f,h){Z.copyBufferSubData(a,b,c,f,h);},ia:function(a,b,c,f,h,m,u,n){Z.copyTexSubImage2D(a,b,c,f,h,m,u,n);},ja:function(){var a=da(kd),b=Z.createProgram();b.name=a;b.sf=b.qf=b.rf=0;b.Ef=1;kd[a]=b;return a},
		ka:function(a){var b=da(nd);nd[b]=Z.createShader(a);return b},la:function(a){Z.cullFace(a);},ma:function(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2],h=jd[f];h&&(Z.deleteBuffer(h),h.name=0,jd[f]=null,f==Z.zf&&(Z.zf=0),f==Z.We&&(Z.We=0));}},xc:function(a,b){for(var c=0;c<a;++c){var f=Q[b+4*c>>2],h=ld[f];h&&(Z.deleteFramebuffer(h),h.name=0,ld[f]=null);}},na:function(a){if(a){var b=kd[a];b?(Z.deleteProgram(b),b.name=0,kd[a]=null):vd(1281);}},Zb:function(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2],h=pd[f];
		h&&(Z.deleteQuery(h),pd[f]=null);}},Tb:function(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2],h=pd[f];h&&(Z.ze.deleteQueryEXT(h),pd[f]=null);}},yc:function(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2],h=md[f];h&&(Z.deleteRenderbuffer(h),h.name=0,md[f]=null);}},dc:function(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2],h=qd[f];h&&(Z.deleteSampler(h),h.name=0,qd[f]=null);}},oa:function(a){if(a){var b=nd[a];b?(Z.deleteShader(b),nd[a]=null):vd(1281);}},mc:function(a){if(a){var b=rd[a];b?(Z.deleteSync(b),b.name=
		0,rd[a]=null):vd(1281);}},pa:function(a,b){for(var c=0;c<a;c++){var f=Q[b+4*c>>2],h=ha[f];h&&(Z.deleteTexture(h),h.name=0,ha[f]=null);}},Qc:Ed,Uc:Ed,qa:function(a){Z.depthMask(!!a);},ra:function(a){Z.disable(a);},sa:function(a){Z.disableVertexAttribArray(a);},ta:function(a,b,c){Z.drawArrays(a,b,c);},Nc:function(a,b,c,f){Z.drawArraysInstanced(a,b,c,f);},Lc:function(a,b,c,f,h){Z.If.drawArraysInstancedBaseInstanceWEBGL(a,b,c,f,h);},Jc:function(a,b){for(var c=Fd[a],f=0;f<a;f++)c[f]=Q[b+4*f>>2];Z.drawBuffers(c);},
		ua:Gd,Oc:function(a,b,c,f,h){Z.drawElementsInstanced(a,b,c,f,h);},Mc:function(a,b,c,f,h,m,u){Z.If.drawElementsInstancedBaseVertexBaseInstanceWEBGL(a,b,c,f,h,m,u);},Dc:function(a,b,c,f,h,m){Gd(a,f,h,m);},va:function(a){Z.enable(a);},wa:function(a){Z.enableVertexAttribArray(a);},_b:function(a){Z.endQuery(a);},Ub:function(a){Z.ze.endQueryEXT(a);},ic:function(a,b){return (a=Z.fenceSync(a,b))?(b=da(rd),a.name=b,rd[b]=a,b):0},xa:function(){Z.finish();},ya:function(){Z.flush();},zc:function(a,b,c,f){Z.framebufferRenderbuffer(a,
		b,c,md[f]);},Ac:function(a,b,c,f,h){Z.framebufferTexture2D(a,b,c,ha[f],h);},za:function(a){Z.frontFace(a);},Aa:function(a,b){Jd(a,b,"createBuffer",jd);},Bc:function(a,b){Jd(a,b,"createFramebuffer",ld);},$b:function(a,b){Jd(a,b,"createQuery",pd);},Vb:function(a,b){for(var c=0;c<a;c++){var f=Z.ze.createQueryEXT();if(!f){for(vd(1282);c<a;)Q[b+4*c++>>2]=0;break}var h=da(pd);f.name=h;pd[h]=f;Q[b+4*c>>2]=h;}},Cc:function(a,b){Jd(a,b,"createRenderbuffer",md);},ec:function(a,b){Jd(a,b,"createSampler",qd);},Ba:function(a,
		b){Jd(a,b,"createTexture",ha);},Rc:Kd,Vc:Kd,qc:function(a){Z.generateMipmap(a);},Ca:function(a,b,c){c?Q[c>>2]=Z.getBufferParameter(a,b):vd(1281);},Da:function(){var a=Z.getError()||wd;wd=0;return a},Ea:function(a,b){Md(a,b,2);},rc:function(a,b,c,f){a=Z.getFramebufferAttachmentParameter(a,b,c);if(a instanceof WebGLRenderbuffer||a instanceof WebGLTexture)a=a.name|0;Q[f>>2]=a;},Fa:Nd,Ga:function(a,b,c,f){a=Z.getProgramInfoLog(kd[a]);null===a&&(a="(unknown error)");b=0<b&&f?oa(a,J,f,b):0;c&&(Q[c>>2]=b);},Ha:function(a,
		b,c){if(c)if(a>=hd)vd(1281);else if(a=kd[a],35716==b)a=Z.getProgramInfoLog(a),null===a&&(a="(unknown error)"),Q[c>>2]=a.length+1;else if(35719==b){if(!a.sf)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.sf=Math.max(a.sf,Z.getActiveUniform(a,b).name.length+1);Q[c>>2]=a.sf;}else if(35722==b){if(!a.qf)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.qf=Math.max(a.qf,Z.getActiveAttrib(a,b).name.length+1);Q[c>>2]=a.qf;}else if(35381==b){if(!a.rf)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.rf=Math.max(a.rf,
		Z.getActiveUniformBlockName(a,b).length+1);Q[c>>2]=a.rf;}else Q[c>>2]=Z.getProgramParameter(a,b);else vd(1281);},Pb:Od,Qb:Od,ac:function(a,b,c){if(c){a=Z.getQueryParameter(pd[a],b);var f;"boolean"==typeof a?f=a?1:0:f=a;Q[c>>2]=f;}else vd(1281);},Wb:function(a,b,c){if(c){a=Z.ze.getQueryObjectEXT(pd[a],b);var f;"boolean"==typeof a?f=a?1:0:f=a;Q[c>>2]=f;}else vd(1281);},bc:function(a,b,c){c?Q[c>>2]=Z.getQuery(a,b):vd(1281);},Xb:function(a,b,c){c?Q[c>>2]=Z.ze.getQueryEXT(a,b):vd(1281);},sc:function(a,b,c){c?
		Q[c>>2]=Z.getRenderbufferParameter(a,b):vd(1281);},Ia:function(a,b,c,f){a=Z.getShaderInfoLog(nd[a]);null===a&&(a="(unknown error)");b=0<b&&f?oa(a,J,f,b):0;c&&(Q[c>>2]=b);},Mb:function(a,b,c,f){a=Z.getShaderPrecisionFormat(a,b);Q[c>>2]=a.rangeMin;Q[c+4>>2]=a.rangeMax;Q[f>>2]=a.precision;},Ja:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(nd[a]),null===a&&(a="(unknown error)"),Q[c>>2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(nd[a]),Q[c>>2]=a?a.length+1:0):Q[c>>2]=Z.getShaderParameter(nd[a],b):vd(1281);},
		Ka:Rd,Sc:Sd,La:function(a,b){b=b?vb(J,b):"";if(a=kd[a]){var c=a,f=c.ff,h=c.Qf,m;if(!f)for(c.ff=f={},c.Pf={},m=0;m<Z.getProgramParameter(c,35718);++m){var u=Z.getActiveUniform(c,m);var n=u.name;u=u.size;var p=Td(n);p=0<p?n.slice(0,p):n;var v=c.Ef;c.Ef+=u;h[p]=[u,v];for(n=0;n<u;++n)f[v]=n,c.Pf[v++]=p;}c=a.ff;f=0;h=b;m=Td(b);0<m&&(f=parseInt(b.slice(m+1))>>>0,h=b.slice(0,m));if((h=a.Qf[h])&&f<h[0]&&(f+=h[1],c[f]=c[f]||Z.getUniformLocation(a,b)))return f}else vd(1281);return  -1},Nb:function(a,b,c){for(var f=
		Fd[b],h=0;h<b;h++)f[h]=Q[c+4*h>>2];Z.invalidateFramebuffer(a,f);},Ob:function(a,b,c,f,h,m,u){for(var n=Fd[b],p=0;p<b;p++)n[p]=Q[c+4*p>>2];Z.invalidateSubFramebuffer(a,n,f,h,m,u);},jc:function(a){return Z.isSync(rd[a])},Ma:function(a){return (a=ha[a])?Z.isTexture(a):0},Na:function(a){Z.lineWidth(a);},Oa:function(a){a=kd[a];Z.linkProgram(a);a.ff=0;a.Qf={};},Hc:function(a,b,c,f,h,m){Z.Mf.multiDrawArraysInstancedBaseInstanceWEBGL(a,Q,b>>2,Q,c>>2,Q,f>>2,Ta,h>>2,m);},Ic:function(a,b,c,f,h,m,u,n){Z.Mf.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(a,
		Q,b>>2,c,Q,f>>2,Q,h>>2,Q,m>>2,Ta,u>>2,n);},Pa:function(a,b){3317==a&&(ud=b);Z.pixelStorei(a,b);},Rb:function(a,b){Z.ze.queryCounterEXT(pd[a],b);},Kc:function(a){Z.readBuffer(a);},Qa:function(a,b,c,f,h,m,u){if(2<=B.version)if(Z.zf)Z.readPixels(a,b,c,f,h,m,u);else {var n=Ud(m);Z.readPixels(a,b,c,f,h,m,n,u>>31-Math.clz32(n.BYTES_PER_ELEMENT));}else (u=Vd(m,h,c,f,u))?Z.readPixels(a,b,c,f,h,m,u):vd(1280);},tc:function(a,b,c,f){Z.renderbufferStorage(a,b,c,f);},pc:function(a,b,c,f,h){Z.renderbufferStorageMultisample(a,
		b,c,f,h);},fc:function(a,b,c){Z.samplerParameterf(qd[a],b,c);},gc:function(a,b,c){Z.samplerParameteri(qd[a],b,c);},hc:function(a,b,c){Z.samplerParameteri(qd[a],b,Q[c>>2]);},Ra:function(a,b,c,f){Z.scissor(a,b,c,f);},Sa:function(a,b,c,f){for(var h="",m=0;m<b;++m){var u=f?Q[f+4*m>>2]:-1,n=Q[c+4*m>>2];u=n?vb(J,n,0>u?void 0:u):"";h+=u;}Z.shaderSource(nd[a],h);},Ta:function(a,b,c){Z.stencilFunc(a,b,c);},Ua:function(a,b,c,f){Z.stencilFuncSeparate(a,b,c,f);},Va:function(a){Z.stencilMask(a);},Wa:function(a,b){Z.stencilMaskSeparate(a,
		b);},Xa:function(a,b,c){Z.stencilOp(a,b,c);},Ya:function(a,b,c,f){Z.stencilOpSeparate(a,b,c,f);},Za:function(a,b,c,f,h,m,u,n,p){if(2<=B.version)if(Z.We)Z.texImage2D(a,b,c,f,h,m,u,n,p);else if(p){var v=Ud(n);Z.texImage2D(a,b,c,f,h,m,u,n,v,p>>31-Math.clz32(v.BYTES_PER_ELEMENT));}else Z.texImage2D(a,b,c,f,h,m,u,n,null);else Z.texImage2D(a,b,c,f,h,m,u,n,p?Vd(n,u,f,h,p):null);},_a:function(a,b,c){Z.texParameterf(a,b,c);},$a:function(a,b,c){Z.texParameterf(a,b,R[c>>2]);},ab:function(a,b,c){Z.texParameteri(a,b,
		c);},bb:function(a,b,c){Z.texParameteri(a,b,Q[c>>2]);},Ec:function(a,b,c,f,h){Z.texStorage2D(a,b,c,f,h);},cb:function(a,b,c,f,h,m,u,n,p){if(2<=B.version)if(Z.We)Z.texSubImage2D(a,b,c,f,h,m,u,n,p);else if(p){var v=Ud(n);Z.texSubImage2D(a,b,c,f,h,m,u,n,v,p>>31-Math.clz32(v.BYTES_PER_ELEMENT));}else Z.texSubImage2D(a,b,c,f,h,m,u,n,null);else v=null,p&&(v=Vd(n,u,h,m,p)),Z.texSubImage2D(a,b,c,f,h,m,u,n,v);},db:function(a,b){Z.uniform1f(Wd(a),b);},eb:function(a,b,c){if(2<=B.version)b&&Z.uniform1fv(Wd(a),R,c>>
		2,b);else {if(288>=b)for(var f=Xd[b-1],h=0;h<b;++h)f[h]=R[c+4*h>>2];else f=R.subarray(c>>2,c+4*b>>2);Z.uniform1fv(Wd(a),f);}},od:function(a,b){Z.uniform1i(Wd(a),b);},pd:function(a,b,c){if(2<=B.version)b&&Z.uniform1iv(Wd(a),Q,c>>2,b);else {if(288>=b)for(var f=Yd[b-1],h=0;h<b;++h)f[h]=Q[c+4*h>>2];else f=Q.subarray(c>>2,c+4*b>>2);Z.uniform1iv(Wd(a),f);}},qd:function(a,b,c){Z.uniform2f(Wd(a),b,c);},rd:function(a,b,c){if(2<=B.version)b&&Z.uniform2fv(Wd(a),R,c>>2,2*b);else {if(144>=b)for(var f=Xd[2*b-1],h=0;h<
		2*b;h+=2)f[h]=R[c+4*h>>2],f[h+1]=R[c+(4*h+4)>>2];else f=R.subarray(c>>2,c+8*b>>2);Z.uniform2fv(Wd(a),f);}},nd:function(a,b,c){Z.uniform2i(Wd(a),b,c);},md:function(a,b,c){if(2<=B.version)b&&Z.uniform2iv(Wd(a),Q,c>>2,2*b);else {if(144>=b)for(var f=Yd[2*b-1],h=0;h<2*b;h+=2)f[h]=Q[c+4*h>>2],f[h+1]=Q[c+(4*h+4)>>2];else f=Q.subarray(c>>2,c+8*b>>2);Z.uniform2iv(Wd(a),f);}},ld:function(a,b,c,f){Z.uniform3f(Wd(a),b,c,f);},kd:function(a,b,c){if(2<=B.version)b&&Z.uniform3fv(Wd(a),R,c>>2,3*b);else {if(96>=b)for(var f=
		Xd[3*b-1],h=0;h<3*b;h+=3)f[h]=R[c+4*h>>2],f[h+1]=R[c+(4*h+4)>>2],f[h+2]=R[c+(4*h+8)>>2];else f=R.subarray(c>>2,c+12*b>>2);Z.uniform3fv(Wd(a),f);}},jd:function(a,b,c,f){Z.uniform3i(Wd(a),b,c,f);},id:function(a,b,c){if(2<=B.version)b&&Z.uniform3iv(Wd(a),Q,c>>2,3*b);else {if(96>=b)for(var f=Yd[3*b-1],h=0;h<3*b;h+=3)f[h]=Q[c+4*h>>2],f[h+1]=Q[c+(4*h+4)>>2],f[h+2]=Q[c+(4*h+8)>>2];else f=Q.subarray(c>>2,c+12*b>>2);Z.uniform3iv(Wd(a),f);}},hd:function(a,b,c,f,h){Z.uniform4f(Wd(a),b,c,f,h);},gd:function(a,b,c){if(2<=
		B.version)b&&Z.uniform4fv(Wd(a),R,c>>2,4*b);else {if(72>=b){var f=Xd[4*b-1],h=R;c>>=2;for(var m=0;m<4*b;m+=4){var u=c+m;f[m]=h[u];f[m+1]=h[u+1];f[m+2]=h[u+2];f[m+3]=h[u+3];}}else f=R.subarray(c>>2,c+16*b>>2);Z.uniform4fv(Wd(a),f);}},Wc:function(a,b,c,f,h){Z.uniform4i(Wd(a),b,c,f,h);},Xc:function(a,b,c){if(2<=B.version)b&&Z.uniform4iv(Wd(a),Q,c>>2,4*b);else {if(72>=b)for(var f=Yd[4*b-1],h=0;h<4*b;h+=4)f[h]=Q[c+4*h>>2],f[h+1]=Q[c+(4*h+4)>>2],f[h+2]=Q[c+(4*h+8)>>2],f[h+3]=Q[c+(4*h+12)>>2];else f=Q.subarray(c>>
		2,c+16*b>>2);Z.uniform4iv(Wd(a),f);}},Yc:function(a,b,c,f){if(2<=B.version)b&&Z.uniformMatrix2fv(Wd(a),!!c,R,f>>2,4*b);else {if(72>=b)for(var h=Xd[4*b-1],m=0;m<4*b;m+=4)h[m]=R[f+4*m>>2],h[m+1]=R[f+(4*m+4)>>2],h[m+2]=R[f+(4*m+8)>>2],h[m+3]=R[f+(4*m+12)>>2];else h=R.subarray(f>>2,f+16*b>>2);Z.uniformMatrix2fv(Wd(a),!!c,h);}},Zc:function(a,b,c,f){if(2<=B.version)b&&Z.uniformMatrix3fv(Wd(a),!!c,R,f>>2,9*b);else {if(32>=b)for(var h=Xd[9*b-1],m=0;m<9*b;m+=9)h[m]=R[f+4*m>>2],h[m+1]=R[f+(4*m+4)>>2],h[m+2]=R[f+
		(4*m+8)>>2],h[m+3]=R[f+(4*m+12)>>2],h[m+4]=R[f+(4*m+16)>>2],h[m+5]=R[f+(4*m+20)>>2],h[m+6]=R[f+(4*m+24)>>2],h[m+7]=R[f+(4*m+28)>>2],h[m+8]=R[f+(4*m+32)>>2];else h=R.subarray(f>>2,f+36*b>>2);Z.uniformMatrix3fv(Wd(a),!!c,h);}},_c:function(a,b,c,f){if(2<=B.version)b&&Z.uniformMatrix4fv(Wd(a),!!c,R,f>>2,16*b);else {if(18>=b){var h=Xd[16*b-1],m=R;f>>=2;for(var u=0;u<16*b;u+=16){var n=f+u;h[u]=m[n];h[u+1]=m[n+1];h[u+2]=m[n+2];h[u+3]=m[n+3];h[u+4]=m[n+4];h[u+5]=m[n+5];h[u+6]=m[n+6];h[u+7]=m[n+7];h[u+8]=m[n+
		8];h[u+9]=m[n+9];h[u+10]=m[n+10];h[u+11]=m[n+11];h[u+12]=m[n+12];h[u+13]=m[n+13];h[u+14]=m[n+14];h[u+15]=m[n+15];}}else h=R.subarray(f>>2,f+64*b>>2);Z.uniformMatrix4fv(Wd(a),!!c,h);}},$c:function(a){a=kd[a];Z.useProgram(a);Z.bg=a;},ad:function(a,b){Z.vertexAttrib1f(a,b);},bd:function(a,b){Z.vertexAttrib2f(a,R[b>>2],R[b+4>>2]);},cd:function(a,b){Z.vertexAttrib3f(a,R[b>>2],R[b+4>>2],R[b+8>>2]);},dd:function(a,b){Z.vertexAttrib4f(a,R[b>>2],R[b+4>>2],R[b+8>>2],R[b+12>>2]);},Fc:function(a,b){Z.vertexAttribDivisor(a,
		b);},Gc:function(a,b,c,f,h){Z.vertexAttribIPointer(a,b,c,f,h);},ed:function(a,b,c,f,h,m){Z.vertexAttribPointer(a,b,c,!!f,h,m);},fd:function(a,b,c,f){Z.viewport(a,b,c,f);},kc:function(a,b,c,f){Z.waitSync(rd[a],b,(c>>>0)+4294967296*f);},qb:a=>{var b=J.length;a>>>=0;if(2147483648<a)return  false;for(var c=1;4>=c;c*=2){var f=b*(1+.2/c);f=Math.min(f,a+100663296);var h=Math;f=Math.max(a,f);a:{h=h.min.call(h,2147483648,f+(65536-f%65536)%65536)-La.buffer.byteLength+65535>>>16;try{La.grow(h);Wa();var m=1;break a}catch(u){}m=
		void 0;}if(m)return  true}return  false},hb:function(){return B?B.handle:0},rb:(a,b)=>{var c=0;ae().forEach(function(f,h){var m=b+c;h=Ta[a+4*h>>2]=m;for(m=0;m<f.length;++m)Qa[h++>>0]=f.charCodeAt(m);Qa[h>>0]=0;c+=f.length+1;});return 0},sb:(a,b)=>{var c=ae();Ta[a>>2]=c.length;var f=0;c.forEach(function(h){f+=h.length+1;});Ta[b>>2]=f;return 0},Eb:a=>{va(a,new sb(a));},M:()=>52,jb:function(){return 52},xb:()=>52,mb:function(){return 70},Q:(a,b,c,f)=>{for(var h=0,
		m=0;m<c;m++){var u=Ta[b>>2],n=Ta[b+4>>2];b+=8;for(var p=0;p<n;p++){var v=J[u+p],E=be[a];0===v||10===v?((1===a?Ha:Ia)(vb(E,0)),E.length=0):E.push(v);}h+=n;}Ta[f>>2]=h;return 0},yd:zd,ib:Bd,xd:Cd,Kb:Dd,L:Nd,P:Rd,fb:Sd,Ib:me,j:ne,o:oe,k:pe,I:qe,Hb:re,Fb:se,W:te,V:ue,O:ve,i:we,w:xe,v:ye,s:ze,Gb:Ae,Jb:Be,Lb:Ce,ob:(a,b,c,f)=>ge(a,b,c,f)};
		(function(){function a(c){Ma=c=c.exports;La=Ma.zd;Wa();Xa=Ma.Cd;Za.unshift(Ma.Ad);eb--;w.monitorRunDependencies&&w.monitorRunDependencies(eb);if(0==eb&&(gb)){var f=gb;gb=null;f();}return c}var b={a:De};eb++;w.monitorRunDependencies&&w.monitorRunDependencies(eb);if(w.instantiateWasm)try{return w.instantiateWasm(b,a)}catch(c){Ia("Module.instantiateWasm callback failed with error: "+c),ca(c);}rb(b,function(c){a(c.instance);}).catch(ca);return {}})();
		var Pd=w._malloc=a=>(Pd=w._malloc=Ma.Bd)(a),xc=w._free=a=>(xc=w._free=Ma.Dd)(a),wc=a=>(wc=Ma.Ed)(a);w.__embind_initialize_bindings=()=>(w.__embind_initialize_bindings=Ma.Fd)();var Ee=(a,b)=>(Ee=Ma.Gd)(a,b),Fe=()=>(Fe=Ma.Hd)(),Ge=a=>(Ge=Ma.Id)(a);w.dynCall_viji=(a,b,c,f,h)=>(w.dynCall_viji=Ma.Jd)(a,b,c,f,h);w.dynCall_vijiii=(a,b,c,f,h,m,u)=>(w.dynCall_vijiii=Ma.Kd)(a,b,c,f,h,m,u);w.dynCall_viiiiij=(a,b,c,f,h,m,u,n)=>(w.dynCall_viiiiij=Ma.Ld)(a,b,c,f,h,m,u,n);
		w.dynCall_jii=(a,b,c)=>(w.dynCall_jii=Ma.Md)(a,b,c);w.dynCall_vij=(a,b,c,f)=>(w.dynCall_vij=Ma.Nd)(a,b,c,f);w.dynCall_jiiiiii=(a,b,c,f,h,m,u)=>(w.dynCall_jiiiiii=Ma.Od)(a,b,c,f,h,m,u);w.dynCall_jiiiiji=(a,b,c,f,h,m,u,n)=>(w.dynCall_jiiiiji=Ma.Pd)(a,b,c,f,h,m,u,n);w.dynCall_ji=(a,b)=>(w.dynCall_ji=Ma.Qd)(a,b);w.dynCall_iijj=(a,b,c,f,h,m)=>(w.dynCall_iijj=Ma.Rd)(a,b,c,f,h,m);w.dynCall_iiiji=(a,b,c,f,h,m)=>(w.dynCall_iiiji=Ma.Sd)(a,b,c,f,h,m);
		w.dynCall_iiji=(a,b,c,f,h)=>(w.dynCall_iiji=Ma.Td)(a,b,c,f,h);w.dynCall_iijjiii=(a,b,c,f,h,m,u,n,p)=>(w.dynCall_iijjiii=Ma.Ud)(a,b,c,f,h,m,u,n,p);w.dynCall_iij=(a,b,c,f)=>(w.dynCall_iij=Ma.Vd)(a,b,c,f);w.dynCall_vijjjii=(a,b,c,f,h,m,u,n,p,v)=>(w.dynCall_vijjjii=Ma.Wd)(a,b,c,f,h,m,u,n,p,v);w.dynCall_jiji=(a,b,c,f,h)=>(w.dynCall_jiji=Ma.Xd)(a,b,c,f,h);w.dynCall_viijii=(a,b,c,f,h,m,u)=>(w.dynCall_viijii=Ma.Yd)(a,b,c,f,h,m,u);w.dynCall_iiiiij=(a,b,c,f,h,m,u)=>(w.dynCall_iiiiij=Ma.Zd)(a,b,c,f,h,m,u);
		w.dynCall_iiiiijj=(a,b,c,f,h,m,u,n,p)=>(w.dynCall_iiiiijj=Ma._d)(a,b,c,f,h,m,u,n,p);w.dynCall_iiiiiijj=(a,b,c,f,h,m,u,n,p,v)=>(w.dynCall_iiiiiijj=Ma.$d)(a,b,c,f,h,m,u,n,p,v);function pe(a,b,c,f){var h=Fe();try{return Xa.get(a)(b,c,f)}catch(m){Ge(h);if(m!==m+0)throw m;Ee(1,0);}}function Ce(a,b,c,f,h,m,u,n,p,v){var E=Fe();try{Xa.get(a)(b,c,f,h,m,u,n,p,v);}catch(G){Ge(E);if(G!==G+0)throw G;Ee(1,0);}}function ye(a,b,c,f){var h=Fe();try{Xa.get(a)(b,c,f);}catch(m){Ge(h);if(m!==m+0)throw m;Ee(1,0);}}
		function xe(a,b,c){var f=Fe();try{Xa.get(a)(b,c);}catch(h){Ge(f);if(h!==h+0)throw h;Ee(1,0);}}function ve(a){var b=Fe();try{Xa.get(a)();}catch(c){Ge(b);if(c!==c+0)throw c;Ee(1,0);}}function ne(a,b){var c=Fe();try{return Xa.get(a)(b)}catch(f){Ge(c);if(f!==f+0)throw f;Ee(1,0);}}function ze(a,b,c,f,h){var m=Fe();try{Xa.get(a)(b,c,f,h);}catch(u){Ge(m);if(u!==u+0)throw u;Ee(1,0);}}function we(a,b){var c=Fe();try{Xa.get(a)(b);}catch(f){Ge(c);if(f!==f+0)throw f;Ee(1,0);}}
		function oe(a,b,c){var f=Fe();try{return Xa.get(a)(b,c)}catch(h){Ge(f);if(h!==h+0)throw h;Ee(1,0);}}function Be(a,b,c,f,h,m,u){var n=Fe();try{Xa.get(a)(b,c,f,h,m,u);}catch(p){Ge(n);if(p!==p+0)throw p;Ee(1,0);}}function me(a){var b=Fe();try{return Xa.get(a)()}catch(c){Ge(b);if(c!==c+0)throw c;Ee(1,0);}}function re(a,b,c,f,h,m){var u=Fe();try{return Xa.get(a)(b,c,f,h,m)}catch(n){Ge(u);if(n!==n+0)throw n;Ee(1,0);}}
		function te(a,b,c,f,h,m,u,n){var p=Fe();try{return Xa.get(a)(b,c,f,h,m,u,n)}catch(v){Ge(p);if(v!==v+0)throw v;Ee(1,0);}}function Ae(a,b,c,f,h,m){var u=Fe();try{Xa.get(a)(b,c,f,h,m);}catch(n){Ge(u);if(n!==n+0)throw n;Ee(1,0);}}function qe(a,b,c,f,h){var m=Fe();try{return Xa.get(a)(b,c,f,h)}catch(u){Ge(m);if(u!==u+0)throw u;Ee(1,0);}}function ue(a,b,c,f,h,m,u,n,p,v){var E=Fe();try{return Xa.get(a)(b,c,f,h,m,u,n,p,v)}catch(G){Ge(E);if(G!==G+0)throw G;Ee(1,0);}}
		function se(a,b,c,f,h,m,u){var n=Fe();try{return Xa.get(a)(b,c,f,h,m,u)}catch(p){Ge(n);if(p!==p+0)throw p;Ee(1,0);}}var He;gb=function Ie(){He||Je();He||(gb=Ie);};
		function Je(){function a(){if(!He&&(He=true,w.calledRun=true,!Na)){tb(Za);aa(w);if(w.onRuntimeInitialized)w.onRuntimeInitialized();if(w.postRun)for("function"==typeof w.postRun&&(w.postRun=[w.postRun]);w.postRun.length;){var b=w.postRun.shift();$a.unshift(b);}tb($a);}}if(!(0<eb)){if(w.preRun)for("function"==typeof w.preRun&&(w.preRun=[w.preRun]);w.preRun.length;)ab();tb(Ya);0<eb||(w.setStatus?(w.setStatus("Running..."),setTimeout(function(){setTimeout(function(){w.setStatus("");},1);a();},1)):a());}}
		if(w.preInit)for("function"==typeof w.preInit&&(w.preInit=[w.preInit]);0<w.preInit.length;)w.preInit.pop()();Je();


		  return moduleArg.ready
		}

		);
		})();
		module.exports = CanvasKitInit; 
	} (canvaskit));
	return canvaskit.exports;
}

var canvaskitExports = requireCanvaskit();
var CanvasKitInit = /*@__PURE__*/getDefaultExportFromCjs(canvaskitExports);

class Transition {
  /**
   * Creates a scene transition in which the outgoing scene slides out and the incoming scene slides in, as if the incoming scene pushes it.
   *
   * @param options - {@link SlideTransitionOptions}
   * @returns
   */
  static slide(options) {
    let easingFunction = Easings.linear;
    if (typeof options.easing === "string") {
      easingFunction = Easings.fromTypeAsString(options.easing);
    } else if (options.easing !== void 0) {
      easingFunction = options.easing;
    }
    return new SlideTransition(
      options.direction,
      options.duration,
      easingFunction
    );
  }
  /**
   * Creates a scene transition with no animation or duration. The next scene is immediately drawn.
   */
  static none() {
    return new NoneTransition();
  }
}
class NoneTransition extends Transition {
  constructor() {
    super();
    this.type = TransitionType.None;
    this.duration = NaN;
    this.easing = Easings.none;
  }
}
class SlideTransition extends Transition {
  constructor(direction, duration, easing) {
    super();
    this.type = TransitionType.Slide;
    this.direction = direction;
    this.duration = duration;
    this.easing = easing;
  }
}
const TransitionType = {
  Slide: "Slide",
  None: "None"
};
const TransitionDirection = {
  Up: "Up",
  Down: "Down",
  Right: "Right",
  Left: "Left"
};
class SceneTransition {
  constructor(scene, transition) {
    this.scene = scene;
    this.transition = transition;
  }
}

const deviceMetadataSchema = {
  type: "object",
  description: "Information about the user's device.",
  properties: {
    userAgent: {
      type: "string",
      description: "The user agent string returned by navigator.userAgent."
    },
    devicePixelRatio: {
      type: "number",
      description: "Ratio of physical pixels to CSS pixels."
    },
    screen: {
      type: "object",
      description: "Screen information returned by window.screen.",
      properties: {
        availHeight: {
          type: "number",
          description: "Height of screen, in pixels, excluding UI features."
        },
        availWidth: {
          type: "number",
          description: "Width of screen, in pixels, excluding UI features."
        },
        colorDepth: {
          type: "number",
          description: "Color depth of screen."
        },
        height: {
          type: "number",
          description: "Height of screen, in pixels"
        },
        width: {
          type: "number",
          description: "Width of screen, in pixels."
        },
        orientation: {
          type: "object",
          description: "Information about the device's orientation.",
          properties: {
            type: {
              type: "string",
              description: "The orientation type (ScreenOrientation.type)."
            },
            angle: {
              type: "number",
              description: "The orientation angle (ScreenOrientation.angle)."
            }
          }
        },
        pixelDepth: {
          type: "number",
          description: "Pixel depth of screen."
        }
      }
    },
    webGlRenderer: {
      type: "string",
      description: "WebGL driver vendor and renderer. Taken from WEBGL_debug_renderer_info."
    }
  }
};

class WebGlInfo {
  /**
   * Returns graphics driver vendor and renderer information.
   *
   * @remarks Information is from parameters UNMASKED_VENDOR_WEBGL and
   * UNMASKED_RENDERER_WEBGL when asking for WEBGL_debug_renderer_info
   * from the WebGLRenderingContext.
   *
   * @returns string
   */
  static getRendererString() {
    const rendererInfoCanvas = document.createElement("canvas");
    rendererInfoCanvas.id = "webgl-renderer-info-canvas";
    rendererInfoCanvas.height = 0;
    rendererInfoCanvas.width = 0;
    rendererInfoCanvas.hidden = true;
    document.body.appendChild(rendererInfoCanvas);
    const gl = rendererInfoCanvas.getContext("webgl");
    let rendererString = "no webgl context";
    if (!gl) {
      return rendererString;
    }
    const debugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugRendererInfo != null) {
      rendererString = String(gl.getParameter(debugRendererInfo.UNMASKED_VENDOR_WEBGL)) + ", " + String(gl.getParameter(debugRendererInfo.UNMASKED_RENDERER_WEBGL));
    } else {
      rendererString = "no debug renderer info";
    }
    rendererInfoCanvas.remove();
    return rendererString;
  }
  /**
   * Removes the temporary canvas that was created to get WebGL information.
   */
  static dispose() {
    const rendererInfoCanvas = document.getElementById(
      "webgl-renderer-info-canvas"
    );
    if (rendererInfoCanvas) {
      rendererInfoCanvas.remove();
    }
  }
}

class SoundManager {
  constructor(game, baseUrls) {
    this.sounds = {};
    this.game = game;
    this.baseUrls = baseUrls;
  }
  get audioContext() {
    if (!this._audioContext) {
      if (!navigator.userActivation.hasBeenActive) {
        throw new M2Error(
          "AudioContext cannot be created until user has interacted with the page"
        );
      }
      this._audioContext = new AudioContext();
    }
    return this._audioContext;
  }
  /**
   * Loads sound assets during the game initialization.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't call this because the m2c2kit
   * framework will call this automatically. At initialization, sounds can
   * only be fetched, not decoded because the AudioContext can not yet
   * be created (it requires a user interaction).
   *
   * @param soundAssets - array of SoundAsset objects
   */
  initializeSounds(soundAssets) {
    if (!soundAssets) {
      return Promise.resolve();
    }
    return this.loadSounds(soundAssets);
  }
  /**
   * Loads an array of sound assets and makes them ready for the game.
   *
   * @remarks Loading a sound consists of 1) fetching the sound file and 2)
   * decoding the sound data. The sound is then ready to be played. Step 1
   * can be done at any time, but step 2 requires an `AudioContext`, which
   * can only be created after a user interaction. If a play `Action` is
   * attempted before the sound is ready (either it has not been fetched or
   * decoded), the play `Action` will log a warning to the console and the
   * loading process will continue in the background, and the sound will play
   * when ready. This `loadSounds()` method **does not** have to be awaited.
   *
   * @param soundAssets - an array of {@link SoundAsset}
   * @returns A promise that completes when all sounds have loaded
   */
  loadSounds(soundAssets) {
    if (soundAssets.length === 0) {
      return Promise.resolve();
    }
    soundAssets.forEach((sound) => {
      let url = sound.url;
      if (!M2c2KitHelpers.urlHasScheme(sound.url)) {
        url = M2c2KitHelpers.getUrlFromManifest(
          this.game,
          `${this.baseUrls.assets}/${sound.url}`
        );
      }
      const m2Sound = {
        soundName: sound.soundName,
        data: void 0,
        audioBuffer: void 0,
        audioBufferSource: void 0,
        url,
        status: sound.lazy ? M2SoundStatus.Deferred : M2SoundStatus.WillFetch
      };
      if (this.sounds[sound.soundName]) {
        console.warn(
          `A sound named ${sound.soundName} has already been loaded. It will be replaced.`
        );
      }
      this.sounds[sound.soundName] = m2Sound;
    });
    return this.fetchSounds();
  }
  async fetchSounds() {
    const fetchSoundsPromises = Object.values(this.sounds).map((m2Sound) => {
      if (m2Sound.status === M2SoundStatus.WillFetch) {
        m2Sound.status = M2SoundStatus.Fetching;
        return fetch(m2Sound.url).then((response) => {
          if (!response.ok) {
            m2Sound.status = M2SoundStatus.Error;
            throw new M2Error(
              `cannot fetch sound ${m2Sound.soundName} at url ${m2Sound.url}: ${response.statusText}`
            );
          }
          return response.arrayBuffer().then((arrayBuffer) => {
            m2Sound.data = arrayBuffer;
            m2Sound.status = M2SoundStatus.Fetched;
            console.log(
              `\u26AA sound fetched. name: ${m2Sound.soundName}, bytes: ${arrayBuffer.byteLength}`
            );
          });
        });
      }
      return Promise.resolve();
    });
    await Promise.all(fetchSoundsPromises);
  }
  /**
   * Fetches a m2c2kit sound ({@link M2Sound}) that was previously
   * initialized with lazy loading.
   *
   * @internal For m2c2kit library use only
   *
   * @param m2Sound - M2Sound to fetch
   * @returns A promise that completes when sounds have been fetched
   */
  fetchDeferredSound(m2Sound) {
    m2Sound.status = M2SoundStatus.WillFetch;
    return this.fetchSounds();
  }
  /**
   * Checks if the SoundManager has sounds needing decoding.
   *
   * @internal For m2c2kit library use only
   *
   * @returns true if there are sounds that have been fetched and are waiting
   * to be decoded (status is `M2SoundStatus.Fetched`)
   */
  hasSoundsToDecode() {
    return Object.values(this.sounds).filter(
      (sound) => sound.status === M2SoundStatus.Fetched
    ).length > 0;
  }
  /**
   * Decodes all fetched sounds from bytes to an `AudioBuffer`.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks This method will be called after the `AudioContext` has been
   * created and if there are fetched sounds waiting to be decoded.
   *
   * @returns A promise that completes when all fetched sounds have been decoded
   */
  decodeFetchedSounds() {
    const sounds = Object.values(this.sounds);
    const decodeSoundsPromises = sounds.filter((sound) => sound.status === M2SoundStatus.Fetched).map((sound) => this.decodeSound(sound));
    return Promise.all(decodeSoundsPromises);
  }
  /**
   * Decodes a sound from bytes to an `AudioBuffer`.
   *
   * @param sound - sound to decode
   */
  async decodeSound(sound) {
    if (!sound.data) {
      throw new M2Error(
        `data is undefined for sound ${sound.soundName} (url ${sound.url})`
      );
    }
    try {
      sound.status = M2SoundStatus.Decoding;
      const buffer = await this.audioContext.decodeAudioData(sound.data);
      sound.audioBuffer = buffer;
      sound.status = M2SoundStatus.Ready;
      console.log(
        `\u26AA sound decoded. name: ${sound.soundName}, duration (seconds): ${buffer.duration}`
      );
    } catch {
      sound.status = M2SoundStatus.Error;
      throw new M2Error(
        `error decoding sound ${sound.soundName} (url: ${sound.url})`
      );
    }
  }
  /**
   * Returns a m2c2kit sound ({@link M2Sound}) that has been entered into the
   * SoundManager.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks Typically, a user won't need to call this because sound
   * initialization and processing is handled by the framework.
   *
   * @param soundName - sound's name as defined in the game's sound assets
   * @returns a m2c2kit sound
   */
  getSound(soundName) {
    const sound = this.sounds[soundName];
    if (!sound) {
      throw new M2Error(`getSound(): sound ${soundName} not found`);
    }
    return sound;
  }
  /**
   * Frees up resources allocated by the SoundManager.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks This will be done automatically by the m2c2kit library; the
   * end-user must not call this.
   */
  dispose() {
  }
  /**
   * Gets names of sounds entered in the `SoundManager`.
   *
   * @remarks These are sounds that the `SoundManager` is aware of. The sounds
   * may not be ready to play (may not have been fetched or decoded yet).
   *
   * @returns array of sound names
   */
  getSoundNames() {
    return Object.keys(this.sounds);
  }
}

class EventMaterializer {
  /**
   * The `EventMaterializer` class is responsible for taking serialized events
   * from an event store and replaying them in the game.
   */
  constructor(options) {
    this.game = options.game;
    this.nodeFactory = options.nodeFactory;
    this.freeNodesScene = options.freeNodesScene;
    this.configureI18n = options.configureI18n;
    this.eventMaterializers = /* @__PURE__ */ new Map([
      [
        M2EventType.NodeNew,
        this.materializeNodeNewEvent.bind(this)
      ],
      [
        M2EventType.Composite,
        this.materializeCompositeEvent.bind(this)
      ],
      [
        M2EventType.ScenePresent,
        this.materializeScenePresentEvent.bind(
          this
        )
      ],
      [
        M2EventType.NodePropertyChange,
        this.materializeNodePropertyChangeEvent.bind(
          this
        )
      ],
      [
        M2EventType.NodeAddChild,
        this.materializeNodeAddChildEvent.bind(
          this
        )
      ],
      [
        M2EventType.NodeRemoveChild,
        this.materializeNodeRemoveChildEvent.bind(
          this
        )
      ],
      [
        M2EventType.DomPointerDown,
        this.materializeDomPointerDownEvent.bind(
          this
        )
      ],
      [
        M2EventType.BrowserImageDataReady,
        this.materializeBrowserImageDataReadyEvent.bind(
          this
        )
      ],
      [
        M2EventType.I18nDataReadyEvent,
        this.materializeI18nDataReadyEvent.bind(
          this
        )
      ]
    ]);
  }
  /**
   * Deserialize the events by materializing them into the game.
   *
   * @remarks This method is called when the game is replaying events from the
   * event store. Materializing an event means to take the event and apply its
   * changes to the game. For example, a `NodeNew` event will create a new node
   * in the game. A `NodePropertyChange` event will change a property of a node
   * in the game.
   *
   * @param events - The events to materialize
   */
  materialize(events) {
    if (events.length > 0) {
      console.log(`Replaying ${events.length} events`);
      events.forEach((event) => {
        const handler = this.eventMaterializers.get(event.type);
        if (handler) {
          handler(event);
        } else {
          console.log(`EventMaterializer unhandled event: ${event.type}`);
        }
      });
    }
  }
  materializeCompositeEvent(event) {
    const node = this.game.materializedNodes.find(
      (n) => n.uuid === event.target
    );
    if (!node) {
      console.log(
        `EventMaterializer: composite node of type ${event.compositeType} with uuid ${event.target} not found when handling CompositeEvent ${event.compositeEventType}`
      );
    } else {
      if (node.type === M2NodeType.Composite) {
        node.handleCompositeEvent(event);
      } else {
        throw new M2Error(
          `EventMaterializer: node was expected to be composite, but was of type ${node.type}`
        );
      }
    }
  }
  materializeNodeNewEvent(nodeNewEvent) {
    const node = this.nodeFactory.createNode(
      nodeNewEvent.nodeType,
      nodeNewEvent.compositeType,
      nodeNewEvent.nodeOptions
    );
    if (node.type === M2NodeType.Scene) {
      if (node.name === Constants.FREE_NODES_SCENE_NAME) {
        this.freeNodesScene = node;
        this.freeNodesScene.game = this.game;
        this.freeNodesScene.needsInitialization = true;
        this.game.freeNodesScene = this.freeNodesScene;
      } else {
        this.game.addScene(node);
      }
    }
    this.game.materializedNodes.push(node);
  }
  materializeNodePropertyChangeEvent(nodePropertyChangeEvent) {
    const node = this.game.materializedNodes.find(
      (n) => n.uuid === nodePropertyChangeEvent.uuid
    );
    if (!node) {
      throw new M2Error(
        `EventMaterializer: node with uuid ${nodePropertyChangeEvent.uuid} not found`
      );
    }
    if (nodePropertyChangeEvent.property in node) {
      node[nodePropertyChangeEvent.property] = nodePropertyChangeEvent.value;
    } else {
      throw new M2Error(
        `EventMaterializer: on node ${node.name}, type ${node.type}, nodePropertyChangeEvent tried to set unknown property ${nodePropertyChangeEvent.property} to value ${JSON.stringify(nodePropertyChangeEvent.value)}`
      );
    }
  }
  materializeNodeAddChildEvent(nodeAddChildEvent) {
    const parent = this.game.materializedNodes.find(
      (n) => n.uuid === nodeAddChildEvent.uuid
    );
    if (!parent) {
      throw new M2Error(
        `EventMaterializer: parent node with uuid ${nodeAddChildEvent.uuid} not found`
      );
    }
    const child = this.game.materializedNodes.find(
      (n) => n.uuid === nodeAddChildEvent.childUuid
    );
    if (!child) {
      throw new M2Error(
        `EventMaterializer: child node with uuid ${nodeAddChildEvent.childUuid} not found`
      );
    }
    parent.addChild(child);
  }
  materializeNodeRemoveChildEvent(nodeRemoveChildEvent) {
    const parent = this.game.materializedNodes.find(
      (n) => n.uuid === nodeRemoveChildEvent.uuid
    );
    if (!parent) {
      throw new M2Error(
        `EventMaterializer: parent node with uuid ${nodeRemoveChildEvent.uuid} not found`
      );
    }
    const child = this.game.materializedNodes.find(
      (n) => n.uuid === nodeRemoveChildEvent.childUuid
    );
    if (!child) {
      throw new M2Error(
        `EventMaterializer: child node with uuid ${nodeRemoveChildEvent.childUuid} not found`
      );
    }
    parent.removeChild(child);
  }
  materializeDomPointerDownEvent(domPointerDownEvent) {
    this.game.currentScene?.run(
      Action.custom({
        callback: () => {
          const pointerDownShape = new Shape({
            circleOfRadius: 16,
            fillColor: WebColors.LightGray,
            strokeColor: WebColors.Black,
            lineWidth: 2,
            alpha: 0.75,
            position: { x: domPointerDownEvent.x, y: domPointerDownEvent.y }
          });
          this.game.currentScene?.addChild(pointerDownShape);
          pointerDownShape.run(
            Action.sequence([
              Action.group([
                Action.fadeAlpha({
                  duration: 750,
                  alpha: 0
                }),
                Action.scale({
                  duration: 750,
                  scale: 0
                })
              ]),
              Action.custom({
                callback: () => {
                  this.game.currentScene?.removeChild(pointerDownShape);
                }
              })
            ])
          );
        }
      })
    );
  }
  materializeBrowserImageDataReadyEvent(browserImageDataReadyEvent) {
    this.game.imageManager.loadImages([
      {
        imageName: browserImageDataReadyEvent.imageName,
        width: browserImageDataReadyEvent.width,
        height: browserImageDataReadyEvent.height,
        dataUrl: browserImageDataReadyEvent.dataUrl,
        svgString: browserImageDataReadyEvent.svgString
      }
    ]);
  }
  materializeI18nDataReadyEvent(i18nDataReadyEvent) {
    this.configureI18n(i18nDataReadyEvent.localizationOptions);
  }
  materializeScenePresentEvent(scenePresentEvent) {
    let transition = Transition.none();
    if (scenePresentEvent.transitionType === TransitionType.Slide) {
      if (scenePresentEvent.direction === void 0) {
        throw new M2Error(
          "EventMaterializer: ScenePresentEvent direction is undefined for slide transition"
        );
      }
      if (scenePresentEvent.duration === void 0) {
        throw new M2Error(
          "EventMaterializer: ScenePresentEvent duration is undefined for slide transition"
        );
      }
      if (scenePresentEvent.easingType === void 0) {
        throw new M2Error(
          "EventMaterializer: ScenePresentEvent easingType is undefined for slide transition"
        );
      }
      const incomingScene = this.game.materializedNodes.find(
        (s) => s.uuid === scenePresentEvent.uuid
      );
      if (!incomingScene) {
        throw new M2Error(
          `EventMaterializer: Scene with uuid ${scenePresentEvent.uuid} not found`
        );
      }
      switch (scenePresentEvent.direction) {
        case TransitionDirection.Left: {
          incomingScene.position.x = incomingScene.size.width;
          break;
        }
        case TransitionDirection.Right: {
          incomingScene.position.x = -incomingScene.size.width;
          break;
        }
        case TransitionDirection.Up: {
          incomingScene.position.y = incomingScene.size.height;
          break;
        }
        case TransitionDirection.Down: {
          incomingScene.position.y = -incomingScene.size.height;
          break;
        }
      }
      transition = Transition.slide({
        direction: scenePresentEvent.direction,
        duration: scenePresentEvent.duration,
        easing: Easings.fromTypeAsString(scenePresentEvent.easingType)
      });
    }
    this.game.presentScene(scenePresentEvent.uuid, transition);
  }
}

class Game {
  /**
   * The base class for all games. New games should extend this class.
   *
   * @param options - {@link GameOptions}
   */
  constructor(options) {
    this.type = ActivityType.Game;
    this.sessionUuid = "";
    this.uuid = Uuid.generate();
    this.publishUuid = "";
    this.canvasKitWasmVersion = "0.40.0";
    this.beginTimestamp = NaN;
    this.beginIso8601Timestamp = "";
    this.eventListeners = new Array();
    this.gameMetrics = new Array();
    this.stepCount = 0;
    this.steppingNow = 0;
    this.warmupFunctionQueue = new Array();
    this.warmupFinished = false;
    this.plugins = [];
    this.staticTrialSchema = {};
    this.eventStore = new EventStore();
    this.nodeFactory = new M2NodeFactory();
    /** Nodes created during event replay */
    this.materializedNodes = new Array();
    this.data = {
      trials: new Array(),
      scoring: {}
    };
    /** The 0-based index of the current trial */
    this.trialIndex = 0;
    this.drawnFrames = 0;
    this.lastFpsUpdate = 0;
    this.nextFpsUpdate = 0;
    this.fpsRate = 0;
    this.animationFramesRequested = 0;
    this.limitFps = false;
    this.gameStopRequested = false;
    this.webGlRendererInfo = "";
    this.canvasCssWidth = 0;
    this.canvasCssHeight = 0;
    this.scenes = new Array();
    this.freeNodesScene = new Scene({
      name: Constants.FREE_NODES_SCENE_NAME,
      backgroundColor: [255, 255, 255, 0]
    });
    this.incomingSceneTransitions = new Array();
    this.replayEventsButtonEnabled = true;
    /**
     * The m2c2kit engine will automatically include these schema and their
     * values in the scoring data.
     */
    this.automaticScoringSchema = {
      data_type: {
        type: "string",
        description: "Type of data."
      },
      study_id: {
        type: ["string", "null"],
        description: "The short human-readable text ID of the study (protocol, experiment, or other aggregate) that contains the administration of this activity."
      },
      study_uuid: {
        type: ["string", "null"],
        format: "uuid",
        description: "Unique identifier of the study (protocol, experiment, or other aggregate) that contains the administration of this activity."
      },
      document_uuid: {
        type: "string",
        format: "uuid",
        description: "Unique identifier for this data document."
      },
      session_uuid: {
        type: "string",
        format: "uuid",
        description: "Unique identifier for all activities in this administration of the session. This identifier changes each time a new session starts."
      },
      activity_uuid: {
        type: "string",
        format: "uuid",
        description: "Unique identifier for all trials in this administration of the activity. This identifier changes each time the activity starts."
      },
      activity_id: {
        type: "string",
        description: "Human-readable identifier of the activity."
      },
      activity_publish_uuid: {
        type: "string",
        format: "uuid",
        description: "Persistent unique identifier of the activity. This identifier never changes. It can be used to identify the activity across different studies and sessions."
      },
      activity_version: {
        type: "string",
        description: "Version of the activity."
      },
      device_timezone: {
        type: "string",
        description: "Timezone of the device. Calculated from Intl.DateTimeFormat().resolvedOptions().timeZone."
      },
      device_timezone_offset_minutes: {
        type: "integer",
        description: "Difference in minutes between UTC and device timezone. Calculated from Date.getTimezoneOffset()."
      },
      locale: {
        type: ["string", "null"],
        description: "Locale of the trial. null if the activity does not support localization."
      }
    };
    /**
     * The m2c2kit engine will automatically include these schema and their
     * values in the trial data.
     */
    this.automaticTrialSchema = {
      data_type: {
        type: "string",
        description: "Type of data."
      },
      study_id: {
        type: ["string", "null"],
        description: "The short human-readable text ID of the study (protocol, experiment, or other aggregate) that contains the administration of this activity."
      },
      study_uuid: {
        type: ["string", "null"],
        format: "uuid",
        description: "Unique identifier of the study (protocol, experiment, or other aggregate) that contains the administration of this activity."
      },
      document_uuid: {
        type: "string",
        format: "uuid",
        description: "Unique identifier for this data document."
      },
      session_uuid: {
        type: "string",
        format: "uuid",
        description: "Unique identifier for all activities in this administration of the session. This identifier changes each time a new session starts."
      },
      activity_uuid: {
        type: "string",
        format: "uuid",
        description: "Unique identifier for all trials in this administration of the activity. This identifier changes each time the activity starts."
      },
      activity_id: {
        type: "string",
        description: "Human-readable identifier of the activity."
      },
      activity_publish_uuid: {
        type: "string",
        format: "uuid",
        description: "Persistent unique identifier of the activity. This identifier never changes. It can be used to identify the activity across different studies and sessions."
      },
      activity_version: {
        type: "string",
        description: "Version of the activity."
      },
      device_timezone: {
        type: "string",
        description: "Timezone of the device. Calculated from Intl.DateTimeFormat().resolvedOptions().timeZone."
      },
      device_timezone_offset_minutes: {
        type: "integer",
        description: "Difference in minutes between UTC and device timezone. Calculated from Date.getTimezoneOffset()."
      },
      locale: {
        type: ["string", "null"],
        description: "Locale of the trial. null if the activity does not support localization."
      }
    };
    this.snapshots = new Array();
    if (!options.id || options.id.trim() === "") {
      throw new M2Error("id is required in GameOptions");
    }
    if (!Uuid.isValid(options.publishUuid)) {
      const providedPublishUuid = options.publishUuid ? `Provided publishUuid was ${options.publishUuid}. ` : "";
      console.warn(
        `Missing or invalid publishUuid in GameOptions. ${providedPublishUuid}To generate a valid UUID, visit a site such as https://www.uuidgenerator.net/version4`
      );
    }
    this.options = options;
    this.name = options.name;
    this.id = options.id;
    this.publishUuid = options.publishUuid;
    this.fpsMetricReportThreshold = options.fpsMetricReportThreshold ?? Constants.FPS_METRIC_REPORT_THRESHOLD;
    this.maximumRecordedActivityMetrics = options.maximumRecordedActivityMetrics ?? Constants.MAXIMUM_RECORDED_ACTIVITY_METRICS;
    this.addLocalizationParametersToGameParameters();
    if (this.options.locale !== void 0) {
      this.setParameters({ locale: this.options.locale });
    }
    if (this.options.fallbackLocale !== void 0) {
      this.setParameters({ fallback_locale: this.options.fallbackLocale });
    }
    if (this.options.missingLocalizationColor) {
      this.setParameters({
        missing_localization_color: this.options.missingLocalizationColor
      });
    }
    if (this.options.translation) {
      this.setParameters({ translation: this.options.translation });
    }
    if (this.options.additionalTranslation) {
      this.setParameters({ translation: this.options.additionalTranslation });
    }
    if (!this.options.trialSchema) {
      this.options.trialSchema = {};
    }
    if (!this.options.scoringSchema) {
      this.options.scoringSchema = {};
    }
    if (options.moduleMetadata) {
      this.moduleMetadata = options.moduleMetadata;
    } else {
      this.moduleMetadata = {
        name: "",
        version: "",
        dependencies: {}
      };
    }
    if (options.moduleMetadata?.name && options.version) {
      console.log(
        `\u26AA ${options.moduleMetadata.name} version ${options.version}`
      );
    }
  }
  createFreeNodesScene() {
    this.freeNodesScene.game = this;
    this.freeNodesScene.needsInitialization = true;
    const freeNodeSceneOptions = {
      name: Constants.FREE_NODES_SCENE_NAME,
      backgroundColor: [255, 255, 255, 0],
      uuid: this.freeNodesScene.uuid
    };
    const freeNodesSceneNewEvent = {
      type: M2EventType.NodeNew,
      target: this.freeNodesScene,
      nodeType: M2NodeType.Scene,
      ...M2c2KitHelpers.createFrameUpdateTimestamps(),
      nodeOptions: freeNodeSceneOptions,
      sequence: m2c2Globals.eventSequence
    };
    this.eventStore.addEvent(freeNodesSceneNewEvent);
  }
  getImportedModuleBaseUrl(packageName, moduleUrl) {
    const regex = new RegExp(`^.*${packageName}[^\\/]*`);
    const matches = moduleUrl.match(regex);
    if (!matches || matches.length === 0) {
      throw new M2Error(
        `Could not calculate imported assessment package base URL. Package name: ${packageName}, module URL: ${moduleUrl}`
      );
    }
    return matches[0];
  }
  addLocalizationParametersToGameParameters() {
    this.options.parameters = {
      ...this.options.parameters,
      ...I18n.makeLocalizationParameters()
    };
  }
  async init() {
    return this.initialize();
  }
  /**
   * Loads the canvaskit wasm binary.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks The CanvasKit object is initialized with this method, rather
   * than calling `CanvasKitInit()` directly, so that this method can be
   * easily mocked in tests.
   *
   * @param canvasKitWasmUrl - URL to the canvaskit wasm binary
   * @returns a promise that resolves to a CanvasKit object
   */
  loadCanvasKit(canvasKitWasmUrl) {
    return CanvasKitInit({ locateFile: () => canvasKitWasmUrl });
  }
  /**
   * Resolves base URL locations for game assets and CanvasKit wasm binary.
   *
   * @internal For m2c2kit library use only
   *
   * @param game - game to resolve base URLs for
   * @returns base URLs for game assets and CanvasKit wasm binary
   */
  async resolveGameBaseUrls(game) {
    let moduleUrl;
    let isImportedModule = false;
    let assetsBaseUrl = `assets/${game.id}`;
    if (game.moduleMetadata.name) {
      try {
        moduleUrl = await import.meta.resolve(game.moduleMetadata.name);
        const moduleBaseUrl = game.getImportedModuleBaseUrl(
          game.moduleMetadata.name,
          moduleUrl
        );
        assetsBaseUrl = moduleBaseUrl + "/assets";
        isImportedModule = true;
      } catch {
      }
    }
    let canvasKitWasmBaseUrl = `assets/${game.id}`;
    try {
      const coreModuleUrl = await import.meta.resolve("@m2c2kit/core");
      canvasKitWasmBaseUrl = game.getImportedModuleBaseUrl("@m2c2kit/core", coreModuleUrl) + "/assets";
    } catch {
      if (isImportedModule) {
        throw new M2Error(
          `the package ${game.moduleMetadata.name} has been imported from a module URL (${moduleUrl}), but the @m2c2kit/core package module URL could not be determined.`
        );
      }
    }
    return {
      assets: assetsBaseUrl,
      canvasKitWasm: canvasKitWasmBaseUrl
    };
  }
  async configureI18n(localizationOptions) {
    this.i18n = new I18n(this, localizationOptions);
    if (!this.i18n) {
      throw new M2Error("I18n object is undefined");
    }
    await this.i18n.initialize();
    this.eventStore.addEvent({
      type: "I18nDataReadyEvent",
      target: this.i18n,
      localizationOptions,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    });
  }
  async waitForErudaInitialization(maxWaitDurationMs = 5e3) {
    await new Promise((resolve) => {
      let cumulativeWaitTime = 0;
      const intervalId = setInterval(() => {
        if (m2c2Globals.erudaInitialized === true) {
          clearInterval(intervalId);
          resolve(void 0);
        }
        cumulativeWaitTime = cumulativeWaitTime + 100;
        if (cumulativeWaitTime > maxWaitDurationMs) {
          console.warn(
            `Could not initialize eruda within ${maxWaitDurationMs} milliseconds.`
          );
          clearInterval(intervalId);
          resolve(void 0);
        }
      }, 100);
    });
  }
  async initialize() {
    if (m2c2Globals.erudaRequested === true) {
      await this.waitForErudaInitialization();
    }
    if (this.options.recordEvents === true) {
      this.eventStore.mode = EventStoreMode.Record;
    }
    this.createFreeNodesScene();
    const baseUrls = await this.resolveGameBaseUrls(this);
    if (this.manifest === void 0) {
      this.manifest = await this.loadManifest();
    }
    if (this._canvasKit === void 0) {
      const manifestCanvasKitWasmUrl = M2c2KitHelpers.getUrlFromManifest(
        this,
        baseUrls.canvasKitWasm + `/canvaskit-${this.canvasKitWasmVersion}.wasm`
      );
      try {
        this.canvasKit = await this.loadCanvasKit(manifestCanvasKitWasmUrl);
      } catch (err) {
        throw new M2Error(
          `game ${this.id} could not load canvaskit wasm file from ${manifestCanvasKitWasmUrl}`
        );
      }
    }
    if (this.isLocalizationRequested()) {
      const localizationOptions = this.getLocalizationOptionsFromGameParameters();
      await this.configureI18n(localizationOptions);
    }
    this.fontManager = new FontManager(this, baseUrls);
    this.imageManager = new ImageManager(this, baseUrls);
    this.soundManager = new SoundManager(this, baseUrls);
    this.eventMaterializer = new EventMaterializer({
      game: this,
      nodeFactory: this.nodeFactory,
      freeNodesScene: this.freeNodesScene,
      configureI18n: this.configureI18n.bind(this)
    });
    return Promise.all([
      this.fontManager.initializeFonts(this.options.fonts),
      this.imageManager.initializeImages(this.options.images),
      this.soundManager.initializeSounds(this.options.sounds)
    ]);
  }
  /**
   * Returns the manifest, if manifest.json was created during the build.
   *
   * @internal For m2c2kit library use only
   *
   * @remarks This should be called without any parameters. The
   * `manifestJsonUrl` parameter's default value will be modified during the
   * build step, if the build was configured to include the manifest.json
   *
   * @param manifestJsonUrl - Do not use this parameter. Allow the default.
   * @returns a promise that resolves to the manifest object, or an empty object if there is no manifest
   */
  async loadManifest(manifestJsonUrl = "manifest.json") {
    if (manifestJsonUrl.includes("NO_M2C2KIT_MANIFEST_JSON_URL")) {
      return {};
    }
    let manifestResponse;
    try {
      manifestResponse = await fetch(manifestJsonUrl);
      if (!manifestResponse.ok) {
        throw new M2Error(
          `Error ${manifestResponse.status} on GET manifest.json from ${manifestJsonUrl}.`
        );
      }
    } catch {
      throw new M2Error(
        `Network error on GET manifest.json from ${manifestJsonUrl}.`
      );
    }
    try {
      return await manifestResponse.json();
    } catch {
      throw new M2Error(`Error parsing manifest.json from ${manifestJsonUrl}.`);
    }
  }
  get fontManager() {
    if (!this._fontManager) {
      throw new M2Error("fontManager is undefined");
    }
    return this._fontManager;
  }
  set fontManager(fontManager) {
    this._fontManager = fontManager;
  }
  get imageManager() {
    if (!this._imageManager) {
      throw new M2Error("imageManager is undefined");
    }
    return this._imageManager;
  }
  set imageManager(imageManager) {
    this._imageManager = imageManager;
  }
  get soundManager() {
    if (!this._soundManager) {
      throw new M2Error("soundManager is undefined");
    }
    return this._soundManager;
  }
  set soundManager(soundManager) {
    this._soundManager = soundManager;
  }
  get eventMaterializer() {
    if (!this._eventMaterializer) {
      throw new M2Error("eventMaterializer is undefined");
    }
    return this._eventMaterializer;
  }
  set eventMaterializer(eventMaterializer) {
    this._eventMaterializer = eventMaterializer;
  }
  /**
   * Adds prefixes to a key to ensure that keys are unique across activities
   * and studies.
   *
   * @remarks When a value is saved to the key-value data store, the key must
   * be prefixed with additional information to ensure that keys are unique.
   * The prefixes will include the activity id and publish UUID, and possibly
   * the study id and study UUID, if they are set (this is so that keys are
   * unique across different studies that might use the same activity).
   *
   * @param key - item key to add prefixes to
   * @returns the item key with prefixes added
   */
  addPrefixesToKey(key) {
    let k = "";
    if (this.studyId && this.studyUuid) {
      k = this.studyId.concat(":", this.studyUuid, ":");
    } else if (this.studyId || this.studyUuid) {
      throw new M2Error(
        `study_id and study_uuid must both be set or unset. Values are study_id: ${this.studyId}, study_uuid: ${this.studyUuid}`
      );
    }
    return k.concat(this.id.concat(this.id, ":", this.publishUuid, ":", key));
  }
  /**
   * Saves an item to the activity's key-value store.
   *
   * @remarks The underlying persistence provider of the key-value store must
   * have been previously provided in `SessionOptions`.
   * @example
   * import { LocalDatabase } from "@m2c2kit/db";
   * const session = new Session({
   *   dataStores: [new LocalDatabase()]
   *   ...
   * });
   * @param key - item key
   * @param value - item value
   * @param globalStore - if true, treat the item as "global" and not
   * associated with a specific activity; global items can be accessed
   * by any activity. Default is false.
   * @returns key
   */
  storeSetItem(key, value, globalStore = false) {
    const prefixedKey = globalStore ? key : this.addPrefixesToKey(key);
    return this.dataStores[0].setItem(
      prefixedKey,
      value,
      globalStore ? "" : this.publishUuid
    );
  }
  /**
   * Gets an item value from the activity's key-value store.
   *
   * @remarks The underlying persistence provider of the key-value store must
   * have been previously provided in `SessionOptions`.
   * @example
   * import { LocalDatabase } from "@m2c2kit/db";
   * const session = new Session({
   *   dataStores: [new LocalDatabase()]
   *   ...
   * });
   * @param key - item key
   * @param globalStore - if true, treat the item as "global" and not
   * associated with a specific activity; global items can be accessed
   * by any activity. Default is false.
   * @returns value of the item
   */
  storeGetItem(key, globalStore = false) {
    const prefixedKey = globalStore ? key : this.addPrefixesToKey(key);
    return this.dataStores[0].getItem(prefixedKey);
  }
  /**
   * Deletes an item value from the activity's key-value store.
   *
   * @remarks The underlying persistence provider of the key-value store must
   * have been previously provided in `SessionOptions`.
   * @example
   * import { LocalDatabase } from "@m2c2kit/db";
   * const session = new Session({
   *   dataStores: [new LocalDatabase()]
   *   ...
   * });
   * @param key - item key
   * @param globalStore - if true, treat the item as "global" and not
   * associated with a specific activity; global items can be accessed
   * by any activity. Default is false.
   */
  storeDeleteItem(key, globalStore = false) {
    const prefixedKey = globalStore ? key : this.addPrefixesToKey(key);
    return this.dataStores[0].deleteItem(prefixedKey);
  }
  /**
   * Deletes all items from the activity's key-value store.
   *
   * @remarks The underlying persistence provider of the key-value store must
   * have been previously provided in `SessionOptions`.
   * @example
   * import { LocalDatabase } from "@m2c2kit/db";
   * const session = new Session({
   *   dataStores: [new LocalDatabase()]
   *   ...
   * });
   */
  storeClearItems() {
    return this.dataStores[0].clearItemsByActivityPublishUuid(this.publishUuid);
  }
  /**
   * Returns keys of all items in the activity's key-value store.
   *
   * @remarks The underlying persistence provider of the key-value store must
   * have been previously provided in `SessionOptions`.
   * @example
   * import { LocalDatabase } from "@m2c2kit/db";
   * const session = new Session({
   *   dataStores: [new LocalDatabase()]
   *   ...
   * });
   * @param globalStore - if true, treat the item as "global" and not
   * associated with a specific activity; global items can be accessed
   * by any activity. Default is false.
   */
  storeItemsKeys(globalStore = false) {
    return this.dataStores[0].itemsKeysByActivityPublishUuid(
      globalStore ? "" : this.publishUuid
    );
  }
  /**
   * Determines if a key exists in the activity's key-value store.
   *
   * @remarks The underlying persistence provider of the key-value store must
   * have been previously provided in `SessionOptions`.
   * @example
   * import { LocalDatabase } from "@m2c2kit/db";
   * const session = new Session({
   *   dataStores: [new LocalDatabase()]
   *   ...
   * });
   * @param key - item key
   * @param globalStore - if true, treat the item as "global" and not
   * associated with a specific activity; global items can be accessed
   * by any activity. Default is false.
   * @returns true if the key exists, false otherwise
   */
  storeItemExists(key, globalStore = false) {
    const prefixedKey = globalStore ? key : this.addPrefixesToKey(key);
    return this.dataStores[0].itemExists(prefixedKey);
  }
  get dataStores() {
    if (!this._dataStores) {
      throw new M2Error("dataStores is undefined");
    }
    return this._dataStores;
  }
  set dataStores(dataStores) {
    this._dataStores = dataStores;
  }
  hasDataStores() {
    return this._dataStores && this._dataStores.length > 0 || false;
  }
  getLocalizationOptionsFromGameParameters() {
    const locale = this.getParameter("locale");
    const fallbackLocale = this.getParameterOrFallback(
      "fallback_locale",
      void 0
    );
    const missingTranslationColor = this.getParameterOrFallback("missing_localization_color", void 0);
    const additionalTranslation = this.getParameterOrFallback("translation", void 0);
    const translation = this.options.translation;
    return {
      locale,
      fallbackLocale,
      missingLocalizationColor: missingTranslationColor,
      additionalTranslation,
      translation
    };
  }
  isLocalizationRequested() {
    const locale = this.getParameterOrFallback(
      "locale",
      void 0
    );
    if (locale === "") {
      throw new M2Error(
        "Empty string in locale. Leave locale undefined or null to prevent localization."
      );
    }
    if ((locale === null || locale === void 0) && this.options.translation) {
      this.setParameters({ locale: this.options.translation.baseLocale });
      return true;
    }
    if ((locale === null || locale === void 0) && this.options.translation === void 0) {
      return false;
    }
    return true;
  }
  setParameters(additionalParameters) {
    const { parameters } = this.options;
    Object.keys(additionalParameters).forEach((key) => {
      if (key === "diagnostics") {
        return;
      }
      if (key === "eruda") {
        const erudaRequested = additionalParameters[key] === true;
        if (erudaRequested) {
          M2c2KitHelpers.loadEruda();
        }
        return;
      }
      if (key === "scripts") {
        const scriptUrls = additionalParameters[key];
        if (scriptUrls) {
          M2c2KitHelpers.loadScriptUrls(scriptUrls);
        }
        return;
      }
      if (!parameters || !(key in parameters)) {
        console.warn(
          `game ${this.options.name} does not have a parameter named ${key}. attempt to set parameter ${key} to value ${// eslint-disable-next-line @typescript-eslint/no-explicit-any
          additionalParameters[key]} will be ignored`
        );
      } else if (this.options.parameters && this.options.parameters[key]) {
        const providedValue = additionalParameters[key];
        let value;
        if (this.options.parameters[key].type !== void 0 && providedValue !== void 0) {
          try {
            value = M2c2KitHelpers.convertValueToType(
              providedValue,
              this.options.parameters[key].type
            );
          } catch (e) {
            throw new M2Error(
              "Error setting parameter " + key + ": " + e.message
            );
          }
        } else {
          value = providedValue;
        }
        this.options.parameters[key].default = value;
      }
      if (this.additionalParameters === void 0) {
        this.additionalParameters = {};
      }
      this.additionalParameters[key] = // eslint-disable-next-line @typescript-eslint/no-explicit-any
      additionalParameters[key];
    });
  }
  get canvasKit() {
    if (!this._canvasKit) {
      throw new M2Error("canvaskit is undefined");
    }
    return this._canvasKit;
  }
  set canvasKit(canvasKit) {
    this._canvasKit = canvasKit;
  }
  /**
   * Adds a node as a free node (a node that is not part of a scene)
   * to the game.
   *
   * @remarks Once added to the game, a free node will always be drawn,
   * and it will not be part of any scene transitions. This is useful if
   * a node must persistently be drawn and not move with scene
   * transitions. The appearance of the free node must be managed
   * by the programmer. Note: internally, the free nodes are part of a
   * special scene (named "__freeNodesScene"), but this scene is handled
   * apart from regular scenes in order to achieve the free node behavior.
   *
   * @param node - node to add as a free node
   */
  addFreeNode(node) {
    this.freeNodesScene.addChild(node);
  }
  /**
   * @deprecated Use addFreeNode() instead
   */
  addFreeEntity(node) {
    this.addFreeNode(node);
  }
  /**
   * Removes a free node from the game.
   *
   * @remarks Throws exception if the node to remove is not currently added
   * to the game as a free node
   *
   * @param node - the free node to remove or its name as a string
   */
  removeFreeNode(node) {
    if (typeof node === "string") {
      const child = this.freeNodesScene.children.filter((child2) => child2.name === node).find(Boolean);
      if (!child) {
        throw new M2Error(
          `cannot remove free node named "${node}" because it is not currently part of the game's free nodes. `
        );
      }
      this.freeNodesScene.removeChild(child);
    } else {
      this.freeNodesScene.removeChild(node);
    }
  }
  /**
   * @deprecated Use removeFreeNode() instead
   */
  removeFreeEntity(node) {
    this.removeFreeNode(node);
  }
  /**
   * Removes all free nodes from the game.
   */
  removeAllFreeNodes() {
    while (this.freeNodesScene.children.length) {
      this.freeNodesScene.children.pop();
    }
  }
  /**
   * @deprecated Use removeAllFreeNodes() instead
   */
  removeAllFreeEntities() {
    this.removeAllFreeNodes();
  }
  /**
   * Returns array of free nodes that have been added to the game.
   *
   * @returns array of free nodes
   */
  get freeNodes() {
    return this.freeNodesScene.children;
  }
  /**
   * @deprecated Use Game.freeEntities instead
   */
  get freeEntities() {
    return this.freeNodes;
  }
  /**
   * Adds a scene to the game.
   *
   * @remarks A scene, and its children nodes, cannot be presented unless it
   * has been added to the game object. A scene can be added to the game
   * only once.
   *
   * @param scene
   */
  addScene(scene) {
    if (this.scenes.includes(scene)) {
      console.warn(
        `Game.addScene(): scene ${scene.toString()} has already been added to the game. This will cause unpredictable behavior. This warning will become an error in a future release.`
      );
    }
    scene.game = this;
    scene.needsInitialization = true;
    this.scenes.push(scene);
    this.addNodeEvents(scene);
  }
  /**
   * Adds events from a node and its children to the game's event store.
   *
   * @remarks This method is first called when a scene is added to the game.
   * If the scene or any of its descendants was constructed or had its
   * properties changed before it was added to the game, these events were
   * stored within the node (because the game event store was not yet
   * available). This method retrieves these events from the node and adds
   * them to the game's event store.
   *
   * @param node - node that contains events to add
   */
  addNodeEvents(node) {
    this.eventStore.addEvents(node.nodeEvents);
    node.nodeEvents.length = 0;
    for (const child of node.children) {
      this.addNodeEvents(child);
    }
  }
  /**
   * Adds multiple scenes to the game.
   *
   * @param scenes
   */
  addScenes(scenes) {
    scenes.forEach((scene) => {
      this.addScene(scene);
    });
  }
  /**
   * Removes a scene from the game.
   *
   * @param scene - the scene to remove or its name as a string
   */
  removeScene(scene) {
    if (typeof scene === "object") {
      if (this.scenes.includes(scene)) {
        this.scenes = this.scenes.filter((s) => s !== scene);
      } else {
        throw new M2Error(
          `cannot remove scene ${scene} from game because the scene is not currently added to the game`
        );
      }
    } else {
      if (this.scenes.map((s) => s.name).includes(scene)) {
        this.scenes = this.scenes.filter((s) => s.name !== scene);
      } else {
        throw new M2Error(
          `cannot remove scene named "${scene}" from game because the scene is not currently added to the game`
        );
      }
    }
  }
  /**
   * Specifies the scene that will be presented upon the next frame draw.
   *
   * @param scene - the scene, its string name, or UUID
   * @param transition
   */
  presentScene(scene, transition) {
    let incomingScene;
    if (typeof scene === "string") {
      incomingScene = this.scenes.filter((scene_) => scene_.name === scene).find(Boolean);
      if (incomingScene === void 0) {
        incomingScene = this.scenes.filter((scene_) => scene_.uuid === scene).find(Boolean);
      }
      if (incomingScene === void 0) {
        throw new M2Error(`scene ${scene} not found`);
      }
    } else {
      if (!this.scenes.some((scene_) => scene_ === scene)) {
        throw new M2Error(
          `scene ${scene} exists, but it has not been added to the game object`
        );
      }
      incomingScene = scene;
    }
    incomingScene.initialize();
    incomingScene.needsInitialization = false;
    const sceneTransition = new SceneTransition(
      incomingScene,
      transition ?? Transition.none()
    );
    this.incomingSceneTransitions.push(sceneTransition);
    if (incomingScene.game.bodyBackgroundColor !== void 0) {
      document.body.style.backgroundColor = `rgb(${incomingScene.game.bodyBackgroundColor[0]},${incomingScene.game.bodyBackgroundColor[1]},${incomingScene.game.bodyBackgroundColor[2]},${incomingScene.game.bodyBackgroundColor[3]})`;
    } else {
      document.body.style.backgroundColor = `rgb(${incomingScene.backgroundColor[0]},${incomingScene.backgroundColor[1]},${incomingScene.backgroundColor[2]},${incomingScene.backgroundColor[3]})`;
    }
    let direction;
    if (transition?.type === TransitionType.Slide) {
      direction = transition.direction;
    }
    const scenePresentEvent = {
      type: "ScenePresent",
      target: incomingScene,
      uuid: incomingScene.uuid,
      ...M2c2KitHelpers.createFrameUpdateTimestamps(),
      transitionType: transition?.type ?? TransitionType.None,
      duration: transition?.duration,
      direction,
      easingType: transition?.easing ? Easings.toTypeAsString(transition.easing) : void 0
    };
    this.eventStore.addEvent(scenePresentEvent);
    return;
  }
  /**
   * Gets the value of the game parameter. If parameterName
   * is not found, then throw exception.
   *
   * @param parameterName - the name of the game parameter whose value is requested
   * @returns
   */
  getParameter(parameterName) {
    if (this.options.parameters !== void 0 && Object.keys(this.options.parameters).includes(parameterName)) {
      return this.options.parameters[parameterName].default;
    } else {
      throw new M2Error(`game parameter ${parameterName} not found`);
    }
  }
  /**
   * Gets the value of the game parameter. If parameterName
   * is not found, then return fallback value
   *
   * @param parameterName - the name of the game parameter whose value is requested
   * @param fallbackValue - the value to return if parameterName is not found
   * @returns
   */
  getParameterOrFallback(parameterName, fallbackValue) {
    if (this.options.parameters !== void 0 && Object.keys(this.options.parameters).includes(parameterName)) {
      return this.options.parameters[parameterName].default;
    } else {
      return fallbackValue;
    }
  }
  /**
   * Returns true if a game parameter exists for the given string.
   *
   * @param parameterName - the name of the game parameter whose existence is queried
   * @returns
   */
  hasParameter(parameterName) {
    if (this.options.parameters !== void 0 && Object.keys(this.options.parameters).includes(parameterName)) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Starts the game loop.
   *
   * @remarks If entryScene is undefined, the game will start with scene
   * defined in the game object's entryScene property. If that is undefined,
   * the game will start with the first scene in the game object's scenes.
   * If there are no scenes in the game object's scenes, it will throw
   * an error.
   * Although the method has no awaitable calls, we will likely do
   * so in the future. Thus this method is async.
   *
   * @param entryScene - The scene (Scene object or its string name) to display when the game starts
   */
  async start(entryScene) {
    const gameInitOptions = this.options;
    this.setupHtmlCanvases(
      gameInitOptions.canvasId,
      gameInitOptions.width,
      gameInitOptions.height,
      gameInitOptions.stretch
    );
    this.showFps = gameInitOptions.showFps ?? false;
    this.bodyBackgroundColor = gameInitOptions.bodyBackgroundColor;
    this.initData();
    this.setupCanvasKitSurface();
    this.setupFpsFont();
    this.setupCanvasDomEventHandlers();
    this.beginTimestamp = Timer.now();
    this.beginIso8601Timestamp = (/* @__PURE__ */ new Date()).toISOString();
    let startingScene;
    if (entryScene !== void 0) {
      if (typeof entryScene === "object") {
        startingScene = entryScene;
      } else {
        startingScene = this.scenes.filter((scene) => scene.name === entryScene).find(Boolean);
      }
    } else if (this.entryScene !== void 0) {
      if (typeof this.entryScene === "object") {
        startingScene = this.entryScene;
      } else {
        startingScene = this.scenes.filter((scene) => scene.name === this.entryScene).find(Boolean);
      }
    } else {
      startingScene = this.scenes.find(Boolean);
    }
    if (startingScene === void 0) {
      throw new M2Error(
        "cannot start game. entry scene has not been added to the game object."
      );
    }
    this.presentScene(startingScene);
    if (this.surface === void 0) {
      throw new M2Error("CanvasKit surface is undefined");
    }
    if (this.options.timeStepping) {
      this.addTimeSteppingControlsToDom();
      this.updateTimeSteppingOutput();
    } else {
      this.removeTimeSteppingControlsFromDom();
    }
    if (this.options.showEventStoreControls) {
      this.addEventControlsToDom();
    }
    this.warmupFinished = false;
    const gameWarmupStartEvent = {
      target: this,
      type: M2EventType.GameWarmupStart,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    this.raiseActivityEventOnListeners(gameWarmupStartEvent);
    this.warmupFunctionQueue.push({
      warmupFunction: this.warmupShadersWithPrimitives
    });
    this.warmupFunctionQueue.push({
      warmupFunction: this.warmupShadersWithPrimitives,
      positionOffset: 0.10012117
    });
    this.warmupFunctionQueue.push({
      warmupFunction: this.warmupShadersWithScenes
    });
    this.surface.requestAnimationFrame(this.loop.bind(this));
    const activityStartEvent = {
      target: this,
      type: M2EventType.ActivityStart,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    this.raiseActivityEventOnListeners(activityStartEvent);
  }
  playEventsHandler(mouseEvent) {
    if (mouseEvent?.target?.id === "replay-events") {
      this.eventStore.mode = EventStoreMode.Disabled;
      this.scenes.forEach((scene) => {
        this.removeScene(scene);
      });
      this.currentScene = void 0;
      this.eventListeners = new Array();
      this.freeNodesScene.removeAllChildren();
      this.materializedNodes = [];
      this.eventStore.replay();
      this.setReplayEventsButtonEnabled(false);
      this.setStopReplayButtonEnabled(true);
    }
    if (mouseEvent?.target?.id === "stop-replay") {
      this.eventStore.clearEvents();
      this.setReplayEventsButtonEnabled(true);
      this.setStopReplayButtonEnabled(false);
    }
    if (mouseEvent?.target?.id === "log-events") {
      if (this.eventStore.mode === EventStoreMode.Replay) {
        console.log(this.eventStore.serializedEventsBeforeReplay);
        console.log(
          `Total events: ${JSON.parse(this.eventStore.serializedEventsBeforeReplay).length}`
        );
        return;
      }
      console.log(JSON.stringify(this.eventStore.getEvents()));
      console.log(`Total events: ${this.eventStore.getEvents().length}`);
    }
  }
  setReplayEventsButtonEnabled(enable) {
    const replayEventsButton = document.getElementById("replay-events");
    if (!replayEventsButton) {
      return;
    }
    if (enable) {
      replayEventsButton.removeAttribute("disabled");
      this.replayEventsButtonEnabled = true;
      return;
    }
    replayEventsButton.setAttribute("disabled", "true");
    this.replayEventsButtonEnabled = false;
  }
  setStopReplayButtonEnabled(enable) {
    const stopReplayButton = document.getElementById("stop-replay");
    if (!stopReplayButton) {
      return;
    }
    if (enable) {
      stopReplayButton.removeAttribute("disabled");
      return;
    }
    stopReplayButton.setAttribute("disabled", "true");
  }
  addEventControlsToDom() {
    const existingDiv = document.getElementById("m2c2kit-event-controls-div");
    if (existingDiv) {
      existingDiv.remove();
    }
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      const div = document.createElement("div");
      div.id = "m2c2kit-event-controls-div";
      div.style.position = "fixed";
      div.style.top = "4px";
      div.style.left = "4px";
      body.prepend(div);
      const btn = document.createElement("button");
      btn.id = "replay-events";
      btn.title = "replay event recording";
      btn.innerText = "\u25B6\uFE0F";
      btn.style.marginRight = "4px";
      div.appendChild(btn);
      btn.addEventListener("click", this.playEventsHandler.bind(this));
      const btn2 = document.createElement("button");
      btn2.id = "stop-replay";
      btn2.title = "stop event replay";
      btn2.innerText = "\u23F9\uFE0F";
      btn2.style.marginRight = "4px";
      btn2.disabled = true;
      div.appendChild(btn2);
      btn2.addEventListener("click", this.playEventsHandler.bind(this));
      const btn3 = document.createElement("button");
      btn3.id = "log-events";
      btn3.title = "log events to console";
      btn3.innerText = "\u{1F4C4}";
      btn3.style.marginRight = "4px";
      div.appendChild(btn3);
      btn3.addEventListener("click", this.playEventsHandler.bind(this));
      const replayThroughTextSpan = document.createElement("span");
      replayThroughTextSpan.title = "optional: replay events only through a given sequence number. Default is to replay all events.";
      replayThroughTextSpan.innerText = "Replay through sequence: ";
      div.appendChild(replayThroughTextSpan);
      const input = document.createElement("input");
      input.id = "sequence-number";
      input.title = "optional: replay events only through a given sequence number. Default is to replay all events.";
      input.style.marginRight = "4px";
      div.appendChild(input);
    }
  }
  addTimeSteppingControlsToDom() {
    const existingDiv = document.getElementById("m2c2kit-time-stepping-div");
    if (existingDiv) {
      return;
    }
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      const div = document.createElement("div");
      div.id = "m2c2kit-time-stepping-div";
      body.prepend(div);
      const btn = document.createElement("button");
      btn.id = "1-step-advance";
      btn.title = "advance 1 step (16.667 ms)";
      btn.innerText = ">";
      btn.style.marginRight = "4px";
      div.appendChild(btn);
      btn.addEventListener("click", this.advanceStepsHandler.bind(this));
      const btn2 = document.createElement("button");
      btn2.id = "55-step-advance";
      btn2.title = "advance 55 steps (916.667 ms)";
      btn2.innerText = ">>";
      btn2.style.marginRight = "4px";
      div.appendChild(btn2);
      btn2.addEventListener("click", this.advanceStepsHandler.bind(this));
      const stepsInput = document.createElement("input");
      stepsInput.id = "time-stepping-steps-input";
      stepsInput.title = "steps";
      stepsInput.style.width = "40px";
      stepsInput.style.marginRight = "4px";
      stepsInput.setAttribute("readonly", "true");
      div.appendChild(stepsInput);
      const nowInput = document.createElement("input");
      nowInput.id = "time-stepping-now-input";
      nowInput.title = "milliseconds";
      nowInput.style.width = "80px";
      nowInput.style.marginRight = "4px";
      nowInput.setAttribute("readonly", "true");
      div.appendChild(nowInput);
    }
  }
  updateTimeSteppingOutput() {
    const stepsInput = document.getElementById(
      "time-stepping-steps-input"
    );
    if (stepsInput) {
      stepsInput.value = this.stepCount.toString();
    }
    const nowInput = document.getElementById(
      "time-stepping-now-input"
    );
    if (nowInput) {
      nowInput.value = this.steppingNow.toFixed(2);
    }
  }
  advanceStepsHandler(mouseEvent) {
    if (mouseEvent?.target?.id === "1-step-advance") {
      this.steppingNow = this.steppingNow + 16.66666666666667;
      this.stepCount = this.stepCount + 1;
    } else if (mouseEvent?.target?.id === "55-step-advance") {
      this.steppingNow = this.steppingNow + 16.66666666666667 * 55;
      this.stepCount = this.stepCount + 55;
    }
    this.updateTimeSteppingOutput();
  }
  removeTimeSteppingControlsFromDom() {
    const div = document.getElementById("m2c2kit-time-stepping-div");
    if (div) {
      div.remove();
    }
  }
  /**
   * Warms up the Skia-based shaders underlying canvaskit by drawing
   * primitives.
   *
   * @remarks Some canvaskit methods take extra time the first time they are
   * called because a WebGL shader must be compiled. If the method is part of
   * an animation, then this may cause frame drops or "jank." To alleviate
   * this, we can "warm up" the shader associated with the method by calling
   * it at the beginning of our game. Thus, all warmup operations will be
   * concentrated at the beginning and will not be noticeable. This warmup
   * function draws a series of primitives to the canvas. From testing,
   * the actual WebGl shaders compiled by canvaskit vary depending on the
   * device hardware. Thus, warmup functions that might call all relevant
   * WebGL shaders on desktop hardware may not be sufficient for mobile.
   *
   * @param canvas - the canvaskit-canvas to draw on
   * @param positionOffset - an offset to add to the position of each
   * primitive. Different shaders may be compiled depending on if the position
   * was fractional or not. This offset allows us to warmup both cases.
   */
  warmupShadersWithPrimitives(canvas, positionOffset = 0) {
    canvas.save();
    if (positionOffset == 0) {
      canvas.scale(1 / m2c2Globals.canvasScale, 1 / m2c2Globals.canvasScale);
    } else {
      canvas.scale(
        1 / m2c2Globals.canvasScale * 1.13,
        1 / m2c2Globals.canvasScale * 1.13
      );
    }
    if (!this.surface) {
      throw new M2Error("surface is undefined");
    }
    const surfaceWidth = this.surface.width();
    const surfaceHeight = this.surface.height();
    const centerX = Math.round(surfaceWidth / 2) + positionOffset;
    const centerY = Math.round(surfaceHeight / 2) + positionOffset;
    const originX = positionOffset;
    const originY = positionOffset;
    const backgroundPaint = CanvasKitHelpers.makePaint(
      this.canvasKit,
      WebColors.White,
      this.canvasKit.PaintStyle.Fill,
      true
    );
    canvas.drawRect(
      [0, 0, this.surface.width(), this.surface.height()],
      backgroundPaint
    );
    const fillColorPaintNotAntialiased = CanvasKitHelpers.makePaint(
      this.canvasKit,
      WebColors.Black,
      this.canvasKit.PaintStyle.Fill,
      false
    );
    const fillColorPaintAntialiased = CanvasKitHelpers.makePaint(
      this.canvasKit,
      WebColors.Black,
      this.canvasKit.PaintStyle.Fill,
      true
    );
    const strokeColorPaintNotAntialiased = CanvasKitHelpers.makePaint(
      this.canvasKit,
      WebColors.Black,
      this.canvasKit.PaintStyle.Stroke,
      false
    );
    strokeColorPaintNotAntialiased.setStrokeWidth(2);
    const strokeColorPaintAntialiased = CanvasKitHelpers.makePaint(
      this.canvasKit,
      WebColors.Black,
      this.canvasKit.PaintStyle.Stroke,
      true
    );
    strokeColorPaintAntialiased.setStrokeWidth(2);
    canvas.drawCircle(centerX, centerY, 32, fillColorPaintNotAntialiased);
    canvas.drawCircle(centerX, centerY, 32, fillColorPaintAntialiased);
    canvas.drawCircle(centerX, centerY, 32, strokeColorPaintNotAntialiased);
    canvas.drawCircle(centerX, centerY, 32, strokeColorPaintAntialiased);
    const fontManager = this.fontManager;
    const fontNames = this.fontManager.getFontNames();
    if (fontNames.length > 0 && fontManager.fonts[fontNames[0]].status === M2FontStatus.Ready) {
      const typeface = fontManager.getTypeface(fontNames[0]);
      const font = new this.canvasKit.Font(
        typeface,
        16 * m2c2Globals.canvasScale
      );
      canvas.drawText(
        "abc",
        centerX,
        centerY,
        fillColorPaintNotAntialiased,
        font
      );
      canvas.drawText("abc", centerX, centerY, fillColorPaintAntialiased, font);
    }
    const snapshot = this.takeCurrentSceneSnapshot();
    canvas.drawImage(snapshot, originX, originY);
    snapshot.delete();
    canvas.drawRect([originX, originY, 16, 16], fillColorPaintNotAntialiased);
    canvas.drawRect([originX, originY, 16, 16], fillColorPaintAntialiased);
    canvas.drawRect([originX, originY, 16, 16], strokeColorPaintNotAntialiased);
    canvas.drawRect([originX, originY, 16, 16], strokeColorPaintAntialiased);
    canvas.restore();
  }
  /**
   * Warms up the Skia-based shaders underlying canvaskit by drawing
   * m2c2kit nodes.
   *
   * @remarks While warmupShadersWithPrimitives draws a predefined set of
   * primitives, this function initializes and draws all canvaskit objects
   * that have been defined as m2c2kit nodes. This not only is another
   * opportunity for shader warmup, it also does the node initialization.
   *
   * @param canvas - the canvaskit-canvas to draw on
   */
  warmupShadersWithScenes(canvas) {
    [...this.scenes, this.freeNodesScene].forEach((scene) => {
      scene.warmup(canvas);
    });
    const warmedUpImageNames = this.nodes.filter((node) => node.type === M2NodeType.Sprite).map((node) => node.imageName);
    const images = this.imageManager.images;
    if (images) {
      const imageNames = Object.keys(images).filter(
        (name) => name !== "__outgoingSceneSnapshot"
      );
      imageNames.forEach((imageName) => {
        if (!warmedUpImageNames.includes(imageName)) {
          if (images[imageName].status === M2ImageStatus.Ready) {
            const image = images[imageName].canvaskitImage;
            if (!image) {
              throw new M2Error(`image ${imageName} is undefined`);
            }
            canvas.drawImage(image, 0, 0);
          }
        }
      });
    }
    const whitePaint = new this.canvasKit.Paint();
    whitePaint.setColor(this.canvasKit.Color(255, 255, 255, 1));
    if (!this.surface) {
      throw new M2Error("surface is undefined");
    }
    canvas.drawRect(
      [0, 0, this.surface.width(), this.surface.height()],
      whitePaint
    );
  }
  stop() {
    if (this.currentScene) {
      this.currentScene._active = false;
    }
    this.gameStopRequested = true;
    Timer.removeAll();
    this.dispose();
  }
  /**
   * Frees up resources that were allocated to run the game.
   *
   * @remarks This will be done automatically by the m2c2kit library; the
   * end-user must not call this. FOR INTERNAL USE ONLY.
   */
  dispose() {
    this.nodes.filter((e) => e.isDrawable).forEach((e) => e.dispose());
    this.fontManager.dispose();
  }
  initData() {
    this.trialIndex = 0;
    this.data = {
      trials: new Array(),
      scoring: {}
    };
    const trialSchema = this.options.trialSchema ?? {};
    const scoringSchema = this.options.scoringSchema ?? {};
    this.validateSchema(trialSchema);
    this.validateSchema(scoringSchema);
  }
  validateSchema(schema) {
    const variables = Object.entries(schema);
    for (const [variableName, propertySchema] of variables) {
      if (propertySchema.type !== void 0 && !this.propertySchemaDataTypeIsValid(propertySchema.type)) {
        throw new M2Error(
          `invalid schema. variable ${variableName} is type ${propertySchema.type}. type must be number, string, boolean, object, or array`
        );
      }
    }
  }
  propertySchemaDataTypeIsValid(propertySchemaType) {
    const validDataTypes = [
      "string",
      "number",
      "integer",
      "object",
      "array",
      "boolean",
      "null"
    ];
    if (typeof propertySchemaType === "string") {
      return validDataTypes.includes(propertySchemaType);
    }
    let dataTypeIsValid = true;
    if (Array.isArray(propertySchemaType)) {
      propertySchemaType.forEach((element) => {
        if (!validDataTypes.includes(element)) {
          dataTypeIsValid = false;
        }
      });
    } else {
      throw new M2Error(`Invalid data type: ${propertySchemaType}`);
    }
    return dataTypeIsValid;
  }
  getDeviceMetadata() {
    const screen = window.screen;
    if (!screen.orientation) {
      return {
        userAgent: navigator.userAgent,
        devicePixelRatio: window.devicePixelRatio,
        screen: {
          availHeight: screen.availHeight,
          availWidth: screen.availWidth,
          colorDepth: screen.colorDepth,
          height: screen.height,
          pixelDepth: screen.pixelDepth,
          width: screen.width
        },
        webGlRenderer: this.webGlRendererInfo
      };
    }
    return {
      userAgent: navigator.userAgent,
      devicePixelRatio: window.devicePixelRatio,
      screen: {
        availHeight: screen.availHeight,
        availWidth: screen.availWidth,
        colorDepth: screen.colorDepth,
        height: screen.height,
        orientation: {
          type: screen.orientation.type,
          angle: screen.orientation.angle
        },
        pixelDepth: screen.pixelDepth,
        width: screen.width
      },
      webGlRenderer: this.webGlRendererInfo
    };
  }
  /**
   * Adds data to the game's TrialData object.
   *
   * @remarks `variableName` must be previously defined in the
   * {@link TrialSchema} object in {@link GameOptions}. The type of the value
   * must match what was defined in the trial schema, otherwise an error is
   * thrown.
   *
   * @param variableName - variable to be set
   * @param value - value of the variable to set
   */
  addTrialData(variableName, value) {
    if (!this.options.trialSchema) {
      throw new M2Error(
        "no trial schema were provided in GameOptions. cannot add trial data"
      );
    }
    if (this.data.trials.length < this.trialIndex + 1) {
      const emptyTrial = {};
      const variables = Object.entries(this.options.trialSchema);
      for (const [variableName2] of variables) {
        emptyTrial[variableName2] = null;
      }
      this.data.trials.push({
        data_type: "trial",
        document_uuid: Uuid.generate(),
        study_id: this.studyId ?? null,
        study_uuid: this.studyUuid ?? null,
        session_uuid: this.sessionUuid,
        activity_uuid: this.uuid,
        activity_id: this.options.id,
        activity_publish_uuid: this.options.publishUuid,
        activity_version: this.options.version,
        device_timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone ?? "",
        device_timezone_offset_minutes: (/* @__PURE__ */ new Date()).getTimezoneOffset(),
        locale: this.i18n?.locale ?? null,
        ...emptyTrial,
        device_metadata: this.getDeviceMetadata()
      });
    }
    if (!(variableName in this.options.trialSchema)) {
      throw new M2Error(`trial variable ${variableName} not defined in schema`);
    }
    let expectedDataTypes;
    if (Array.isArray(this.options.trialSchema[variableName].type)) {
      expectedDataTypes = this.options.trialSchema[variableName].type;
    } else {
      expectedDataTypes = [
        this.options.trialSchema[variableName].type
      ];
    }
    let providedDataType = typeof value;
    if (providedDataType === "object") {
      if (Object.prototype.toString.call(value) === "[object Array]") {
        providedDataType = "array";
      }
    }
    if (value === void 0 || value === null) {
      providedDataType = "null";
    }
    if (!expectedDataTypes.includes(providedDataType) && !(providedDataType === "number" && Number.isInteger(value) && expectedDataTypes.includes("integer"))) {
      throw new M2Error(
        `type for variable ${variableName} (value: ${value}) is "${providedDataType}". Based on schema for this variable, expected type was "${expectedDataTypes}"`
      );
    }
    this.data.trials[this.trialIndex][variableName] = value;
  }
  /**
   * Adds data to the game's scoring data.
   *
   * @remarks The variable name (or object property names) must be previously
   * defined in the {@link ScoringSchema} object in {@link GameOptions}.
   * The type of the value must match what was defined in the scoring schema,
   * otherwise an error is thrown.
   *
   * @param variableNameOrObject - Either a variable name (string) or an object
   * containing multiple key-value pairs to add all at once.
   * @param value - Value of the variable to set (only used when
   * variableNameOrObject is a variable name string).
   */
  addScoringData(variableNameOrObject, value) {
    if (!this.options.scoringSchema) {
      throw new M2Error(
        "no scoring schema were provided in GameOptions. cannot add scoring data"
      );
    }
    if (Object.keys(this.data.scoring).length === 0) {
      const emptyScoring = {
        data_type: "scoring",
        document_uuid: Uuid.generate(),
        study_id: this.studyId ?? null,
        study_uuid: this.studyUuid ?? null,
        session_uuid: this.sessionUuid,
        activity_uuid: this.uuid,
        activity_id: this.options.id,
        activity_publish_uuid: this.options.publishUuid,
        activity_version: this.options.version,
        device_timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone ?? "",
        device_timezone_offset_minutes: (/* @__PURE__ */ new Date()).getTimezoneOffset(),
        locale: this.i18n?.locale ?? null,
        device_metadata: this.getDeviceMetadata()
      };
      const variables = Object.entries(this.options.scoringSchema);
      for (const [variableName2] of variables) {
        emptyScoring[variableName2] = null;
      }
      this.data.scoring = emptyScoring;
    }
    if (typeof variableNameOrObject === "object") {
      let scoringObject;
      if (Array.isArray(variableNameOrObject)) {
        if (variableNameOrObject.length !== 1) {
          console.warn(
            `Array of objects passed to addScoringData() is length ${variableNameOrObject.length}. This is likely an error in the assessment's code for calculateScores().`
          );
        }
        scoringObject = variableNameOrObject[0];
      } else {
        scoringObject = variableNameOrObject;
      }
      for (const [key, val] of Object.entries(scoringObject)) {
        this.validateAndSetScoringVariable(key, val);
      }
      return;
    }
    const variableName = variableNameOrObject;
    if (value === void 0) {
      throw new M2Error(
        "Value must be provided when adding a single scoring variable"
      );
    }
    this.validateAndSetScoringVariable(variableName, value);
  }
  /**
   * Helper method to validate and set a single scoring variable
   *
   * @param variableName - Name of the variable to set
   * @param value - Value to set
   * @private
   */
  validateAndSetScoringVariable(variableName, value) {
    if (!this.options.scoringSchema) {
      throw new M2Error(
        "no scoring schema were provided in GameOptions. cannot add scoring data"
      );
    }
    if (!(variableName in this.options.scoringSchema)) {
      throw new M2Error(
        `scoring variable ${variableName} not defined in schema`
      );
    }
    let expectedDataTypes;
    if (Array.isArray(this.options.scoringSchema[variableName].type)) {
      expectedDataTypes = this.options.scoringSchema[variableName].type;
    } else {
      expectedDataTypes = [
        this.options.scoringSchema[variableName].type
      ];
    }
    let providedDataType = typeof value;
    if (providedDataType === "object") {
      if (Object.prototype.toString.call(value) === "[object Array]") {
        providedDataType = "array";
      }
    }
    if (value === void 0 || value === null) {
      providedDataType = "null";
    }
    if (!expectedDataTypes.includes(providedDataType) && !(providedDataType === "number" && Number.isInteger(value) && expectedDataTypes.includes("integer"))) {
      throw new M2Error(
        `type for variable ${variableName} (value: ${value}) is "${providedDataType}". Based on schema for this variable, expected type was "${expectedDataTypes}"`
      );
    }
    this.data.scoring[variableName] = value;
  }
  /**
   * Adds custom trial schema to the game's trialSchema object.
   *
   * @param schema - Trial schema to add
   *
   * @remarks This is useful if you want to add custom trial variables.
   * This must be done before Session.start() is called, because
   * Session.start() will call Game.start(), which will initialize
   * the trial schema.
   */
  addTrialSchema(schema) {
    const keys = Object.keys(schema);
    keys.forEach((key) => {
      if (!this.options.trialSchema) {
        throw new M2Error("trial schema is undefined");
      }
      this.options.trialSchema[key] = schema[key];
    });
  }
  /**
   * Sets the value of a variable that will be the same for all trials.
   *
   * @remarks This sets the value of a variable that is the same across
   * all trials ("static"). This is useful for variables that are not
   * part of the trial schema, but that you want to save for each trial in
   * your use case. For example, you might want to save the subject's
   * participant ID for each trial, but this is not part of the trial schema.
   * Rather than modify the source code for the game, you can do the following
   * to ensure that the participant ID is saved for each trial:
   *
   *   game.addTrialSchema(&#123
   *     participant_id: &#123
   *       type: "string",
   *       description: "ID of the participant",
   *     &#125;
   *   &#125;);
   *   game.addStaticTrialData("participant_id", "12345");
   *
   *  When Game.trialComplete() is called, the participant_id variable will
   *  be saved for the trial with the value "12345".
   *
   * @param variableName - variable to be set
   * @param value - value of the variable to set
   */
  addStaticTrialData(variableName, value) {
    if (!this.options.trialSchema) {
      throw new M2Error("trial schema is undefined");
    }
    if (this.options.trialSchema[variableName] === void 0) {
      throw new M2Error(`trial variable ${variableName} not defined in schema`);
    }
    this.staticTrialSchema[variableName] = value;
  }
  /**
   * Should be called when the current trial has completed. It will
   * also increment the trial index.
   *
   * @remarks Calling will trigger the onActivityResults callback function,
   * if one was provided in SessionOptions. This is how the game communicates
   * trial data to the parent session, which can then save or process the data.
   * It is the responsibility of the the game programmer to call this at
   * the appropriate time. It is not triggered automatically.
   */
  trialComplete() {
    if (this.data.trials[this.trialIndex]?.["locale"]) {
      this.data.trials[this.trialIndex]["locale"] = this.i18n?.locale ?? null;
    }
    if (this.data.trials[this.trialIndex]?.["device_metadata"]) {
      this.data.trials[this.trialIndex]["device_metadata"] = this.getDeviceMetadata();
    }
    if (Object.keys(this.staticTrialSchema).length > 0) {
      this.data.trials[this.trialIndex] = {
        ...this.data.trials[this.trialIndex],
        ...this.staticTrialSchema
      };
    }
    this.trialIndex++;
    const resultsEvent = {
      type: M2EventType.ActivityData,
      ...M2c2KitHelpers.createFrameUpdateTimestamps(),
      target: this,
      /** newData is only the trial that recently completed */
      newData: this.data.trials[this.trialIndex - 1],
      newDataSchema: this.makeNewGameDataSchema(),
      /** data is all the data collected so far in the game */
      data: this.data,
      dataSchema: this.makeGameDataSchema(),
      dataType: "Trial",
      activityConfiguration: this.makeGameActivityConfiguration(
        this.options.parameters ?? {}
      ),
      activityConfigurationSchema: this.makeGameActivityConfigurationSchema(
        this.options.parameters ?? {}
      ),
      activityMetrics: this.gameMetrics
    };
    this.raiseActivityEventOnListeners(resultsEvent);
  }
  /**
   * Marks scoring as complete.
   *
   * @remarks This method must be called after the game has finished adding
   * scores using addScoringData(). Calling will trigger the onActivityResults
   * callback function, if one was provided in SessionOptions. This is how the
   * game communicates scoring data to the parent session, which can then save
   * or process the data. It is the responsibility of the the game programmer
   * to call this at the appropriate time. It is not triggered automatically.
   */
  scoringComplete() {
    const resultsEvent = {
      type: M2EventType.ActivityData,
      ...M2c2KitHelpers.createFrameUpdateTimestamps(),
      target: this,
      newData: this.data.scoring,
      newDataSchema: this.makeScoringDataSchema(),
      data: this.data.scoring,
      dataSchema: this.makeScoringDataSchema(),
      dataType: "Scoring",
      activityConfiguration: this.makeGameActivityConfiguration(
        this.options.parameters ?? {}
      ),
      activityConfigurationSchema: this.makeGameActivityConfigurationSchema(
        this.options.parameters ?? {}
      ),
      activityMetrics: this.gameMetrics
    };
    this.raiseActivityEventOnListeners(resultsEvent);
  }
  makeNewGameDataSchema() {
    const newDataSchema = {
      description: `A single trial and metadata from the assessment ${this.name}.`,
      $comment: `Activity identifier: ${this.options.id}, version: ${this.options.version}.`,
      $schema: "https://json-schema.org/draft/2019-09/schema",
      type: "object",
      properties: {
        ...this.automaticTrialSchema,
        ...this.options.trialSchema,
        device_metadata: deviceMetadataSchema
      }
    };
    return newDataSchema;
  }
  makeGameDataSchema() {
    const dataSchema = {
      description: `All trials and metadata from the assessment ${this.name}.`,
      $comment: `Activity identifier: ${this.options.id}, version: ${this.options.version}.`,
      $schema: "https://json-schema.org/draft/2019-09/schema",
      type: "object",
      required: ["trials"],
      properties: {
        trials: {
          type: "array",
          items: { $ref: "#/$defs/trial" },
          description: "All trials from the assessment."
        }
      },
      $defs: {
        trial: {
          type: "object",
          properties: {
            ...this.automaticTrialSchema,
            ...this.options.trialSchema,
            device_metadata: deviceMetadataSchema
          }
        }
      }
    };
    return dataSchema;
  }
  /**
   * GameParameters combines default parameters values and
   * JSON Schema to describe what the parameters are.
   * The next two functions extract GameParameters's two parts
   * (the default values and the schema) so they can be returned
   * separately in the activityData event
   */
  makeGameActivityConfiguration(parameters) {
    const gameParams = JSON.parse(JSON.stringify(parameters));
    const {
      locale,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      fallback_locale,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      missing_localization_color,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      translation,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      ...result
    } = gameParams;
    for (const prop in result) {
      for (const subProp in result[prop]) {
        if (subProp == "default") {
          result[prop] = result[prop][subProp];
        }
      }
    }
    return result;
  }
  makeGameActivityConfigurationSchema(parameters) {
    const gameParams = JSON.parse(JSON.stringify(parameters));
    const {
      locale,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      fallback_locale,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      missing_localization_color,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      translation,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      ...result
    } = gameParams;
    for (const prop in result) {
      if (!("type" in result[prop]) && "value" in result[prop]) {
        const valueType = typeof result[prop]["default"];
        if (valueType !== "bigint" && valueType !== "function" && valueType !== "symbol" && valueType !== "undefined") {
          result[prop].type = valueType;
        }
      }
      for (const subProp in result[prop]) {
        if (subProp == "default") {
          delete result[prop][subProp];
        }
      }
    }
    return {
      description: `activity configuration from the assessment ${this.name}`,
      type: "object",
      properties: result
    };
  }
  makeScoringDataSchema() {
    const scoringDataSchema = {
      description: `Scoring data and metadata from the assessment ${this.name}.`,
      $comment: `Activity identifier: ${this.options.id}, version: ${this.options.version}.`,
      $schema: "https://json-schema.org/draft/2019-09/schema",
      type: "object",
      properties: {
        ...this.automaticScoringSchema,
        ...this.options.scoringSchema,
        device_metadata: deviceMetadataSchema
      }
    };
    return scoringDataSchema;
  }
  /**
   * Should be called when current game has ended successfully.
   *
   * @remarks This will send an ActivityEnd event to any listeners, such as
   * a function provided to Game.onEnd() or a callback defined in
   * SessionOptions.activityCallbacks.onActivityLifecycle. This is how the
   * game can communicate changes in activity state to the parent session.
   * It is the responsibility of the the game programmer to call this at the
   * appropriate time. It is not triggered automatically.
   */
  end() {
    const activityEndEvent = {
      target: this,
      type: M2EventType.ActivityEnd,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    const results = {
      data: this.data,
      dataSchema: this.makeGameDataSchema(),
      dataType: "Trial",
      activityConfiguration: this.makeGameActivityConfiguration(
        this.options.parameters ?? {}
      ),
      activityConfigurationSchema: this.makeGameActivityConfigurationSchema(
        this.options.parameters ?? {}
      ),
      activityMetrics: this.gameMetrics
    };
    this.raiseActivityEventOnListeners(activityEndEvent, results);
  }
  /**
   * Should be called when current game has been canceled by a user action.
   *
   * @remarks This will send an ActivityCancel event to any listeners, such as
   * a function provided to Game.onCancel() or a callback defined in
   * SessionOptions.activityCallbacks.onActivityLifecycle. This is how the
   * game can communicate changes in activity state to the parent session.
   * It is the responsibility of the the game programmer to call this at the
   * appropriate time. It is not triggered automatically.
   */
  cancel() {
    const activityCancelEvent = {
      target: this,
      type: M2EventType.ActivityCancel,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    const results = {
      data: this.data,
      dataSchema: this.makeGameDataSchema(),
      dataType: "Trial",
      activityConfiguration: this.makeGameActivityConfiguration(
        this.options.parameters ?? {}
      ),
      activityConfigurationSchema: this.makeGameActivityConfigurationSchema(
        this.options.parameters ?? {}
      ),
      activityMetrics: this.gameMetrics
    };
    this.raiseActivityEventOnListeners(activityCancelEvent, results);
  }
  setupHtmlCanvases(canvasId, width, height, stretch) {
    m2c2Globals.canvasScale = Math.round(window.devicePixelRatio * 100) / 100;
    let htmlCanvas;
    if (canvasId === void 0) {
      const canvasCollection = document.getElementsByTagName("canvas");
      let canvases = new Array();
      for (let i = 0; i < canvasCollection.length; i++) {
        canvases.push(canvasCollection[i]);
      }
      canvases = canvases.filter(
        (canvas) => !canvas.id.startsWith("m2c2kit-scratch-canvas")
      );
      if (canvases.length === 0) {
        throw new M2Error("no html canvas tag was found in the html");
      }
      const m2c2kitCanvas = canvases.filter(
        (c) => c.id === "m2c2kit-canvas"
      )[0];
      if (m2c2kitCanvas) {
        htmlCanvas = m2c2kitCanvas;
        if (canvases.length > 1) {
          console.log("using canvas with id 'm2c2kit-canvas'");
        }
      } else {
        htmlCanvas = canvasCollection[0];
        if (canvases.length > 1) {
          console.log("using first canvas");
        }
      }
    } else {
      htmlCanvas = document.getElementById(canvasId);
      if (htmlCanvas === void 0) {
        throw new M2Error(
          `could not find canvas HTML element with id "${canvasId}"`
        );
      }
    }
    if (stretch || window.innerWidth < width || window.innerHeight < height) {
      const requestedAspectRatio = height / width;
      const actualAspectRatio = window.innerHeight / window.innerWidth;
      if (actualAspectRatio < requestedAspectRatio) {
        m2c2Globals.rootScale = window.innerHeight / height;
      } else {
        m2c2Globals.rootScale = window.innerWidth / width;
      }
    }
    htmlCanvas.style.width = m2c2Globals.rootScale * width + "px";
    htmlCanvas.style.height = m2c2Globals.rootScale * height + "px";
    htmlCanvas.width = m2c2Globals.rootScale * width * m2c2Globals.canvasScale;
    htmlCanvas.height = m2c2Globals.rootScale * height * m2c2Globals.canvasScale;
    this.htmlCanvas = htmlCanvas;
    this.canvasCssWidth = width;
    this.canvasCssHeight = height;
    m2c2Globals.canvasCssWidth = width;
    m2c2Globals.canvasCssHeight = height;
  }
  setupCanvasKitSurface() {
    if (this.htmlCanvas === void 0) {
      throw new M2Error("main html canvas is undefined");
    }
    window.logWebGl = this.options.logWebGl;
    this.interceptWebGlCalls();
    try {
      this.webGlRendererInfo = WebGlInfo.getRendererString();
    } catch {
      this.webGlRendererInfo = "err";
      WebGlInfo.dispose();
    }
    const surface = this.canvasKit.MakeWebGLCanvasSurface(this.htmlCanvas);
    if (surface === null) {
      throw new M2Error(
        `could not make CanvasKit surface from canvas HTML element`
      );
    }
    this.surface = surface;
    console.log(
      `\u26AA CanvasKit surface is backed by ${this.surface.reportBackendTypeIsGPU() ? "GPU" : "CPU"}`
    );
    this.surface.getCanvas().scale(m2c2Globals.canvasScale, m2c2Globals.canvasScale);
  }
  interceptWebGlCalls() {
    if (!this.htmlCanvas.__proto__.m2c2ModifiedGetContext) {
      this.htmlCanvas.__proto__.m2c2ModifiedGetContext = true;
      const getContextOriginal = this.htmlCanvas.__proto__.getContext;
      this.htmlCanvas.__proto__.getContext = function(...args) {
        if (window.logWebGl) {
          console.log(
            `\u{1F53C} getContext(${args.map((a) => a.toString()).join(", ")})`
          );
        }
        const context = getContextOriginal.apply(this, [...args]);
        if (context.__proto__.compileShader) {
          if (!context.__proto__.m2c2ModifiedCompileShader) {
            context.__proto__.m2c2ModifiedCompileShader = true;
            const compileShaderOriginal = context.__proto__.compileShader;
            context.__proto__.compileShader = function(...args2) {
              if (window.logWebGl) {
                const shader = args2[0];
                const source = context.getShaderSource(shader);
                console.log(`\u{1F53C} compileShader():`);
                console.log(source);
              }
              return compileShaderOriginal.apply(this, [...args2]);
            };
          }
        }
        return context;
      };
    }
  }
  setupFpsFont() {
    this.fpsTextFont = new this.canvasKit.Font(
      null,
      Constants.FPS_DISPLAY_TEXT_FONT_SIZE * m2c2Globals.canvasScale
    );
    this.fpsTextPaint = new this.canvasKit.Paint();
    this.fpsTextPaint.setColor(
      this.canvasKit.Color(
        Constants.FPS_DISPLAY_TEXT_COLOR[0],
        Constants.FPS_DISPLAY_TEXT_COLOR[1],
        Constants.FPS_DISPLAY_TEXT_COLOR[2],
        Constants.FPS_DISPLAY_TEXT_COLOR[3]
      )
    );
    this.fpsTextPaint.setAntiAlias(true);
  }
  setupCanvasDomEventHandlers() {
    if (this.htmlCanvas === void 0) {
      throw new M2Error("main html canvas is undefined");
    }
    this.htmlCanvas.addEventListener(
      "pointerdown",
      this.htmlCanvasPointerDownHandler.bind(this)
    );
    this.htmlCanvas.addEventListener(
      "pointerup",
      this.htmlCanvasPointerUpHandler.bind(this)
    );
    this.htmlCanvas.addEventListener(
      "pointermove",
      this.htmlCanvasPointerMoveHandler.bind(this)
    );
    this.htmlCanvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
    });
    this.htmlCanvas.addEventListener(
      "pointerleave",
      this.htmlCanvasPointerLeaveHandler.bind(this)
    );
    document.addEventListener(
      "keydown",
      this.documentKeyDownHandler.bind(this)
    );
    document.addEventListener("keyup", this.documentKeyUpHandler.bind(this));
  }
  loop(canvas) {
    if (!this.surface) {
      throw new M2Error("surface is undefined");
    }
    if (this.warmupFunctionQueue.length > 0) {
      const warmup = this.warmupFunctionQueue.shift();
      warmup?.warmupFunction.call(this, canvas, warmup.positionOffset);
      this.surface.requestAnimationFrame(this.loop.bind(this));
      return;
    }
    if (!this.warmupFinished) {
      this.warmupFinished = true;
      const gameWarmupEndEvent = {
        target: this,
        type: M2EventType.GameWarmupEnd,
        ...M2c2KitHelpers.createFrameUpdateTimestamps()
      };
      this.raiseActivityEventOnListeners(gameWarmupEndEvent);
      this.surface.requestAnimationFrame(this.loop.bind(this));
      return;
    }
    if (this.soundManager.hasSoundsToDecode() && navigator.userActivation.hasBeenActive) {
      this.soundManager.decodeFetchedSounds();
    }
    if (this.gameStopRequested) {
      this.surface.deleteLater();
      return;
    }
    this.animationFramesRequested++;
    if (!this.limitFps || this.animationFramesRequested % Math.round(60 / Constants.LIMITED_FPS_RATE) === 0) {
      if (this.currentScene === void 0 && this.incomingSceneTransitions.length === 0 && this.eventStore.mode !== EventStoreMode.Replay) {
        throw new M2Error(
          "Can not run game without a current or incoming scene"
        );
      }
      this.updateGameTime();
      if (this.eventStore.mode === EventStoreMode.Replay) {
        const events = this.eventStore.dequeueEvents(Timer.now());
        this.eventMaterializer.materialize(events);
        if (this.eventStore.eventQueueLength === 0 && !this.replayEventsButtonEnabled) {
          this.setReplayEventsButtonEnabled(true);
          this.setStopReplayButtonEnabled(false);
        }
      }
      this.handleIncomingSceneTransitions(this.incomingSceneTransitions);
      this.update();
      this.draw(canvas);
      while (this.snapshots.length > 0) {
        this.snapshots.shift()?.delete();
      }
      this.snapshots.push(this.takeCurrentSceneSnapshot());
      this.freeNodesScene.draw(canvas);
      if (this.pendingScreenshot) {
        this.handlePendingScreenshot(this.pendingScreenshot);
        this.pendingScreenshot = void 0;
      }
    }
    this.priorUpdateTime = m2c2Globals.now;
    this.surface.requestAnimationFrame(this.loop.bind(this));
  }
  updateGameTime() {
    if (!this.options.timeStepping) {
      m2c2Globals.now = performance.now();
    } else {
      m2c2Globals.now = this.steppingNow;
    }
    if (this.priorUpdateTime) {
      m2c2Globals.deltaTime = m2c2Globals.now - this.priorUpdateTime;
    } else {
      m2c2Globals.deltaTime = 0;
    }
  }
  handleIncomingSceneTransitions(incomingSceneTransitions) {
    if (incomingSceneTransitions.length === 0) {
      return;
    }
    if (this.snapshots.length > 0 || incomingSceneTransitions[0].transition.type === TransitionType.None) {
      const incomingSceneTransition = incomingSceneTransitions.shift();
      if (incomingSceneTransition === void 0) {
        throw new M2Error("no incoming scene transition");
      }
      const incomingScene = incomingSceneTransition.scene;
      const transition = incomingSceneTransition.transition;
      if (transition.type === TransitionType.None) {
        if (this.currentScene) {
          this.currentScene._active = false;
        }
        this.currentScene = incomingScene;
        this.currentScene._active = true;
        this.raiseSceneEvent(incomingScene, "SceneSetup");
        this.raiseSceneEvent(incomingScene, "SceneAppear");
        return;
      }
      this.currentSceneSnapshot = this.snapshots.shift();
      if (!this.currentSceneSnapshot) {
        throw new M2Error("No snapshot available for outgoing scene");
      }
      const outgoingScene = this.createOutgoingScene(this.currentSceneSnapshot);
      outgoingScene._active = true;
      if (this.currentScene) {
        this.currentScene._active = false;
      }
      this.currentScene = incomingScene;
      this.currentScene._active = true;
      this.raiseSceneEvent(incomingScene, "SceneSetup");
      this.animateSceneTransition(incomingScene, transition, outgoingScene);
    }
  }
  /**
   * Creates a scene that has a screen shot of the current scene.
   *
   * @param outgoingSceneImage - an image of the current scene
   * @returns - the scene with the screen shot
   */
  createOutgoingScene(outgoingSceneImage) {
    const outgoingScene = new Scene({ name: Constants.OUTGOING_SCENE_NAME });
    outgoingScene.size.width = this.canvasCssWidth;
    outgoingScene.size.height = this.canvasCssHeight;
    this.addScene(outgoingScene);
    const image = {
      imageName: Constants.OUTGOING_SCENE_IMAGE_NAME,
      canvaskitImage: outgoingSceneImage,
      width: this.canvasCssWidth,
      height: this.canvasCssHeight,
      status: M2ImageStatus.Ready,
      localize: false,
      isFallback: false
    };
    this.imageManager.addImage(image);
    const spr = new Sprite({
      name: Constants.OUTGOING_SCENE_SPRITE_NAME,
      imageName: Constants.OUTGOING_SCENE_IMAGE_NAME,
      position: {
        x: this.canvasCssWidth / m2c2Globals.rootScale / 2,
        y: this.canvasCssHeight / m2c2Globals.rootScale / 2
      }
    });
    spr.scale = 1 / m2c2Globals.rootScale;
    outgoingScene.addChild(spr);
    return outgoingScene;
  }
  /**
   * Registers a plugin with the game.
   *
   * @remarks Upon registration, the plugin's optional asynchronous
   * `initialize()` method will be called.
   *
   * @param plugin - Plugin to register
   */
  async registerPlugin(plugin) {
    if (plugin.type !== ActivityType.Game) {
      throw new M2Error(
        `registerPlugin(): plugin ${plugin.id} is not a game plugin. It is a ${plugin.type} plugin.`
      );
    }
    if (this.plugins.includes(plugin) || this.plugins.map((p) => p.id).includes(plugin.id)) {
      throw new M2Error(
        `registerPlugin(): plugin ${plugin.id} already registered.`
      );
    }
    this.plugins.push(plugin);
    if (plugin.initialize) {
      await plugin.initialize(this);
    }
  }
  /**
   * Updates active scenes and executes plugins.
   *
   */
  update() {
    this.executeBeforeUpdatePlugins();
    this.updateScenes();
    this.executeAfterUpdatePlugins();
  }
  /**
   * Updates all active scenes and their children.
   */
  updateScenes() {
    this.scenes.filter((scene) => scene._active).forEach((scene) => scene.update());
    this.freeNodesScene.update();
  }
  /**
   * Executes all active plugins before scenes are updated.
   */
  executeBeforeUpdatePlugins() {
    this.plugins.filter(
      (p) => typeof p.beforeUpdate === "function" && p.disabled !== true
    ).forEach((p) => {
      if (p.beforeUpdate) {
        p.beforeUpdate(this, m2c2Globals.deltaTime);
      }
    });
  }
  /**
   * Executes all active plugins after scenes have been updated.
   */
  executeAfterUpdatePlugins() {
    this.plugins.filter((p) => typeof p.afterUpdate === "function" && p.disabled !== true).forEach((p) => {
      if (p.afterUpdate) {
        p.afterUpdate(this, m2c2Globals.deltaTime);
      }
    });
  }
  draw(canvas) {
    this.scenes.filter((scene) => scene._active).forEach((scene) => scene.draw(canvas));
    this.drawnFrames++;
    this.calculateFps();
    if (this.showFps) {
      this.drawFps(canvas);
    }
  }
  calculateFps() {
    if (this.lastFpsUpdate === 0) {
      this.lastFpsUpdate = m2c2Globals.now;
      this.nextFpsUpdate = m2c2Globals.now + Constants.FPS_DISPLAY_UPDATE_INTERVAL;
    } else {
      if (m2c2Globals.now >= this.nextFpsUpdate) {
        this.fpsRate = this.drawnFrames / ((m2c2Globals.now - this.lastFpsUpdate) / 1e3);
        this.drawnFrames = 0;
        this.lastFpsUpdate = m2c2Globals.now;
        this.nextFpsUpdate = m2c2Globals.now + Constants.FPS_DISPLAY_UPDATE_INTERVAL;
        if (this.gameMetrics.length < this.maximumRecordedActivityMetrics && this.fpsRate < this.fpsMetricReportThreshold) {
          this.gameMetrics.push({
            fps: Number.parseFloat(this.fpsRate.toFixed(2)),
            fps_interval_ms: Constants.FPS_DISPLAY_UPDATE_INTERVAL,
            fps_report_threshold: this.fpsMetricReportThreshold,
            activity_type: ActivityType.Game,
            activity_uuid: this.uuid,
            iso8601_timestamp: (/* @__PURE__ */ new Date()).toISOString()
          });
        }
      }
    }
  }
  takeCurrentSceneSnapshot() {
    if (this.surface === void 0) {
      throw new M2Error("CanvasKit surface is undefined");
    }
    return this.surface.makeImageSnapshot();
  }
  handlePendingScreenshot(pendingScreenshot) {
    if (!this.surface) {
      throw new M2Error("no surface");
    }
    let image;
    if (pendingScreenshot.rect.length == 4) {
      const sx = pendingScreenshot.rect[0] * m2c2Globals.canvasScale;
      const sy = pendingScreenshot.rect[1] * m2c2Globals.canvasScale;
      const sw = pendingScreenshot.rect[2] * m2c2Globals.canvasScale;
      const sh = pendingScreenshot.rect[3] * m2c2Globals.canvasScale;
      const scaledRect = [sx, sy, sx + sw, sy + sh];
      image = this.surface.makeImageSnapshot(scaledRect);
    } else {
      image = this.surface.makeImageSnapshot();
    }
    const imageAsPngBytes = image.encodeToBytes();
    pendingScreenshot.promiseResolve(imageAsPngBytes);
  }
  /**
   * Takes screenshot of canvas
   *
   * @remarks Coordinates should be provided unscaled; that is, the method
   * will handle any scaling that happened due to device pixel ratios
   * not equal to 1. This returns a promise because the screenshot request
   * must be queued and completed once a draw cycle has completed. See
   * the loop() method.
   *
   * @param sx - Upper left coordinate of screenshot
   * @param sy - Upper right coordinate of screenshot
   * @param sw - width of area to screenshot
   * @param sh - height of area to screenshot
   * @returns Promise of Uint8Array of image data
   */
  takeScreenshot(sx, sy, sw, sh) {
    if (!this.surface) {
      throw new M2Error("no canvaskit surface. unable to take screenshot.");
    }
    const missingParametersCount = [sx, sy, sw, sh].map((x) => x ? 0 : 1).reduce((a, b) => a + b);
    return new Promise((resolve, reject) => {
      switch (missingParametersCount) {
        case 0: {
          if (!sx || !sy || !sw || !sh) {
            reject("missing values in arguments for takeScreenshot()");
            return;
          }
          this.pendingScreenshot = {
            rect: [sx, sy, sw, sh],
            promiseResolve: resolve
          };
          break;
        }
        case 4: {
          this.pendingScreenshot = {
            rect: [],
            promiseResolve: resolve
          };
          break;
        }
        default: {
          reject(
            "Exactly 0 or 4 arguments must be supplied to takeScreenshot()"
          );
        }
      }
    });
  }
  animateSceneTransition(incomingScene, transition, outgoingScene) {
    const duration = transition.duration;
    incomingScene._transitioning = true;
    outgoingScene._transitioning = true;
    switch (transition.type) {
      case TransitionType.Slide: {
        const direction = transition.direction;
        switch (direction) {
          case TransitionDirection.Left:
            incomingScene.position.x = incomingScene.size.width;
            incomingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: 0, y: 0 },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    incomingScene._transitioning = false;
                    this.raiseSceneEvent(incomingScene, "SceneAppear");
                    this.removeScene(Constants.OUTGOING_SCENE_NAME);
                  },
                  runDuringTransition: true
                })
              ])
            );
            outgoingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: -outgoingScene.size.width, y: 0 },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    outgoingScene._active = false;
                    outgoingScene._transitioning = false;
                    if (this.currentSceneSnapshot) {
                      this.currentSceneSnapshot.delete();
                    }
                  },
                  runDuringTransition: true
                })
              ])
            );
            break;
          case TransitionDirection.Right:
            incomingScene.position.x = -incomingScene.size.width;
            incomingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: 0, y: 0 },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    incomingScene._transitioning = false;
                    this.raiseSceneEvent(incomingScene, "SceneAppear");
                    this.removeScene(Constants.OUTGOING_SCENE_NAME);
                  },
                  runDuringTransition: true
                })
              ])
            );
            outgoingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: outgoingScene.size.width, y: 0 },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    outgoingScene._active = false;
                    outgoingScene._transitioning = false;
                    if (this.currentSceneSnapshot) {
                      this.currentSceneSnapshot.delete();
                    }
                  },
                  runDuringTransition: true
                })
              ])
            );
            break;
          case TransitionDirection.Up:
            incomingScene.position.y = incomingScene.size.height;
            incomingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: 0, y: 0 },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    incomingScene._transitioning = false;
                    this.raiseSceneEvent(incomingScene, "SceneAppear");
                    this.removeScene(Constants.OUTGOING_SCENE_NAME);
                  },
                  runDuringTransition: true
                })
              ])
            );
            outgoingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: 0, y: -outgoingScene.size.height },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    outgoingScene._active = false;
                    outgoingScene._transitioning = false;
                    if (this.currentSceneSnapshot) {
                      this.currentSceneSnapshot.delete();
                    }
                  },
                  runDuringTransition: true
                })
              ])
            );
            break;
          case TransitionDirection.Down:
            incomingScene.position.y = -incomingScene.size.height;
            incomingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: 0, y: 0 },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    incomingScene._transitioning = false;
                    this.raiseSceneEvent(incomingScene, "SceneAppear");
                    this.removeScene(Constants.OUTGOING_SCENE_NAME);
                  },
                  runDuringTransition: true
                })
              ])
            );
            outgoingScene.run(
              Action.sequence([
                Action.move({
                  point: { x: 0, y: outgoingScene.size.height },
                  duration,
                  easing: transition.easing,
                  runDuringTransition: true
                }),
                Action.custom({
                  callback: () => {
                    outgoingScene._active = false;
                    outgoingScene._transitioning = false;
                    if (this.currentSceneSnapshot) {
                      this.currentSceneSnapshot.delete();
                    }
                  },
                  runDuringTransition: true
                })
              ])
            );
            break;
          default:
            throw new M2Error("unknown transition direction");
        }
        break;
      }
      default:
        throw new M2Error("unknown transition type");
    }
  }
  drawFps(canvas) {
    canvas.save();
    const drawScale = m2c2Globals.canvasScale;
    canvas.scale(1 / drawScale, 1 / drawScale);
    if (!this.fpsTextFont || !this.fpsTextPaint) {
      throw new M2Error("fps font or paint is undefined");
    }
    canvas.drawText(
      "FPS: " + this.fpsRate.toFixed(2),
      0,
      0 + Constants.FPS_DISPLAY_TEXT_FONT_SIZE * drawScale,
      this.fpsTextPaint,
      this.fpsTextFont
    );
    canvas.restore();
  }
  /**
   * Creates an event listener for a node based on the node name
   *
   * @remarks Typically, event listeners will be created using a method specific to the event, such as onTapDown(). This alternative allows creation with node name.
   *
   * @param type - the type of event to listen for, e.g., "tapDown"
   * @param nodeName - the node name for which an event will be listened
   * @param callback - the callback to be invoked when the event occurs
   * @param callbackOptions
   */
  createEventListener(type, nodeName, callback, callbackOptions) {
    const nodes = this.nodes.filter((node2) => node2.name === nodeName);
    if (nodes.length > 1) {
      console.warn(
        `warning: createEventListener() found more than one node with name ${nodeName}. Event listener will be attached to first node found. All nodes that receive tap events should be uniquely named`
      );
    }
    const node = nodes.filter((node2) => node2.name === nodeName).find(Boolean);
    if (node === void 0) {
      throw new M2Error(
        `could not create event listener. node with name ${nodeName} could not be found in the game node tree`
      );
    }
    if (!Object.values(M2EventType).includes(type)) {
      throw new M2Error(
        `game ${this.id}: could not create event listener. event type ${type} is not known`
      );
    }
    node.addEventListener(type, callback, callbackOptions);
  }
  /**
   * Returns array of all nodes that have been added to the game object.
   */
  get nodes() {
    function getChildNodesRecursive(node, nodes2) {
      nodes2.push(node);
      node.children.forEach((child) => getChildNodesRecursive(child, nodes2));
    }
    const nodes = new Array();
    [...this.scenes, this.freeNodesScene].forEach(
      (scene) => getChildNodesRecursive(scene, nodes)
    );
    return nodes;
  }
  /**
   * @deprecated use Game.nodes instead
   */
  get entities() {
    return this.nodes;
  }
  /**
   * Receives callback from DOM PointerDown event
   *
   * @param domPointerEvent - PointerEvent from the DOM
   * @returns
   */
  htmlCanvasPointerDownHandler(domPointerEvent) {
    domPointerEvent.preventDefault();
    const scene = this.currentScene;
    if (!scene || !this.sceneCanReceiveUserInteraction(scene)) {
      return;
    }
    if (!this.htmlCanvas) {
      throw new M2Error("main html canvas is undefined");
    }
    const domPointerDownEvent = {
      type: "DomPointerDown",
      target: this.htmlCanvas,
      x: domPointerEvent.offsetX / m2c2Globals.rootScale,
      y: domPointerEvent.offsetY / m2c2Globals.rootScale,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.eventStore.addEvent(domPointerDownEvent);
    const nodeEvent = {
      target: scene,
      type: M2EventType.PointerDown,
      handled: false,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.processDomPointerDown(this.freeNodesScene, nodeEvent, domPointerEvent);
    this.processDomPointerDown(scene, nodeEvent, domPointerEvent);
  }
  htmlCanvasPointerUpHandler(domPointerEvent) {
    domPointerEvent.preventDefault();
    const scene = this.currentScene;
    if (!scene || !this.sceneCanReceiveUserInteraction(scene)) {
      return;
    }
    const nodeEvent = {
      target: scene,
      type: M2EventType.PointerUp,
      handled: false,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.processDomPointerUp(this.freeNodesScene, nodeEvent, domPointerEvent);
    this.processDomPointerUp(scene, nodeEvent, domPointerEvent);
  }
  htmlCanvasPointerMoveHandler(domPointerEvent) {
    domPointerEvent.preventDefault();
    const scene = this.currentScene;
    if (!scene || !this.sceneCanReceiveUserInteraction(scene)) {
      return;
    }
    const nodeEvent = {
      target: scene,
      type: M2EventType.PointerMove,
      handled: false,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.processDomPointerMove(this.freeNodesScene, nodeEvent, domPointerEvent);
    this.processDomPointerMove(scene, nodeEvent, domPointerEvent);
  }
  htmlCanvasPointerLeaveHandler(domPointerEvent) {
    if (!this.currentScene) {
      return;
    }
    domPointerEvent.preventDefault();
    const scene = this.currentScene;
    if (!scene || !this.sceneCanReceiveUserInteraction(scene)) {
      return;
    }
    const nodeEvent = {
      target: scene,
      type: M2EventType.PointerLeave,
      handled: false,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.processDomPointerLeave(
      this.freeNodesScene,
      nodeEvent,
      domPointerEvent
    );
    this.processDomPointerLeave(scene, nodeEvent, domPointerEvent);
  }
  documentKeyDownHandler(domKeyboardEvent) {
    const scene = this.currentScene;
    if (!scene || !this.sceneCanReceiveUserInteraction(scene)) {
      return;
    }
    const nodeEvent = {
      target: scene,
      type: M2EventType.KeyDown,
      handled: false,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.raiseEventOnListeningNodes(
      this.freeNodesScene,
      nodeEvent,
      domKeyboardEvent
    );
    this.raiseEventOnListeningNodes(
      scene,
      nodeEvent,
      domKeyboardEvent
    );
  }
  documentKeyUpHandler(domKeyboardEvent) {
    const scene = this.currentScene;
    if (!scene || !this.sceneCanReceiveUserInteraction(scene)) {
      return;
    }
    const nodeEvent = {
      target: scene,
      type: M2EventType.KeyUp,
      handled: false,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.raiseEventOnListeningNodes(
      this.freeNodesScene,
      nodeEvent,
      domKeyboardEvent
    );
    this.raiseEventOnListeningNodes(
      scene,
      nodeEvent,
      domKeyboardEvent
    );
  }
  /**
   * Determines if/how m2c2kit nodes respond to the DOM PointerDown event
   *
   * @param node - node that might be affected by the DOM PointerDown event
   * @param nodeEvent
   * @param domPointerEvent
   */
  processDomPointerDown(node, nodeEvent, domPointerEvent) {
    if (nodeEvent.handled) {
      return;
    }
    if (node.isUserInteractionEnabled && this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      node.pressed = true;
      node.pressedAndWithinHitArea = true;
      node.pressedInitialPointerOffset = {
        x: domPointerEvent.offsetX,
        y: domPointerEvent.offsetY
      };
      this.raiseM2PointerDownEvent(node, nodeEvent, domPointerEvent);
      this.raiseTapDownEvent(node, nodeEvent, domPointerEvent);
    }
    if (node.children) {
      node.children.filter((node2) => !node2.hidden).filter((node2) => node2.isDrawable).sort((a, b) => {
        const zDiff = b.zPosition - a.zPosition;
        if (zDiff !== 0) {
          return zDiff;
        }
        return node.children.indexOf(b) - node.children.indexOf(a);
      }).forEach(
        (node2) => this.processDomPointerDown(node2, nodeEvent, domPointerEvent)
      );
    }
  }
  processDomPointerUp(node, nodeEvent, domPointerEvent) {
    if (nodeEvent.handled) {
      return;
    }
    if (node.dragging) {
      node.dragging = false;
      node.pressed = false;
      node.pressedAndWithinHitArea = false;
      this.raiseM2DragEndEvent(node, nodeEvent, domPointerEvent);
      return;
    }
    if (node.isUserInteractionEnabled && node.pressed && node.pressedAndWithinHitArea) {
      node.pressed = false;
      node.pressedAndWithinHitArea = false;
      this.raiseTapUpEvent(node, nodeEvent, domPointerEvent);
      this.raiseTapUpAny(node, nodeEvent, domPointerEvent);
      this.raiseM2PointerUpEvent(node, nodeEvent, domPointerEvent);
    } else if (node.isUserInteractionEnabled && node.pressed && node.pressedAndWithinHitArea == false) {
      node.pressed = false;
      node.pressedAndWithinHitArea = false;
      this.raiseTapUpAny(node, nodeEvent, domPointerEvent);
    } else if (node.isUserInteractionEnabled && this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      node.pressed = false;
      node.pressedAndWithinHitArea = false;
      this.raiseM2PointerUpEvent(node, nodeEvent, domPointerEvent);
    }
    if (node.children) {
      node.children.filter((node2) => !node2.hidden).filter((node2) => node2.isDrawable).sort((a, b) => {
        const zDiff = b.zPosition - a.zPosition;
        if (zDiff !== 0) {
          return zDiff;
        }
        return node.children.indexOf(b) - node.children.indexOf(a);
      }).forEach(
        (node2) => this.processDomPointerUp(node2, nodeEvent, domPointerEvent)
      );
    }
  }
  processDomPointerMove(node, nodeEvent, domPointerEvent) {
    if (nodeEvent.handled) {
      return;
    }
    if (node.isUserInteractionEnabled && node.draggable && node.pressed) {
      let firstMoveOfDrag = false;
      let deltaX;
      let deltaY;
      if (node.dragging === false) {
        node.dragging = true;
        firstMoveOfDrag = true;
        deltaX = domPointerEvent.offsetX - node.pressedInitialPointerOffset.x;
        deltaY = domPointerEvent.offsetY - node.pressedInitialPointerOffset.y;
      } else {
        deltaX = domPointerEvent.offsetX - node.draggingLastPointerOffset.x;
        deltaY = domPointerEvent.offsetY - node.draggingLastPointerOffset.y;
      }
      node.position.x += deltaX;
      node.position.y += deltaY;
      node.draggingLastPointerOffset = {
        x: domPointerEvent.offsetX,
        y: domPointerEvent.offsetY
      };
      if (firstMoveOfDrag) {
        this.raiseM2DragStartEvent(node, nodeEvent, domPointerEvent);
      } else {
        this.raiseM2DragEvent(node, nodeEvent, domPointerEvent);
      }
      return;
    }
    if (node.isUserInteractionEnabled && node.pressed && node.pressedAndWithinHitArea && !this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      node.pressedAndWithinHitArea = false;
      this.raiseTapLeaveEvent(node, nodeEvent, domPointerEvent);
    }
    if (node.isUserInteractionEnabled && this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      this.raiseM2PointerMoveEvent(node, nodeEvent, domPointerEvent);
      node.withinHitArea = true;
    }
    if (node.isUserInteractionEnabled && node.withinHitArea && !this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      node.withinHitArea = false;
      this.raiseM2PointerLeaveEvent(node, nodeEvent, domPointerEvent);
    }
    if (node.children) {
      node.children.filter((node2) => !node2.hidden).filter((node2) => node2.isDrawable).sort((a, b) => {
        const zDiff = b.zPosition - a.zPosition;
        if (zDiff !== 0) {
          return zDiff;
        }
        return node.children.indexOf(b) - node.children.indexOf(a);
      }).forEach(
        (node2) => this.processDomPointerMove(node2, nodeEvent, domPointerEvent)
      );
    }
  }
  processDomPointerLeave(node, nodeEvent, domPointerEvent) {
    if (nodeEvent.handled) {
      return;
    }
    if (node.dragging) {
      const m2Event = {
        target: node,
        type: M2EventType.DragEnd,
        handled: false,
        ...M2c2KitHelpers.createTimestamps()
      };
      node.dragging = false;
      node.pressed = false;
      node.pressedAndWithinHitArea = false;
      this.raiseM2DragEndEvent(node, m2Event, domPointerEvent);
      return;
    }
    if (node.isUserInteractionEnabled && node.pressed && node.pressedAndWithinHitArea && !this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      node.pressedAndWithinHitArea = false;
      this.raiseTapLeaveEvent(node, nodeEvent, domPointerEvent);
    }
    if (node.isUserInteractionEnabled && node.withinHitArea && !this.IsCanvasPointWithinNodeBounds(
      node,
      domPointerEvent.offsetX,
      domPointerEvent.offsetY
    )) {
      node.withinHitArea = false;
      this.raiseM2PointerLeaveEvent(node, nodeEvent, domPointerEvent);
    }
    if (node.children) {
      node.children.filter((node2) => !node2.hidden).filter((node2) => node2.isDrawable).sort((a, b) => {
        const zDiff = b.zPosition - a.zPosition;
        if (zDiff !== 0) {
          return zDiff;
        }
        return node.children.indexOf(b) - node.children.indexOf(a);
      }).forEach(
        (node2) => this.processDomPointerLeave(node2, nodeEvent, domPointerEvent)
      );
    }
  }
  raiseM2PointerDownEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.PointerDown;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseTapDownEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.TapDown;
    this.raiseEventOnListeningNodes(node, nodeEvent, domPointerEvent);
  }
  raiseTapLeaveEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.TapLeave;
    this.raiseEventOnListeningNodes(node, nodeEvent, domPointerEvent);
  }
  raiseM2PointerUpEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.PointerUp;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseTapUpEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.TapUp;
    this.raiseEventOnListeningNodes(node, nodeEvent, domPointerEvent);
  }
  raiseTapUpAny(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.TapUpAny;
    this.raiseEventOnListeningNodes(node, nodeEvent, domPointerEvent);
  }
  raiseM2PointerMoveEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.PointerMove;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseM2PointerLeaveEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.PointerLeave;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseM2DragStartEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.DragStart;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseM2DragEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.Drag;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseM2DragEndEvent(node, nodeEvent, domPointerEvent) {
    nodeEvent.target = node;
    nodeEvent.type = M2EventType.DragEnd;
    this.raiseEventOnListeningNodes(
      node,
      nodeEvent,
      domPointerEvent
    );
  }
  raiseSceneEvent(scene, eventType) {
    const event = {
      target: scene,
      type: eventType,
      ...M2c2KitHelpers.createFrameUpdateTimestamps()
    };
    scene.eventListeners.filter((listener) => listener.type === eventType).forEach((listener) => listener.callback(event));
  }
  calculatePointWithinNodeFromDomPointerEvent(node, domPointerEvent) {
    let width = node.size.width;
    let height = node.size.height;
    if (node.type === M2NodeType.Shape && node.shapeType === ShapeType.Circle) {
      const radius = node.circleOfRadius;
      if (!radius) {
        throw "circleOfRadius is undefined";
      }
      width = radius * 2;
      height = radius * 2;
    }
    let x = domPointerEvent.offsetX;
    let y = domPointerEvent.offsetY;
    const bb = M2c2KitHelpers.calculateNodeAbsoluteBoundingBox(node);
    if (M2c2KitHelpers.nodeOrAncestorHasBeenRotated(node)) {
      const transforms = M2c2KitHelpers.calculateRotationTransforms(
        node
      );
      transforms.forEach((transform) => {
        const rotatedPoint = M2c2KitHelpers.rotatePoint(
          { x, y },
          // take negative because we are applying the reverse rotation
          -transform.radians,
          transform.center
        );
        x = rotatedPoint.x;
        y = rotatedPoint.y;
      });
    }
    const relativeX = (x - bb.xMin) / (bb.xMax - bb.xMin) * width;
    const relativeY = (y - bb.yMin) / (bb.yMax - bb.yMin) * height;
    return { x: relativeX, y: relativeY };
  }
  /**
   * Executes a callback when the game starts.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onStart(callback, options) {
    this.addEventListener(M2EventType.ActivityStart, callback, options);
  }
  /**
   * Executes a callback when the game is canceled.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onCancel(callback, options) {
    this.addEventListener(M2EventType.ActivityCancel, callback, options);
  }
  /**
   * Executes a callback when the game ends.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onEnd(callback, options) {
    this.addEventListener(M2EventType.ActivityEnd, callback, options);
  }
  /**
   * Executes a callback when the game generates data.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onData(callback, options) {
    this.addEventListener(M2EventType.ActivityData, callback, options);
  }
  /**
   * Executes a callback when the game begins its warmup.
   *
   * @internal For m2c2kit library use only
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onWarmupStart(callback, options) {
    this.addEventListener(M2EventType.GameWarmupStart, callback, options);
  }
  /**
   * Executes a callback when the game ends its warmup.
   *
   * @internal For m2c2kit library use only
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onWarmupEnd(callback, options) {
    this.addEventListener(M2EventType.GameWarmupEnd, callback, options);
  }
  addEventListener(type, callback, options) {
    const eventListener = {
      type,
      activityUuid: this.uuid,
      callback
    };
    if (options?.replaceExisting) {
      this.eventListeners = this.eventListeners.filter(
        (listener) => !(listener.activityUuid === eventListener.activityUuid && listener.type === eventListener.type)
      );
    }
    this.eventListeners.push(
      eventListener
    );
  }
  raiseActivityEventOnListeners(activityEvent, extra) {
    if (extra) {
      activityEvent = {
        ...activityEvent,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...extra
      };
    }
    this.eventListeners.filter((listener) => listener.type === activityEvent.type).forEach((listener) => {
      listener.callback(activityEvent);
    });
  }
  raiseEventOnListeningNodes(node, nodeEvent, domEvent) {
    node.eventListeners.filter((listener) => listener.type === nodeEvent.type).forEach((listener) => {
      if (listener.nodeUuid === node.uuid) {
        nodeEvent.target = node;
        switch (nodeEvent.type) {
          case M2EventType.PointerDown:
          case M2EventType.PointerMove:
          case M2EventType.PointerUp:
          case M2EventType.PointerLeave:
            nodeEvent.point = this.calculatePointWithinNodeFromDomPointerEvent(
              node,
              domEvent
            );
            nodeEvent.buttons = domEvent.buttons;
            listener.callback(nodeEvent);
            break;
          case M2EventType.KeyDown:
          case M2EventType.KeyUp:
            nodeEvent.key = domEvent.key;
            nodeEvent.code = domEvent.code;
            nodeEvent.shiftKey = domEvent.shiftKey;
            nodeEvent.ctrlKey = domEvent.ctrlKey;
            nodeEvent.metaKey = domEvent.metaKey;
            nodeEvent.altKey = domEvent.altKey;
            nodeEvent.repeat = domEvent.repeat;
            listener.callback(nodeEvent);
            break;
          case M2EventType.TapDown:
          case M2EventType.TapUp:
          case M2EventType.TapUpAny:
          case M2EventType.TapLeave:
            nodeEvent.point = this.calculatePointWithinNodeFromDomPointerEvent(
              node,
              domEvent
            );
            nodeEvent.buttons = domEvent.buttons;
            listener.callback(nodeEvent);
            break;
          case M2EventType.DragStart:
          case M2EventType.Drag:
          case M2EventType.DragEnd:
            nodeEvent.position = {
              x: node.position.x,
              y: node.position.y
            };
            nodeEvent.buttons = domEvent.buttons;
            listener.callback(nodeEvent);
            break;
        }
        if (!node.suppressEvents) {
          this.eventStore.addEvent(nodeEvent);
        }
      }
    });
  }
  sceneCanReceiveUserInteraction(scene) {
    if (scene._active && scene._transitioning === false) {
      return true;
    }
    return false;
  }
  /**
   *
   * Checks if the given canvas point is within the node's bounds.
   *
   * @param node - node to check bounds for
   * @param x - x coordinate of the canvas point
   * @param y - y coordinate of the canvas point
   * @returns true if x, y point is within the node's bounds
   */
  IsCanvasPointWithinNodeBounds(node, x, y) {
    if (!node.isDrawable) {
      throw "only drawable nodes can receive pointer events";
    }
    if (node.type === M2NodeType.Shape && node.shapeType === ShapeType.Circle) {
      const bb = M2c2KitHelpers.calculateNodeAbsoluteBoundingBox(node);
      const radius = node.circleOfRadius;
      if (!radius) {
        throw "circleOfRadius is undefined";
      }
      const center = {
        x: bb.xMin + radius * node.absoluteScale,
        y: bb.yMin + radius * node.absoluteScale
      };
      const distance = Math.sqrt(
        Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2)
      );
      return distance <= radius * node.absoluteScale;
    }
    if (node.size.width === 0 || node.size.height === 0) {
      return false;
    }
    if (node.type === M2NodeType.TextLine && isNaN(node.size.width)) {
      return false;
    }
    const points = M2c2KitHelpers.calculateRotatedPoints(
      node
    );
    return node.isUserInteractionEnabled && M2c2KitHelpers.isPointInsideRectangle({ x, y }, points);
  }
}

function initializeGlobalVariables() {
  globalThis.m2c2Globals = {
    now: performance.now(),
    iso8601Now: "",
    deltaTime: NaN,
    canvasScale: NaN,
    rootScale: 1,
    canvasCssWidth: NaN,
    canvasCssHeight: NaN,
    m2NodeClassRegistry: {},
    __sequence: 0,
    get eventSequence() {
      m2c2Globals.__sequence++;
      return m2c2Globals.__sequence - 1;
    },
    addedScriptUrls: []
  };
}
initializeGlobalVariables();
new Array();

console.log("\u26AA @m2c2kit/core version 0.3.30 (9f27c146)");

class DomHelper {
  /**
   * Specifies the HTML element in which to render the m2c2kit activities.
   *
   * @param rootElement - the element to add the survey div and canvas div to
   */
  static createRoot(rootElement) {
    const surveyDiv = document.createElement("div");
    surveyDiv.setAttribute("id", "m2c2kit-survey-div");
    rootElement.appendChild(surveyDiv);
    const canvasDiv = document.createElement("div");
    canvasDiv.setAttribute("id", "m2c2kit-canvas-div");
    canvasDiv.className = "m2c2kit-full-viewport m2c2kit-flex-container";
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "m2c2kit-canvas");
    canvas.className = "m2c2kit-full-viewport";
    canvasDiv.appendChild(canvas);
    rootElement.appendChild(canvasDiv);
  }
  /**
   * Adds a style sheet to the head of the document.
   *
   * @param css - text of the CSS
   */
  static addStyleSheet(css) {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);
  }
  /**
   * Add elements to hide the canvas and show a spinner.
   */
  static addLoadingElements() {
    const canvasDiv = document.getElementById("m2c2kit-canvas-div");
    if (!canvasDiv) {
      throw new M2Error("Could not find container element");
    }
    let overlayDiv = document.getElementById("m2c2kit-canvas-overlay-div");
    if (!overlayDiv) {
      overlayDiv = document.createElement("div");
      overlayDiv.setAttribute("id", "m2c2kit-canvas-overlay-div");
      overlayDiv.className = "m2c2kit-canvas-overlay m2c2kit-display-none";
      const spinnerDiv = document.createElement("div");
      spinnerDiv.setAttribute("id", "m2c2kit-spinner-div");
      spinnerDiv.className = "m2c2kit-spinner m2c2kit-display-none";
      canvasDiv.appendChild(overlayDiv);
      canvasDiv.appendChild(spinnerDiv);
    }
  }
  /**
   * Depending on the type of activity, set the visibility of the survey div
   * and canvas div.
   *
   * @param activity - the activity to configure the DOM for
   */
  static configureDomForActivity(activity) {
    if (activity.type == ActivityType.Game) {
      this.setCanvasDivVisibility(true);
      this.setSurveyDivVisibility(false);
    }
    if (activity.type == ActivityType.Survey) {
      this.setCanvasDivVisibility(false);
      this.setSurveyDivVisibility(true);
      DomHelper.setBusyAnimationVisibility(false);
      DomHelper.setCanvasOverlayVisibility(false);
    }
  }
  /**
   * Hide the canvas div and survey div.
   */
  static hideM2c2Elements() {
    this.setCanvasDivVisibility(false);
    this.setSurveyDivVisibility(false);
  }
  /**
   * Shows or hides the canvas overlay.
   *
   * @param visible - true if the canvas overlay should be visible
   */
  static setCanvasOverlayVisibility(visible) {
    const div = document.getElementById("m2c2kit-canvas-overlay-div");
    if (div) {
      if (visible) {
        div.classList.remove("m2c2kit-display-none");
      } else {
        div.classList.add("m2c2kit-display-none");
      }
    }
  }
  /**
   * Shows or hides the busy animation.
   *
   * @param visible - true if the busy animation should be visible
   */
  static setBusyAnimationVisibility(visible) {
    const div = document.getElementById("m2c2kit-spinner-div");
    if (div) {
      if (visible) {
        div.classList.remove("m2c2kit-display-none");
      } else {
        div.classList.add("m2c2kit-display-none");
      }
    }
  }
  /**
   * Shows or hides the survey div.
   *
   * @param visible - true if the survey div should be visible
   */
  static setSurveyDivVisibility(visible) {
    const surveyDiv = document.getElementById("m2c2kit-survey-div");
    if (surveyDiv && visible) {
      surveyDiv.classList.remove("m2c2kit-display-none");
      surveyDiv.classList.add("m2c2kit-display-block");
    }
    if (surveyDiv && !visible) {
      surveyDiv.classList.add("m2c2kit-display-none");
      surveyDiv.classList.remove("m2c2kit-display-block");
    }
  }
  /**
   * Shows or hides the canvas div.
   *
   * @param visible - true if the canvas div should be visible
   */
  static setCanvasDivVisibility(visible) {
    const canvasDiv = document.getElementById("m2c2kit-canvas-div");
    if (canvasDiv && visible) {
      canvasDiv.classList.remove("m2c2kit-display-none");
      canvasDiv.classList.add("m2c2kit-flex-container");
    }
    if (canvasDiv && !visible) {
      canvasDiv.classList.add("m2c2kit-display-none");
      canvasDiv.classList.remove("m2c2kit-flex-container");
    }
  }
}

const SessionEventType = {
  SessionInitialize: "SessionInitialize",
  SessionStart: "SessionStart",
  SessionEnd: "SessionEnd",
  SessionData: "SessionData"
};

const m2c2kitCss = `.m2c2kit-background-color {
  background: white;
}

.m2c2kit-no-margin {
  margin: 0;
}

.m2c2kit-display-none {
  display: none;
}

.m2c2kit-display-block {
  display: block;
}

.m2c2kit-full-viewport {
  height: 100vh;
  width: 100vw;
}

.m2c2kit-flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.m2c2kit-canvas-overlay {
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: absolute
}

.m2c2kit-spinner {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #212529;
  width: 120px;
  height: 120px;
  /* Safari */
  -webkit-animation: m2c2kit-loader-spin 1.5s linear infinite;
  animation: m2c2kit-loader-spin 1.5s linear infinite;
  position: absolute;
}

#m2c2kit-time-stepping-div {
  position: fixed;
  top: 4px;
  left: 4px
}

/* Safari */
@-webkit-keyframes m2c2kit-loader-spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes m2c2kit-loader-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}`;

const _HtmlDialog = class _HtmlDialog {
  /**
   * HtmlDialog class creates a custom dialog box.
   *
   * @remarks The dialog box is centered on the screen and has an overlay
   * background composed of a large character (e.g., an emoji). The dialog box
   * is shown using HTML and CSS, not drawing on a canvas, so that it will
   * reliably be shown even if there is an error in the assessment code.
   *
   * @param options - Options for the dialog box.
   */
  constructor(options) {
    this.onDialogConfirm = options.onDialogConfirm;
    this.removeOverlayAfterConfirm = options.removeOverlayAfterConfirm ?? true;
    this.overlay = document.createElement("div");
    this.overlay.style.position = "fixed";
    this.overlay.style.top = "0";
    this.overlay.style.left = "0";
    this.overlay.style.width = "100vw";
    this.overlay.style.height = "100vh";
    this.overlay.style.backgroundColor = "#fff";
    this.overlay.style.display = "flex";
    this.overlay.style.justifyContent = "center";
    this.overlay.style.alignItems = "center";
    this.overlay.style.zIndex = "1000";
    const background = document.createElement("div");
    background.textContent = options.backgroundCharacter ?? null;
    background.style.position = "absolute";
    background.style.fontSize = "20rem";
    background.style.opacity = "0.40";
    background.style.top = "50%";
    background.style.left = "50%";
    background.style.transform = "translate(-50%, -50%)";
    this.dialog = document.createElement("div");
    this.dialog.style.backgroundColor = "#fff";
    this.dialog.style.padding = "20px";
    this.dialog.style.borderRadius = "10px";
    this.dialog.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    this.dialog.style.textAlign = "center";
    this.dialog.style.minWidth = "200px";
    this.dialog.style.maxWidth = "75%";
    this.dialog.style.opacity = ".80";
    this.dialog.style.position = "relative";
    this.dialog.style.zIndex = "1001";
    this.message = document.createElement("p");
    this.message.textContent = options.message;
    this.message.style.marginBottom = "15px";
    this.message.style.fontFamily = "Arial, sans-serif";
    this.button = document.createElement("button");
    this.button.textContent = "OK";
    this.button.style.padding = "8px 15px";
    this.button.style.border = "none";
    this.button.style.backgroundColor = "#007bff";
    this.button.style.color = "#fff";
    this.button.style.borderRadius = "5px";
    this.button.style.cursor = "pointer";
    this.button.style.fontSize = "16px";
    this.button.style.fontFamily = "Arial, sans-serif";
    this.button.onclick = this.close.bind(this);
    this.dialog.appendChild(this.message);
    this.dialog.appendChild(this.button);
    this.overlay.appendChild(background);
    this.overlay.appendChild(this.dialog);
  }
  /**
   * Shows the dialog box. If another dialog is already visible,
   * it will be closed before showing this one.
   */
  show() {
    if (_HtmlDialog.activeDialog && _HtmlDialog.activeDialog !== this) {
      _HtmlDialog.activeDialog.forceClose();
    }
    _HtmlDialog.activeDialog = this;
    document.body.appendChild(this.overlay);
  }
  /**
   * Checks if any dialog is currently being displayed
   *
   * @returns True if a dialog is currently visible
   */
  static isDialogVisible() {
    return _HtmlDialog.activeDialog !== null;
  }
  /**
   * Closes the dialog without triggering onDialogConfirm callback
   */
  forceClose() {
    if (this.dialog.parentNode === this.overlay) {
      this.overlay.removeChild(this.dialog);
      if (this.removeOverlayAfterConfirm) {
        this.overlay.remove();
      }
    }
    this.button.onclick = null;
    _HtmlDialog.activeDialog = null;
  }
  /**
   * Closes the dialog and calls the onDialogConfirm callback if provided
   */
  close() {
    if (this.dialog.parentNode === this.overlay) {
      this.overlay.removeChild(this.dialog);
      if (this.removeOverlayAfterConfirm) {
        this.overlay.remove();
      }
    }
    this.button.onclick = null;
    _HtmlDialog.activeDialog = null;
    if (this.onDialogConfirm) {
      this.onDialogConfirm();
    }
  }
};
_HtmlDialog.activeDialog = null;
let HtmlDialog = _HtmlDialog;

const MAX_DIAGNOSTIC_EVENTS = 10;
class DiagnosticsReporter {
  constructor(options) {
    this.staticDiagnosticData = {};
    this.isHandlingException = false;
    this.reportedExceptions = /* @__PURE__ */ new Set();
    this.diagnosticEventsCount = 0;
    this.getSessionUuid = options.getSessionUuid;
    this.getCurrentActivity = options.getCurrentActivity;
    this.dispatchEvent = options.dispatchEvent;
    this.onErrorDialogConfirm = options.onErrorDialogConfirm || (() => {
    });
    this.removeOverlayAfterErrorDialogConfirm = options.removeOverlayAfterErrorDialogConfirm ?? false;
    this.onlyM2Errors = options.onlyM2Errors ?? true;
    this.handleResourceLoadingErrors = options.handleResourceLoadingErrors ?? false;
    this.maximumDiagnosticEvents = options.maximumDiagnosticEvents ?? MAX_DIAGNOSTIC_EVENTS;
    this.errorHandler = this.handleError.bind(this);
    this.rejectionHandler = this.handleRejection.bind(this);
    this.resourceErrorHandler = this.handleResourceError.bind(this);
    this.refreshBatteryStatus();
    this.refreshStorageEstimate();
  }
  /**
   * Sets the value of a variable that will be the same for all diagnostic data.
   *
   * @param key - key (variable name) for the static diagnostic data
   * @param value - value for the data
   */
  addStaticDiagnosticData(key, value) {
    this.staticDiagnosticData[key] = value;
  }
  /**
   * Starts the DiagnosticsReporter by setting up global error handlers to
   * capture uncaught errors, unhandled promise rejections, and possibly
   * resource loading errors to be reported through diagnostics.
   */
  start() {
    window.addEventListener("error", this.errorHandler);
    window.addEventListener("unhandledrejection", this.rejectionHandler);
    if (this.handleResourceLoadingErrors) {
      document.addEventListener("error", this.resourceErrorHandler, true);
    }
  }
  /**
   * Stops the DiagnosticsReporter by removing all global error handlers
   * to prevent memory leaks. Call this method when the DiagnosticsReporter
   * is no longer needed.
   */
  stop() {
    window.removeEventListener("error", this.errorHandler);
    window.removeEventListener("unhandledrejection", this.rejectionHandler);
    document.removeEventListener("error", this.resourceErrorHandler, true);
  }
  /**
   * Handles synchronous errors
   */
  handleError(event) {
    if (this.onlyM2Errors && event.error && event.error.name !== "M2Error") {
      return false;
    }
    this.handleException(event.error || new Error(event.message), {
      source: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      type: "synchronous"
    });
    return false;
  }
  /**
   * Handles unhandled promise rejections
   */
  handleRejection(event) {
    let error;
    if (event.reason instanceof Error) {
      error = event.reason;
    } else if (typeof event.reason === "string") {
      error = new Error(event.reason);
    } else {
      try {
        error = new Error(JSON.stringify(event.reason));
      } catch {
        error = new Error(
          "Unhandled Promise rejection with unserializable reason"
        );
      }
    }
    if (this.onlyM2Errors && error && error.name !== "M2Error") {
      return false;
    }
    const errorInfo = this.extractErrorLocationFromStack(error.stack);
    this.handleException(error, {
      source: errorInfo.source || "promise_rejection",
      lineno: errorInfo.lineno,
      colno: errorInfo.colno,
      type: "promise_rejection"
    });
    return false;
  }
  /**
   * Extracts source file, line number and column number from error stack trace
   * Works across Chrome, Firefox, Safari, Edge on both desktop and mobile
   *
   * @param stack - The error stack trace string
   * @returns Object containing source file, line number, and column number
   * @private
   */
  extractErrorLocationFromStack(stack) {
    if (!stack) return {};
    const MAX_STACK_LINES = 20;
    const stackLines = stack.split("\n").slice(0, MAX_STACK_LINES);
    for (let i = 0; i < stackLines.length; i++) {
      const line = stackLines[i].trim();
      if (!line) continue;
      const chromeMatch = line.match(/at .*? \(([^)]+):(\d+):(\d+)\)/);
      if (chromeMatch) {
        return {
          source: chromeMatch[1],
          lineno: parseInt(chromeMatch[2], 10),
          colno: parseInt(chromeMatch[3], 10)
        };
      }
      const chromeAltMatch = line.match(/at ([^ ]+):(\d+):(\d+)/);
      if (chromeAltMatch) {
        return {
          source: chromeAltMatch[1],
          lineno: parseInt(chromeAltMatch[2], 10),
          colno: parseInt(chromeAltMatch[3], 10)
        };
      }
      const mozillaMatch = line.match(/(?:@|at )([^@]+):(\d+):(\d+)/);
      if (mozillaMatch) {
        return {
          source: mozillaMatch[1],
          lineno: parseInt(mozillaMatch[2], 10),
          colno: parseInt(mozillaMatch[3], 10)
        };
      }
      const evalMatch = line.match(/([^@\s]+)(?:.*?)?:(\d+):(\d+)$/);
      if (evalMatch) {
        return {
          source: evalMatch[1],
          lineno: parseInt(evalMatch[2], 10),
          colno: parseInt(evalMatch[3], 10)
        };
      }
      const genericMatch = line.match(/([^:]+):(\d+):(\d+)/);
      if (genericMatch) {
        return {
          source: genericMatch[1],
          lineno: parseInt(genericMatch[2], 10),
          colno: parseInt(genericMatch[3], 10)
        };
      }
    }
    return {};
  }
  /**
   * Handles resource loading errors
   */
  handleResourceError(event) {
    if (event.target instanceof HTMLImageElement || event.target instanceof HTMLScriptElement) {
      let url = "src" in event.target ? event.target.src : "unknown";
      url = this.truncateString(url, 100);
      this.handleException(
        new Error(
          `Error on element ${event.target.nodeName} in document at ${document.URL}. Failed to load resource: ${url}`
        ),
        {
          source: "resource_loading",
          type: "resource_loading"
        }
      );
    }
  }
  /**
   * Handles uncaught exceptions and sends diagnostic data to listeners.
   *
   * @remarks This method is called by the global error handler and
   * unhandled promise rejection handler.
   *
   * @param error - the error object
   * @param errorInfo - additional information about the error
   * @param errorInfo.source - the source of the error (e.g., filename)
   * @param errorInfo.lineno - the line number where the error occurred
   * @param errorInfo.colno - the column number where the error occurred   *
   */
  handleException(error, errorInfo) {
    if (this.isHandlingException) {
      console.error("Error occurred while handling another exception", error);
      return;
    }
    const errorKey = `${error.message}:${errorInfo?.lineno || 0}:${errorInfo?.colno || 0}`;
    if (this.reportedExceptions.has(errorKey)) {
      return;
    }
    this.reportedExceptions.add(errorKey);
    this.diagnosticEventsCount++;
    if (this.diagnosticEventsCount > this.maximumDiagnosticEvents) {
      console.warn(
        `Maximum diagnostic events reached (${this.maximumDiagnosticEvents}). No more will be reported.`
      );
      return;
    }
    try {
      this.isHandlingException = true;
      if (!HtmlDialog.isDialogVisible()) {
        const dialog = new HtmlDialog({
          message: "We are sorry, but something went wrong. Please try again later.",
          backgroundCharacter: "\u26A0\uFE0F",
          onDialogConfirm: this.onErrorDialogConfirm,
          removeOverlayAfterConfirm: this.removeOverlayAfterErrorDialogConfirm
        });
        dialog.show();
      } else {
        console.log("Error dialog already visible, not showing another one");
      }
      const currentActivity = this.getCurrentActivity();
      const { timestamp, iso8601Timestamp } = M2c2KitHelpers.createTimestamps();
      const diagnosticData = {
        data_type: "diagnostics",
        document_uuid: Uuid.generate(),
        iso8601_timestamp: iso8601Timestamp,
        session_uuid: this.getSessionUuid(),
        activity: {
          id: currentActivity?.id ?? null,
          uuid: currentActivity?.uuid ?? null,
          publish_uuid: currentActivity?.publishUuid ?? null,
          version: currentActivity?.type === ActivityType.Game ? currentActivity.options.version : null,
          begin_iso8601_timestamp: currentActivity?.type === ActivityType.Game ? currentActivity.beginIso8601Timestamp : null,
          locale: currentActivity?.type === ActivityType.Game ? currentActivity.i18n?.locale ?? null : null
        },
        error_message: error.message,
        error_stack: this.truncateString(error.stack, 2048) ?? null,
        error_source: errorInfo?.source ?? null,
        error_line: errorInfo?.lineno || 0,
        error_column: errorInfo?.colno || 0,
        error_type: errorInfo?.type ?? null,
        device_metadata: this.getExtendedDeviceMetadata(),
        ...this.staticDiagnosticData
      };
      const sessionDataEvent = {
        // target will be replaced by the Session instance in the eventRaiser,
        // which is raiseEventOnListeners() in the Session class. It will set
        // the target to the session instance.
        target: null,
        type: SessionEventType.SessionData,
        data: diagnosticData,
        dataType: "Diagnostics",
        timestamp,
        iso8601Timestamp
      };
      this.dispatchEvent(sessionDataEvent);
      console.log("\u274C diagnostics:", error, errorInfo);
    } finally {
      this.isHandlingException = false;
    }
  }
  getExtendedDeviceMetadata() {
    try {
      const screen = window.screen || {};
      let orientation = void 0;
      try {
        orientation = screen.orientation || void 0;
      } catch {
      }
      return {
        userAgent: navigator?.userAgent,
        language: navigator?.language,
        hardwareConcurrency: navigator?.hardwareConcurrency,
        deviceMemory: (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          typeof navigator?.deviceMemory !== "undefined" ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            navigator.deviceMemory
          ) : void 0
        ),
        // Connection API is experimental. Wrap in try/catch to avoid errors
        // that some browsers may throw if the API is not available.
        connection: (() => {
          try {
            const conn = navigator?.connection;
            return conn ? {
              effectiveType: conn?.effectiveType,
              downlink: conn?.downlink,
              downlinkMax: conn?.downlinkMax,
              rtt: conn?.rtt,
              saveData: conn?.saveData,
              type: conn?.type
            } : void 0;
          } catch {
            return void 0;
          }
        })(),
        battery: this.batteryStatus,
        storage: this.storageEstimate,
        cookieEnabled: navigator?.cookieEnabled,
        webAssembly: typeof WebAssembly !== "undefined",
        maxTouchPoints: navigator?.maxTouchPoints,
        devicePixelRatio: window?.devicePixelRatio,
        screen: {
          availHeight: screen?.availHeight,
          availWidth: screen?.availWidth,
          colorDepth: screen?.colorDepth,
          height: screen?.height,
          orientation: orientation ? {
            type: orientation?.type,
            angle: orientation?.angle
          } : void 0,
          pixelDepth: screen?.pixelDepth,
          width: screen?.width
        },
        device_timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "",
        device_timezone_offset_minutes: (/* @__PURE__ */ new Date()).getTimezoneOffset()
      };
    } catch (error) {
      console.warn("Error collecting device metadata:", error);
      return {
        userAgent: navigator?.userAgent || "unknown"
      };
    }
  }
  /**
   * Refreshes the battery status.
   *
   * @remarks This method uses the Battery Status API to get the current
   * battery status of the device. Because the API is asynchronous, we
   * call it previously so that it is ready when we need it and do not need
   * to await it.
   */
  refreshBatteryStatus() {
    try {
      if (!("getBattery" in navigator)) {
        return;
      }
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Battery status timeout")), 2e3);
      });
      Promise.race([
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigator.getBattery(),
        timeoutPromise
      ]).then((battery) => {
        this.batteryStatus = {
          charging: battery?.charging,
          level: battery?.level,
          chargingTime: battery?.chargingTime,
          dischargingTime: battery?.dischargingTime
        };
      }).catch((error) => {
        console.warn("Battery status API error:", error);
        this.batteryStatus = void 0;
      });
    } catch (error) {
      console.warn("Unexpected error in battery status check:", error);
    }
  }
  refreshStorageEstimate() {
    try {
      if (!("storage" in navigator && "estimate" in navigator.storage)) {
        return;
      }
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Storage estimate timeout")), 2e3);
      });
      Promise.race([
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigator.storage.estimate(),
        timeoutPromise
      ]).then((storage) => {
        this.storageEstimate = {
          quota: storage.quota,
          usage: storage.usage
        };
      }).catch((error) => {
        console.warn("Storage estimation API error:", error);
        this.storageEstimate = void 0;
      });
    } catch (error) {
      console.warn("Unexpected error in storage estimation check:", error);
    }
  }
  truncateString(s, length) {
    if (!s) {
      return "";
    }
    if (s.length <= length) {
      return s;
    }
    return s.slice(0, length) + `...(truncated from ${s.length} characters)`;
  }
}

class Session {
  /**
   * A Session contains one or more activities. The session manages the start
   * and stop of activities, and advancement to next activity
   *
   * @param options
   */
  constructor(options) {
    this.eventListeners = new Array();
    this.sessionDictionary = /* @__PURE__ */ new Map();
    this.initialized = false;
    this.options = options;
    window.m2c2kitSession = this;
    this.addDebuggingTools();
  }
  /**
   * Adds debugging tools to the session.
   *
   * @remarks These tools can be activated by appending query parameters to the
   * URL or by setting game parameters via the `Game.SetParameters()` method
   * (only eruda and scripts can be set with `Game.SetParameters()`).
   */
  addDebuggingTools() {
    const urlParams = new URLSearchParams(window.location.search);
    const diagnosticsUrlParam = urlParams.get("diagnostics");
    if (diagnosticsUrlParam !== null) {
      if (diagnosticsUrlParam === "true") {
        this.startDiagnostics();
      }
    } else if (this.options.diagnostics === true) {
      this.startDiagnostics();
    }
    if (urlParams.get("eruda") === "true") {
      M2c2KitHelpers.loadEruda();
    }
    const scriptsParam = urlParams.get("scripts");
    if (scriptsParam) {
      try {
        const scripts = JSON.parse(
          decodeURIComponent(scriptsParam)
        );
        M2c2KitHelpers.loadScriptUrls(scripts);
      } catch {
        console.log(
          `Error parsing "scripts" parameter. "scripts" must be an array of URL strings, and it is recommended to be URI encoded.`
        );
      }
    }
  }
  /**
   * Starts the diagnostics reporter.
   */
  startDiagnostics() {
    if (this.diagnosticsReporter) {
      this.diagnosticsReporter.stop();
    }
    this.diagnosticsReporter = new DiagnosticsReporter({
      getSessionUuid: () => this.uuid,
      getCurrentActivity: () => this.currentActivity,
      dispatchEvent: this.raiseEventOnListeners.bind(this),
      onErrorDialogConfirm: this.end.bind(this)
    });
    this.diagnosticsReporter.start();
  }
  /**
   * Executes a callback when the session initializes.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onInitialize(callback, options) {
    this.addEventListener(
      SessionEventType.SessionInitialize,
      callback,
      options
    );
  }
  /**
   * Executes a callback when the session starts.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onStart(callback, options) {
    this.addEventListener(SessionEventType.SessionStart, callback, options);
  }
  /**
   * Executes a callback when the session ends.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onEnd(callback, options) {
    this.addEventListener(SessionEventType.SessionEnd, callback, options);
  }
  /**
   * Executes a callback when the session generates data.
   *
   * @remarks Currently, this is used only for capturing diagnostics data on
   * exceptions.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onData(callback, options) {
    this.addEventListener(SessionEventType.SessionData, callback, options);
  }
  /**
   * Executes a callback when any activity in the session generates data.
   *
   * @param callback - function to execute.
   * @param options - options for the callback.
   */
  onActivityData(callback, options) {
    this.addEventListener(M2EventType.ActivityData, callback, options);
  }
  addEventListener(type, callback, options) {
    const eventListener = {
      type,
      callback,
      key: options?.key
    };
    if (options?.replaceExisting) {
      this.eventListeners = this.eventListeners.filter(
        (listener) => !(listener.type === eventListener.type)
      );
    }
    this.eventListeners.push(
      eventListener
    );
  }
  raiseEventOnListeners(event, extra) {
    if (extra) {
      event = {
        ...event,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...extra
      };
    }
    if (this.eventIsSessionDataEventMissingTarget(event)) {
      event.target = this;
    }
    this.eventListeners.filter((listener) => listener.type === event.type).forEach((listener) => {
      listener.callback(event);
    });
  }
  eventIsSessionDataEventMissingTarget(event) {
    return event.type === SessionEventType.SessionData && event.dataType === "Diagnostics" && !event.target;
  }
  async sessionActivityStartHandler(event) {
    const activityType = event.target.type === ActivityType.Game ? "game" : "survey";
    console.log(`\u{1F7E2} started activity (${activityType}) ${event.target.name}`);
  }
  async sessionActivityCancelHandler(event) {
    const activityType = event.target.type === ActivityType.Game ? "game" : "survey";
    console.log(`\u{1F6AB} canceled activity (${activityType}) ${event.target.name}`);
    if (this.nextActivity && this.options.autoGoToNextActivity !== false) {
      await this.goToNextActivity();
      return;
    }
    if (!this.nextActivity && this.options.autoEndAfterLastActivity !== false) {
      this.end();
    }
  }
  async sessionActivityEndHandler(event) {
    const activityType = event.target.type === ActivityType.Game ? "game" : "survey";
    console.log(`\u{1F534} ended activity (${activityType}) ${event.target.name}`);
    if (this.nextActivity && this.options.autoGoToNextActivity !== false) {
      await this.goToNextActivity();
      return;
    }
    if (!this.nextActivity && this.options.autoEndAfterLastActivity !== false) {
      this.end();
    }
  }
  async sessionActivityLifecycleHandler(event) {
    if (event.type === M2EventType.ActivityStart) {
      await this.sessionActivityStartHandler(event);
      return;
    }
    if (event.type === M2EventType.ActivityCancel) {
      await this.sessionActivityCancelHandler(event);
      return;
    }
    if (event.type === M2EventType.ActivityEnd) {
      await this.sessionActivityEndHandler(event);
      return;
    }
    throw new M2Error("unknown activity lifecycle event type");
  }
  activityResultsEventHandler(event) {
    this.raiseEventOnListeners(event);
  }
  /**
   * Asynchronously initializes the m2c2kit engine and loads assets
   *
   * @deprecated Use Session.initialize() instead.
   */
  async init() {
    console.warn(
      `The init() method of Session is deprecated. Use initialize() instead.`
    );
    return this.initialize();
  }
  /**
   * Check if the Activity uses the deprecated init() method.
   *
   * @remarks Activity.init() is deprecated and should be replaced with
   * Activity.initialize().
   *
   * @param activity
   * @returns true if the activity defines its own init() method, false otherwise.
   */
  activityUsesDeprecatedInit(activity) {
    if (activity.type === ActivityType.Survey) {
      return false;
    }
    const activityPrototype = Object.getPrototypeOf(activity);
    const gamePrototype = Object.getPrototypeOf(activityPrototype);
    return activityPrototype?.init !== gamePrototype?.init;
  }
  /**
   * Asynchronously initializes the m2c2kit engine and loads assets
   */
  async initialize() {
    Timer.startNew("sessionInitialize");
    if (this.options.sessionUuid) {
      this.uuid = this.options.sessionUuid;
    } else {
      this.uuid = Uuid.generate();
    }
    for (const activity of this.options.activities) {
      if (this.options.activities.filter((a) => a === activity).length > 1) {
        throw new M2Error(
          `error in SessionOptions.activities: an instance of the activity named "${activity.name}" has been added more than once to the session. If you want to repeat the same activity, create separate instances of it.`
        );
      }
      activity.sessionUuid = this.uuid;
      if (this.options.activityCallbacks?.onActivityLifecycle) {
        activity.onStart(this.options.activityCallbacks.onActivityLifecycle);
        activity.onCancel(this.options.activityCallbacks.onActivityLifecycle);
        activity.onEnd(this.options.activityCallbacks.onActivityLifecycle);
      }
      if (this.options.activityCallbacks?.onActivityResults) {
        activity.onData(this.options.activityCallbacks.onActivityResults);
      }
      if (activity.type === ActivityType.Game) {
        const game = activity;
        game.onWarmupStart(() => {
          DomHelper.setCanvasOverlayVisibility(true);
        });
        game.onWarmupEnd(() => {
          DomHelper.setCanvasOverlayVisibility(false);
          DomHelper.setBusyAnimationVisibility(false);
        });
      }
    }
    const sessionInitializeEvent = {
      target: this,
      type: SessionEventType.SessionInitialize,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.raiseEventOnListeners(sessionInitializeEvent);
    const rootId = this.options.rootElementId ?? Constants.DEFAULT_ROOT_ELEMENT_ID;
    const root = document.getElementById(rootId);
    if (!root) {
      throw new M2Error(
        `Session.initialize(): root element with id ${rootId} not found. The index.html should have: <div id="${rootId}"></div>.`
      );
    }
    DomHelper.createRoot(root);
    DomHelper.addStyleSheet(this.options.styleSheet ?? m2c2kitCss);
    DomHelper.addLoadingElements();
    DomHelper.setBusyAnimationVisibility(true);
    DomHelper.setCanvasOverlayVisibility(true);
    this.dataStores = this.options.dataStores;
    if (this.dataStores?.length === 0) {
      throw new M2Error(
        "Session.initialize(): dataStores must be undefined or a non-zero array of datastores."
      );
    }
    await this.getSharedAssets(this.options.activities);
    await Promise.all(
      this.options.activities.map((activity) => {
        activity.studyId = this.options.studyId;
        activity.studyUuid = this.options.studyUuid;
        activity.dataStores = this.dataStores;
        activity.onStart(this.sessionActivityLifecycleHandler.bind(this));
        activity.onCancel(this.sessionActivityLifecycleHandler.bind(this));
        activity.onEnd(this.sessionActivityLifecycleHandler.bind(this));
        activity.onData((event) => {
          this.activityResultsEventHandler(event);
        });
        if (this.activityUsesDeprecatedInit(activity)) {
          console.warn(
            `game ${activity.id}: Activity.init() is deprecated. In the assessment class that extends Game, use Activity.initialize() instead:
  async initialize() {
    await super.initialize();
    ...
  }
`
          );
          return activity.init();
        }
        return activity.initialize();
      })
    );
    console.log(
      `\u26AA Session.initialize() took ${Timer.elapsed(
        "sessionInitialize"
      ).toFixed(0)} ms`
    );
    Timer.remove("sessionInitialize");
    this.initialized = true;
    if (this.options.autoStartAfterInit !== false) {
      await this.start();
    }
  }
  /**
   * Asynchronously loads fonts and wasm binaries that are common across two
   * or more game activities and shares them with the games.
   *
   * @param activities - array of activities
   */
  async getSharedAssets(activities) {
    const games = activities.filter(
      (activity) => activity.type === ActivityType.Game && activity.options.shareAssets !== false
    );
    if (games.length > 0) {
      const manifest = await games[0].loadManifest();
      games.forEach((game) => {
        game.manifest = manifest;
      });
      const wasmPromises = this.initializeSharedCanvasKit(games);
      const fontPromises = this.fetchSharedFontData(games);
      await Promise.all([...wasmPromises, ...fontPromises]);
    }
  }
  initializeSharedCanvasKit(games) {
    const sharedWasmVersions = this.getDuplicates(
      games.map((game) => game.canvasKitWasmVersion)
    );
    const wasmAssets = games.map((game) => {
      return {
        game,
        version: game.canvasKitWasmVersion,
        data: void 0
      };
    });
    const wasmPromises = sharedWasmVersions.map(async (sharedWasmVersion) => {
      const wasmAsset = wasmAssets.filter(
        (wasm) => wasm.version === sharedWasmVersion
      )[0];
      const game = wasmAsset.game;
      const baseUrls = await game.resolveGameBaseUrls(game);
      const canvasKitWasmFilename = `canvaskit-${game.canvasKitWasmVersion}.wasm`;
      const manifestCanvasKitWasmUrl = M2c2KitHelpers.getUrlFromManifest(
        game,
        `${baseUrls.canvasKitWasm}/${canvasKitWasmFilename}`
      );
      console.log(`\u26AA sharing ${canvasKitWasmFilename} within session`);
      const canvasKit = await game.loadCanvasKit(manifestCanvasKitWasmUrl);
      games.forEach((game2) => {
        if (game2.canvasKitWasmVersion === sharedWasmVersion) {
          game2.canvasKit = canvasKit;
        }
      });
    });
    return wasmPromises;
  }
  fetchSharedFontData(games) {
    const fontFiles = games.flatMap(
      (game) => game.options.fonts?.filter((f) => f.lazy !== true) ?? []
    ).map((fontAsset) => this.getFilenameFromUrl(fontAsset.url));
    const sharedFontFiles = this.getDuplicates(fontFiles);
    const allGameFonts = games.flatMap((game) => {
      return (game.options.fonts ?? []).map((fontAsset) => {
        return {
          game,
          fontAsset,
          filename: this.getFilenameFromUrl(fontAsset.url),
          data: void 0
        };
      });
    });
    const fontPromises = sharedFontFiles.map(async (sharedFontFile) => {
      const gameFontAsset = allGameFonts.filter(
        (gameFont) => gameFont.filename === sharedFontFile
      )[0];
      const game = gameFontAsset.game;
      const baseUrls = await game.resolveGameBaseUrls(game);
      const fontUrl = M2c2KitHelpers.getUrlFromManifest(
        game,
        `${baseUrls.assets}/${gameFontAsset.fontAsset.url}`
      );
      console.log(
        `\u26AA sharing ${this.getFilenameFromUrl(fontUrl)} within session`
      );
      const response = await fetch(fontUrl);
      const fontData = await response.arrayBuffer();
      games.flatMap((game2) => game2.options.fonts ?? []).forEach((fontAsset) => {
        if (this.getFilenameFromUrl(fontAsset.url) === sharedFontFile) {
          fontAsset.sharedFont = {
            url: fontUrl,
            data: fontData
          };
        }
      });
    });
    return fontPromises;
  }
  /**
   * Waits for the session to be initialized.
   *
   * @remarks Session.initialize() is asynchronous, and it should be awaited
   * so that the session is fully initialized before calling Session.start().
   * If it is not awaited (or it cannot be awaited because the target
   * environment does not support top-level await), this function ensures that
   * the session has been initialized.
   */
  async waitForSessionInitialization() {
    while (!this.initialized) {
      await new Promise(
        (resolve) => setTimeout(
          resolve,
          Constants.SESSION_INITIALIZATION_POLLING_INTERVAL_MS
        )
      );
    }
  }
  /**
   * Starts the session and starts the first activity.
   */
  async start() {
    await this.waitForSessionInitialization();
    console.log("\u{1F7E2} started session");
    const sessionStartEvent = {
      target: this,
      type: SessionEventType.SessionStart,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.raiseEventOnListeners(sessionStartEvent);
    this.currentActivity = this.options.activities.find(Boolean);
    if (this.currentActivity) {
      DomHelper.configureDomForActivity(this.currentActivity);
      await this.currentActivity.start();
    } else {
      console.warn("no activities in session.");
      this.end();
    }
  }
  /**
   * Declares the session ended and sends callback.
   */
  end() {
    console.log("\u{1F534} ended session");
    DomHelper.hideM2c2Elements();
    this.stop();
    const sessionEndEvent = {
      target: this,
      type: SessionEventType.SessionEnd,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.raiseEventOnListeners(sessionEndEvent);
    if (this.diagnosticsReporter) {
      this.diagnosticsReporter.stop();
      this.diagnosticsReporter = void 0;
    }
  }
  stop() {
    this.dispose();
  }
  /**
   * Frees up resources that were allocated to run the session.
   *
   * @remarks This will be done automatically by the m2c2kit library;
   * the end-user must not call this.
   */
  dispose() {
  }
  /**
   * Stops the current activity and goes to the activity with the provided id.
   *
   * @param options
   */
  async goToActivity(options) {
    const nextActivity = this.options.activities.filter((activity) => activity.id === options.id).find(Boolean);
    if (!nextActivity) {
      throw new M2Error(
        `Error in goToActivity(): Session does not contain an activity with id ${options.id}.`
      );
    }
    if (this.currentActivity) {
      this.currentActivity.stop();
    }
    const currentActivityOldObject = nextActivity;
    const activityFactoryFunction = currentActivityOldObject.constructor.bind.apply(
      currentActivityOldObject.constructor,
      [null]
    );
    this.currentActivity = new activityFactoryFunction();
    const indexOfCurrentActivity = this.options.activities.indexOf(
      currentActivityOldObject
    );
    this.options.activities[indexOfCurrentActivity] = this.currentActivity;
    DomHelper.configureDomForActivity(this.currentActivity);
    this.currentActivity.dataStores = this.dataStores;
    if (currentActivityOldObject.additionalParameters) {
      this.currentActivity.setParameters(
        currentActivityOldObject.additionalParameters
      );
    }
    await this.currentActivity.initialize();
    await this.currentActivity.start();
  }
  /**
   * Stops the current activity and advances to next activity in the session.
   * If there is no activity after the current activity, throws error.
   */
  async goToNextActivity() {
    if (!this.currentActivity) {
      throw new M2Error(
        "error in advanceToNextActivity(): no current activity"
      );
    }
    if (!this.nextActivity) {
      throw new M2Error("error in advanceToNextActivity(): no next activity");
    }
    this.currentActivity.stop();
    this.currentActivity = this.nextActivity;
    DomHelper.configureDomForActivity(this.currentActivity);
    await this.currentActivity.start();
  }
  /**
   * Stops the current activity and advances to next activity in the session.
   * If there is no activity after the current activity, throws error.
   *
   * @deprecated Use goToNextActivity() instead.
   */
  async advanceToNextActivity() {
    await this.goToNextActivity();
  }
  /**
   * Gets the next activity after the current one, or undefined if
   * this is the last activity.
   */
  get nextActivity() {
    if (!this.currentActivity) {
      throw new M2Error("error in get nextActivity(): no current activity");
    }
    const index = this.options.activities.indexOf(this.currentActivity);
    if (index === this.options.activities.length - 1) {
      return void 0;
    }
    const currentActivityIndex = this.options.activities.indexOf(
      this.currentActivity
    );
    return this.options.activities[currentActivityIndex + 1];
  }
  /**
   * Saves an item to the session's key-value dictionary.
   *
   * @remarks The session dictionary is not persisted. It is available only
   * during the actively running session. It is useful for storing temporary
   * data to coordinate between activities.
   *
   * @param key - item key
   * @param value - item value
   */
  dictionarySetItem(key, value) {
    this.sessionDictionary.set(key, value);
  }
  /**
   * Gets an item value from the session's key-value dictionary.
   *
   * @remarks The session dictionary is not persisted. It is available only
   * during the actively running session. It is useful for storing temporary
   * data to coordinate between activities.
   *
   * @param key - item key
   * @returns value of the item
   */
  dictionaryGetItem(key) {
    return this.sessionDictionary.get(key);
  }
  /**
   * Deletes an item value from the session's key-value dictionary.
   *
   * @remarks The session dictionary is not persisted. It is available only
   * during the actively running session. It is useful for storing temporary
   * data to coordinate between activities.
   *
   * @param key - item key
   * @returns true if the item was deleted, false if it did not exist
   */
  dictionaryDeleteItem(key) {
    return this.sessionDictionary.delete(key);
  }
  /**
   * Determines if a key exists in the activity's key-value dictionary.
   *
   * @remarks The session dictionary is not persisted. It is available only
   * during the actively running session. It is useful for storing temporary
   * data to coordinate between activities.
   *
   * @param key - item key
   * @returns true if the key exists, false otherwise
   */
  dictionaryItemExists(key) {
    return this.sessionDictionary.has(key);
  }
  /**
   * Returns the filename from a url.
   *
   * @param url - url to parse
   * @returns filename
   */
  getFilenameFromUrl(url) {
    return url.substring(url.lastIndexOf("/") + 1);
  }
  /**
   * Returns the duplicated strings in an array.
   *
   * @param s - array of strings
   * @returns array of duplicated strings
   */
  getDuplicates(s) {
    const count = {};
    const duplicates = [];
    for (const str of s) {
      count[str] = (count[str] || 0) + 1;
      if (count[str] === 2) {
        duplicates.push(str);
      }
    }
    return duplicates;
  }
  get uuid() {
    if (!this._uuid) {
      console.warn("Session.uuid is undefined. Returning empty UUID.");
      return "00000000-0000-0000-0000-000000000000";
    }
    return this._uuid;
  }
  set uuid(value) {
    this._uuid = value;
  }
  /**
     * Sets the value of a variable that will be the same for all diagnostic data.
     *
     * @remarks This is useful for custom variables to appear in the diagnostic
     * data. For example, you might save the subject's participant ID, or some
     * other identifier that is not typically part of the diagnostic data. In
     * the example below, if an exception occurs, the `participant_id` variable
     * will be saved with the value `12345` within the diagnostic data.
     * 
     * @example
     * ```
     * session.addStaticDiagnosticData("participant_id", "12345");
     *```
  
     * @param key - key (variable name) for the static diagnostic data
     * @param value - value for the data
     */
  addStaticDiagnosticData(key, value) {
    if (this.diagnosticsReporter) {
      this.diagnosticsReporter.addStaticDiagnosticData(key, value);
    } else {
      console.warn(
        `Session.addStaticDiagnosticData(): diagnostics reporter has not been created.`
      );
    }
  }
}

console.log("\u26AA @m2c2kit/session version 0.3.12 (9f27c146)");

class Grid extends Composite {
  /**
   * A rectangular grid that supports placement of nodes within the grid's
   * cells.
   *
   * @remarks This composite node is composed of rectangles and lines. It
   * has convenience functions for placing and clearing nodes on the grid
   * by row and column position (zero-based indexing)
   *
   * @param options - {@link GridOptions}
   */
  constructor(options) {
    super(options);
    this.compositeType = "Grid";
    // Grid options
    this._rows = 0;
    this._columns = 0;
    // default Grid is: transparent blue, red lines, line width 1
    this._gridBackgroundColor = [0, 0, 255, 0.25];
    this._gridLineColor = WebColors.Red;
    this._gridLineWidth = 1;
    this._gridChildren = new Array();
    this.cellContainers = new Array();
    if (options.size) {
      this.size = options.size;
    } else {
      throw new M2Error("grid size must be specified");
    }
    if (options.rows) {
      if (options.rows >= 1) {
        this.rows = options.rows;
      } else {
        throw new M2Error("grid rows must be at least 1");
      }
    } else {
      throw new M2Error("grid rows must be specified");
    }
    if (options.columns) {
      if (options.columns >= 1) {
        this.columns = options.columns;
      } else {
        throw new M2Error("grid columns must be at least 1");
      }
    } else {
      throw new M2Error("grid columns must be specified");
    }
    if (options.backgroundColor) {
      this.gridBackgroundColor = options.backgroundColor;
    }
    if (options.gridLineColor) {
      this.gridLineColor = options.gridLineColor;
    }
    if (options.gridLineWidth) {
      this.gridLineWidth = options.gridLineWidth;
    }
    this.cellWidth = this.size.width / this.columns;
    this.cellHeight = this.size.height / this.rows;
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      rows: this.rows,
      columns: this.columns,
      size: this.size,
      backgroundColor: this.gridBackgroundColor,
      gridLineWidth: this.gridLineWidth,
      gridLineColor: this.gridLineColor
    };
  }
  initialize() {
    this.descendants.forEach((d) => {
      if (d.parent === this) {
        super.removeChild(d);
      } else {
        d.parent?.removeChild(d);
      }
    });
    this.gridBackground = new Shape({
      name: "__" + this.name + "-gridRectangle",
      rect: { size: this.size },
      fillColor: this.gridBackgroundColor,
      strokeColor: this.gridLineColor,
      lineWidth: this.gridLineWidth,
      isUserInteractionEnabled: this.isUserInteractionEnabled,
      suppressEvents: true
    });
    super.addChild(this.gridBackground);
    this.gridBackground.isUserInteractionEnabled = this.isUserInteractionEnabled;
    for (let col = 1; col < this.columns; col++) {
      const verticalLine = new Shape({
        name: "__" + this.name + "-gridVerticalLine-" + (col - 1),
        rect: {
          size: { width: this.gridLineWidth, height: this.size.height },
          origin: { x: -this.size.width / 2 + this.cellWidth * col, y: 0 }
        },
        fillColor: this.gridLineColor,
        suppressEvents: true
      });
      this.gridBackground.addChild(verticalLine);
    }
    for (let row = 1; row < this.rows; row++) {
      const horizontalLine = new Shape({
        name: "__" + this.name + "-gridHorizontalLine-" + (row - 1),
        rect: {
          size: { width: this.size.width, height: this.gridLineWidth },
          origin: { x: 0, y: -this.size.height / 2 + this.cellHeight * row }
        },
        fillColor: this.gridLineColor,
        suppressEvents: true
      });
      this.gridBackground.addChild(horizontalLine);
    }
    this.cellContainers = new Array(this.rows).fill([]).map(() => new Array(this.columns));
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        const cellContainer = new Shape({
          name: "__" + this.name + "-gridCellContainer-" + row + "-" + col,
          rect: {
            size: { width: this.cellWidth, height: this.cellHeight },
            origin: {
              x: -this.size.width / 2 + this.cellWidth * col + this.cellWidth / 2,
              y: -this.size.height / 2 + this.cellHeight * row + this.cellHeight / 2
            }
          },
          fillColor: WebColors.Transparent,
          lineWidth: 0,
          suppressEvents: true
        });
        this.gridBackground.addChild(cellContainer);
        this.cellContainers[row][col] = cellContainer;
      }
    }
    if (this.gridChildren.length > 0) {
      this.gridChildren.forEach((gridChild) => {
        if (!this.cellWidth || !this.cellHeight || !this.gridBackground) {
          throw new M2Error(
            "cellWidth, cellHeight, or gridBackground undefined or null"
          );
        }
        if (this.game.eventStore.mode === EventStoreMode.Replay) {
          const childNode = [
            ...this.game.nodes,
            ...this.game.materializedNodes
          ].find(
            (n) => (
              // gridChild.node is the uuid of the child node here!
              n.uuid === gridChild.node
            )
          );
          if (!childNode) {
            throw new M2Error("grid: child node not found");
          }
          childNode?.parent?.removeChild(childNode);
          this.cellContainers[gridChild.row][gridChild.column].addChild(
            childNode
          );
        } else {
          gridChild.node.parent?.removeChild(gridChild.node);
          this.cellContainers[gridChild.row][gridChild.column].addChild(
            gridChild.node
          );
        }
      });
    }
    this.needsInitialization = false;
  }
  get gridBackground() {
    if (!this._gridBackground) {
      throw new M2Error("gridBackground is null or undefined");
    }
    return this._gridBackground;
  }
  set gridBackground(gridBackground) {
    this._gridBackground = gridBackground;
  }
  /**
   * note: below we do not have getter and setter for size because the getter
   * and setter in M2Node will handle it.
   */
  get rows() {
    return this._rows;
  }
  set rows(rows) {
    if (Equal.value(this._rows, rows)) {
      return;
    }
    this._rows = rows;
    this.needsInitialization = true;
  }
  get columns() {
    return this._columns;
  }
  set columns(columns) {
    if (Equal.value(this._columns, columns)) {
      return;
    }
    this._columns = columns;
    this.needsInitialization = true;
  }
  get gridBackgroundColor() {
    return this._gridBackgroundColor;
  }
  set gridBackgroundColor(backgroundColor) {
    if (Equal.value(this._gridBackgroundColor, backgroundColor)) {
      return;
    }
    this._gridBackgroundColor = backgroundColor;
    this.needsInitialization = true;
  }
  get gridLineWidth() {
    return this._gridLineWidth;
  }
  set gridLineWidth(gridLineWidth) {
    if (Equal.value(this._gridLineWidth, gridLineWidth)) {
      return;
    }
    this._gridLineWidth = gridLineWidth;
    this.needsInitialization = true;
  }
  get gridLineColor() {
    return this._gridLineColor;
  }
  set gridLineColor(gridLineColor) {
    if (Equal.value(this._gridLineColor, gridLineColor)) {
      return;
    }
    this._gridLineColor = gridLineColor;
    this.needsInitialization = true;
  }
  // all nodes that make up grid are added as children, so they
  // have their own dispose methods
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispose() {
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new Grid({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      rows: this.rows,
      columns: this.columns,
      size: this.size,
      backgroundColor: this.gridBackgroundColor,
      gridLineWidth: this.gridLineWidth,
      gridLineColor: this.gridLineColor,
      name: newName
    });
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  update() {
    super.update();
  }
  draw(canvas) {
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    this.initialize();
    this.children.filter((child) => child.isDrawable).forEach((child) => {
      child.warmup(canvas);
    });
  }
  /**
   * The child nodes that have been added to the grid.
   *
   * @remarks Do not set this property directly. Use the methods for adding
   * and removing grid children, such as `addAtCell()`, `removeAllAtCell()`,
   * `removeGridChild()`, and `removeAllGridChildren()`.
   */
  get gridChildren() {
    return this._gridChildren;
  }
  set gridChildren(gridChildren) {
    this._gridChildren = gridChildren;
    this.needsInitialization = true;
    this.savePropertyChangeEvent(
      "gridChildren",
      this.gridChildren.map(
        (gridChild) => ({
          node: gridChild.node.uuid,
          row: gridChild.row,
          column: gridChild.column
        })
      )
    );
  }
  /**
   * Removes all grid children from the grid.
   *
   * @remarks This retains grid lines and grid appearance.
   */
  removeAllGridChildren() {
    if (this.gridChildren.length === 0) {
      return;
    }
    while (this.gridChildren.length) {
      this.gridChildren = this.gridChildren.slice(0, -1);
    }
    this.needsInitialization = true;
  }
  /**
   * Adds a node as a grid child to the grid at the specified row and column
   * position.
   *
   * @param node - node to add to the grid
   * @param row  - row position within grid to add node; zero-based indexing
   * @param column - column position within grid to add node; zero-based indexing
   */
  addAtCell(node, row, column) {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      console.warn(
        `warning: addAtCell() requested to add node at row ${row}, column ${column}. This is outside the bounds of grid ${this.name}, which is size ${this.rows}x${this.columns}. Note that addAtCell() uses zero-based indexing. AddAtCell() will proceed, but may draw nodes outside the grid`
      );
    }
    this.gridChildren = [
      ...this.gridChildren,
      { node, row, column }
    ];
    this.needsInitialization = true;
  }
  /**
   * Removes all grid child nodes at the specified row and column position.
   *
   * @param row - row position within grid at which to remove grid children; zero-based indexing
   * @param column - column position within grid at which to remove grid children; zero-based indexing
   */
  removeAllAtCell(row, column) {
    this.gridChildren = this.gridChildren.filter(
      (gridChild) => gridChild.row !== row && gridChild.column !== column
    );
    this.needsInitialization = true;
  }
  /**
   * Removes the grid child node from the grid.
   *
   * @param node - node to remove
   */
  removeGridChild(node) {
    this.gridChildren = this.gridChildren.filter(
      (gridChild) => gridChild.node != node
    );
    this.needsInitialization = true;
  }
  // The Grid manages its own children (background, lines, and cell
  // containers). It is probably a mistake when the user tries to add or remove
  // these children. The user probably meant to add or remove grid children
  // instead. Warn the user about this.
  addChild(child) {
    console.warn(
      "Grid.addChild() was called -- did you mean to call addAtCell() instead?"
    );
    super.addChild(child);
  }
  removeAllChildren() {
    console.warn(
      "Grid.removeAllChildren() was called -- did you mean to call removeAllGridChildren() instead?"
    );
    super.removeAllChildren();
  }
  removeChild(child) {
    console.warn(
      "Grid.removeChild() was called -- did you mean to call removeGridChild() instead?"
    );
    super.removeChild(child);
  }
  removeChildren(children) {
    console.warn(
      "Grid.removeChildren() was called -- did you mean to call removeGridChild() instead?"
    );
    super.removeChildren(children);
  }
}
M2c2KitHelpers.registerM2NodeClass(Grid);

class Button extends Composite {
  // TODO: add default "behaviors" (?) like button click animation?
  /**
   * A simple button of rectangle with text centered inside.
   *
   * @remarks This composite node is composed of a rectangle and text. To
   * respond to user taps, the isUserInteractionEnabled property must be set
   * to true and an appropriate callback must be set to handle the tap event.
   *
   * @param options - {@link ButtonOptions}
   */
  constructor(options) {
    super(options);
    this.compositeType = "Button";
    this.isText = true;
    // Button options
    this._backgroundColor = WebColors.Black;
    this._cornerRadius = 9;
    this._fontSize = 20;
    this._text = "";
    this._fontColor = WebColors.White;
    this._interpolation = {};
    this._localize = true;
    if (options.text) {
      this.text = options.text;
    }
    if (options.size) {
      this.size = options.size;
    } else {
      this.size = { width: 200, height: 50 };
    }
    if (options.cornerRadius !== void 0) {
      this.cornerRadius = options.cornerRadius;
    }
    if (options.fontName) {
      this.fontName = options.fontName;
    }
    if (options.fontNames) {
      this.fontNames = options.fontNames;
    }
    if (options.fontSize !== void 0) {
      this.fontSize = options.fontSize;
    }
    if (options.fontColor) {
      this.fontColor = options.fontColor;
    }
    if (options.backgroundColor) {
      this.backgroundColor = options.backgroundColor;
    }
    if (options.interpolation) {
      this.interpolation = options.interpolation;
    }
    if (options.localize !== void 0) {
      this.localize = options.localize;
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.getTextOptions(),
      size: this.size,
      cornerRadius: this.cornerRadius,
      backgroundColor: this.backgroundColor,
      fontNames: this.fontNames
    };
  }
  initialize() {
    this.removeAllChildren();
    this.backgroundPaint = new this.canvasKit.Paint();
    this.backgroundPaint.setColor(
      this.canvasKit.Color(
        this.backgroundColor[0],
        this.backgroundColor[1],
        this.backgroundColor[2],
        this.backgroundColor[3]
      )
    );
    this.backgroundPaint.setStyle(this.canvasKit.PaintStyle.Fill);
    const buttonRectangle = new Shape({
      name: "__" + this.name + "-buttonRectangle",
      rect: { size: this.size },
      cornerRadius: this.cornerRadius,
      fillColor: this._backgroundColor,
      suppressEvents: true
    });
    this.addChild(buttonRectangle);
    const buttonLabel = new Label({
      name: "__" + this.name + "-buttonLabel",
      text: this.text,
      localize: this.localize,
      interpolation: this.interpolation,
      fontName: this.fontName,
      fontNames: this.fontNames,
      fontSize: this.fontSize,
      fontColor: this.fontColor,
      suppressEvents: true
    });
    buttonRectangle.addChild(buttonLabel);
    this.needsInitialization = false;
  }
  dispose() {
    CanvasKitHelpers.Dispose([this.backgroundPaint]);
  }
  get text() {
    return this._text;
  }
  set text(text) {
    if (Equal.value(this._text, text)) {
      return;
    }
    this._text = text;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("text", text);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(backgroundColor) {
    if (Equal.value(this._backgroundColor, backgroundColor)) {
      return;
    }
    this._backgroundColor = backgroundColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("backgroundColor", backgroundColor);
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(fontColor) {
    if (Equal.value(this._fontColor, fontColor)) {
      return;
    }
    this._fontColor = fontColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontColor", fontColor);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(fontName) {
    if (this._fontName === fontName) {
      return;
    }
    this._fontName = fontName;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontName", fontName);
  }
  get fontNames() {
    return this._fontNames;
  }
  set fontNames(fontNames) {
    if (Equal.value(this._fontNames, fontNames)) {
      return;
    }
    this._fontNames = fontNames;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontNames", fontNames);
  }
  get cornerRadius() {
    return this._cornerRadius;
  }
  set cornerRadius(cornerRadius) {
    if (Equal.value(this._cornerRadius, cornerRadius)) {
      return;
    }
    this._cornerRadius = cornerRadius;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("cornerRadius", cornerRadius);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(fontSize) {
    if (Equal.value(this._fontSize, fontSize)) {
      return;
    }
    this._fontSize = fontSize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontSize", fontSize);
  }
  get interpolation() {
    return this._interpolation;
  }
  set interpolation(interpolation) {
    if (Equal.value(this._interpolation, interpolation)) {
      return;
    }
    this._interpolation = interpolation;
    Object.freeze(this._interpolation);
    this.needsInitialization = true;
    this.savePropertyChangeEvent("interpolation", interpolation);
  }
  get localize() {
    return this._localize;
  }
  set localize(localize) {
    if (Equal.value(this._localize, localize)) {
      return;
    }
    this._localize = localize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("localize", localize);
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    const dest = new Button({
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.getTextOptions(),
      size: this.size,
      cornerRadius: this.cornerRadius,
      backgroundColor: this.backgroundColor,
      fontColor: this.fontColor,
      name: newName,
      localize: this.localize,
      interpolation: JSON.parse(JSON.stringify(this.interpolation)),
      fontName: this.fontName,
      fontNames: JSON.parse(JSON.stringify(this.fontNames))
    });
    if (this.children.length > 0) {
      dest.children = this.children.map((child) => {
        const clonedChild = child.duplicate();
        clonedChild.parent = dest;
        return clonedChild;
      });
    }
    return dest;
  }
  update() {
    super.update();
  }
  draw(canvas) {
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    this.initialize();
    this.children.filter((child) => child.isDrawable).forEach((child) => {
      child.warmup(canvas);
    });
  }
}
M2c2KitHelpers.registerM2NodeClass(Button);

const DrawPadEventType = {
  StrokeStart: "StrokeStart",
  StrokeMove: "StrokeMove",
  StrokeEnd: "StrokeEnd"
};
const DrawPadItemEventType = {
  StrokeEnter: "StrokeEnter",
  StrokeLeave: "StrokeLeave"
};
class DrawPad extends Composite {
  /**
   * A rectangular area on which the user can draw strokes (lines).
   *
   * @remarks This composite node is composed of a rectangle Shape and
   * another Shape that is formed from a path of points.
   *
   * @param options - {@link DrawPadOptions}
   */
  constructor(options) {
    super(options);
    this.compositeType = "DrawPad";
    this.resumeDrawingOnReturn = false;
    this.continuousDrawingOnly = false;
    this._backgroundColor = [0, 0, 0, 0];
    this._borderColor = WebColors.Black;
    this._borderWidth = 1;
    this._lineColor = WebColors.Red;
    this._lineWidth = 1;
    this.isDrawingPointerDown = false;
    this.pointerIsDownAndPointerLeftDrawAreaWhenDown = false;
    this.currentStrokesNotAllowed = false;
    /** Array of strokes created on the DrawPad, with position and timestamps
     * of all interactions with each DrawPadStroke.
     */
    this.strokes = new Array();
    this.originalOptions = JSON.parse(JSON.stringify(options));
    if (options.isUserInteractionEnabled === void 0) {
      this.isUserInteractionEnabled = true;
    }
    if (!options.size) {
      throw new M2Error("DrawPad size must be specified");
    }
    this.size = options.size;
    if (options.lineColor) {
      this.lineColor = options.lineColor;
    }
    if (options.lineWidth) {
      this.lineWidth = options.lineWidth;
    }
    if (options.backgroundColor) {
      this.backgroundColor = options.backgroundColor;
    }
    if (options.borderColor) {
      this.borderColor = options.borderColor;
    }
    if (options.borderWidth) {
      this.borderWidth = options.borderWidth;
    }
    if (options.resumeDrawingOnReturn !== void 0) {
      this.resumeDrawingOnReturn = options.resumeDrawingOnReturn;
    }
    if (options.continuousDrawingOnly !== void 0) {
      this.continuousDrawingOnly = options.continuousDrawingOnly;
    }
    if (options.continuousDrawingOnlyExceptionDistance !== void 0) {
      this.continuousDrawingOnlyExceptionDistance = options.continuousDrawingOnlyExceptionDistance;
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.originalOptions
    };
  }
  initialize() {
    this.initializeDrawShape();
    this.initializeDrawArea();
    this.needsInitialization = false;
  }
  initializeDrawShape() {
    if (!this.drawShape) {
      const mutablePath = new MutablePath();
      this.drawShape = new Shape({
        path: mutablePath,
        size: this.size
      });
      this.addChild(this.drawShape);
    }
    this.drawShape.strokeColor = this.lineColor;
    this.drawShape.lineWidth = this.lineWidth;
  }
  initializeDrawArea() {
    if (!this.drawArea) {
      this.drawArea = new Shape({
        rect: { size: this.size },
        isUserInteractionEnabled: true,
        suppressEvents: true
      });
      this.addChild(this.drawArea);
      this.drawArea.onTapDown((e) => {
        this.handleTapDown(e);
      });
      this.drawArea.onPointerMove((e) => {
        this.handlePointerMove(e);
      });
      this.drawArea.onTapUpAny(() => {
        this.handleTapUpAny();
      });
      this.drawArea.onTapLeave((e) => {
        this.handleTapLeave(e);
      });
    }
    this.drawArea.fillColor = this.backgroundColor;
    this.drawArea.strokeColor = this.borderColor;
    this.drawArea.lineWidth = this.borderWidth;
  }
  dist(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
  handleTapDown(e) {
    if (this.isUserInteractionEnabled) {
      if (!this.drawShape?.path) {
        throw new M2Error("DrawPad.handleTapDown(): no drawShape.path");
      }
      const path = this.drawShape.path;
      if (this.continuousDrawingOnly && path.subpaths.length !== 0) {
        const prevPoint = path.subpaths[path.subpaths.length - 1][path.subpaths[path.subpaths.length - 1].length - 1];
        const currentPoint = e.point;
        if (this.continuousDrawingOnlyExceptionDistance === void 0 || this.dist(prevPoint, currentPoint) > this.continuousDrawingOnlyExceptionDistance) {
          this.currentStrokesNotAllowed = true;
          return;
        }
      }
      this.currentStrokesNotAllowed = false;
      this.isDrawingPointerDown = true;
      path.move(e.point);
      const drawPadEvent = {
        type: DrawPadEventType.StrokeStart,
        target: this,
        handled: false,
        position: e.point,
        ...M2c2KitHelpers.createTimestamps()
      };
      this.strokes.push([
        {
          type: DrawPadEventType.StrokeStart,
          position: e.point,
          iso8601Timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          interpolated: false
        }
      ]);
      this.raiseDrawPadEvent(drawPadEvent);
    }
  }
  addInterpolatedStrokeMove(point) {
    const strokeCount = this.strokes.length;
    const strokeInteractionCount = this.strokes[strokeCount - 1].length;
    const previousPoint = this.strokes[this.strokes.length - 1][strokeInteractionCount - 1].position;
    const interpolatedPoint = this.interpolateToDrawPadBorder(
      point,
      previousPoint,
      this.size
    );
    if (!this.drawShape?.path) {
      throw new M2Error(
        "DrawPad.addInterpolatedStrokeMove(): no drawShape.path"
      );
    }
    const path = this.drawShape.path;
    path.addLine(interpolatedPoint);
    const drawPadEvent = {
      type: DrawPadEventType.StrokeMove,
      target: this,
      handled: false,
      position: interpolatedPoint,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.strokes[strokeCount - 1].push({
      type: DrawPadEventType.StrokeMove,
      position: interpolatedPoint,
      iso8601Timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      interpolated: true
    });
    this.raiseDrawPadEvent(drawPadEvent);
    return interpolatedPoint;
  }
  handleTapLeave(e) {
    if (this.currentStrokesNotAllowed) {
      this.isDrawingPointerDown = false;
      return;
    }
    if (this.resumeDrawingOnReturn === false) {
      this.isDrawingPointerDown = false;
      const strokeCount = this.strokes.length;
      const strokeInteractionCount = this.strokes[strokeCount - 1].length;
      let pointWasInterpolated = false;
      let point = e.point;
      if (!this.isPointWithinDrawPad(e.point, this.size)) {
        point = this.addInterpolatedStrokeMove(e.point);
        pointWasInterpolated = true;
      }
      const drawPadEvent = {
        type: DrawPadEventType.StrokeEnd,
        position: this.strokes[strokeCount - 1][strokeInteractionCount - 1].position,
        target: this,
        handled: false,
        ...M2c2KitHelpers.createTimestamps()
      };
      this.strokes[strokeCount - 1].push({
        type: DrawPadEventType.StrokeEnd,
        position: pointWasInterpolated ? point : this.strokes[strokeCount - 1][strokeInteractionCount - 1].position,
        iso8601Timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        interpolated: pointWasInterpolated
      });
      this.raiseDrawPadEvent(drawPadEvent);
      this.currentStrokesNotAllowed = true;
    } else {
      this.pointerIsDownAndPointerLeftDrawAreaWhenDown = true;
    }
  }
  handleTapUpAny() {
    if (this.currentStrokesNotAllowed) {
      this.isDrawingPointerDown = false;
      return;
    }
    if (this.isUserInteractionEnabled) {
      this.isDrawingPointerDown = false;
      this.pointerIsDownAndPointerLeftDrawAreaWhenDown = false;
      const strokeCount = this.strokes.length;
      const strokeInteractionCount = this.strokes[strokeCount - 1].length;
      const drawPadEvent = {
        type: DrawPadEventType.StrokeEnd,
        position: this.strokes[strokeCount - 1][strokeInteractionCount - 1].position,
        target: this,
        handled: false,
        ...M2c2KitHelpers.createTimestamps()
      };
      this.strokes[strokeCount - 1].push({
        type: DrawPadEventType.StrokeEnd,
        position: this.strokes[strokeCount - 1][strokeInteractionCount - 1].position,
        iso8601Timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        interpolated: false
      });
      this.raiseDrawPadEvent(drawPadEvent);
    }
  }
  handlePointerMove(e) {
    if (this.isUserInteractionEnabled && this.isDrawingPointerDown) {
      if (!this.drawShape?.path) {
        throw new M2Error("DrawPad.handlePointerMove(): no drawShape.path");
      }
      const path = this.drawShape.path;
      if (this.isDrawingPointerDown && !this.pointerIsDownAndPointerLeftDrawAreaWhenDown) {
        path.addLine(e.point);
      }
      if (this.pointerIsDownAndPointerLeftDrawAreaWhenDown) {
        this.pointerIsDownAndPointerLeftDrawAreaWhenDown = false;
        path.move(e.point);
      }
      const drawPadEvent = {
        type: DrawPadEventType.StrokeMove,
        target: this,
        handled: false,
        position: e.point,
        ...M2c2KitHelpers.createTimestamps()
      };
      const strokeCount = this.strokes.length;
      this.strokes[strokeCount - 1].push({
        type: DrawPadEventType.StrokeMove,
        position: e.point,
        iso8601Timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        interpolated: false
      });
      this.raiseDrawPadEvent(drawPadEvent);
    }
  }
  update() {
    super.update();
  }
  draw(canvas) {
    super.drawChildren(canvas);
  }
  raiseDrawPadEvent(event) {
    if (this.eventListeners.length > 0) {
      this.eventListeners.filter((listener) => listener.type === event.type).forEach((listener) => {
        listener.callback(event);
      });
    }
  }
  raiseDrawPadItemEvent(item, event) {
    if (item.eventListeners.length > 0) {
      item.eventListeners.filter((listener) => listener.type === event.type).forEach((listener) => {
        listener.callback(event);
      });
    }
  }
  /**
   * Removes all strokes from the DrawPad.
   */
  clear() {
    if (!this.drawShape?.path) {
      throw new M2Error("DrawPad.clear(): no drawShape.path");
    }
    const path = this.drawShape.path;
    path.clear();
    this.strokes = new Array();
  }
  warmup(canvas) {
    this.initialize();
    this.children.filter((child) => child.isDrawable).forEach((child) => {
      child.warmup(canvas);
    });
  }
  /**
   * Executes a callback when the user starts a stroke on the DrawPad.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onStrokeStart(callback, options) {
    this.addEventListener(
      DrawPadEventType.StrokeStart,
      callback,
      options
    );
  }
  /**
   * Executes a callback when the user moves a stroke on the DrawPad.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onStrokeMove(callback, options) {
    this.addEventListener(
      DrawPadEventType.StrokeMove,
      callback,
      options
    );
  }
  /**
   * Executes a callback when the user ends a stroke on the DrawPad.
   *
   * @param callback - function to execute
   * @param options - {@link CallbackOptions}
   */
  onStrokeEnd(callback, options) {
    this.addEventListener(
      DrawPadEventType.StrokeEnd,
      callback,
      options
    );
  }
  /**
   * Adds a node to the DrawPad.
   *
   * @remarks After the node is added to the DrawPad, its
   * position is adjusted to be relative to the DrawPad's coordinate
   * system, and it is made interactive. The method returns an object
   * which is the node as a DrawPadItem, which has additional methods,
   * properties, and events specific to it now being on a DrawPad. The node
   * now **must** be manipulated only using the DrawPadItem object. Using
   * the original node object will result in undefined behavior.
   *
   * @param node - the node to add to the DrawPad
   * @returns the node as a DrawPadItem
   */
  addItem(node) {
    Object.defineProperty(node, "drawPadPosition", {
      get: function() {
        const drawPad = node.parent;
        return {
          get x() {
            return node.position.x + drawPad.size.width / 2;
          },
          set x(value) {
            node.position.x = value - drawPad.size.width / 2;
          },
          get y() {
            return node.position.y + drawPad.size.height / 2;
          },
          set y(value) {
            node.position.y = value - drawPad.size.height / 2;
          }
        };
      },
      set: function(value) {
        const drawPad = node.parent;
        node.position.x = value.x - drawPad.size.width / 2;
        node.position.y = value.y - drawPad.size.height / 2;
      }
    });
    Object.defineProperty(node, "onStrokeEnter", {
      value: function(callback, options) {
        this.addEventListener(
          DrawPadItemEventType.StrokeEnter,
          callback,
          options
        );
      }
    });
    Object.defineProperty(node, "onStrokeLeave", {
      value: function(callback, options) {
        this.addEventListener(
          DrawPadItemEventType.StrokeLeave,
          callback,
          options
        );
      }
    });
    Object.defineProperty(node, "isStrokeWithinBounds", {
      value: false,
      writable: true
    });
    node.onPointerDown(() => {
      if (this.isDrawingPointerDown) {
        if (node.isStrokeWithinBounds === false) {
          node.isStrokeWithinBounds = true;
          const drawPadItemEvent = {
            type: DrawPadItemEventType.StrokeEnter,
            target: node,
            ...M2c2KitHelpers.createTimestamps()
          };
          this.raiseDrawPadItemEvent(node, drawPadItemEvent);
        }
      }
    });
    node.onPointerMove(() => {
      if (this.isDrawingPointerDown) {
        if (node.isStrokeWithinBounds === false) {
          node.isStrokeWithinBounds = true;
          const drawPadItemEvent = {
            type: DrawPadItemEventType.StrokeEnter,
            target: node,
            ...M2c2KitHelpers.createTimestamps()
          };
          this.raiseDrawPadItemEvent(node, drawPadItemEvent);
        }
      }
    });
    node.onPointerLeave(() => {
      if (this.isDrawingPointerDown) {
        if (node.isStrokeWithinBounds === true) {
          node.isStrokeWithinBounds = false;
          const drawPadItemEvent = {
            type: DrawPadItemEventType.StrokeLeave,
            target: node,
            ...M2c2KitHelpers.createTimestamps()
          };
          this.raiseDrawPadItemEvent(node, drawPadItemEvent);
        }
      }
    });
    node.onPointerUp(() => {
      if (node.isStrokeWithinBounds === true) {
        node.isStrokeWithinBounds = false;
        const drawPadItemEvent = {
          type: DrawPadItemEventType.StrokeLeave,
          target: node,
          ...M2c2KitHelpers.createTimestamps()
        };
        this.raiseDrawPadItemEvent(node, drawPadItemEvent);
      }
    });
    this.addChild(node);
    node.zPosition = -1;
    node.position.x = node.position.x - this.size.width / 2;
    node.position.y = node.position.y - this.size.height / 2;
    node.isUserInteractionEnabled = true;
    return node;
  }
  /**
   * Takes a screenshot of the DrawPad.
   *
   * @returns a base64-encoded string of the DrawPad's current state in
   * PNG format.
   */
  takeScreenshot() {
    const drawArea = this.drawArea;
    if (!drawArea) {
      throw new M2Error("DrawPad.takeScreenshot(): no drawArea");
    }
    const sx = (drawArea.absolutePosition.x - drawArea.size.width / 2) * m2c2Globals.canvasScale;
    const sy = (drawArea.absolutePosition.y - drawArea.size.height / 2) * m2c2Globals.canvasScale;
    const sw = drawArea.size.width * m2c2Globals.canvasScale;
    const sh = drawArea.size.height * m2c2Globals.canvasScale;
    const imageInfo = {
      alphaType: this.game.canvasKit.AlphaType.Unpremul,
      colorType: this.game.canvasKit.ColorType.RGBA_8888,
      colorSpace: this.game.canvasKit.ColorSpace.SRGB,
      width: sw,
      height: sh
    };
    const snapshot = this.game.snapshots[0];
    const pixelData = snapshot.readPixels(sx, sy, imageInfo);
    const croppedImage = this.game.canvasKit.MakeImage(
      imageInfo,
      pixelData,
      pixelData.length / sh
    );
    if (!croppedImage) {
      throw new M2Error("DrawPad.takeScreenshot(): no croppedImage");
    }
    const bytes = croppedImage.encodeToBytes();
    if (!bytes) {
      throw new M2Error(
        "DrawPad.takeScreenshot(): croppedImage.encodeToBytes() failed"
      );
    }
    croppedImage.delete();
    return this.arrayBufferToBase64String(bytes);
  }
  /**
   * Determines whether a point is within the DrawPad.
   *
   * @param point - The point to check
   * @returns True - if the point is within the DrawPad, false otherwise
   */
  isPointWithinDrawPad(point, drawPadSize) {
    return point.x >= 0 && point.x <= drawPadSize.width && point.y >= 0 && point.y <= drawPadSize.height;
  }
  /**
   * Interpolates a point to the border of the DrawPad based on a line that
   * crosses the DrawPad border. The line is formed by the current "out of
   * bounds" point the and previous "within bounds" point.
   *
   * @param currentPoint - The current point
   * @param previousPoint - The previous point
   * @param drawPadSize - The size of the DrawPad
   * @returns A new point on the border of the DrawPad
   */
  interpolateToDrawPadBorder(currentPoint, previousPoint, drawPadSize) {
    const slope = (currentPoint.y - previousPoint.y) / (currentPoint.x - previousPoint.x);
    const intercept = currentPoint.y - slope * currentPoint.x;
    const newPoint = { x: 0, y: 0 };
    if (!Number.isFinite(slope)) {
      newPoint.x = currentPoint.x;
      if (currentPoint.y - previousPoint.y > 0) {
        newPoint.y = drawPadSize.height;
        return newPoint;
      }
      if (currentPoint.y - previousPoint.y < 0) {
        newPoint.y = 0;
        return newPoint;
      }
    }
    const yLeft = slope * 0 + intercept;
    const yRight = slope * drawPadSize.width + intercept;
    if (yLeft >= 0 && yLeft <= drawPadSize.height) {
      if (currentPoint.x - previousPoint.x < 0) {
        newPoint.x = 0;
        newPoint.y = yLeft;
        return newPoint;
      }
    }
    if (yRight >= 0 && yRight <= drawPadSize.height) {
      if (currentPoint.x - previousPoint.x > 0) {
        newPoint.x = drawPadSize.width;
        newPoint.y = yRight;
        return newPoint;
      }
    }
    const xTop = (0 - intercept) / slope;
    const xBottom = (drawPadSize.height - intercept) / slope;
    if (xTop >= 0 && xTop <= drawPadSize.width) {
      if (currentPoint.y - previousPoint.y < 0) {
        newPoint.x = xTop;
        newPoint.y = 0;
        return newPoint;
      }
    }
    if (xBottom >= 0 && xBottom <= drawPadSize.width) {
      if (currentPoint.y - previousPoint.y > 0) {
        newPoint.x = xBottom;
        newPoint.y = drawPadSize.height;
        return newPoint;
      }
    }
    return currentPoint;
  }
  arrayBufferToBase64String(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(backgroundColor) {
    this._backgroundColor = backgroundColor;
    this.needsInitialization = true;
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(borderColor) {
    this._borderColor = borderColor;
    this.needsInitialization = true;
  }
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(borderWidth) {
    this._borderWidth = borderWidth;
    this.needsInitialization = true;
  }
  get lineColor() {
    return this._lineColor;
  }
  set lineColor(lineColor) {
    this._lineColor = lineColor;
    this.needsInitialization = true;
  }
  get lineWidth() {
    return this._lineWidth;
  }
  set lineWidth(lineWidth) {
    this._lineWidth = lineWidth;
    this.needsInitialization = true;
  }
  duplicate(newName) {
    throw new M2Error(
      `DrawPad.duplicate(): Method not implemented. ${newName}`
    );
  }
}
M2c2KitHelpers.registerM2NodeClass(DrawPad);

class VirtualKeyboard extends Composite {
  /**
   * An on-screen keyboard that can be used to enter text.
   *
   * @param options - {@link VirtualKeyboardOptions}
   */
  constructor(options) {
    super(options);
    this.compositeType = "VirtualKeyboard";
    this.keyboardRows = new Array();
    this.shiftActivated = false;
    this.keyShapes = new Array();
    this.keyLabels = new Array();
    this.originalOptions = JSON.parse(JSON.stringify(options));
    if (options.isUserInteractionEnabled === void 0) {
      this._isUserInteractionEnabled = true;
    }
    this.size = options.size;
    this.position = options.position ?? { x: 0, y: 0 };
    this.keyboardHorizontalPaddingPercent = options.keyboardHorizontalPaddingPercent ?? 0.02;
    this.keyboardVerticalPaddingPercent = options.keyboardVerticalPaddingPercent ?? 0.025;
    this.keyHorizontalPaddingPercent = options.keyHorizontalPaddingPercent ?? 0.1;
    this.keyVerticalPaddingPercent = options.keyVerticalPaddingPercent ?? 0.1;
    if (options.rows !== void 0) {
      this.keyboardRows = options.rows.map((row) => {
        const internalRow = row.map((key) => {
          if (key instanceof Object && !Array.isArray(key)) {
            const internalKeyConfig = key;
            if (key.keyIconShapeOptions) {
              key.keyIconShapeOptions.suppressEvents = true;
              internalKeyConfig.keyIcon = new Shape(key.keyIconShapeOptions);
              internalKeyConfig.keyIconShapeOptions = void 0;
            }
            return internalKeyConfig;
          } else {
            return key;
          }
        });
        return internalRow;
      });
    }
    this.keysPerRow = options.keysPerRow ?? NaN;
    this.fontSize = options.fontSize ?? NaN;
    this.fontNames = options.fontNames;
    this.hiddenKeys = options.hiddenKeys ?? "";
    this.capitalLettersOnly = options.capitalLettersOnly ?? false;
    this.keyColor = options.keyColor ?? WebColors.White;
    this.keyDownColor = options.keyDownColor ?? WebColors.Transparent;
    this.specialKeyDownColor = options.specialKeyDownColor ?? WebColors.LightSteelBlue;
    this.backgroundColor = options.backgroundColor ?? [242, 240, 244, 1];
    this.showKeyDownPreview = options.showKeyDownPreview ?? true;
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.originalOptions
    };
  }
  initialize() {
    if (this.game.eventStore.mode === EventStoreMode.Replay) {
      this._isUserInteractionEnabled = false;
    }
    if (this.keyboardRows.length === 0) {
      this.keyboardRows = this.createDefaultKeyboardRows();
      this.keysPerRow = this.keyboardRows.reduce(
        (max, row) => Math.max(max, row.length),
        0
      );
      this.fontSize = this.size.height / this.keyboardRows.length / 2.5;
    }
    const keyboardRectangle = new Shape({
      rect: { size: this.size },
      fillColor: this.backgroundColor,
      suppressEvents: true
    });
    this.addChild(keyboardRectangle);
    const keyboard = this.internalKeyboardRowsToInternalKeyboardConfiguration(
      this.keyboardRows
    );
    const keyboardOrigin = {
      x: -keyboardRectangle.size.width / 2,
      y: -keyboardRectangle.size.height / 2
    };
    const keyboardVerticalPadding = (this.keyboardVerticalPaddingPercent ?? 0.025) * this.size.height;
    const keyboardHorizontalPadding = (this.keyboardHorizontalPaddingPercent ?? 0.02) * this.size.width;
    const keyBoxHeight = (this.size.height - 2 * keyboardVerticalPadding) / keyboard.length;
    const keyBoxWidth = (this.size.width - 2 * keyboardHorizontalPadding) / this.keysPerRow;
    this.keyShapes = [];
    for (let r = 0; r < keyboard.length; r++) {
      const row = keyboard[r];
      const rowSumKeyWidths = row.reduce(
        (sum, key) => sum + (key.widthRatio ?? 1),
        0
      );
      let extraPadding = 0;
      if (rowSumKeyWidths < this.keysPerRow) {
        extraPadding = (this.size.width - 2 * keyboardHorizontalPadding - keyBoxWidth * rowSumKeyWidths) / 2;
      }
      for (let k = 0; k < row.length; k++) {
        const key = row[k];
        if (this.hiddenKeys?.split(",").map((s) => s === " " ? " " : s.trim()).includes(key.code)) {
          continue;
        }
        const keyBoxWidthsSoFar = row.slice(0, k).reduce((sum, key2) => sum + (key2.widthRatio ?? 1), 0) * keyBoxWidth;
        const keyBox = new Shape({
          rect: {
            size: {
              width: keyBoxWidth * (key.widthRatio ?? 1),
              height: keyBoxHeight
            }
          },
          fillColor: WebColors.Transparent,
          strokeColor: WebColors.Transparent,
          lineWidth: 1,
          position: {
            x: extraPadding + keyboardOrigin.x + keyboardHorizontalPadding + keyBoxWidthsSoFar + (key.widthRatio ?? 1) * keyBoxWidth / 2,
            y: keyboardOrigin.y + keyboardVerticalPadding + r * keyBoxHeight + keyBoxHeight / 2
          },
          suppressEvents: true
        });
        const keyWidth = keyBoxWidth * (key.widthRatio ?? 1) - 2 * this.keyHorizontalPaddingPercent * keyBoxWidth;
        const keyHeight = keyBoxHeight - (key.heightRatio ?? 1) - 2 * this.keyVerticalPaddingPercent * keyBoxHeight;
        const keyShape = new Shape({
          rect: { size: { width: keyWidth, height: keyHeight } },
          cornerRadius: 4,
          fillColor: this.keyColor,
          lineWidth: 0,
          isUserInteractionEnabled: this.isUserInteractionEnabled,
          suppressEvents: true
        });
        keyShape.userData = { code: key.code };
        keyBox.addChild(keyShape);
        this.keyShapes.push(keyShape);
        const keyLabel = new Label({
          text: key.labelText,
          fontSize: this.fontSize,
          fontNames: this.fontNames,
          suppressEvents: true
        });
        keyLabel.userData = { code: key.code };
        keyBox.addChild(keyLabel);
        this.keyLabels.push(keyLabel);
        if (key.keyIcon) {
          keyBox.addChild(key.keyIcon);
        }
        keyboardRectangle.addChild(keyBox);
        keyShape.onTapUp((tapEvent) => {
          this.handleKeyShapeTapUp(key, keyShape, tapEvent);
        });
        keyShape.onTapDown((tapEvent) => {
          this.handleKeyShapeTapDown(key, keyShape, tapEvent);
        });
        keyShape.onTapLeave((tapEvent) => {
          this.handleKeyShapeTapLeave(key, keyShape, tapEvent);
        });
      }
    }
    this.letterCircle = new Shape({
      circleOfRadius: 28,
      fillColor: WebColors.Silver,
      hidden: true,
      suppressEvents: true
    });
    keyboardRectangle.addChild(this.letterCircle);
    this.letterCircleLabel = new Label({
      text: "",
      fontSize: this.fontSize,
      fontNames: this.fontNames,
      suppressEvents: true
    });
    this.letterCircle.addChild(this.letterCircleLabel);
    this.needsInitialization = false;
  }
  /**
   * Executes a callback when the user presses down on a key.
   *
   * @param callback - function to execute
   * @param options
   */
  onKeyDown(callback, options) {
    const eventListener = {
      type: M2EventType.Composite,
      compositeEventType: "VirtualKeyboardKeyDown",
      compositeType: this.compositeType,
      nodeUuid: this.uuid,
      callback
    };
    this.addVirtualKeyboardEventListener(eventListener, options);
  }
  /**
   * Executes a callback when the user releases a key.
   *
   * @param callback - function to execute
   * @param options
   */
  onKeyUp(callback, options) {
    const eventListener = {
      type: M2EventType.Composite,
      compositeEventType: "VirtualKeyboardKeyUp",
      compositeType: this.compositeType,
      nodeUuid: this.uuid,
      callback
    };
    this.addVirtualKeyboardEventListener(eventListener, options);
  }
  /**
   * Executes a callback when the user has pressed a key with the pointer, but
   * moves the pointer outside the key bounds before releasing the pointer.
   *
   * @remarks Typically, this event will not be used, since it is a user's
   * inaccurate interaction with the keyboard. However, it can be used to
   * provide feedback to the user that they have moved the pointer outside the
   * key bounds, and thus the key stroke will not be registered.
   *
   * @param callback - function to execute
   * @param options
   */
  onKeyLeave(callback, options) {
    const eventListener = {
      type: M2EventType.Composite,
      compositeEventType: "VirtualKeyboardKeyLeave",
      compositeType: this.compositeType,
      nodeUuid: this.uuid,
      callback
    };
    this.addVirtualKeyboardEventListener(eventListener, options);
  }
  update() {
    super.update();
  }
  draw(canvas) {
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    this.initialize();
    this.children.filter((child) => child.isDrawable).forEach((child) => {
      child.warmup(canvas);
    });
  }
  duplicate(newName) {
    throw new M2Error(`Method not implemented. ${newName}`);
  }
  handleKeyShapeTapDown(key, keyShape, tapEvent) {
    if (key.isShift) {
      this.shiftActivated = !this.shiftActivated;
    }
    const keyAsString = this.getKeyAsString(key);
    const virtualKeyboardEvent = {
      type: M2EventType.Composite,
      compositeType: "VirtualKeyboard",
      compositeEventType: "VirtualKeyboardKeyDown",
      target: this,
      handled: false,
      key: keyAsString,
      code: key.code,
      shiftKey: this.shiftActivated,
      keyTapMetadata: {
        size: keyShape.size,
        point: tapEvent.point,
        buttons: tapEvent.buttons
      },
      ...M2c2KitHelpers.createTimestamps()
    };
    this.handleCompositeEvent(virtualKeyboardEvent);
    this.saveEvent(virtualKeyboardEvent);
    if (this.eventListeners.length > 0) {
      this.eventListeners.filter(
        (listener) => listener.type === M2EventType.Composite && listener.compositeType === "VirtualKeyboard" && listener.compositeEventType === "VirtualKeyboardKeyDown"
      ).forEach((listener) => {
        listener.callback(virtualKeyboardEvent);
      });
    }
  }
  handleKeyShapeTapUp(key, keyShape, tapEvent) {
    const keyAsString = this.getKeyAsString(key);
    const virtualKeyboardEvent = {
      type: M2EventType.Composite,
      compositeType: "VirtualKeyboard",
      compositeEventType: "VirtualKeyboardKeyUp",
      target: this,
      handled: false,
      key: keyAsString,
      code: key.code,
      shiftKey: this.shiftActivated,
      keyTapMetadata: {
        size: keyShape.size,
        point: tapEvent.point,
        buttons: tapEvent.buttons
      },
      ...M2c2KitHelpers.createTimestamps()
    };
    this.handleCompositeEvent(virtualKeyboardEvent);
    this.saveEvent(virtualKeyboardEvent);
    if (this.eventListeners.length > 0) {
      this.eventListeners.filter(
        (listener) => listener.type === M2EventType.Composite && listener.compositeType === "VirtualKeyboard" && listener.compositeEventType === "VirtualKeyboardKeyUp"
      ).forEach((listener) => {
        listener.callback(virtualKeyboardEvent);
      });
    }
  }
  handleKeyShapeTapLeave(key, keyShape, tapEvent) {
    const keyAsString = this.getKeyAsString(key);
    const virtualKeyboardEvent = {
      type: M2EventType.Composite,
      compositeType: "VirtualKeyboard",
      compositeEventType: "VirtualKeyboardKeyLeave",
      target: this,
      handled: false,
      key: keyAsString,
      code: key.code,
      shiftKey: this.shiftActivated,
      keyTapMetadata: {
        size: keyShape.size,
        point: tapEvent.point,
        buttons: tapEvent.buttons
      },
      ...M2c2KitHelpers.createTimestamps()
    };
    this.handleCompositeEvent(virtualKeyboardEvent);
    this.saveEvent(virtualKeyboardEvent);
    if (this.eventListeners.length > 0) {
      this.eventListeners.filter(
        (listener) => listener.type === M2EventType.Composite && listener.compositeType === "VirtualKeyboard" && listener.compositeEventType === "VirtualKeyboardKeyLeave"
      ).forEach((listener) => {
        listener.callback(virtualKeyboardEvent);
      });
    }
  }
  getKeyAsString(key) {
    if (key.isShift || key.code === " " || key.code === "Backspace") {
      return key.code;
    } else {
      if (this.shiftActivated) {
        return key.labelTextShifted ?? key.code;
      } else {
        return key.labelText ?? key.code;
      }
    }
  }
  /**
   * Converts the keyboard rows to the internal keyboard configuration.
   *
   * @remarks This normalizes the keyboard rows so that each key is a
   * full `KeyConfigurationWithShape` object, instead of a string or array of
   * strings.
   *
   * @param keyboardRows
   * @returns the keyboard for internal use
   */
  internalKeyboardRowsToInternalKeyboardConfiguration(keyboardRows) {
    return keyboardRows.map((row) => {
      return row.map((key) => {
        let widthRatio = 1;
        const heightRatio = 1;
        let code;
        let label;
        let labelShifted;
        let keyIcon;
        let isShift = false;
        if (typeof key === "string") {
          code = key;
          if (this.capitalLettersOnly) {
            label = code.toUpperCase();
          } else {
            label = code;
          }
          labelShifted = code.toUpperCase();
        } else if (Array.isArray(key)) {
          code = key[0];
          label = code;
          labelShifted = key[1];
        } else {
          code = key.code;
          label = key.labelText ?? "";
          labelShifted = key.labelTextShifted ?? label;
          widthRatio = key.widthRatio ?? 1;
          keyIcon = key.keyIcon;
          isShift = key.isShift ?? false;
        }
        return {
          widthRatio,
          heightRatio,
          code,
          labelText: label,
          labelTextShifted: labelShifted,
          keyIcon,
          isShift
        };
      });
    });
  }
  handleCompositeEvent(event) {
    const keyboard = this.internalKeyboardRowsToInternalKeyboardConfiguration(
      this.keyboardRows
    );
    const keyShape = this.keyShapes.find((k) => k.userData.code === event.code);
    if (!keyShape) {
      throw new M2Error("keyShape is not defined");
    }
    this.shiftActivated = event.shiftKey;
    switch (event.compositeEventType) {
      case "VirtualKeyboardKeyDown": {
        this.handleKeyDownEvent(event, keyboard, keyShape);
        break;
      }
      case "VirtualKeyboardKeyUp": {
        this.handleKeyUpEvent(event, keyboard, keyShape);
        break;
      }
      case "VirtualKeyboardKeyLeave": {
        this.handleKeyLeaveEvent(event, keyboard, keyShape);
        break;
      }
      default: {
        throw new M2Error(
          `Unknown VirtualKeyboardEvent: ${event.compositeEventType}`
        );
      }
    }
  }
  handleKeyDownEvent(event, keyboard, keyShape) {
    if (event.code.toLowerCase().includes("shift")) {
      if (event.shiftKey) {
        this.showKeyboardShifted(keyboard);
      } else {
        this.showKeyboardNotShifted(keyboard);
      }
    } else if (event.code === " " || event.code === "Backspace") {
      keyShape.fillColor = this.specialKeyDownColor;
    } else {
      keyShape.fillColor = this.keyDownColor;
      if (this.showKeyDownPreview) {
        if (!this.letterCircle || !this.letterCircleLabel) {
          throw new M2Error("letterCircle is not defined");
        }
        this.letterCircle.hidden = false;
        const keyBox = keyShape.parent;
        this.letterCircle.position.x = keyBox.position.x;
        if (keyShape.rect?.size?.height === void 0) {
          throw new M2Error("keyShape.rect.height is undefined");
        }
        this.letterCircle.position.y = keyBox.position.y - keyShape.rect.size.height * 1.2;
        const keyboard2 = this.internalKeyboardRowsToInternalKeyboardConfiguration(
          this.keyboardRows
        );
        const key = keyboard2.flat().find((k) => k.code === event.code);
        if (!key) {
          throw new M2Error("key is not defined");
        }
        if (this.shiftActivated) {
          this.letterCircleLabel.text = key.labelTextShifted ?? key.code;
        } else {
          this.letterCircleLabel.text = key.labelText ?? key.code;
        }
      }
    }
  }
  handleKeyUpEvent(event, keyboard, keyShape) {
    if (event.code.toLowerCase().includes("shift") && event.shiftKey) {
      return;
    }
    if (event.code.toLowerCase().includes("shift") && !event.shiftKey) {
      this.shiftActivated = false;
      this.showKeyboardNotShifted(keyboard);
      return;
    }
    keyShape.fillColor = this.keyColor;
    if (!this.letterCircle) {
      throw new M2Error("letterCircle is not defined");
    }
    this.letterCircle.hidden = true;
    if (!event.code.toLowerCase().includes("shift") && event.shiftKey) {
      this.shiftActivated = false;
      this.showKeyboardNotShifted(keyboard);
    }
  }
  handleKeyLeaveEvent(event, keyboard, keyShape) {
    if (event.code.toLowerCase().includes("shift")) {
      if (event.shiftKey) {
        this.showKeyboardNotShifted(keyboard);
        this.shiftActivated = false;
      } else {
        this.showKeyboardShifted(keyboard);
        this.shiftActivated = true;
      }
      return;
    }
    keyShape.fillColor = this.keyColor;
    if (!this.letterCircle) {
      throw new M2Error("letterCircle is not defined");
    }
    this.letterCircle.hidden = true;
  }
  showKeyboardShifted(keyboard) {
    const shiftKeyShapes = this.keyShapes.filter(
      (shape) => shape.userData.code.toLowerCase().includes("shift")
    );
    shiftKeyShapes.forEach((shape) => {
      shape.fillColor = this.specialKeyDownColor;
    });
    const shiftKeys = keyboard.flat().filter((k) => k.isShift);
    shiftKeys.forEach((k) => {
      if (k.keyIcon) {
        k.keyIcon.fillColor = WebColors.Black;
      }
    });
    keyboard.flatMap((k) => k).forEach((k) => {
      const keyLabel = this.keyLabels.find((l) => l.userData.code === k.code);
      if (!keyLabel) {
        throw new M2Error("keyLabel is not defined");
      }
      if (keyLabel.text !== void 0) {
        keyLabel.text = k.labelTextShifted ?? "";
      }
    });
  }
  showKeyboardNotShifted(keyboard) {
    const shiftKeyShapes = this.keyShapes.filter(
      (shape) => shape.userData.code.toLowerCase().includes("shift")
    );
    shiftKeyShapes.forEach((shape) => {
      shape.fillColor = this.keyColor;
    });
    const shiftKeys = keyboard.flat().filter((k) => k.isShift);
    shiftKeys.forEach((k) => {
      if (k.keyIcon) {
        k.keyIcon.fillColor = WebColors.Transparent;
      }
    });
    keyboard.flatMap((k) => k).forEach((k) => {
      const keyLabel = this.keyLabels.find((l) => l.userData.code === k.code);
      if (!keyLabel) {
        throw new M2Error("keyLabel is not defined");
      }
      if (keyLabel.text !== void 0) {
        keyLabel.text = k.labelText ?? "";
      }
    });
  }
  createDefaultKeyboardRows() {
    const numKeys = [
      ["1", "!"],
      ["2", "@"],
      ["3", "#"],
      ["4", "$"],
      ["5", "%"],
      ["6", "^"],
      ["7", "&"],
      ["8", "*"],
      ["9", "("],
      ["0", ")"]
    ];
    const row1 = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p"
    ];
    const row2 = [
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l"
    ];
    const shiftArrowShapeOptions = {
      path: {
        // Public Domain from https://www.freesvg.org
        pathString: "m288-6.6849e-14 -288 288h144v288h288v-288h144l-288-288z",
        width: 24
      },
      lineWidth: 2,
      strokeColor: WebColors.Black,
      fillColor: WebColors.Transparent,
      suppressEvents: true
    };
    const backspaceShapeOptions = {
      path: {
        // CC0 from https://www.svgrepo.com
        pathString: "M10.625 5.09 0 22.09l10.625 17H44.18v-34H10.625zm31.555 32H11.734l-9.375-15 9.375-15H42.18v30zm-23.293-6.293 7.293-7.293 7.293 7.293 1.414-1.414-7.293-7.293 7.293-7.293-1.414-1.414-7.293 7.293-7.293-7.293-1.414 1.414 7.293 7.293-7.293 7.293",
        width: 24
      },
      lineWidth: 1,
      strokeColor: WebColors.Black,
      fillColor: WebColors.Red,
      suppressEvents: true
    };
    const row3 = [
      {
        code: "Shift",
        isShift: true,
        widthRatio: 1.5,
        keyIcon: new Shape(shiftArrowShapeOptions)
      },
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      {
        code: "Backspace",
        widthRatio: 1.5,
        keyIcon: new Shape(backspaceShapeOptions)
      }
    ];
    const row4 = [
      { code: " ", labelText: "SPACE", widthRatio: 5 }
    ];
    const keyboardRows = [numKeys, row1, row2, row3, row4];
    return keyboardRows;
  }
  addVirtualKeyboardEventListener(eventListener, options) {
    if (options?.replaceExisting) {
      this.eventListeners = this.eventListeners.filter(
        (listener) => !(listener.nodeUuid === eventListener.nodeUuid && listener.type === eventListener.type && listener.compositeType === eventListener.compositeType)
      );
    }
    this.eventListeners.push(eventListener);
  }
  /**
   * Does the `VirtualKeyboard` respond to user events? Default is true.
   */
  get isUserInteractionEnabled() {
    return this._isUserInteractionEnabled;
  }
  /**
   * Does the `VirtualKeyboard` respond to user events? Default is true.
   */
  set isUserInteractionEnabled(isUserInteractionEnabled) {
    this._isUserInteractionEnabled = isUserInteractionEnabled;
    this.keyShapes?.forEach((keyShape) => {
      keyShape.isUserInteractionEnabled = isUserInteractionEnabled;
    });
  }
}
M2c2KitHelpers.registerM2NodeClass(
  VirtualKeyboard
);

class CountdownTimer extends Composite {
  /**
   * A countdown timer displays a number that counts down to zero.
   *
   * @param options
   */
  constructor(options) {
    super(options);
    this.compositeType = "CountdownTimer";
    this._milliseconds = 3e3;
    this._tickIntervalMilliseconds = 1e3;
    this._fontSize = 50;
    this._fontColor = WebColors.White;
    this._zeroString = "0";
    this._timerShape = {
      circle: {
        radius: 100
      },
      fillColor: WebColors.RoyalBlue
    };
    this._textVerticalBias = 0.5;
    this.countdownSequence = new Array();
    this._isRunning = false;
    this.hasStopped = false;
    this.originalOptions = JSON.parse(JSON.stringify(options));
    if (options.milliseconds) {
      this.milliseconds = options.milliseconds;
    }
    if (options.tickIntervalMilliseconds) {
      this.tickIntervalMilliseconds = options.tickIntervalMilliseconds;
    }
    if (options.fontName) {
      this.fontName = options.fontName;
    }
    if (options.fontSize !== void 0) {
      this.fontSize = options.fontSize;
    }
    if (options.fontColor) {
      this.fontColor = options.fontColor;
    }
    if (options.zeroString !== void 0) {
      this.zeroString = options.zeroString;
    }
    if (options.timerShape) {
      this.timerShape = options.timerShape;
    }
    if (options.textVerticalBias !== void 0) {
      this.textVerticalBias = options.textVerticalBias;
    }
    this.saveNodeNewEvent();
  }
  get completeNodeOptions() {
    return {
      ...this.options,
      ...this.getNodeOptions(),
      ...this.getDrawableOptions(),
      ...this.originalOptions
    };
  }
  initialize() {
    this.removeAllChildren();
    this._isRunning = false;
    this.hasStopped = false;
    if (this.timerShape?.circle === void 0 && this.timerShape?.rectangle === void 0 || this.timerShape?.circle !== void 0) {
      this.timerShapeNode = new Shape({
        circleOfRadius: this.timerShape.circle?.radius ?? 100,
        fillColor: this.timerShape?.fillColor ?? WebColors.RoyalBlue,
        suppressEvents: true
      });
      this.addChild(this.timerShapeNode);
    } else if (this.timerShape?.rectangle !== void 0) {
      this.timerShapeNode = new Shape({
        rect: {
          width: this.timerShape?.rectangle?.width ?? 200,
          height: this.timerShape?.rectangle?.height ?? 200
        },
        cornerRadius: this.timerShape?.rectangle?.cornerRadius,
        fillColor: this.timerShape?.fillColor ?? WebColors.RoyalBlue,
        suppressEvents: true
      });
      this.addChild(this.timerShapeNode);
    } else {
      throw new M2Error("Invalid timer shape options.");
    }
    this.size = this.timerShapeNode.size;
    if (this.milliseconds % 1e3 !== 0) {
      throw new M2Error(
        "CountdownTimer milliseconds must be a multiple of 1000."
      );
    }
    const timerInitialNumber = Math.floor(this.milliseconds / 1e3);
    this.timerNumberLabel = new Label({
      text: timerInitialNumber.toString(),
      fontSize: this.fontSize,
      fontName: this._fontName,
      fontColor: this.fontColor,
      layout: {
        constraints: {
          topToTopOf: this.timerShapeNode,
          bottomToBottomOf: this.timerShapeNode,
          startToStartOf: this.timerShapeNode,
          endToEndOf: this.timerShapeNode,
          verticalBias: this.textVerticalBias
        }
      },
      suppressEvents: true
    });
    this.timerShapeNode.addChild(this.timerNumberLabel);
    this.countdownSequence = new Array();
    for (let i = this.milliseconds; i > this.tickIntervalMilliseconds; i = i - this.tickIntervalMilliseconds) {
      this.countdownSequence.push(
        Action.wait({ duration: this.tickIntervalMilliseconds })
      );
      this.countdownSequence.push(
        Action.custom({
          callback: () => {
            this.tick(i - this.tickIntervalMilliseconds);
          }
        })
      );
    }
    this.countdownSequence.push(
      Action.wait({ duration: this.tickIntervalMilliseconds })
    );
    this.countdownSequence.push(
      Action.custom({
        callback: () => {
          this.tick(0);
          const countdownTimerEvent = {
            type: M2EventType.Composite,
            compositeType: this.compositeType,
            compositeEventType: "CountdownTimerComplete",
            target: this,
            handled: false,
            millisecondsRemaining: 0,
            ...M2c2KitHelpers.createTimestamps()
          };
          this.handleCompositeEvent(countdownTimerEvent);
          this.saveEvent(countdownTimerEvent);
          if (this.eventListeners.length > 0) {
            this.eventListeners.filter(
              (listener) => listener.type === M2EventType.Composite && listener.compositeType === "CountdownTimer" && listener.compositeEventType === "CountdownTimerComplete"
            ).forEach((listener) => {
              listener.callback(countdownTimerEvent);
            });
          }
        }
      })
    );
    this.needsInitialization = false;
  }
  tick(millisecondsRemaining) {
    const countdownTimerEvent = {
      type: M2EventType.Composite,
      compositeType: this.compositeType,
      compositeEventType: "CountdownTimerTick",
      target: this,
      handled: false,
      millisecondsRemaining,
      ...M2c2KitHelpers.createTimestamps()
    };
    this.handleCompositeEvent(countdownTimerEvent);
    this.saveEvent(countdownTimerEvent);
    if (this.eventListeners.length > 0) {
      this.eventListeners.filter(
        (listener) => listener.type === M2EventType.Composite && listener.compositeType === "CountdownTimer" && listener.compositeEventType === "CountdownTimerTick"
      ).forEach((listener) => {
        listener.callback(countdownTimerEvent);
      });
    }
  }
  /**
   * Starts the countdown timer.
   *
   * @remarks Calling `start()` on a timer whose state is running (already started)
   * or stopped will raise an error.
   */
  start() {
    if (this.isRunning) {
      throw new M2Error("CountdownTimer: cannot start. It is already running.");
    }
    if (this.hasStopped) {
      throw new M2Error(
        "CountdownTimer: It has stopped. You cannot start a stopped CountdownTimer. Instead, create a new CountdownTimer or call CountdownTimer.reset() before starting."
      );
    }
    if (this.needsInitialization) {
      this.initialize();
    }
    this.run(
      Action.sequence(this.countdownSequence),
      "__countdownSequenceAction"
    );
    this._isRunning = true;
  }
  /**
   * Stops the countdown timer.
   *
   * @remarks This method is idempotent. Calling `stop()` on a stopped timer
   * has no effect and will not raise an error. This can be called on a
   * CountdownTimer in any state.
   */
  stop() {
    if (this.isRunning) {
      this.removeAction("__countdownSequenceAction");
      this._isRunning = false;
      this.hasStopped = true;
    }
  }
  /**
   * Resets the countdown timer to its initial state so it can be started
   * again.
   *
   * @remarks This method is idempotent. Calling reset() multiple times will
   * not raise an error. This can be called on a CountdownTimer in any state.
   */
  reset() {
    this.stop();
    this.initialize();
  }
  /**
   * Returns true if the countdown timer is running.
   */
  get isRunning() {
    return this._isRunning;
  }
  handleCompositeEvent(event) {
    if (!this.timerNumberLabel) {
      throw new M2Error("Timer number label not found.");
    }
    switch (event.compositeEventType) {
      case "CountdownTimerTick": {
        this.timerNumberLabel.text = Math.ceil(
          event.millisecondsRemaining / 1e3
        ).toString();
        break;
      }
      case "CountdownTimerComplete": {
        this.timerNumberLabel.text = this.zeroString;
        break;
      }
      default:
        throw new M2Error(
          `Invalid TimerCountdown event type: ${event.compositeEventType}`
        );
    }
  }
  /**
   * Executes a callback when the timer ticks.
   *
   * @remarks The callback is also executed when the timer completes.
   *
   * @param callback - function to execute
   * @param options
   */
  onTick(callback, options) {
    const eventListener = {
      type: M2EventType.Composite,
      compositeEventType: "CountdownTimerTick",
      compositeType: this.compositeType,
      nodeUuid: this.uuid,
      callback
    };
    this.addCountdownTimerEventListener(eventListener, options);
  }
  /**
   * Executes a callback when the timer completes.
   *
   * @remarks This is the last tick of the timer.
   *
   * @param callback - function to execute.
   * @param options
   */
  onComplete(callback, options) {
    const eventListener = {
      type: M2EventType.Composite,
      compositeEventType: "CountdownTimerComplete",
      compositeType: this.compositeType,
      nodeUuid: this.uuid,
      callback
    };
    this.addCountdownTimerEventListener(eventListener, options);
  }
  addCountdownTimerEventListener(eventListener, options) {
    if (options?.replaceExisting) {
      this.eventListeners = this.eventListeners.filter(
        (listener) => !(listener.nodeUuid === eventListener.nodeUuid && listener.type === eventListener.type && listener.compositeType === eventListener.compositeType)
      );
    }
    this.eventListeners.push(eventListener);
  }
  get milliseconds() {
    return this._milliseconds;
  }
  set milliseconds(milliseconds) {
    if (Equal.value(this._milliseconds, milliseconds)) {
      return;
    }
    this._milliseconds = milliseconds;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("milliseconds", milliseconds);
  }
  get tickIntervalMilliseconds() {
    return this._tickIntervalMilliseconds;
  }
  set tickIntervalMilliseconds(tickIntervalMilliseconds) {
    if (Equal.value(this._tickIntervalMilliseconds, tickIntervalMilliseconds)) {
      return;
    }
    this._tickIntervalMilliseconds = tickIntervalMilliseconds;
    this.needsInitialization = true;
    this.savePropertyChangeEvent(
      "tickIntervalMilliseconds",
      tickIntervalMilliseconds
    );
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(fontColor) {
    if (Equal.value(this._fontColor, fontColor)) {
      return;
    }
    this._fontColor = fontColor;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontColor", fontColor);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(fontName) {
    if (this._fontName === fontName) {
      return;
    }
    this._fontName = fontName;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontName", fontName);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(fontSize) {
    if (Equal.value(this._fontSize, fontSize)) {
      return;
    }
    this._fontSize = fontSize;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("fontSize", fontSize);
  }
  get zeroString() {
    return this._zeroString;
  }
  set zeroString(zeroString) {
    if (this._zeroString === zeroString) {
      return;
    }
    this._zeroString = zeroString;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("zeroString", zeroString);
  }
  get timerShape() {
    return this._timerShape;
  }
  set timerShape(shape) {
    if (Equal.value(this._timerShape, shape)) {
      return;
    }
    this._timerShape = shape;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("timerShape", shape);
  }
  get textVerticalBias() {
    return this._textVerticalBias;
  }
  set textVerticalBias(textVerticalBias) {
    if (Equal.value(this._textVerticalBias, textVerticalBias)) {
      return;
    }
    this._textVerticalBias = textVerticalBias;
    this.needsInitialization = true;
    this.savePropertyChangeEvent("textVerticalBias", textVerticalBias);
  }
  /**
   * Duplicates a node using deep copy.
   *
   * @remarks This is a deep recursive clone (node and children).
   * The uuid property of all duplicated nodes will be newly created,
   * because uuid must be unique.
   *
   * @param newName - optional name of the new, duplicated node. If not
   * provided, name will be the new uuid
   */
  duplicate(newName) {
    throw new M2Error(`Method not implemented. ${newName}`);
  }
  update() {
    super.update();
  }
  draw(canvas) {
    super.drawChildren(canvas);
  }
  warmup(canvas) {
    this.initialize();
    this.children.filter((child) => child.isDrawable).forEach((child) => {
      child.warmup(canvas);
    });
  }
}
M2c2KitHelpers.registerM2NodeClass(
  CountdownTimer
);

console.log("\u26AA @m2c2kit/addons version 0.3.29 (9f27c146)");

function truncatedExpMean(rate, span) {
  if (Math.abs(rate * span) < 1e-6) return span / 2;
  return 1 / rate - span / Math.expm1(rate * span);
}
function solveTruncatedExpRate(targetMean, span) {
  let lo = -60 / span;
  let hi = 60 / span;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (truncatedExpMean(mid, span) > targetMean) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}
function makeJitterSampler(min, max, mean) {
  const span = max - min;
  if (span <= 0) return () => min;
  const clampedMean = Math.min(Math.max(mean, min + span * 0.01), max - span * 0.01);
  const rate = solveTruncatedExpRate(clampedMean - min, span);
  return () => {
    const u = Math.random();
    let x;
    if (Math.abs(rate * span) < 1e-6) {
      x = u * span;
    } else {
      x = -Math.log1p(-u * -Math.expm1(-rate * span)) / rate;
    }
    return Math.round(min + Math.min(Math.max(x, 0), span));
  };
}
function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
}
function formatCents(cents, showPlus = false) {
  const sign = cents < 0 ? "-" : showPlus && cents > 0 ? "+" : "";
  return `${sign}$${(Math.abs(cents) / 100).toFixed(2)}`;
}
function starSvgPath(outerRadius, innerRadius) {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = -Math.PI / 2 + i * Math.PI / 5;
    points.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
  }
  const minX = Math.min(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${(p.x - minX).toFixed(2)} ${(p.y - minY).toFixed(2)}`).join(" ") + " Z";
}
const MESSAGE_DATA = "MIDGONOGO";
const MESSAGE_COMPLETE = "MIDGONOGO_COMPLETE";
const TRANSPARENT = [0, 0, 0, 0];
const REWARD_COLOR = WebColors.LimeGreen;
const NEUTRAL_COLOR = WebColors.DodgerBlue;
class MidGoNoGo extends Game {
  constructor() {
    const defaultParameters = {
      countdown_duration_ms: {
        default: 3e3,
        type: "number",
        description: "Duration of the 3-2-1 countdown before practice, the main task, and each run (ms)."
      },
      trials_per_type: {
        default: 25,
        type: "integer",
        description: "Main-task trials of EACH of the 6 trial types, across all runs. 25 = 150 trials (paper). Use e.g. ?trials_per_type=2 for testing."
      },
      trials_per_type_per_run: {
        default: 5,
        type: "integer",
        description: "Trials of each type within one run. 5 = 30-trial runs (paper). If trials_per_type is not a multiple of this, the last run is shorter."
      },
      practice_trials_per_type: {
        default: 1,
        type: "integer",
        description: "Practice trials of each of the 6 types before the main task (not counted). 0 = no practice."
      },
      run_breaks: {
        default: false,
        //false for us because we are not doing multiple scans like original paper did
        type: "boolean",
        description: "Show a break screen between runs."
      },
      cue_min_ms: { default: 2e3, type: "number", description: "Shortest cue duration (ms)." },
      cue_max_ms: { default: 8e3, type: "number", description: "Longest cue duration (ms)." },
      cue_mean_ms: { default: 4e3, type: "number", description: "Average cue duration (ms)." },
      fixation_min_ms: { default: 2e3, type: "number", description: "Shortest fixation between trials (ms)." },
      fixation_max_ms: { default: 8e3, type: "number", description: "Longest fixation between trials (ms)." },
      fixation_mean_ms: { default: 5200, type: "number", description: "Average fixation between trials (ms)." },
      target_initial_ms: {
        default: 400,
        type: "number",
        description: "Starting target duration, i.e. the response window (ms)."
      },
      target_step_ms: {
        default: 50,
        type: "number",
        description: "Window shrinks by this after a hit and grows by this after a miss (ms)."
      },
      target_min_ms: {
        default: 100,
        type: "number",
        description: "Shortest allowed target window (ms). Not specified in the paper."
      },
      target_max_ms: {
        default: 1e3,
        type: "number",
        description: "Longest allowed target window (ms). Must stay below target_plus_feedback_ms. Not specified in the paper."
      },
      target_plus_feedback_ms: {
        default: 2e3,
        type: "number",
        description: "Target trials: feedback lasts this minus the target window (ms)."
      },
      nogo_window_ms: { default: 600, type: "number", description: "How long the NoGo signal is shown (ms)." },
      nogo_feedback_ms: { default: 1400, type: "number", description: "Feedback duration on NoGo trials (ms)." },
      hit_reward_cents: { default: 20, type: "integer", description: "Won for a hit on a reward trial (cents)." },
      nogo_success_cents: {
        default: 20,
        type: "integer",
        description: "Won for withholding on a reward NoGo trial (cents)."
      },
      nogo_error_cents: {
        default: 40,
        type: "integer",
        description: "Lost for tapping on a reward NoGo trial (cents)."
      },
      show_fps: { default: false, type: "boolean", description: "Should the FPS be shown?" }
    };
    const trialSchema = {
      block: { type: "string", description: "'practice' or 'main'." },
      run: { type: "integer", description: "Run number, 1-based; 0 for practice." },
      trial_in_run: { type: "integer", description: "0-based position within the run (or within practice)." },
      trial_index: {
        type: "integer",
        description: "0-based index within the block (practice and main are counted separately)."
      },
      condition: { type: "string", description: "'reward' (green cue) or 'neutral' (blue cue)." },
      trial_type: { type: "string", description: "'MID' (square), 'MID-Go' (circle + target), or 'MID-NoGo' (circle + NoGo signal)." },
      cue_shape: { type: "string", description: "'square' or 'circle'." },
      stimulus: { type: "string", description: "'target' (star) or 'nogo' (X)." },
      fixation_before_ms: { type: "number", description: "Planned fixation duration before this trial (ms)." },
      cue_duration_ms: { type: "number", description: "Planned cue duration (ms)." },
      response_window_ms: { type: "number", description: "Planned stimulus duration: adaptive target window, or the NoGo window (ms)." },
      response_window_actual_ms: {
        type: "number",
        description: "Measured time between stimulus onset and offset callbacks (ms); check against the planned value."
      },
      responded: { type: "boolean", description: "Did the participant tap while the stimulus was on screen?" },
      response_time_ms: {
        type: ["number", "null"],
        description: "Time from stimulus onset to tap (ms); null if no tap during the window."
      },
      outcome: { type: "string", description: "'hit', 'miss', 'nogo_success', or 'nogo_error'." },
      correct: { type: "boolean", description: "True for hit or nogo_success." },
      premature_taps: { type: "integer", description: "Taps during the cue, before the stimulus appeared." },
      late_tap: { type: "boolean", description: "Did the participant tap during feedback, after the window closed?" },
      amount_cents: { type: "integer", description: "Money won (+) or lost (-) on this trial, in cents." },
      total_cents: {
        type: "integer",
        description: "Running total after this trial, in cents (practice and main totals are separate)."
      }
    };
    const options = {
      name: "MID-Go/NoGo",
      // Keep id as "lettergonogo": m2c2kit loads fonts from assets/<id>/,
      // and your project's assets folder is named lettergonogo.
      id: "lettergonogo",
      publishUuid: "",
      version: "2.1.0",
      bodyBackgroundColor: WebColors.Black,
      shortDescription: "Monetary incentive delay Go/NoGo task.",
      longDescription: "Cues signal whether money can be won (green) or not (blue). Squares are always followed by a target; circles are followed by a target or a NoGo signal. Tap targets quickly; do not tap NoGo signals.",
      showFps: defaultParameters.show_fps.default,
      width: 400,
      height: 800,
      trialSchema,
      parameters: defaultParameters,
      fonts: [
        {
          fontName: "roboto",
          url: "fonts/roboto/Roboto-Regular.ttf"
        }
      ]
    };
    super(options);
  }
  async initialize() {
    await super.initialize();
    const game = this;
    const num = (name) => Number(game.getParameter(name));
    const bool = (name) => {
      const value = game.getParameter(name);
      return value === true || value === "true";
    };
    const trialsPerType = Math.max(0, Math.floor(num("trials_per_type")));
    const perRunPerType = Math.max(1, Math.floor(num("trials_per_type_per_run")));
    const practicePerType = Math.max(0, Math.floor(num("practice_trials_per_type")));
    const runBreaks = bool("run_breaks");
    const initialTargetMs = num("target_initial_ms");
    const targetStep = num("target_step_ms");
    const targetMin = num("target_min_ms");
    const targetMax = num("target_max_ms");
    const targetPlusFeedback = num("target_plus_feedback_ms");
    const nogoWindow = num("nogo_window_ms");
    const nogoFeedback = num("nogo_feedback_ms");
    const hitReward = num("hit_reward_cents");
    const nogoSuccessReward = num("nogo_success_cents");
    const nogoErrorLoss = num("nogo_error_cents");
    const sampleCue = makeJitterSampler(num("cue_min_ms"), num("cue_max_ms"), num("cue_mean_ms"));
    const sampleFixation = makeJitterSampler(num("fixation_min_ms"), num("fixation_max_ms"), num("fixation_mean_ms"));
    const center = { x: 200, y: 400 };
    const conditions = ["reward", "neutral"];
    const trialTypes = ["MID", "MID-Go", "MID-NoGo"];
    const buildBlock = (n, block, run) => {
      const trials = [];
      for (const condition of conditions) {
        for (const trialType of trialTypes) {
          for (let i = 0; i < n; i++) {
            trials.push({
              block,
              run,
              trialInRun: 0,
              // set after shuffling
              blockIndex: 0,
              // set below
              condition,
              trialType,
              cueShape: trialType === "MID" ? "square" : "circle",
              stimulus: trialType === "MID-NoGo" ? "nogo" : "target",
              fixationBeforeMs: sampleFixation(),
              cueDurationMs: sampleCue()
            });
          }
        }
      }
      shuffle(trials);
      trials.forEach((t, i) => t.trialInRun = i);
      return trials;
    };
    const practiceTrials = practicePerType > 0 ? buildBlock(practicePerType, "practice", 0) : [];
    const mainTrials = [];
    let remaining = trialsPerType;
    let totalRuns = 0;
    while (remaining > 0) {
      const n = Math.min(perRunPerType, remaining);
      totalRuns++;
      mainTrials.push(...buildBlock(n, "main", totalRuns));
      remaining -= n;
    }
    practiceTrials.forEach((t, i) => t.blockIndex = i);
    mainTrials.forEach((t, i) => t.blockIndex = i);
    const trialConfigurations = [...practiceTrials, ...mainTrials];
    const totalTrials = trialConfigurations.length;
    let targetWindowMs = initialTargetMs;
    let totalCents = 0;
    let transitionShownFor = -1;
    const instructionsScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(instructionsScene);
    instructionsScene.addChild(
      new Label({
        text: "Win Money Task",
        // TODO: final task name
        fontSize: 30,
        fontColor: WebColors.White,
        preferredMaxLayoutWidth: 340,
        position: { x: 200, y: 100 }
      })
    );
    const hasPractice = practiceTrials.length > 0;
    instructionsScene.addChild(
      new Label({
        text: `GREEN shapes mean you can win money. BLUE shapes mean no money is at stake.

After a SQUARE, a star will always appear. Tap the screen (or press the spacebar) as fast as you can when you see the star.

After a CIRCLE, either a star or an X will appear. Tap for the star. Do NOT tap for the X.

On green trials: a fast tap on a star wins ${formatCents(hitReward)}. Not tapping an X wins ${formatCents(nogoSuccessReward)}, but tapping an X loses ${formatCents(nogoErrorLoss)}.` + (hasPractice ? "\n\nYou will start with a few practice trials. Practice money does not count." : ""),
        fontSize: 17,
        fontColor: WebColors.White,
        preferredMaxLayoutWidth: 350,
        position: { x: 200, y: 390 }
      })
    );
    const startButton = new Button({
      text: hasPractice ? "START PRACTICE" : "START",
      size: { width: 250, height: 50 },
      backgroundColor: WebColors.Green,
      position: { x: 200, y: 710 },
      isUserInteractionEnabled: true
    });
    startButton.onTapDown(() => {
      startButton.isUserInteractionEnabled = false;
      game.presentScene(getReadyScene);
    });
    instructionsScene.addChild(startButton);
    const getReadyScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(getReadyScene);
    const countdownSteps = 3;
    const getReadyLabel = new Label({
      text: String(countdownSteps),
      fontSize: 60,
      fontColor: WebColors.White,
      position: center
    });
    getReadyScene.addChild(getReadyLabel);
    getReadyScene.onAppear(() => {
      const stepMs = num("countdown_duration_ms") / countdownSteps;
      const actions = [];
      for (let n = countdownSteps; n >= 1; n--) {
        actions.push(
          Action.custom({
            callback: () => {
              getReadyLabel.text = String(n);
            }
          })
        );
        actions.push(Action.wait({ duration: stepMs }));
      }
      actions.push(
        Action.custom({
          callback: () => {
            getReadyLabel.text = String(countdownSteps);
            game.presentScene(fixationScene);
          }
        })
      );
      getReadyScene.run(Action.sequence(actions));
    });
    const fixationScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(fixationScene);
    fixationScene.addChild(new Label({ text: "+", fontSize: 60, fontColor: WebColors.White, position: center }));
    fixationScene.onAppear(() => {
      const idx = game.trialIndex;
      if (idx >= totalTrials) {
        game.presentScene(doneScene);
        return;
      }
      const trial = trialConfigurations[idx];
      const previous = idx > 0 ? trialConfigurations[idx - 1] : void 0;
      if (previous && transitionShownFor !== idx) {
        if (previous.block === "practice" && trial.block === "main") {
          transitionShownFor = idx;
          game.presentScene(practiceDoneScene);
          return;
        }
        if (runBreaks && trial.block === "main" && trial.run !== previous.run) {
          transitionShownFor = idx;
          game.presentScene(runBreakScene);
          return;
        }
      }
      fixationScene.run(
        Action.sequence([
          Action.wait({ duration: trial.fixationBeforeMs }),
          Action.custom({ callback: () => game.presentScene(trialScene) })
        ])
      );
    });
    const trialScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(trialScene);
    const cueSquare = new Shape({
      rect: { size: { width: 140, height: 140 } },
      fillColor: REWARD_COLOR,
      position: center,
      hidden: true
    });
    const cueCircle = new Shape({
      circleOfRadius: 70,
      fillColor: REWARD_COLOR,
      position: center,
      hidden: true
    });
    trialScene.addChild(cueSquare);
    trialScene.addChild(cueCircle);
    const stimulusRing = new Shape({
      circleOfRadius: 70,
      fillColor: TRANSPARENT,
      strokeColor: WebColors.White,
      lineWidth: 6,
      position: center,
      hidden: true
    });
    trialScene.addChild(stimulusRing);
    const starOuterRadius = 52;
    const targetStar = new Shape({
      path: { pathString: starSvgPath(starOuterRadius, starOuterRadius * 0.4) },
      fillColor: WebColors.White,
      // shapes are centered on their bounding box; nudge the star up so its
      // points are centered in the ring
      position: { x: center.x, y: center.y - 0.0955 * starOuterRadius },
      hidden: true
    });
    trialScene.addChild(targetStar);
    const nogoX = new Label({
      text: "X",
      fontSize: 90,
      fontColor: WebColors.Red,
      position: center,
      hidden: true
    });
    trialScene.addChild(nogoX);
    const feedbackOutcome = new Label({
      text: "",
      fontSize: 40,
      fontColor: WebColors.White,
      position: { x: 200, y: 330 },
      hidden: true
    });
    const feedbackAmount = new Label({
      text: "",
      fontSize: 32,
      fontColor: WebColors.White,
      position: { x: 200, y: 400 },
      hidden: true
    });
    const feedbackTotal = new Label({
      text: "",
      fontSize: 24,
      fontColor: WebColors.White,
      position: { x: 200, y: 470 },
      hidden: true
    });
    trialScene.addChild(feedbackOutcome);
    trialScene.addChild(feedbackAmount);
    trialScene.addChild(feedbackTotal);
    const tapArea = new Shape({
      rect: { size: { width: 400, height: 800 } },
      fillColor: WebColors.Black,
      alpha: 0,
      position: center,
      zPosition: 100,
      isUserInteractionEnabled: true
    });
    trialScene.addChild(tapArea);
    const allTrialNodes = [cueSquare, cueCircle, stimulusRing, targetStar, nogoX, feedbackOutcome, feedbackAmount, feedbackTotal];
    const hideAll = () => allTrialNodes.forEach((node) => node.hidden = true);
    let phase = "idle";
    let stimulusOnset = 0;
    let responded = false;
    let responseTimeMs = null;
    let prematureTaps = 0;
    let lateTap = false;
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
      }
    };
    tapArea.onTapDown(registerResponse);
    trialScene.onKeyDown((e) => {
      if (e.code === "Space" && !e.repeat) registerResponse();
    });
    trialScene.onAppear(() => {
      const idx = game.trialIndex;
      const trial = trialConfigurations[idx];
      const isPractice = trial.block === "practice";
      const isTarget = trial.stimulus === "target";
      const windowMs = isTarget ? targetWindowMs : nogoWindow;
      const feedbackMs = isTarget ? targetPlusFeedback - windowMs : nogoFeedback;
      hideAll();
      responded = false;
      responseTimeMs = null;
      prematureTaps = 0;
      lateTap = false;
      let windowActualMs = 0;
      let outcome = "miss";
      let amountCents = 0;
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
        let outcomeText;
        if (isTarget) {
          outcome = responded ? "hit" : "miss";
          outcomeText = responded ? "HIT!" : "Too slow";
          amountCents = isReward && responded ? hitReward : 0;
          targetWindowMs = Math.min(
            targetMax,
            Math.max(targetMin, targetWindowMs + (responded ? -targetStep : targetStep))
          );
        } else {
          outcome = responded ? "nogo_error" : "nogo_success";
          outcomeText = responded ? "Oops! That was an X" : "Correct - no tap!";
          amountCents = isReward ? responded ? -nogoErrorLoss : nogoSuccessReward : 0;
        }
        totalCents += amountCents;
        feedbackOutcome.text = outcomeText;
        feedbackAmount.text = isReward ? formatCents(amountCents, true) : "No money this trial";
        feedbackTotal.text = `${isPractice ? "Practice total" : "Total"}: ${formatCents(totalCents)}`;
        feedbackOutcome.hidden = false;
        feedbackAmount.hidden = false;
        feedbackTotal.hidden = false;
      };
      const finishTrial = () => {
        phase = "idle";
        hideAll();
        game.addTrialData("block", trial.block);
        game.addTrialData("run", trial.run);
        game.addTrialData("trial_in_run", trial.trialInRun);
        game.addTrialData("trial_index", trial.blockIndex);
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
        game.presentScene(fixationScene);
      };
      trialScene.run(
        Action.sequence([
          Action.wait({ duration: trial.cueDurationMs }),
          Action.custom({ callback: showStimulus }),
          Action.wait({ duration: windowMs }),
          Action.custom({ callback: closeWindowAndShowFeedback }),
          Action.wait({ duration: feedbackMs }),
          Action.custom({ callback: finishTrial })
        ]),
        "trial"
      );
    });
    const practiceDoneScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(practiceDoneScene);
    const practiceDoneText = new Label({
      text: "",
      fontSize: 20,
      fontColor: WebColors.White,
      preferredMaxLayoutWidth: 340,
      position: { x: 200, y: 360 }
    });
    practiceDoneScene.addChild(practiceDoneText);
    const mainStartButton = new Button({
      text: "START",
      backgroundColor: WebColors.Green,
      position: { x: 200, y: 650 },
      isUserInteractionEnabled: true
    });
    mainStartButton.onTapDown(() => {
      mainStartButton.isUserInteractionEnabled = false;
      targetWindowMs = initialTargetMs;
      totalCents = 0;
      game.presentScene(getReadyScene);
    });
    practiceDoneScene.addChild(mainStartButton);
    practiceDoneScene.onAppear(() => {
      const runsText = runBreaks && totalRuns > 1 ? ` It has ${totalRuns} parts, with a short break after each part.` : "";
      practiceDoneText.text = `Practice complete.

Your practice winnings (${formatCents(totalCents)}) do not count.

Now the real task begins. Your total starts at $0.00.${runsText}

Tap START when you are ready.`;
      mainStartButton.isUserInteractionEnabled = true;
    });
    const runBreakScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(runBreakScene);
    const runBreakText = new Label({
      text: "",
      fontSize: 22,
      fontColor: WebColors.White,
      preferredMaxLayoutWidth: 340,
      position: { x: 200, y: 360 }
    });
    runBreakScene.addChild(runBreakText);
    const continueButton = new Button({
      text: "CONTINUE",
      backgroundColor: WebColors.Green,
      position: { x: 200, y: 650 },
      isUserInteractionEnabled: true
    });
    continueButton.onTapDown(() => {
      continueButton.isUserInteractionEnabled = false;
      game.presentScene(getReadyScene);
    });
    runBreakScene.addChild(continueButton);
    runBreakScene.onAppear(() => {
      const finishedRun = trialConfigurations[game.trialIndex - 1].run;
      runBreakText.text = `End of part ${finishedRun} of ${totalRuns}.

Total so far: ${formatCents(totalCents)}

Take a short break. Tap CONTINUE when you are ready.`;
      continueButton.isUserInteractionEnabled = true;
    });
    const doneScene = new Scene({ backgroundColor: WebColors.Black });
    game.addScene(doneScene);
    const doneSceneText = new Label({
      text: "",
      fontSize: 24,
      fontColor: WebColors.White,
      preferredMaxLayoutWidth: 340,
      position: { x: 200, y: 400 }
    });
    doneScene.addChild(doneSceneText);
    doneScene.onAppear(() => {
      doneSceneText.text = `You have finished the task.

You earned ${formatCents(totalCents)}.`;
    });
    const okButton = new Button({
      text: "OK",
      position: { x: 200, y: 600 },
      isUserInteractionEnabled: true
    });
    okButton.onTapDown(() => {
      okButton.isUserInteractionEnabled = false;
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
const urlParams = new URLSearchParams(window.location.search);
const gameParameters = {};
urlParams.forEach((value, key) => {
  gameParameters[key] = value;
});
activity.setParameters(gameParameters);
const session = new Session({ activities: [activity] });
session.onActivityData((ev) => {
  const trials = ev.data.trials;
  if (!trials) return;
  const config = ev.activityConfiguration;
  const totalTrialsNeeded = 6 * Number(config.trials_per_type);
  const practiceTrials = trials.filter((t) => t.block === "practice");
  const mainTrials = trials.filter((t) => t.block === "main");
  if (totalTrialsNeeded > 0 && mainTrials.length === totalTrialsNeeded) {
    const correctCount = mainTrials.filter((t) => t.correct === true).length;
    const accuracy = correctCount / mainTrials.length * 100;
    const simplify = (t, label) => ({
      trial: label,
      run: t.run,
      condition: t.condition,
      type: t.trial_type,
      outcome: t.outcome,
      correct: t.correct ? 1 : 0,
      rt: t.response_time_ms === null ? null : Math.round(t.response_time_ms),
      window: t.response_window_ms,
      amount: t.amount_cents
    });
    const simplifiedTrials = [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...practiceTrials.map((t) => simplify(t, `p${t.trial_index + 1}`)),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...mainTrials.map((t) => simplify(t, t.trial_index))
    ];
    if (window.parent) {
      window.parent.postMessage(
        {
          type: MESSAGE_DATA,
          acc: accuracy.toFixed(2),
          total_cents: mainTrials[mainTrials.length - 1].total_cents,
          details: JSON.stringify(simplifiedTrials)
        },
        "*"
      );
      console.log("accuracy", accuracy);
    }
  }
});
window.m2c2kitSession = session;
session.initialize();
