<script>
import {
  Truck,
  RotateCcw,
  Package,
  Clock,
  Leaf,
  Globe,
  Shield,
  CheckCircle,
  AlertCircle,
  Mail,
  Calculator,
  MapPin,
} from "lucide-vue-next";

export default {
  components: {
    Truck,
    RotateCcw,
    Package,
    Clock,
    Leaf,
    Globe,
    Shield,
    CheckCircle,
    AlertCircle,
    Mail,
    Calculator,
    MapPin,
  },
  data() {
    return {
      activeTab: "shipping",
      tabs: [
        { id: "shipping", name: "Shipping Policy", icon: "Truck" },
        { id: "returns", name: "Returns & Exchanges", icon: "RotateCcw" },
      ],
      shippingZones: [
        {
          zone: "Zone 1",
          regions: "Continental UK",
          standard: "3-5 days",
          express: "1-2 days",
          cost: "Free over $50",
        },
        {
          zone: "Zone 2",
          regions: "Alaska, Hawaii",
          standard: "5-7 days",
          express: "3-4 days",
          cost: "$9.99",
        },
        {
          zone: "Zone 3",
          regions: "Canada",
          standard: "7-10 days",
          express: "4-6 days",
          cost: "$15.99",
        },
        {
          zone: "Zone 4",
          regions: "International",
          standard: "10-15 days",
          express: "6-10 days",
          cost: "$25.99",
        },
      ],
      returnReasons: [
        {
          reason: "Defective/Damaged",
          timeframe: "30 days",
          cost: "Free return",
          process: "Automatic refund/replacement",
        },
        {
          reason: "Not as described",
          timeframe: "30 days",
          cost: "Free return",
          process: "Full refund available",
        },
        {
          reason: "Changed mind",
          timeframe: "30 days",
          cost: "Customer pays",
          process: "Refund minus shipping",
        },
        {
          reason: "Wrong size/color",
          timeframe: "30 days",
          cost: "Free exchange",
          process: "Exchange for correct item",
        },
      ],
    };
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<template>
  <div class="shipping-returns-page">
    <!-- Hero Section -->
    <div class="shipping-hero">
      <div class="hero-content">
        <div class="hero-icon">
          <Package />
        </div>
        <h1>Shipping & Returns</h1>
        <p>
          Fast, carbon-neutral shipping and hassle-free returns. We're committed
          to making your shopping experience as smooth as possible.
        </p>
      </div>
    </div>

    <div class="shipping-container">
      <!-- Tab Navigation -->
      <div class="tab-container">
        <div class="tab-wrapper">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="setActiveTab(tab.id)"
            :class="['tab-button', { 'active-tab': activeTab === tab.id }]"
          >
            <component :is="tab.icon" class="tab-icon" />
            <span>{{ tab.name }}</span>
          </button>
        </div>
      </div>

      <!-- Shipping Policy Content -->
      <div v-if="activeTab === 'shipping'" class="shipping-content">
        <!-- Eco-Friendly Promise -->
        <div class="eco-promise">
          <div class="promise-icon">
            <Leaf />
          </div>
          <h2>100% Carbon-Neutral Shipping</h2>
          <p>
            Every package we ship is completely carbon-neutral. We offset all
            emissions through verified reforestation projects and renewable
            energy initiatives.
          </p>
        </div>

        <!-- Shipping Options -->
        <div class="shipping-card">
          <div class="card-header">
            <Truck class="header-icon" />
            <h2>Shipping Options & Rates</h2>
          </div>

          <div class="card-body">
            <div class="shipping-options">
              <div class="option-card standard">
                <div class="option-header">
                  <Clock class="option-icon" />
                  <h3>Standard Shipping</h3>
                </div>
                <ul>
                  <li><strong>FREE</strong> on orders over $50</li>
                  <li>$5.99 on orders under $50</li>
                  <li>3-5 business days delivery</li>
                  <li>Carbon-neutral shipping</li>
                  <li>Package tracking included</li>
                </ul>
              </div>

              <div class="option-card express">
                <div class="option-header">
                  <Package class="option-icon" />
                  <h3>Express Shipping</h3>
                </div>
                <ul>
                  <li>$12.99 flat rate</li>
                  <li>1-2 business days delivery</li>
                  <li>Priority carbon-neutral shipping</li>
                  <li>Real-time tracking updates</li>
                  <li>Signature confirmation</li>
                </ul>
              </div>
            </div>

            <!-- Shipping Zones Table -->
            <div class="shipping-zones">
              <h3>Shipping Zones & Timeframes</h3>
              <div class="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Zone</th>
                      <th>Regions</th>
                      <th>Standard</th>
                      <th>Express</th>
                      <th>Base Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(zone, index) in shippingZones" :key="index">
                      <td>{{ zone.zone }}</td>
                      <td>{{ zone.regions }}</td>
                      <td>{{ zone.standard }}</td>
                      <td>{{ zone.express }}</td>
                      <td class="cost">{{ zone.cost }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Packaging & Sustainability -->
        <div class="packaging-card">
          <div class="card-header">
            <Globe class="header-icon" />
            <h2>Sustainable Packaging</h2>
          </div>

          <div class="packaging-features">
            <div class="feature">
              <div class="feature-icon">
                <Leaf />
              </div>
              <h3>100% Plastic-Free</h3>
              <p>All packaging materials are biodegradable or recyclable</p>
            </div>

            <div class="feature">
              <div class="feature-icon">
                <Package />
              </div>
              <h3>Minimal Packaging</h3>
              <p>Right-sized boxes to reduce waste and shipping emissions</p>
            </div>

            <div class="feature">
              <div class="feature-icon">
                <Globe />
              </div>
              <h3>Local Fulfillment</h3>
              <p>
                Ships from the closest warehouse to minimize transport distance
              </p>
            </div>
          </div>
        </div>

        <!-- Shipping FAQs -->
        <div class="faq-card">
          <h2>Shipping FAQs</h2>

          <div class="faq-items">
            <div class="faq-item">
              <h3>When will my order ship?</h3>
              <p>
                Orders placed before 2 PM EST ship the same day. Weekend orders
                ship on the next business day.
              </p>
            </div>

            <div class="faq-item">
              <h3>Can I track my package?</h3>
              <p>
                Yes! You'll receive tracking information via email once your
                order ships. You can also track in your account dashboard.
              </p>
            </div>

            <div class="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>
                We ship to over 50 countries worldwide. International orders may
                be subject to customs fees determined by the destination
                country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Returns & Exchanges Content -->
      <div v-if="activeTab === 'returns'" class="returns-content">
        <!-- Satisfaction Guarantee -->
        <div class="satisfaction-guarantee">
          <div class="guarantee-icon">
            <Shield />
          </div>
          <h2>30-Day Satisfaction Guarantee</h2>
          <p>
            Not completely happy with your purchase? We offer free returns and
            exchanges within 30 days of delivery, no questions asked.
          </p>
        </div>

        <!-- Return Process -->
        <div class="returns-card">
          <div class="card-header">
            <RotateCcw class="header-icon" />
            <h2>How to Return Items</h2>
          </div>

          <div class="card-body">
            <div class="return-steps">
              <div class="step">
                <div class="step-number">1</div>
                <h3>Start Return</h3>
                <p>
                  Log into your account or email us to initiate the return
                  process
                </p>
              </div>

              <div class="step">
                <div class="step-number">2</div>
                <h3>Get Label</h3>
                <p>
                  We'll email you a prepaid return shipping label within 24
                  hours
                </p>
              </div>

              <div class="step">
                <div class="step-number">3</div>
                <h3>Pack & Ship</h3>
                <p>
                  Package items in original packaging and drop off at any
                  shipping location
                </p>
              </div>

              <div class="step">
                <div class="step-number">4</div>
                <h3>Get Refund</h3>
                <p>
                  Refund processed within 3-5 business days of receiving your
                  return
                </p>
              </div>
            </div>

            <!-- Return Reasons Table -->
            <div class="return-reasons">
              <h3>Return Policy by Reason</h3>
              <div class="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Reason</th>
                      <th>Timeframe</th>
                      <th>Return Cost</th>
                      <th>Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in returnReasons" :key="index">
                      <td>{{ item.reason }}</td>
                      <td>{{ item.timeframe }}</td>
                      <td class="cost">{{ item.cost }}</td>
                      <td>{{ item.process }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Exchange Policy -->
        <div class="exchange-card">
          <div class="card-header">
            <RotateCcw class="header-icon" />
            <h2>Exchanges</h2>
          </div>

          <div class="exchange-content">
            <div class="exchange-available">
              <h3>When Exchanges Are Available</h3>
              <ul>
                <li>
                  <CheckCircle class="check-icon" />
                  <span>Wrong size or color received</span>
                </li>
                <li>
                  <CheckCircle class="check-icon" />
                  <span>Defective or damaged items</span>
                </li>
                <li>
                  <CheckCircle class="check-icon" />
                  <span>Item not as described on website</span>
                </li>
                <li>
                  <CheckCircle class="check-icon" />
                  <span>Size/fit issues within 30 days</span>
                </li>
              </ul>
            </div>

            <div class="exchange-process">
              <h3>Exchange Process</h3>
              <div class="process-cards">
                <div class="process-card free">
                  <h4>Free Exchanges</h4>
                  <p>
                    For defective items or our mistakes, we provide free return
                    shipping and free shipping on the replacement item.
                  </p>
                </div>

                <div class="process-card standard">
                  <h4>Standard Exchanges</h4>
                  <p>
                    For size/color changes, return the original item and place a
                    new order. We'll refund the return once received.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Important Notes -->
        <div class="notes-card">
          <h2>Important Return Information</h2>

          <div class="notes-content">
            <div class="warning-box">
              <AlertCircle class="warning-icon" />
              <div>
                <h3>Return Requirements</h3>
                <ul>
                  <li>Items must be unused and in original packaging</li>
                  <li>Original tags and labels must be attached</li>
                  <li>
                    Personal care items cannot be returned for hygiene reasons
                  </li>
                  <li>Custom or personalized items are non-returnable</li>
                </ul>
              </div>
            </div>

            <div class="info-grid">
              <div class="info-card">
                <h3>Refund Timeline</h3>
                <ul>
                  <li>1-2 days: Return received and inspected</li>
                  <li>3-5 days: Refund processed to original payment</li>
                  <li>5-10 days: Refund appears in your account</li>
                </ul>
              </div>

              <div class="info-card">
                <h3>Need Help?</h3>
                <p>
                  Our customer service team is here to help with any return
                  questions.
                </p>
                <div class="contact-link">
                  <Mail class="mail-icon" />
                  <span>returns@ecosphere.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="shipping-cta">
        <h2>Questions About Shipping or Returns?</h2>
        <p>
          Our customer service team is available to help with any shipping or
          return questions you may have.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button primary">
            <Mail class="button-icon" />
            <span>Contact Support</span>
          </a>
          <a href="/faq" class="cta-button secondary">
            <Package class="button-icon" />
            <span>View FAQ</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Base Styles */
.shipping-returns-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Hero Section */
.shipping-hero {
  background: linear-gradient(to right, #16a34a, #0d9488, #16a34a);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-content {
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  backdrop-filter: blur(4px);
}

.hero-icon svg {
  width: 2rem;
  height: 2rem;
  color: white;
}

.shipping-hero h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.shipping-hero p {
  font-size: 1.25rem;
  color: #dcfce7;
  max-width: 36rem;
  margin: 0 auto;
}

/* Main Container */
.shipping-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}

/* Tab Navigation */
.tab-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.tab-wrapper {
  background: white;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  background: transparent;
  cursor: pointer;
}

.tab-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.tab-button:not(.active-tab) {
  color: #4b5563;
}

.tab-button:not(.active-tab):hover {
  background: #f0fdf4;
  color: #16a34a;
}

.active-tab {
  background: linear-gradient(to right, #22c55e, #0d9488);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Promo Sections */
.eco-promise,
.satisfaction-guarantee {
  background: linear-gradient(to right, #16a34a, #0d9488);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.promise-icon,
.guarantee-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  backdrop-filter: blur(4px);
}

.promise-icon svg,
.guarantee-icon svg {
  width: 2rem;
  height: 2rem;
  color: white;
}

.eco-promise h2,
.satisfaction-guarantee h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.eco-promise p,
.satisfaction-guarantee p {
  font-size: 1.125rem;
  color: #dcfce7;
  max-width: 48rem;
  margin: 0 auto;
}

/* Cards */
.shipping-card,
.returns-card,
.packaging-card,
.faq-card,
.exchange-card,
.notes-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 2rem;
}

.faq-card,
.notes-card {
  padding-left: 2rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.card-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.header-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #16a34a;
}

.card-body {
  padding: 1.5rem;
}

/* Shipping Options */
.shipping-options {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.option-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
}

.option-card.standard {
  background: #f0fdf4;
  border: 1px solid #d1fae5;
}

.option-card.express {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
}

.option-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.option-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.option-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.option-card.standard .option-icon {
  color: #16a34a;
}

.option-card.express .option-icon {
  color: #0d9488;
}

.option-card ul {
  color: #4b5563;
  padding-left: 1.5rem;
}

.option-card li {
  margin-bottom: 0.5rem;
}

/* Tables */
.shipping-zones,
.return-reasons {
  margin-top: 2rem;
}

.shipping-zones h3,
.return-reasons h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

th {
  background: #f9fafb;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

td {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #4b5563;
}

td.cost {
  color: #16a34a;
  font-weight: 500;
}

tr:hover {
  background: #f9fafb;
}

/* Packaging Features */
.packaging-features {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
}

.feature {
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: #f0fdf4;
  border: 1px solid #d1fae5;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #22c55e, #16a34a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.feature-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.feature h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.feature p {
  font-size: 0.875rem;
  color: #4b5563;
}

/* FAQ */
.faq-items {
  padding: 1.5rem;
}

.faq-item {
  padding: 1rem 0 1rem 1rem;
  border-left: 4px solid #22c55e;
  margin-bottom: 1.5rem;
}

.faq-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.faq-item p {
  font-size: 0.875rem;
  color: #4b5563;
}

/* Return Steps */
.return-steps {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.step {
  text-align: center;
  padding: 1.5rem;
}

.step-number {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.step h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.step p {
  font-size: 0.875rem;
  color: #4b5563;
}

/* Exchange Content */
.exchange-content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 1.5rem;
}

.exchange-available h3,
.exchange-process h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.exchange-available ul {
  color: #4b5563;
}

.exchange-available li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #22c55e;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.process-cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

.process-card {
  padding: 1rem;
  border-radius: 0.5rem;
}

.process-card.free {
  background: #f0fdf4;
  border: 1px solid #d1fae5;
}

.process-card.standard {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
}

.process-card h4 {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

.process-card p {
  font-size: 0.875rem;
  color: #4b5563;
}

/* Notes Card */
.notes-content {
  padding: 1.5rem;
}

.warning-box {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #fffbeb;
  border: 1px solid #fef3c7;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.warning-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #d97706;
  flex-shrink: 0;
}

.warning-box h3 {
  font-weight: 500;
  color: #92400e;
  margin-bottom: 0.5rem;
}

.warning-box ul {
  color: #92400e;
  font-size: 0.875rem;
}

.warning-box li {
  margin-bottom: 0.25rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

.info-card {
  padding: 1rem;
  border-radius: 0.5rem;
  background: #f0fdf4;
  border: 1px solid #d1fae5;
}

.info-card h3 {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

.info-card ul {
  color: #4b5563;
  font-size: 0.875rem;
}

.info-card li {
  margin-bottom: 0.25rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0d9488;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.mail-icon {
  width: 1rem;
  height: 1rem;
}

/* CTA */
.shipping-cta {
  background: linear-gradient(to right, #16a34a, #0d9488);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
  margin-top: 2rem;
}

.shipping-cta h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.shipping-cta p {
  color: #dcfce7;
  max-width: 48rem;
  margin: 0 auto 1.5rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: white;
  color: #16a34a;
}

.cta-button.primary:hover {
  background: #f3f4f6;
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary {
  border: 2px solid white;
  color: #16a34a;
}

.cta-button.secondary:hover {
  background: white;
  color: #16a34a;
  transform: scale(1.05);
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .shipping-options {
    grid-template-columns: repeat(2, 1fr);
  }

  .packaging-features {
    grid-template-columns: repeat(3, 1fr);
  }

  .return-steps {
    grid-template-columns: repeat(4, 1fr);
  }

  .exchange-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-buttons {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .shipping-hero {
    padding: 5rem 0;
  }

  .shipping-hero h1 {
    font-size: 3rem;
  }
}
</style>
