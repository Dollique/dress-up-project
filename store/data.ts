import { defineStore } from "pinia";

export const useDataStore = defineStore("products", {
  state: () => ({
    products: {},
    body_types: {},
  }),
  actions: {},
});
