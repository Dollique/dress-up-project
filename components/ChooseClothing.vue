<template>
  <article class="prose">
    <h2>Choose {{ category }}</h2>
  </article>

  <div class="flex flex-wrap gap-4">
    <div
      v-for="item in getItems"
      :key="item.id"
      :data-id="item.id"
      :class="`item ${
        item.id === productsStore[`${category}_id`] ? 'active' : ''
      }`"
      @click="selectItem($event, productsStore, category)"
    >
      <img :src="item.attributes.image.data.attributes.url" />
      <div class="">{{ item.attributes.name }}</div>
    </div>
  </div>

  <ProductColors />
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

/** METHODS **/

// update store on click
const selectItem = (event, products, myCategory: string) => {
  const getId = event.currentTarget.getAttribute("data-id");
  products[`${myCategory}_id`] = parseFloat(getId) as number;
};

// get the product state management
const productsStore = useProductsStore();
const category = useCategory();

// get products data of current category
const getItems = ref(useProductsView());
</script>

<style>
.active {
  border: 1px solid black;
}
</style>
