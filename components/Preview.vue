<template>
  <article>
    <div v-if="products && productsStore.tops_id" class="top">
      <img
        :src="
          getDressUpItem(products, productsStore.tops_id).attributes.image.data
            .attributes.url
        "
      />
    </div>

    <div v-if="products && productsStore.bottoms_id" class="bottom">
      <img
        :src="
          getDressUpItem(products, productsStore.bottoms_id).attributes.image
            .data.attributes.url
        "
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/products";

const props = defineProps({ data: { type: Object } });
const products = props.data.data;

const getDressUpItem = (items, id) => {
  return items.find((item) => item.id === id);
};

// get the store data
const productsStore = useProductsStore();

console.log("store", productsStore);
</script>
