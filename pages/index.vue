<template>
  <DressupWrapper :data="dressup" />
</template>

<script setup lang="ts">
let dataSrc = "http://localhost:3000/dressup_data.json"; // dev
if (process.env.NODE_ENV !== "development") {
  dataSrc = "https://dressup.kawaii.ch/dressup_data.json"; // production
}

const { data: dressup } = await useFetch(dataSrc, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});
</script>
