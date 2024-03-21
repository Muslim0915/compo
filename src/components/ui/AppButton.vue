<script setup>

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  }
})

</script>

<template>
  <button class="flex items-center max-sm:text-sm max-sm:px-3 max-sm:py-1 max-md:text-xl">
    <i :class="icon">
    </i>

    <span>
    {{ label }}
  </span>
  </button>
</template>

<style scoped>

</style>