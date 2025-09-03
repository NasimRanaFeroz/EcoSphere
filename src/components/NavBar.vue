<script setup>
import { ref, computed } from "vue";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  BarChart3,
  ShoppingCart,
} from "lucide-vue-next";
import { useCartStore } from "./cart.js";

const cartStore = useCartStore();

const isLoggedIn = ref(true);
const showDropdown = ref(false);
const isMobileMenuOpen = ref(false);
const showProfileDropdown = ref(false);

const cartItemCount = computed(() => cartStore.itemCount);

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value;
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-content">
        <div class="logo-container">
          <a href="/" class="logo-link">
            <img src="../assets/images/logo.png" alt="ES" class="logo-image" />
            <span class="logo-text">EcoSphere</span>
          </a>
        </div>

        <div class="desktop-nav">
          <a href="/" class="nav-link">Home</a>
          <a href="/shop" class="nav-link">Shop</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/contact-us" class="nav-link">Contact</a>
        </div>

        <div class="auth-section">
          <button v-if="!isLoggedIn" @click="toggleLogin" class="signup-btn">
            Sign Up
          </button>

          <div v-if="isLoggedIn" class="cart-section">
            <button @click="$router.push('/cart')" class="cart-button">
              <div class="cart-icon-wrapper">
                <ShoppingCart class="cart-icon" />
                <span v-if="cartItemCount > 0" class="cart-badge">{{
                  cartItemCount
                }}</span>
              </div>
            </button>
          </div>

          <div v-if="isLoggedIn" class="profile-section">
            <button @click="toggleProfileDropdown" class="profile-toggle">
              <div class="user-icon">
                <User class="icon" />
              </div>
              <span class="profile-text">Profile</span>
              <ChevronDown
                class="dropdown-chevron"
                :class="{ rotated: showProfileDropdown }"
              />
            </button>

            <div
              class="profile-dropdown"
              :class="{ visible: showProfileDropdown }"
            >
              <div class="dropdown-content">
                <a href="/dashboard" class="dropdown-item">
                  <BarChart3 class="dropdown-icon" />
                  Dashboard
                </a>
                <a href="/profile" class="dropdown-item">
                  <Settings class="dropdown-icon" />
                  Profile Settings
                </a>
                <a @click="toggleLogin" class="dropdown-item logout">
                  <LogOut class="dropdown-icon" />
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-menu-btn">
          <button @click="toggleMobileMenu" class="mobile-toggle">
            <div class="hamburger">
              <span
                class="hamburger-line top"
                :class="{ rotated: isMobileMenuOpen }"
              ></span>
              <span
                class="hamburger-line middle"
                :class="{ hidden: isMobileMenuOpen }"
              ></span>
              <span
                class="hamburger-line bottom"
                :class="{ rotatedNegative: isMobileMenuOpen }"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
        <div class="mobile-menu-content">
          <a href="/" class="mobile-nav-link">Home</a>
          <a href="/shop" class="mobile-nav-link">Shop</a>
          <a href="/about" class="mobile-nav-link">About</a>
          <a href="/contact-us" class="mobile-nav-link">Contact</a>

          <div class="mobile-auth-section">
            <button
              v-if="!isLoggedIn"
              @click="toggleLogin"
              class="mobile-signup-btn"
            >
              Sign Up
            </button>

            <div v-if="isLoggedIn" class="mobile-cart-section">
              <button @click="$router.push('/cart')" class="mobile-cart-button">
                <div class="mobile-cart-icon-wrapper">
                  <ShoppingCart class="mobile-cart-icon" />
                  <span v-if="cartItemCount > 0" class="mobile-cart-badge">{{
                    cartItemCount
                  }}</span>
                </div>
                <span class="mobile-cart-text">Cart</span>
              </button>
            </div>

            <div v-if="isLoggedIn" class="mobile-profile-section">
              <button @click="toggleDropdown" class="mobile-profile-toggle">
                <div class="mobile-user-icon">
                  <User class="mobile-icon" />
                </div>
                <span class="mobile-profile-text">Profile</span>
                <ChevronDown
                  class="mobile-dropdown-chevron"
                  :class="{ rotated: showDropdown }"
                />
              </button>

              <div class="mobile-dropdown" :class="{ visible: showDropdown }">
                <div class="mobile-dropdown-content">
                  <a href="/dashboard" class="mobile-dropdown-item">
                    <BarChart3 class="mobile-dropdown-icon" />
                    Dashboard
                  </a>
                  <a href="/profile" class="mobile-dropdown-item">
                    <Settings class="mobile-dropdown-icon" />
                    Profile Settings
                  </a>
                  <a @click="toggleLogin" class="mobile-dropdown-item logout">
                    <LogOut class="mobile-dropdown-icon" />
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 99;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}

.logo-container {
  margin: auto 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}

.logo-image {
  height: 2.8rem;
  width: auto;
}

