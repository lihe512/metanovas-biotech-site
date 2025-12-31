<template>
  <div class="home-page">
    <!-- 回到顶部按钮 -->
    <div 
      class="scroll-top" 
      :class="{ visible: showScrollTop }"
      @click="scrollToTop"
    >
      ↑
    </div>
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <span class="logo-text">MetaNova</span>
          <span class="logo-tagline">BIOTECH</span>
        </div>
        <div class="nav-links">
          <a href="#about">About Us</a>
          <a href="#partners">Partners</a>
          <a href="#technology">Technology</a>
          <a href="#research">Research</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    <!-- 英雄区 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Transforming Biotechnology<br>for a Better Future</h1>
        <p class="hero-subtitle">Pioneering next-generation solutions in synthetic biology and molecular engineering</p>
        <div class="hero-cta">
          <button class="btn-primary">Explore Our Work</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </div>
      <div class="hero-globe">
        <div class="globe-animation"></div>
      </div>
    </section>

    <!-- Featured on -->
    <section class="featured-section">
      <div class="container">
        <p class="featured-title">Featured on</p>
        <div class="featured-logos">
          <div class="logo-item">Scientific American</div>
          <div class="logo-item">Bloomberg</div>
          <div class="logo-item">Nature</div>
          <div class="logo-item">Forbes</div>
          <div class="logo-item">Reuters</div>
        </div>
      </div>
    </section>

    <!-- About Us -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-content">
          <h2 class="section-title">About Us</h2>
          <p class="about-text">MetaNova Biotech is at the forefront of biotechnology innovation, specializing in synthetic biology, genomics, and molecular engineering. Our team of world-class scientists and researchers is dedicated to developing breakthrough solutions that address global challenges in healthcare, agriculture, and environmental sustainability.</p>
          <p class="about-text">Founded in 2015, we have rapidly emerged as a leader in the biotech industry, with cutting-edge research facilities and strategic partnerships with major pharmaceutical companies and research institutions worldwide.</p>
          <button class="btn-primary">Our Story</button>
        </div>
        <div class="about-images">
          <div class="image-grid">
            <div class="grid-image"></div>
            <div class="grid-image"></div>
            <div class="grid-image"></div>
            <div class="grid-image"></div>
            <div class="grid-image"></div>
            <div class="grid-image"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnerships -->
    <section id="partners" class="partners-section">
      <div class="container">
        <h2 class="section-title">Strategic Partnerships</h2>
        <div class="partners-logos">
          <div class="partner-logo">Sanofi</div>
          <div class="partner-logo">L'Oréal</div>
          <div class="partner-logo">COTY</div>
          <div class="partner-logo">BASF</div>
          <div class="partner-logo">Givaudan</div>
        </div>
      </div>
    </section>

    <!-- Technology Platform -->
    <section id="technology" class="tech-platform-section">
      <div class="container">
        <h2 class="section-title">Technical Platform</h2>
        <div class="tech-cards">
          <div class="tech-card">
            <div class="tech-icon"></div>
            <h3>CRISPR Gene Editing</h3>
            <p>Precision genetic modification for enhanced cellular functions</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon"></div>
            <h3>Synthetic Biology</h3>
            <p>Design and construction of novel biological systems</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon"></div>
            <h3>Proteomics</h3>
            <p>Comprehensive protein analysis for therapeutic development</p>
          </div>
          <div class="tech-card">
            <div class="tech-icon"></div>
            <h3>Bioinformatics</h3>
            <p>AI-powered data analysis for biological insights</p>
          </div>
        </div>
      </div>
    </section>

    <!-- R&D Science -->
    <section id="research" class="research-section">
      <div class="container">
        <h2 class="section-title">R&D Science</h2>
        <div class="research-content">
          <div class="research-text">
            <p>Our research and development efforts focus on four key areas: therapeutic development, agricultural innovation, environmental solutions, and industrial biotechnology. We combine state-of-the-art technology with innovative approaches to solve complex biological challenges.</p>
            <div class="research-stats">
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Patents</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">20+</span>
                <span class="stat-label">Research Papers</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">15</span>
                <span class="stat-label">Clinical Trials</span>
              </div>
            </div>
          </div>
          <div class="research-visual">
            <div class="molecular-structure"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards and Honors -->
    <section class="awards-section">
      <div class="container">
        <h2 class="section-title">Awards and Honors</h2>
        <div class="awards-content">
          <div class="years-selector">
            <button class="year-btn active">2023</button>
            <button class="year-btn">2022</button>
            <button class="year-btn">2021</button>
            <button class="year-btn">2020</button>
          </div>
          <div class="award-details">
            <div class="award-item">
              <div class="award-text">
                <h3>Biotech Innovation Award</h3>
                <p>Recognized for groundbreaking work in CRISPR gene editing technology</p>
              </div>
              <div class="award-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="products-section">
      <div class="container">
        <h2 class="section-title">Products</h2>
        <div class="products-grid">
          <div class="product-item"></div>
          <div class="product-item"></div>
          <div class="product-item"></div>
          <div class="product-item"></div>
          <div class="product-item"></div>
          <div class="product-item"></div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Services</h2>
        <div class="services-cards">
          <div class="service-card"></div>
          <div class="service-card"></div>
          <div class="service-card"></div>
          <div class="service-card"></div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <span class="info-label">Location</span>
              <span class="info-value">123 Innovation Drive, Cambridge, MA 02142</span>
            </div>
            <div class="info-item">
              <span class="info-label">Email</span>
              <span class="info-value">info@metanovabiotech.com</span>
            </div>
            <div class="info-item">
              <span class="info-label">Phone</span>
              <span class="info-value">+1 (617) 555-1234</span>
            </div>
          </div>
          <div class="social-links">
            <div class="social-icon"></div>
            <div class="social-icon"></div>
            <div class="social-icon"></div>
            <div class="social-icon"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-logo">
          <span class="logo-text">MetaNova</span>
          <span class="logo-tagline">BIOTECH</span>
        </div>
        <div class="footer-nav">
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#technology">Technology</a>
          <a href="#research">Research</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="copyright">
          <p>&copy; 2023 MetaNova Biotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      activeYear: '2023',
      scrollPosition: 0,
      showScrollTop: false
    }
  },
  methods: {
    handleYearClick(year) {
      this.activeYear = year;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.showScrollTop = this.scrollPosition > 500;
    },
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
:root {
  --primary-color: #00f0a0;
  --secondary-color: #008060;
  --dark-bg: #0a0e17;
  --medium-bg: #111827;
  --light-text: #e5e7eb;
  --highlight-text: #00f0a0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.home-page {
  background-color: var(--dark-bg);
  color: var(--light-text);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 14, 23, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 240, 160, 0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
}

.logo-tagline {
  font-size: 12px;
  color: var(--light-text);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: var(--light-text);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-links a:hover::after {
  width: 100%;
}

/* 英雄区 */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 0 80px;
  background: radial-gradient(circle at center, rgba(0, 128, 96, 0.2) 0%, transparent 70%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(10, 14, 23, 0.7) 100%);
  z-index: 1;
}

.hero-section .container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.hero-content {
  max-width: 50%;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  background: linear-gradient(90deg, var(--light-text) 0%, var(--primary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.8;
}

.hero-cta {
  display: flex;
  gap: 20px;
}

.btn-primary {
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: var(--dark-bg);
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 240, 160, 0.3);
}

.btn-secondary {
  padding: 15px 30px;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgba(0, 240, 160, 0.1);
  transform: translateY(-2px);
}

.hero-globe {
  position: relative;
  width: 500px;
  height: 500px;
}

.globe-animation {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--primary-color) 0%, rgba(0, 128, 96, 0.4) 40%, transparent 70%);
  border-radius: 50%;
  animation: globeRotate 30s linear infinite;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 100px rgba(0, 240, 160, 0.3);
}

