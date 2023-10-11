<template>
  <img
    v-if="activeItem && previewType === 'bodyType'"
    :class="previewClass"
    :src="activeItem ? activeItem.image.data.attributes.url : ''"
  />

  <!-- use a wrapper for top/bottom -->
  <div
    v-else-if="activeItem && previewType !== 'bodyType'"
    :class="previewClass"
  >
    <img :src="activeItem ? activeItem.image.data.attributes.url : ''" />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data";
import { useProductsStore } from "~/store/products";

const props = defineProps({
  previewType: { type: String as PropType<string> },
});

const dataStore = useDataStore();
const productsStore = useProductsStore();

const data = dataStore.products;
const bodyTypeData = dataStore.body_types;

const products = data ? data.data : {};
const bodyType = bodyTypeData ? bodyTypeData.data : {};

let previewClass, activeItem;
switch (props.previewType) {
  case "bodyType":
    previewClass = "absolute z-0 top-0 left-0 w-full h-full object-contain";
    activeItem = computed(() =>
      getActiveProduct(bodyType, productsStore.body_type_id)
    );
    break;

  case "top":
    previewClass = "relative top-[150px] z-10 flex justify-center";
    activeItem = computed(() =>
      getActiveProduct(products, productsStore.tops_id)
    );
    break;

  case "bottom":
    previewClass = "relative top-[150px] z-10 flex justify-center";
    activeItem = computed(() =>
      getActiveProduct(products, productsStore.bottoms_id)
    );
    break;
}
</script>
