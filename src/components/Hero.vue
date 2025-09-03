<script setup>
import { onMounted, onUnmounted } from "vue";
import { createIcons, icons } from "lucide";

onMounted(() => {
  createIcons({ icons });

  const anchors = document.querySelectorAll('a[href^="#"]');
  const handleAnchorClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  anchors.forEach((anchor) =>
    anchor.addEventListener("click", handleAnchorClick)
  );

  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    document.querySelectorAll(".floating-element").forEach((element, index) => {
      const speed = (index + 1) * 0.5;
      const x = (mouseX - 0.5) * speed * 20;
      const y = (mouseY - 0.5) * speed * 20;
      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  };
  document.addEventListener("mousemove", handleMouseMove);

  const hero = document.querySelector(".hero-section");
  if (hero) hero.style.opacity = "1";

  onUnmounted(() => {
    anchors.forEach((anchor) =>
      anchor.removeEventListener("click", handleAnchorClick)
    );
    document.removeEventListener("mousemove", handleMouseMove);
  });
});
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <i data-lucide="leaf"></i>
          <span>100% Sustainable Products</span>
        </div>

        <h1 class="hero-title">
          Sustainable Living
          <br />Made <em>Simple</em>
        </h1>

        <p class="hero-subtitle">
          Discover eco-friendly products that don't compromise on quality. Join
          thousands of families making a positive impact on our planet, one
          purchase at a time.
        </p>

        <div class="hero-buttons">
          <a href="/shop" class="btn btn-primary">
            <span>Shop Now</span>
            <i data-lucide="arrow-right"></i>
          </a>
          <a href="/about" class="btn btn-secondary">
            <span>Learn More</span>
            <i data-lucide="play-circle"></i>
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">50,000+</div>
            <div class="stat-label">Happy Families</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2.3M</div>
            <div class="stat-label">Plastic Items Saved</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Carbon Neutral</div>
          </div>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="hero-visual">
        <div class="visual-circle">
          <div class="logo-container">
            <img
              src="../assets/images/logo&name.jpg"
              alt="EcoSphere Logo"
              class="logo-image"
            />
          </div>

          <div class="orbital orbital-1"></div>
          <div class="orbital orbital-2"></div>
          <div class="orbital orbital-3"></div>
        </div>
      </div>
    </div>

    <!-- Floating Icons -->
    <div class="floating-element floating-1">
      <i data-lucide="leaf"></i>
    </div>
    <div class="floating-element floating-2">
      <i data-lucide="recycle"></i>
    </div>
    <div class="floating-element floating-3">
      <i data-lucide="heart"></i>
    </div>
    <div class="floating-element floating-4">
      <i data-lucide="globe"></i>
    </div>
    <div class="floating-element floating-5">
      <i data-lucide="tree-pine"></i>
    </div>
    <div class="floating-element floating-6">
      <i data-lucide="shield"></i>
    </div>

    <!-- Particles -->
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100vh - 5rem);
  background: linear-gradient(
    135deg,
    #16a34a 0%,
    #0d9488 35%,
    #22c55e 70%,
    #059669 100%
  );
  display: flex;
  align-items: center;
  overflow: hidden;
  color: white;
}

.hero-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;
}

.hero-content {
  animation: slideInLeft 1s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.hero-badge:hover {
  transform: scale(1.05);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #dcfce7, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: glow 3s ease-in-out infinite alternate;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #dcfce7;
  line-height: 1.6;
  margin-bottom: 2rem;
  width: 100%;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #16a34a;
  backdrop-filter: blur(10px);
}

.btn-primary:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.stat-item {
  text-align: left;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.stat-label {
  font-size: 0.875rem;
  color: #dcfce7;
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideInRight 1s ease-out;
}

.visual-circle {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
  z-index: 1;
}

.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
}

.logo-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-1 {
  top: 10%;
  left: 10%;
  width: 80px;
  height: 80px;
  animation: float 4s ease-in-out infinite;
}

.floating-2 {
  top: 20%;
  right: 15%;
  width: 60px;
  height: 60px;
  animation: float 5s ease-in-out infinite reverse;
}

.floating-3 {
  bottom: 20%;
  left: 15%;
  width: 70px;
  height: 70px;
  animation: float 6s ease-in-out infinite;
}

.floating-4 {
  bottom: 15%;
  right: 20%;
  width: 50px;
  height: 50px;
  animation: float 4.5s ease-in-out infinite reverse;
}

.floating-5 {
  top: 50%;
  left: 5%;
  width: 40px;
  height: 40px;
  animation: float 3s ease-in-out infinite;
}

.floating-6 {
  top: 40%;
  right: 5%;
  width: 35px;
  height: 35px;
  animation: float 3.5s ease-in-out infinite reverse;
}

.orbital {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  z-index: 1;
}

.orbital-1 {
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  animation: orbit 8s linear infinite;
}

.orbital-2 {
  bottom: -15px;
  right: 20%;
  animation: orbit 10s linear infinite reverse;
}

.orbital-3 {
  left: -15px;
  top: 30%;
  animation: orbit 12s linear infinite;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
}

.particle-1 {
  top: 15%;
  left: 25%;
  animation: twinkle 2s ease-in-out infinite;
}

.particle-2 {
  top: 30%;
  right: 30%;
  animation: twinkle 3s ease-in-out infinite 0.5s;
}

.particle-3 {
  bottom: 25%;
  left: 20%;
  animation: twinkle 2.5s ease-in-out infinite 1s;
}

.particle-4 {
  bottom: 40%;
  right: 25%;
  animation: twinkle 2s ease-in-out infinite 1.5s;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(200px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(200px) rotate(-360deg);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .visual-circle {
    width: 300px;
    height: 300px;
  }

  .logo-container {
    width: 220px;
    height: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .logo-image {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .visual-circle {
    width: 250px;
    height: 250px;
  }

  .logo-container {
    width: 180px;
    height: 180px;
  }

  .logo-image {
    width: 180px;
    height: 180px;
  }

  .floating-element {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