.globe-animation::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background: linear-gradient(45deg, transparent 40%, rgba(0, 240, 160, 0.1) 50%, transparent 60%);
  animation: globeGlow 8s ease-in-out infinite;
}

@keyframes globeRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes globeGlow {
  0%, 100% { opacity: 0.3; transform: translateX(-100%) rotate(45deg); }
  50% { opacity: 0.8; transform: translateX(100%) rotate(45deg); }
}

/* Featured on */
.featured-section {
  padding: 60px 0;
  background-color: var(--medium-bg);
  border-top: 1px solid rgba(0, 240, 160, 0.1);
  border-bottom: 1px solid rgba(0, 240, 160, 0.1);
}

.featured-title {
  text-align: center;
  font-size: 14px;
  color: rgba(229, 231, 235, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

.featured-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.logo-item {
  font-size: 16px;
  color: rgba(229, 231, 235, 0.8);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.logo-item:hover {
  opacity: 1;
}

/* About Us */
.about-section {
  padding: 120px 0;
  background-color: var(--dark-bg);
}

.about-section .container {
  display: flex;
  gap: 80px;
  align-items: center;
}

.about-content {
  flex: 1;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--light-text);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
}

.about-text {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 25px;
  opacity: 0.8;
}

.about-images {
  flex: 1;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 400px;
}

.grid-image {
  background-color: rgba(0, 240, 160, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.grid-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 240, 160, 0.1) 0%, rgba(0, 128, 96, 0.3) 100%);
}

/* Partnerships */
.partners-section {
  padding: 120px 0;
  background-color: var(--medium-bg);
  text-align: center;
}

.partners-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-top: 60px;
}

