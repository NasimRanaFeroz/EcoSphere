<script setup>
import { ref, computed } from "vue";
import {
  BarChart3,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Eye,
  ShoppingCart,
  Leaf,
  Calendar,
  Award,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Globe,
  Recycle,
} from "lucide-vue-next";

const selectedTimeRange = ref("7d");
const showLoginModal = ref(false);

const stats = {
  totalSales: 24650.8,
  salesGrowth: 12.5,
  totalOrders: 486,
  ordersGrowth: 8.3,
  totalCustomers: 1247,
  customersGrowth: 15.2,
  carbonSaved: 2840,
  carbonGrowth: 22.1,
};

const recentOrders = [
  {
    id: "#ECO-2024-001",
    customer: "Sarah Chen",
    items: 3,
    total: 89.97,
    status: "shipped",
    date: "2024-08-31",
  },
  {
    id: "#ECO-2024-002",
    customer: "Mike Johnson",
    items: 1,
    total: 24.99,
    status: "processing",
    date: "2024-08-31",
  },
  {
    id: "#ECO-2024-003",
    customer: "Emma Davis",
    items: 5,
    total: 156.45,
    status: "delivered",
    date: "2024-08-30",
  },
];

const topProducts = [
  {
    name: "Bamboo Fiber Dinnerware Set",
    sales: 89,
    revenue: 4089.11,
    trend: "up",
  },
  {
    name: "Organic Cotton Tote Bag",
    sales: 156,
    revenue: 3898.44,
    trend: "up",
  },
  {
    name: "Eco-Friendly Cleaning Kit",
    sales: 72,
    revenue: 2340.0,
    trend: "down",
  },
];

const notifications = [
  {
    type: "info",
    message: "5 new orders received today",
    time: "2 hours ago",
  },
  {
    type: "warning",
    message: "Low stock alert: Bamboo Toothbrush Set",
    time: "4 hours ago",
  },
  {
    type: "success",
    message: "Monthly sustainability goal achieved!",
    time: "1 day ago",
  },
];

const openLoginModal = () => {
  showLoginModal.value = true;
};

const closeLoginModal = () => {
  showLoginModal.value = false;
};

const getStatusColor = (status) => {
  switch (status) {
    case "delivered":
      return "#16a34a";
    case "shipped":
      return "#0369a1";
    case "processing":
      return "#ea580c";
    default:
      return "#6b7280";
  }
};

const getNotificationIcon = (type) => {
  switch (type) {
    case "warning":
      return AlertCircle;
    case "success":
      return Award;
    default:
      return Activity;
  }
};
</script>

