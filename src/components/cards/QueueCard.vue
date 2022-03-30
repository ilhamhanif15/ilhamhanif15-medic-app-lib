<template>
    <div 
        class="relative rounded-lg w-full px-5 py-10 shadow-lg text-center font-semibold"
        :class="{
            'bg-danger text-white'  : type === 'danger',
            'bg-info text-white'    : type === 'info',
            'bg-success text-white' : type === 'success',
            'bg-primary text-white' : type === 'primary',
            'bg-secondary text-white' : type === 'secondary',
        }"
    >
        <template v-if="!isDescriptionView">
            <div class="absolute top-3 left-0 right-0 text-sm px-5">{{ topText }}</div>
            <div class="text-5xl mt-7">{{ queueNumber }}</div>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>

<script>
export default {
    name: "queue-card",
    props: {
        topText: {
            Type: String
        },
        queueNumber: {
            Type: String
        },
        type: {
            Type: String
        },
        isDescriptionView: {
            Type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>