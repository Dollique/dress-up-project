<template>
  <div class="flex flex-wrap gap-4">
    <figure
      :data-id="bodyType.id"
      :class="`product ${
        bodyType.id === productsStore.body_type ? 'active' : ''
      }`"
      @click="selectItem"
      v-for="bodyType in bodyTypes"
      :key="bodyType.id"
    >
      <img :src="bodyType.attributes.image.data.attributes.url" />
      <figcaption>{{ bodyType.attributes.name }}</figcaption>
    </figure>
  </div>
</template>

<script setup>
import { useDataStore } from "~/store/data";
import { useProductsStore } from "~/store/products";
const dataStore = useDataStore();
const productsStore = useProductsStore();

const bodyTypeData = dataStore.body_types;

// update store on click
const selectItem = (event) => {
  const getId = event.currentTarget.getAttribute("data-id");
  productsStore.body_type = parseFloat(getId);
};

const bodyTypes = bodyTypeData ? bodyTypeData.data : {};
</script>

<style>
.active {
  border-color: black;
}
</style>
