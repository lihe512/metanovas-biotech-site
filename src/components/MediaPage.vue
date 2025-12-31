<template>
  <div class="media-page">
    <!-- Hero Section -->
    <section class="hero-section" ref="heroSection">
      <div class="container">
        <h1 class="page-title">Corporate News</h1>
        <div class="hero-content">
          <p class="hero-text">
            MetaNovas CTO Dr. Yu Lun attended the IFSCC conference, the Nobel Prize in the cosmetics industry, and delivered a speech and released the latest research articles.
          </p>
          <p class="hero-description">
            IFSCC is an international non-profit organization, whose full name is The International Federation of Societies of Cosmetic Chemists (International Federation of Cosmetic Chemists). It was established in 1946 and currently has more than 16,000 members from more than 50 countries and regions around the world. IFSCC is the highest authority and most influential organization in the global cosmetics industry, and its annual conference is known as the "Nobel Prize in the cosmetics industry".
          </p>
        </div>
        <div class="scroll-indicator" @click="scrollToNews">
          <span class="scroll-text">Scroll down to learn more</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </section>

    <!-- News Articles Section -->
    <section class="news-section" ref="newsSection">
      <div class="container">
        <div class="news-list">
          <!-- News Item 1 -->
          <div class="news-item">
            <div class="news-date-badge">2025.01</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">Competition</h2>
                <p class="news-text">
                  MetaNovas Biotech presented at the Future Food Asia 2024 awards ceremony held in Singapore, and successfully made it into the Top 10 Finalists.
                </p>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
              </div>
            </div>
          </div>

          <!-- News Item 2 -->
          <div class="news-item">
            <div class="news-date-badge">2025.01</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">Leading AI Skincare Company</h2>
                <p class="news-text">
                  MetaNovas was selected by the British authoritative medical and health magazine as the Leading AI Skincare Company 2024.
                </p>
                <p class="news-description">
                  On April 10, 2024, the authoritative British medical and health magazine 'Global Health & Pharma' (hereinafter referred to as 'GHP'), a global information platform, released the list of winners of the 9th Biotechnology Awards, and MetaNovas Biotech was awarded the Leading AI Skincare Company 2024.
                </p>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
              </div>
            </div>
          </div>

          <!-- News Item 3 -->
          <div class="news-item">
            <div class="news-date-badge">2024.12</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">L'Oréal Big Bang Championship</h2>
                <p class="news-text">
                  MetaNovas won the L'Oréal Big Bang "Foreseeing New Industry Research x Artificial Intelligence" cross-field track championship.
                </p>
                <p class="news-description">
                  L'Oréal announced 17 winning companies from different regional markets in the 2023 North Asia Big Bang Beauty Technology Creation Camp. MetaNovas Biotech won the championship in the "Foreseeing New Industry Research x Artificial Intelligence" cross-field track.
                </p>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
              </div>
            </div>
          </div>

          <!-- News Item 4 -->
          <div class="news-item">
            <div class="news-date-badge">2024.12</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">HealthTech 250</h2>
                <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p>
                <p class="news-description">
                  MetaNovas was shortlisted as one of HolonIQ 2023 East Asia's 200 Leading Innovators in Health Technology. This recognition highlights MetaNovas' innovative contributions to the health technology sector.
                </p>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <!-- Contact Us Section -->
        <section id="contact" class="contact-section">
          <h2 class="section-title">Contact Us</h2>
          <div class="contact-content">
            <div class="contact-card">
              <img src="/home_slices/工作.png" alt="工作" class="contact-icon-img" />
              <a href="mailto:hr@metanovas.com">hr@metanovas.com</a>
            </div>
            <div class="contact-card">
              <img src="/home_slices/合作伙伴.png" alt="合作伙伴" class="contact-icon-img" />
              <a href="mailto:bd@metanovas.com">bd@metanovas.com</a>
            </div>
            <div class="contact-card">
              <img src="/home_slices/新闻.png" alt="新闻" class="contact-icon-img" />
              <a href="mailto:pr@metanovas.com">pr@metanovas.com</a>
            </div>
          </div>
        </section>
        
        <!-- Footer Content -->
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-text-group">
                <span class="logo-icon">M</span>
                <div class="logo-text-wrap">
                  <span class="logo-main">MetaNovas</span>
                  <span class="logo-sub">BIOTECH</span>
                </div>
              </div>
            </div>
            <div class="footer-brand-text">
              <span class="footer-arrow">→</span>
              <span class="footer-tagline">MetaNovas Biotech</span>
            </div>
            <!-- <p class="footer-chinese">上海元圻执药科技有限公司</p> -->
          </div>
          <div class="footer-links-group">
            <div class="link-column">
              <h4>About us</h4>
              <a href="#">Cooperative</a>
              <a href="#">Partnerships</a>
              <a href="#">R&D services</a>
              <a href="#">Awards and Honours</a>
              <a href="#">Products</a>
            </div>
            <div class="link-column">
              <h4>Products</h4>
              <a href="#">MetaTLR</a>
              <a href="#">ClearAcne Magic</a>
              <a href="#">MetaCono</a>
              <a href="#">OmniYouth</a>
              <a href="#">Metascalp</a>
              <a href="#">PureSmile</a>
            </div>
            <div class="link-column">
              <h4>Technology</h4>
             <a href="#">MetaLLM<sup>&reg;</sup></a>
              <a href="#">MetaKG<sup>&reg;</sup></a>
              <a href="#">MetaOmics<sup>&reg;</sup></a>
              <a href="#">MetaPep<sup>&reg;</sup></a>
            </div>
            <div class="link-column contact-us-column">
              <h4 class="contact-us-title">Contact us</h4>
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 MetaNovas Biotech. All Rights Reserved.</p>
          <p>These statements have not been evaluated by the Food and Drug Administration.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MediaPage',
  methods: {
    scrollToNews() {
      if (this.$refs.newsSection) {
        this.$refs.newsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }
};
</script>

<style scoped>
.media-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a2a1a 0%, #000000 100%);
  color: #ffffff;
  padding-top: 80px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

/* Hero Section */
.hero-section {
  padding: 120px 0 80px;
  position: relative;
}

.page-title {
  font-size: 64px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 60px;
  text-align: left;
  letter-spacing: -1px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  animation: titleFadeIn 1s ease-out;
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  max-width: 900px;
  margin-bottom: 60px;
}

.hero-text {
  font-size: 22px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 30px;
  font-weight: 500;
  animation: textFadeIn 1s ease-out 0.2s both;
}

.hero-description {
  font-size: 17px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.75);
  animation: textFadeIn 1s ease-out 0.4s both;
}

