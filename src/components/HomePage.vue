<template>
  <div class="home-page" >
    <!-- 背景层 -->
    <div class="page-background"></div>

    <!--  Hero Section -->
    <section class="hero-section" ref="heroSection" @wheel="handleWheel">
      <div class="hero-full-bg">
        <img src="/home.png" alt="Hero Background" />
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-main">MetaNovas</span>
          <span class="hero-title-accent">&nbsp;Biotech</span>
        </h1>
        <p class="hero-subtitle">
          We look forward to your next breakthrough<br />starting with
          MetaNovas.
        </p>
        <!--  Biotech -->
        <div class="hero-cursive-wrapper">
          <img src="/home_slices/Biotech.png" alt="Biotech" class="hero-cursive-img" />
        </div>
      </div>
    </section>

    <!-- Featured on 媒体展示 -->
    <section class="featured-section" ref="featuredSection" @wheel="handleWheel">
      <div class="container">
        <p class="featured-title">Featured on</p>
        <div class="featured-logos">
          <div class="logo-item">
            <img :src="logo1" alt="Digital Journal" class="featured-logo-img" @error="handleImageError($event, 1)" />
          </div>
          <div class="logo-item">
            <img :src="logo2" alt="Business Insider" class="featured-logo-img" @error="handleImageError($event, 2)" />
          </div>
          <div class="logo-item">
            <img :src="logo3" alt="Bloomberg" class="featured-logo-img" @error="handleImageError($event, 3)" />
          </div>
          <div class="logo-item">
            <img :src="logo4" alt="Benzinga" class="featured-logo-img" @error="handleImageError($event, 4)" />
          </div>
          <div class="logo-item">
            <img :src="logo5" alt="Yahoo Finance" class="featured-logo-img" @error="handleImageError($event, 5)" />
          </div>
          <div class="logo-item">
            <img :src="logo6" alt="MarketWatch" class="featured-logo-img" @error="handleImageError($event, 6)" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Us 关于我们 -->
    <section id="about" class="about-section" ref="aboutSection" @wheel="handleWheel">
      <!-- <div class="container"> -->
      <!-- <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">About Us</h2>
            <p>MetaNovas Biotech is an innovative biotechnology company established in early 2021 in San Jose, USA and
              Shanghai, China. Our mission is to integrate artificial intelligence with life sciences and delve into
              complex biological networks through deep learning knowledge graphs, natural language processing and
              multi-omicsanalysis, MetaNovas is dedicated to becoming a global leader in AI-driven efficient ingredient
              and product design and development platforms.</p>
            <button class="about-btn">
              <img :src="aboutBtnImage" alt="More" class="about-btn-img" />
              <span class="about-btn-text">More <span class="btn-arrow">→</span></span>
            </button>
          </div>
          <div class="about-images">
            <img :src="aboutGridImage" alt="About MetaNovas" class="about-grid-img" />
          </div>
        </div> -->
      <div class="container">
        <h2 class="section-title">About Us</h2>
        <div class="about-carousel-wrapper">
          <!-- <button class="carousel-nav-btn prev-btn" @click="prevAboutSlide">
              <span class="nav-arrow">←</span>
            </button>
            <button class="carousel-nav-btn next-btn" @click="nextAboutSlide">
              <span class="nav-arrow">→</span>
            </button> -->
          <button class="nav-btn prev-btn" @click="prevAboutSlide">
            <div class="gradient-arrow arrow-left"></div>
          </button>

          <button class="nav-btn next-btn" @click="nextAboutSlide">
            <div class="gradient-arrow arrow-right"></div>
          </button>

          <div class="about-carousel-track" :style="{ transform: `translateX(-${currentAboutIndex * 100}%)` }">
            <div class="about-slide" v-for="(item, index) in aboutSlides" :key="index">
              <div class="about-content">
                <div class="about-text">
                  <p>{{ item.text }}</p>
                </div>
                <div class="about-images">
                  <img :src="item.image" :alt="item.title" class="about-grid-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>

    <!-- Cooperative Partnerships 合作伙伴 -->
    <section id="partners" class="partners-section" ref="partnersSection" @wheel="handleWheel">
      <div class="container" id="Cooperative" ref="cooperative">
        <h2 class="section-title">Cooperative Partnerships</h2>
        <p class="partners-description">
          MetaNovas closely collaborates with global academic and industrial
          leaders. We have established strong partnerships with numerous
          international brands and actively supported their R&D.
        </p>
        <div class="partners-logos">
          <div class="partner-logo">
            <img :src="partnerLogo1" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo2" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo3" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo4" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo8" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo7" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo6" alt="Partner" class="partner-logo-img" />
          </div>
          <div class="partner-logo">
            <img :src="partnerLogo5" alt="Partner" class="partner-logo-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Platform 技术平台 -->
    <section id="technology" class="technology-section" ref="technologySection" @wheel="handleWheel">
      <div class="container">
        <h2 class="section-title">Technical Platform</h2>
        <div class="tech-cards">
          <!-- Digestible data -->
          <div class="tech-card">
            <div class="tech-name">| Digestible data</div>
            <div class="tech-icon">
              <img :src="techImage1" alt="Digestible data" />
            </div>
          </div>
          <!-- Computation-driven -->
          <div class="tech-card">
            <div class="tech-name">| Computation-driven</div>
            <div class="tech-icon">
              <img :src="techImage2" alt="Computation-driven" />
            </div>
          </div>
          <!-- System biology -->
          <div class="tech-card">
            <div class="tech-name">| System biology</div>
            <div class="tech-icon">
              <img :src="techImage3" alt="System biology" />
            </div>
          </div>
          <!-- Precision targeting -->
          <div class="tech-card">
            <div class="tech-name">| Precision targeting</div>
            <div class="tech-icon">
              <img :src="techImage4" alt="Precision targeting" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- R&D Services 研发服务 -->
    <section id="research" class="research-section" ref="researchSection" @wheel="handleWheel">
      <div class="container" id="RDservices" ref="rd">
        <h2 class="section-title">R&D Services</h2>
        <div class="research-services-list">
          <div class="research-service-item">
            <span class="service-icon">|</span>
            <span class="service-text">Biological Mechanism Discovery</span>
          </div>
          <div class="research-service-item">
            <span class="service-icon">|</span>
            <span class="service-text">Demographic Differences</span>
          </div>
          <div class="research-service-item">
            <span class="service-icon">|</span>
            <span class="service-text">Formulation Design</span>
          </div>
          <div class="research-service-item">
            <span class="service-icon">|</span>
            <span class="service-text">Ingredient Discovery</span>
          </div>
        </div>
        <div class="research-content-wrapper">
          <div class="research-content">
            <div class="research-text">
              <p>
                Through the fusion of artificial intelligence and science,
                MetaNovas provides end-to-end R&D services in the health sectors
                of cosmetics, nutritions, pharmaceuticals and others.
              </p>
              <div class="research-stats">
                <div class="stat-item">
                  <img :src="stat45Image" alt="45%" class="stat-img" loading="lazy" />
                  <span class="stat-label">R&D success Increase<br />over 45%</span>
                </div>
                <div class="stat-item">
                  <img :src="timeImage" alt="Time" class="stat-time-img" />
                  <span class="stat-label">Reduce R&D cycle<br />from months to weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="awards-section" ref="awardsSection" @wheel="handleWheel">
      <div class="container" id="AwardsHonours" ref="awards">
        <h2 class="section-title">Awards and Honors</h2>
        <p class="awards-description">
          MetaNovas has not only received recognition in numerous international
          top-tier events for its professional knowledge and leading R&D
          capabilities, but also earned acclaim from various mainstream
          international media.
        </p>

        <div class="awards-content-wrapper">
          <div class="awards-content">
            <div class="awards-timeline">
              <div v-for="(award, index) in awardsData" :key="index" class="timeline-item"
                :class="{ active: currentAwardIndex === index }" @click="handleAwardClick(index)">
                <span class="timeline-year">{{ award.year }}</span>
                <p class="timeline-text">{{ award.text }}</p>
              </div>
            </div>

            <div class="awards-display-area">
              <div class="display-bg-effects">
                <div class="bg-gradient-orb"></div>
              </div>

              <div class="awards-wheel-container">
                <div v-for="(award, index) in awardsData" :key="index" class="wheel-card" :class="getWheelClass(index)">
                  <img :src="award.image" :alt="award.text" loading="lazy" />
                  <div class="wheel-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Products 产品 -->
    <section id="products" class="products-section" ref="productsSection" @wheel="handleWheel">
      <div class="container" id="Products" ref="products">
        <h2 class="section-title">Products</h2>
        <div class="products-grid">
          <div class="product-card" v-for="(product, index) in products" :key="index">
            <div class="product-image">
              <img :src="getProductBgImage(index)" :alt="product.name" class="product-bg-img" loading="lazy" />
            </div>
            <div class="product-content">
              <img :src="getProductIcon(index)" :alt="product.name" class="product-icon" loading="lazy" />
              <h3 class="product-title">{{ product.name }}</h3>
              <p class="product-desc" v-if="product.desc">{{ product.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services 服务 -->
    <section id="services" class="services-section" ref="servicesSection" @wheel="handleWheel">
      <div class="container">
        <h2 class="section-title">Services</h2>
        <p class="services-description">
          MetaNovas is also innovative service that we offer to all our
          start-ups is our R&D service platform. Our team of innovators, data
          scientists and cosmetic chemists specialize in: AI-driven product
          development for R&D teams.
        </p>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-image">
              <img :src="getServiceImage(index)" :alt="service.name" class="service-bg-img" loading="lazy" />
            </div>
            <h3 class="service-title">{{ service.name }}</h3>
            <p class="service-desc">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "./parts/FooterSection.vue";

export default {
  name: "HomePage",
  components: {
    FooterSection,
  },
  data() {
    return {
      activeTab: "drugable",
      // 鼠标残影数据
      trails: [],
      trailCount: 40,
      mouseX: 0,
      mouseY: 0,
      isMouseInPage: false,
      isScrolling: false,
      currentAwardIndex: 0,
      isScrollingToAnchor: false, // 是否正在滚动到锚点
      // 新增：About 轮播索引
      currentAboutIndex: 0,
      currentAwardIndex: 0,
      slideDirection: "up", // 'up' or 'down'
      awardsImages: [
        "/轮播图_slices/awards-card-02@2x.png",
        "/轮播图_slices/awards-card-03@2x.png",
        "/轮播图_slices/awards-card-04@2x.png",
        "/轮播图_slices/awards-card-05@2x.png",
        "/轮播图_slices/awards-card-06@2x.png",
      ],
      awardsData: [
        // {
        //   year: "2023",
        //   text: "Top Industrial Presentation at the 2023 IFSCC International Cosmetic Conference",
        //   image: "/轮播图_slices/awards-card-02@2x.png",
        // },
        {
          year: "2023",
          text: "Top Industrial Presentation at the 2023 IFSCC International Cosmetic Conference",
          image: "/轮播图_slices/awards-card-03@2x.png",
        },
        {
          year: "2023",
          text: "Published Top-tier Papers",
          image: "/轮播图_slices/awards-card-04@2x.png",
        },
        {
          year: "2023",
          text: "Received the 'Top 250 Most Promising Global Health Tech Companies' honors in both 2022 and 2023",
          image: "/轮播图_slices/awards-card-05@2x.png",
        },
        {
          year: "2023",
          text: "Featured in Leading Mainstream Media",
          image: "/轮播图_slices/awards-card-06@2x.png",
        },
      ],
      products: [
        {
          name: "Anti-inflammatory peptide",
          desc: "Reduces the level of pro-inflammatory cytokines and attenuates the inflammatory response",
        },
        {
          name: "Anti-acne Peptide",
          desc: "Reduces the level of pro-inflammatory cytokines and attenuates the inflammatory response",
        },
        {
          name: "Anti-wrinkle peptide",
          desc: "Instant wrinkle removal. Relax facial muscles and instantly erase facial wrinkles.",
        },
        {
          name: "Gingival Protection Peptide",
          desc: "Oral microbiome balancer Antibacterial, anti-inflammatory and enhancing oral protection",
        },
        {
          name: "Vaginal Care Antimicrobial Peptide",
          desc: "Vaginal health promoter. Effectively inhibits various pathogenic bacteria and reduces inflammation",
        },
      ],
      services: [
        {
          name: "AI-driven new formulation",
          desc: "Our team has expertise in developing highly innovative artificial intelligence-assisted formulations for cosmetics.",
        },
        {
          name: "AI-driven raw formulation",
          desc: "Develop highly innovative and proprietary active ingredients for the treatment.",
        },
        {
          name: "AI-driven new formulation",
          desc: "Develop highly innovative and proprietary active ingredients for the treatment.",
        },
      ],
    };
  },
  computed: {
    // 新增：About 轮播数据
    aboutSlides() {
      return [
        {
          // title: "About Us",
          text: "With the principles of science, professionalism and innovation, MetaNovas has gained recognition from international brands such as L'Oréal and Beiersdorf. We have established long-term and stable partnerships with many top brands in cosmetics, foods and biopharmaceuticals, becoming their core technology collaborator and raw material supplier.",
          image: '/about-us-card01.jpg'
        },
        {
          // title: "Our Mission",
          text: "Since its inception, MetaNovas has achieved significant progress and earned international recognition and awards. We not only joined the Massachusetts Institute of Technology Industrial Liaison Program, but also had the honor of delivering a top-tier industry presentation at the 33rd IFSCC International Congress of Cosmetic Sciences. As a notable biotech startup, we were crowned as the champion of the 'L'Oréal Big Bang Beauty Tech Challenge' and have been recognized as one of the world's most promising health technology companies for two consecutive years.",
          image: '/about-us-card02.jpg',
        },
        {
          // title: "Our Mission",
          text: "MetaNovas Biotech is an innovative biotechnology company established in early 2021 in Los Angeles, USA and Shanghai, China. Our mission is to integrate artificial intelligence with life sciences and delve into complex biological networks through deep learning, knowledge graphs, natural language processing and multi-omics analysis. MetaNovas is dedicated to becoming a global leader in AI-driven efficient ingredient and product design and development platforms.",
          image: '/about-us-card03.jpg',
        },
      ];
    },
    // 使用 computed 属性处理中文文件名的 URL 编码
    aboutGridImage() {
      return "/home_slices/" + encodeURIComponent("1748958330280 (1).png");
    },
    cellImage() {
      return "/home_slices/" + encodeURIComponent("图层 92.png");
    },
    gradientCardImage() {
      return "/home_slices/" + encodeURIComponent("图层 289.png");
    },
    awardWinnerImage() {
      return "/home_slices/" + encodeURIComponent("图层 95.png");
    },
    stat45Image() {
      return "/home_slices/" + encodeURIComponent("45%.png");
    },
    timeImage() {
      return "/home_slices/" + encodeURIComponent("时间 (5).png");
    },
    researchBgImage() {
      return (
        "/home_slices/" +
        encodeURIComponent(
          "05a10759634d0439b6aaaa9bc72c93deffae35002aaca-HM2GeK_fw1200.png"
        )
      );
    },
    aboutBtnImage() {
      return "/home_slices/" + encodeURIComponent("圆角矩形 3.png");
    },
    partnerLogo1() {
      return "/home_slices/" + encodeURIComponent("图层 294.png");
    },
    partnerLogo2() {
      return "/home_slices/" + encodeURIComponent("图层 295.png");
    },
    partnerLogo3() {
      return "/home_slices/" + encodeURIComponent("图层 296.png");
    },
    partnerLogo4() {
      return "/home_slices/" + encodeURIComponent("图层 297(1).png");
    },
    partnerLogo5() {
      return "/home_slices/" + encodeURIComponent("图层 298.png");
    },
    partnerLogo6() {
      return "/home_slices/" + encodeURIComponent("图层 299.png");
    },
    partnerLogo7() {
      return "/home_slices/" + encodeURIComponent("图层 300.png");
    },
    partnerLogo8() {
      return "/home_slices/" + encodeURIComponent("图层 301.png");
    },
    techImage1() {
      return (
        "/home_slices/" +
        encodeURIComponent(
          "434d9fab26ee00d0399ff9f83dfe14004655bbff1d48f7-dBacl2_fw1200.png"
        )
      );
    },
    techImage2() {
      return (
        "/home_slices/" +
        encodeURIComponent(
          "c423f4bbad99da9f156712d4d5453f91d70481cd8df58-iuDR9W.png"
        )
      );
    },
    techImage3() {
      return (
        "/home_slices/" +
        encodeURIComponent(
          "花瓣素材_美妆系列清透感绿色液体分子元素_194820674.png"
        )
      );
    },
    techImage4() {
      return (
        "/home_slices/" +
        encodeURIComponent(
          "6547de3fbb09dec7c65aa49d79b303714e27a1826e610-puB5YZ.png"
        )
      );
    },
    logo1() {
      const filename = "形状 5 拷贝.png";
      return "/home_slices/" + encodeURIComponent(filename);
    },
    logo2() {
      const filename = "形状 5 拷贝 2.png";
      return "/home_slices/" + encodeURIComponent(filename);
    },
    logo3() {
      const filename = "形状 5 拷贝 3.png";
      return "/home_slices/" + encodeURIComponent(filename);
    },
    logo4() {
      const filename = "形状 5 拷贝 4.png";
      return "/home_slices/" + encodeURIComponent(filename);
    },
    logo5() {
      const filename = "形状 5 拷贝 5.png";
      return "/home_slices/" + encodeURIComponent(filename);
    },
    logo6() {
      const filename = "形状 5 拷贝 6.png";
      return "/home_slices/" + encodeURIComponent(filename);
    },
  },
  mounted() {
    this.initScrollAnimations();
    this.initCursorTrail();
    this.startAwardsCarousel();
    this.scrollToHash();
  },
  watch: {
    "$route.hash"() {
      this.scrollToHash();
    },
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
    getWheelClass(index) {
      const current = this.currentAwardIndex;
      const total = this.awardsData.length;

      let diff = (index - current + total) % total;
      if (diff === 0) {
        return 'active';
      } else if (diff === 1) {
        return 'next';
      } else if (diff === total - 1) {
        return 'prev';
      } else {
        return 'hidden'; 
      }
    },
    handleAwardClick(index) {
      this.currentAwardIndex = index;
      this.startAwardsCarousel()
    },
    nextAboutSlide() {
      if (this.currentAboutIndex < this.aboutSlides.length - 1) {
        this.currentAboutIndex++;
      } else {
        this.currentAboutIndex = 0;
      }
    },
    prevAboutSlide() {
      if (this.currentAboutIndex > 0) {
        this.currentAboutIndex--;
      } else {
        this.currentAboutIndex = this.aboutSlides.length - 1;
      }
    },
    scrollToHash() {
      if (!this.$route.hash) return;

      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector(this.$route.hash);
          if (!el) return;

          const headerOffset = 0;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        });
      });
    },
    // 鼠标移动处理
    onMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.isMouseInPage = true;

      // 更新主光标位置
      if (this.$refs.cursorBall) {
        this.$refs.cursorBall.style.left = e.clientX + "px";
        this.$refs.cursorBall.style.top = e.clientY + "px";
        this.$refs.cursorBall.style.opacity = "1";
      }
    },

    onMouseLeave() {
      this.isMouseInPage = false;
      if (this.$refs.cursorBall) {
        this.$refs.cursorBall.style.opacity = "0";
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
                left: pos.x + "px",
                top: pos.y + "px",
                width: size + "px",
                height: size + "px",
                opacity: opacity * 0.8,
                transform: `translate(-50%, -50%) scale(${scale})`,
                transition: "opacity 0.3s ease-out",
              },
            };
          });
        }

        this.trailAnimationFrame = requestAnimationFrame(updateTrails);
      };

      updateTrails();
    },

    initScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      document
        .querySelectorAll(
          ".section-title, .featured-title, .tech-card, .product-card, .service-card"
        )
        .forEach((el) => {
          observer.observe(el);
        });
    },

    getImageUrl(filename) {
      // 分离路径和文件名，只编码文件名部分
      const parts = filename.split("/");
      const encodedParts = parts.map((part, index) => {
        // 路径部分保持原样，文件名部分编码
        return index === parts.length - 1 ? encodeURIComponent(part) : part;
      });
      return "/" + encodedParts.join("/");
    },

    getProductBgImage(index) {
      const images = [
        "矩形 10.png",
        "矩形 10(1).png",
        "图层 297.png",
        "矩形 10(2).png",
        "形状 4.png",
      ];
      return (
        "/home_slices/" + encodeURIComponent(images[index] || "矩形 10.png")
      );
    },

    getProductIcon(index) {
      const icons = [
        "形状 7.png",
        "形状 8.png",
        "皱纹.png",
        "形状 3.png",
        "形状 4(1).png",
      ];
      return "/home_slices/" + encodeURIComponent(icons[index] || "形状 7.png");
    },

    getServiceImage(index) {
      const images = ["图层 92.png", "图层 290.png", "图层 291.png"];
      return (
        "/home_slices/" + encodeURIComponent(images[index] || "图层 92.png")
      );
    },

    handleImageError(event, logoNum) {
      console.error(`Logo ${logoNum} failed to load:`, event.target.src);
      // 尝试使用普通版本
      const filenames = [
        "形状 5 拷贝.png",
        "形状 5 拷贝 2.png",
        "形状 5 拷贝 3.png",
        "形状 5 拷贝 4.png",
        "形状 5 拷贝 5.png",
        "形状 5 拷贝 6.png",
      ];
      if (logoNum <= filenames.length) {
        event.target.src =
          "/home_slices/" + encodeURIComponent(filenames[logoNum - 1]);
      }handleAwardClick
    },

    getCarouselItemClass(index) {
      const total = this.awardsData.length;
      const current = this.currentAwardIndex;

      if (index === current) {
        return "active";
      }

      // 计算前一个索引（已展示过的）
      const prevIndex = (current - 1 + total) % total;
      if (index === prevIndex) {
        return "prev";
      }

      // 计算后一个索引（即将展示的）
      const nextIndex = (current + 1) % total;
      if (index === nextIndex) {
        return "next";
      }

      return "";
    },

    startAwardsCarousel() {
      if(this.awardsCarouselInterval){
        clearInterval(this.awardsCarouselInterval)
      }
      this.awardsCarouselInterval = setInterval(() => {
        this.currentAwardIndex =
          (this.currentAwardIndex + 1) % this.awardsData.length;
      }, 3000);
    },
    handleWheel(e) {
      // 如果是锚点跳转触发的滚动，跳过滚动捕捉
      if (this.isScrollingToAnchor) return;
      // 只在向下滚动时触发
      if (e.deltaY > 0) {
        const currentSection = e.currentTarget;
        const nextSection = this.getNextSection(currentSection);
        if (nextSection) {
          const rect = currentSection.getBoundingClientRect();
          // 检查是否在section的底部区域
          if (rect.bottom <= window.innerHeight + 100) {
            e.preventDefault();
            this.scrollToSection(nextSection);
          }
        }
      }
    },
    getNextSection(currentSection) {
      const sections = [
        this.$refs.heroSection,
        this.$refs.featuredSection,
        this.$refs.aboutSection,
        this.$refs.partnersSection,
        this.$refs.technologySection,
        this.$refs.researchSection,
        this.$refs.awardsSection,
        this.$refs.productsSection,
        this.$refs.servicesSection,
      ];

      const currentIndex = sections.indexOf(currentSection);
      if (currentIndex >= 0 && currentIndex < sections.length - 1) {
        return sections[currentIndex + 1];
      }
      return null;
    },
    scrollToSection(section) {
      if (section && !this.isScrolling) {
        this.isScrolling = true;
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
      }
    },
    initScrollSnap() {
      // 防止滚动过快
      this.isScrolling = false;
    },
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
};
</script>

