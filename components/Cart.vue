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
        {{ productsStore.tops.color }}
      </li>
      <li>
        Botom: {{ productsStore.bottoms.id }} ({{
          productsStore.bottoms.size
        }}
        / {{ productsStore.bottoms.length }})
        {{ productsStore.bottoms.color }}
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const productsStore = useProducts();

// TODO: GET COLOR NAME
/*const topColorId = productsStore.tops.color;

console.log("topColorId", topColorId);
console.log("productsStore", productsStore.tops);

const topColor = ref(useColor(topColorId));

console.log("topColor", topColor.value);*/
</script>
