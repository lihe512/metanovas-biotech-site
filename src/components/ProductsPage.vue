<template>
  <div class="products-page">
    <!-- Hero区域 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img :src="getImageUrl('图层 744.png')" alt="Hero Background" class="hero-bg-img" />
      </div>
      <!-- 粒子效果 -->
      <div class="particles">
        <div class="particle" v-for="n in 25" :key="n" :style="getParticleStyle(n)"></div>
      </div>
      <!-- 光晕效果 -->
      <div class="glow-orb glow-orb-1"></div>
      <div class="glow-orb glow-orb-2"></div>
      <div class="glow-orb glow-orb-3"></div>
      <div class="hero-content">
        <h1 class="hero-title">Products introduction</h1>
        <p class="hero-subtitle">Our company currently offers five major products that have achieved widespread
          application. Furthermore, our company possesses robust independent research and development capabilities, with
          a number of high-quality products currently in the process of being developed.</p>
        <!-- 滚动提示 -->
        <div class="scroll-indicator">
          <div class="scroll-arrow"></div>
          <span class="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>

    <!-- 产品列表 -->
    <section class="products-section">
      <div class="container">
        <!-- 产品1: Anti-inflammatory peptide -->
        <div class="product-item">
          <div class="product-number-wrapper">
            <div class="product-number">01</div>
          </div>
          <h2 class="product-title">Skin Health & Anti-Aging</h2>
          <p class="product-desc">Our peptide solutions target the key causes of skin concerns and aging — from
            inflammation and oil imbalance to UV damage and cellular vitality. Perfect for premium creams, serums and
            treatments that deliver visible, long-lasting results with high safety.</p>
          <div class="product-image">
            <!-- <img :src="getImageUrl('产品 上传_slices/5f32efefce24ecab5d982c2f71bceb481d42106550780a-j6abzI.png')"
              alt="Anti-inflammatory peptide" class="product-img" /> -->
          </div>
          <div class="product-tags">
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Balanced, calmer skin <br>(for sensitive & acne-prone)</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Protection from daily environmental <br>stress & photoaging</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Smoother texture, reduced fine lines, <br>youthful glow</span>
            </div>
          </div>
        </div>

        <!-- 产品2: Anti-acne Peptide -->
        <div class="product-item">
          <div class="product-number-wrapper">
            <div class="product-number">02</div>
          </div>
          <h2 class="product-title">Scalp & Hair Care</h2>
          <p class="product-desc">We provide complete peptide support for healthier scalp and stronger, fuller hair —
            addressing flaking, follicle health, growth cycles and even color restoration. Ideal for shampoos, serums,
            scalp treatments and anti-gray products.</p>
          <div class="product-image">
            <!-- <div class="image-placeholder green">
              <span>Product Image</span>
            </div> -->
            <!-- <img :src="getImageUrl('产品 上传_slices/a175caef3866d383bd63c48efe6016c40a84042316ee1e-lthRuO_fw1200.png')"
              alt="Gingival Protection Peptide" class="product-img" /> -->
          </div>
          <div class="product-tags">
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Soothed, balanced scalp <br>(less dandruff & irritation)</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Enhanced hair density & <br>growth support</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Natural color maintenance & <br>gray hair delay</span>
            </div>
          </div>
        </div>

        <!-- 产品3: Anti-wrinkle peptide -->
        <div class="product-item">
          <div class="product-number-wrapper">
            <div class="product-number">03</div>
          </div>
          <h2 class="product-title">Oral Health</h2>
          <p class="product-desc">Gentle peptides that keep the oral microbiome in balance while controlling harmful
            bacteria and soothing gums. Great for toothpastes, mouthwashes and professional dental care lines.</p>
          <div class="product-image">
            <!-- <div class="image-placeholder cyan">
              <span>Product Image</span>
            </div> -->
            <!-- <img :src="getImageUrl('产品 上传_slices/8ee403a6bb5608f7a91f36fb4b8f592e27ae8554260b58-GtoNvz.png')"
              alt="Vaginal Care Antimicrobial Peptide" class="product-img" /> -->
          </div>
          <div class="product-tags">
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Healthy gum protection</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Fresh breath with natural flora support</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Mild yet effective daily care</span>
            </div>
          </div>
        </div>
        <!-- 产品4: Gingival Protection Peptide -->
        <div class="product-item">
          <div class="product-number-wrapper">
            <div class="product-number">04</div>
          </div>
          <h2 class="product-title">Intimate Health</h2>
          <p class="product-desc">Mild, microbiome-friendly peptides designed for sensitive areas — effective against
            unwanted bacteria while maintaining natural comfort and balance. Suitable for daily intimate washes and
            specialized wellness products.</p>
          <div class="product-image">
            <!-- <img :src="getImageUrl('产品 上传_slices/a175caef3866d383bd63c48efe6016c40a84042316ee1e-lthRuO_fw1200.png')"
              alt="Gingival Protection Peptide" class="product-img" /> -->
          </div>
          <div class="product-tags">
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Gentle pathogen control</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Reduced irritation & inflammation</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Daily confidence & natural balance</span>
            </div>
          </div>
        </div>
        <!-- 产品5: Vaginal Care Antimicrobial Peptide -->
        <div class="product-item">
          <div class="product-number-wrapper">
            <div class="product-number">05</div>
          </div>
          <h2 class="product-title">Custom Peptide Solutions</h2>
          <p class="product-desc">Using our proprietary AI platform, we design and optimize custom peptides exactly
            for your brand's needs — new claims, specific mechanisms, exclusive formulations. Accelerate your
            innovation with fast development from concept to market.</p>
          <div class="product-image">
            <!-- <img :src="getImageUrl('产品 上传_slices/8ee403a6bb5608f7a91f36fb4b8f592e27ae8554260b58-GtoNvz.png')"
              alt="Vaginal Care Antimicrobial Peptide" class="product-img" /> -->
          </div>
          <div class="product-tags">
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Tailored to your target consumer & claims</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>IP-protected solutions for strategic partners</span>
            </div>
            <div class="tag">
              <span class="tag-icon">🧬</span>
              <span>Trusted by global leading beauty brands</span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="why-choose-section">
          <h2 class="section-title center-title">Why Partering With MetaNovas</h2>
          <!-- <h2 class="product-title">Why Partering With MetaNovas</h2> -->
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <h3>Unlock Novel Efficacy</h3>
              <p>Mine untapped value from ingredients and build IP moats for premium positioning</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22 4 12 14.01 9 11.01" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <h3>Define Future Trends</h3>
              <p>Design breakthrough molecules that lead market trajectories</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              </div>
              <h3>Achieve Peak Performance</h3>
              <p>Engineer molecules with industry-leading efficacy and optimal characteristics</p>
            </div>
          </div>

          <div class="cards-wrapper">
            <div class="compare-card solution-card">
              <div class="card-header highlight-header">The MetaNovas Solution</div>
              <ul class="feature-list">
                <li><img src="/产品/图片1.png" class="list-icon"><strong>3-6 months</strong> from discovery to validation</li>
                <li><img src="/产品/图片2.png" class="list-icon"><strong>60%+ success rate</strong> with predictive AI design</li>
                <li><img src="/产品/图片3.png" class="list-icon">Targeted discovery guided by knowledge graphs & Al</li>
                <li><img src="/产品/图片4.png" class="list-icon">Exclusive ingredients,first-to-market opportunities</li>
              </ul>
            </div>

            <div class="vs-badge">VS</div>

            <div class="compare-card traditional-card">
              <div class="card-header gray-header">Traditional R&D</div>
              <ul class="feature-list muted-list">
                <li>3-5 years to discover& validate a new active</li>
                <li>&lt;10% hit rate(mostly trial & error)</li>
                <li>Multiple iterations,costly failures</li>
                <li>Limited differentiation, crowded "me-too" actives</li>
              </ul>
            </div>
          </div>
          
        </div>
        <!--  -->
        <div class="products-cta-wrapper">
          <div class="cta-glow"></div> <button class="contact-btn" @click="goToContact">
            <span class="btn-text">Request Detailed Product Information</span>
            <span class="btn-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
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
  name: 'ProductsPage',
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
  mounted() {
    this.initCursorTrail();
  },
  beforeUnmount() {
    if (this.trailAnimationFrame) {
      cancelAnimationFrame(this.trailAnimationFrame);
    }
  },
  methods: {
    goToContact() {
      this.$router.push('/contact-us');
    },
    getImageUrl(filename) {
      // 对路径中的每个部分进行编码
      const parts = filename.split('/');
      const encodedParts = parts.map(part => encodeURIComponent(part));
      return '/' + encodedParts.join('/');
    },
    getParticleStyle(n) {
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
    }
  }
};
</script>