<style scoped>
/* 基础样式 */
.home-page {
  font-family: "Segoe UI", "SF Pro Display", -apple-system, sans-serif;
  color: #ffffff;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  cursor: none;
  width: 100%;
  margin: 0;
  padding: 0;
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

/* 背景层 */
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/homebg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  z-index: -1;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
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
  color: #449673;
  text-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}

.navbar-links a.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #449673;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.5);
}

/* 英雄区 */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
  padding: 100px 60px 0;
  position: relative;
  /* background-image: url("/home.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0; */
}
.hero-full-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; 
  overflow: hidden;
}

.hero-full-bg img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  object-position: center;
  display: block;
}
.hero-content {
  flex: 0 0 auto;
  max-width: 480px;
  text-align: left;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  left: -320px;
  top: -20px;
  z-index: 2;
}

.hero-content:hover {
  transform: translateX(15px) translateY(-10px);
}

.hero-content:hover .hero-title {
  text-shadow: 0 0 30px rgba(64, 253, 179, 0.6),
    0 0 60px rgba(61, 217, 201, 0.4), 0 10px 30px rgba(0, 0, 0, 0.5);
  transform: scale(1.02);
}

.hero-content:hover .hero-subtitle {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 0 20px rgba(61, 217, 201, 0.3);
  transform: translateX(5px);
}

