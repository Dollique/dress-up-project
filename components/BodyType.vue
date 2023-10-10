<template>
  <div class="flex flex-wrap gap-4">
    <figure
      class="product"
      @click="selectSize"
      v-for="bodyType in bodyTypes"
      :key="bodyType.id"
    >
      <img :src="bodyType.attributes.image.data.attributes.url" />
      <figcaption>{{ bodyType.attributes.name }}</figcaption>
    </figure>
  </div>
</template>

<script setup>
import { useProductsStore } from "~/store/products";
const productsStore = useProductsStore(); // get the store data

const props = defineProps({ bodyTypeData: { type: Object } });

const selectSize = (event) => {
  // set state
  const getText = event.currentTarget.querySelector("figcaption").innerHTML;
  productsStore.body_size = getText;

  // toggle active class
  event.currentTarget.parentNode
    .querySelectorAll("figure")
    .forEach((el) => el.classList.remove("active"));
  event.currentTarget.classList.add("active");
};

const bodyTypes = props.bodyTypeData ? props.bodyTypeData.data : {};
</script>

<style>
.active {
  border-color: black;
}
</style>