@keyframes textFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 80px;
  animation: bounceIndicator 2s ease-in-out infinite;
  cursor: pointer;
  transition: all 0.4s ease;
}

.scroll-indicator:hover {
  transform: translateY(5px);
}

.scroll-indicator:hover .scroll-text {
  color: rgba(61, 217, 201, 0.9);
}

.scroll-indicator:hover .scroll-arrow {
  color: #3DD9C9;
  transform: translateY(5px);
}

.scroll-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
}

.scroll-arrow {
  font-size: 28px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.4s ease;
}

@keyframes bounceIndicator {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

/* News Section */
.news-section {
  padding: 80px 0 100px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.news-item {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  padding-left: 140px;
}

.news-date-badge {
  position: absolute;
  left: 0;
  top: 0;
  width: 110px;
  height: 35.3px;
  background: #449371;
  border-radius: 17.66px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-image: linear-gradient(135deg, #23C28B 0%, #021E19 100%);
  box-shadow: 
    0 2px 8px rgba(35, 194, 139, 0.3),
    0 0 20px rgba(35, 194, 139, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.news-item:hover .news-date-badge {
  transform: scale(1.05);
  box-shadow: 
    0 4px 16px rgba(35, 194, 139, 0.5),
    0 0 30px rgba(35, 194, 139, 0.3);
}

.news-content-wrapper {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  flex: 1;
  width: 100%;
}

.news-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 0;
}

.news-category {
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
  transition: all 0.4s ease;
  position: relative;
}

.news-item:hover .news-category {
  color: #3DD9C9;
  text-shadow: 0 0 20px rgba(61, 217, 201, 0.4);
}

.news-text {
  font-size: 18px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  transition: all 0.4s ease;
}

.news-item:hover .news-text {
  color: rgba(255, 255, 255, 1);
}

.news-description {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  transition: all 0.4s ease;
}

.news-item:hover .news-description {
  color: rgba(255, 255, 255, 0.9);
}

.news-image-placeholder {
  flex: 0 0 auto;
  width: 500px;
  height: 350px;
  background: rgba(20, 20, 20, 0.7);
  border: 2px solid rgba(68, 150, 115, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.news-item:hover .news-image-placeholder {
  border-color: rgba(68, 150, 115, 0.6);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(68, 150, 115, 0.2);
  transform: translateY(-5px);
}

.news-image-placeholder::before {
  content: 'Image Placeholder';
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

.news-image-placeholder::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(35, 194, 139, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.news-item:hover .news-image-placeholder::after {
  opacity: 1;
}

/* Contact Section */
.contact-section {
  padding: 100px 0;
  position: relative;
}

.section-title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  transition: all 0.4s ease;
  cursor: default;
  text-align: left;
}

.section-title::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 0;
  background: linear-gradient(180deg, #449673, #3DD9C9);
  transition: height 0.4s ease;
  border-radius: 2px;
}

.section-title:hover::before {
  height: 40px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3DD9C9);
  transition: width 0.4s ease;
}

.section-title:hover {
  color: #449673;
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.5);
  transform: translateX(5px);
}

.section-title:hover::after {
  width: 100px;
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
  flex-wrap: wrap;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 40px 50px;
  min-width: 220px;
  flex: 0 0 auto;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
}

.contact-card:hover {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(68, 150, 115, 0.6);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 15px 40px rgba(68, 150, 115, 0.3),
    0 0 30px rgba(68, 150, 115, 0.2),
    inset 0 0 20px rgba(68, 150, 115, 0.1);
}

.contact-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.3), rgba(61, 217, 201, 0.3));
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-icon-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  margin-top: 5px;
}

.contact-card a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  text-align: center;
  font-weight: 500;
}

.contact-card:hover a {
  color: #449673;
}

/* Footer */
.footer {
  padding: 100px 0 30px;
  background: transparent;
  position: relative;
  overflow-x: hidden;
}

.footer .container {
  position: relative;
  z-index: 1;
}

.footer .contact-section {
  padding: 0 0 100px;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.footer-brand {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
}

.footer-brand::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.1) 0%, transparent 70%);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.footer-brand:hover {
  transform: translateX(8px) translateY(-3px);
}

