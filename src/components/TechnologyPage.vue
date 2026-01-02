<template>
  <div class="technology-page" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <!-- 自定义鼠标 -->
    <div class="cursor-ball" ref="cursorBall"></div>
    <div class="cursor-trail" v-for="(trail, index) in trails" :key="index" :style="trail.style"></div>

    <!-- Hero区域 - Technical Platform介绍 -->
    <section class="hero-section" ref="heroSection" @wheel="handleWheel">
      <div class="hero-bg">
        <img :src="getSliceUrl('矩形 16.png')" alt="Hero Background" class="hero-bg-img" />
      </div>
      <!-- 粒子效果 -->
      <div class="particles">
        <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
      </div>
      <!-- 光晕效果 -->
      <div class="glow-orb glow-orb-1"></div>
      <div class="glow-orb glow-orb-2"></div>
      <div class="glow-orb glow-orb-3"></div>
      <div class="hero-content">
        <h1 class="hero-title">Technical Platform</h1>
        <p class="hero-subtitle">Our platform boasts four key advantages in transforming complex text into digestible
          data, shifting from experiment-driven to computation-driven approaches, transitioning simple components into
          system biology, and evolving from generic targeting to precision targeting.</p>
        <img src="/Technology_slices/Biotech 拷贝.png" alt="Platform" class="hero-cursive" />
        <!-- 滚动提示 -->
        <div class="scroll-indicator">
          <div class="scroll-arrow"></div>
          <span class="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>

    <!-- Technical Platform详情区 -->
    <section class="tech-details-section">
      <!-- 背景特效 -->
      <div class="section-bg-effects">
        <div class="bg-gradient-orb-1"></div>
        <div class="bg-gradient-orb-2"></div>
        <div class="bg-particles">
          <div class="bg-particle" v-for="n in 15" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      <div class="container">
        <div class="tech-icons-row">
          <div class="tech-icon-item">
            <div class="tech-icon">
              <img :src="getSliceUrl('图片2 拷贝.png')" alt="Digestible data" />
            </div>
            <p class="tech-icon-label">Digestible data</p>
          </div>
          <div class="tech-icon-item">
            <div class="tech-icon">
              <img src="/Technology_slices/AI.png" alt="Computation-driven" />
            </div>
            <p class="tech-icon-label">Computation-driven</p>
          </div>
          <div class="tech-icon-item">
            <div class="tech-icon">
              <img src="/Technology_slices/DNA.png" alt="System biology" />
            </div>
            <p class="tech-icon-label">System biology</p>
          </div>
          <div class="tech-icon-item">
            <div class="tech-icon">
              <img :src="getSliceUrl('图片4 拷贝.png')" alt="Precision targeting" />
            </div>
            <p class="tech-icon-label">Precision targeting</p>
          </div>
        </div>
        <h2 class="section-title">Technical Platform</h2>
        <div class="tech-grid">
          <!-- MetaLLM® -->
          <div class="tech-card" id="MetaLLM" ref="MetaLLM">
            <h3 class="tech-card-title">MetaLLM<sup>&reg;</sup></h3>
            <p class="tech-card-desc">Proprietary fine-grained large language model for scientific literature and
              patents—distilling human knowledge into structured data</p>
            <div class="tech-card-flow">
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片1.png')" alt="Complex Text" />
                </div>
                <span>Complex Text</span>
              </div>
              <div class="flow-arrow">
                <div class="arrow-shape"></div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片2.png')" alt="Digestible data" />
                </div>
                <span>Digestible data</span>
              </div>
            </div>
          </div>

          <!-- MetaPep® -->
          <div class="tech-card" id="MetaPep" ref="MetaPep">
            <h3 class="tech-card-title">MetaPep<sup>&reg;</sup></h3>
            <p class="tech-card-desc">Function-based and target-based peptide design with deep learning and molecular
              dynamics— Accelerate ingredient development with high success rate</p>
            <div class="tech-card-flow">
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片7.png')" alt="Simple component" />
                </div>
                <span>Simple component</span>
              </div>
              <div class="flow-arrow">
                <div class="arrow-shape"></div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片8.png')" alt="System biology" />
                </div>
                <span>System biology</span>
              </div>
            </div>
          </div>

          <!-- 中心Logo -->
          <div class="center-logo">
            <div class="logo-circle">
              <span class="logo-m">M</span>
            </div>
          </div>

          <!-- MetaKG® -->
          <div class="tech-card" id="MetaKG" ref="MetaKG">
            <h3 class="tech-card-title">MetaKG<sup>&reg;</sup></h3>
            <p class="tech-card-desc">Ultra-large biomedical knowledge graph with graph models to uncover hidden
              relations — Accelerate knowledge discovery and product development</p>
            <div class="tech-card-flow">
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片5.png')" alt="Experiment-driven" />
                </div>
                <span>Experiment-driven</span>
              </div>
              <div class="flow-arrow">
                <div class="arrow-shape"></div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片6.png')" alt="Computation-driven" />
                </div>
                <span>Computation-driven</span>
              </div>
            </div>
          </div>

          <!-- MetaOmics® -->
          <div class="tech-card" id="MetaOmics" ref="MetaOmics">
            <h3 class="tech-card-title">MetaOmics<sup>&reg;</sup></h3>
            <p class="tech-card-desc">Huge multi-omics data with various advanced analytical methods— Enable precision
              product development through population segmentation</p>
            <div class="tech-card-flow">
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片3.png')" alt="Generic targeting" />
                </div>
                <span>Generic targeting</span>
              </div>
              <div class="flow-arrow">
                <div class="arrow-shape"></div>
              </div>
              <div class="flow-item">
                <div class="flow-icon">
                  <img :src="getSliceUrl('图片4.png')" alt="Precision targeting" />
                </div>
                <span>Precision targeting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us & Footer 联系我们和页脚 -->
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from './parts/FooterSection.vue';

