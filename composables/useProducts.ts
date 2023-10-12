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
  const { tops_id, bottoms_id } = storeToRefs(productsStore);
  const category = useCategory();

  const activeProductId = computed(() =>
    category.value === "tops" ? tops_id.value : bottoms_id.value
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
    getActiveProduct(productsOfCurrentView.value, activeProductId.value)
  );
};
