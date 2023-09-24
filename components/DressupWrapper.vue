<template>
  <section class="prose lg:prose-xl">
    <h1 class="prose lg:prose-xl">DressUp Prototype</h1>
    <div v-for="item in data" :key="item._id">{{ item.name }}</div>

    <button class="btn">Add outfit to basket</button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
