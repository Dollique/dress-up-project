<template>
  <slot v-if="$slots.cardNav" name="cardNav" />
  <strong v-if="$slots.cardTitle"><slot name="cardTitle" /></strong>

  <div class="itemCard">
    <slot name="cardContent" />
  </div>
</template>
