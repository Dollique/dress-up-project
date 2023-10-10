<template>
  <a
    :class="`tab tab-itemCart ${
      navigationStore.category === tabNav ? 'tab-active' : ''
    }`"
    :data-tabs-category="tabNav"
    @click="handleTabClick"
    >{{ title }}</a
  >
</template>

<script setup lang="ts">
import { useNavigationStore } from "~/store/navigation";
const navigationStore = useNavigationStore();

const props = defineProps({
  tabNav: { type: String as PropType<string> },
  title: { type: String as PropType<string> },
});

const handleTabClick = (event) => {
  navigationStore.category = event.currentTarget.dataset.tabsCategory;
};
</script>
