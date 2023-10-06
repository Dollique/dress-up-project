<template>
  <article>
    <div v-if="data && productsStore.top_id" class="top">
      <img
        :src="`/images/clothing/${
          getDressUpItem(data, productsStore.top_id).image
        }`"
      />
    </div>

    <div v-if="data && productsStore.bottom_id" class="bottom">
      <img
        :src="`/images/clothing/${
          getDressUpItem(data, productsStore.bottom_id).image
        }`"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/products";

const props = defineProps({ data: { type: Object }, piece: { type: String } });

const getDressUpItem = (data, id) => {
  return data.find((item) => item._id === id);
};

// get the store data
const productsStore = useProductsStore();
</script>
