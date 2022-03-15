<template>
    <TopBackground>
        <template v-slot:left>
            <span class="text-sm font-semibold">{{ welcomeText }}</span><br/>
            <span class="font-semibold text-lg">{{ fullname }}</span>
        </template>

        <template v-slot:right>
            <img :src="imgProfileSrc" class="w-12 h-12 rounded-full object-cover" alt="">
        </template>
    </TopBackground>
</template>

<script>
import TopBackground from "./TopBackground.vue"

export default {
    name: "user-profile-snippet",
    components: {
        TopBackground
    },
    props: {
        welcomeText: {
            Type: String
        },
        fullname: {
            Type: String
        },
        imgProfileSrc: {
            Type: String
        }
    }
}
</script>

<style>

</style>