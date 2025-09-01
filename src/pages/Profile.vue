<script setup>
import { ref } from "vue";
import {
  User,
  Lock,
  Mail,
  ShoppingBag,
  Heart,
  Settings,
  Bell,
  Gift,
  Truck,
  ArrowRight,
  Info,
} from "lucide-vue-next";

const showLoginModal = ref(false);

const openLoginModal = () => {
  showLoginModal.value = true;
};

const closeLoginModal = () => {
  showLoginModal.value = false;
};

const userFeatures = [
  {
    icon: ShoppingBag,
    title: "Order History",
    description: "Track your sustainable purchases and reorder favorites",
    color: "#16a34a",
  },
  {
    icon: Heart,
    title: "Wishlist",
    description: "Save products you love for later",
    color: "#dc2626",
  },
  {
    icon: Gift,
    title: "Eco Rewards",
    description: "Earn points for every sustainable choice you make",
    color: "#7c3aed",
  },
  {
    icon: Truck,
    title: "Shipping Addresses",
    description: "Manage your delivery preferences",
    color: "#0369a1",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Stay updated on new eco-friendly products",
    color: "#ea580c",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Manage your profile and preferences",
    color: "#4b5563",
  },
];
</script>

<template>
  <div class="profile-container">
    <section class="profile-header">
      <div class="header-content">
        <div class="user-avatar-section">
          <div class="avatar-placeholder">
            <User size="48" />
          </div>
          <div class="user-info">
            <h1 class="welcome-title">Welcome to Your Profile</h1>
            <p class="welcome-subtitle">
              Join our community of eco-conscious shoppers
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="login-required-section">
      <div class="login-content">
        <div class="login-card">
          <div class="lock-icon-container">
            <Lock size="40" />
          </div>

          <h2 class="login-title">Sign In Required</h2>
          <p class="login-description">
            Please log in to access your profile, view order history, manage
            your wishlist, and unlock exclusive eco-rewards.
          </p>

          <div class="login-benefits">
            <h3 class="benefits-title">What you'll get:</h3>
            <ul class="benefits-list">
              <li class="benefit-item">
                <Heart size="16" class="benefit-icon" />
                Personalized product recommendations
              </li>
              <li class="benefit-item">
                <Gift size="16" class="benefit-icon" />
                Exclusive eco-rewards and discounts
              </li>
              <li class="benefit-item">
                <Truck size="16" class="benefit-icon" />
                Faster checkout with saved addresses
              </li>
              <li class="benefit-item">
                <ShoppingBag size="16" class="benefit-icon" />
                Complete order history and tracking
              </li>
            </ul>
          </div>

          <button @click="openLoginModal" class="login-btn">
            <Mail size="20" />
            Sign In to Your Account
          </button>

          <p class="signup-text">
            Don't have an account?
            <span @click="openLoginModal" class="signup-link"
              >Sign up here</span
            >
          </p>
        </div>

        <div class="features-preview">
          <h3 class="preview-title">What's waiting for you</h3>
          <div class="features-grid">
            <div
              v-for="feature in userFeatures"
              :key="feature.title"
              class="feature-card"
              @click="openLoginModal"
            >
              <div class="feature-icon" :style="{ color: feature.color }">
                <component :is="feature.icon" size="24" />
              </div>
              <div class="feature-content">
                <h4 class="feature-title">{{ feature.title }}</h4>
                <p class="feature-description">{{ feature.description }}</p>
              </div>
              <ArrowRight size="16" class="feature-arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="showLoginModal" class="modal-overlay" @click="closeLoginModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Coming Soon!</h3>
          <button @click="closeLoginModal" class="modal-close">
            <User size="20" />
          </button>
        </div>

        <div class="modal-body">
          <div class="info-icon-container">
            <Info size="48" class="info-icon" />
          </div>

          <h4 class="modal-subtitle">Login Feature in Development</h4>
          <p class="modal-text">
            We're working hard to bring you a seamless login experience! The
            authentication system will be available in our next update.
          </p>

          <div class="coming-features">
            <h5 class="coming-title">Coming Soon:</h5>
            <div class="coming-list">
              <span class="coming-item">Social Media Login</span>
              <span class="coming-item">Email Authentication</span>
              <span class="coming-item">Profile Customization</span>
              <span class="coming-item">Order Tracking</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="closeLoginModal" class="modal-btn">
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
  min-height: 100vh;
}

