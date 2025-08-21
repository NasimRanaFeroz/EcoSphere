<script setup>
import { ShoppingCart, Star } from "lucide-vue-next";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="product-card">
    <div class="card-image-container">
      <img :src="product.image" :alt="product.name" class="product-image" />

      <div class="eco-icon">
        <component :is="product.ecoIcon" style="width: 20px; height: 20px" />
      </div>

      <div class="card-badge">
        <component :is="product.badgeIcon" style="width: 12px; height: 12px" />
        {{ product.badgeText }}
      </div>
    </div>

    <div class="card-content">
      <div class="product-rating">
        <template v-for="n in 5" :key="n">
          <Star
            class="star"
            style="fill: currentColor"
            v-if="n <= product.rating"
          />
          <Star class="star" v-else />
        </template>
        <span class="rating-text">({{ product.reviews }} reviews)</span>
      </div>

      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>

      <div class="card-bottom">
        <div class="product-price">
          ${{ product.price }}
          <span v-if="product.originalPrice" class="original-price">
            ${{ product.originalPrice }}
          </span>
        </div>
        <a href="/shop" class="shop-now-btn">
          Shop Now
          <ShoppingCart style="width: 16px; height: 16px" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(22, 163, 74, 0.15);
  border-color: #22c55e;
}

.card-image-container {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.eco-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16a34a;
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.product-description {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #16a34a, #0d9488);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.original-price {
  font-size: 1rem;
  color: #9ca3af;
  text-decoration: line-through;
  margin-left: 0.5rem;
}

.shop-now-btn {
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.shop-now-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(22, 163, 74, 0.3);
}

.shop-now-btn:active {
  transform: scale(0.98);
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.star {
  width: 16px;
  height: 16px;
  color: #fbbf24;
}

.rating-text {
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.25rem;
}

.card-loading {
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: loading 2s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 768px) {
  .card-image-container {
    height: 200px;
  }

  .card-content {
    padding: 1.25rem;
  }

  .card-bottom {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .shop-now-btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .card-image-container {
    height: 180px;
  }

  .product-name {
    font-size: 1.125rem;
  }

  .product-price {
    font-size: 1.25rem;
  }
}

.product-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent, rgba(22, 163, 74, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.product-card:hover::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-image-container {
  position: relative;
  z-index: 2;
}
</style>
