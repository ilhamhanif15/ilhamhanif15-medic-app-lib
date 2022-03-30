<template>
    <div class="flex justify-center relative">
        <BaseButton
            class="rounded-full absolute w-fit h-fit p-2 bottom-0 ml-32 -mb-4 border border-gray-200 bg-neutral-100"
            size="small"
            type="OutlinePrimary"
            :darkButton="false"
            :loading="loading"
            @click="browseImage"
        >
            <BaseIcon name="camera" class="w-12 h-12 group-active:fill-white transition duration-200"/>
        </BaseButton>
        <input @change="changeFile" type="file" ref="profileImageBrowseEl" class="hidden" name="profile_image">
        <img :src="imageSrc" class="w-36 h-36 rounded-full border border-gray-200 object-cover" alt="" srcset="">
    </div>
</template>

<script>

export default {
    props: {
        isShow : {
            Type: Boolean,
            default: true
        },
        imageSrc: {
            Type: String
        },
        modelValue: {
            required: false
        },
        loading: {
            Type: Boolean,
            default: false
        },
    },
    methods: {
        browseImage() {
            this.$refs.profileImageBrowseEl.click()
        },
        changeFile(event) {
            // this.src = URL.createObjectURL(event.target.files[0]) // for showing it first
            this.$emit('update:modelValue', event.target.files[0]) // invoked using change method in parent
        }
    }
}
</script>

<style>

</style>