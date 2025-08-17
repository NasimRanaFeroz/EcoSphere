<script>
import {
  Shield,
  FileText,
  Eye,
  Lock,
  Users,
  Scale,
  CheckCircle,
  AlertTriangle,
  Mail,
} from "lucide-vue-next";

export default {
  components: {
    Shield,
    FileText,
    Eye,
    Lock,
    Users,
    Scale,
    CheckCircle,
    AlertTriangle,
    Mail,
  },
  data() {
    return {
      activeTab: "privacy",
      tabs: [
        { id: "privacy", name: "Privacy Policy", icon: "Shield" },
        { id: "terms", name: "Terms & Conditions", icon: "FileText" },
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
  <div class="legal-page">
    <div class="legal-hero">
      <div class="hero-content">
        <div class="hero-icon">
          <Scale />
        </div>
        <h1>Legal Information</h1>
        <p>
          Your privacy and trust matter to us. Here's how we protect your data
          and outline our service terms.
        </p>
      </div>
    </div>

    <div class="legal-container">
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

      <div v-if="activeTab === 'privacy'" class="legal-card">
        <div class="card-header">
          <div class="header-content">
            <Shield class="header-icon" />
            <h2>Privacy Policy</h2>
          </div>
          <p class="update-date">Last updated: March 16, 2025</p>
        </div>

        <div class="card-body">
          <section class="legal-section">
            <div class="section-header">
              <div class="section-icon">
                <Eye />
              </div>
              <h3>Introduction</h3>
            </div>
            <p>
              At EcoSphere, we are committed to protecting your privacy and
              ensuring transparency about how we collect, use, and protect your
              personal information. This Privacy Policy explains our practices
              regarding data collection and use when you visit our website, make
              purchases, or interact with our services.
            </p>
          </section>

          <section class="legal-section">
            <div class="section-header">
              <div class="section-icon">
                <Users />
              </div>
              <h3>Information We Collect</h3>
            </div>
            <div class="section-content">
              <div class="info-group">
                <h4>Personal Information</h4>
                <ul>
                  <li>Name, email address, and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>
                    Payment information (processed securely through third-party
                    providers)
                  </li>
                  <li>Account credentials and preferences</li>
                </ul>
              </div>
              <div class="info-group">
                <h4>Usage Information</h4>
                <ul>
                  <li>Website interactions and browsing behavior</li>
                  <li>Device information and IP addresses</li>
                  <li>Cookie data and similar tracking technologies</li>
                  <li>Purchase history and product preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <div class="section-header">
              <div class="section-icon">
                <CheckCircle />
              </div>
              <h3>How We Use Your Information</h3>
            </div>
            <div class="usage-grid">
              <div class="usage-card">
                <h4>Order Processing</h4>
                <p>
                  Process orders, handle payments, arrange shipping, and provide
                  customer support.
                </p>
              </div>
              <div class="usage-card">
                <h4>Communication</h4>
                <p>
                  Send order confirmations, shipping updates, and important
                  account information.
                </p>
              </div>
              <div class="usage-card">
                <h4>Personalization</h4>
                <p>
                  Customize your shopping experience and recommend relevant
                  products.
                </p>
              </div>
              <div class="usage-card">
                <h4>Marketing</h4>
                <p>
                  Send newsletters and promotional content (with your consent).
                </p>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <div class="section-header">
              <div class="section-icon">
                <Lock />
              </div>
              <h3>Data Protection & Security</h3>
            </div>
            <p>
              We implement industry-standard security measures to protect your
              personal information, including SSL encryption, secure payment
              processing, and regular security audits. Your payment information
              is processed by certified third-party payment processors and is
              never stored on our servers.
            </p>
            <div class="notice-box">
              <AlertTriangle class="notice-icon" />
              <div>
                <h4>Your Rights</h4>
                <p>
                  You have the right to access, update, or delete your personal
                  information. Contact us at privacy@ecosphere.com to exercise
                  these rights.
                </p>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <h3>Cookies & Tracking</h3>
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience, analyze website traffic, and personalize content. You
              can control cookie preferences through your browser settings.
            </p>
          </section>

          <section class="legal-section">
            <h3>Third-Party Services</h3>
            <p>
              We work with trusted third-party service providers for payment
              processing, shipping, analytics, and marketing. These partners are
              bound by strict confidentiality agreements and only have access to
              information necessary to provide their services.
            </p>
          </section>

          <section class="legal-section contact-section">
            <h3>Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div class="contact-link">
              <Mail class="mail-icon" />
              <span>feroznasimrana@gmail.com</span>
            </div>
          </section>
        </div>
      </div>

      <div v-if="activeTab === 'terms'" class="legal-card">
        <div class="card-header">
          <div class="header-content">
            <FileText class="header-icon" />
            <h2>Terms & Conditions</h2>
          </div>
          <p class="update-date">Last updated: March 16, 2025</p>
        </div>

        <div class="card-body">
          <section class="legal-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using the EcoSphere website and services, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section class="legal-section">
            <h3>2. Products & Services</h3>
            <div class="section-content">
              <p>
                EcoSphere provides eco-friendly products and
                sustainability-focused services. All product descriptions,
                pricing, and availability are subject to change without notice.
              </p>
              <div class="notice-box">
                <h4>Product Quality Promise</h4>
                <p>
                  We guarantee that all products meet our strict eco-friendly
                  and quality standards. If you're not satisfied, our 30-day
                  return policy ensures your peace of mind.
                </p>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <h3>3. Orders & Payment</h3>
            <div class="grid-section">
              <div>
                <h4>Order Processing</h4>
                <ul>
                  <li>Orders are processed within 1-2 business days</li>
                  <li>We reserve the right to refuse or cancel orders</li>
                  <li>Order confirmation will be sent via email</li>
                  <li>Prices are subject to change without notice</li>
                </ul>
              </div>
              <div>
                <h4>Payment Terms</h4>
                <ul>
                  <li>Payment is due at time of order</li>
                  <li>We accept major credit cards and PayPal</li>
                  <li>All payments are processed securely</li>
                  <li>Prices include applicable taxes</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <h3>4. Shipping & Returns</h3>
            <div class="section-content">
              <div>
                <h4>Shipping Policy</h4>
                <p>
                  We offer carbon-neutral shipping on all orders. Free shipping
                  is available on orders over $50. Delivery times vary by
                  location but typically range from 3-7 business days for
                  standard shipping.
                </p>
              </div>
              <div>
                <h4>Return Policy</h4>
                <p>
                  We offer a 30-day satisfaction guarantee on all products.
                  Items must be unused and in original packaging. Return
                  shipping is free for defective items. Refunds will be
                  processed within 5-10 business days.
                </p>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <h3>5. User Conduct</h3>
            <p>
              Users agree to use our website and services responsibly and in
              accordance with all applicable laws. Prohibited activities
              include:
            </p>
            <ul>
              <li>Using the site for any unlawful purposes</li>
              <li>Attempting to interfere with site functionality</li>
              <li>Uploading malicious content or code</li>
              <li>Violating intellectual property rights</li>
              <li>Harassment or abuse of other users</li>
            </ul>
          </section>

          <section class="legal-section">
            <h3>6. Intellectual Property</h3>
            <p>
              All content on the EcoSphere website, including text, graphics,
              logos, images, and software, is the property of EcoSphere or its
              licensors and is protected by copyright and other intellectual
              property laws. Users may not reproduce, distribute, or create
              derivative works without express written permission.
            </p>
          </section>

          <section class="legal-section">
            <h3>7. Limitation of Liability</h3>
            <div class="warning-box">
              <p>
                EcoSphere shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of our products or services. Our total liability shall not
                exceed the amount paid for the specific product or service
                giving rise to the claim.
              </p>
            </div>
          </section>

          <section class="legal-section">
            <h3>8. Privacy</h3>
            <p>
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of our website and services, to
              understand our practices regarding the collection and use of your
              personal information.
            </p>
          </section>

          <section class="legal-section">
            <h3>9. Modifications</h3>
            <p>
              EcoSphere reserves the right to modify these terms at any time.
              Changes will be effective immediately upon posting on our website.
              Continued use of our services after changes are posted constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section class="legal-section contact-section">
            <h3>10. Contact Information</h3>
            <p>
              For questions about these Terms & Conditions, please contact us:
            </p>
            <div class="contact-info">
              <div class="contact-link">
                <Mail class="mail-icon" />
                <span>feroznasimrana@gmail.com</span>
              </div>
              <p>
                EcoSphere<br />
                221B Baker Street<br />
                London, UK<br />
              </p>
            </div>
          </section>
        </div>
      </div>

      <div class="legal-cta">
        <h2>Questions About Our Policies?</h2>
        <p>
          Our team is here to help clarify any questions you may have about our
          privacy practices or terms of service.
        </p>
        <a href="/contact-us" class="cta-button">
          <Mail class="button-icon" />
          <span>Contact Our Legal Team</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.legal-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f0fdf4, white, #f0fdf4);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Hero Section */
.legal-hero {
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

.legal-hero h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.legal-hero p {
  font-size: 1.25rem;
  color: #dcfce7;
  max-width: 36rem;
  margin: 0 auto;
}

/* Main Container */
.legal-container {
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
  width: 100%;
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

/* Legal Card */
.legal-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  margin-bottom: 3rem;
}

.card-header {
  background: linear-gradient(to right, #f0fdf4, #ecfdf5);
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #16a34a;
}

.card-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.update-date {
  color: #4b5563;
  margin-top: 0.5rem;
}

.card-body {
  padding: 2rem;
}

/* Legal Sections */
.legal-section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-icon {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-icon svg {
  width: 1rem;
  height: 1rem;
  color: white;
}

.legal-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.legal-section p {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.legal-section ul {
  color: #4b5563;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.legal-section li {
  margin-bottom: 0.5rem;
}

/* Info Groups */
.section-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-group h4 {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

/* Usage Grid */
.usage-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.usage-card {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.usage-card:nth-child(odd) {
  background: #f0fdf4;
  border-color: #d1fae5;
}

.usage-card:nth-child(even) {
  background: #ecfdf5;
  border-color: #a7f3d0;
}

.usage-card h4 {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

.usage-card p {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0;
}

/* Notice Boxes */
.notice-box {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1fae5;
  background: #f0fdf4;
  margin: 1rem 0;
}

.notice-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #0d9488;
  flex-shrink: 0;
}

.notice-box h4 {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
  margin-top: 0 !important;
}

.notice-box p {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0;
  margin-top: 0 !important;
}

.warning-box {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #fef3c7;
  background: #fffbeb;
  margin: 1rem 0;
}

.warning-box p {
  font-size: 0.875rem;
  color: #92400e;
  margin-bottom: 0;
  margin-top: 0 !important;
}

/* Grid Section */
.grid-section {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.grid-section ul {
  font-size: 0.875rem;
  padding-left: 1.25rem;
}

/* Contact Section */
.contact-section {
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #16a34a;
  margin-top: 0.5rem;
}

.mail-icon {
  width: 1rem;
  height: 1rem;
}

.contact-info {
  margin-top: 1rem;
}

.contact-info p {
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

/* CTA */
.legal-cta {
  background: linear-gradient(to right, #16a34a, #0d9488);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
}

.legal-cta h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.legal-cta p {
  color: #dcfce7;
  max-width: 48rem;
  margin: 0 auto 1.5rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #16a34a;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #f3f4f6;
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .usage-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .legal-hero h1 {
    font-size: 3rem;
  }

  .legal-container {
    padding: 3rem 2rem;
  }
}

@media (min-width: 1024px) {
  .legal-hero {
    padding: 5rem 0;
  }

  .legal-hero h1 {
    font-size: 3.75rem;
  }
}
</style>
