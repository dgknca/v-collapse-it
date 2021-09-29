export interface State {
  el: HTMLElement
  startValue: number
  endValue: number
  startTime: number
  endTime: number
  oldHeight: number
  oldPaddingTop: number
  oldPaddingBottom: number
  oldMarginTop: number
  oldMarginBottom: number
  oldOverflow: string
  oldDisplay: string
  oldPosition: string
  oldVisibility: string
}
export interface VCollapseOptions {
  directive: string
  collapsed: boolean
  speed: number
  ease: Ease
}

export type Ease =
  | 'linear'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
