// ref: https://gist.github.com/gre/1650294
export const EasingFunctions = {
  // no easing, no acceleration
  linear: (t: number): number => t,
  // accelerating from zero velocity
  easeInQuad: (t: number): number => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t: number): number => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // accelerating from zero velocity
  easeInCubic: (t: number): number => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t: number): number => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: (t: number): number => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t: number): number => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t: number): number =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: (t: number): number => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t: number): number => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t: number): number =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
}
