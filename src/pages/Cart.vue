<script setup>
import { ref, computed } from "vue";
import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  ArrowLeft,
  Truck,
  Shield,
  Recycle,
  Heart,
  Star,
} from "lucide-vue-next";
import { useCartStore } from "../components/Cart.js";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();

const promoCode = ref("");
const discount = ref(0);
const isValidPromo = ref(false);

const updateQuantity = (itemId, newQuantity) => {
  cartStore.updateQuantity(itemId, newQuantity);
};

const removeItem = (itemId) => {
  cartStore.removeFromCart(itemId);
};

const goBackToShop = () => {
  router.push("/shop");
};

const applyPromoCode = () => {
  const validCodes = {
    ECO10: 0.1,
    GREEN15: 0.15,
    PLANET20: 0.2,
  };

  if (validCodes[promoCode.value.toUpperCase()]) {
    discount.value = validCodes[promoCode.value.toUpperCase()];
    isValidPromo.value = true;
  } else {
    discount.value = 0;
    isValidPromo.value = false;
  }
};

const subtotal = computed(() => cartStore.subtotal);

const discountAmount = computed(() => {
  return subtotal.value * discount.value;
});

const shipping = computed(() => {
  const baseShipping = subtotal.value > 50 ? 0 : 5.99;
  return baseShipping;
});

const total = computed(() => {
  return subtotal.value - discountAmount.value + shipping.value;
});

const totalItems = computed(() => cartStore.itemCount);

const totalSavings = computed(() => {
  return (
    cartStore.items.reduce((total, item) => {
      if (item.product.originalPrice) {
        return (
          total +
          (item.product.originalPrice - item.product.price) * item.quantity
        );
      }
      return total;
    }, 0) + discountAmount.value
  );
});
</script>

