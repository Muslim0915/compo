<script setup>

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  href:{
    type: String,
    default: ''
  }
})

</script>

<template>
  <li>
    <a :href="href">
      {{props.label}}
    </a>
  </li>
</template>

<style scoped>

</style>