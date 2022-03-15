<template>
    <div class="flex justify-between items-center bg-transparent relative container py-8">
        <div 
            class="absolute bg-primary w-full top-0 left-0 rounded-b-3xl shadow-lg"
            :class="{
                'h-44' : height === 'small',
                'h-64' : height === 'high'
            }"
        ></div>
        <div class="z-10 text-white">
            <slot name="left"></slot>
        </div>
        <div class="z-10">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "top-background",
    props: {
        height: {
            Type: String,
            default: "small"
        }
    }
}
</script>

<style>

</style>