<script>
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Leaf,
  Heart,
  Users,
  Globe,
} from "lucide-vue-next";

export default {
  name: "TestimonialsComponent",
  components: {
    ChevronLeft,
    ChevronRight,
    Star,
    Quote,
    Leaf,
    Heart,
    Users,
    Globe,
  },
  data() {
    return {
      currentIndex: 0,
      interval: null,
      testimonials: [
        {
          name: "Sarah Mitchell",
          role: "Environmental Activist",
          location: "Seattle, WA",
          rating: 5,
          text: "EcoSphere has completely transformed how I shop. Their curated selection of sustainable products makes it so easy to live an eco-friendly lifestyle without compromising on quality.",
          category: "sustainability",
          icon: "Leaf",
        },
        {
          name: "David Chen",
          role: "Corporate Consultant",
          location: "Austin, TX",
          rating: 5,
          text: "As a parent, I want to leave a better world for my children. EcoSphere's products give me peace of mind knowing I'm making choices that protect their future.",
          category: "family",
          icon: "Heart",
        },
        {
          name: "Maria Rodriguez",
          role: "Small Business Owner",
          location: "Miami, FL",
          rating: 5,
          text: "The community aspect of EcoSphere is incredible. I've connected with like-minded individuals and learned so much about sustainable living practices.",
          category: "community",
          icon: "Users",
        },
        {
          name: "James Thompson",
          role: "Marine Biologist",
          location: "San Diego, CA",
          rating: 5,
          text: "Knowing that my purchases help divert plastic from our oceans means everything to me. EcoSphere is making a real difference in environmental conservation.",
          category: "impact",
          icon: "Globe",
        },
        {
          name: "Emma Wilson",
          role: "College Student",
          location: "Portland, OR",
          rating: 5,
          text: "EcoSphere proves that sustainable living doesn't have to be expensive or complicated. Their affordable options help students like me make conscious choices.",
          category: "accessibility",
          icon: "Leaf",
        },
        {
          name: "Michael Johnson",
          role: "Corporate Consultant",
          location: "New York, NY",
          rating: 5,
          text: "The quality of EcoSphere's products is unmatched. I've replaced most of my household items with their eco-friendly alternatives and couldn't be happier.",
          category: "quality",
          icon: "Heart",
        },
      ],
    };
  },
  computed: {
    currentTestimonial() {
      return this.testimonials[this.currentIndex];
    },
  },
  methods: {
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.resetAutoPlay();
    },
    prevTestimonial() {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
      this.resetAutoPlay();
    },
    goToTestimonial(index) {
      this.currentIndex = index;
      this.resetAutoPlay();
    },
    getIcon(iconName) {
      const icons = {
        Leaf: Leaf,
        Heart: Heart,
        Users: Users,
        Globe: Globe,
      };
      return icons[iconName] || Leaf;
    },
    startAutoPlay() {
      this.clearAutoPlay();
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 5000);
    },
    clearAutoPlay() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    resetAutoPlay() {
      this.clearAutoPlay();
      setTimeout(() => {
        this.startAutoPlay();
      }, 10000);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.clearAutoPlay();
  },
};
</script>

<template>
  <div class="testimonials-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">What Our Community Says</h2>
        <p class="section-subtitle">
          Real stories from people who are making a difference through
          sustainable choices
        </p>
      </div>

      <div class="testimonials-carousel">
        <div class="main-testimonial">
          <div class="testimonial-content">
            <div class="quote-icon">
              <Quote class="quote-icon-svg" />
            </div>

            <div class="rating">
              <Star
                v-for="i in currentTestimonial.rating"
                :key="i"
                class="star-icon"
              />
            </div>

            <blockquote class="testimonial-text">
              "{{ currentTestimonial.text }}"
            </blockquote>

            <div class="testimonial-author">
              <div class="author-avatar">
                <div class="avatar-icon">
                  <component
                    :is="getIcon(currentTestimonial.icon)"
                    class="avatar-icon-svg"
                  />
                </div>
              </div>
              <div class="author-info">
                <h4 class="author-name">{{ currentTestimonial.name }}</h4>
                <p class="author-role">{{ currentTestimonial.role }}</p>
                <p class="author-location">{{ currentTestimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button @click="prevTestimonial" class="control-button" type="button">
            <ChevronLeft class="control-icon" />
          </button>
          <button @click="nextTestimonial" class="control-button" type="button">
            <ChevronRight class="control-icon" />
          </button>
        </div>
      </div>

      <div class="testimonial-indicators">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          @click="goToTestimonial(index)"
          :class="['indicator', { active: index === currentIndex }]"
          type="button"
        >
          <span class="sr-only">Go to testimonial {{ index + 1 }}</span>
        </button>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(testimonial, index) in testimonials.slice(0, 4)"
          :key="index"
          class="testimonial-card"
        >
          <div class="card-icon">
            <component :is="getIcon(testimonial.icon)" class="card-icon-svg" />
          </div>
          <div class="card-rating">
            <Star
              v-for="i in testimonial.rating"
              :key="i"
              class="card-star-icon"
            />
          </div>
          <p class="card-text">"{{ testimonial.text.substring(0, 120) }}..."</p>
          <div class="card-author">
            <h5>{{ testimonial.name }}</h5>
            <p>{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.testimonials-section {
  padding: 80px 0;
  background: linear-gradient(to bottom right, #f0fdf4, #ecfdf5);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto;
}

.testimonials-carousel {
  position: relative;
  margin-bottom: 40px;
}

.main-testimonial {
  background: linear-gradient(to right, #16a34a, #0d9488);
  border-radius: 24px;
  padding: 60px 40px;
  color: white;
  position: relative;
  overflow: hidden;
}

.main-testimonial::before {
  content: "";
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
}

.testimonial-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.quote-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  backdrop-filter: blur(4px);
}

.quote-icon-svg {
  width: 32px;
  height: 32px;
  color: white;
}

.rating {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 30px;
}

.star-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  color: #fbbf24;
}

.testimonial-text {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 40px;
  font-style: italic;
  color: #dcfce7;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.author-avatar {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.avatar-icon-svg {
  color: white;
}

.author-info {
  text-align: left;
}

.author-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.author-role {
  font-size: 1rem;
  color: #dcfce7;
  margin-bottom: 2px;
}

.author-location {
  font-size: 0.875rem;
  color: #bbf7d0;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
}

.control-button {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  margin: 0 1rem;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  pointer-events: all;
}

.control-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.control-icon {
  width: 20px;
  height: 20px;
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: linear-gradient(to right, #16a34a, #0d9488);
  transform: scale(1.2);
}

.indicator:hover {
  background: #9ca3af;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
}

.card-icon-svg {
  width: 24px;
  height: 24px;
}

.card-rating {
  display: flex;
  gap: 4px;
  margin-bottom: 15px;
}

.card-star-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  color: #fbbf24;
}

.card-text {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-author h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.card-author p {
  font-size: 0.875rem;
  color: #6b7280;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 768px) {
  .main-testimonial {
    padding: 80px 60px;
  }

  .testimonial-text {
    font-size: 1.75rem;
  }

  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .author-info {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 767px) {
  .testimonial-author {
    flex-direction: column;
    text-align: center;
  }

  .author-info {
    text-align: center;
  }

  .testimonial-text {
    font-size: 1.25rem;
  }

  .carousel-controls {
    position: static;
    transform: none;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
}
</style>
