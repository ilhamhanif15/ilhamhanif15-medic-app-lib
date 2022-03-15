<template>
  <component
    :is="buttonComponent"
    role="button"
    :size="getSize"
    class="disabled:opacity-75 disabled:bg-gray-500 group"
    :loading="loading"
    :type="buttonType"
  >
    <div v-show="!loading">
      <slot></slot>
    </div>
    <div class="flex justify-center">
      <BaseIcon 
        name="clock" 
        v-show="loading" 
        class="w-8 h-8 animate-spin"
        :class="{
          'fill-white' : darkButton,
          'fill-primary' : !darkButton
        }"
      ></BaseIcon>
    </div>
  </component>
</template>

<script>

const buttons = {}
const components = import.meta.globEager('./*.vue')

Object.entries(components).forEach(([path, definition]) => {
    // Get name of component, based on filename
    // "./components/Fruits.vue" will become "Fruits"
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')

    // Register component on this Vue instance
    // vueApp.component(componentName, definition.default)
    buttons[componentName] = definition.default
})

const sizes = {
    small: "py-2 px-3",
    default: "py-4 px-3"
}

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(buttons, value)
      }
    },
    buttonType: {
      type: String,
      default: "button"
    },
    size : {
      type: String,
      default: "default",
    },
    loading: {
      type: Boolean,
      default: false
    },
    darkButton: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    buttonComponent() {
      return buttons[this.type]
    },
    getSize() {
        return sizes[this.size]
    }
  }
}

</script>