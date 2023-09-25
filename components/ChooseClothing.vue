<template>
  <h2>Step 2 - Choose Clothing</h2>
  <div class="columns-2">
    <div v-for="item in data" :key="item._id">
      <div class="">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
