<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => {window.addEventListener('mousemove', update); console.log('first1')})
onUnmounted(() => {window.removeEventListener('mousemove', update); console.log('first')})
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>