<template>
  <article
    class="prose absolute top-[30px] right-3 bg-white border border-gray-300 p-3"
  >
    <h2>Your products</h2>
    <ul>
      <li>Body: {{ productsStore.body_type_id }}</li>
      <li>
        Top: {{ productsStore.tops.id }} ({{ productsStore.tops.size }} /
        {{ productsStore.tops.length }})
      </li>
      <li>
        Botom: {{ productsStore.bottoms.id }} ({{
          productsStore.bottoms.size
        }}
        / {{ productsStore.bottoms.length }})
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const productsStore = useProducts();
</script>
