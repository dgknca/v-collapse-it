# v-collapse-it

A super simple Vue directive to expand/collapse elements.

## Install

```bash
yarn add v-collapse-it
```

## Browser

```html
<!-- From CDN -->
<script src="https://unpkg.com/v-collapse-it@0.1.0/dist/v-collapse-it.umd.js"></script>
```

## Demo

[Codepen](https://codepen.io/dgknca/pen/JjJwYgo) | [Codesandbox Accordion Example](https://codesandbox.io/s/v-collapse-it-accordion-example-1tzb9)

## Options

| Option    | Type     | Default          | Description                                                          |
| --------- | -------- | ---------------- | -------------------------------------------------------------------- |
| directive | string   | 'collapse'       | Name of the directive (v-collapse).                                  |
| speed     | number   | 300              | Transition duration in miliseconds.                                  |
| collapsed | boolean  | false            | Collapse state of elements used the directive.                       |
| ease      | **Ease** | 'easeInOutCubic' | A string indicating which easing function to use for the transition. |

#### Ease Type

```ts
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
```

## Usage

Import the plugin in your main.js file

```js
import VCollapse from 'v-collapse-it'

const app = createApp(App)
// use the plugin
app.use(VCollapse)
// or you can set your default options
app.use(VCollapse, {
  speed: 500,
})
app.mount('#app')
```

Example usage:

```vue
<template>
  <div>
    <!-- you can directly use a single boolean value like this -->
    <div v-collapse="isCollapsed" class="box"></div>

    <!-- or use an object witrh available configs -->
    <div
      v-collapse="{
        speed: 1000,
        collapsed: isCollapsed,
      }"
      class="box"
    ></div>

    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isCollapsed = ref(false)

    const toggle = () => {
      isCollapsed.value = !isCollapsed.value
    }

    return {
      isCollapsed,
      toggle,
    }
  },
}
</script>

<style scoped>
.box {
  height: 300px;
  width: 300px;
  background: pink;
  padding: 50px;
  margin: 50px;
}
</style>
```
