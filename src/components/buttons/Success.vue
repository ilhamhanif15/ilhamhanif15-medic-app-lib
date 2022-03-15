<template>
    <button 
        class="w-full bg-green-500 text-white rounded-lg shadow-xl duration-300 active:bg-green-700 font-semibold"
        :class="[ size ]"
    >
        <slot></slot>
    </button>
</template>

<script>
import props from "./BaseButtonProps"

export default {
    props
}
</script>