<template>
  <section class="mt-4 flex gap-2">
    <div class="bg-black w-[41px] h-[41px] rounded-[30px] cursor-pointer"></div>
    <div
      class="bg-pink-300 w-[41px] h-[41px] rounded-[30px] cursor-pointer"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data";
import { useProductsStore } from "~/store/products";
import { useNavigationStore } from "~/store/navigation";
import { storeToRefs } from "pinia";

const props = defineProps({
  optionName: { type: String as PropType<string> },
});

const dataStore = useDataStore();
const productsStore = useProductsStore();
const navigationStore = useNavigationStore();

const { category } = storeToRefs(navigationStore);
</script>
