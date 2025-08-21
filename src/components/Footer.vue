<script setup>
import { ref } from "vue";
import {
  Instagram,
  Facebook,
  Twitter,
  Music,
  Mail,
  ArrowRight,
  Leaf,
  Recycle,
  Award,
} from "lucide-vue-next";
import Logo from "../assets/images/logo.png";

const email = ref("");
const isSubscribed = ref(false);

const handleSubscribe = (e) => {
  e.preventDefault();
  if (email.value.trim()) {
    isSubscribed.value = true;
    email.value = "";
    setTimeout(() => (isSubscribed.value = false), 3000);
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img :src="Logo" alt="EcoSphere Logo" class="logo-image" />
            <span class="logo-text">EcoSphere</span>
          </div>
          <p class="footer-mission">
            Creating a sustainable future, one eco-friendly product at a time.
            Join us in making the world greener and cleaner for generations to
            come.
          </p>

          <div class="eco-badges">
            <div class="eco-badge">
              <Leaf class="badge-icon" />
              <span>Carbon Neutral Shipping</span>
            </div>
            <div class="eco-badge">
              <Recycle class="badge-icon" />
              <span>Plastic-Free Packaging</span>
            </div>
            <div class="eco-badge">
              <Award class="badge-icon" />
              <span>Certified B-Corporation</span>
            </div>
          </div>
        </div>

        <div class="footer-links">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="links-list">
            <li
              v-for="link in [
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact-us' },
                { name: 'FAQ', path: '/faq' },
              ]"
              :key="link.name"
            >
              <router-link :to="link.path" class="footer-link">
                <span class="link-text">{{ link.name }}</span>
                <ArrowRight class="link-arrow" />
              </router-link>
            </li>
          </ul>
        </div>

        <div class="footer-links">
          <h3 class="footer-heading">Legal</h3>
          <ul class="links-list">
            <li
              v-for="link in [
                { name: 'Privacy Policy', path: '/privacy-policy-and-terms' },
                {
                  name: 'Terms & Conditions',
                  path: '/privacy-policy-and-terms',
                },
                {
                  name: 'Shipping Policy',
                  path: '/shipping-and-returns-policy',
                },
                { name: 'Return Policy', path: '/shipping-and-returns-policy' },
              ]"
              :key="link.name"
            >
              <router-link :to="link.path" class="footer-link">
                <span class="link-text">{{ link.name }}</span>
                <ArrowRight class="link-arrow" />
              </router-link>
            </li>
          </ul>
        </div>

        <div class="footer-newsletter">
          <h3 class="footer-heading">Stay Connected</h3>

          <form @submit.prevent="handleSubscribe" class="newsletter-form">
            <div class="input-group">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="email-input"
                required
              />
              <button type="submit" class="subscribe-btn">
                <Mail class="mail-icon" />
                <span>Subscribe</span>
              </button>
            </div>
            <p v-if="isSubscribed" class="subscribe-message">
              ✨ Thanks for subscribing! Welcome to the EcoSphere family!
            </p>
          </form>

          <div class="social-section">
            <h4 class="social-heading">Follow Us</h4>
            <div class="social-icons">
              <a
                v-for="(social, index) in [
                  {
                    icon: Instagram,
                    color: 'pink',
                    url: 'https://instagram.com',
                  },
                  {
                    icon: Facebook,
                    color: 'blue',
                    url: 'https://facebook.com',
                  },
                  { icon: Twitter, color: 'sky', url: 'https://twitter.com' },
                  { icon: Music, color: 'red', url: 'https://tiktok.com' },
                ]"
                :key="index"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :class="`social-icon ${social.color}`"
              >
                <component :is="social.icon" class="social-icon-svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="bottom-container">
        <div class="copyright">
          <p>© 2025 EcoSphere. All rights reserved.</p>
          <div class="sustainability-badge">
            <div class="pulse-dot"></div>
            <span>Sustainably powering the future</span>
          </div>
        </div>

        <div class="certifications">
          <div class="certification-badge green">
            <Leaf class="certification-icon" />
            <span>Eco-Certified</span>
          </div>
          <div class="certification-badge teal">
            <Recycle class="certification-icon" />
            <span>100% Recyclable</span>
          </div>
        </div>
      </div>
    </div>

    <button @click="scrollToTop" class="back-to-top">
      <ArrowRight class="arrow-icon" />
    </button>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%);
  color: white;
  position: relative;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-brand {
  grid-column: 1 / -1;
}

@media (min-width: 1024px) {
  .footer-brand {
    grid-column: auto;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-image {
  width: 3rem;
  height: 3rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #4ade80, #2dd4bf);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-mission {
  color: #cbd5e1;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.eco-badges {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.eco-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.eco-badge:nth-child(1) {
  color: #4ade80;
}

.eco-badge:nth-child(2) {
  color: #2dd4bf;
}

.eco-badge:nth-child(3) {
  color: #86efac;
}

.badge-icon {
  width: 1rem;
  height: 1rem;
}

.footer-links {
  margin-bottom: 2rem;
}

.footer-heading {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  display: flex;
  align-items: center;
  color: #cbd5e1;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #4ade80;
}

.link-text {
  transition: transform 0.3s ease;
}

.footer-link:hover .link-text {
  transform: translateX(0.25rem);
}

.link-arrow {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.25rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-link:hover .link-arrow {
  opacity: 1;
}

.footer-link.router-link-active {
  color: #4ade80;
  font-weight: 500;
}

.footer-link.router-link-active .link-arrow {
  opacity: 1;
}

.newsletter-form {
  margin-bottom: 2rem;
}

.input-group {
  position: relative;
}

.email-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #334155;
  border: 1px solid #475569;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
}

.email-input:focus {
  outline: none;
  border-color: #4ade80;
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.5);
}

.subscribe-btn {
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background: linear-gradient(to right, #16a34a, #0f766e);
  transform: scale(1.05);
}

.mail-icon {
  width: 0.75rem;
  height: 0.75rem;
}

.subscribe-message {
  color: #4ade80;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.social-heading {
  font-size: 0.875rem;
  font-weight: 500;
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
}

.social-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.social-icon.pink:hover {
  color: #ec4899;
  background-color: rgba(236, 72, 153, 0.1);
}

.social-icon.blue:hover {
  color: #3b82f6;
  background-color: rgba(59, 130, 246, 0.1);
}

.social-icon.sky:hover {
  color: #0ea5e9;
  background-color: rgba(14, 165, 233, 0.1);
}

.social-icon.red:hover {
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
}

.social-icon-svg {
  width: 1.25rem;
  height: 1.25rem;
}

.footer-bottom {
  border-top: 1px solid #475569;
  background-color: rgba(30, 41, 59, 0.5);
  padding: 1.5rem 0;
}

.bottom-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .bottom-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

@media (min-width: 768px) {
  .copyright {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
}

.sustainability-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #4ade80;
}

.pulse-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.certifications {
  display: flex;
  gap: 1.5rem;
}

.certification-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.certification-badge.green {
  background-color: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  color: #86efac;
}

.certification-badge.teal {
  background-color: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.3);
  color: #5eead4;
}

.certification-icon {
  width: 0.75rem;
  height: 0.75rem;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 40;
}

.back-to-top:hover {
  background: linear-gradient(to right, #16a34a, #0f766e);
  transform: scale(1.1);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}

.back-to-top:hover .arrow-icon {
  transform: rotate(-90deg) translateY(-0.25rem);
}
</style>