<style scoped>
/* 基础样式 */
.products-page {
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}


/* 导航栏 */
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
  font-size: 17px;
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
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: filter 0.5s ease;
}

.hero-section:hover .hero-bg-img {
  filter: brightness(0.8);
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
}

.particle {
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

/* 光晕效果 */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 1;
  animation: orbFloat 15s ease-in-out infinite;
}

.glow-orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.3) 0%, transparent 70%);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.glow-orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.25) 0%, transparent 70%);
  bottom: -80px;
  right: 10%;
  animation-delay: 2s;
}

.glow-orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.2) 0%, transparent 70%);
  top: 50%;
  right: -80px;
  animation-delay: 4s;
}

@keyframes orbFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }

  33% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.8;
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.7;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding-left: 40px;
  opacity: 0;
  transform: translateY(30px);
  animation: contentFadeIn 1s ease-out 0.3s forwards;
}

@keyframes contentFadeIn {
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
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff;
  text-shadow:
    0 0 20px rgba(68, 150, 115, 0.5),
    0 0 40px rgba(68, 150, 115, 0.3),
    0 0 60px rgba(61, 217, 201, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

@keyframes numberShine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }

  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

@keyframes numberPulse {

  0%,
  100% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1.15);
  }
}

@keyframes productItemFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes backgroundPulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

