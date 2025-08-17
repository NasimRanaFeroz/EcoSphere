<script>
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Leaf,
  Users,
  MessageSquare,
} from "lucide-vue-next";
import { send } from "@emailjs/browser";

export default {
  components: {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    Leaf,
    Users,
    MessageSquare,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSubmitting: false,
      submitStatus: null,
      selectedTopic: "",
      contactTopics: [
        { id: "general", name: "General Inquiry", icon: "MessageSquare" },
        { id: "product", name: "Product Questions", icon: "Leaf" },
        { id: "order", name: "Order Support", icon: "Users" },
        { id: "partnership", name: "Partnership", icon: "Users" },
        { id: "sustainability", name: "Sustainability", icon: "Leaf" },
        { id: "other", name: "Other", icon: "MessageSquare" },
      ],
    };
  },
  methods: {
    handleInputChange(e) {
      this.formData[e.target.name] = e.target.value;
    },
    handleTopicSelect(topicId) {
      this.selectedTopic = topicId;
      const topic = this.contactTopics.find((t) => t.id === topicId);
      this.formData.subject = topic ? topic.name : "";
    },
    async handleSubmit(e) {
      e.preventDefault();

      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.message
      ) {
        this.submitStatus = "error";
        return;
      }

      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        const templateParams = {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject || "Contact Form Submission",
          message: this.formData.message,
          to_name: "EcoSphere Team",
        };

        await send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.VUE_APP_EMAILJS_PUBLIC_KEY
        );

        this.submitStatus = "success";
        this.formData = { name: "", email: "", subject: "", message: "" };
        this.selectedTopic = "";
      } catch (error) {
        console.error("EmailJS Error:", error);
        this.submitStatus = "error";
      } finally {
        this.isSubmitting = false;
      }
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
  <div class="eco-contact">
    <div class="eco-contact-hero">
      <div class="eco-contact-hero-content">
        <div class="eco-contact-hero-icon">
          <Mail />
        </div>
        <h1>Get in Touch</h1>
        <p>
          Have questions about our eco-friendly products or sustainability
          practices? We'd love to hear from you!
        </p>
      </div>
    </div>

    <div class="eco-contact-container">
      <div class="eco-contact-grid">
        <div class="eco-contact-info">
          <div class="eco-contact-info-card">
            <h2>Contact Information</h2>

            <div class="eco-contact-info-item">
              <div class="eco-contact-info-icon">
                <Mail />
              </div>
              <div>
                <h3>Email</h3>
                <p>feroznasimrana@gmail.com</p>
                <p>mahisaakhi@gmail.com</p>
              </div>
            </div>

            <div class="eco-contact-info-item">
              <div class="eco-contact-info-icon">
                <Phone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+82 132-2814-2082</p>
                <p class="eco-contact-info-small">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>

            <div class="eco-contact-info-item">
              <div class="eco-contact-info-icon">
                <MapPin />
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  221B Baker Street<br />
                  London, UK
                </p>
              </div>
            </div>

            <div class="eco-contact-info-item">
              <div class="eco-contact-info-icon">
                <Clock />
              </div>
              <div>
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday:
                  Closed
                </p>
              </div>
            </div>

            <div class="eco-contact-promise">
              <div class="eco-contact-promise-header">
                <Leaf />
                <h3>Our Promise</h3>
              </div>
              <p>
                We respond to all inquiries within 24 hours and are committed to
                providing exceptional, eco-conscious customer service.
              </p>
            </div>
          </div>
        </div>

        <div class="eco-contact-form">
          <div class="eco-contact-form-card">
            <h2>Send us a Message</h2>
            <p>
              We'd love to hear from you. Choose a topic and send us a message!
            </p>

            <div class="eco-contact-topics">
              <label>What can we help you with?</label>
              <div class="eco-contact-topics-grid">
                <button
                  v-for="topic in contactTopics"
                  :key="topic.id"
                  type="button"
                  @click="handleTopicSelect(topic.id)"
                  :class="[
                    'eco-contact-topic-btn',
                    selectedTopic === topic.id
                      ? 'eco-contact-topic-btn-active'
                      : '',
                  ]"
                >
                  <component :is="topic.icon" />
                  <span>{{ topic.name }}</span>
                </button>
              </div>
            </div>

            <form @submit.prevent="handleSubmit">
              <div class="eco-contact-form-grid">
                <div>
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="formData.name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="formData.email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  v-model="formData.subject"
                  placeholder="Brief subject line"
                />
              </div>

              <div>
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="eco-contact-submit-btn"
              >
                <span
                  v-if="isSubmitting"
                  class="eco-contact-submit-spinner"
                ></span>
                <template v-else>
                  <Send />
                  <span>Send Message</span>
                </template>
              </button>

              <div
                v-if="submitStatus === 'success'"
                class="eco-contact-alert eco-contact-alert-success"
              >
                <CheckCircle />
                <div>
                  <p>Message sent successfully!</p>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              </div>

              <div
                v-if="submitStatus === 'error'"
                class="eco-contact-alert eco-contact-alert-error"
              >
                <AlertCircle />
                <div>
                  <p>Failed to send message</p>
                  <p>
                    Please check your information and try again, or email us
                    directly.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="eco-contact-cta">
        <h2>Join Our Eco-Community</h2>
        <p>
          Stay updated on our latest sustainable products, eco-tips, and
          environmental initiatives by following us on social media!
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.eco-contact {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #f0fdf4);
}