<template>
  <div class="dashboard-container">
    <section class="dashboard-header">
      <div class="header-content">
        <div class="title-section">
          <h1 class="dashboard-title">Eco Store Dashboard</h1>
          <p class="dashboard-subtitle">
            Manage your sustainable business and track environmental impact
          </p>
        </div>

        <div class="header-actions">
          <select v-model="selectedTimeRange" class="time-range-select">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>
    </section>

    <div class="login-overlay" @click="openLoginModal">
      <div class="login-overlay-content">
        <div class="overlay-icon">
          <Eye size="24" />
        </div>
        <p class="overlay-text">Click anywhere to sign in and view dashboard</p>
      </div>
    </div>

    <div class="dashboard-content blurred">
      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-card sales">
            <div class="stat-header">
              <div class="stat-icon">
                <DollarSign size="24" />
              </div>
              <div class="stat-trend up">
                <ArrowUpRight size="16" />
                {{ stats.salesGrowth }}%
              </div>
            </div>
            <div class="stat-content">
              <h3 class="stat-value">
                ${{ stats.totalSales.toLocaleString() }}
              </h3>
              <p class="stat-label">Total Sales</p>
            </div>
          </div>

          <div class="stat-card orders">
            <div class="stat-header">
              <div class="stat-icon">
                <Package size="24" />
              </div>
              <div class="stat-trend up">
                <ArrowUpRight size="16" />
                {{ stats.ordersGrowth }}%
              </div>
            </div>
            <div class="stat-content">
              <h3 class="stat-value">
                {{ stats.totalOrders.toLocaleString() }}
              </h3>
              <p class="stat-label">Total Orders</p>
            </div>
          </div>

          <div class="stat-card customers">
            <div class="stat-header">
              <div class="stat-icon">
                <Users size="24" />
              </div>
              <div class="stat-trend up">
                <ArrowUpRight size="16" />
                {{ stats.customersGrowth }}%
              </div>
            </div>
            <div class="stat-content">
              <h3 class="stat-value">
                {{ stats.totalCustomers.toLocaleString() }}
              </h3>
              <p class="stat-label">Active Customers</p>
            </div>
          </div>

          <div class="stat-card carbon">
            <div class="stat-header">
              <div class="stat-icon">
                <Leaf size="24" />
              </div>
              <div class="stat-trend up">
                <ArrowUpRight size="16" />
                {{ stats.carbonGrowth }}%
              </div>
            </div>
            <div class="stat-content">
              <h3 class="stat-value">
                {{ stats.carbonSaved.toLocaleString() }}kg
              </h3>
              <p class="stat-label">CO₂ Saved</p>
            </div>
          </div>
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="dashboard-card orders-card">
          <div class="card-header">
            <h3 class="card-title">Recent Orders</h3>
            <button class="view-all-btn">View All</button>
          </div>
          <div class="orders-list">
            <div
              v-for="order in recentOrders"
              :key="order.id"
              class="order-item"
            >
              <div class="order-info">
                <div class="order-id">{{ order.id }}</div>
                <div class="order-customer">{{ order.customer }}</div>
                <div class="order-meta">
                  {{ order.items }} items • ${{ order.total }}
                </div>
              </div>
              <div class="order-status">
                <span
                  class="status-badge"
                  :style="{ backgroundColor: getStatusColor(order.status) }"
                >
                  {{ order.status }}
                </span>
                <div class="order-date">{{ order.date }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card products-card">
          <div class="card-header">
            <h3 class="card-title">Top Products</h3>
            <select class="metric-select">
              <option value="sales">By Sales</option>
              <option value="revenue">By Revenue</option>
            </select>
          </div>
          <div class="products-list">
            <div
              v-for="product in topProducts"
              :key="product.name"
              class="product-item"
            >
              <div class="product-info">
                <h4 class="product-name">{{ product.name }}</h4>
                <div class="product-metrics">
                  <span class="metric">{{ product.sales }} sold</span>
                  <span class="metric"
                    >${{ product.revenue.toLocaleString() }}</span
                  >
                </div>
              </div>
              <div class="product-trend">
                <component
                  :is="product.trend === 'up' ? ArrowUpRight : ArrowDownRight"
                  size="16"
                  :class="['trend-icon', product.trend]"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card chart-card">
          <div class="card-header">
            <h3 class="card-title">Sales Overview</h3>
            <div class="chart-actions">
              <button class="chart-btn active">Revenue</button>
              <button class="chart-btn">Orders</button>
            </div>
          </div>
          <div class="chart-placeholder">
            <BarChart3 size="48" class="chart-icon" />
            <p class="chart-text">
              Interactive sales chart will be displayed here
            </p>
          </div>
        </div>

        <div class="dashboard-card impact-card">
          <div class="card-header">
            <h3 class="card-title">Environmental Impact</h3>
            <Globe size="20" class="header-icon" />
          </div>
          <div class="impact-metrics">
            <div class="impact-item">
              <Leaf class="impact-icon leaf" size="20" />
              <div class="impact-info">
                <span class="impact-value">2,840kg</span>
                <span class="impact-label">CO₂ Saved</span>
              </div>
            </div>
            <div class="impact-item">
              <Recycle class="impact-icon recycle" size="20" />
              <div class="impact-info">
                <span class="impact-value">156</span>
                <span class="impact-label">Items Recycled</span>
              </div>
            </div>
            <div class="impact-item">
              <Globe class="impact-icon globe" size="20" />
              <div class="impact-info">
                <span class="impact-value">89%</span>
                <span class="impact-label">Sustainable Products</span>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card notifications-card">
          <div class="card-header">
            <h3 class="card-title">Recent Activity</h3>
            <span class="notification-count">{{ notifications.length }}</span>
          </div>
          <div class="notifications-list">
            <div
              v-for="notification in notifications"
              :key="notification.message"
              class="notification-item"
            >
              <div class="notification-icon">
                <component
                  :is="getNotificationIcon(notification.type)"
                  size="16"
                />
              </div>
              <div class="notification-content">
                <p class="notification-message">{{ notification.message }}</p>
                <span class="notification-time">{{ notification.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-if="showLoginModal" class="modal-overlay" @click="closeLoginModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Dashboard Access</h3>
          <button @click="closeLoginModal" class="modal-close">
            <Activity size="20" />
          </button>
        </div>

        <div class="modal-body">
          <div class="info-icon-container">
            <BarChart3 size="48" class="info-icon" />
          </div>

          <h4 class="modal-subtitle">Admin Dashboard Coming Soon</h4>
          <p class="modal-text">
            The admin dashboard and analytics features will be available in our
            next update. This will include real-time sales data, customer
            insights, and environmental impact tracking.
          </p>

          <div class="coming-features">
            <h5 class="coming-title">Dashboard Features in Development:</h5>
            <div class="coming-list">
              <span class="coming-item">Real-time Analytics</span>
              <span class="coming-item">Sales Reports</span>
              <span class="coming-item">Customer Insights</span>
              <span class="coming-item">Environmental Tracking</span>
              <span class="coming-item">Inventory Management</span>
              <span class="coming-item">Performance Metrics</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="closeLoginModal" class="modal-btn">
            Understood, thanks!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
  min-height: 100vh;
  position: relative;
}

.dashboard-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #16a34a, #0d9488);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.dashboard-subtitle {
  color: #6b7280;
  font-size: 1.125rem;
}

.time-range-select {
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  background: white;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.time-range-select:focus {
  outline: none;
  border-color: #16a34a;
}

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(22, 163, 74, 0.1);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  cursor: pointer;
  animation: fadeIn 0.5s ease-out;
}

.login-overlay-content {
  background: white;
  padding: 2rem 3rem;
  border-radius: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 2px solid #16a34a;
  animation: pulse 2s infinite;
}

.overlay-icon {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #16a34a;
}

.overlay-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.dashboard-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  transition: filter 0.3s ease;
}

