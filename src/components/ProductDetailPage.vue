<template>
  <div class="product-detail-page" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <!-- Hero Section -->
    <!-- 自定义鼠标 -->
    <div class="cursor-ball" ref="cursorBall"></div>
    <div class="cursor-trail" v-for="(trail, index) in trails" :key="index" :style="trail.style"></div>
    <section class="hero-section" :class="productSlug">
      <!-- 背景装饰效果 -->
      <div class="hero-bg-effects">
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
        <div class="bg-particles">
          <div class="particle" v-for="n in 15" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="product-main-title">{{ productData.title }}</h1>
        <div class="product-main-image" v-if="productData.mainImage">
          <div class="image-glow"></div>
          <img :src="getImageUrl(productData.mainImage)" :alt="productData.title" />
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
  name: 'ProductDetailPage',
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
      productSlug: '',
      productData: {
        title: '',
        mainImage: null,
        efficacyData: [],
        benefits: []
      }
    };
  },
  created() {
    this.productSlug = this.$route.params.slug;
    this.loadProductData();
  },
  watch: {
    '$route.params.slug'(newSlug) {
      this.productSlug = newSlug;
      this.loadProductData();
    },
    slug(newVal) {
      this.loadProduct(newVal)
    }
  },
  mounted() {
    this.initCursorTrail();
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
    getImageUrl(filename) {
      // 分离路径和文件名，对每个部分进行编码
      const parts = filename.split('/');
      const encodedParts = parts.map(part => encodeURIComponent(part));
      return '/' + encodedParts.join('/');
    },
    getParticleStyle(index) {
      const size = Math.random() * 4 + 2;
      const delay = Math.random() * 3;
      const duration = Math.random() * 4 + 6;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      return {
        width: size + 'px',
        height: size + 'px',
        left: x + '%',
        top: y + '%',
        animationDelay: delay + 's',
        animationDuration: duration + 's'
      };
    },
    loadProductData() {
      // 根据不同的产品slug加载不同的数据
      const productMap = {
        'MetaTlr': {
          title: 'MetaTlr',
        },
        'clearacne-magic': {
          title: 'ClearAcne Magic',
          mainImage: '产品二级_slices/ClearAcneMagi.png',
          efficacyData: [
            { title: 'Inhibits P. acnes & S. aureus', description: 'Bacterial viability reduction' },
            { title: 'Inhibits acne-related inflammation & sebum secretion', description: 'Reduction of inflammatory cytokines' },
            { title: 'Inhibits 5α-reductase to reduce sebum', description: '5α-reductase inhibition' },
            { title: 'Improves skin barrier and moisturizing', description: 'TEWL and skin hydration improvement' }
          ],
          benefits: [
            'Anti-inflammatory',
            'Anti-bacterial',
            'Sebum control',
            'Skin barrier improvement',
            'Moisturizing effect'
          ]
        },
        'metacono': {
          title: 'MetaCono',
          mainImage: '产品二级_slices/MetaCono.png',
          efficacyData: [
            { title: 'Inhibits ROS generation & MMP-1 activity, promotes COL-I synthesis', description: 'ROS inhibition, MMP-1 inhibition, COL-I synthesis' },
            { title: 'Promotes dermal collagen production', description: 'Collagen production increase' },
            { title: 'Inhibits inflammation and prevents collagen/elastin degradation', description: 'Inflammatory cytokine reduction' },
            { title: 'Increases dermal density, moisturizes skin', description: 'Dermal density and skin hydration' }
          ],
          benefits: [
            'Anti-oxidant',
            'Anti-inflammatory',
            'Collagen synthesis promotion',
            'Skin density improvement',
            'Moisturizing effect'
          ]
        },
        'omniyouth': {
          title: 'OmniYouth',
          mainImage: '产品二级_slices/OmniYouth.png',
          efficacyData: [
            { title: 'Reduces intracellular ROS', description: 'ROS reduction' },
            { title: 'Reduces senescent cells', description: 'SA-β-gal positive cell reduction' },
            { title: 'Reduces UV-induced DNA damage', description: 'γH2AX positive cell reduction' },
            { title: 'Reduces SASP secretion', description: 'SASP factor reduction' }
          ],
          benefits: [
            'Anti-oxidant',
            'Anti-senescence',
            'DNA protection',
            'Anti-inflammatory',
            'Collagen synthesis promotion'
          ]
        },
        'metascalp': {
          title: 'Metascalp',
          mainImage: '产品二级_slices/PureSmile.png',
          efficacyData: [
            { title: 'Inhibits growth of acne-related bacteria', description: 'Bacterial inhibition' },
            { title: 'Inhibits growth of dandruff-related bacteria', description: 'Malassezia inhibition' },
            { title: 'Reduces allergy-related inflammation, oxidation and irritation', description: 'Inflammatory cytokine and ROS reduction' },
            { title: 'Reduces dandruff and irritation symptoms', description: 'Dandruff score and redness reduction' }
          ],
          benefits: [
            'Anti-bacterial',
            'Anti-inflammatory',
            'Dandruff reduction',
            'Barrier improvement'
          ]
        },
        'PureSmile': {
          title: 'PureSmile',
        },
      };

      this.productData = productMap[this.productSlug] || productMap['clearacne-magic'];
    }
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

.product-detail-page {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding-top: 80px;
}

.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 120px 60px 80px;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.1) 0%, rgba(61, 217, 201, 0.1) 100%);
  overflow: hidden;
}

