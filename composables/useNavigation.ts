import { useNavigationStore } from "~/store/navigation";
import { storeToRefs } from "pinia";

/**
 *
 * @returns current category
 * @type ref() / string
 */
export const useCategory = () => {
  // get item category
  const navigationStore = useNavigationStore();
  const { category } = storeToRefs(navigationStore);

  return category;
};