.partner-logo {
  font-size: 24px;
  color: rgba(229, 231, 235, 0.8);
  opacity: 0.7;
  transition: all 0.3s ease;
  padding: 20px;
  border: 1px solid rgba(0, 240, 160, 0.2);
  border-radius: 12px;
  background-color: rgba(10, 14, 23, 0.5);
  filter: grayscale(70%);
}

.partner-logo:hover {
  opacity: 1;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 240, 160, 0.2);
  filter: grayscale(0%);
  border-color: var(--primary-color);
}

/* Technology Platform */
.tech-platform-section {
  padding: 120px 0;
  background-color: var(--dark-bg);
  text-align: center;
}

.tech-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.tech-card {
  background-color: var(--medium-bg);
  border-radius: 50%;
  padding: 40px 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 240, 160, 0.2);
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 240, 160, 0.15);
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top, rgba(0, 240, 160, 0.1) 0%, transparent 100%);
}

.tech-icon {
  width: 80px;
  height: 80px;
  background-color: rgba(0, 240, 160, 0.2);
  border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.tech-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--light-text);
  position: relative;
  z-index: 1;
}

.tech-card p {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
  position: relative;
  z-index: 1;
  padding: 0 15px;
}

/* R&D Science */
.research-section {
  padding: 120px 0;
  background-color: var(--medium-bg);
  position: relative;
  overflow: hidden;
}

.research-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: radial-gradient(circle at right, rgba(0, 240, 160, 0.1) 0%, transparent 70%);
  z-index: 0;
}

.research-content {
  display: flex;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.research-text {
  flex: 1;
}

.research-text p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.8;
}

.research-stats {
  display: flex;
  gap: 60px;
}

.stat-item {
  text-align: center;
  transition: transform 0.3s ease;
  padding: 20px;
}

.stat-item:hover {
  transform: translateY(-5px) scale(1.05);
}

.stat-number {
  display: block;
  font-size: 48px;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 10px;
  text-shadow: 0 0 15px rgba(0, 240, 160, 0.3);
  animation: statPulse 2s ease-in-out infinite;
}

@keyframes statPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.stat-label {
  font-size: 16px;
  color: var(--light-text);
  opacity: 0.8;
}

.research-visual {
  flex: 1;
}

.molecular-structure {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, rgba(0, 240, 160, 0.1) 0%, rgba(0, 128, 96, 0.3) 100%);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.molecular-structure::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-top: -150px;
  margin-left: -150px;
  background: radial-gradient(circle, var(--primary-color) 0%, rgba(0, 240, 160, 0.5) 10%, transparent 50%);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

/* Awards and Honors */
.awards-section {
  padding: 120px 0;
  background-color: var(--dark-bg);
}

.awards-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

.years-selector {
  display: flex;
  gap: 20px;
  background-color: var(--medium-bg);
  padding: 10px;
  border-radius: 30px;
  border: 1px solid rgba(0, 240, 160, 0.2);
}