/* 背景装饰效果 */
.hero-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: orbFloat 15s ease-in-out infinite;
}

.bg-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.4), transparent);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.bg-orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.4), transparent);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.bg-orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.3), transparent);
  bottom: 20%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes orbFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -30px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.bg-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.bg-particles .particle {
  position: absolute;
  background: rgba(68, 150, 115, 0.6);
  border-radius: 50%;
  animation: particleFloat 8s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.8);
}

@keyframes particleFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }

  25% {
    transform: translate(20px, -30px) scale(1.2);
    opacity: 0.8;
  }

  50% {
    transform: translate(-15px, -50px) scale(0.8);
    opacity: 0.6;
  }

  75% {
    transform: translate(30px, -20px) scale(1.1);
    opacity: 0.7;
  }
}

.hero-content {
  text-align: center;
  max-width: 1100px;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin: 0 auto;
  position: relative;
}

.product-main-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 0;
  color: #ffffff;
  text-shadow:
    0 0 30px rgba(68, 150, 115, 0.6),
    0 0 60px rgba(68, 150, 115, 0.4),
    0 0 90px rgba(61, 217, 201, 0.3),
    0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;
  letter-spacing: 2px;
  animation: titleGlow 3s ease-in-out infinite, titleSlideIn 1s ease-out 0.2s both;
  z-index: 3;
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-main-title::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  animation: titleAura 4s ease-in-out infinite;
}

.product-main-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #449673, #3DD9C9, transparent);
  animation: titleUnderline 2s ease-out 0.5s forwards;
  box-shadow: 0 0 20px rgba(68, 150, 115, 0.6);
}

@keyframes titleGlow {

  0%,
  100% {
    text-shadow:
      0 0 30px rgba(68, 150, 115, 0.6),
      0 0 60px rgba(68, 150, 115, 0.4),
      0 0 90px rgba(61, 217, 201, 0.3),
      0 4px 10px rgba(0, 0, 0, 0.3);
  }

  50% {
    text-shadow:
      0 0 40px rgba(68, 150, 115, 0.8),
      0 0 80px rgba(68, 150, 115, 0.6),
      0 0 120px rgba(61, 217, 201, 0.4),
      0 4px 10px rgba(0, 0, 0, 0.3);
  }
}

@keyframes titleAura {

  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes titleUnderline {
  to {
    width: 200px;
  }
}

.product-main-image {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  animation: imageFadeIn 1.2s ease-out 0.6s both;
  z-index: 2;
  cursor: pointer;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
  filter: blur(40px);
}

.product-main-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(68, 150, 115, 0.2);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  image-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  filter: contrast(1.05) brightness(1.02);
  animation: imageFloat 6s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

.product-main-image::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.3), rgba(61, 217, 201, 0.3)) padding-box,
    linear-gradient(135deg, rgba(68, 150, 115, 0.5), rgba(61, 217, 201, 0.5)) border-box;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 0;
  pointer-events: none;
}

.product-main-image:hover::after {
  opacity: 1;
  animation: borderGlow 2s ease-in-out infinite;
}

@keyframes borderGlow {

  0%,
  100% {
    box-shadow: 0 0 20px rgba(68, 150, 115, 0.3), inset 0 0 20px rgba(68, 150, 115, 0.1);
  }

  50% {
    box-shadow: 0 0 40px rgba(68, 150, 115, 0.6), 0 0 60px rgba(61, 217, 201, 0.4), inset 0 0 30px rgba(68, 150, 115, 0.2);
  }
}

.product-main-image:hover img {
  transform: translateY(-8px) scale(1.03);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.7),
    0 0 70px rgba(68, 150, 115, 0.5),
    0 0 100px rgba(61, 217, 201, 0.3);
  filter: contrast(1.15) brightness(1.08);
}

.product-main-image:hover .image-glow {
  animation: glowPulse 1.5s ease-in-out infinite;
  opacity: 0.8;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.5) 0%, rgba(61, 217, 201, 0.3) 40%, transparent 70%);
}

@keyframes imageFadeIn {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes imageFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes glowPulse {

  0%,
  100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
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

/* Footer (包含Contact Us) */
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

/* Contact Section inside Footer */
.footer .contact-section {
  padding: 0 0 100px;
  position: relative;
}

/* Footer Content */
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
  color: #000000;
}

.link-column a {
  position: relative;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-column.contact-us-column a {
  color: #000000;
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

@media (max-width: 768px) {
  .product-main-title {
    font-size: 36px;
  }

  .efficacy-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 20px;
  }
}
</style>
