<script setup>
import Toggle from "@vueform/toggle";
import {ref} from "vue";

const value = ref(true);

</script>
<template>
  <div>
    <Toggle
        v-model="value"
        :classes="{
        container: 'inline-block rounded-full outline-none',
        toggle: 'flex w-10 h-6 rounded-full relative cursor-pointer transition items-center box-content border-1 text-xs leading-none',
        toggleOn: 'bg-blue-500 border-blue-500 justify-start text-white',
        toggleOff: 'bg-gray-400 border-gray-400 justify-end text-gray-700 ring-gray-400',
        toggleOnDisabled: 'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
        toggleOffDisabled: 'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
        handle: 'inline-block bg-white w-5 h-5 top-0.5 rounded-full absolute transition-all',
        handleOn: 'left-[95%] transform -translate-x-full',
        handleOff: 'left-0.5',
        handleOnDisabled: 'bg-gray-100 left-full transform -translate-x-full',
        handleOffDisabled: 'bg-gray-100 left-0',
        label: 'text-center w-8 border-box whitespace-nowrap select-none',
      }"
    />
  </div>
</template>