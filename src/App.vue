<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import { useCartStore } from "./components/cart.js";
import { onMounted } from "vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <div class="page-container">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
