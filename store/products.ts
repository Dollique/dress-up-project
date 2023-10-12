import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    body_type_id: "",
    tops: {
      id: "",
      size: "",
      length: "",
      color: "",
    },
    bottoms: {
      id: "",
      size: "",
      length: "",
      color: "",
    },
  }),
  actions: {},
});
