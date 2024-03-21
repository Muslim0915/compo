<script setup>
import {ref} from "vue";

const inputFocused = ref(false);
const toggleFocus = () => {
  inputFocused.value = !inputFocused.value;
}
</script>

<template>
  <div
      class="flex max-md:py-2 max-md:flex-grow-0 max-md:flex-shrink-0 items-center md:flex-1 px-3 py-4 border border-gray-300 rounded-xl focus:border-blue-500"
      :class="inputFocused ? 'border-blue-500' : 'border-gray-300'"
  >
    <input
        type="text"
        class="flex-1 max-md:flex-grow-0 max-md:flex-shrink-0 placeholder-amber-950 outline-none bg-transparent max-md:text-sm"
        placeholder="Название запроса"
        @focusin="toggleFocus()"
        @focusout="toggleFocus()"
    >
    <div class="flex gap-2">
      <i class="pi pi-search"></i>
      <i class="pi pi-times"></i>
    </div>
  </div>
</template>

<style scoped>

</style>