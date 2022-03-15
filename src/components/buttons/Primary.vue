<template>
    <button 
        class="w-full bg-primary text-white rounded-lg shadow-xl duration-300 active:bg-indigo-500 font-semibold"
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