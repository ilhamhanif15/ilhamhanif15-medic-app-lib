<template>
    <button 
        class="w-full bg-white text-primary rounded-lg shadow-xl duration-300 active:bg-primary active:text-white border border-primary font-semibold"
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