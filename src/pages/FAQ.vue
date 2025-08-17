<script setup>
import { ref, computed, onMounted } from "vue";
import {
  ChevronDown,
  Search,
  Leaf,
  Package,
  Truck,
  CreditCard,
  RefreshCw,
  Shield,
  Heart,
  Mail,
} from "lucide-vue-next";

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const searchTerm = ref("");
const activeCategory = ref("all");
const openFAQ = ref(null);

const categories = [
  { id: "all", name: "All Questions", icon: null },
  { id: "products", name: "Products", icon: Leaf },
  { id: "shipping", name: "Shipping", icon: Truck },
  { id: "orders", name: "Orders", icon: Package },
  { id: "payments", name: "Payments", icon: CreditCard },
  { id: "returns", name: "Returns", icon: RefreshCw },
  { id: "sustainability", name: "Sustainability", icon: Heart },
];

const faqs = [
  {
    id: 1,
    category: "products",
    question: "What makes your products eco-friendly?",
    answer:
      "All our products are made from sustainable, biodegradable, or recycled materials. We partner with certified suppliers who share our commitment to environmental responsibility. Every product undergoes rigorous testing to ensure it meets our strict eco-friendly standards.",
  },
  {
    id: 2,
    category: "shipping",
    question: "Do you offer carbon-neutral shipping?",
    answer:
      "Yes! All our shipments are 100% carbon-neutral. We offset carbon emissions through verified reforestation projects and renewable energy initiatives. We also use biodegradable packaging materials and partner with eco-conscious shipping providers.",
  },
  {
    id: 3,
    category: "products",
    question: "Are your products safe for sensitive skin?",
    answer:
      "Absolutely! Our products are formulated with natural, hypoallergenic ingredients and are free from harsh chemicals, sulfates, parabens, and synthetic fragrances. Many of our items are dermatologist-tested and suitable for all skin types, including sensitive skin.",
  },
  {
    id: 4,
    category: "orders",
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive an email with tracking information. You can also log into your account dashboard to view real-time order status and tracking details. Our customer service team is always available to help with any tracking questions.",
  },
  {
    id: 5,
    category: "shipping",
    question: "What is your shipping policy?",
    answer:
      "We offer free carbon-neutral shipping on orders over $50. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. All packages are shipped in plastic-free, recyclable packaging materials.",
  },
  {
    id: 6,
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna and Afterpay. All transactions are secured with SSL encryption for your safety.",
  },
  {
    id: 7,
    category: "returns",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return it for a full refund or exchange. Items must be unused and in original packaging. Return shipping is free for defective items.",
  },
  {
    id: 8,
    category: "sustainability",
    question: "How do you ensure sustainable packaging?",
    answer:
      "Our packaging is 100% plastic-free and made from recycled cardboard, biodegradable materials, and plant-based inks. We use minimal packaging to reduce waste and include seed paper inserts that customers can plant to grow wildflowers.",
  },
  {
    id: 9,
    category: "products",
    question: "Do you test on animals?",
    answer:
      "Never! We are proudly cruelty-free and certified by Leaping Bunny. None of our products or ingredients are tested on animals at any stage of development. We only work with suppliers who share our cruelty-free values.",
  },
  {
    id: 10,
    category: "orders",
    question: "Can I modify or cancel my order?",
    answer:
      "You can modify or cancel your order within 2 hours of placing it by logging into your account or contacting customer service. Once an order enters fulfillment, modifications aren't possible, but you can always return items under our satisfaction guarantee.",
  },
  {
    id: 11,
    category: "sustainability",
    question: "What environmental certifications do you have?",
    answer:
      "We are certified B-Corporation, carbon-neutral certified, and many of our products carry organic, Fair Trade, and Forest Stewardship Council (FSC) certifications. We undergo annual third-party audits to maintain these standards.",
  },
  {
    id: 12,
    category: "payments",
    question: "Is my payment information secure?",
    answer:
      "Absolutely! We use bank-level SSL encryption and are PCI DSS compliant. We never store your payment information on our servers - all transactions are processed securely through our trusted payment partners.",
  },
];

