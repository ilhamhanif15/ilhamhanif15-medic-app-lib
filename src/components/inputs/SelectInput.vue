<template>
    <label :for="name">{{ label }}</label>
    <div class="mb-2 mt-2">
        <select
            class="mb-2 w-full py-3 px-3 rounded-lg border border-gray-300 bg-gray-100 focus:border-primary focus:outline-none duration-300"
            :class="{
                'bg-gray-300' : disabled
            }"
            v-model="value"
            :disabled="disabled"
            @change="onChange(value)"
        >
            <option 
                v-for="(option, idx) in options"
                :key="idx"
                :value="valueAsObject ? option : option.value"
            >
                {{ option.label }}
            </option>
        </select>
        <div class="space-y-1">
            <div v-if="hint" class="text-gray-500 text-xs">
                {{ hint }}
            </div>
            <div v-if="isError" class="text-red-500 text-xs">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "select-input",
    emits: ["change", "update:modelValue"],
    props: {
      name: {
        Type: String,
        default: ""
      },
      placeholder: {
        Type: String,
        default: ""
      },
      label: {
        Type: String,
        default: ""
      },
      modelValue: {
        Type: String,
        default: ""
      },
      options: {
          Type: Array,
          default: () => []
      },
      disabled: {
        Type: Boolean,
        default: false
      },
      isError: {
        Type: Boolean,
        default: false
      },
      errorMessage: {
        Type: String,
        default: ""
      },
      hint: {
        Type: String,
        default: ""
      },
      valueAsObject : {
        Type: Boolean,
        default: false
      }
    },
    computed: {
      value: {
        get() {
          return this.modelValue
        },
        set(val) {
          this.$emit('update:modelValue', val)
        }
      }
    },
    methods: {
      onChange(value) {
        this.$emit("change", value)
      }
    }
}
</script>

<style>

</style>