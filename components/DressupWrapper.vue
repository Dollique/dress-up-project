<template>
  <section class="prose">
    <h1>DressUp Prototype</h1>

    <h2>Step 1 - Choose Body</h2>
    <div class="columns-2">
      <figure class="product">
        <img src="https://placehold.co/150x150" />
        <figcaption>Smol Potet</figcaption>
      </figure>

      <figure class="product">
        <img src="https://placehold.co/150x150" />
        <figcaption>Potet</figcaption>
      </figure>

      <figure class="product">
        <img src="https://placehold.co/150x150" />
        <figcaption>More Potet</figcaption>
      </figure>

      <figure class="product">
        <img src="https://placehold.co/150x150" />
        <figcaption>Chubby Potet</figcaption>
      </figure>
    </div>

    <h2>Step 2 - Choose Clothing</h2>
    <div class="columns-2">
      <div v-for="item in data" :key="item._id">
        <div class="">{{ item.name }}</div>
      </div>
    </div>

    <button class="btn mt-4">Add outfit to basket</button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object } });
</script>
