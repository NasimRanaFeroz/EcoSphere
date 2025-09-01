import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isCartOpen: false
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    subtotal: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity)
      }, 0)
    },

    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    cartTotal: (state) => {
      const subtotal = state.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity)
      }, 0)
      
      const shipping = subtotal > 50 ? 0 : 5.99
      return subtotal + shipping
    }
  },

  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          product: { ...product },
          quantity
        })
      }
    },

    removeFromCart(productId) {
      this.items = this.items.filter(item => item.product.id !== productId)
    },

    updateQuantity(productId, newQuantity) {
      if (newQuantity <= 0) {
        this.removeFromCart(productId)
        return
      }

      const item = this.items.find(item => item.product.id === productId)
      if (item) {
        item.quantity = newQuantity
      }
    },

    clearCart() {
      this.items = []
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },

    openCart() {
      this.isCartOpen = true
    },

    closeCart() {
      this.isCartOpen = false
    }
  }
})