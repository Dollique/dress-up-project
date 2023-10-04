<template>
  <section class="relative">
    <SiteHeader />

    <article class="m-4 prose">
      <h1>DressUp Prototype</h1>
    </article>

    <section class="m-4 flex flex-col">
      <BodySize />
      <ChooseClothing piece="top" :data="data" />
      <ChooseClothing piece="bottom" :data="data" />
    </section>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
