<script setup>
import BuyCard from "../components/BuyCard.vue";
import {
  allProducts,
  categories,
  sustainableHomeKitchen,
  ecoPersonalCare,
  zeroWasteLifestyle,
  sustainableFashion,
  greenCleaningSupplies,
} from "../constants/data.js";
import { ref, computed } from "vue";
import {
  Search,
  Filter,
  Grid,
  List,
  ShoppingCart,
  X,
  Plus,
  Minus,
} from "lucide-vue-next";
import { useCartStore } from "../components/Cart.js";

const cartStore = useCartStore();

const searchQuery = ref("");
const selectedCategory = ref("all");
const viewMode = ref("grid");
const sortBy = ref("name");

const addToCart = ({ product, quantity }) => {
  cartStore.addToCart(product, quantity);
};

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

const updateCartQuantity = (productId, newQuantity) => {
  cartStore.updateQuantity(productId, newQuantity);
};

const cartItemCount = computed(() => cartStore.itemCount);
const cartTotal = computed(() => cartStore.cartTotal.toFixed(2));

const filteredProducts = computed(() => {
  let products = allProducts;

  if (selectedCategory.value !== "all") {
    products = categories[selectedCategory.value].products;
  }

  if (searchQuery.value) {
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  products = [...products].sort((a, b) => {
    switch (sortBy.value) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return products;
});

const productCount = computed(() => filteredProducts.value.length);

const categoryOptions = [
  { key: "all", name: "All Products", count: allProducts.length },
  {
    key: "sustainableHomeKitchen",
    name: "Home & Kitchen",
    count: sustainableHomeKitchen.length,
  },
  {
    key: "ecoPersonalCare",
    name: "Personal Care",
    count: ecoPersonalCare.length,
  },
  {
    key: "zeroWasteLifestyle",
    name: "Zero Waste",
    count: zeroWasteLifestyle.length,
  },
  {
    key: "sustainableFashion",
    name: "Fashion & Accessories",
    count: sustainableFashion.length,
  },
  {
    key: "greenCleaningSupplies",
    name: "Green Cleaning",
    count: greenCleaningSupplies.length,
  },
];

const clearFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "all";
  sortBy.value = "name";
};
</script>

<template>
  <div class="container">
    <section class="page-header">
      <div class="header-content">
        <h1 class="page-title">All Products</h1>
        <p class="page-subtitle">
          Discover our complete collection of sustainable, eco-friendly products
          designed to help you live a greener lifestyle
        </p>
      </div>
    </section>

    <section class="filters-section">
      <div class="filters-container">
        <div class="search-container">
          <Search class="search-icon" size="20" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="search-input"
          />
        </div>

        <div class="filter-group">
          <label class="filter-label">Category</label>
          <select v-model="selectedCategory" class="filter-select">
            <option
              v-for="category in categoryOptions"
              :key="category.key"
              :value="category.key"
            >
              {{ category.name }} ({{ category.count }})
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">Sort by</label>
          <select v-model="sortBy" class="filter-select">
            <option value="name">Name A-Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div class="view-toggle">
          <button
            @click="viewMode = 'grid'"
            :class="['view-btn', { active: viewMode === 'grid' }]"
          >
            <Grid size="18" />
          </button>
          <button
            @click="viewMode = 'list'"
            :class="['view-btn', { active: viewMode === 'list' }]"
          >
            <List size="18" />
          </button>
        </div>

        <button @click="clearFilters" class="clear-filters-btn">
          Clear Filters
        </button>
      </div>
    </section>

    <section class="results-info">
      <div class="results-container">
        <p class="results-text">
          Showing {{ productCount }} product{{ productCount !== 1 ? "s" : "" }}
          <span v-if="selectedCategory !== 'all'">
            in
            {{ categoryOptions.find((c) => c.key === selectedCategory)?.name }}
          </span>
          <span v-if="searchQuery"> matching "{{ searchQuery }}" </span>
        </p>
      </div>
    </section>

    <section class="products-section">
      <div class="products-container">
        <div
          v-if="filteredProducts.length > 0"
          :class="['products-grid', { 'list-view': viewMode === 'list' }]"
        >
          <BuyCard
            v-for="(product, index) in filteredProducts"
            :key="`${selectedCategory}-${index}`"
            :product="product"
            :class="{ 'list-card': viewMode === 'list' }"
            @add-to-cart="addToCart"
          />
        </div>

        <div v-else class="no-results">
          <div class="no-results-content">
            <Filter class="no-results-icon" size="48" />
            <h3 class="no-results-title">No products found</h3>
            <p class="no-results-text">
              Try adjusting your search or filter criteria
            </p>
            <button @click="clearFilters" class="clear-filters-btn">
              Clear all filters
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="selectedCategory === 'all' && !searchQuery"
      class="category-showcase"
    >
      <div class="showcase-container">
        <h2 class="showcase-title">Shop by Category</h2>
        <div class="category-cards">
          <div
            v-for="(category, key) in categories"
            :key="key"
            @click="selectedCategory = key"
            class="category-card"
          >
            <component :is="category.icon" class="category-icon" size="32" />
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-description">{{ category.description }}</p>
            <span class="category-count"
              >{{ category.products.length }} products</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
  min-height: 100vh;
}

.page-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem 2rem;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #16a34a, #0d9488);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.filters-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.filters-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: end;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.search-container {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #16a34a;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.filter-select {
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: white;
  min-width: 150px;
  transition: border-color 0.2s;
}