.hero-content:hover .hero-cursive-img {
  filter: brightness(1.3);
  transform: scale(1.05);
}

.hero-title {
  font-size: 72px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -1px;
  text-align: left;
  white-space: nowrap;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: -35px;
}

.hero-title-main {
  color: #ffffff;
  display: inline;
}

.hero-title-accent {
  color: #40fdb3;
  font-weight: 400;
  display: inline;
  margin-left: -5px;
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;
  text-align: left;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-cursive-wrapper {
  margin-top: 20px;
  text-align: left;
}

.hero-cursive-img {
  height: 65px;
  width: auto;
  filter: brightness(1.1);
  display: block;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-visual {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: none;
  z-index: 2;
}

.hero-visual:hover {
  transform: translateX(-15px) translateY(-10px) scale(1.05);
}

/* .hero-visual:hover .hero-sphere-img {
  transform: scale(1.1) rotate(10deg);
  filter: drop-shadow(0 0 100px rgba(61, 217, 201, 0.9)) drop-shadow(0 0 180px rgba(61, 217, 201, 0.6)) drop-shadow(0 0 250px rgba(64, 253, 179, 0.4));
} */

.hero-visual:hover .sphere-glow-ring {
  opacity: 0.8;
  transform: scale(1.15);
}

.hero-visual:hover .sphere-orbiting-ring {
  animation-duration: 8s;
}

.hero-visual:hover .sphere-aura {
  width: 700px;
  height: 700px;
  opacity: 0.4;
}

.hero-visual:hover .sphere-shimmer {
  opacity: 1;
  animation: shimmerPulse 1.5s ease-in-out infinite;
}

/* 光环特效 */
/* .sphere-glow-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(61, 217, 201, 0.3);
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
} */

.ring-1 {
  width: 780px;
  height: 780px;
  right: -40px;
  animation: ringPulse 4s ease-in-out infinite, ringRotate 20s linear infinite;
}

.ring-2 {
  width: 860px;
  height: 860px;
  right: -75px;
  border-color: rgba(61, 217, 201, 0.2);
  animation: ringPulse 4s ease-in-out infinite 1s,
    ringRotate 25s linear infinite reverse;
}

.ring-3 {
  width: 960px;
  height: 960px;
  right: -120px;
  border-color: rgba(61, 217, 201, 0.1);
  animation: ringPulse 4s ease-in-out infinite 2s,
    ringRotate 30s linear infinite;
}

@keyframes ringPulse {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

@keyframes ringRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* 浮动粒子 */
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #3dd9c9 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: particleFloat 8s ease-in-out infinite;
}

.particle-1 {
  right: 80px;
  top: 20%;
  animation-delay: 0s;
}

.particle-2 {
  right: 180px;
  top: 10%;
  animation-delay: 1s;
  width: 6px;
  height: 6px;
}

.particle-3 {
  right: 30px;
  top: 60%;
  animation-delay: 2s;
  width: 10px;
  height: 10px;
}

.particle-4 {
  right: 280px;
  top: 40%;
  animation-delay: 3s;
  width: 5px;
  height: 5px;
}

.particle-5 {
  right: 130px;
  top: 80%;
  animation-delay: 4s;
}

.particle-6 {
  right: 330px;
  top: 70%;
  animation-delay: 5s;
  width: 7px;
  height: 7px;
}

@keyframes particleFloat {

  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }

  25% {
    transform: translateY(-30px) translateX(10px);
    opacity: 1;
  }

  50% {
    transform: translateY(-15px) translateX(-15px);
    opacity: 0.8;
  }

  75% {
    transform: translateY(-40px) translateX(5px);
    opacity: 0.9;
  }
}

.sphere-wrapper {
  position: relative;
  right: -20px;
  z-index: 2;
}

.hero-sphere-img {
  width: 700px;
  height: 700px;
  object-fit: cover;
  border-radius: 2%;
  /* animation: floatSphere 6s ease-in-out infinite; */
  /* filter: drop-shadow(0 0 45px rgba(61, 217, 201, 0.6)) drop-shadow(0 0 90px rgba(61, 217, 201, 0.4)) drop-shadow(0 0 130px rgba(64, 253, 179, 0.2)); */
  /* transition: all 0.5s ease; */
  position: relative;
  z-index: 1;
  /* 边缘模糊渐变 */
  /* mask-image: radial-gradient(circle,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.8) 65%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: radial-gradient(circle,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.8) 65%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0) 100%); */
}

/* 球体闪烁光效 */
.sphere-shimmer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 550px;
  border-radius: 50%;
  /* background: radial-gradient(circle at 30% 30%,
      rgba(64, 253, 179, 0.3) 0%,
      rgba(61, 217, 201, 0.2) 20%,
      transparent 50%);
  animation: shimmerRotate 8s linear infinite; */
  pointer-events: none;
  z-index: 2;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.6;
}