.profile-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 2rem;
}

.header-content {
  text-align: center;
}

.user-avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #16a34a, #0d9488);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.welcome-subtitle {
  color: #6b7280;
  font-size: 1.125rem;
}

.login-required-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.login-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.login-card {
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 1px solid #e5e7eb;
  position: relative;
}

.login-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #16a34a, #0d9488, #059669);
  border-radius: 2rem 2rem 0 0;
}

.lock-icon-container {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #16a34a;
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.login-description {
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.login-benefits {
  text-align: left;
  margin-bottom: 2rem;
}

.benefits-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #374151;
  font-weight: 500;
}

.benefit-icon {
  color: #16a34a;
  flex-shrink: 0;
}

.login-btn {
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
  margin-bottom: 1rem;
  width: 100%;
  justify-content: center;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(22, 163, 74, 0.3);
}

.signup-text {
  color: #6b7280;
  font-size: 0.875rem;
}

.signup-link {
  color: #16a34a;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}

.signup-link:hover {
  color: #0d9488;
}

.features-preview {
  background: white;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.preview-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: #f0fdf4;
  border-color: #16a34a;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.1);
}

.feature-icon {
  background: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.feature-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.4;
}

.feature-arrow {
  color: #9ca3af;
  transition: all 0.2s ease;
}

.feature-card:hover .feature-arrow {
  color: #16a34a;
  transform: translateX(2px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: white;
  max-width: 500px;
  width: 90%;
  border-radius: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;
  overflow: hidden;
}

.modal-header {
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.modal-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.modal-body {
  padding: 2.5rem;
  text-align: center;
}

.info-icon-container {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #16a34a;
}

.modal-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.modal-text {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.coming-features {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.coming-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.coming-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.coming-item {
  background: linear-gradient(to right, #dcfce7, #bbf7d0);
  color: #166534;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #16a34a;
}

.modal-footer {
  padding: 1.5rem 2rem;
  background: #f9fafb;
}

.modal-btn {
  width: 100%;
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22, 163, 74, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card {
  animation: slideInLeft 0.5s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1024px) {
  .login-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .features-preview {
    order: -1;
  }
}

@media (max-width: 768px) {
  .profile-header {
    padding: 2rem 1rem 1rem;
  }

  .welcome-title {
    font-size: 2rem;
  }

  .user-avatar-section {
    gap: 1rem;
  }

  .avatar-placeholder {
    width: 80px;
    height: 80px;
  }

  .login-card {
    padding: 2rem;
  }

  .modal-content {
    margin: 1rem;
    width: auto;
  }

  .modal-body {
    padding: 2rem;
  }

  .features-grid {
    gap: 0.75rem;
  }

  .feature-card {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .welcome-title {
    font-size: 1.75rem;
  }

  .login-card {
    padding: 1.5rem;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .benefits-list {
    gap: 0.5rem;
  }

  .benefit-item {
    font-size: 0.875rem;
  }

  .modal-header {
    padding: 1rem 1.5rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .coming-list {
    flex-direction: column;
    align-items: center;
  }

  .coming-item {
    width: 100%;
    text-align: center;
  }
}

.login-card {
  position: relative;
  overflow: hidden;
}

.login-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #16a34a, transparent);
}

.features-preview {
  position: relative;
}

.features-preview::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #16a34a, #0d9488, #059669);
  border-radius: 2rem 2rem 0 0;
}
</style>