.filter-select:focus {
  outline: none;
  border-color: #16a34a;
}

.view-toggle {
  display: flex;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

.view-btn {
  padding: 0.75rem;
  background: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b7280;
}

.view-btn:hover {
  background: #f3f4f6;
}

.view-btn.active {
  background: #16a34a;
  color: white;
}

.clear-filters-btn {
  padding: 0.75rem 1.5rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-filters-btn:hover {
  background: #dc2626;
}

.results-info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 1rem;
}

.results-text {
  color: #6b7280;
  font-weight: 500;
}

.products-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  transition: all 0.3s ease;
}

.products-grid.list-view {
  grid-template-columns: 1fr;
  gap: 1rem;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
}

.no-results-content {
  max-width: 400px;
  margin: 0 auto;
}

.no-results-icon {
  color: #9ca3af;
  margin-bottom: 1rem;
}

.no-results-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.no-results-text {
  color: #6b7280;
  margin-bottom: 2rem;
}

.category-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
}

.showcase-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 3rem;
}

.category-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgb(0 0 0 / 0.1);
}

.category-icon {
  color: #16a34a;
  margin-bottom: 1rem;
}

.category-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.category-description {
  color: #6b7280;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.category-count {
  color: #16a34a;
  font-weight: 600;
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .filters-container {
    flex-direction: column;
    align-items: stretch;
  }

  .view-toggle {
    align-self: center;
  }

  .cart-sidebar {
    width: 350px;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.125rem;
  }

  .filters-container {
    padding: 1rem;
  }

  .search-container {
    min-width: auto;
  }

  .cart-sidebar {
    width: 100vw;
  }

  .cart-button-container {
    top: 1rem;
    right: 1rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 2rem 1rem 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .filters-section {
    padding: 1rem;
  }

  .category-cards {
    grid-template-columns: 1fr;
  }

  .cart-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .cart-item-details {
    order: 2;
  }

  .remove-item-btn {
    align-self: flex-end;
    order: 1;
  }
}

:deep(.list-card) {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  text-align: left !important;
}

:deep(.list-card .product-image) {
  width: 150px !important;
  height: 150px !important;
  flex-shrink: 0 !important;
}

:deep(.list-card .product-content) {
  flex: 1 !important;
  padding-left: 1.5rem !important;
}
</style>
