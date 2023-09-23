<template>
  <h1>DressUp Prototype</h1>
  <div v-for="item in data" :key="item._id">{{ item.name }}</div>

  <button>Add outfit to basket</button>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
