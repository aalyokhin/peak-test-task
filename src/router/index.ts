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
      name: 'edit-form',
      component: () => import('@/pages/EditFormPage.vue'),
    },
    {
      path: '/render',
      name: 'render-form',
      component: () => import('@/pages/RenderFormPage.vue'),
    },
  ],
});

export default router;
