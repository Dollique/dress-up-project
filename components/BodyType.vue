<template>
  <div class="flex flex-wrap gap-4">
    <figure
      :data-id="bodyType.id"
      :class="`product ${
        bodyType.id === productsStore.body_type_id ? 'active' : ''
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

<script setup lang="ts">
import { useDataStore } from "~/store/data";
const dataStore = useDataStore();
const productsStore = useProducts();

const bodyTypeData = dataStore.body_types;
const bodyTypes = bodyTypeData ? bodyTypeData.data : {};

/** EVENT HANDLER **/

// update store on click
const selectItem = (event) => {
  const getId = event.currentTarget.getAttribute("data-id");
  productsStore.body_type_id = parseFloat(getId) as number;
};
</script>

<style>
.active {
  border-color: black;
}
</style>
