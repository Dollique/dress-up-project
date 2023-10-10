<template>
  <div class="tabs">
    <a
      :class="`tab tab-itemCart ${
        navigationStore.category === 'tops' ? 'tab-active' : ''
      }`"
      data-tabs-category="tops"
      @click="handleTabClick"
      >Shirts</a
    >
    <a
      :class="`tab tab-itemCart ${
        navigationStore.category === 'bottoms' ? 'tab-active' : ''
      }`"
      data-tabs-category="bottoms"
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
import { useNavigationStore } from "~/store/navigation";
const navigationStore = useNavigationStore();

const handleTabClick = (event) => {
  navigationStore.category = event.currentTarget.dataset.tabsCategory;
};
</script>
