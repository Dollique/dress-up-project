<template>
  <a
    :class="`tab tab-itemCart ${category === tabNav ? 'tab-active' : ''}`"
    :data-tabs-category="tabNav"
    @click="handleTabClick"
    >{{ title }}</a
  >
</template>

<script setup lang="ts">
const category = ref(useCategory());

const props = defineProps({
  tabNav: { type: String as PropType<string> },
  title: { type: String as PropType<string> },
});

const handleTabClick = (event) => {
  category.value = event.currentTarget.dataset.tabsCategory;
};
</script>
