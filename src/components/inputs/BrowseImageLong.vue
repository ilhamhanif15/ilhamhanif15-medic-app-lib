<template>
    <div>
        <img :src="file.src" class="w-16 h-16 rounded border border-gray-200 object-cover mb-2" alt="" srcset="">
        <div class="flex justify-center space-x-2">
            <div @click="browseImage" class="py-2 px-3 w-full rounded-lg border border-gray-300 cursor-pointer scroll-auto">
                {{ file.name || "Pilih file" }}
            </div>
            <BaseButton
                class="w-fit h-fit bottom-0 border border-gray-200 bg-neutral-100"
                size="small"
                type="OutlinePrimary"
                :darkButton="false"
                :loading="loading"
                @click="browseImage"
            >
                <BaseIcon name="camera" class="w-8 h-8 group-active:fill-white transition duration-200"/>
            </BaseButton>
            <input @change="changeFile" type="file" ref="profileImageBrowseEl" class="hidden" name="profile_image">
        </div>
    </div>
</template>

<script>
import { AttributeModel } from "../../services/form/AttributeModel"

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
        attrModel: {
            Type: AttributeModel,
            default: null
        }
    },
    data: () => ({
        file: {
            src: null,
            name: ""
        }
    }),
    methods: {
        browseImage() {
            this.$refs.profileImageBrowseEl.click()
        },
        changeFile(event) {
            this.file.src = URL.createObjectURL(event.target.files[0]) // for showing it first
            this.file.name = String(event.target.files[0].name).slice(0,25)+"..."

            if (this.attrModel !== null) {
                this.attrModel.model = event.target.files[0]
            }
            else {
                this.$emit('update:modelValue', event.target.files[0]) // invoked using change method in parent
            }
        }
    }
}
</script>

<style>

</style>