const filteredFAQs = computed(() => {
  return faqs.filter((faq) => {
    const matchesCategory =
      activeCategory.value === "all" || faq.category === activeCategory.value;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

const toggleFAQ = (id) => {
  openFAQ.value = openFAQ.value === id ? null : id;
};
</script>

<template>
  <div class="faq-page">
    <div class="faq-hero">
      <div class="faq-hero-content">
        <div class="faq-hero-icon">
          <Shield class="icon" />
        </div>
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about our eco-friendly products,
          shipping, and sustainability practices.
        </p>
      </div>
    </div>

    <div class="faq-container">
      <div class="search-container">
        <div class="search-input">
          <Search class="search-icon" />
          <input
            type="text"
            placeholder="Search for answers..."
            v-model="searchTerm"
          />
        </div>
      </div>

      <div class="category-filters">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="{ active: activeCategory === category.id }"
        >
          <component
            :is="category.icon"
            v-if="category.icon"
            class="category-icon"
          />
          <span>{{ category.name }}</span>
        </button>
      </div>

      <div class="faq-grid">
        <div v-for="faq in filteredFAQs" :key="faq.id" class="faq-item">
          <button @click="toggleFAQ(faq.id)" class="faq-question">
            <h3>{{ faq.question }}</h3>
            <ChevronDown
              class="chevron"
              :class="{ rotated: openFAQ === faq.id }"
            />
          </button>

          <div class="faq-answer" :class="{ open: openFAQ === faq.id }">
            <div class="answer-content">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredFAQs.length === 0" class="no-results">
        <div class="no-results-icon">
          <Search class="search-icon-large" />
        </div>
        <h3>No questions found</h3>
        <p>Try adjusting your search terms or browse different categories.</p>
        <button
          @click="
            () => {
              searchTerm = '';
              activeCategory = 'all';
            }
          "
          class="clear-filters"
        >
          Clear Filters
        </button>
      </div>

      <div class="contact-cta">
        <div class="cta-content">
          <div class="cta-icon">
            <Mail class="icon" />
          </div>
          <h2>Still have questions?</h2>
          <p>
            Our friendly customer support team is here to help! Reach out to us
            and we'll get back to you within 24 hours.
          </p>
          <div class="cta-buttons">
            <a href="/contact-us" class="primary-button">Contact Support</a>
            <a href="mailto:feroznasimrana@gmail.com" class="secondary-button"
              >Email Us</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #f0fdf4);
}

.faq-hero {
  background: linear-gradient(to right, #16a34a, #0d9488, #16a34a);
  color: white;
  padding: 5rem 1rem;
  text-align: center;
}

.faq-hero-content {
  max-width: 56rem;
  margin: 0 auto;
}

.faq-hero-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.faq-hero-icon .icon {
  width: 2rem;
  height: 2rem;
}

.faq-hero h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.faq-hero p {
  font-size: 1.25rem;
  color: #d1fae5;
  max-width: 36rem;
  margin: 0 auto;
}

.faq-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 1rem;
}

.search-container {
  max-width: 42rem;
  margin: 0 auto 3rem;
}

.search-input {
  position: relative;
}

.search-input .search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
}

.search-input input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  font-size: 1.125rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.search-input input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.5);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.category-filters button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid #e5e7eb;
  background: white;
  color: #4b5563;
}

.category-filters button:hover {
  background: #f0fdf4;
  color: #16a34a;
  transform: scale(1.05);
}

.category-filters button.active {
  background: linear-gradient(to right, #10b981, #0d9488);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
}

.category-icon {
  width: 1rem;
  height: 1rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .faq-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.faq-item {
  background: white;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.faq-item:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.faq-question {
  width: 100%;
  padding: 1.25rem 1.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
}

.faq-question:hover {
  background: #f0fdf4;
}

.faq-question h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-right: 1rem;
}

.chevron {
  width: 1.25rem;
  height: 1.25rem;
  color: #6b7280;
  flex-shrink: 0;
  transition: transform 0.3s;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.open {
  max-height: 500px;
}

.answer-content {
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.answer-content p {
  color: #4b5563;
  line-height: 1.6;
}

.no-results {
  text-align: center;
  padding: 3rem 0;
}

.no-results-icon {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.search-icon-large {
  width: 3rem;
  height: 3rem;
  color: #6b7280;
}

.no-results h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.clear-filters {
  background: linear-gradient(to right, #10b981, #0d9488);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.clear-filters:hover {
  background: linear-gradient(to right, #0d9488, #0f766e);
  transform: scale(1.05);
}

.contact-cta {
  background: linear-gradient(to right, #16a34a, #0d9488);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
}

.cta-content {
  max-width: 42rem;
  margin: 0 auto;
}

.cta-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.cta-icon .icon {
  width: 2rem;
  height: 2rem;
}

.contact-cta h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-cta p {
  font-size: 1.125rem;
  color: #d1fae5;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
  }
}

.primary-button {
  background: white;
  color: #16a34a;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
}

.primary-button:hover {
  background: #f0fdf4;
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.secondary-button {
  border: 2px solid white;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
}

.secondary-button:hover {
  background: white;
  color: #16a34a;
  transform: scale(1.05);
}
</style>
