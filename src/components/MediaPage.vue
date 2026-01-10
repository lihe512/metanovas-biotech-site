<template>
  <div class="media-page">
    <!-- Hero Section -->
    <section class="hero-section" ref="heroSection">
      <div class="container">
        <h1 class="page-title">Corporate News</h1>
        <div class="hero-content">
          <p class="hero-text">
            MetaNovas CTO Dr. Yu Lun attended the IFSCC conference, the Nobel Prize in the cosmetics industry, and
            delivered a speech and released the latest research articles.
          </p>
          <p class="hero-description">
            IFSCC is an international non-profit organization, whose full name is The International Federation of
            Societies of Cosmetic Chemists (International Federation of Cosmetic Chemists). It was established in 1946
            and currently has more than 16,000 members from more than 50 countries and regions around the world. IFSCC
            is the highest authority and most influential organization in the global cosmetics industry, and its annual
            conference is known as the "Nobel Prize in the cosmetics industry".
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
            <div class="news-date-badge">2025.11.27</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas' World's First AI-Designed Novel Molecule “AMP33” Completes Medical
                  Device Raw Material Registration</h2>
                <p class="news-description">
                 MetaNovas Biotech’s first AI-designed peptide, AMP33, has completed Medical Device Master File registration (No. M2025400-000). Developed via AI-driven simulation, AMP33 supports skin microbiome balance, meets medical-grade safety standards, and enables wound-healing and post-procedure care.
                </p>
                <button class="read-more-btn" @click="readArticle(0)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/1.png" alt="AMP33" class="news-image" />
              </div>
            </div>
          </div>

          <!-- News Item 2 -->
          <div class="news-item">
            <div class="news-date-badge">2025.11.5</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">Beauty Connect LA 2025 | MetaNovas Successfully Hosted the “From Science to
                  Market” Themed Workshop</h2>
                <!-- <p class="news-text">
                  MetaNovas was selected by the British authoritative medical and health magazine as the Leading AI
                  Skincare Company 2024.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech successfully hosted the From Science to Market workshop at Beauty Connect LA 2025,
                  bringing together investors, scientists, and brand leaders to explore how AI-driven scientific
                  innovation accelerates the journey from laboratory research to market-ready beauty brands.
                </p>
                <button class="read-more-btn" @click="readArticle(1)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/2.png" alt="" class="news-image" />
              </div>
            </div>
          </div>

          <!-- News Item 3 -->
          <div class="news-item">
            <div class="news-date-badge">2025.10.21</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas Invited to Speak at the FaB BeautyTech AI Founders Forum in San
                  Francisco</h2>
                <!-- <p class="news-text">
                  MetaNovas won the L'Oréal Big Bang "Foreseeing New Industry Research x Artificial Intelligence"
                  cross-field track championship.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech was invited to the FaB BeautyTech AI Founders Forum in San Francisco, where founder
                  Lun Yu joined global beauty and biotech innovators to discuss how AI accelerates efficacy skincare,
                  personalized formulations, and the integration of biotechnology into next-generation consumer beauty.
                </p>
                <button class="read-more-btn" @click="readArticle(2)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/3.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>

          <!-- News Item 4 -->
          <div class="news-item">
            <div class="news-date-badge">2025.09.17</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas Partners with L'Oréal at IFSCC 2025 to Present AI-Driven Collagen
                  Research</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech partnered with L'Oréal at the 35th IFSCC Congress in Cannes to present an AI-driven
                  research framework combining biological knowledge graphs and experimental validation, enabling
                  accelerated collagen mechanism analysis and ingredient screening for next-generation skincare
                  innovation.
                </p>
                <button class="read-more-btn" @click="readArticle(3)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/4.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>

          <!-- News Item 5 -->
          <div class="news-item">
            <div class="news-date-badge">2025.05.16</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas Partners with HCP Group at CBE 2025 to Showcase AI-Enabled Botanical
                  Innovation</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech partnered with HCP Group at CBE 2025 in Shanghai to present an AI-driven botanical
                  research collaboration, demonstrating how artificial intelligence accelerates the discovery,
                  optimization, and application of traditional Chinese plant actives for next-generation skincare
                  innovation.
                </p>
                <button class="read-more-btn" @click="readArticle(4)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/5.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>
          <!-- News Item 6 -->
          <div class="news-item">
            <div class="news-date-badge">2025.04.10</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas Debuts at In-Cosmetics Global 2025, Showcasing AI-Driven Ingredient
                  Innovation</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech made its European debut at In-Cosmetics Global 2025 in Amsterdam, presenting its
                  AI-powered ingredient R&D platform and sharing cutting-edge insights on AI-driven cosmetic innovation,
                  attracting attention from global brands and industry experts.
                </p>
                <button class="read-more-btn" @click="readArticle(5)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/6.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>

          <!-- News Item 7 -->
          <div class="news-item">
            <div class="news-date-badge">2025.02.27</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas & PCHI Successfully Host AI-Driven Cosmetics Innovation Forum</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas, in partnership with PCHI, successfully hosted an AI-focused forum on cosmetics innovation,
                  attracting industry experts and brand leaders. The event showcased AI applications in skincare R&D,
                  personalized beauty, and microbiome-based solutions, highlighting the transformative potential of AI
                  in the beauty industry.
                </p>
                <button class="read-more-btn" @click="readArticle(6)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/7.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>
          <!-- News Item 8 -->
          <div class="news-item">
            <div class="news-date-badge">2025.02.05</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas CEO Named to Forbes China 100 Outstanding Young Returnees</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech founder and CEO Meijie Wang was selected for the Forbes China 100 Outstanding Young Returnees in the “Growth Potential” category. Recognized for leadership in AI-driven biotechnology, she has led MetaNovas to pioneer functional ingredient platforms, secure international patents, and collaborate with global brands, advancing AI-powered bioactive innovation.
                </p>
                <button class="read-more-btn" @click="readArticle(7)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/8.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>
          <!-- News Item 9 -->
          <div class="news-item">
            <div class="news-date-badge">2024.12.04</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas Secures Series A Funding to Accelerate AI-Driven Discovery of
                  Consumer Health Materials</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech has closed its Series A financing led by GL Ventures and Baoding Capital. Powered by its AI platform and knowledge graph, the company accelerates functional peptide discovery, reducing R&D time and cost while expanding global collaborations and commercialization.
                </p>
                <button class="read-more-btn" @click="readArticle(8)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                <img src="../../public/media_images/9.png" alt="" class="news-image" loading="lazy"/>
              </div>
            </div>
          </div>
          <!-- News Item 10 -->
          <div class="news-item">
            <div class="news-date-badge">2024.11.25</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category">MetaNovas to Showcase AI-Driven Cosmetic Innovation at SCC78 in Los Angeles</h2>
                <!-- <p class="news-text">
                  Metanovas Biotech has been selected as one of the top 250 most promising health technology companies
                  in the world for two consecutive years, and has won the award again after being shortlisted in 2022.
                </p> -->
                <p class="news-description">
                  MetaNovas Biotech, the only Chinese company selected for the 78th Annual SCC Meeting, will present in the “AI Beauty Revolution” session, demonstrating how its AI platform accelerates cosmetic ingredient and product development to global industry leaders.
                </p>
                <button class="read-more-btn" @click="readArticle(9)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <!-- 图片占位符 -->
                 <img src="../../public/media_images/10-3.png" alt="" class="news-image" loading="lazy"/>
                 <!-- <img src="../../public/media_images/10-2.png" alt="" class="news-image" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script>
