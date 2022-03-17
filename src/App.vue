<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { BaseIcon, TextInput } from "./components/";
</script>

<template>
  <div class="grid grid-cols-1 gap-4 px-16">
    
    <!-- Icons -->
    <div class="flex justify-between items-center">
      <div>Icon Test : </div>
      <div class="w-24">
        <BaseIcon name="clock"></BaseIcon>
      </div>
    </div>

    <!-- Text Input -->
    <div class="flex justify-between items-center space-x-12">
      <div >Text Input Test : </div>
      <div class="w-full">
        <TextInput
            label="Alamat"
            placeholder="Masukkan Alamat Lengkap"
        ></TextInput>
      </div>
    </div>

  </div>
</template>

<style>

</style>
