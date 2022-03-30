<template>
  <div class="grid grid-cols-1 gap-7 px-16 py-32">
    
    <!-- Icons -->
    <div class="flex justify-between items-center">
      <div>Icon Test : </div>
      <div class="w-24">
        <BaseIcon name="clock"></BaseIcon>
      </div>
    </div>

    <!-- Text Input -->
    <div class="flex justify-between items-center space-x-12">
      <div >Text Input Test :</div>
      <div class="w-full">
        <TextInput
            label="Alamat"
            placeholder="Masukkan Alamat Lengkap"
        ></TextInput>
      </div>
    </div>
    
    <!-- Text Area -->
    <div class="flex justify-between items-center space-x-12">
      <div >Text Area Test (V-Model) :</div>
      <div class="w-full">
        <TextAreaInput
            label="Alamat"
            v-model="textAreaInputVModel"
            placeholder="Masukkan Alamat Lengkap"
        ></TextAreaInput>
      </div>
      <div class="w-full">
        {{ textAreaInputVModel }}
      </div>
    </div>
    
    <!-- Text Area -->
    <div class="flex justify-between items-center space-x-12">
      <div >Text Area Test (AttrModel) :</div>
      <div class="w-full">
        <TextAreaInput
            label="Alamat"
            :attrModel="textAreaInputAttrModel"
            placeholder="Masukkan Alamat Lengkap"
        ></TextAreaInput>
      </div>
      <div class="w-full">
        {{ textAreaInputAttrModel }}
      </div>
    </div>

    <!-- Browse Image -->
    <div class="flex justify-between items-center space-x-12 mb-8">
      <div >Browse Image : </div>
      <div class="w-full">
        <BrowseImage
          v-model="image"
          :imageSrc="imageSrc"
          @change="onChangeImage"
        ></BrowseImage>
      </div>
    </div>
   
    <!-- Browse Image Long -->
    <div class="flex flex-col space-y-2">
      <div >Browse Image Long (V-Model) : </div>
      <div class="w-full">
        <BrowseImageLong
          v-model="image"
          :imageSrc="imageSrc"
          @change="onChangeImage"
        ></BrowseImageLong>
      </div>
      <div>
        debug: {{ image }}
      </div>
    </div>
    
    <!-- Browse Image Long -->
    <div class="flex flex-col space-y-2">
      <div >Browse Image Long (AttrModel) : </div>
      <div class="w-full">
        <BrowseImageLong
          :attrModel="imageAttrModel"
          :imageSrc="imageSrc"
          @change="onChangeImage"
        ></BrowseImageLong>
      </div>
      <div>
        debug: {{ imageAttrModel }}
      </div>
    </div>

  </div>
</template>

<script>
import { BaseIcon, TextInput, BrowseImage } from "./components/";
import { AttributeModel } from "./services/form/AttributeModel"
import { ref } from "vue";

export default {
  components: {
    BaseIcon,
    TextInput,
    BrowseImage
  },
  data: () => ({
    image : null,
    imageSrc: "",
    imageAttrModel: new AttributeModel(null),

    // TextArea
    textAreaInputAttrModel: new AttributeModel(""),
    textAreaInputVModel: ""
  }),
  methods: {
    onChangeImage(event) {
      this.imageSrc = URL.createObjectURL(event.target.files[0])
    }
  }
}
</script>

<style>

</style>
