<template>
  <h2>Step 1 - Choose Body</h2>
  <div class="columns-2">
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
  <div>Selected: {{ bodySize }}</div>
</template>

<script setup>
const bodySize = useState("bodySize", () => "please choose size");

const selectSize = (event) => {
  const getText = event.currentTarget.querySelector("figcaption").innerHTML;
  bodySize.value = getText;
};
</script>