import FooterSection from './parts/FooterSection.vue';

export default {
  name: 'MediaPage',
  components: {
    FooterSection
  },
  data() {
    return {
      // 鼠标残影数据
      trails: [],
      trailCount: 40,
      mouseX: 0,
      mouseY: 0,
      isMouseInPage: false,
      isScrolling: false,
      currentAwardIndex: 0,
      // 新闻链接数据
      newsLinks: [
        'https://mp.weixin.qq.com/s/NmpcDci4BM9PjL1hGM8yEQ', 
        'https://mp.weixin.qq.com/s/TP9NIssei02DmWrDb1xSKQ',
        'https://mp.weixin.qq.com/s/sqbkmmpD-UwIf1uXVLem5Q',
        'https://mp.weixin.qq.com/s/edM9-_MjUoZe0Iqop_7b8Q',
        'https://mp.weixin.qq.com/s/nYV-R7bBNRQK37dR3ji1IQ',
        'https://mp.weixin.qq.com/s/IO7QlPoIMJ6nlqvWAsoBHg',
        'https://mp.weixin.qq.com/s/QN9nJ81Cg4IqYznUK31N0g',
        'https://mp.weixin.qq.com/s/aTgMfQr11cs8LCF8rrHA_w',
        'https://mp.weixin.qq.com/s/nKpWa7lpT0jLBIbeBZ51xA',
        'https://mp.weixin.qq.com/s/E5btHR_0qNNlHFszZfCPjg'
      ]
    }
  },

  mounted() {
    this.initScrollAnimations();
    this.initCursorTrail();
    this.startAwardsCarousel();
  },
  beforeUnmount() {
    // 清理动画
    if (this.trailAnimationFrame) {
      cancelAnimationFrame(this.trailAnimationFrame);
    }
    if (this.awardsCarouselInterval) {
      clearInterval(this.awardsCarouselInterval);
    }
  },
  methods: {
    scrollToNews() {
      if (this.$refs.newsSection) {
        this.$refs.newsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },
    startAwardsCarousel() {
      this.awardsCarouselInterval = setInterval(() => {
        this.currentAwardIndex = (this.currentAwardIndex + 1) % this.awardsData.length;
      }, 3000);
    },
    readArticle(index) {
      window.open(this.newsLinks[index], '_blank');
    },
    // 鼠标移动处理
    onMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.isMouseInPage = true;

      // 更新主光标位置
      if (this.$refs.cursorBall) {
        this.$refs.cursorBall.style.left = e.clientX + 'px';
        this.$refs.cursorBall.style.top = e.clientY + 'px';
        this.$refs.cursorBall.style.opacity = '1';
      }
    },

    onMouseLeave() {
      this.isMouseInPage = false;
      if (this.$refs.cursorBall) {
        this.$refs.cursorBall.style.opacity = '0';
      }
      // 清空残影
      this.trails = [];
    },

    // 初始化残影系统
    initCursorTrail() {
      // 存储历史位置
      this.positions = [];

      const updateTrails = () => {
        if (this.isMouseInPage) {
          // 添加当前位置到历史
          this.positions.unshift({ x: this.mouseX, y: this.mouseY });

          // 限制历史长度
          if (this.positions.length > this.trailCount) {
            this.positions.pop();
          }

          // 更新残影
          this.trails = this.positions.map((pos, index) => {
            const opacity = 1 - (index / this.trailCount) * 0.8;
            const scale = 1 - (index / this.trailCount) * 0.4;
            const size = 36 * scale;

            return {
              style: {
                left: pos.x + 'px',
                top: pos.y + 'px',
                width: size + 'px',
                height: size + 'px',
                opacity: opacity * 0.8,
                transform: `translate(-50%, -50%) scale(${scale})`,
                transition: 'opacity 0.3s ease-out'
              }
            };
          });
        }

        this.trailAnimationFrame = requestAnimationFrame(updateTrails);
      };

      updateTrails();
    },

    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section-title, .featured-title, .tech-card, .product-card, .service-card').forEach(el => {
        observer.observe(el);
      });
    },
  }
};
</script>