.logo-text {
  padding-top: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(to right, #4ade80, #2dd4bf);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  color: #e2e8f0;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0.25rem;
}

.nav-link:hover {
  color: #4ade80;
  background-color: rgba(74, 222, 128, 0.1);
}

.auth-section {
  display: none;
  align-items: center;
}

@media (min-width: 768px) {
  .auth-section {
    display: flex;
  }
}

.signup-btn {
  background: linear-gradient(to right, #22c55e, #0d9488);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.signup-btn:hover {
  background: linear-gradient(to right, #16a34a, #0f766e);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-section {
  position: relative;
}

.profile-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.profile-toggle:hover {
  background: rgba(74, 222, 128, 0.2);
}

.profile-text {
  color: #4ade80;
  font-weight: 500;
  font-size: 1rem;
}

.user-icon {
  width: 2.2rem;
  height: 2.2rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: white;
  width: 1rem;
  height: 1rem;
}

.dropdown-chevron {
  width: 1rem;
  height: 1rem;
  color: #94a3b8;
  transition: transform 0.3s ease;
}

.dropdown-chevron.rotated {
  transform: rotate(180deg);
}

.profile-dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  width: 16rem;
  background: #1e293b;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #334155;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 50;
}

.profile-dropdown.visible {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.dropdown-content {
  padding: 0.5rem 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #e2e8f0;
  text-decoration: none;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  color: #94a3b8;
}

.dropdown-item:hover .dropdown-icon {
  color: #4ade80;
}

.dropdown-item.logout {
  color: #fca5a5;
}

.dropdown-item.logout:hover {
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;
}

.mobile-menu-btn {
  display: block;
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-toggle {
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
}

.hamburger-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #e2e8f0;
  transition: all 0.3s ease;
}

.hamburger-line.top {
  top: 0.25rem;
}

.hamburger-line.middle {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-line.bottom {
  bottom: 0.25rem;
}

.hamburger-line.top.rotated {
  transform: rotate(45deg) translate(0.3rem, 0.3rem);
}

.hamburger-line.middle.hidden {
  opacity: 0;
}

.hamburger-line.bottom.rotatedNegative {
  transform: rotate(-45deg) translate(0.3rem, -0.3rem);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #1e293b;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.mobile-menu.open {
  max-height: 100vh;
}

.mobile-menu-content {
  padding: 1rem 1.5rem;
  border-top: 1px solid #334155;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  color: #e2e8f0;
  text-decoration: none;
  border-bottom: 1px solid #334155;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  color: #4ade80;
}

.mobile-auth-section {
  margin-top: 1rem;
  padding-top: 1rem;
}

.mobile-signup-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-signup-btn:hover {
  background: linear-gradient(to right, #16a34a, #0f766e);
}

.mobile-profile-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  border: none;
  color: #e2e8f0;
  cursor: pointer;
}

.mobile-profile-text {
  color: #4ade80;
  font-weight: 500;
}

.mobile-user-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-icon {
  color: white;
  width: 1rem;
  height: 1rem;
}

.mobile-dropdown-chevron {
  margin-left: auto;
  width: 1rem;
  height: 1rem;
  color: #94a3b8;
  transition: transform 0.3s ease;
}

.mobile-dropdown-chevron.rotated {
  transform: rotate(180deg);
}

.mobile-dropdown {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.mobile-dropdown.visible {
  max-height: 20rem;
}

.mobile-dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #e2e8f0;
  text-decoration: none;
  transition: all 0.2s ease;
}

.mobile-dropdown-item:hover {
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
}

.mobile-dropdown-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  color: #94a3b8;
}

.mobile-dropdown-item:hover .mobile-dropdown-icon {
  color: #4ade80;
}

.mobile-dropdown-item.logout {
  color: #fca5a5;
}

.mobile-dropdown-item.logout:hover {
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;
}

.cart-section {
  display: none;
  align-items: center;
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .cart-section {
    display: flex;
  }
}

.cart-button {
  position: relative;
  padding: 0.75rem;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-button:hover {
  background: rgba(74, 222, 128, 0.2);
  transform: translateY(-2px);
}

.cart-icon-wrapper {
  position: relative;
}

.cart-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #4ade80;
}

.cart-badge {
  position: absolute;
  top: -1.2rem;
  right: -1rem;
  background: linear-gradient(to right, #c2503e, #dc2626);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border: 1px solid #3f160b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.mobile-cart-section {
  margin-top: 1rem;
}

.mobile-cart-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  border: none;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-cart-button:hover {
  color: #4ade80;
}

.mobile-cart-icon-wrapper {
  position: relative;
  width: 2rem;
  height: 2rem;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-cart-icon {
  width: 1rem;
  height: 1rem;
  color: #4ade80;
}

.mobile-cart-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: linear-gradient(to right, #ef4444, #dc2626);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid #073d0b;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.mobile-cart-text {
  color: #4ade80;
  font-weight: 500;
}
</style>
