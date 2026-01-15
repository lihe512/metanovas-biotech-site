<template>
  <div class="media-page">
    <section class="hero-section" ref="heroSection">
      <div class="container">
        <div class="hero-header">
          <h1 class="page-title">Corporate News</h1>
          <p class="hero-description">
            IFSCC is the highest authority and most influential organization in the global cosmetics industry.
            MetaNovas continues to deliver breakthroughs in AI-driven biotechnology.
          </p>
        </div>

        <div class="featured-news-card" @click="readArticle(0)">
          <div class="featured-bg-glow"></div>
          <div class="featured-content">
            <div class="featured-badge">
              <span class="pulse-dot"></span> Latest / 2025.11.27
            </div>
            <h2 class="featured-title">
              MetaNovas' World's First AI-Designed Novel Molecule "AMP33" Completes Medical Device Raw Material
              Registration
            </h2>
            <p class="featured-desc">
              MetaNovas Biotech’s first AI-designed peptide, AMP33, has completed Medical Device Master File
              registration (No. M2025400-000). Developed via AI-driven simulation, AMP33 supports skin microbiome
              balance, meets medical-grade safety standards, and enables wound-healing and post-procedure care.
            </p>
            <button class="featured-btn">
              Read Article <span class="arrow">→</span>
            </button>
          </div>

          <div class="featured-image-wrapper">
            <img src="/media_images/1.png" alt="AMP33" class="featured-img" />
            <div class="img-overlay"></div>
          </div>
        </div>

        <div class="scroll-indicator" @click="scrollToNews">
          <span class="scroll-text">Explore More News</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </section>

    <section class="news-section" ref="newsSection">
      <div class="container">
        <div class="news-list">

          <div class="news-item">
            <div class="news-date-badge">2025.11.05</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(1)">Beauty Connect LA 2025 | MetaNovas Successfully
                  Hosted the "From Science to Market" Themed Workshop</h2>
                <p class="news-description">
                  MetaNovas Biotech successfully hosted the From Science to Market workshop at Beauty Connect LA 2025,
                  bringing together investors, scientists, and brand leaders to explore how AI-driven scientific
                  innovation accelerates the journey from laboratory research to market-ready beauty brands.
                </p>
                <button class="read-more-btn" @click="readArticle(1)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/2.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2025.10.21</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(2)">MetaNovas Invited to Speak at the FaB BeautyTech
                  AI Founders Forum in San Francisco</h2>
                <p class="news-description">
                  MetaNovas Biotech was invited to the FaB BeautyTech AI Founders Forum in San Francisco, where founder
                  Lun Yu joined global beauty and biotech innovators to discuss how AI accelerates efficacy skincare,
                  personalized formulations, and the integration of biotechnology into next-generation consumer beauty.
                </p>
                <button class="read-more-btn" @click="readArticle(2)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/3.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2025.09.17</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(3)">MetaNovas Partners with L'Oréal at IFSCC 2025 to
                  Present AI-Driven Collagen Research</h2>
                <p class="news-description">
                  MetaNovas Biotech partnered with L'Oréal at the 35th IFSCC Congress in Cannes to present an AI-driven
                  research framework combining biological knowledge graphs and experimental validation, enabling
                  accelerated collagen mechanism analysis and ingredient screening for next-generation skincare
                  innovation.
                </p>
                <button class="read-more-btn" @click="readArticle(3)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/4.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2025.05.16</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(4)">MetaNovas Partners with HCP Group at CBE 2025 to
                  Showcase AI-Enabled Botanical Innovation</h2>
                <p class="news-description">
                  MetaNovas Biotech partnered with HCP Group at CBE 2025 in Shanghai to present an AI-driven botanical
                  research collaboration, demonstrating how artificial intelligence accelerates the discovery,
                  optimization, and application of traditional Chinese plant actives for next-generation skincare
                  innovation.
                </p>
                <button class="read-more-btn" @click="readArticle(4)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/5.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2025.04.10</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(5)">MetaNovas Debuts at In-Cosmetics Global 2025,
                  Showcasing AI-Driven Ingredient Innovation</h2>
                <p class="news-description">
                  MetaNovas Biotech made its European debut at In-Cosmetics Global 2025 in Amsterdam, presenting its
                  AI-powered ingredient R&D platform and sharing cutting-edge insights on AI-driven cosmetic innovation,
                  attracting attention from global brands and industry experts.
                </p>
                <button class="read-more-btn" @click="readArticle(5)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/6.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2025.02.27</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(6)">MetaNovas & PCHI Successfully Host AI-Driven
                  Cosmetics Innovation Forum</h2>
                <p class="news-description">
                  MetaNovas, in partnership with PCHI, successfully hosted an AI-focused forum on cosmetics innovation,
                  attracting industry experts and brand leaders. The event showcased AI applications in skincare R&D,
                  personalized beauty, and microbiome-based solutions, highlighting the transformative potential of AI
                  in the beauty industry.
                </p>
                <button class="read-more-btn" @click="readArticle(6)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/7.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2025.02.05</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(7)">MetaNovas CEO Named to Forbes China 100
                  Outstanding Young Returnees</h2>
                <p class="news-description">
                  MetaNovas Biotech founder and CEO Meijie Wang was selected for the Forbes China 100 Outstanding Young
                  Returnees in the "Growth Potential" category. Recognized for leadership in AI-driven biotechnology,
                  she has led MetaNovas to pioneer functional ingredient platforms, secure international patents, and
                  collaborate with global brands, advancing AI-powered bioactive innovation.
                </p>
                <button class="read-more-btn" @click="readArticle(7)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/8.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2024.12.04</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(8)">MetaNovas Secures Series A Funding to Accelerate
                  AI-Driven Discovery of Consumer Health Materials</h2>
                <p class="news-description">
                  MetaNovas Biotech has closed its Series A financing led by GL Ventures and Baoding Capital. Powered by
                  its AI platform and knowledge graph, the company accelerates functional peptide discovery, reducing
                  R&D time and cost while expanding global collaborations and commercialization.
                </p>
                <button class="read-more-btn" @click="readArticle(8)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/9.png" alt="" class="news-image" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="news-item">
            <div class="news-date-badge">2024.11.25</div>
            <div class="news-content-wrapper">
              <div class="news-text-content">
                <h2 class="news-category" @click.stop="readArticle(9)">MetaNovas to Showcase AI-Driven Cosmetic
                  Innovation at SCC78 in Los Angeles</h2>
                <p class="news-description">
                  MetaNovas Biotech, the only Chinese company selected for the 78th Annual SCC Meeting, will present in
                  the "AI Beauty Revolution" session, demonstrating how its AI platform accelerates cosmetic ingredient
                  and product development to global industry leaders.
                </p>
                <button class="read-more-btn" @click="readArticle(9)">Read it</button>
              </div>
              <div class="news-image-placeholder">
                <img src="/media_images/10-3.png" alt="" class="news-image" loading="lazy" />
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
      trails: [],
      trailCount: 40,
      mouseX: 0,
      mouseY: 0,
      isMouseInPage: false,
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
  },
  beforeUnmount() {
    if (this.trailAnimationFrame) cancelAnimationFrame(this.trailAnimationFrame);
  },
  methods: {
    scrollToNews() {
      if (this.$refs.newsSection) {
        this.$refs.newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    readArticle(index) {
      window.open(this.newsLinks[index], '_blank');
    },
    onMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.isMouseInPage = true;
      if (this.$refs.cursorBall) {
        this.$refs.cursorBall.style.left = e.clientX + 'px';
        this.$refs.cursorBall.style.top = e.clientY + 'px';
        this.$refs.cursorBall.style.opacity = '1';
      }
    },
    onMouseLeave() {
      this.isMouseInPage = false;
      if (this.$refs.cursorBall) this.$refs.cursorBall.style.opacity = '0';
      this.trails = [];
    },
    initCursorTrail() {
      this.positions = [];
      const updateTrails = () => {
        if (this.isMouseInPage) {
          this.positions.unshift({ x: this.mouseX, y: this.mouseY });
          if (this.positions.length > this.trailCount) this.positions.pop();
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
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.news-item, .featured-news-card').forEach(el => observer.observe(el));
    }
  }
};
</script>

<style scoped>
/* 基础设置 */
.media-page {
  min-height: 100vh;
  /* 调整背景以适应高光 */
  background: radial-gradient(circle at 50% 10%, #0d3a2d 0%, #000000 60%);
  color: #ffffff;
  padding-top: 80px;
  position: relative;
  overflow-x: hidden;
  font-family: "Segoe UI", sans-serif;
  cursor: none;
}

.media-page a,
.media-page button,
.media-page .news-category,
.media-page .featured-news-card {
  cursor: none;
}

.container {
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 40px;
}

/* --- Hero Section & Featured News --- */
.hero-section {
  padding: 60px 0 80px;
  position: relative;
  min-height: 85vh;
  /* 撑开首屏高度 */
  display: flex;
  flex-direction: column;
}

.hero-header {
  margin-bottom: 50px;
  max-width: 800px;
}

.page-title {
  font-size: 72px;
  font-weight: 700;
  background: linear-gradient(90deg, #ffffff, #449673);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 24px;
  letter-spacing: -1px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
}

/* ✨ Featured News Card Styling ✨ */
.featured-news-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 60px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(68, 150, 115, 0.3);
  border-radius: 24px;
  padding: 50px;
  margin-bottom: 60px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(20px);
}

.featured-news-card:hover {
  transform: translateY(-5px);
  border-color: #449673;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(68, 150, 115, 0.1);
}

/* 动态光晕背景 */
.featured-bg-glow {
  position: absolute;
  top: -50%;
  left: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.15) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
  animation: glowMove 10s ease-in-out infinite alternate;
}

@keyframes glowMove {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(50px, 30px);
  }
}

.featured-content {
  flex: 1;
  position: relative;
  z-index: 2;
}

.featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #3DD9C9;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  background: rgba(61, 217, 201, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(61, 217, 201, 0.2);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #3DD9C9;
  border-radius: 50%;
  box-shadow: 0 0 10px #3DD9C9;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(61, 217, 201, 0.7);
  }

  70% {
    opacity: 1;
    box-shadow: 0 0 0 6px rgba(61, 217, 201, 0);
  }

  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(61, 217, 201, 0);
  }
}

