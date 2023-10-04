<template>
  <DressupWrapper :data="dressup" />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { data: dressup, error } = await useFetch(config.public.API_PATH, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

if (error.value) {
  console.error("error while useFetch", error.value);
}
</script>
