<template>
  <div class="">
    <label class="mr-2" :for="`option_${optionName}`">{{ optionName }}</label>
    <select
      v-if="options && options.length !== 0"
      @change="handleSelect($event, optionNameSingular)"
      :id="`option_${optionName}`"
    >
      <option>Select {{ optionName }}</option>
      <option
        v-for="(optionValue, index) in options"
        :key="`${optionValue}_${index}`"
        :ref="(el) => optionsRef.push(el)"
      >
        {{ optionValue }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  optionName: { type: String as PropType<string> },
});

const productsStore = useProducts();
const category = useCategory();
const activeProduct = ref(useActiveProduct());
const optionNameSingular = strToSingular(props.optionName);

// optionsRef solves an issue with reactivity in v-for loops
// https://stackoverflow.com/questions/71414977/refs-inside-v-for-loop-for-vue-v3-2-25-or-above
let optionsRef = ref([]);
let options = ref([]);

/** EVENT HANDLER **/

// handle option select
const handleSelect = (selected, name: string) => {
  productsStore[category.value][name] = selected.target.value;
};

/** WATCHERS **/

watch(category, () => {
  options.value = splitProductOption(activeProduct.value, props.optionName);
});

watch(productsStore, () => {
  options.value = splitProductOption(activeProduct.value, props.optionName);
});
</script>
