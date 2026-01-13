<template>
  <!-- Contact Us & Footer 联系我们和页脚 -->
  <footer class="footer">
    <div class="container">
      <!-- Contact Us Section -->
      <section id="contact" class="contact-section">
        <h2 class="section-title center">Contact Us</h2>
        <div class="contact-content">
          <div class="contact-card">
            <img :src="contactIcon1" alt="工作" class="contact-icon-img" />
            <a href="mailto:hr@metanovas.com">hr@metanovas.com</a>
          </div>
          <div class="contact-card">
            <img :src="contactIcon2" alt="合作伙伴" class="contact-icon-img" />
            <a href="mailto:bd@metanovas.com">bd@metanovas.com</a>
          </div>
          <div class="contact-card">
            <img :src="contactIcon3" alt="新闻" class="contact-icon-img" />
            <a href="mailto:pr@metanovas.com">pr@metanovas.com</a>
          </div>
        </div>
      </section>

      <!-- Footer Content -->
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-text-group">
              <span class="logo-icon">
                <img src="/logo-no-word.png" alt="Logo"/>
              </span>
              <div class="logo-text-wrap">
                <span class="logo-main">MetaNovas</span>
                <span class="logo-sub">Biotech</span>
              </div>
            </div>
          </div>
          <div class="footer-brand-text">
            <span class="footer-arrow">→</span>
            <span class="footer-tagline">MetaNovas Biotech</span>
          </div>
        </div>
        <div class="footer-links-group">
          <div class="link-column">
            <h4>About us</h4>
            <a @click.prevent="handleLinkClick('/', 'Cooperative')" href="javaScript:;">Cooperative Partnerships</a>
            <a @click.prevent="handleLinkClick('/', 'RDservices')" href="javaScript:;">R&D services</a>
            <a @click.prevent="handleLinkClick('/', 'AwardsHonours')" href="javaScript:;">Awards and Honours</a>
            <a @click.prevent="handleLinkClick('/', 'Products')" href="javaScript:;">Products</a>
          </div>
          <div class="link-column">
            <h4>Products</h4>
            <a @click.prevent="handleProductClick('MetaTlr')" href="javaScript:;">MetaTLR</a>
            <a @click.prevent="handleProductClick('clearacne-magic')" href="javaScript:;">ClearAcne Magic</a>
            <a @click.prevent="handleProductClick('metacono')" href="javaScript:;">MetaCono</a>
            <a @click.prevent="handleProductClick('omniyouth')" href="javaScript:;">OmniYouth</a>
            <a @click.prevent="handleProductClick('metascalp')" href="javaScript:;">Metascalp</a>
            <a @click.prevent="handleProductClick('PureSmile')" href="javaScript:;">PureSmile</a>
          </div>
          <div class="link-column">
            <h4>Technology</h4>
            <a @click.prevent="handleLinkClick('/technology', 'MetaLLM')"
              href="javaScript:;">MetaLLM<sup>&reg;</sup></a>
            <a @click.prevent="handleLinkClick('/technology', 'MetaKG')" href="javaScript:;">MetaKG<sup>&reg;</sup></a>
            <a @click.prevent="handleLinkClick('/technology', 'MetaOmics')"
              href="javaScript:;">MetaOmics<sup>&reg;</sup></a>
            <a @click.prevent="handleLinkClick('/technology', 'MetaPep')"
              href="javaScript:;">MetaPep<sup>&reg;</sup></a>
          </div>
          <div class="link-column">
            <h4>Contact us</h4>
            <a @click.prevent="handleLinkClick('/contact-us', 'Contact-form')" href="javaScript:;">Contact us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 MetaNovas Biotech. All Rights Reserved.</p>
        <p>These statements have not been evaluated by the Food and Drug Administration.</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterSection',
  computed: {
    contactIcon1() {
      return '../home_slices/' + encodeURIComponent('工作.png')
    },
    contactIcon2() {
      return '../home_slices/' + encodeURIComponent('合作伙伴.png')
    },
    contactIcon3() {
      return '../home_slices/' + encodeURIComponent('新闻.png')
    }
  },
  methods: {
    handleLinkClick(path, anchor) {
      const targetHash = anchor ? `#${anchor}` : ''

      // ✅ 如果已经在同一个页面
      if (this.$route.path === path) {
        // 直接滚，不走 router
        this.$nextTick(() => {
          const el = document.querySelector(targetHash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        })
        return
      }

      // ✅ 不同页面才走 router
      this.$router.push({
        path,
        hash: targetHash
      })
    },

    // 产品详情页跳转
    handleProductClick(slug) {
      this.$router.push(`/products/${slug}`)
    }
  }
}
</script>

