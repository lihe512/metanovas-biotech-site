// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// // 添加平滑滚动
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
      
//       const targetId = this.getAttribute('href');
//       const targetElement = document.querySelector(targetId);
      
//       if (targetElement) {
//         // 设置标志，通知 HomePage 组件不要执行滚动捕捉
//         window.scrollToAnchor = true;
        
//         // 获取目标元素相对于视口的位置
//         const rect = targetElement.getBoundingClientRect();
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         // 计算目标位置（考虑导航栏高度）
//         const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
//         const targetPosition = rect.top + scrollTop - navbarHeight - 20; // 额外减去20px间距
        
//         // 平滑滚动到目标位置
//         window.scrollTo({
//           top: targetPosition,
//           behavior: 'smooth'
//         });
        
//         // 重置标志（比动画时间稍长）
//         setTimeout(() => {
//           window.scrollToAnchor = false;
//         }, 1500);
//       }
//     });
//   });
// });

createApp(App)
  .use(router)
  .mount('#app')