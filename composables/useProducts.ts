import { useDataStore } from "~/store/data";
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

/**
 *
 * @returns products story
 * @type object
 */
export const useProducts = () => {
  return useProductsStore();
};

/**
 *
 * @returns products of the current view (category)
 * @type ref() / object
 *
 * use it like this to keep reactivity:
 * const currentProducts = ref(useProductsView)
 */
export const useProductsView = () => {
  // get the product state management
  const dataStore = useDataStore();
  const data = dataStore.products;

  let getItems = {};

  // get data of the chosen category
  const getFilteredItems = (productData, dataCategory) => {
    return productData.filter(
      (item) => item.attributes.category.data.attributes.name === dataCategory
    );
  };

  if (!isEmpty(data)) {
    const products = data.data; // strapi data structure
    const category = useCategory();

    getItems = computed(() => getFilteredItems(products, category.value));

    watch(category, (newCategory) => {
      getItems = computed(() => getFilteredItems(products, newCategory));
    });

    return getItems;
  }

  return {};
};

/**
 *
 * @returns ID of the product that is active in the current view
 * @type ref() / string
 */
export const useActiveProductId = () => {
  const productsStore = useProductsStore();
  const { tops, bottoms } = storeToRefs(productsStore);
  const category = useCategory();

  const activeProductId = computed(() =>
    category.value === "tops" ? tops.value.id : bottoms.value.id
  );

  return activeProductId;
};

/**
 *
 * @returns active product of the current category
 * @type ref() / object
 */
export const useActiveProduct = () => {
  const productsOfCurrentView = ref(useProductsView());
  const activeProductId = ref(useActiveProductId());

  return computed(() =>
    getActiveData(productsOfCurrentView.value, activeProductId.value)
  );
};

/**
 *
 * @returns all colors of the active Product
 * @type object
 */
export const useActiveColors = () => {
  const activeProduct = ref(useActiveProduct());
  if (activeProduct.value) {
    return activeProduct.value.colors.data;
  }
  return;
};

/**
 *
 * @param colorId
 * @returns color object of colorId
 * @type ref()
 */
export const useColor = (colorId: number) => {
  const dataStore = useDataStore();
  const colorsData = dataStore.colors;
  const colors = colorsData ? colorsData.data : {};

  if (!colorId) return;

  return computed(() => getActiveData(colors, colorId));
};