export default {
  name: 'TechnologyPage',
  components: {
    FooterSection
  },
  data() {
    return {
      trails: [],
      trailCount: 25,
      mouseX: 0,
      mouseY: 0,
      isMouseInPage: false
    };
  },
  computed: {
    contactIcon1() {
      return '/home_slices/' + encodeURIComponent('工作.png');
    },
    contactIcon2() {
      return '/home_slices/' + encodeURIComponent('合作伙伴.png');
    },
    contactIcon3() {
      return '/home_slices/' + encodeURIComponent('新闻.png');
    }
  },
  mounted() {
    this.initCursorTrail();
    this.initScrollSnap();
    this.scrollToHash()
  },
  watch: {
    '$route.hash'() {
      this.scrollToHash()
    }
  },

  beforeUnmount() {
    if (this.trailAnimationFrame) {
      cancelAnimationFrame(this.trailAnimationFrame);
    }
  },
  methods: {
    scrollToHash() {
      if (!this.$route.hash) return

      this.$nextTick(() => {
        // 再等一帧，确保布局稳定
        requestAnimationFrame(() => {
          const el = document.querySelector(this.$route.hash)
          if (!el) return

          const headerOffset = 76
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset

          window.scrollTo({
            top: y,
            behavior: 'smooth'
          })
        })
      })
    },
    getSliceUrl(filename) {
      return '/Technology_slices/' + encodeURIComponent(filename);
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
      if (this.$refs.cursorBall) {
        this.$refs.cursorBall.style.opacity = '0';
      }
      this.trails = [];
    },
    initCursorTrail() {
      this.positions = [];

      const updateTrails = () => {
        if (this.isMouseInPage) {
          this.positions.unshift({ x: this.mouseX, y: this.mouseY });

          if (this.positions.length > this.trailCount) {
            this.positions.pop();
          }

          this.trails = this.positions.map((pos, index) => {
            const opacity = 1 - (index / this.trailCount);
            const scale = 1 - (index / this.trailCount) * 0.5;
            const size = 24 * scale;

            return {
              style: {
                left: pos.x + 'px',
                top: pos.y + 'px',
                width: size + 'px',
                height: size + 'px',
                opacity: opacity * 0.7,
                transform: `translate(-50%, -50%) scale(${scale})`
              }
            };
          });
        }

        this.trailAnimationFrame = requestAnimationFrame(updateTrails);
      };

      updateTrails();
    },
    handleWheel(e) {
      // 只在Hero区域且向下滚动时触发
      if (this.$refs.heroSection && e.deltaY > 0) {
        const heroRect = this.$refs.heroSection.getBoundingClientRect();
        // 检查是否在Hero区域内
        if (heroRect.top <= 0 && heroRect.bottom > window.innerHeight / 2) {
          e.preventDefault();
          this.scrollToNextSection();
        }
      }
    },
    scrollToNextSection() {
      const nextSection = document.querySelector('.tech-details-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    initScrollSnap() {
      // 防止滚动过快
      let isScrolling = false;
      window.addEventListener('wheel', (e) => {
        if (isScrolling) {
          e.preventDefault();
          return;
        }

        if (e.deltaY > 50 && this.$refs.heroSection) {
          const heroRect = this.$refs.heroSection.getBoundingClientRect();
          if (heroRect.top >= 0 && heroRect.bottom <= window.innerHeight) {
            isScrolling = true;
            this.scrollToNextSection();
            setTimeout(() => {
              isScrolling = false;
            }, 1000);
          }
        }
      }, { passive: false });
    },
    getParticleStyle(index) {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = Math.random() * 3 + 2;

      return {
        width: size + 'px',
        height: size + 'px',
        left: left + '%',
        top: top + '%',
        animationDelay: delay + 's',
        animationDuration: duration + 's'
      };
    }
  }
};
</script>

<style scoped>
/* 基础样式 */
.technology-page {
  font-family: 'Segoe UI', 'SF Pro Display', -apple-system, sans-serif;
  color: #ffffff;
  background-image: url('/homebg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  cursor: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* 自定义鼠标 */
.cursor-ball {
  position: fixed;
  width: 22px;
  height: 22px;
  background: radial-gradient(circle, #3DD9C9 0%, #2DBDA8 50%, rgba(61, 217, 201, 0.3) 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(61, 217, 201, 0.8), 0 0 20px rgba(61, 217, 201, 0.5);
  transition: opacity 0.3s ease;
  opacity: 0;
}

.cursor-trail {
  position: fixed;
  background: radial-gradient(circle, #3DD9C9 0%, rgba(61, 217, 201, 0.5) 50%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 12px rgba(61, 217, 201, 0.5);
}

/* 导航栏 - 和主页一致 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  padding: 20px 0;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-text-group {
  display: flex;
  align-items: center;
  gap: 10px;
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
}

.logo-sub {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.navbar-links {
  display: flex;
  gap: 50px;
  align-items: center;
}

.navbar-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
}

.navbar-links a:hover,
.navbar-links a.active {
  color: #3DD9C9;
}

.navbar-links a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #3DD9C9;
}

/* Hero区域 */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 60px 60px;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(0.9);
}

.hero-section:hover .hero-bg-img {
  transform: scale(1.05);
  filter: brightness(1);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(68, 150, 115, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(61, 217, 201, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
  animation: pulseGlow 4s ease-in-out infinite;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  animation: floatRotate 20s linear infinite;
}

@keyframes pulseGlow {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes floatRotate {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  50% {
    transform: translate(-50px, 50px) rotate(180deg);
  }

  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

/* 粒子效果 */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.8) 0%, rgba(61, 217, 201, 0.4) 50%, transparent 100%);
  border-radius: 50%;
  animation: particleFloat 5s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}

@keyframes particleFloat {

  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.3;
  }

  25% {
    transform: translateY(-20px) translateX(10px) scale(1.2);
    opacity: 0.6;
  }

  50% {
    transform: translateY(-40px) translateX(-10px) scale(0.8);
    opacity: 0.4;
  }

  75% {
    transform: translateY(-20px) translateX(5px) scale(1.1);
    opacity: 0.5;
  }
}

/* 光晕球体 */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  filter: blur(40px);
}

.glow-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.4) 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation: orbFloat1 8s ease-in-out infinite;
}

.glow-orb-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.3) 0%, transparent 70%);
  bottom: 20%;
  right: 15%;
  animation: orbFloat2 10s ease-in-out infinite;
}