.featured-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 24px;
  transition: color 0.3s ease;
}

.featured-news-card:hover .featured-title {
  background: linear-gradient(90deg, #ffffff, #3DD9C9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.featured-desc {
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 35px;
}

.featured-btn {
  background: linear-gradient(135deg, #449673 0%, #31856e 100%);
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(68, 150, 115, 0.4);
}

.featured-btn:hover {
  transform: translateX(5px);
  background: linear-gradient(135deg, #3DD9C9 0%, #449673 100%);
  box-shadow: 0 6px 20px rgba(61, 217, 201, 0.5);
}

.featured-image-wrapper {
  flex: 0 0 45%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.featured-news-card:hover .featured-img {
  transform: scale(1.05);
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  pointer-events: none;
}


/* --- News List Section --- */
.news-section {
  padding-bottom: 100px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.news-item {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  padding-left: 140px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.news-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 时间标签样式 */
.news-date-badge {
  position: absolute;
  left: 0;
  top: 5px;
  width: 110px;
  height: 36px;
  background: linear-gradient(135deg, #2a5a4a 0%, #15352c 100%);
  border: 1px solid rgba(68, 150, 115, 0.4);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  color: #a4e6d2;
  transition: all 0.3s ease;
}

.news-item:hover .news-date-badge {
  background: #449673;
  color: white;
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.5);
}

/* 列表内容 */
.news-content-wrapper {
  display: flex;
  gap: 35px;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 60px;
}

.news-item:last-child .news-content-wrapper {
  border-bottom: none;
}

.news-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-category {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  /* margin-bottom: 20px; */
  margin-top: 0px;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.news-category:hover {
  color: #3DD9C9;
}

.news-description {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 25px;
}

.read-more-btn {
  align-self: flex-start;
  background: transparent;
  color: #449673;
  border: 1px solid #449673;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background: #449673;
  color: white;
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.4);
}

.news-image-placeholder {
  flex: 0 0 350px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(0.9);
}

.news-item:hover .news-image {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Scroll Indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-top: 40px;
  opacity: 0.7;
  transition: opacity 0.3s;
  cursor: pointer;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-text {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.scroll-arrow {
  font-size: 24px;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .featured-news-card {
    flex-direction: column-reverse;
    gap: 30px;
    padding: 30px;
  }

  .featured-image-wrapper {
    width: 100%;
    height: 300px;
  }

  .page-title {
    font-size: 56px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 42px;
  }

  .news-item {
    padding-left: 0;
    flex-direction: column;
  }

  .news-date-badge {
    position: relative;
    margin-bottom: 15px;
    width: fit-content;
    padding: 0 20px;
  }

  .news-content-wrapper {
    flex-direction: column-reverse;
    gap: 30px;
    border-bottom: none;
  }

  .news-image-placeholder {
    width: 100%;
    flex: auto;
    height: 250px;
  }

  .container {
    padding: 0 25px;
  }
}
</style>