/* 球体光晕层 */
.sphere-aura {
  position: absolute;
  width: 620px;
  height: 620px;
  /* border-radius: 50%; */
  /* background: radial-gradient(circle,
      rgba(61, 217, 201, 0.2) 0%,
      rgba(64, 253, 179, 0.15) 30%,
      rgba(61, 217, 201, 0.1) 50%,
      transparent 70%);
  animation: auraPulse 4s ease-in-out infinite; */
  pointer-events: none;
  z-index: 0;
  right: calc(50% - 310px - 20px);
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 围绕球体旋转的光环 */
/* .sphere-orbiting-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  pointer-events: none;
  z-index: 1;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
} */

.ring-orb-1 {
  width: 600px;
  height: 600px;
  border-color: rgba(64, 253, 179, 0.4);
  border-style: dashed;
  right: calc(50% - 300px - 20px);
  top: 50%;
  transform: translateY(-50%);
  animation: orbitRotate 15s linear infinite;
}

.ring-orb-2 {
  width: 660px;
  height: 660px;
  border-color: rgba(61, 217, 201, 0.3);
  border-style: dotted;
  right: calc(50% - 330px - 20px);
  top: 50%;
  transform: translateY(-50%);
  animation: orbitRotate 20s linear infinite reverse;
}

/* 球体底部光晕 */
/* .hero-visual::before {
  content: "";
  position: absolute;
  width: 640px;
  height: 640px;
  right: -20px;
  background: radial-gradient(circle,
      rgba(61, 217, 201, 0.15) 0%,
      rgba(61, 217, 201, 0.05) 40%,
      transparent 70%);
  border-radius: 50%;
  z-index: -1;
  animation: glowPulse 4s ease-in-out infinite;
} */

/* 悬浮动画 */
@keyframes floatSphere {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  25% {
    transform: translateY(-20px) rotate(2deg);
  }

  50% {
    transform: translateY(-10px) rotate(-1deg);
  }

  75% {
    transform: translateY(-25px) rotate(1deg);
  }
}

/* 球体发光动画 */
@keyframes sphereGlow {
  0% {
    filter: drop-shadow(0 0 50px rgba(61, 217, 201, 0.6)) drop-shadow(0 0 100px rgba(61, 217, 201, 0.4)) drop-shadow(0 0 150px rgba(64, 253, 179, 0.2));
  }

  100% {
    filter: drop-shadow(0 0 70px rgba(61, 217, 201, 0.8)) drop-shadow(0 0 130px rgba(61, 217, 201, 0.6)) drop-shadow(0 0 180px rgba(64, 253, 179, 0.4));
  }
}

/* 闪烁旋转动画 */
@keyframes shimmerRotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 0.3;
  }

  50% {
    opacity: 0.6;
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
    opacity: 0.3;
  }
}

/* 光晕脉冲动画 */
@keyframes auraPulse {

  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.5;
  }
}

/* 轨道旋转动画 */
@keyframes orbitRotate {
  0% {
    transform: translateY(-50%) rotate(0deg);
  }

  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}

/* 发光脉冲动画 */
@keyframes glowPulse {

  0%,
  100% {
    filter: drop-shadow(0 0 40px rgba(61, 217, 201, 0.4)) drop-shadow(0 0 80px rgba(61, 217, 201, 0.2));
  }

  50% {
    filter: drop-shadow(0 0 60px rgba(61, 217, 201, 0.6)) drop-shadow(0 0 100px rgba(61, 217, 201, 0.4));
  }
}

/* Featured Section */
.featured-section {
  padding: 80px 0 60px;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.featured-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background: transparent;
  z-index: 0;
}

.featured-section .container {
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  background: transparent;
}

.featured-title {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 40px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  transition: all 0.4s ease;
  cursor: default;
}

.featured-title::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 0;
  background: linear-gradient(180deg, #449673, #3dd9c9);
  transition: height 0.4s ease;
  border-radius: 2px;
}

.featured-title:hover::before {
  height: 40px;
}

.featured-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9);
  transition: width 0.4s ease;
}

.featured-title:hover {
  color: #449673;
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.5);
  transform: translateX(5px);
}

.featured-title:hover::after {
  width: 100px;
}

.featured-title.animate {
  animation: titleGlow 3s ease-in-out infinite;
}

.featured-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.logo-item {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-logo-img {
  width: auto;
  height: 32px;
  max-width: 120px;
  object-fit: contain;
  object-position: center;
  opacity: 0.9;
  transition: all 0.3s ease;
  display: block;
}

.logo-item {
  position: relative;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
}

.logo-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  color:#449673;
}

