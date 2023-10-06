<template>
  <div class="tabs">
    <a
      :class="`tab tab-itemCart ${
        navigationStore.category === 'top' ? 'tab-active' : ''
      }`"
      data-tabs-category="top"
      @click="handleTabClick"
      >Shirts</a
    >
    <a
      :class="`tab tab-itemCart ${
        navigationStore.category === 'bottom' ? 'tab-active' : ''
      }`"
      data-tabs-category="bottom"
      @click="handleTabClick"
      >Skirts</a
    >
    <a
      :class="`tab tab-itemCart ${
        navigationStore.category === 'accessoirs' ? 'tab-active' : ''
      }`"
      data-tabs-category="accessoirs"
      @click="handleTabClick"
      >Accessoirs</a
    >
  </div>
</template>

<script setup>
import { useNavigationStore } from "~/store/products";
const navigationStore = useNavigationStore();

const handleTabClick = (event) => {
  navigationStore.category = event.currentTarget.dataset.tabsCategory;
};
</script>
