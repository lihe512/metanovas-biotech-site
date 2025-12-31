import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TechnologyPage from '../components/TechnologyPage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import ProductDetailPage from '../components/ProductDetailPage.vue'
import MediaPage from '../components/MediaPage.vue'
import ContactUsPage from '../components/ContactUsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/technology',
    name: 'Technology',
    component: TechnologyPage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/products/:slug',
    name: 'ProductDetail',
    component: ProductDetailPage,
    props: true
  },
  {
    path: '/media',
    name: 'Media',
    component: MediaPage
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router