<style scoped>
/* .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
} */
.container {
  max-width: 1200px;
  width: 100%; 
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box; 
}
.logo-text-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  /* background: linear-gradient(135deg, #3DD9C9 0%, #1a8a7a 100%); */
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
  color: #6ac89b;
  line-height: 1.2;
}

.logo-sub {
  font-size: 10px;
  /* color: rgba(255, 255, 255, 0.6); */
  color: #6ac89b;
  text-transform: uppercase;
  letter-spacing: 1px;
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

@keyframes titleGlow {

  0%,
  100% {
    text-shadow: 0 0 20px rgba(68, 150, 115, 0.5);
  }

  50% {
    text-shadow: 0 0 30px rgba(68, 150, 115, 0.8), 0 0 40px rgba(68, 150, 115, 0.4);
  }
}

.section-title.animate {
  animation: titleGlow 3s ease-in-out infinite;
}


.section-title.center {
  text-align: center;
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
  transition: all 0.3s ease;
}

.footer-logo {
  margin-bottom: 16px;
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
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  /* box-shadow: 0 2px 8px rgba(61, 217, 201, 0.3); */
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  /* background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%); */
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
  /* background: linear-gradient(135deg, rgba(68, 150, 115, 0.6), rgba(61, 217, 201, 0.6)); */
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.footer-brand:hover .logo-icon {
  transform: rotate(5deg) scale(1.1);
  /* box-shadow:
    0 4px 16px rgba(61, 217, 201, 0.5),
    0 0 30px rgba(68, 150, 115, 0.4); */
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

.footer-tagline {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
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

.link-column.contact-us-column a {
  color: #000000;
}

.link-column a {
  position: relative;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
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

/* 平板尺寸适配 (1024px 以下) */
@media (max-width: 1024px) {
  .footer-content {
    flex-wrap: wrap; 
    gap: 40px;
  }
  
  .footer-links-group {
    gap: 30px; 
  }
  .footer .contact-section {
    padding: 0 0 40px; 
  }

  .contact-content {
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    gap: 8px; 
    margin-top: 20px;
    padding: 0 5px;
  }

  .contact-card {
    flex: 1; 
    width: auto;
    min-width: 0; 
    padding: 15px 4px; 
    gap: 10px; 
    border-radius: 12px;
    background: rgba(20, 20, 20, 0.8);
  }
  .contact-icon-img {
    width: 24px; 
    height: 24px;
    margin-top: 0;
  }
  .contact-card a {
    font-size: 10px; 
    line-height: 1.2;
    word-break: break-all;
    opacity: 0.9;
    padding: 0 2px;
  }
  
  .contact-card:active {
    transform: scale(0.98);
    background: rgba(40, 40, 40, 0.9);
  }
}

/* 手机尺寸适配 (768px 以下) */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  .section-title {
    font-size: 28px;
    justify-content: center; 
  }
  .section-title::before,
  .section-title::after {
    display: none;
  }
  .footer .contact-section {
    padding: 0 0 60px; 
  }

  .contact-content {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }

  .contact-card {
    width: 100%; 
    min-width: unset; 
    padding: 25px; 
    box-sizing: border-box;
  }
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
  }
  .footer-brand {
    flex: none;
    width: 100%;
    align-items: center;
    margin-bottom: 0;
  }

  .footer-brand .footer-brand-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  
  .footer-arrow {
    display: none; 
  }

  .footer-links-group {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 30px 20px; 
    width: 100%;
    text-align: left; 
  }
  .link-column {
    align-items: center;
  }
  .link-column {
    text-align: center; 
    align-items: center;
  }
  .footer-bottom {
    padding-top: 20px;
    margin-top: 20px;
  }
  
  .footer-bottom p {
    font-size: 12px;
    padding: 0 10px;
  }
}

/* 超小屏幕适配 (480px 以下) */
@media (max-width: 480px) {
  .footer-links-group {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>