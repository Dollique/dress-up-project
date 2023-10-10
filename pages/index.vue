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

const { data: dressup, error } = await useFetch(
  config.public.API_PATH + "products/" + config.public.API_PARAMS,
  {
    method: "GET",
    headers: headers,
  }
);

const { data: bodyType, errorBodyType } = await useFetch(
  config.public.API_PATH + "body-types/" + config.public.API_PARAMS,
  {
    method: "GET",
    headers: headers,
  }
);

if (error.value) {
  console.error("error while useFetch", error.value);
}

// put the data into the pinia state management
const dataStore = useDataStore();
dataStore.products = dressup;
dataStore.body_types = bodyType;
</script>
