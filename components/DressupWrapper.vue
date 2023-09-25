<template>
  <section class="prose">
    <h1>DressUp Prototype</h1>

    <BodySize />
    <ChooseClothing :data="data" />

    <button class="btn mt-4">Add outfit to basket</button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
