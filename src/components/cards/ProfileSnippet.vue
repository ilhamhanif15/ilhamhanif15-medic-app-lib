<template>
    <div class="flex items-center space-x-4 mb-4">
        <img :src="imgSrc" class="w-12 h-12 rounded-full object-cover" alt="">
        <div class="leading-relaxed">
            <div class="font-bold text-slate-700 mb-1">{{ name }}</div>
            <div class="font-semibold text-gray-500 text-xs">{{ subtitle }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profile-snippet",
    props: {
        name: {
            Type : String
        },
        subtitle: {
            Type : String
        },
        imgSrc: {
            Type : String
        }
    }
}
</script>

<style>

</style>