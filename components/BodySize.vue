<template>
  <section class="itemCard">
    <article class="prose">
      <h2>Choose Body</h2>
    </article>

    <div class="flex flex-wrap gap-4">
      <figure class="product" @click="selectSize">
        <img src="https://placehold.co/150x150" />
        <figcaption>Smol Potet</figcaption>
      </figure>

      <figure class="product" @click="selectSize">
        <img src="https://placehold.co/150x150" />
        <figcaption>Potet</figcaption>
      </figure>

      <figure class="product" @click="selectSize">
        <img src="https://placehold.co/150x150" />
        <figcaption>More Potet</figcaption>
      </figure>

      <figure class="product" @click="selectSize">
        <img src="https://placehold.co/150x150" />
        <figcaption>Chubby Potet</figcaption>
      </figure>
    </div>
    <div>Selected: {{ productsStore.body_size }}</div>
  </section>
</template>

<script setup>
import { useProductsStore } from "~/store/products";
const productsStore = useProductsStore(); // get the store data

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
</script>

<style>
.active {
  border-color: black;
}
</style>
