<template>
  <div class="contact-us-page" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <!-- 自定义鼠标 -->
    <div class="cursor-ball" ref="cursorBall"></div>
    <div class="cursor-trail" v-for="(trail, index) in trails" :key="index" :style="trail.style"></div>
    <!-- Hero Section with Contact Form -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="/图层 296.png" alt="Background" class="bg-image" />
      </div>
      <div class="container" id="Contact-form" ref="contactForm">
        <div class="form-container">
          <div class="contact-form-card">
            <h1 class="form-title">How can we help?</h1>
            <p class="form-subtitle">Fill out the form and we'll get back to you.</p>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name <span class="required">*</span></label>
                  <input type="text" id="firstName" v-model="formData.firstName" required />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name <span class="required">*</span></label>
                  <input type="text" id="lastName" v-model="formData.lastName" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email <span class="required">*</span></label>
                  <input type="email" id="email" v-model="formData.email" required />
                </div>
                <div class="form-group">
                  <label for="phone">Phone <span class="required">*</span></label>
                  <input type="tel" id="phone" v-model="formData.phone" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company <span class="required">*</span></label>
                  <input type="text" id="company" v-model="formData.company" required />
                </div>
                <div class="form-group">
                  <label for="jobTitle">Job Title <span class="required">*</span></label>
                  <input type="text" id="jobTitle" v-model="formData.jobTitle" required />
                </div>
              </div>
              <div class="form-group">
                <label for="interest">I'm interested in... <span class="required">*</span></label>
                <input type="text" id="interest" v-model="formData.interest" required />
              </div>
              <div class="form-group">
                <label for="message">Message <span class="required">*</span></label>
                <textarea id="message" v-model="formData.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <!-- <section class="contact-info-section"> -->
    <!-- 背景装饰粒子 -->
    <!-- <div class="section-particles">
        <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
      </div> -->
    <!-- 浮动光球 -->
    <!-- <div class="section-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </section> -->
    <FooterSection />

  </div>
</template>

<script>
import FooterSection from './parts/FooterSection.vue';

export default {
  name: 'ContactUsPage',
  components: {
    FooterSection
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        interest: '',
        message: ''
      },
      // 鼠标残影数据
      trails: [],
      trailCount: 40,
      mouseX: 0,
      mouseY: 0,
      isMouseInPage: false,
      isScrolling: false,
      currentAwardIndex: 0,
    };
  },

  mounted() {
    this.initScrollAnimations();
    this.initCursorTrail();
    this.startAwardsCarousel();
    this.scrollToHash()
  },
  watch: {
    '$route.hash'() {
      this.scrollToHash()
    }
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
    scrollToHash() {
      if (this.$route.hash === '#Contact-form') {
        this.$nextTick(() => {
          const el = this.$refs.contactForm
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        })
      }
    },
    handleSubmit() {
      // 这里可以添加表单提交逻辑
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message. We will get back to you soon!');
      // 重置表单
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        interest: '',
        message: ''
      };
    },
    getParticleStyle(index) {
      const size = Math.random() * 6 + 3;
      const delay = Math.random() * 5;
      const duration = Math.random() * 8 + 10;
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
    startAwardsCarousel() {
      this.awardsCarouselInterval = setInterval(() => {
        this.currentAwardIndex = (this.currentAwardIndex + 1) % this.awardsData.length;
      }, 3000);
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

.contact-us-page {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding-top: 80px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

/* Hero Section with Form */
.hero-section {
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 100px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px) brightness(0.3);
  transform: scale(1.1);
}

.form-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.contact-form-card {
  background: rgba(240, 240, 240, 0.95);
  border-radius: 20px;
  padding: 50px 60px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(68, 150, 115, 0.2);
  backdrop-filter: blur(10px);
}

.form-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
  text-align: center;
}

.form-subtitle {
  font-size: 16px;
  color: #666666;
  margin-bottom: 40px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}

.required {
  color: #e74c3c;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 15px;
  color: #333333;
  background: #ffffff;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #449673;
  box-shadow: 0 0 0 3px rgba(68, 150, 115, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}


.submit-btn {
  padding: 16px 40px;
  background: linear-gradient(135deg, #449673 0%, #3DD9C9 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(68, 150, 115, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 20px rgba(68, 150, 115, 0.4),
    0 0 30px rgba(68, 150, 115, 0.2);
  background: linear-gradient(135deg, #3DD9C9 0%, #449673 100%);
}

.submit-btn:active {
  transform: translateY(0);
}

/* Contact Information Section */
.contact-info-section {
  padding: 100px 0;
  position: relative;
  background: linear-gradient(180deg, #000000 0%, #0a1a0f 100%);
  overflow: hidden;
}

.contact-info-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 30%, rgba(68, 150, 115, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(61, 217, 201, 0.15) 0%, transparent 50%);
  pointer-events: none;
  animation: backgroundPulse 8s ease-in-out infinite;
}

.contact-info-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 15% 25%, rgba(68, 150, 115, 0.1) 0%, transparent 30%),
    radial-gradient(circle at 85% 75%, rgba(61, 217, 201, 0.1) 0%, transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(68, 150, 115, 0.05) 0%, transparent 40%);
  pointer-events: none;
  animation: backgroundFloat 12s ease-in-out infinite;
}

@keyframes backgroundPulse {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

@keyframes backgroundFloat {

  0%,
  100% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(20px, -20px);
  }

  66% {
    transform: translate(-20px, 20px);
  }
}

/* 装饰粒子 */
.section-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.section-particles .particle {
  position: absolute;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  animation: particleFloat 12s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.8);
}

@keyframes particleFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }

  25% {
    transform: translate(30px, -40px) scale(1.3);
    opacity: 0.8;
  }

  50% {
    transform: translate(-20px, -60px) scale(0.7);
    opacity: 0.6;
  }

  75% {
    transform: translate(40px, -30px) scale(1.1);
    opacity: 0.7;
  }
}

/* 浮动光球 */
.section-orbs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.section-orbs .orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.3) 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(61, 217, 201, 0.3) 0%, transparent 70%);
  top: 60%;
  right: 15%;
  animation-delay: 3s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.25) 0%, transparent 70%);
  bottom: 20%;
  left: 50%;
  animation-delay: 6s;
}

@keyframes orbFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }

  33% {
    transform: translate(40px, -40px) scale(1.1);
    opacity: 0.6;
  }

  66% {
    transform: translate(-30px, 30px) scale(0.9);
    opacity: 0.5;
  }
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
  position: relative;
  z-index: 1;
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

.footer-tagline {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding-left: 0;
}

.footer-brand:hover .footer-tagline {
  color: rgba(61, 217, 201, 0.8);
  padding-left: 5px;
  text-shadow: 0 0 5px rgba(61, 217, 201, 0.3);
}

.footer-tagline::before {
  content: '→';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: all 0.4s ease;
  color: #3DD9C9;
}

.footer-brand:hover .footer-tagline::before {
  opacity: 1;
  left: -12px;
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

  .contact-form-card {
    padding: 40px 30px;
  }

  .form-title {
    font-size: 28px;
  }

  .form-row {
    grid-template-columns: 1fr;
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
