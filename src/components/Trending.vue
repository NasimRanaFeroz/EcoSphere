<script setup>
import ProductCard from "../components/ProductCard.vue";
import { topSelling } from "../constants/data.js";
</script>

<template>
  <div class="container">
    <section class="top-selling-section">
      <div class="section-header">
        <h2 class="section-title">Trending Now</h2>
        <p class="section-subtitle">
          Our most loved eco-friendly products that customers can't get enough
          of !
        </p>
      </div>

      <div class="cards-grid">
        <ProductCard
          v-for="(item, index) in topSelling"
          :key="index"
          :product="item"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
}

.top-selling-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #16a34a, #0d9488);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 600px;
  margin: 0 auto;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