.year-btn {
  padding: 10px 25px;
  background-color: transparent;
  color: var(--light-text);
  border: 1px solid transparent;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.year-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 160, 0.2), transparent);
  transition: left 0.5s;
}

.year-btn:hover {
  background-color: rgba(0, 240, 160, 0.1);
  transform: translateY(-2px);
  border-color: rgba(0, 240, 160, 0.3);
}

.year-btn:hover::before {
  left: 100%;
}

.year-btn.active {
  background-color: var(--primary-color);
  color: var(--dark-bg);
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 240, 160, 0.3);
}

.award-details {
  max-width: 800px;
  width: 100%;
}

.award-item {
  display: flex;
  gap: 40px;
  align-items: center;
  background-color: var(--medium-bg);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid rgba(0, 240, 160, 0.2);
}

.award-text {
  flex: 1;
}

.award-text h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--light-text);
}

.award-text p {
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
}

.award-image {
  width: 120px;
  height: 120px;
  background-color: rgba(0, 240, 160, 0.2);
  border-radius: 12px;
}

/* Products */
.products-section {
  padding: 120px 0;
  background-color: var(--medium-bg);
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
}

.product-item {
  aspect-ratio: 1;
  background-color: rgba(0, 240, 160, 0.1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid transparent;
}

.product-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.product-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 240, 160, 0.25);
  border-color: rgba(0, 240, 160, 0.3);
}

.product-item:hover::before {
  transform: scaleX(1);
}

.product-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 240, 160, 0.2) 0%, rgba(0, 128, 96, 0.4) 100%);
}

/* Services */
.services-section {
  padding: 120px 0;
  background-color: var(--dark-bg);
  text-align: center;
}

.services-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.service-card {
  height: 200px;
  background-color: rgba(0, 240, 160, 0.1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid transparent;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 240, 160, 0.25);
  border-color: rgba(0, 240, 160, 0.3);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 240, 160, 0.2) 0%, rgba(0, 128, 96, 0.4) 100%);
}

/* Contact Us */
.contact-section {
  padding: 120px 0;
  background-color: var(--medium-bg);
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-info {
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 240, 160, 0.1);
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 16px;
  font-weight: 500;
  color: var(--light-text);
}

.info-value {
  font-size: 16px;
  color: var(--light-text);
  opacity: 0.8;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.social-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 240, 160, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 160, 0.3), transparent);
  transition: left 0.5s;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.1);
  background-color: rgba(0, 240, 160, 0.2);
  box-shadow: 0 5px 15px rgba(0, 240, 160, 0.3);
}

.social-icon:hover::before {
  left: 100%;
}

/* Footer */
.footer {
  padding: 60px 0;
  background-color: var(--dark-bg);
  border-top: 1px solid rgba(0, 240, 160, 0.1);
}

.footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-nav {
  display: flex;
  gap: 40px;
}

.footer-nav a {
  color: var(--light-text);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: var(--primary-color);
}

.copyright {
  font-size: 14px;
  color: var(--light-text);
  opacity: 0.6;
}

.footer-nav a {
  color: var(--light-text);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.footer-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.footer-nav a:hover {
  color: var(--primary-color);
}

.footer-nav a:hover::after {
  width: 100%;
}

/* 回到顶部按钮 */
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--dark-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-top:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 240, 160, 0.3);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .tech-cards,
  .services-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-content {
    max-width: 100%;
    text-align: center;
  }
  
  .hero-section .container {
    flex-direction: column;
    gap: 60px;
  }
  
  .hero-globe {
    width: 300px;
    height: 300px;
  }
  
  .about-section .container,
  .research-content {
    flex-direction: column;
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .featured-logos {
    flex-direction: column;
    gap: 20px;
  }
  
  .partners-logos {
    gap: 30px;
  }
  
  .tech-cards,
  .services-cards,
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    height: 300px;
  }
  
  .research-stats {
    flex-direction: column;
    gap: 30px;
  }
  
  .year-btn {
    padding: 8px 15px;
    font-size: 14px;
  }
  
  .award-item {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-nav {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>