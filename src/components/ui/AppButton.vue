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
  <button class="flex items-center max-md:text-xl">
    <i :class="icon">
    </i>

    <span>
    {{ label }}
  </span>
  </button>
</template>

<style scoped>

</style>