.footer-brand:hover::before {
  opacity: 1;
}

.footer-logo {
  margin-bottom: 16px;
}

.logo-text-group {
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-brand:hover .logo-text-group {
  gap: 12px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #3DD9C9 0%, #1a8a7a 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(61, 217, 201, 0.3);
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.5s ease;
}

.logo-icon::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.6), rgba(61, 217, 201, 0.6));
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.footer-brand:hover .logo-icon {
  transform: rotate(5deg) scale(1.1);
  box-shadow: 
    0 4px 16px rgba(61, 217, 201, 0.5),
    0 0 30px rgba(68, 150, 115, 0.4),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, #3DD9C9 0%, #449673 50%, #1a8a7a 100%);
}

.footer-brand:hover .logo-icon::before {
  width: 120%;
  height: 120%;
  animation: logoShine 1.5s ease-in-out infinite;
}

.footer-brand:hover .logo-icon::after {
  opacity: 1;
  animation: logoGlow 2s ease-in-out infinite;
}

@keyframes logoShine {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes logoGlow {
  0%, 100% {
    opacity: 0.6;
    filter: blur(5px);
  }
  50% {
    opacity: 1;
    filter: blur(8px);
  }
}

.logo-text-wrap {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-block;
}

.footer-brand:hover .logo-main {
  color: #3DD9C9;
  text-shadow: 
    0 0 10px rgba(61, 217, 201, 0.5),
    0 0 20px rgba(68, 150, 115, 0.3);
  transform: translateX(2px);
}

.logo-main::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3DD9C9, #449673);
  transition: width 0.4s ease;
}

.footer-brand:hover .logo-main::after {
  width: 100%;
}

.logo-sub {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-brand:hover .logo-sub {
  color: rgba(61, 217, 201, 0.9);
  text-shadow: 0 0 8px rgba(61, 217, 201, 0.4);
  transform: translateX(2px);
}

.footer-brand-text {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.footer-arrow {
  font-size: 14px;
  color: #3DD9C9;
  transition: all 0.4s ease;
}

.footer-brand:hover .footer-arrow {
  transform: translateX(3px);
  color: #449673;
}

.footer-tagline {
  font-size: 12px;
  color: #3DD9C9;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-decoration: underline;
  text-decoration-color: #3DD9C9;
  text-underline-offset: 4px;
}

.footer-brand:hover .footer-tagline {
  color: #449673;
  text-decoration-color: #449673;
  text-shadow: 0 0 8px rgba(68, 150, 115, 0.4);
}

.footer-chinese {
  font-size: 12px;
  color: rgba(61, 217, 201, 0.6);
  margin-top: 12px;
  transition: all 0.4s ease;
}

.footer-brand:hover .footer-chinese {
  color: rgba(61, 217, 201, 0.8);
}

.footer-links-group {
  display: flex;
  gap: 60px;
}

.link-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-column h4 {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
}

.link-column h4.contact-us-title {
  color: #ffffff;
}

.link-column a {
  position: relative;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-column.contact-us-column a {
  color: rgba(255, 255, 255, 0.8);
}

.link-column a::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%) scaleX(0);
  width: 4px;
  height: 4px;
  background: #449673;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.link-column a:hover {
  color: #3DD9C9;
  transform: translateX(5px);
  text-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}

.link-column a:hover::before {
  transform: translateY(-50%) scaleX(1);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .page-title {
    font-size: 36px;
  }

  .hero-text {
    font-size: 18px;
  }

  .news-item {
    padding-left: 0;
    flex-direction: column;
    gap: 40px;
  }

  .news-date-badge {
    position: relative;
  }

  .news-content-wrapper {
    flex-direction: column;
    gap: 40px;
  }

  .news-image-placeholder {
    width: 100%;
    height: 300px;
  }

  .news-category {
    font-size: 24px;
  }

  .news-text {
    font-size: 16px;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-links-group {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
}
</style>