.logo-item:hover::before {
  /* opacity: 1;
  border-color: #449673;
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.4),
    inset 0 0 15px rgba(68, 150, 115, 0.2); */
    color:#449673;
}

.logo-item:hover .featured-logo-img {
  opacity: 1;
  transform: scale(1.05);
  /* color:#449673; */
  filter: invert(52%) sepia(12%) saturate(1883%) hue-rotate(113deg) brightness(93%) contrast(89%);
}

/* About Section */
.about-section {
  padding: 100px 0;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.about-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background: transparent;
  z-index: 0;
}

.about-section .container {
  position: relative;
  z-index: 1;
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
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 0;
  background: linear-gradient(180deg, #449673, #3dd9c9);
  transition: height 0.4s ease;
  border-radius: 2px;
}

.section-title:hover::before {
  height: 40px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9);
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
    text-shadow: 0 0 30px rgba(68, 150, 115, 0.8),
      0 0 40px rgba(68, 150, 115, 0.4);
  }
}

.section-title.animate {
  animation: titleGlow 3s ease-in-out infinite;
}

.section-title.center {
  text-align: center;
}

.about-content {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.about-text {
  flex: 1;
  max-width: 500px;
}

.about-text p {
  font-size: 19px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.about-btn {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.about-btn-img {
  height: auto;
  width: auto;
  max-height: 50px;
  display: block;
  transition: all 0.3s ease;
}

.about-btn-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-arrow {
  font-size: 18px;
}

.about-btn:hover .about-btn-img {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.about-images {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;
  padding-top: 40px;
}

.about-grid-img {
  /* width: 100%;
  height: 100%; */
  width: 500px;
  height: 300px;
  border-radius: 16px;
}

/* 新增 */
/* 新增/修改：About 轮播样式 */
.about-carousel-wrapper {
  /* position: relative; */
  width: 100%;
  overflow: hidden;
  /* 隐藏超出的 Slide */
  padding-bottom: 20px;
}

.about-carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  /* 平滑过渡动画 */
  width: 100%;
}

.about-slide {
  min-width: 100%;
  /* 让每个 slide 占满容器宽度 */
  flex-shrink: 0;
  box-sizing: border-box;
}

/* 确保 slide 内部布局和以前一致 */
.about-content {
  display: flex;
  gap: 80px;
  align-items: flex-start;
  padding: 0 10px;
  /* 防止左右边缘溢出 */
}

/* 调整按钮样式，使其像原来的 More 按钮 */
.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* 圆形 */
  background: transparent;
  border: 2px solid #449673;
  /* 使用主题色边框 */
  color: #ffffff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.carousel-nav-btn:hover {
  background: #449673;
  /* 悬停时填充主题色 */
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.6);
  transform: translateY(-50%) scale(1.1);
}

.nav-arrow {
  line-height: 1;
  margin-top: -2px;
  /* 微调箭头垂直居中 */
}

.prev-btn {
  left: -20px;
  /* 放在容器左侧 */
}

.next-btn {
  right: -20px;
  /* 放在容器右侧 */
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .about-content {
    flex-direction: column;
    gap: 40px;
  }

  .carousel-nav-btn {
    top: auto;
    bottom: -60px;
    /* 移动端将箭头移到底部，避免遮挡内容 */
    transform: none;
  }

  .prev-btn {
    left: 30%;
  }

  .next-btn {
    right: 30%;
  }

  .about-carousel-wrapper {
    overflow: visible;
    /* 移动端允许按钮显示在下方 */
    margin-bottom: 60px;
  }
}

/* --- 1. 按钮容器 (完全透明，只负责位置和点击区域) --- */
.nav-btn {
  background: none;
  /* 去掉背景色 */
  border: none;
  /* 去掉边框 */
  cursor: pointer;
  padding: 10px;
  /* 给一点内边距，方便点击 */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  /* // 放在绝对定位的位置 (根据你的布局调整) */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* // 悬停时：整体稍微放大一点点 */
.nav-btn:hover {
  transform: translateY(-50%) scale(1.1);
  /* // 如果想要悬停发光，可以加一点滤镜 */
  filter: drop-shadow(0 0 5px rgba(0, 242, 96, 0.6));
}


/* // 左右位置微调 */
.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}


/* --- 2. 渐变箭头本体 (Mask法) --- */
.gradient-arrow {
  width: 40px;
  /* 箭头大小，按需调整 */
  height: 40px;

  /* // 核心：设置蓝绿渐变 */
  background: linear-gradient(to right, #00f260, #0575e6);

  /* // 遮罩设置 */
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

/* --- 3. 引入你的 SVG 文件 --- */
.arrow-left {
  -webkit-mask-image: url('/home_slices/左箭头.svg');
  mask-image: url('/home_slices/左箭头.svg');
  position: relative;
  left: 0;
  top: 0;
}

.arrow-right {
  -webkit-mask-image: url('/home_slices/右箭头.svg');
  mask-image: url('/home_slices/右箭头.svg');
  position: absolute;
  left: 0;
  top: 0;
}
.nav-btn {
  position: absolute;
  top: 40%;
  z-index: 20; 
  margin-top: 50px; 
}

/* 左按钮 */
.prev-btn {
  left: 50%;
  margin-left: -680px; 
}

.next-btn {
  left: 50%; 
  margin-left: 630px; 

}
@media (max-width: 1300px) {
  .prev-btn {
    left: 20px;
    margin-left: 0;
  }
  .next-btn {
    left: auto;
    right: 20px;
    margin-left: 0;
  }
}
/* end: About 轮播样式 */
/* Partners Section */
.partners-section {
  padding: 80px 0;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.partners-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  /* background: linear-gradient(to bottom,
      #000000 0%,
      #000000 80%,
      rgba(0, 0, 0, 0.9) 90%,
      rgba(0, 0, 0, 0.7) 95%,
      rgba(0, 0, 0, 0.4) 98%,
      rgba(0, 0, 0, 0) 100%); */
      background: transparent;
  z-index: 0;
}

.partners-section .container {
  position: relative;
  z-index: 1;
}

.partners-description {
  font-size: 17px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 50px;
  max-width: 900px;
}

.partners-logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px 40px;
  align-items: center;
  justify-items: center;
}

.partner-logo {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo:hover {
  transform: scale(1.05);
}

.partner-logo-img {
  max-width: 140px;
  height: auto;
  object-fit: contain;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.partner-logo:hover .partner-logo-img {
  opacity: 1;
}

.partner-name {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
}

.partner-name.firmenich {
  font-style: italic;
  color: #e31c5f;
  font-weight: 600;
}

.partner-name.loreal {
  /* font-family: 'Times New Roman', serif; */
  font-family: "Segoe UI", "SF Pro Display", -apple-system, sans-serif;
  letter-spacing: 3px;
  font-weight: 400;
}

.partner-name.coty {
  font-weight: 300;
  letter-spacing: 6px;
  font-size: 20px;
}

.partner-name.brw {
  font-weight: 700;
  letter-spacing: 2px;
}

.partner-name.beiersdorf {
  font-weight: 500;
  color: #0066b3;
}

.partner-name.haleon {
  color: #00a19a;
  font-weight: 600;
}

.partner-name.galderma {
  font-style: italic;
  color: #e4002b;
  font-weight: 500;
}

/* Technology Section */
.technology-section {
  padding: 100px 0;
  background: transparent;
}

.tech-tabs {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
}

.tech-tab {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px 0;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-tab:hover,
.tech-tab.active {
  color: #ffffff;
}

.tech-cards {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.tech-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.tech-name {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  white-space: nowrap;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-card:hover .tech-name {
  color: #449673;
  transform: translateY(-2px);
}

.tech-icon {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.15) 0%,
      rgba(68, 150, 115, 0.05) 50%,
      transparent 80%);
  border: 2px solid rgba(68, 150, 115, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.tech-icon::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: linear-gradient(45deg,
      rgba(68, 150, 115, 0.3),
      rgba(61, 217, 201, 0.3),
      rgba(68, 150, 115, 0.3));
  background-size: 200% 200%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
  animation: borderGlow 3s linear infinite;
}

.tech-icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.2) 0%,
      transparent 70%);
  transition: all 0.4s ease;
  z-index: -1;
}

.tech-icon:hover {
  border-color: #449673;
  box-shadow: 0 0 60px rgba(68, 150, 115, 0.5),
    0 0 100px rgba(68, 150, 115, 0.3), inset 0 0 40px rgba(68, 150, 115, 0.1);
  transform: scale(1.05);
}

.tech-icon:hover::before {
  opacity: 1;
}

.tech-icon:hover::after {
  width: 250px;
  height: 250px;
}

.tech-icon img {
  width: 170px;
  height: 170px;
  object-fit: contain;
  transition: all 0.4s ease;
  filter: drop-shadow(0 0 20px rgba(68, 150, 115, 0.3));
}

.tech-icon:hover img {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 0 30px rgba(68, 150, 115, 0.6));
}

@keyframes borderGlow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Research Section */
.research-section {
  padding: 100px 0;
  background: transparent;
}

.research-services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 50px;
  margin-bottom: 50px;
  align-items: center;
}

.research-service-item {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 12px 20px;
  border-radius: 8px;
  overflow: visible;
}

.research-service-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.1) 0%,
      transparent 70%);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.research-service-item:hover::before {
  opacity: 1;
}