<style scoped>
/* 自定义鼠标 - 蓝绿色小球 */
.cursor-ball {
  position: fixed;
  width: 22px;
  height: 22px;
  background: radial-gradient(circle, #449673 0%, #3a7a5f 50%, rgba(68, 150, 115, 0.3) 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  box-shadow:
    0 0 10px rgba(68, 150, 115, 0.8),
    0 0 20px rgba(68, 150, 115, 0.5),
    0 0 40px rgba(68, 150, 115, 0.3);
  transition: opacity 0.3s ease;
  opacity: 0;
}

/* 鼠标残影 */
.cursor-trail {
  position: fixed;
  background: radial-gradient(circle, #449673 0%, rgba(68, 150, 115, 0.5) 50%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.3s ease-out;
  box-shadow: 0 0 12px rgba(61, 217, 201, 0.5);
}

/* 让链接和按钮显示正常指针 */
.home-page a,
.home-page button,
.home-page .tech-tab,
.home-page .about-btn,
.home-page .partner-logo,
.home-page .product-card,
.home-page .service-card {
  cursor: none;
}

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

  0%,
  100% {
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
  min-height: 350px;
  justify-content: space-between;
}

.news-category {
  font-size: 24px;
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

.read-more-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #449673 0%, #3DD9C9 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.read-more-btn:hover {
  background: linear-gradient(135deg, #3DD9C9 0%, #449673 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(61, 217, 201, 0.4);
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

.news-image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.news-item:hover .news-image-placeholder {
  border-color: rgba(68, 150, 115, 0.6);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(68, 150, 115, 0.2);
  transform: translateY(-5px);
}

.news-image-placeholder::before {
  /* content: 'Image Placeholder'; */
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

  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes logoGlow {

  0%,
  100% {
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