<template>
  <div class="cart-container">
    <section class="cart-header">
      <div class="header-content">
        <div class="header-top">
          <button @click="goBackToShop" class="back-btn">
            <ArrowLeft size="20" />
            Continue Shopping
          </button>
          <div class="cart-title-section">
            <ShoppingCart size="32" class="cart-icon" />
            <h1 class="cart-title">Your Cart</h1>
          </div>
        </div>
        <p class="cart-subtitle">
          {{ totalItems }} item{{ totalItems !== 1 ? "s" : "" }} in your
          sustainable shopping cart
        </p>
      </div>
    </section>

    <div class="cart-content">
      <div v-if="cartStore.items.length === 0" class="empty-cart-state">
        <div class="empty-cart-content">
          <ShoppingCart size="80" class="empty-icon" />
          <h2 class="empty-title">Your cart is empty</h2>
          <p class="empty-description">
            Start shopping for sustainable products to help save the planet!
          </p>
          <button @click="goBackToShop" class="shop-now-btn">
            <Recycle size="20" />
            Start Shopping
          </button>
        </div>
      </div>

      <div v-else class="cart-layout">
        <div class="cart-items-section">
          <div class="cart-items-header">
            <h2 class="items-title">Cart Items</h2>
            <div class="savings-badge" v-if="totalSavings > 0">
              <Heart size="16" />
              You're saving ${{ totalSavings.toFixed(2) }}!
            </div>
          </div>

          <div class="cart-items-list">
            <div
              v-for="item in cartStore.items"
              :key="item.product.id"
              class="cart-item"
            >
              <div class="item-image-container">
                <img
                  :src="item.product.image"
                  :alt="item.product.name"
                  class="item-image"
                />
                <div class="item-category">{{ item.product.category }}</div>
              </div>

              <div class="item-details">
                <div class="item-main-info">
                  <h3 class="item-name">{{ item.product.name }}</h3>
                  <p class="item-description">{{ item.product.description }}</p>

                  <div class="item-rating" v-if="item.product.rating">
                    <template v-for="n in 5" :key="n">
                      <Star
                        class="star"
                        :class="{ filled: n <= item.product.rating }"
                        size="14"
                      />
                    </template>
                    <span class="rating-text"
                      >{{ item.product.rating }} ({{
                        item.product.reviews || 0
                      }}
                      reviews)</span
                    >
                  </div>
                </div>

                <div class="item-actions">
                  <div class="quantity-controls">
                    <button
                      @click="
                        updateQuantity(item.product.id, item.quantity - 1)
                      "
                      class="qty-btn"
                      :disabled="item.quantity <= 1"
                    >
                      <Minus size="16" />
                    </button>
                    <span class="quantity">{{ item.quantity }}</span>
                    <button
                      @click="
                        updateQuantity(item.product.id, item.quantity + 1)
                      "
                      class="qty-btn"
                    >
                      <Plus size="16" />
                    </button>
                  </div>

                  <div class="item-pricing">
                    <div class="current-price">
                      ${{ (item.product.price * item.quantity).toFixed(2) }}
                    </div>
                    <div
                      v-if="item.product.originalPrice"
                      class="original-price"
                    >
                      ${{
                        (item.product.originalPrice * item.quantity).toFixed(2)
                      }}
                    </div>
                    <div class="unit-price">
                      (${{ item.product.price }} each)
                    </div>
                  </div>

                  <button
                    @click="removeItem(item.product.id)"
                    class="remove-btn"
                  >
                    <X size="18" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-summary">
          <div class="summary-card">
            <h3 class="summary-title">Order Summary</h3>

            <div class="promo-section">
              <label class="promo-label">Promo Code</label>
              <div class="promo-input-group">
                <input
                  v-model="promoCode"
                  type="text"
                  placeholder="Enter code..."
                  class="promo-input"
                  :class="{ valid: isValidPromo && discount > 0 }"
                />
                <button @click="applyPromoCode" class="apply-btn">Apply</button>
              </div>
              <div v-if="isValidPromo && discount > 0" class="promo-success">
                ✓ {{ (discount * 100).toFixed(0) }}% discount applied!
              </div>
              <div class="promo-hint">Try: ECO10, GREEN15, or PLANET20</div>
            </div>

            <div class="pricing-breakdown">
              <div class="price-row">
                <span class="price-label"
                  >Subtotal ({{ totalItems }} items)</span
                >
                <span class="price-value">${{ subtotal.toFixed(2) }}</span>
              </div>

              <div v-if="discount > 0" class="price-row discount-row">
                <span class="price-label"
                  >Discount ({{ (discount * 100).toFixed(0) }}%)</span
                >
                <span class="price-value discount"
                  >-${{ discountAmount.toFixed(2) }}</span
                >
              </div>

              <div class="price-row">
                <span class="price-label">
                  Shipping
                  <span v-if="shipping === 0" class="free-shipping">FREE!</span>
                </span>
                <span class="price-value">
                  {{ shipping === 0 ? "FREE" : "$" + shipping.toFixed(2) }}
                </span>
              </div>

              <div class="price-row total-row">
                <span class="price-label">Total</span>
                <span class="price-value total">${{ total.toFixed(2) }}</span>
              </div>

              <div v-if="totalSavings > 0" class="total-savings">
                🌱 You saved ${{ totalSavings.toFixed(2) }} today!
              </div>
            </div>

            <button class="checkout-btn">
              <Shield size="20" />
              Secure Checkout
            </button>

            <div class="trust-badges">
              <div class="trust-item">
                <Truck size="20" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div class="trust-item">
                <Recycle size="20" />
                <span>Carbon neutral delivery</span>
              </div>
              <div class="trust-item">
                <Shield size="20" />
                <span>30-day return guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
  min-height: 100vh;
}

.cart-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 2px solid #e5e7eb;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 2rem;
}

.back-btn:hover {
  border-color: #16a34a;
  color: #16a34a;
  transform: translateX(-2px);
}

.cart-title-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cart-icon {
  color: #16a34a;
}

.cart-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #16a34a, #0d9488);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.cart-subtitle {
  color: #6b7280;
  font-size: 1.125rem;
  text-align: center;
}

