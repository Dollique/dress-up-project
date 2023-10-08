<template>
  <article
    class="prose absolute top-[30px] right-3 bg-white border border-gray-300 p-3"
  >
    <h2>Your products</h2>
    <ul>
      <li>Body: {{ productsStore.body_size }}</li>
      <li>
        Top: {{ productsStore.tops_id }} ({{ productsStore.tops_size }} /
        {{ productsStore.tops_length }})
      </li>
      <li>
        Botom: {{ productsStore.bottoms_id }} ({{
          productsStore.bottoms_size
        }}
        / {{ productsStore.bottoms_length }})
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

// get the store data
const productsStore = useProductsStore();
</script>