.glow-orb-3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.3) 0%, transparent 70%);
  top: 50%;
  right: 30%;
  animation: orbFloat3 12s ease-in-out infinite;
}

@keyframes orbFloat1 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(30px, -30px) scale(1.2);
  }
}

@keyframes orbFloat2 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-20px, 20px) scale(1.1);
  }
}

@keyframes orbFloat3 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(15px, -15px) scale(1.15);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 550px;
  padding-left: 40px;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.hero-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #449673, #3DD9C9);
  transition: width 0.6s ease;
  animation: underlineExpand 1.5s ease-out 0.5s forwards;
}

@keyframes underlineExpand {
  to {
    width: 150px;
  }
}

.hero-section:hover .hero-title {
  text-shadow: 0 0 30px rgba(68, 150, 115, 0.5), 0 0 50px rgba(68, 150, 115, 0.3);
  transform: translateX(5px);
}

.hero-subtitle {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.hero-section:hover .hero-subtitle {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 0 10px rgba(68, 150, 115, 0.2);
}

.hero-cursive {
  height: 50px;
  width: auto;
  opacity: 0.8;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(68, 150, 115, 0.3));
}

.hero-section:hover .hero-cursive {
  opacity: 1;
  transform: translateX(5px);
  filter: drop-shadow(0 0 20px rgba(68, 150, 115, 0.5));
}

