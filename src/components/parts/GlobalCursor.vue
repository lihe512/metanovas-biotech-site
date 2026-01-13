<template>
  <div class="global-cursor-container">
    <div class="cursor-ball" ref="cursorBall"></div>
    <div class="cursor-trail" v-for="(trail, index) in trails" :key="index" :style="trail.style"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

// 状态定义
const cursorBall = ref(null);
const trails = ref([]);
const trailCount = 40;
const positions = []; // 用于存储历史位置
let mouseX = 0;
let mouseY = 0;
let isMouseInPage = false;
let trailAnimationFrame = null;

// 鼠标移动处理
const onMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  isMouseInPage = true;

  // 直接操作 DOM 更新主光标位置 (性能优化)
  if (cursorBall.value) {
    cursorBall.value.style.left = e.clientX + "px";
    cursorBall.value.style.top = e.clientY + "px";
    cursorBall.value.style.opacity = "1";
  }
};

const onMouseLeave = () => {
  isMouseInPage = false;
  if (cursorBall.value) {
    cursorBall.value.style.opacity = "0";
  }
  trails.value = [];
  // 清空历史位置
  positions.length = 0;
};

// 初始化残影动画循环
const initCursorTrail = () => {
  const updateTrails = () => {
    if (isMouseInPage) {
      // 添加当前位置到历史
      positions.unshift({ x: mouseX, y: mouseY });

      // 限制历史长度
      if (positions.length > trailCount) {
        positions.pop();
      }

      // 更新残影数据
      trails.value = positions.map((pos, index) => {
        // 修改点：减缓透明度衰减，让尾巴更亮更长
        const opacity = 1 - (index / trailCount); 
        const scale = 1 - (index / trailCount) * 0.4;
        const size = 36 * scale;

        return {
          style: {
            left: pos.x + "px",
            top: pos.y + "px",
            width: size + "px",
            height: size + "px",
            // 修改点：移除之前的 * 0.8，保持 100% 亮度开始
            opacity: opacity, 
            transform: `translate(-50%, -50%) scale(${scale})`,
            transition: "opacity 0.1s ease-out", // 修改点：加快过渡反应，减少延迟感
          },
        };
      });
    } else {
      // 如果鼠标不在页面，逐渐清空残影
      if (trails.value.length > 0) {
        trails.value.pop();
      }
    }

    trailAnimationFrame = requestAnimationFrame(updateTrails);
  };

  updateTrails();
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && !e.toElement) {
      onMouseLeave();
    }
  });
  
  initCursorTrail();
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
  if (trailAnimationFrame) {
    cancelAnimationFrame(trailAnimationFrame);
  }
});
</script>

<style scoped>
/* 容器不应该阻挡点击事件 */
.global-cursor-container {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* 允许光效叠加，增强亮度 */
  mix-blend-mode: screen; 
}

/* 自定义鼠标 - 蓝绿色小球 */
.cursor-ball {
  position: fixed;
  width: 22px;
  height: 22px;
  /* 修改点：中心颜色更亮 */
  background: radial-gradient(circle,
      #80ffdb 0%, 
      #449673 60%,
      rgba(68, 150, 115, 0.3) 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  /* 修改点：增强阴影发光范围 */
  box-shadow: 
    0 0 15px rgba(128, 255, 219, 0.8), 
    0 0 30px rgba(68, 150, 115, 0.6),
    0 0 50px rgba(68, 150, 115, 0.4);
  transition: opacity 0.3s ease;
  opacity: 0;
  will-change: left, top;
}

/* 鼠标残影 */
.cursor-trail {
  position: fixed;
  /* 修改点：调整渐变，让光晕更实 */
  background: radial-gradient(circle,
      rgba(128, 255, 219, 0.9) 0%,
      rgba(68, 150, 115, 0.6) 50%,
      transparent 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  /* 修改点：增加残影的辉光 */
  box-shadow: 0 0 20px rgba(61, 217, 201, 0.6);
  will-change: left, top, opacity, transform;
}

@media (max-width: 1024px) {
  .global-cursor-container, .cursor-ball, .cursor-trail {
    display: none !important;
  }
}
@media (hover: none) and (pointer: coarse) {
  .global-cursor-container, .cursor-ball, .cursor-trail {
    display: none !important;
  }
}
</style>