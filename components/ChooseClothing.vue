<template>
  <article class="prose">
    <h2>Choose {{ category }}</h2>
  </article>

  <div class="flex flex-wrap gap-4">
    <div
      v-for="item in getItems"
      :key="item.id"
      :data-id="item.id"
      :class="`item ${item.id === productsStore[category].id ? 'active' : ''}`"
      @click="selectItem($event, productsStore, category)"
    >
      <img :src="item.attributes.image.data.attributes.url" />
      <div class="">{{ item.attributes.name }}</div>
    </div>
  </div>

  <ProductColors />
</template>

<script setup lang="ts">
// get the product state management
const productsStore = useProducts();
const category = useCategory();

// get products data of current category
const getItems = ref(useProductsView());

/** EVENT HANDLER **/

// update store on click
const selectItem = (event, products, myCategory: string) => {
  const getId = parseFloat(event.currentTarget.getAttribute("data-id"));

  if (products[myCategory].id !== getId) {
    // remove options of current item from store
    products[myCategory].size = "";
    products[myCategory].length = "";

    // save new item in store
    products[myCategory].id = getId as number;
  }
};
</script>

<style>
.active {
  border: 1px solid black;
}
</style>