.research-service-item:hover {
  transform: translateX(5px);
}

.service-icon {
  color: #449673;
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  text-shadow: 0 0 8px rgba(68, 150, 115, 0.3);
  animation: iconPulse 3s ease-in-out infinite;
}

@keyframes iconPulse {

  0%,
  100% {
    text-shadow: 0 0 8px rgba(68, 150, 115, 0.3);
  }

  50% {
    text-shadow: 0 0 15px rgba(68, 150, 115, 0.6),
      0 0 25px rgba(61, 217, 201, 0.3);
  }
}

.research-service-item:hover .service-icon {
  color: #3dd9c9;
  transform: scale(1.2);
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.8),
    0 0 30px rgba(61, 217, 201, 0.5);
  animation: iconGlow 1.5s ease-in-out infinite;
}

@keyframes iconGlow {

  0%,
  100% {
    text-shadow: 0 0 20px rgba(68, 150, 115, 0.8),
      0 0 30px rgba(61, 217, 201, 0.5);
  }

  50% {
    text-shadow: 0 0 30px rgba(68, 150, 115, 1),
      0 0 50px rgba(61, 217, 201, 0.8);
  }
}

.service-text {
  color: rgba(255, 255, 255, 0.85);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.85) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
}

.research-service-item:hover .service-text {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.5),
    0 0 30px rgba(61, 217, 201, 0.3);
  background: linear-gradient(90deg, #ffffff 0%, #3dd9c9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-text::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9, #449673);
  background-size: 200% 100%;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(68, 150, 115, 0.6);
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.research-service-item:hover .service-text::after {
  width: 100%;
  animation: lineGlow 1.5s ease-in-out infinite;
}

@keyframes lineGlow {

  0%,
  100% {
    box-shadow: 0 0 10px rgba(68, 150, 115, 0.6);
  }

  50% {
    box-shadow: 0 0 20px rgba(68, 150, 115, 0.9),
      0 0 30px rgba(61, 217, 201, 0.5);
  }
}

.research-content-wrapper {
  background-image: url("/home_slices/05a10759634d0439b6aaaa9bc72c93deffae35002aaca-HM2GeK_fw1200.png");
  background-size: 95%;
  background-position: center;
  background-repeat: no-repeat;
  /* border: 2px dashed rgba(255, 105, 180, 0.6); */
  border-radius: 8px;
  /* padding: 50px; */
  position: relative;
  min-height: 580px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  overflow: hidden;
}

.research-content-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.1) 0%,
      rgba(61, 217, 201, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  pointer-events: none;
}

.research-content-wrapper:hover::before {
  opacity: 1;
}

.research-content-wrapper:hover {
  border-color: rgba(68, 150, 115, 0.8);
  box-shadow: 0 0 40px rgba(68, 150, 115, 0.3),
    inset 0 0 60px rgba(68, 150, 115, 0.1);
  transform: translateY(-2px);
}

.research-content {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}

.research-text {
  flex: 1;
  margin-left: 104px;
}

.research-text p {
  font-size: 20px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 580px;
  transition: all 0.3s ease;
  position: relative;
}

.research-text p:hover {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.5);
  transform: translateX(5px);
}

.research-text p::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9);
  transition: width 0.3s ease;
}

.research-text p:hover::after {
  width: 100px;
}

.research-stats {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.stat-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;
  position: relative;
}

.stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.1) 0%,
      transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  z-index: -1;
}

.stat-item:hover {
  transform: translateX(5px);
}

.stat-item:hover::before {
  opacity: 1;
}

.stat-img {
  height: 30px !important;
  width: auto;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(68, 150, 115, 0.3));
}

.stat-item:hover .stat-img {
  transform: scale(1.1);
  filter: drop-shadow(0 0 20px rgba(68, 150, 115, 0.6));
}

.stat-time-img {
  height: 45px;
  width: auto;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(68, 150, 115, 0.3));
}

.stat-item:hover .stat-time-img {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 0 20px rgba(68, 150, 115, 0.6));
}

.stat-label {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-weight: 400;
  transition: all 0.3s ease;
}

.stat-item:hover .stat-label {
  color: #449673;
  text-shadow: 0 0 15px rgba(68, 150, 115, 0.4);
}

/* Awards Section */
.awards-section {
  padding: 60px 0;
  background: transparent;
}

.awards-description {
  font-size: 17px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 35px;
  max-width: 900px;
}

.awards-content-wrapper {
  background-image: url("/home_slices/图层 289.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  /* border: 2px dashed rgba(255, 105, 180, 0.6); */
  border-radius: 8px;
  padding: 35px 40px;
  position: relative;
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.4s ease;
}

.awards-content-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.1) 0%,
      rgba(61, 217, 201, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  pointer-events: none;
}

.awards-content-wrapper::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.15) 0%,
      transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  pointer-events: none;
  animation: pulseGlow 4s ease-in-out infinite;
}

.awards-content-wrapper:hover {
  border-color: rgba(68, 150, 115, 0.8);
  box-shadow: 0 0 60px rgba(68, 150, 115, 0.3),
    0 0 100px rgba(68, 150, 115, 0.2), inset 0 0 80px rgba(68, 150, 115, 0.1);
  transform: translateY(-3px);
}

.awards-content-wrapper:hover::before {
  opacity: 1;
}

.awards-content-wrapper:hover::after {
  opacity: 1;
}

@keyframes pulseGlow {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

.awards-content {
  display: flex;
  gap: 60px;
  align-items: center;
  width: 100%;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.awards-timeline {
  flex: 0 1 45%;
  max-width: 550px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 14px;
  padding: 14px 20px;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.1) 0%,
      rgba(61, 217, 201, 0.05) 100%);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.timeline-item:hover {
  transform: translateX(10px) translateY(-2px);
  border-color: rgba(68, 150, 115, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(68, 150, 115, 0.2),
    inset 0 0 20px rgba(68, 150, 115, 0.05);
}

.timeline-item:hover::before {
  opacity: 1;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  margin-top: 8px;
  position: relative;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item:hover .timeline-dot {
  background: #449673;
  border-color: #3dd9c9;
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.6), 0 0 30px rgba(68, 150, 115, 0.3);
  transform: scale(1.3);
}

.timeline-item.active {
  border-color: rgba(68, 150, 115, 0.5);
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.15) 0%,
      rgba(61, 217, 201, 0.1) 100%);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(68, 150, 115, 0.3),
    inset 0 0 30px rgba(68, 150, 115, 0.1);
  transform: translateX(8px);
}

.timeline-item.active::before {
  opacity: 1;
}

.timeline-item.active .timeline-dot {
  background: linear-gradient(135deg, #449673, #3dd9c9);
  border-color: #3dd9c9;
  box-shadow: 0 0 20px rgba(68, 150, 115, 0.8), 0 0 40px rgba(68, 150, 115, 0.5),
    0 0 60px rgba(61, 217, 201, 0.3);
  transform: scale(1.4);
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {

  0%,
  100% {
    box-shadow: 0 0 20px rgba(68, 150, 115, 0.8),
      0 0 40px rgba(68, 150, 115, 0.5), 0 0 60px rgba(61, 217, 201, 0.3);
  }

  50% {
    box-shadow: 0 0 30px rgba(68, 150, 115, 1), 0 0 60px rgba(68, 150, 115, 0.7),
      0 0 90px rgba(61, 217, 201, 0.5);
  }
}

.timeline-text {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;
  font-weight: 400;
  position: relative;
  z-index: 2;
  letter-spacing: 0.2px;
}

.timeline-item:hover .timeline-text {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 0 15px rgba(68, 150, 115, 0.3);
}

.timeline-item.active .timeline-text {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.5),
    0 0 30px rgba(61, 217, 201, 0.3);
  font-weight: 500;
  background: linear-gradient(90deg, #ffffff 0%, #3dd9c9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textGlow 3s ease-in-out infinite;
}

@keyframes textGlow {

  0%,
  100% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.2);
  }
}

.active-glow {
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9, transparent);
  border-radius: 2px;
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.8), 0 0 30px rgba(61, 217, 201, 0.5);
  animation: glowExtend 0.8s ease-out forwards,
    glowPulse 2s ease-in-out infinite 0.8s;
  z-index: 2;
}

