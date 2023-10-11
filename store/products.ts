import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    body_type_id: "",
    tops_id: "",
    tops_size: "",
    tops_length: "",
    bottoms_id: "",
    bottoms_size: "",
    bottoms_length: "",
  }),
  actions: {},
});
