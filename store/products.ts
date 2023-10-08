import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    body_size: "please choose size",
    tops_id: "",
    tops_size: "",
    tops_length: "",
    bottoms_id: "",
    bottoms_size: "",
    bottoms_length: "",
  }),
  actions: {},
});

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    category: "tops",
  }),
  actions: {},
});
