<template>
  <DressupWrapper />
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data";

const config = useRuntimeConfig();

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${config.public.API_TOKEN}`,
};

const fetchData = async (source: string) => {
  const { data: myData, error } = await useFetch(
    config.public.API_PATH + source + "/" + config.public.API_PARAMS,
    {
      method: "GET",
      headers: headers,
    }
  );

  if (error.value) {
    console.error("error while fetching data", error.value);
  }

  return myData;
};

const dressup = await fetchData("products");
const bodyTypes = await fetchData("body-types");
const categories = await fetchData("categories");
const colors = await fetchData("colors");

// put the data into the pinia state management
const dataStore = useDataStore();
dataStore.products = dressup;
dataStore.body_types = bodyTypes;
dataStore.categories = categories;
dataStore.colors = colors;
</script>
