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
      @click="selectItem"
    >
      <img :src="item.attributes.image.data.attributes.url" />
      <div class="">{{ item.attributes.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data";
import { useProductsStore } from "~/store/products";
import { useNavigationStore } from "~/store/navigation";
import { storeToRefs } from "pinia";

// get the product state management
const dataStore = useDataStore();
const productsStore = useProductsStore();

const data = dataStore.products;

// get item category
const navigationStore = useNavigationStore();
const { category } = storeToRefs(navigationStore);

let getItems = {};

/** METHODS **/

// update store on click
const selectItem = (event) => {
  const getId = event.currentTarget.getAttribute("data-id");
  productsStore[`${category.value}_id`] = parseFloat(getId) as number;
};

// get initial data of the chosen category
const getFilteredItems = (productData, dataCategory) => {
  return productData.filter(
    (item) => item.attributes.category.data.attributes.name === dataCategory
  );
};

/*
 * handle API data
 */
if (!isEmpty(data)) {
  const products = data.data; // strapi data structure

  getItems = getFilteredItems(products, category.value);

  watch(category, (newCategory) => {
    getItems = getFilteredItems(products, newCategory);
  });
}
</script>

<style>
.active {
  border: 1px solid black;
}
</style>
