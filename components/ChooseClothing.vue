<template>
  <article class="prose">
    <h2>Choose {{ piece }}</h2>
  </article>

  <div class="flex flex-wrap gap-4">
    <div
      v-for="item in dataPiece"
      :key="item._id"
      :data-id="item._id"
      class="item"
      @click="selectItem"
    >
      <img :src="`/images/clothing/${item.image}`" />
      <div class="">{{ item.name }}</div>
    </div>
  </div>
  <div>Selected: {{ productsStore[`${props.piece}_id`] }}</div>

  <select>
    <option>Select size</option>
    <option v-for="(size, index) in sizes" :key="`${size}_${index}`">
      {{ size }}
    </option>
  </select>

  <select class="mt-1">
    <option>Select length</option>
    <option v-for="(length, index) in lengths" :key="`${length}_${index}`">
      {{ length }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

const props = defineProps({ data: { type: Object }, piece: { type: String } });

// get only data of the chosen piece type
const dataPiece = props.data.filter((item) => item.type === props.piece);

// get the store data
const productsStore = useProductsStore();

// define empty variables outside of functio scope
let sizes = ref([]);
let lengths = ref([]);

const selectItem = (event) => {
  const getId = event.currentTarget.getAttribute("data-id");
  productsStore[`${props.piece}_id`] = parseFloat(getId) as number;

  // toggle active class
  event.currentTarget.parentNode
    .querySelectorAll(".item")
    .forEach((el) => el.classList.remove("active"));
  event.currentTarget.classList.add("active");

  // const sizes = props.data[itemState.value].availableSizes;
  const getItem = props.data.filter(
    (itm) => itm._id === productsStore[`${props.piece}_id`]
  )[0];
  sizes = getItem.availableSizes;
  lengths = getItem.availableLength;
};
</script>

<style>
.active {
  border: 1px solid black;
}
</style>
