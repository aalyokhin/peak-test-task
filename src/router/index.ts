import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/edit',
      name: 'edit-forms',
      component: () => import('@/pages/EditFormsPage.vue'),
    },
    {
      path: '/render',
      name: 'render-forms',
      component: () => import('@/pages/RenderFormsPage.vue'),
    },
  ],
});

export default router;