.eco-contact-hero {
  background: linear-gradient(to right, #16a34a, #0d9488, #16a34a);
  color: white;
  padding: 5rem 0;
}

.eco-contact-hero-content {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.eco-contact-hero-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  margin: 0 auto 1.5rem;
}

.eco-contact-hero h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.eco-contact-hero p {
  font-size: 1.25rem;
  color: #dcfce7;
  max-width: 42rem;
  margin: 0 auto;
}

.eco-contact-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.eco-contact-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 4rem;
}

.eco-contact-info-card,
.eco-contact-form-card {
  background: white;
  border-radius: 1rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-top: 4rem;
}

.eco-contact-info h2,
.eco-contact-form h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
}

.eco-contact-form h2 {
  margin-bottom: 0.5rem;
}

.eco-contact-form p {
  color: #4b5563;
  margin-bottom: 2rem;
}

.eco-contact-info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.eco-contact-info-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.eco-contact-info-icon svg {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
}

.eco-contact-info-item h3 {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.eco-contact-info-item p {
  color: #4b5563;
}

.eco-contact-info-small {
  font-size: 0.875rem;
  color: #6b7280 !important;
}

.eco-contact-promise {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(to right, #f0fdf4, #ecfdf5);
  border-radius: 0.75rem;
  border: 1px solid #d1fae5;
}

.eco-contact-promise-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.eco-contact-promise-header svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #16a34a;
}

.eco-contact-promise-header h3 {
  font-weight: 600;
  color: #166534;
}

.eco-contact-promise p {
  font-size: 0.875rem;
  color: #166534;
}

.eco-contact-topics {
  margin-bottom: 2rem;
}

.eco-contact-topics label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 1rem;
}

.eco-contact-topics-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, 1fr);
}

.eco-contact-topic-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}

.eco-contact-topic-btn:hover {
  border-color: #86efac;
  background: #f0fdf4;
}

.eco-contact-topic-btn-active {
  background: linear-gradient(to right, #22c55e, #0d9488) !important;
  color: white !important;
  border-color: transparent !important;
}

.eco-contact-topic-btn svg {
  width: 1rem;
  height: 1rem;
}

.eco-contact-form-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1.5rem;
}

.eco-contact-form label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.eco-contact-form input,
.eco-contact-form textarea {
  width: 90%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
}

#subject {
  width: 95% !important;
}

.eco-contact-form input:focus,
.eco-contact-form textarea:focus {
  outline: none;
  border-color: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
}

.eco-contact-form textarea {
  min-height: 9rem;
  resize: vertical;
  margin-bottom: 2rem;
  width: 95%;
}

.eco-contact-submit-btn {
  width: 100%;
  background: linear-gradient(to right, #22c55e, #0d9488);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
}

.eco-contact-submit-btn:hover {
  background: linear-gradient(to right, #16a34a, #0d9488);
  transform: scale(1.01);
}

.eco-contact-submit-btn:disabled {
  background: linear-gradient(to right, #9ca3af, #6b7280);
  transform: none;
  cursor: not-allowed;
}

.eco-contact-submit-btn svg {
  width: 1.25rem;
  height: 1.25rem;
}

.eco-contact-submit-spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 9999px;
  animation: spin 1s linear infinite;
}

.eco-contact-alert {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.eco-contact-alert-success {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}

.eco-contact-alert-error {
  background: #fef2f2;
  border: 1px solid #fecaca;
}

.eco-contact-alert svg {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.eco-contact-alert-success svg {
  color: #16a34a;
}

.eco-contact-alert-error svg {
  color: #dc2626;
}

.eco-contact-alert p:first-child {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.eco-contact-alert-success p:first-child {
  color: #166534;
}

.eco-contact-alert-error p:first-child {
  color: #991b1b;
}

.eco-contact-alert p:last-child {
  font-size: 0.875rem;
}

.eco-contact-alert-success p:last-child {
  color: #166534;
}

.eco-contact-alert-error p:last-child {
  color: #991b1b;
}

.eco-contact-cta {
  background: linear-gradient(to right, #16a34a, #0d9488);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
}

.eco-contact-cta h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.eco-contact-cta p {
  color: #dcfce7;
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto 2rem;
}

.eco-contact-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.eco-contact-social a {
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.eco-contact-social a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.eco-contact-social a::before {
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 0.125rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 1024px) {
  .eco-contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .eco-contact-form {
    grid-column: span 2;
  }

  .eco-contact-topics-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
