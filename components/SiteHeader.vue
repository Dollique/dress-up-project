<template>
  <header
    class="sticky top-0 z-20 flex justify-between border-b-1 border-solid border-black bg-white shadow-md pt-1 pb-1 pr-2 pl-2"
  >
    <h1 class="">Wiinona.com</h1>

    <menu
      ><CartOutlineIcon
        v-if="productsStore.tops_id === '' && productsStore.bottoms_id === ''"
      />
      <CartIcon v-else @click="handleCartClick" class="cursor-pointer" />
      <Cart v-if="cartOpen" />
    </menu>
  </header>
</template>

<script setup>
import CartIcon from "vue-material-design-icons/Cart.vue";
import CartOutlineIcon from "vue-material-design-icons/CartOutline.vue";

// get the store data
const productsStore = useProducts();
const cartOpen = ref(false);

/** EVENT HANDLER **/

const handleCartClick = (event) => {
  cartOpen.value ? (cartOpen.value = false) : (cartOpen.value = true);
};
</script>
