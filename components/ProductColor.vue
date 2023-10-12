<template>
  <div
    class="w-[41px] h-[41px] rounded-[30px] cursor-pointer"
    :style="`background-color: ${hex};`"
    :data-color-id="id"
    :title="name"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: { type: Object },
});

const color = props.color.attributes;
const id = props.color.id;
const hex = color.hexcode;
const name = color.name;
</script>
