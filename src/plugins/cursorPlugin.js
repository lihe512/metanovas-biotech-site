import GlobalCursor from '../components/parts/GlobalCursor.vue';
export default {
    install: (app) => {
        // 注册为全局组件
        app.component('GlobalCursor', GlobalCursor);
    }
};