@keyframes glowExtend {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 50px;
    opacity: 1;
  }
}

@keyframes glowPulse {

  0%,
  100% {
    box-shadow: 0 0 15px rgba(68, 150, 115, 0.8),
      0 0 30px rgba(61, 217, 201, 0.5);
  }

  50% {
    box-shadow: 0 0 25px rgba(68, 150, 115, 1), 0 0 50px rgba(61, 217, 201, 0.8);
  }
}

.awards-carousel {
  flex: 0 1 45%;
  max-width: 450px;
  position: relative;
  height: 380px;
  perspective: 1200px;
  perspective-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.3) 0%,
      transparent 70%);
  filter: blur(50px);
  animation: circleFloat 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 350px;
  height: 350px;
  top: -50px;
  right: -50px;
  animation-delay: 0s;
}

.bg-circle-2 {
  width: 300px;
  height: 300px;
  bottom: -30px;
  left: -30px;
  background: radial-gradient(circle,
      rgba(61, 217, 201, 0.35) 0%,
      transparent 70%);
  animation-delay: 2s;
}

.bg-circle-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.25) 0%,
      transparent 70%);
  animation-delay: 4s;
}

@keyframes circleFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }

  33% {
    transform: translate(20px, -20px) scale(1.1);
    opacity: 0.8;
  }

  66% {
    transform: translate(-15px, 15px) scale(0.9);
    opacity: 0.7;
  }
}

.bg-gradient-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: conic-gradient(from 0deg,
      rgba(68, 150, 115, 0.2) 0deg,
      rgba(61, 217, 201, 0.25) 90deg,
      rgba(68, 150, 115, 0.2) 180deg,
      rgba(61, 217, 201, 0.25) 270deg,
      rgba(68, 150, 115, 0.2) 360deg);
  border-radius: 50%;
  filter: blur(70px);
  animation: orbRotate 15s linear infinite;
  opacity: 0.7;
}

@keyframes orbRotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.bg-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 1) 0%,
      rgba(61, 217, 201, 0.8) 50%,
      transparent 100%);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(68, 150, 115, 0.8), 0 0 30px rgba(68, 150, 115, 0.4),
    0 0 45px rgba(61, 217, 201, 0.3);
  animation: particleFloat 5s ease-in-out infinite;
  animation-delay: var(--delay);
}

.particle:nth-child(1) {
  top: 10%;
  left: 20%;
}

.particle:nth-child(2) {
  top: 20%;
  right: 15%;
}

.particle:nth-child(3) {
  top: 30%;
  left: 10%;
}

.particle:nth-child(4) {
  top: 40%;
  right: 25%;
}

.particle:nth-child(5) {
  top: 50%;
  left: 30%;
}

.particle:nth-child(6) {
  top: 60%;
  right: 10%;
}

.particle:nth-child(7) {
  bottom: 30%;
  left: 15%;
}

.particle:nth-child(8) {
  bottom: 20%;
  right: 30%;
}

.particle:nth-child(9) {
  bottom: 40%;
  left: 25%;
}

.particle:nth-child(10) {
  top: 15%;
  left: 50%;
}

.particle:nth-child(11) {
  bottom: 15%;
  right: 20%;
}

.particle:nth-child(12) {
  top: 70%;
  left: 40%;
}

@keyframes particleFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }

  25% {
    transform: translate(15px, -20px) scale(1.3);
    opacity: 0.8;
  }

  50% {
    transform: translate(-10px, -30px) scale(0.8);
    opacity: 0.6;
  }

  75% {
    transform: translate(20px, -10px) scale(1.2);
    opacity: 0.9;
  }
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  height: 85%;
  opacity: 0;
  transform: translate(-50%, -50%) translateX(0) scale(0.5) rotateY(0deg);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  transform-style: preserve-3d;
}

.carousel-item.active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) rotateY(0deg);
  z-index: 5;
  pointer-events: auto;
  animation: cardFloat 4s ease-in-out infinite;
}

@keyframes cardFloat {

  0%,
  100% {
    transform: translate(-50%, -50%) scale(1) rotateY(0deg) translateY(0) rotateZ(0deg);
  }

  25% {
    transform: translate(-50%, -50%) scale(1.02) rotateY(2deg) translateY(-8px) rotateZ(0.5deg);
  }

  50% {
    transform: translate(-50%, -50%) scale(1) rotateY(0deg) translateY(-12px) rotateZ(0deg);
  }

  75% {
    transform: translate(-50%, -50%) scale(1.02) rotateY(-2deg) translateY(-8px) rotateZ(-0.5deg);
  }
}

/* 已展示过的图片 - 在左后方 */
.carousel-item.prev {
  opacity: 0.4;
  transform: translate(-50%, -50%) translateX(-200px) translateZ(-150px) scale(0.65) rotateY(35deg);
  z-index: 2;
  filter: blur(3px);
}

/* 即将展示的图片 - 在右后方 */
.carousel-item.next {
  opacity: 0.4;
  transform: translate(-50%, -50%) translateX(200px) translateZ(-150px) scale(0.65) rotateY(-35deg);
  z-index: 2;
  filter: blur(3px);
}

/* 其他隐藏的图片 */
.carousel-item:not(.active):not(.prev):not(.next) {
  opacity: 0;
  transform: translate(-50%, -50%) translateX(0) translateZ(-200px) scale(0.3) rotateY(0deg);
  z-index: 1;
}

.carousel-item::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.6),
      rgba(61, 217, 201, 0.6),
      rgba(68, 150, 115, 0.6));
  background-size: 200% 200%;
  border-radius: 16px;
  opacity: 0;
  z-index: -1;
  filter: blur(15px);
  transition: opacity 0.6s ease;
  animation: borderGlow 3s ease-in-out infinite;
}

.carousel-item.active::before {
  opacity: 0.8;
  animation: borderGlow 3s ease-in-out infinite, borderMove 4s linear infinite;
}

@keyframes borderGlow {

  0%,
  100% {
    opacity: 0.6;
    filter: blur(15px);
  }

  50% {
    opacity: 1;
    filter: blur(20px);
  }
}

@keyframes borderMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.carousel-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 14px;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.3),
      rgba(61, 217, 201, 0.3)) padding-box,
    linear-gradient(135deg, rgba(68, 150, 115, 0.8), rgba(61, 217, 201, 0.8)) border-box;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.carousel-item.active::after {
  opacity: 1;
  animation: borderPulse 2s ease-in-out infinite;
}

@keyframes borderPulse {

  0%,
  100% {
    box-shadow: 0 0 20px rgba(68, 150, 115, 0.5),
      inset 0 0 20px rgba(68, 150, 115, 0.1);
  }

  50% {
    box-shadow: 0 0 40px rgba(68, 150, 115, 0.8),
      0 0 60px rgba(61, 217, 201, 0.5), inset 0 0 30px rgba(68, 150, 115, 0.2);
  }
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  border-radius: 14px;
  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 40px rgba(68, 150, 115, 0.3));
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  display: block;
  margin: 0 auto;
}

.carousel-item.active img {
  filter: drop-shadow(0 25px 80px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 60px rgba(68, 150, 115, 0.5)) drop-shadow(0 0 100px rgba(61, 217, 201, 0.3));
  animation: imgGlow 3s ease-in-out infinite;
}

@keyframes imgGlow {

  0%,
  100% {
    filter: drop-shadow(0 25px 80px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 60px rgba(68, 150, 115, 0.5)) drop-shadow(0 0 100px rgba(61, 217, 201, 0.3));
  }

  50% {
    filter: drop-shadow(0 30px 100px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 80px rgba(68, 150, 115, 0.7)) drop-shadow(0 0 120px rgba(61, 217, 201, 0.5));
  }
}

.carousel-item.prev img,
.carousel-item.next img {
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
}

/* Products Section */
.products-section {
  padding: 100px 0;
  background: transparent;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 25px;
}

.product-card:nth-child(1),
.product-card:nth-child(2),
.product-card:nth-child(3) {
  grid-column: span 2;
}

.product-card:nth-child(4),
.product-card:nth-child(5) {
  grid-column: span 3;
}

.product-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.product-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.1) 0%,
      rgba(61, 217, 201, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
  border-radius: 16px;
}

.product-card::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.3),
      rgba(61, 217, 201, 0.3));
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
  filter: blur(10px);
}

.product-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(68, 150, 115, 0.2),
    inset 0 0 30px rgba(68, 150, 115, 0.1);
  border-color: rgba(68, 150, 115, 0.3);
}

.product-card:hover::before {
  opacity: 1;
}

.product-card:hover::after {
  opacity: 1;
}

.product-image {
  height: 180px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.product-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.9);
}

