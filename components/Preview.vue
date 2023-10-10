<template>
  <article class="relative w-full h-full">
    <img
      v-if="bodyType && productsStore.body_type"
      class="absolute z-0 top-0 left-0 w-full h-full object-contain"
      :src="
        bodyType && productsStore.body_type
          ? getDressUpItem(bodyType, productsStore.body_type).attributes.image
              .data.attributes.url
          : ''
      "
    />
    <div
      v-if="products && productsStore.tops_id"
      class="relative top-[150px] z-10 flex justify-center"
    >
      <img
        class=""
        :src="
          getDressUpItem(products, productsStore.tops_id).attributes.image.data
            .attributes.url
        "
      />
    </div>

    <div
      v-if="products && productsStore.bottoms_id"
      class="relative top-[150px] z-10 flex justify-center"
    >
      <img
        class=""
        :src="
          getDressUpItem(products, productsStore.bottoms_id).attributes.image
            .data.attributes.url
        "
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/products";

const props = defineProps({
  data: { type: Object },
  bodyTypeData: { type: Object },
});

// get the store data
const productsStore = useProductsStore();

const getDressUpItem = (items, id) => {
  return items.find((item) => item.id === id);
};

const products = props.data ? props.data.data : {};
const bodyType = props.bodyTypeData ? props.bodyTypeData.data : {};
</script>