/* 滚动提示 */
.scroll-indicator {
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 3;
  animation: bounceIndicator 2s ease-in-out infinite;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: linear-gradient(180deg, rgba(68, 150, 115, 0.8) 0%, transparent 100%);
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 10px;
  height: 10px;
  border-right: 2px solid rgba(68, 150, 115, 0.8);
  border-bottom: 2px solid rgba(68, 150, 115, 0.8);
  transform: rotate(45deg);
}

.scroll-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 2px;
  text-transform: uppercase;
}

@keyframes bounceIndicator {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 0.6;
  }

  50% {
    transform: translateX(-50%) translateY(10px);
    opacity: 1;
  }
}

/* 技术图标区 */
.tech-icons-row {
  display: flex;
  justify-content: center;
  gap: 60px;
  position: relative;
  margin-bottom: 40px;
  z-index: 1;
}

/* 图标连接线动画 */
.tech-icons-row::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(68, 150, 115, 0.2) 20%,
      rgba(68, 150, 115, 0.5) 50%,
      rgba(68, 150, 115, 0.2) 80%,
      transparent 100%);
  transform: translateY(-50%);
  z-index: 0;
  animation: lineFlow 3s ease-in-out infinite;
}

@keyframes lineFlow {

  0%,
  100% {
    opacity: 0.3;
    transform: translateY(-50%) scaleX(1);
  }

  50% {
    opacity: 0.8;
    transform: translateY(-50%) scaleX(1.05);
  }
}

/* 连接线效果 */
.tech-icons-row::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(68, 150, 115, 0.3) 20%,
      rgba(68, 150, 115, 0.5) 50%,
      rgba(68, 150, 115, 0.3) 80%,
      transparent 100%);
  z-index: 0;
  animation: linePulse 3s ease-in-out infinite;
}

@keyframes linePulse {

  0%,
  100% {
    opacity: 0.3;
    transform: scaleX(1);
  }

  50% {
    opacity: 0.6;
    transform: scaleX(1.05);
  }
}

.tech-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: iconFadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.tech-icon-item:nth-child(1) {
  animation-delay: 0.1s;
}

.tech-icon-item:nth-child(2) {
  animation-delay: 0.2s;
}

.tech-icon-item:nth-child(3) {
  animation-delay: 0.3s;
}

.tech-icon-item:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes iconFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.tech-icon-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 2px solid rgba(68, 150, 115, 0.2);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: -1;
}

.tech-icon-item:hover::before {
  opacity: 1;
  width: 140px;
  height: 140px;
  border-color: rgba(68, 150, 115, 0.5);
  box-shadow:
    0 0 30px rgba(68, 150, 115, 0.3),
    inset 0 0 30px rgba(68, 150, 115, 0.1);
  animation: ripple 1.5s ease-out infinite;
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0;
  }
}

.tech-icon-item:hover {
  transform: translateY(-5px);
}

.tech-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 20, 20, 0.4);
  border: 2px solid rgba(68, 150, 115, 0.2);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
  backdrop-filter: blur(10px);
}

.tech-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.tech-icon-item:hover .tech-icon::before {
  width: 120px;
  height: 120px;
  filter: blur(15px);
}

.tech-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  border: 2px solid rgba(68, 150, 115, 0);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.tech-icon-item:hover .tech-icon::after {
  transform: translate(-50%, -50%) scale(1.3);
  border-color: rgba(68, 150, 115, 0.4);
  box-shadow: 0 0 20px rgba(68, 150, 115, 0.3);
}