.hero-section:hover .hero-title {
  text-shadow:
    0 0 30px rgba(68, 150, 115, 0.7),
    0 0 50px rgba(68, 150, 115, 0.5),
    0 0 70px rgba(61, 217, 201, 0.3);
  transform: translateX(8px) scale(1.02);
}

.hero-subtitle {
  font-size: 18px;
  line-height: 2;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-content:hover .hero-subtitle {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 0 15px rgba(68, 150, 115, 0.3);
  transform: translateX(5px);
}

/* 滚动提示 */
.scroll-indicator {
  position: absolute;
  bottom: -140px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 3;
}

.scroll-indicator {
  animation: bounceIndicator 2s ease-in-out infinite;
}

@keyframes bounceIndicator {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(10px);
  }
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

/* 产品列表区域 */
.products-section {
  padding: 80px 0 100px;
  position: relative;
  overflow: hidden;
}

.products-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(68, 150, 115, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(61, 217, 201, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
  animation: backgroundPulse 8s ease-in-out infinite;
}

@keyframes backgroundPulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

.product-item {
  margin-bottom: 120px;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: productItemFadeIn 0.8s ease-out forwards;
}

.product-item:nth-child(1) {
  animation-delay: 0.1s;
}

.product-item:nth-child(2) {
  animation-delay: 0.2s;
}

.product-item:nth-child(3) {
  animation-delay: 0.3s;
}

.product-item:nth-child(4) {
  animation-delay: 0.4s;
}

.product-item:nth-child(5) {
  animation-delay: 0.5s;
}

.product-item::before {
  content: '';
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.15) 0%, rgba(61, 217, 201, 0.15) 100%);
  border-radius: 30px;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -2;
  filter: blur(30px);
}

.product-item::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  /* background: linear-gradient(135deg, rgba(68, 150, 115, 0.4), rgba(61, 217, 201, 0.4)); */
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  filter: blur(15px);
}

.product-item:hover::before {
  opacity: 1;
}

.product-item:hover::after {
  opacity: 1;
}

.product-item:hover {
  transform: translateY(-8px) scale(1.01);
}

.product-number-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.product-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #449371 0%, #3DD9C9 100%);
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  padding: 5px -4px;
  border-radius: 17.66px;
  min-width: 80px;
  height: 42px;
  box-shadow:
    0 4px 15px rgba(68, 147, 113, 0.4),
    0 0 20px rgba(68, 150, 115, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.product-number::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
  transform: rotate(45deg);
  animation: numberShine 3s infinite;
}

.product-item:hover .product-number {
  transform: scale(1.1);
  box-shadow:
    0 6px 25px rgba(68, 147, 113, 0.6),
    0 0 30px rgba(68, 150, 115, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  animation: numberPulse 1.5s ease-in-out infinite;
}

.product-icon-small {
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(68, 150, 115, 0.5));
  transition: all 0.3s ease;
}

.product-item:hover .product-icon-small {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 0 12px rgba(68, 150, 115, 0.8));
}

.product-title {
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
}