.cart-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.empty-cart-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-cart-content {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.empty-icon {
  color: #9ca3af;
  margin-bottom: 2rem;
}

.empty-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.empty-description {
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.shop-now-btn {
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.shop-now-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(22, 163, 74, 0.3);
}

.cart-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
}

.cart-items-section {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: relative;
}

.cart-items-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.items-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.savings-badge {
  background: linear-gradient(to right, #fef3c7, #fde68a);
  color: #92400e;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid #fbbf24;
}

.cart-items-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.cart-item:hover {
  border-color: #16a34a;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.1);
}

.item-image-container {
  position: relative;
  flex-shrink: 0;
}

.item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.75rem;
}

.item-category {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: #16a34a;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.item-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.item-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.star {
  color: #d1d5db;
  transition: color 0.2s ease;
}

.star.filled {
  color: #fbbf24;
}

.rating-text {
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.5rem;
}

.item-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
}

.qty-btn {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #6b7280;
}

.qty-btn:hover:not(:disabled) {
  background: #f3f4f6;
  color: #16a34a;
}

.qty-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity {
  font-weight: 600;
  color: #111827;
  min-width: 40px;
  text-align: center;
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-pricing {
  text-align: right;
}

.current-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #16a34a;
}

.original-price {
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.unit-price {
  font-size: 0.75rem;
  color: #6b7280;
}

.remove-btn {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 1rem;
}

.remove-btn:hover {
  background: #fee2e2;
  transform: scale(1.05);
}

.order-summary {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.summary-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  position: relative;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.promo-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.promo-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.promo-input-group {
  display: flex;
  gap: 0.5rem;
}

.promo-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;
}

.promo-input:focus {
  outline: none;
  border-color: #16a34a;
}

.promo-input.valid {
  border-color: #16a34a;
  background: #f0fdf4;
}

.apply-btn {
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.apply-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
}

.promo-success {
  color: #16a34a;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.promo-hint {
  color: #9ca3af;
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

.pricing-breakdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-label {
  color: #6b7280;
  font-weight: 500;
}

.price-value {
  font-weight: 600;
  color: #111827;
}

.discount-row .price-value {
  color: #16a34a;
}

.free-shipping {
  color: #16a34a;
  font-weight: 600;
  font-size: 0.75rem;
}

.total-row {
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 1.125rem;
}

.total-row .price-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #16a34a;
}

.total-savings {
  background: linear-gradient(to right, #dcfce7, #bbf7d0);
  color: #166534;
  padding: 0.75rem;
  border-radius: 0.75rem;
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
}

.checkout-btn {
  width: 100%;
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  border: none;
  padding: 1.25rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(22, 163, 74, 0.3);
}

.trust-badges {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.trust-item svg {
  color: #16a34a;
  flex-shrink: 0;
}

.cart-item.loading {
  opacity: 0.7;
  pointer-events: none;
}

.checkout-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
}

.checkout-btn:disabled:hover {
  transform: none;
  box-shadow: none;
}

.cart-item {
  animation: slideInUp 0.3s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.suggested-item {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.cart-items-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #16a34a, #0d9488, #059669);
  border-radius: 1.5rem 1.5rem 0 0;
}

.summary-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #16a34a, #0d9488, #059669);
  border-radius: 1.5rem 1.5rem 0 0;
}

@media (max-width: 1024px) {
  .cart-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .order-summary {
    position: static;
    order: -1;
  }
}

@media (max-width: 768px) {
  .header-top {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .cart-title {
    font-size: 2rem;
  }

  .cart-item {
    flex-direction: column;
    text-align: center;
  }

  .item-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .item-pricing {
    text-align: center;
  }

  .cart-items-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .promo-input-group {
    flex-direction: column;
  }

  .apply-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .cart-header {
    padding: 1rem;
  }

  .cart-content {
    padding: 0 1rem 2rem;
  }

  .cart-items-section,
  .summary-card,
  .suggested-section {
    padding: 1.5rem;
  }

  .cart-title {
    font-size: 1.75rem;
  }

  .item-image {
    width: 80px;
    height: 80px;
  }

  .trust-badges {
    gap: 0.5rem;
  }

  .trust-item {
    font-size: 0.75rem;
  }
}
</style>
