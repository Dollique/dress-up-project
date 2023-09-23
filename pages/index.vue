<template>
  <DressupWrapper :data="dressup" />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { data: dressup } = await useFetch(config.public.API_PATH, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});
</script>
