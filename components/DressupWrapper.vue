<template>
  <section class="">
    <article class="prose">
      <h1>DressUp Prototype</h1>
    </article>

    <section class="flex flex-col">
      <BodySize />
      <ChooseClothing piece="top" :data="data" />
      <ChooseClothing piece="bottom" :data="data" />
    </section>

    <button class="btn mt-4">Add outfit to basket</button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