.product-card:hover .product-bg-img {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.product-content {
  padding: 20px;
  position: relative;
}

.product-icon {
  position: absolute;
  top: -40px;
  left: 20px;
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(68, 150, 115, 0.5));
  transition: all 0.3s ease;
  z-index: 2;
}

.product-card:hover .product-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 0 25px rgba(68, 150, 115, 0.8));
}

.product-content {
  padding: 20px;
  position: relative;
  padding-top: 30px;
  z-index: 2;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
}

.product-icon {
  position: absolute;
  top: -40px;
  left: 20px;
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(68, 150, 115, 0.5));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  animation: iconFloat 3s ease-in-out infinite;
}

.product-card:hover .product-icon {
  transform: scale(1.15) rotate(5deg);
  filter: drop-shadow(0 0 30px rgba(68, 150, 115, 0.9)) drop-shadow(0 0 15px rgba(68, 150, 115, 0.6));
}

@keyframes iconFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.product-title {
  font-size: 18px;
  font-weight: 600;
  color: #3dd9c9;
  margin-top: 10px;
  margin-left: 70px;
  transition: all 0.3s ease;
  position: relative;
}

.product-card:hover .product-title {
  color: #449673;
  text-shadow: 0 0 15px rgba(68, 150, 115, 0.5);
  transform: translateX(3px);
}

.product-title::after {
  content: "";
  position: absolute;
  left: -10px;
  bottom: -3px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9);
  transition: width 0.3s ease;
}

.product-card:hover .product-title::after {
  width: calc(100% + 10px);
}

.product-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 10px;
  margin-left: 70px;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.product-card:hover .product-desc {
  color: rgba(255, 255, 255, 0.9);
  transform: translateX(3px);
}

/* Services Section */
.services-section {
  padding: 100px 0;
  background: transparent;
  position: relative;
}

.services-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: radial-gradient(circle at 50% 50%,
      rgba(68, 150, 115, 0.05) 0%,
      transparent 70%); */
      background: transparent;
  pointer-events: none;
  z-index: 0;
}

.services-description {
  font-size: 17px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 50px;
  max-width: 900px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.services-section:hover .services-description {
  color: rgba(255, 255, 255, 0.9);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  position: relative;
  z-index: 1;
}

.service-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.1) 0%,
      rgba(61, 217, 201, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
  border-radius: 16px;
}

.service-card::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg,
      rgba(68, 150, 115, 0.3),
      rgba(61, 217, 201, 0.3));
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
  filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(68, 150, 115, 0.2),
    inset 0 0 30px rgba(68, 150, 115, 0.1);
  border-color: rgba(68, 150, 115, 0.3);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover::after {
  opacity: 1;
}

.service-image {
  height: 160px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.service-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.9);
}

.service-card:hover .service-bg-img {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.service-title {
  font-size: 18px;
  font-weight: 600;
  color: #3dd9c9;
  padding: 20px 20px 10px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.service-card:hover .service-title {
  color: #449673;
  text-shadow: 0 0 15px rgba(68, 150, 115, 0.5);
  transform: translateX(3px);
}

.service-title::after {
  content: "";
  position: absolute;
  left: 20px;
  bottom: 5px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #449673, #3dd9c9);
  transition: width 0.3s ease;
}

.service-card:hover .service-title::after {
  width: calc(100% - 40px);
}

.service-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 20px 20px;
  line-height: 1.6;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.service-card:hover .service-desc {
  color: rgba(255, 255, 255, 0.9);
  transform: translateX(3px);
}

/* 右侧展示区域容器 */
.awards-display-area {
  flex: 0 1 50%;
  /* 稍微加宽一点图片区域 */
  max-width: 500px;
  position: relative;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 背景光效 */
.display-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  z-index: 0;
}

.bg-gradient-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle,
      rgba(68, 150, 115, 0.15) 0%,
      transparent 70%);
  border-radius: 50%;
  filter: blur(50px);
}

/* 图片容器 */
.awards-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  /* 关键：隐藏超出部分，实现遮罩效果 */
  border-radius: 16px;
}

.image-track {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 单张图片卡片 */
.award-image-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.award-image-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* 保持比例 */
  /* filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5)); */
  transition: transform 0.3s ease;
}

/* === 垂直切换动画 (核心) === */

/* 激活状态：位于中间 */
.slide-vertical-enter-active,
.slide-vertical-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  /* 这种曲线更有高级感 */
}

/* 刚开始进入：在下方 (稍微带点缩放，更有层次感) */
.slide-vertical-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

/* 离开时：往上方飘走 */
.slide-vertical-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}

/* 确保 active 状态是归位的 */
.slide-vertical-enter-to,
.slide-vertical-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 左侧 Timeline 样式微调 (确保点击感更好) */
.timeline-item {
  cursor: pointer;
  /* 增加点击区域 */
  padding: 16px 20px;
}

/* 选中项高亮增强 */
.timeline-item.active {
  background: linear-gradient(90deg, rgba(68, 150, 115, 0.15), transparent);
  border-left: 3px solid #449673;
}

/* 左侧列表调整 */
/* 左侧列表调整 */
.awards-timeline {
  flex: 0 0 55%;
  /* 增加宽度占比，让盒子“拉长” */
  max-width: 650px;
  /* 放宽最大宽度限制 */
  margin-right: 40px;
  z-index: 2;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  /* 改为水平排列 */
  align-items: center;
  /* 关键：垂直居中 */
  justify-content: flex-start;
  margin-left: 40px;
  margin-bottom: 15px;
  /* 稍微减小间距 */
  padding: 15px 25px;
  /* 调整内边距 */
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  border-radius: 12px;
  border-left: 3px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  /* 给个淡淡的背景，更有“框”的感觉 */
}

.timeline-year {
  flex-shrink: 0;
  /* 防止年份被压缩 */
  width: 80px;
  /* 固定宽度，保证对齐 */
  font-size: 26px;
  /* 稍微加大年份字体 */
  font-weight: 700;
  color: #449673;
  font-family: 'Segoe UI', sans-serif;
  opacity: 0.7;
  transition: all 0.3s ease;
  margin-bottom: 0;
  /* 去掉之前的底部边距 */
  margin-right: 20px;
  /* 给文字留出间距 */
  text-align: left;
}

.timeline-text {
  flex: 1;
  /* 占满剩余空间 */
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;
  transition: all 0.3s ease;

  /* 核心：限制最多两行，超出省略 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 激活状态 */
.timeline-item.active {
  background: linear-gradient(90deg, rgba(68, 150, 115, 0.2), transparent);
  border-left-color: #449673;
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  /* 激活时加点阴影 */
}

.timeline-item.active .timeline-year {
  opacity: 1;
  transform: scale(1.1);
  text-shadow: 0 0 20px rgba(68, 150, 115, 0.4);
}

.timeline-item.active .timeline-text {
  color: #ffffff;
}

/* --- 右侧轮播核心样式 --- */

.awards-display-area {
  flex: 1;
  position: relative;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.awards-wheel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.wheel-card {
  position: absolute;
  left: 50%;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 16/10;
  /* 保持容器比例 */

  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  /* overflow: hidden; */
  /* 去掉 overflow hidden，防止投影被切 */
  background: transparent;
  /* 背景透明，避免比例不一致时漏出背景色 */

  /* 默认隐藏状态 */
  top: 150%;
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0;
  z-index: 1;
}

.wheel-card img {
  width: 100%;
  height: 100%;
  /* 核心修改：改为 contain，确保展示完整原图比例 */
  object-fit: contain;
  display: block;
  scale: 1.50;
  /* 加上一点投影让图片更立体 */
  /* filter: drop-shadow(0 10px 20px rgba(0,0,0,0.4)); */
}

.wheel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0,0,0,0.6); 加深一点遮罩 */
  transition: background 0.6s ease;
  pointer-events: none;
  border-radius: 16px;
  /* 匹配圆角 */
}

/* 1. Active (中间主图) */
.wheel-card.active {
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  z-index: 10;
}

.wheel-card.active .wheel-overlay {
  background: rgba(0, 0, 0, 0);
}

/* 2. Prev (上方备用图) */
.wheel-card.prev {
  top: 55%;
  transform: translate(-50%, -90%) scale(0.75) perspective(1000px) rotateX(10deg);
  opacity: 0.3;
  z-index: 5;
  filter: blur(2px) grayscale(50%);
  /* 加点灰度，区分更明显 */
}

/* 3. Next (下方备用图) */
.wheel-card.next {
  top: 83%;
  transform: translate(-50%, -80%) scale(0.75) perspective(1000px) rotateX(-10deg);
  opacity: 0.3;
  z-index: 5;
  filter: blur(2px) grayscale(50%);
}
</style>
