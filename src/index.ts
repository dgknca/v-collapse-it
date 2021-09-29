import { nextTick, App, ObjectDirective, DirectiveBinding } from 'vue'
import { VCollapseOptions, State, Ease } from './utils/types'
import { EasingFunctions } from './utils/eases'

const globalOptions: VCollapseOptions = {
  directive: 'collapse',
  collapsed: false,
  speed: 300,
  ease: 'easeInOutCubic',
}

export const VCollapseIt: ObjectDirective = (() => {
  // ref: https://github.com/vuejs/vue/issues/6385#issuecomment-323141918
  const state = new WeakMap()

  // ref: https://stackoverflow.com/a/46853902/10698741
  const lerp = (start: number, end: number, l: number) => {
    return start + (end - start) * l
  }

  const animateSlideUp = (el: HTMLElement, speed: number, ease: Ease) => {
    const data = state.get(el)
    const now = performance.now()
    const timeSinceStartInSeconds = now - data.startTime
    const l = Math.min(
      EasingFunctions[ease](timeSinceStartInSeconds / speed),
      1
    )

    el.style.height = `${Math.min(
      Math.max(lerp(data.oldHeight, data.endValue, l), 0),
      data.oldHeight
    )}px`
    el.style.paddingTop = `${Math.min(
      Math.max(lerp(data.oldPaddingTop, data.endValue, l), 0),
      data.oldPaddingTop
    )}px`
    el.style.paddingBottom = `${Math.min(
      Math.max(lerp(data.oldPaddingBottom, data.endValue, l), 0),
      data.oldPaddingBottom
    )}px`
    el.style.marginTop = `${Math.min(
      Math.max(lerp(data.oldMarginTop, data.endValue, l), 0),
      data.oldMarginTop
    )}px`
    el.style.marginBottom = `${Math.min(
      Math.max(lerp(data.oldMarginBottom, data.endValue, l), 0),
      data.oldMarginBottom
    )}px`
    el.style.overflow = 'hidden'

    if (l < 1) {
      requestAnimationFrame(() => animateSlideUp(el, speed, ease))
    } else {
      data.endTime = performance.now()
      el.style.display = data.oldDisplay
      // console.log('duration: ', data.endTime - data.startTime)
    }
  }

  const animateSlideDown = (el: HTMLElement, speed: number, ease: Ease) => {
    const data = state.get(el)
    const now = performance.now()
    const timeSinceStartInSeconds = now - data.startTime
    const l = Math.min(
      EasingFunctions[ease](timeSinceStartInSeconds / speed),
      1
    )

    if (data.oldDisplay === 'none') {
      el.style.display = 'block'
    }

    el.style.height = `${Math.min(
      Math.max(lerp(data.endValue, data.oldHeight, l), 0),
      data.oldHeight
    )}px`
    el.style.paddingTop = `${Math.min(
      Math.max(lerp(data.endValue, data.oldPaddingTop, l), 0),
      data.oldPaddingTop
    )}px`
    el.style.paddingBottom = `${Math.min(
      Math.max(lerp(data.endValue, data.oldPaddingBottom, l), 0),
      data.oldPaddingBottom
    )}px`
    el.style.marginTop = `${Math.min(
      Math.max(lerp(data.endValue, data.oldMarginTop, l), 0),
      data.oldMarginTop
    )}px`
    el.style.marginBottom = `${Math.min(
      Math.max(lerp(data.endValue, data.oldMarginBottom, l), 0),
      data.oldMarginBottom
    )}px`
    el.style.overflow = 'hidden'

    if (l < 1) {
      requestAnimationFrame(() => animateSlideDown(el, speed, ease))
    } else {
      data.endTime = performance.now()
      el.style.overflow = data.oldOverflow
      // console.log('duration: ', data.endTime - data.startTime)
    }
  }

  function updateVCollapse(
    el: HTMLElement,
    binding: DirectiveBinding,
    noTransition?: boolean
  ) {
    const collapsed =
      typeof binding.value === 'boolean'
        ? binding.value
        : binding.value?.collapsed || globalOptions.collapsed
    const speed = noTransition ? 0 : binding.value?.speed || globalOptions.speed
    const ease = binding.value?.ease || globalOptions.ease

    const slideDown = () => {
      state.set(el, {
        ...state.get(el),
        startTime: performance.now(),
      })
      requestAnimationFrame(() => animateSlideDown(el, speed, ease))
    }

    const slideUp = () => {
      state.set(el, {
        ...state.get(el),
        startTime: performance.now(),
      })
      requestAnimationFrame(() => animateSlideUp(el, speed, ease))
    }

    collapsed ? slideUp() : slideDown()
  }

  return {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      nextTick(() => {
        const data: State = {
          el: el,
          startValue: el.getBoundingClientRect().height,
          endValue: 0,
          startTime: 0,
          endTime: 0,
          oldPaddingTop: parseFloat(
            getComputedStyle(el).getPropertyValue('padding-top')
          ),
          oldPaddingBottom: parseFloat(
            getComputedStyle(el).getPropertyValue('padding-bottom')
          ),
          oldMarginTop: parseFloat(
            getComputedStyle(el).getPropertyValue('margin-top')
          ),
          oldMarginBottom: parseFloat(
            getComputedStyle(el).getPropertyValue('margin-top')
          ),
          oldDisplay: getComputedStyle(el).getPropertyValue('display'),
          oldOverflow: getComputedStyle(el).getPropertyValue('overflow'),
          oldPosition: getComputedStyle(el).getPropertyValue('position'),
          oldVisibility: getComputedStyle(el).getPropertyValue('visibility'),
          oldHeight: 0,
        }

        if (data.oldDisplay === 'none') {
          el.style.display = 'block'
          el.style.position = 'absolute'
          el.style.visibility = 'hidden'

          data.oldHeight = el.getBoundingClientRect().height

          el.style.display = data.oldDisplay
          el.style.position = data.oldPosition
          el.style.visibility = data.oldVisibility
        } else {
          data.oldHeight = el.getBoundingClientRect().height
        }

        state.set(el, data)

        updateVCollapse(el, binding, true)
      })
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
      if (typeof binding.value === 'boolean') {
        if (binding.value === binding.oldValue) return
      } else {
        if (binding.value.collapsed === binding.oldValue.collapsed) return
      }

      nextTick(() => {
        updateVCollapse(el, binding)
      })
    },
    unmounted(el: HTMLElement) {
      state.delete(el)
    },
  }
})()

const VCollapseItPlugin = {
  install(app: App, options?: VCollapseOptions) {
    if (options?.collapsed) {
      globalOptions.collapsed = options.collapsed
    }
    if (options?.speed) {
      globalOptions.speed = options.speed
    }
    if (options?.ease) {
      globalOptions.ease = options.ease
    }

    app.directive(options?.directive || globalOptions.directive, VCollapseIt)
  },
}

export default VCollapseItPlugin