.product-title::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #449673, #3DD9C9);
  border-radius: 2px;
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #449673, #3DD9C9);
  border-radius: 2px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-item:hover .product-title {
  color: #449673;
  text-shadow:
    0 0 20px rgba(68, 150, 115, 0.5),
    0 0 40px rgba(68, 150, 115, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateX(8px);
}

.product-item:hover .product-title::before {
  opacity: 1;
  transform: scaleY(1);
}

.product-item:hover .product-title::after {
  width: 120px;
}

.product-desc {
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 28px;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.product-item:hover .product-desc {
  color: rgba(255, 255, 255, 0.95);
  text-shadow:
    0 0 10px rgba(68, 150, 115, 0.2),
    0 2px 5px rgba(0, 0, 0, 0.3);
  transform: translateX(5px);
}

.product-image {
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-start;
}

.image-placeholder {
  width: 100%;
  max-width: 800px;
  height: 220px;
  background: linear-gradient(135deg, #0a2a20 0%, #1a4a3a 50%, #0a3a2a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  border: 1px solid rgba(61, 217, 201, 0.2);
}

.product-img {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(68, 150, 115, 0.1);
  position: relative;
  border: 2px solid transparent;
}

.product-img::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.5), rgba(61, 217, 201, 0.5));
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  filter: blur(10px);
}

.product-item:hover .product-img {
  transform: scale(1.03);
  box-shadow:
    0 12px 50px rgba(68, 150, 115, 0.4),
    0 0 60px rgba(68, 150, 115, 0.3),
    inset 0 0 30px rgba(68, 150, 115, 0.1);
  filter: brightness(1.1) saturate(1.1);
  border-color: rgba(68, 150, 115, 0.3);
}

.product-item:hover .product-img::before {
  opacity: 1;
}

.image-placeholder.green {
  background: linear-gradient(135deg, #0a3a20 0%, #2a6a4a 50%, #1a5a3a 100%);
}

.image-placeholder.cyan {
  background: linear-gradient(135deg, #0a2a3a 0%, #2a5a6a 50%, #1a4a5a 100%);
}

.image-placeholder.light-green {
  background: linear-gradient(135deg, #1a4a30 0%, #3a7a5a 50%, #2a6a4a 100%);
}

.image-placeholder.teal {
  background: linear-gradient(135deg, #0a3a3a 0%, #2a6a6a 50%, #1a5a5a 100%);
}

.product-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tag {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(61, 217, 201, 0.3);
  border-radius: 8px;
  padding: 10px 16px;
  transition: all 0.3s ease;
}

.tag:hover {
  border-color: #3DD9C9;
  background: rgba(61, 217, 201, 0.1);
}

.tag-icon {
  font-size: 16px;
  color: #3DD9C9;
}

.tag span:last-child {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-weight: 500;
}

.tag:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow:
    0 8px 20px rgba(68, 150, 115, 0.4),
    0 0 30px rgba(68, 150, 115, 0.2);
  background: linear-gradient(135deg, rgba(68, 150, 115, 0.25), rgba(61, 217, 201, 0.25));
}

.tag:hover span:last-child {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}
.list-icon{
  width: 16px;
  height: 16px;
  object-fit: contain;
  /* 转为绿色 */
  filter: drop-shadow(0 0 8px rgba(68, 150, 115, 0.5));
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
  transition: all 0.3s ease;
}

.footer-brand {
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
  }

  50% {
    opacity: 1;
  }
}

.logo-main {
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

/* 响应式 */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .hero-section {
    padding: 120px 20px 60px;
  }

  .hero-content {
    padding-left: 0;
  }

  .hero-title {
    font-size: 36px;
  }

  .product-tags {
    flex-direction: column;
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
/* --- 底部 CTA 按钮样式 --- */
.products-cta-wrapper {
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}

/* 按钮背后的光晕效果 */
.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.4) 0%, transparent 70%);
  filter: blur(40px);
  z-index: -1;
  transition: all 0.5s ease;
}

.products-cta-wrapper:hover .cta-glow {
  width: 400px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.4) 0%, transparent 70%);
}

