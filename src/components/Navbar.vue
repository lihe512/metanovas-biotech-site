<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'hidden': !isVisible }">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="navbar-logo">
          <div class="logo-text-group">
            <span class="logo-icon">
              <img src="../../public/logo-no-word.png" alt="Logo"/>
            </span>
            <div class="logo-text-wrap">
              <span class="logo-main">MetaNovas</span>
              <span class="logo-sub">Biotech</span>
            </div>
          </div>
        </router-link>
        <div class="navbar-links">
          <router-link to="/">About</router-link>
          <router-link to="/technology">Technology</router-link>
          <div class="dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <router-link to="/products" class="dropdown-trigger">
              Products
              <span class="dropdown-arrow" :class="{ active: showDropdown }">▼</span>
            </router-link>
            <transition name="dropdown">
              <div v-if="showDropdown" class="dropdown-menu">
                <router-link to="/products/MetaTlr" class="dropdown-item">MetaTLR</router-link>
                <router-link to="/products/clearacne-magic" class="dropdown-item">ClearAcne Magic</router-link>
                <router-link to="/products/metacono" class="dropdown-item">MetaCono</router-link>
                <router-link to="/products/omniyouth" class="dropdown-item">OmniYouth</router-link>
                <router-link to="/products/metascalp" class="dropdown-item">Metascalp</router-link>
                <router-link to="/products/PureSmile" class="dropdown-item">PureSmile</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/media">Media</router-link>
          <router-link to="/contact-us">Contact Us</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showDropdown: false,
      isScrolled: false,
      isVisible: true,
      lastScrollTop: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 滚动时显示背景
      this.isScrolled = scrollTop > 50;
      
      // 向下滚动时隐藏，向上滚动时显示
      if (scrollTop > this.lastScrollTop && scrollTop > 100) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
      
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  padding: 20px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, background;
  backface-visibility: hidden;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 15px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(68, 150, 115, 0.2);
}

.navbar.hidden {
  transform: translateY(-100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  text-decoration: none;
}

.navbar-logo::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: radial-gradient(circle, rgba(68, 150, 115, 0.1) 0%, transparent 70%);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.navbar-logo:hover {
  transform: translateX(5px) translateY(-2px);
}

.navbar-logo:hover::before {
  opacity: 1;
}

.logo-text-group {
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-logo:hover .logo-text-group {
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

.navbar-logo:hover .logo-icon {
  transform: rotate(5deg) scale(1.1);
  /* box-shadow: 
    0 4px 16px rgba(61, 217, 201, 0.5),
    0 0 30px rgba(68, 150, 115, 0.4); */
}

.navbar-logo:hover .logo-icon img {
  filter: brightness(1.2) saturate(1.2);
}

.navbar-logo:hover .logo-icon::before {
  width: 120%;
  height: 120%;
  animation: logoShine 1.5s ease-in-out infinite;
}

.navbar-logo:hover .logo-icon::after {
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
  font-size: 18px;
  font-weight: 600;
  color: #6ac89b;
  line-height: 1.2;
  letter-spacing: 0.3px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-block;
}

.navbar-logo:hover .logo-main {
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

.navbar-logo:hover .logo-main::after {
  width: 100%;
}

.logo-sub {
  font-size: 11px;
  /* color: rgba(255, 255, 255, 0.6); */
  color: #6ac89b;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-logo:hover .logo-sub {
  color: rgba(61, 217, 201, 0.9);
  text-shadow: 0 0 8px rgba(61, 217, 201, 0.4);
  transform: translateX(2px);
}

.navbar-links {
  display: flex;
  gap: 50px;
  align-items: center;
}

.navbar-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 8px 0;
}

.navbar-links a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3DD9C9);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-links a:hover::before {
  width: 100%;
}

.navbar-links > a:hover,
.navbar-links > a.router-link-active,
.navbar-links .dropdown-trigger:hover,
.navbar-links .dropdown-trigger.router-link-active {
  color: #449673;
  text-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}

.navbar-links > a.router-link-active::after,
.navbar-links .dropdown-trigger.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #449673;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}


/* Dropdown Menu */
.dropdown {
  position: relative;
}
/* .dropdown::after{
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 20px;
  background: transparent;
} */
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-arrow {
  font-size: 9px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.6);
  margin-left: 4px;
  display: inline-block;
}

.dropdown-trigger:hover .dropdown-arrow,
.dropdown-arrow.active {
  transform: rotate(180deg);
  color: #449673;
  text-shadow: 0 0 8px rgba(68, 150, 115, 0.5);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(68, 150, 115, 0.4);
  border-radius: 16px;
  padding: 8px 0;
  min-width: 220px;
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.6),
    0 0 30px rgba(68, 150, 115, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  z-index: 1001;
  overflow: hidden;
}

.dropdown-menu::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(68, 150, 115, 0.5), transparent);
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid rgba(68, 150, 115, 0.4);
  filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.3));
}

.dropdown-item {
  display: block;
  padding: 14px 28px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin: 2px 8px;
  border-radius: 10px;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 100%;
  /* transform: translateY(0%); */
  width: 0;
  height: 60%;
  background: linear-gradient(90deg, rgba(68, 150, 115, 0.8), rgba(61, 217, 201, 0.8));
  border-radius: 0 3px 3px 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* .dropdown-item::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(68, 150, 115, 0.1), transparent);
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
} */

.dropdown-item:hover,
.dropdown-item.router-link-active {
  color: #449673;
  background: rgba(68, 150, 115, 0.08);
  text-shadow: 0 0 12px rgba(68, 150, 115, 0.6);
  padding-left: 36px;
  transform: translateX(2px);
}

.dropdown-item:hover::before,
.dropdown-item.router-link-active::before {
  width: 0px;
}

.dropdown-item:hover::after,
.dropdown-item.router-link-active::after {
  opacity: 1;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
  
  .container {
    padding: 0 20px;
  }
}
</style>

