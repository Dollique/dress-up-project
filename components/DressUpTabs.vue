<template>
  <div v-if="categories" class="tabs">
    <DressUpTab
      v-for="navData in categories"
      :key="navData.id"
      :tabNav="navData.attributes.name"
      :title="navData.attributes.title"
    />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data";

const dataStore = useDataStore();
let categories = {};

if (dataStore && !isEmpty(dataStore.categories)) {
  categories = dataStore.categories.data;
  categories = categories.sort((a, b) => a.id - b.id);
}
</script>
