<template>
  <article class="prose">
    <h2>Choose {{ piece }}</h2>
  </article>

  <div class="columns-2">
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
  <div>Selected: {{ itemState }}</div>

  <select>
    <option>Select size</option>
    <option v-for="(size, index) in sizes" :key="`${size}_${index}`">
      {{ size }}
    </option>
  </select>

  <select>
    <option>Select length</option>
    <option v-for="(length, index) in lengths" :key="`${length}_${index}`">
      {{ length }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object }, piece: { type: String } });

// get only data of the chosen piece type
const dataPiece = props.data.filter((item) => item.type === props.piece);

const itemState = useState(props.piece, () => 0);
let sizes = ref([]);
let lengths = ref([]);

const selectItem = (event) => {
  const getId = event.currentTarget.getAttribute("data-id");
  itemState.value = parseFloat(getId) as number;

  // toggle active class
  event.currentTarget.parentNode
    .querySelectorAll(".item")
    .forEach((el) => el.classList.remove("active"));
  event.currentTarget.classList.add("active");

  // const sizes = props.data[itemState.value].availableSizes;
  const getItem = props.data.filter((itm) => itm._id === itemState.value)[0];
  sizes = getItem.availableSizes;
  lengths = getItem.availableLength;
};

// get available sizes of selected item
if (itemState.value) {
}
</script>

<style>
.active {
  border: 1px solid black;
}
</style>
