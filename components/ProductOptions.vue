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

const optionNameSingular = strToSingular(props.optionName);

// define variables and references
// optionElementRef solves an issue with reactivity in v-for loops
// https://stackoverflow.com/questions/71414977/refs-inside-v-for-loop-for-vue-v3-2-25-or-above
let optionElementRef = ref([]);
let optionElement = ref([]);

// get options
const getOptions = (optionsArray) => {
  const product = getActiveProduct(
    optionsArray,
    productsStore[`${category.value}_id`]
  );

  if (!isEmpty(product)) {
    return product[props.optionName].split(",");
  }
};

// handle option select
const handleSelect = (selected, name) => {
  productsStore[`${category.value}_${name}`] = selected.target.value;
};

if (dataStore.products) {
  const data = dataStore.products.data;

  watch(category, () => {
    optionElement.value = getOptions(data);
  });

  watch(productsStore, () => {
    optionElement.value = getOptions(data);
  });
}
</script>
