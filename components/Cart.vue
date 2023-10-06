<template>
  <article
    class="prose absolute top-[30px] right-3 bg-white border border-gray-300 p-3"
  >
    <h2>Your products</h2>
    <ul>
      <li>Body: {{ productsStore.body_size }}</li>
      <li>
        Top: {{ productsStore.top_id }} ({{ productsStore.top_size }} /
        {{ productsStore.top_length }})
      </li>
      <li>
        Botom: {{ productsStore.bottom_id }} ({{ productsStore.bottom_size }} /
        {{ productsStore.bottom_length }})
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

// get the store data
const productsStore = useProductsStore();
</script>
