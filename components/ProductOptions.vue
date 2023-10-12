<template>
  <section v-if="optionName === 'colors' && colors" class="mt-4 flex gap-2">
    <ProductColor
      v-for="color in colors"
      :key="color.id"
      :ref="(el) => colorsRef.push(el)"
      :color="color"
      @click="handleSelect($event, 'color')"
    />
  </section>
  <div v-else class="">
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
let colorsRef = ref([]);
let colors = ref([]);

/** EVENT HANDLER **/

// handle option select
const handleSelect = (selected, name: string) => {
  let targetValue;
  if (name === "color") {
    targetValue = parseFloat(selected.currentTarget.dataset.colorId);
  } else {
    targetValue = selected.target.value;
  }
  productsStore[category.value][name] = targetValue;
};

/** WATCHERS **/

watch(category, () => {
  if (props.optionName === "colors") {
    colors.value = useActiveColors();
  } else {
    options.value = splitProductOption(activeProduct.value, props.optionName);
  }
});

watch(productsStore, () => {
  if (props.optionName === "colors") {
    colors.value = useActiveColors();
  } else {
    options.value = splitProductOption(activeProduct.value, props.optionName);
  }
});
</script>
