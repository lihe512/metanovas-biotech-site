<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
/* 页面过渡动画 - 更柔和的淡入淡出 */
.page-enter-active {
  transition: opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<style>
/* 确保过渡期间背景透明，让各页面自己的背景显示 */
#app {
  background: transparent;
  min-height: 100vh;
  position: relative;
}

/* 过渡期间保持透明背景 */
.page-enter-active,
.page-leave-active {
  position: relative;
  background: transparent;
}

.page-enter-from,
.page-leave-to {
  background: transparent;
}
</style>
