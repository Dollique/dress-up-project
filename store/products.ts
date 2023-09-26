import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    body_size: "please choose size",
    top_id: "",
    top_size: "",
    top_length: "",
    bottom_id: "",
    bottom_size: "",
    bottom_length: "",
  }),
  actions: {},
});