.blurred {
  filter: blur(4px);
  pointer-events: none;
}

.stats-section {
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 1.5rem 1.5rem 0 0;
}

.stat-card.sales::before {
  background: linear-gradient(to right, #16a34a, #0d9488);
}
.stat-card.orders::before {
  background: linear-gradient(to right, #0369a1, #0284c7);
}
.stat-card.customers::before {
  background: linear-gradient(to right, #7c3aed, #a855f7);
}
.stat-card.carbon::before {
  background: linear-gradient(to right, #059669, #0d9488);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.stat-icon {
  background: #f3f4f6;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: #6b7280;
}

.sales .stat-icon {
  background: #f0fdf4;
  color: #16a34a;
}
.orders .stat-icon {
  background: #eff6ff;
  color: #0369a1;
}
.customers .stat-icon {
  background: #faf5ff;
  color: #7c3aed;
}
.carbon .stat-icon {
  background: #ecfdf5;
  color: #059669;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
}

.stat-trend.up {
  background: #dcfce7;
  color: #166534;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #6b7280;
  font-weight: 500;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  grid-template-areas:
    "orders products"
    "chart impact"
    "chart notifications";
}

.dashboard-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.orders-card {
  grid-area: orders;
}
.products-card {
  grid-area: products;
}
.chart-card {
  grid-area: chart;
}
.impact-card {
  grid-area: impact;
}
.notifications-card {
  grid-area: notifications;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.header-icon {
  color: #16a34a;
}

.view-all-btn {
  background: #f3f4f6;
  color: #6b7280;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-all-btn:hover {
  background: #e5e7eb;
  color: #374151;
}

.metric-select {
  background: #f3f4f6;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.metric-select:focus {
  outline: none;
  border-color: #16a34a;
  background: white;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.order-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.order-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.order-id {
  font-weight: 600;
  color: #111827;
  font-size: 0.875rem;
}

.order-customer {
  color: #6b7280;
  font-size: 0.875rem;
}

.order-meta {
  color: #9ca3af;
  font-size: 0.75rem;
}

.order-status {
  text-align: right;
}

.status-badge {
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
}

.order-date {
  color: #9ca3af;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.products-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.product-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-name {
  font-weight: 600;
  color: #111827;
  font-size: 0.875rem;
  margin: 0;
}

.product-metrics {
  display: flex;
  gap: 1rem;
}

.metric {
  color: #6b7280;
  font-size: 0.75rem;
}

.product-trend {
  display: flex;
  align-items: center;
}

.trend-icon {
  transition: transform 0.2s ease;
}

.trend-icon.up {
  color: #16a34a;
}

.trend-icon.down {
  color: #dc2626;
}

.product-item:hover .trend-icon {
  transform: scale(1.1);
}

.chart-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: #f9fafb;
  border-radius: 1rem;
  border: 2px dashed #e5e7eb;
  transition: all 0.3s ease;
}

.chart-placeholder:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.chart-icon {
  color: #9ca3af;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.chart-placeholder:hover .chart-icon {
  color: #6b7280;
  transform: scale(1.05);
}

.chart-text {
  color: #6b7280;
  font-weight: 500;
}

.chart-actions {
  display: flex;
  gap: 0.5rem;
}

.chart-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.chart-btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.chart-btn.active {
  background: #16a34a;
  color: white;
  border-color: #16a34a;
}

.chart-btn.active:hover {
  background: #15803d;
}

.impact-metrics {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.impact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;
}

.impact-item:hover {
  transform: translateX(4px);
}

.impact-icon {
  background: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.impact-item:hover .impact-icon {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.impact-icon.leaf {
  color: #16a34a;
}
.impact-icon.recycle {
  color: #0d9488;
}
.impact-icon.globe {
  color: #0369a1;
}

.impact-info {
  display: flex;
  flex-direction: column;
}

.impact-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.impact-label {
  color: #6b7280;
  font-size: 0.875rem;
}

.notification-count {
  background: #16a34a;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.notifications-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notification-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.notification-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateX(2px);
}

.notification-icon {
  background: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #16a34a;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.notification-item:hover .notification-icon {
  transform: scale(1.05);
}

.notification-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.notification-message {
  font-weight: 500;
  color: #111827;
  font-size: 0.875rem;
  margin: 0;
}

.notification-time {
  color: #9ca3af;
  font-size: 0.75rem;
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
  z-index: 1001;
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
  transform: scale(1.05);
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
  animation: gentle-bounce 3s ease-in-out infinite;
}

.modal-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
}

.modal-text {
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.coming-features {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
}

.coming-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
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
  transition: all 0.2s ease;
}

.coming-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(22, 163, 74, 0.1);
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
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-btn:hover {
  background: linear-gradient(to right, #15803d, #0f766e);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22, 163, 74, 0.2);
}

.modal-btn:active {
  transform: translateY(0);
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

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(22, 163, 74, 0);
  }
}

@keyframes gentle-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "orders"
      "products"
      "chart"
      "impact"
      "notifications";
  }

  .dashboard-title {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    padding: 1.5rem 1rem;
  }

  .header-content {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .dashboard-title {
    font-size: 1.75rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .dashboard-card {
    padding: 1.5rem;
  }

  .order-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .order-status {
    text-align: left;
    width: 100%;
  }

  .modal-content {
    margin: 1rem;
    width: calc(100% - 2rem);
  }

  .modal-body {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding: 0;
  }

  .dashboard-header {
    padding: 1rem;
  }

  .dashboard-title {
    font-size: 1.5rem;
  }

  .dashboard-subtitle {
    font-size: 1rem;
  }

  .dashboard-content {
    padding: 0 1rem 2rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .dashboard-card {
    padding: 1rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .product-metrics {
    flex-direction: column;
    gap: 0.25rem;
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

@media (prefers-color-scheme: dark) {
  .login-overlay-content,
  .modal-content {
    border: 2px solid rgba(22, 163, 74, 0.8);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  .stat-card,
  .dashboard-card,
  .order-item,
  .product-item,
  .notification-item {
    border: 2px solid #111827;
  }

  .stat-trend.up {
    background: #16a34a;
    color: white;
  }
}

.time-range-select:focus,
.view-all-btn:focus,
.metric-select:focus,
.chart-btn:focus,
.modal-close:focus,
.modal-btn:focus {
  outline: 2px solid #16a34a;
  outline-offset: 2px;
}

@media print {
  .login-overlay,
  .modal-overlay {
    display: none;
  }

  .dashboard-content {
    filter: none !important;
  }

  .dashboard-container {
    background: white;
  }
}
</style>
