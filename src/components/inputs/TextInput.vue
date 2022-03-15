<template>
  <label :for="name">{{ label }}</label>
  <div class="mb-3 mt-1">
    <input 
        :type="type"
        :name="name"
        class="mb-2 w-full py-3 px-3 rounded-lg border border-gray-300 bg-gray-100 focus:border-primary focus:outline-none duration-300"
        :class="{
          'bg-gray-300' : disabled,
          'border-red-400' : attrModel.isError
        }"
        :placeholder="placeholder"
        v-model="attrModel.model"
        :disabled="disabled"
        @input="$emit('update:attrModel', attrModel.model)"
    >
    <div class="space-y-1">
      <div v-if="hint" class="text-gray-500 text-xs">
        {{ hint }}
      </div>
      <div v-if="attrModel.isError" class="text-red-500 text-xs">
        {{ attrModel.errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { AttributeModel } from "@//services/form/AttributeModel"

export default {
  name: "text-input",
  props: {
    type: {
      Type: String,
      default: "text"
    },
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
    attrModel: {
      Type: AttributeModel
    }
  }
}
</script>

<style>

</style>