.tech-icon-item:hover .tech-icon {
  border-color: rgba(68, 150, 115, 0.6);
  background: rgba(30, 30, 30, 0.6);
  box-shadow:
    0 0 25px rgba(68, 150, 115, 0.5),
    0 0 50px rgba(68, 150, 115, 0.2),
    inset 0 0 15px rgba(68, 150, 115, 0.1);
  transform: scale(1.05);
}

.tech-icon img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.9) drop-shadow(0 0 5px rgba(68, 150, 115, 0.3));
  position: relative;
  z-index: 1;
}

.tech-icon-item:hover .tech-icon img {
  filter: brightness(1.3) drop-shadow(0 0 20px rgba(68, 150, 115, 0.8));
  transform: scale(1.1);
}

.tech-icon-label {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

.tech-icon-label::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3DD9C9);
  transition: width 0.3s ease;
}

.tech-icon-item:hover .tech-icon-label {
  color: #449673;
  text-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
  transform: translateY(-3px);
  background: rgba(20, 20, 20, 0.6);
}

.tech-icon-item:hover .tech-icon-label::before {
  width: 80%;
}

/* 技术平台详情区 */
.tech-details-section {
  padding: 60px 0 80px;
  background: transparent;
  position: relative;
  overflow: hidden;
}

/* 背景特效 */
.section-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-gradient-orb-1 {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  top: -200px;
  left: -200px;
  animation: orbFloat1 20s ease-in-out infinite;
  filter: blur(60px);
}

.bg-gradient-orb-2 {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  bottom: -150px;
  right: -150px;
  animation: orbFloat2 25s ease-in-out infinite;
  filter: blur(50px);
}

@keyframes orbFloat1 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(100px, 100px) scale(1.1);
  }

  66% {
    transform: translate(-50px, 150px) scale(0.9);
  }
}

@keyframes orbFloat2 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-100px, -100px) scale(1.15);
  }
}

.bg-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-particle {
  position: absolute;
  background: rgba(68, 150, 115, 0.4);
  border-radius: 50%;
  animation: particleFloat 15s linear infinite;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) translateX(0) scale(0);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(-100px) translateX(100px) scale(1);
    opacity: 0;
  }
}

.section-title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #ffffff;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  transition: all 0.4s ease;
  cursor: default;
  opacity: 0;
  transform: translateX(-30px);
  animation: titleSlideIn 0.8s ease-out 0.3s forwards;
  z-index: 1;
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
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

.section-title.center {
  text-align: center;
}

.section-title.white {
  color: #ffffff;
  text-align: left;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
}

/* 中心Logo */
.center-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  pointer-events: none;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3DD9C9 0%, #449673 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 20px rgba(61, 217, 201, 0.4),
    0 0 40px rgba(68, 150, 115, 0.3);
  transition: all 0.3s ease;
  position: relative;
  animation: logoRotate 20s linear infinite;
}

.logo-circle::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: conic-gradient(from 0deg,
      rgba(68, 150, 115, 0.3),
      rgba(61, 217, 201, 0.3),
      rgba(68, 150, 115, 0.3));
  z-index: -1;
  animation: logoGlow 3s ease-in-out infinite;
  filter: blur(10px);
}

@keyframes logoRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes logoGlow {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.logo-circle:hover {
  transform: scale(1.15) rotate(180deg);
  box-shadow:
    0 8px 40px rgba(61, 217, 201, 0.8),
    0 0 80px rgba(68, 150, 115, 0.6);
  animation-duration: 5s;
}

.logo-m {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

/* 技术卡片 */
.tech-card {
  background: rgba(20, 20, 20, 0.7);
  border: 1px solid rgba(61, 217, 201, 0.2);
  border-radius: 16px;
  padding: 28px 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  animation: cardFadeIn 0.8s ease-out forwards;
}

.tech-card:nth-child(1) {
  animation-delay: 0.5s;
}

.tech-card:nth-child(2) {
  animation-delay: 0.6s;
}

.tech-card:nth-child(3) {
  animation-delay: 0.7s;
}

.tech-card:nth-child(4) {
  animation-delay: 0.8s;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.05) 0%, rgba(61, 217, 201, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  border-radius: 16px;
}

.tech-card::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg,
      rgba(68, 150, 115, 0.3),
      rgba(61, 217, 201, 0.3),
      rgba(68, 150, 115, 0.3));
  border-radius: 16px;
  opacity: 0;
  z-index: -1;
  filter: blur(10px);
  transition: opacity 0.4s ease;
  animation: borderGlow 3s ease-in-out infinite;
}

