<template>
  <article class="prose">
    <h2>Your products</h2>
    <ul>
      <li>Body: {{ productsStore.body_size }}</li>
      <li>Top: {{ productsStore.top_id }}</li>
      <li>Botom: {{ productsStore.bottom_id }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

const props = defineProps({ data: { type: Object } });

// get the store data
const productsStore = useProductsStore();
</script>
