<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
