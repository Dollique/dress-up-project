import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    products: {},
    body_types: {},
    categories: {},
  }),
  actions: {},
});
