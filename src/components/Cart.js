import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    isCartOpen: false,
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    subtotal: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },

    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    cartTotal: (state) => {
      const subtotal = state.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);

      const shipping = subtotal > 50 ? 0 : 5.99;
      return subtotal + shipping;
    },
  },

  actions: {
    loadCart() {
      try {
        const savedCart = localStorage.getItem("cart-items");
        if (savedCart) {
          this.items = JSON.parse(savedCart);
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        this.items = [];
      }
    },

    saveCart() {
      try {
        localStorage.setItem("cart-items", JSON.stringify(this.items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    },

    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          product: { ...product },
          quantity,
        });
      }

      this.saveCart();
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.product.id !== productId);
      this.saveCart();
    },

    updateQuantity(productId, newQuantity) {
      if (newQuantity <= 0) {
        this.removeFromCart(productId);
        return;
      }

      const item = this.items.find((item) => item.product.id === productId);
      if (item) {
        item.quantity = newQuantity;
        this.saveCart();
      }
    },

    clearCart() {
      this.items = [];
      this.saveCart();
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },

    openCart() {
      this.isCartOpen = true;
    },

    closeCart() {
      this.isCartOpen = false;
    },
  },
});
