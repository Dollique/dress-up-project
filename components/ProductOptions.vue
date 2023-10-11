<template>
  <div class="">
    <label class="mr-2" :for="`option_${optionName}`">{{ optionName }}</label>
    <select
      v-if="optionElement && optionElement.length !== 0"
      @change="handleSelect($event, optionNameSingular)"
      :id="`option_${optionName}`"
    >
      <option>Select {{ optionName }}</option>
      <option
        v-for="(optionValue, index) in optionElement"
        :key="`${optionValue}_${index}`"
        :ref="(el) => optionElementRef.push(el)"
      >
        {{ optionValue }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

const props = defineProps({
  optionName: { type: String as PropType<string> },
});

const productsStore = useProductsStore();
const category = useCategory();
const activeProduct = ref(useActiveProduct());
const optionNameSingular = strToSingular(props.optionName);

// optionElementRef solves an issue with reactivity in v-for loops
// https://stackoverflow.com/questions/71414977/refs-inside-v-for-loop-for-vue-v3-2-25-or-above
let optionElementRef = ref([]);
let optionElement = ref([]);

/** METHODS **/

// get options
const getOptions = (activeItem, option: string) => {
  if (!isEmpty(activeItem)) {
    return activeItem[option].split(",");
  }
};

// handle option select
const handleSelect = (selected, name: string) => {
  // update product store
  productsStore[`${category.value}_${name}`] = selected.target.value;
};

/** WATCHERS **/

watch(category, () => {
  optionElement.value = getOptions(activeProduct.value, props.optionName);
});

watch(productsStore, () => {
  optionElement.value = getOptions(activeProduct.value, props.optionName);
});
</script>
