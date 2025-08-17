<script>
import {
  Leaf,
  Heart,
  Users,
  Globe,
  Award,
  Target,
  Recycle,
  TreePine,
  Shield,
  ArrowRight,
} from "lucide-vue-next";

export default {
  components: {
    Leaf,
    Heart,
    Users,
    Globe,
    Award,
    Target,
    Recycle,
    TreePine,
    Shield,
    ArrowRight,
  },
  data() {
    return {
      activeValue: 0,
      coreValues: [
        {
          icon: "Leaf",
          title: "Sustainability First",
          description:
            "Every decision we make prioritizes environmental impact and long-term planetary health.",
          color: "green-gradient",
        },
        {
          icon: "Heart",
          title: "Community Care",
          description:
            "We believe in supporting both our customers and the global community through ethical practices.",
          color: "teal-gradient",
        },
        {
          icon: "Shield",
          title: "Quality Promise",
          description:
            "Premium eco-friendly products that never compromise on performance or durability.",
          color: "green-teal-gradient",
        },
        {
          icon: "Globe",
          title: "Global Impact",
          description:
            "Creating positive change that extends beyond individual purchases to worldwide environmental healing.",
          color: "teal-green-gradient",
        },
      ],
      teamMembers: [
        {
          name: "Nasim Rana Feroz",
          role: "Founder & CEO",
          bio: "Environmental scientist turned entrepreneur, passionate about creating systemic change through sustainable commerce.",
          expertise: "Sustainability Strategy",
        },
        {
          name: "Mahisa Akhi",
          role: "Head of Product",
          bio: "Former textile engineer specializing in eco-friendly materials and zero-waste product design.",
          expertise: "Product Innovation",
        },
        {
          name: "Tuba Israt Fiha",
          role: "Sustainability Director",
          bio: "Marine biologist dedicated to reducing ocean plastic and promoting circular economy principles.",
          expertise: "Environmental Impact",
        },
        {
          name: "Mehejabin Sumu",
          role: "Community Manager",
          bio: "Building bridges between conscious consumers and sustainable brands to create lasting positive change.",
          expertise: "Community Building",
        },
      ],
      impactStats: [
        {
          number: "2.3M",
          label: "Plastic items diverted from oceans",
          icon: "Recycle",
        },
        {
          number: "15,000",
          label: "Trees saved through our packaging",
          icon: "TreePine",
        },
        {
          number: "50,000+",
          label: "Families living sustainably",
          icon: "Users",
        },
        { number: "100%", label: "Carbon neutral operations", icon: "Globe" },
      ],
    };
  },
  methods: {
    setActiveValue(index) {
      this.activeValue = index;
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
  <div class="about-page">
    <div class="hero-section">
      <div class="hero-content">
        <div class="logo-container">
          <div class="logo-circle">
            <img
              src="../assets/images/logo&name.jpg"
              alt="ES"
              class="logo-image"
            />
          </div>
          <h1 class="logo-text">EcoSphere</h1>
          <p class="hero-subtext">
            Nurturing a sustainable future, one choice at a time
          </p>
        </div>
        <p class="hero-description">
          We're more than just an eco-friendly store – we're a community of
          changemakers committed to healing our planet through mindful
          consumption and sustainable living.
        </p>
      </div>
      <div class="floating-element floating-element-1"></div>
      <div class="floating-element floating-element-2"></div>
      <div class="floating-element floating-element-3"></div>
    </div>

    <div class="mission-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Our Mission</h2>
        </div>

        <div class="mission-content">
          <div class="mission-text">
            <p class="mission-paragraph">
              At EcoSphere, we believe that small changes can create monumental
              impact. Our mission is to make sustainable living accessible,
              affordable, and enjoyable for everyone.
            </p>
            <p class="mission-paragraph">
              We carefully curate products that align with our values of
              environmental stewardship, social responsibility, and exceptional
              quality. Every item in our collection serves a purpose: to reduce
              waste, minimize environmental impact, and support sustainable
              practices.
            </p>
            <p class="mission-paragraph">
              By choosing EcoSphere, you're not just buying products – you're
              investing in a future where businesses prioritize people and
              planet alongside profit.
            </p>
          </div>

          <div class="impact-stats">
            <div
              v-for="(stat, index) in impactStats"
              :key="index"
              class="stat-card"
            >
              <div class="stat-icon-container">
                <component :is="stat.icon" class="stat-icon" />
              </div>
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="values-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Our Core Values</h2>
          <p class="section-subheader">
            These principles guide every decision we make and every product we
            choose to offer.
          </p>
        </div>

        <div class="values-grid">
          <div
            v-for="(value, index) in coreValues"
            :key="index"
            class="value-card"
            @mouseenter="setActiveValue(index)"
          >
            <div :class="['value-icon-container', value.color]">
              <component :is="value.icon" class="value-icon" />
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="team-section">
      <div class="section-container">
        <div class="section-header">
          <h2>Meet Our Team</h2>
          <p class="section-subheader">
            Passionate individuals united by a shared vision for a sustainable
            future.
          </p>
        </div>

        <div class="team-grid">
          <div
            v-for="(member, index) in teamMembers"
            :key="index"
            class="team-card"
          >
            <div class="team-card-header">
              <div class="team-member-icon">
                <Users class="team-icon" />
              </div>
            </div>
            <div class="team-card-body">
              <h3 class="team-member-name">{{ member.name }}</h3>
              <p class="team-member-role">{{ member.role }}</p>
              <p class="team-member-bio">{{ member.bio }}</p>
              <div class="team-member-expertise">
                <Award class="expertise-icon" />
                <span>{{ member.expertise }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <div class="cta-container">
        <h2 class="cta-title">Join the EcoSphere Movement</h2>
        <p class="cta-text">
          Together, we can create a world where sustainable choices are the
          norm, not the exception. Every purchase you make is a vote for the
          kind of future you want to see.
        </p>
        <div class="cta-buttons">
          <a href="/shop" class="cta-button cta-button-primary">
            <span>Explore Our Products</span>
            <ArrowRight class="button-icon" />
          </a>
          <a href="/contact-us" class="cta-button cta-button-secondary">
            <span>Get in Touch</span>
            <Heart class="button-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
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

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 15px;
}

.section-subheader {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto;
}

.hero-section {
  position: relative;
  background: linear-gradient(to right, #16a34a, #0d9488, #16a34a);
  color: white;
  padding: 80px 0;
  overflow: hidden;
}

.hero-content {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  z-index: 2;
}

.logo-container {
  margin-bottom: 40px;
}

.logo-circle {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  backdrop-filter: blur(4px);

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
}

.logo-text {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(to right, white, #dcfce7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 10px;
}

.hero-subtext {
  font-size: 1.25rem;
  color: #dcfce7;
  margin-bottom: 30px;
}

.hero-description {
  font-size: 1.25rem;
  color: #dcfce7;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
}

.floating-element-1 {
  top: 80px;
  left: 100px;
  width: 24px;
  height: 24px;
  animation: pulse 2s infinite;
}

.floating-element-2 {
  bottom: 120px;
  right: 160px;
  width: 16px;
  height: 16px;
  background-color: rgba(134, 239, 172, 0.3);
  animation: bounce 3s infinite;
}

.floating-element-3 {
  top: 160px;
  right: 120px;
  width: 12px;
  height: 12px;
  background-color: rgba(94, 234, 212, 0.4);
  animation: ping 1.5s infinite;
}

.mission-section {
  padding: 80px 0;
  background-color: white;
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.mission-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.mission-paragraph {
  margin-bottom: 20px;
  color: #4b5563;
}

.impact-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: linear-gradient(to bottom right, #f0fdf4, #ecfdf5);
  border: 1px solid #d1fae5;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-icon-container {
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #22c55e, #0d9488);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.stat-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.875rem;
  color: #4b5563;
}

.values-section {
  padding: 80px 0;
  background: linear-gradient(to bottom right, #f9fafb, #f0fdf4);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
}

.value-card {
  background-color: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  cursor: pointer;
}

.value-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.value-icon-container {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: transform 0.3s ease;
}

.value-card:hover .value-icon-container {
  transform: scale(1.1);
}

.green-gradient {
  background: linear-gradient(to right, #22c55e, #16a34a);
}

.teal-gradient {
  background: linear-gradient(to right, #0d9488, #0f766e);
}

.green-teal-gradient {
  background: linear-gradient(to right, #16a34a, #0d9488);
}

.teal-green-gradient {
  background: linear-gradient(to right, #0d9488, #16a34a);
}

.value-icon {
  width: 32px;
  height: 32px;
  color: white;
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 15px;
}

.value-description {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  padding: 80px 0;
  background: linear-gradient(to bottom right, #f0fdf4, #ecfdf5);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
}

.team-card {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.team-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.team-card-header {
  height: 180px;
  background: linear-gradient(to right, #22c55e, #0d9488);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-member-icon {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.team-icon {
  width: 48px;
  height: 48px;
  color: white;
}

.team-card-body {
  padding: 30px;
}

.team-member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 5px;
}

.team-member-role {
  color: #16a34a;
  font-weight: 600;
  margin-bottom: 15px;
}

.team-member-bio {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 20px;
}

.team-member-expertise {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #0d9488;
}

.expertise-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(to right, #16a34a, #0d9488);
  color: white;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-text {
  font-size: 1.25rem;
  color: #dcfce7;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button-primary {
  background-color: white;
  color: #16a34a;
}

.cta-button-primary:hover {
  background-color: #f3f4f6;
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cta-button-secondary {
  border: 2px solid white;
  color: white;
}

.cta-button-secondary:hover {
  background-color: white;
  color: #16a34a;
  transform: scale(1.05);
}

.button-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

/* Animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Responsive Styles */
@media (min-width: 768px) {
  .mission-content {
    grid-template-columns: 1fr 1fr;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-buttons {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