@keyframes borderGlow {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 0.3;
  }
}

.tech-card:hover::after {
  opacity: 0.6;
  animation: borderGlowHover 1.5s ease-in-out infinite;
}

@keyframes borderGlowHover {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

.tech-card:hover {
  border-color: rgba(68, 150, 115, 0.5);
  box-shadow:
    0 15px 50px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(68, 150, 115, 0.3),
    inset 0 0 20px rgba(68, 150, 115, 0.05);
  transform: translateY(-8px) scale(1.02);
}

.tech-card:hover::before {
  opacity: 1;
}

.tech-card-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.tech-card:hover .tech-card-title {
  color: #449673;
  text-shadow: 0 0 15px rgba(68, 150, 115, 0.4);
}

.tech-card-desc {
  font-size: 13px;
  line-height: 1.7;
  color: #ffffff;
  margin-bottom: 28px;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.tech-card:hover .tech-card-desc {
  color: #ffffff;
}

.tech-card-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  position: relative;
  z-index: 1;
}

.flow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.flow-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(61, 217, 201, 0.2);
  transition: all 0.4s ease;
}

.tech-card:hover .flow-icon {
  border-color: rgba(68, 150, 115, 0.4);
  background: rgba(68, 150, 115, 0.1);
  transform: scale(1.05);
}

.flow-icon img {
  width: 55px;
  height: 55px;
  object-fit: contain;
  transition: all 0.4s ease;
}

.tech-card:hover .flow-icon img {
  filter: brightness(1.2) drop-shadow(0 0 10px rgba(68, 150, 115, 0.3));
}

.flow-icon.experiment {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-icon.experiment svg {
  width: 100%;
  height: 100%;
  transition: all 0.4s ease;
}

.tech-card:hover .flow-icon.experiment svg {
  filter: brightness(1.3) drop-shadow(0 0 10px rgba(68, 150, 115, 0.4));
  transform: scale(1.05);
}

.tech-card:hover .flow-icon.experiment svg circle,
.tech-card:hover .flow-icon.experiment svg path {
  stroke: #449673;
  fill: #449673;
}

.flow-item span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  transition: color 0.3s ease;
  font-weight: 400;
}

.tech-card:hover .flow-item span {
  color: rgba(255, 255, 255, 0.95);
}

.flow-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 60px;
  height: 28px;
  position: relative;
  transition: all 0.3s ease;
}

.arrow-shape {
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg,
      rgba(68, 150, 115, 0.05) 0%,
      rgba(68, 150, 115, 0.15) 20%,
      rgba(68, 150, 115, 0.4) 50%,
      rgba(61, 217, 201, 0.7) 80%,
      rgba(61, 217, 201, 0.9) 100%);
  position: relative;
  border-radius: 4px;
  animation: arrowPulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.3);
}

.arrow-shape::after {
  content: '';
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 14px solid;
  border-left-color: rgba(61, 217, 201, 0.9);
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  animation: arrowHeadPulse 2s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(68, 150, 115, 0.5));
}

.tech-card:hover .arrow-shape {
  background: linear-gradient(90deg,
      rgba(68, 150, 115, 0.1) 0%,
      rgba(68, 150, 115, 0.25) 20%,
      rgba(68, 150, 115, 0.5) 50%,
      rgba(61, 217, 201, 0.85) 80%,
      rgba(61, 217, 201, 1) 100%);
  box-shadow: 0 0 20px rgba(68, 150, 115, 0.6);
  transform: translateX(3px);
}

.tech-card:hover .arrow-shape::after {
  border-left-color: rgba(61, 217, 201, 1);
  filter: drop-shadow(0 0 12px rgba(68, 150, 115, 0.7));
}

@keyframes arrowPulse {

  0%,
  100% {
    opacity: 0.6;
    transform: scaleX(1);
  }

  50% {
    opacity: 1;
    transform: scaleX(1.1);
  }
}

@keyframes arrowHeadPulse {

  0%,
  100% {
    opacity: 0.6;
    transform: translateY(-50%) scale(1);
  }

  50% {
    opacity: 1;
    transform: translateY(-50%) scale(1.15);
  }
}
</style>
