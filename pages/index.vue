<template>
  <DressupWrapper :data="dressup" />
</template>

<script setup lang="ts">
const { data: dressup } = await useFetch(
  "http://localhost:3000/dressup_data.json"
);
</script>