.contact-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 48px;
  background: linear-gradient(135deg, #449673 0%, #3DD9C9 100%);
  border: none;
  border-radius: 50px; /* 胶囊形状 */
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 30px rgba(68, 150, 115, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* 按钮内文字 */
.btn-text {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: 'Segoe UI', sans-serif;
}

/* 按钮内图标容器 */
.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.4s ease;
}

.btn-icon svg {
  width: 18px;
  height: 18px;
  color: #ffffff;
  transition: transform 0.4s ease;
}

/* --- 悬停效果 --- */
.contact-btn:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 
    0 20px 50px rgba(68, 150, 115, 0.5),
    0 0 30px rgba(61, 217, 201, 0.4);
  background: linear-gradient(135deg, #3DD9C9 0%, #449673 100%); /* 渐变反转 */
}

.contact-btn:hover .btn-icon {
  background: #ffffff;
  transform: translateX(5px);
}

.contact-btn:hover .btn-icon svg {
  color: #449673; /* 图标变色 */
}

/* 点击时的微动效 */
.contact-btn:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 5px 15px rgba(68, 150, 115, 0.4);
}

/* 响应式适配 */
@media (max-width: 768px) {
  .contact-btn {
    padding: 15px 30px;
    width: 100%;
    justify-content: center;
  }
  
  .btn-text {
    font-size: 16px;
  }
}
/* --- Why Choose Us (新版上下布局) --- */
.why-choose-section {
  margin: 100px auto; /* 上下留白 */
  position: relative;
  z-index: 2;
  max-width: 1000px; /* 限制最大宽度，防止太宽 */
}

.center-title {
  text-align: center;
  font-size: 42px;
  margin-bottom: 60px;
  position: relative;
}

/* 顶部三个卖点 Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3列等宽 */
  gap: 30px;
  margin-bottom: 60px;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefit-card:hover {
  background: rgba(68, 150, 115, 0.1);
  border-color: rgba(68, 150, 115, 0.3);
  transform: translateY(-5px);
}

.benefit-icon {
  width: 50px;
  height: 50px;
  color: #3DD9C9;
  background: rgba(61, 217, 201, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
}

.benefit-card h3 {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 600;
}

.benefit-card p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

/* 底部对比卡片容器 */
.cards-wrapper {
  display: flex;
  align-items: stretch; /* 等高 */
  position: relative;
  border-radius: 20px;
  overflow: visible; /* 允许VS徽章溢出 */
}

/* 通用卡片样式 */
.compare-card {
  flex: 1;
  padding-bottom: 30px;
  transition: all 0.4s ease;
}

/* 左侧：MetaNovas (高亮) */
.solution-card {
  background: linear-gradient(180deg, rgba(68, 150, 115, 0.15) 0%, rgba(0,0,0,0.2) 100%);
  border: 2px solid #449673;
  border-right: none; /* 去掉右边框，和右侧卡片融合 */
  border-radius: 20px 0 0 20px; /* 左圆角 */
  z-index: 2;
  box-shadow: -10px 10px 30px rgba(0,0,0,0.3);
}

.highlight-header {
  background: linear-gradient(90deg, #449673, #3DD9C9);
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%); /* 增加一点斜切设计感 */
  margin-bottom: 2px;
  width: 105%; /* 让头部稍微宽一点 */
  /* 左上角圆角 */
  border-radius: 20px 0 0 0;
  margin-top: -2px;
}

/* 右侧：Traditional (暗色) */
.traditional-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: none;
  border-radius: 0 20px 20px 0; /* 右圆角 */
  z-index: 1;
}

.gray-header {
  background: rgba(0,0,0,0.3);
  padding: 20px;
  font-size: 18px;
  text-align: center;
  color: rgba(255,255,255,0.6);
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* 列表样式 */
.feature-list {
  list-style: none;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
}

.solution-card strong {
  color: #3DD9C9;
}

.muted-list li {
  color: rgba(255,255,255,0.5);
  justify-content: center; /* 传统方案文字居中，显得更弱 */
}

/* VS 徽章 */
.vs-badge {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: #000;
  border: 3px solid #3DD9C9;
  border-radius: 50%;
  color: #3DD9C9;
  font-weight: 900;
  font-style: italic;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 0 20px rgba(61, 217, 201, 0.4);
}

/* 响应式适配 */
@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr; /* 手机上一列 */
    gap: 20px;
  }
  
  .cards-wrapper {
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
  }
  
  .solution-card {
    border: 2px solid #449673; /* 恢复右边框 */
    /* border-bottom: none; */
    border-radius: 20px 20px 0 0;
    clip-path: none;
  }
  .highlight-header { width: 100%; clip-path: none; }
  
  .traditional-card {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 0 20px 20px;
    margin-top: 70px;
  }
  
  .vs-badge {
    top:auto;
    bottom: 48%;
    transform: translate(-50%, 70%);
  }
}
</style>
