<template>
  <article class="prose">
    <h2>Choose {{ category }}</h2>
  </article>

  <div class="flex flex-wrap gap-4">
    <div
      v-for="item in getItems"
      :key="item._id"
      :data-id="item._id"
      :class="`item ${
        item._id === productsStore[`${category}_id`] ? 'active' : ''
      }`"
      @click="selectItem"
    >
      <img :src="`/images/clothing/${item.image}`" />
      <div class="">{{ item.name }}</div>
    </div>
  </div>
  <div>Selected: {{ productsStore[`${category}_id`] }}</div>

  <select @change="handleSelect($event, 'size')">
    <option>Select size</option>
    <option v-for="(size, index) in sizes" :key="`${size}_${index}`">
      {{ size }}
    </option>
  </select>

  <select @change="handleSelect($event, 'length')" class="mt-1">
    <option>Select length</option>
    <option v-for="(length, index) in lengths" :key="`${length}_${index}`">
      {{ length }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { useNavigationStore } from "~/store/products";
import { storeToRefs } from "pinia";

const props = defineProps({ data: { type: Object } });

// todo: move to utils.js
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

// get the store data
const productsStore = useProductsStore();

// get item category
const navigationStore = useNavigationStore();
const { category } = storeToRefs(navigationStore);

const handleSelect = (selected, type) => {
  productsStore[`${category.value}_${type}`] = selected.target.value;
};

let getItems = {};

// define empty variables outside of functio scope
let sizes = ref([]);
let lengths = ref([]);

// update store on click
const selectItem = (event) => {
  const getId = event.currentTarget.getAttribute("data-id");
  productsStore[`${category.value}_id`] = parseFloat(getId) as number;
};

/*
 * handle API data
 */
if (!isEmpty(props.data)) {
  // get initial data of the chosen category
  const getFilteredItems = (data, dataCategory) => {
    return data.filter((item) => item.category === dataCategory);
  };

  getItems = getFilteredItems(props.data, category.value);

  const getSelectFilters = () => {
    const getItem = props.data.filter(
      (itm) => itm._id === productsStore[`${category.value}_id`]
    )[0];

    if (getItem) {
      sizes = getItem.availableSizes;
      lengths = getItem.availableLength;
    }
  };

  watch(category, (newCategory) => {
    getItems = getFilteredItems(props.data, newCategory);
    getSelectFilters();
  });

  watch(productsStore, () => {
    getSelectFilters();
  });
}
</script>

<style>
.active {
  border: 1px solid black;
}
</style>
