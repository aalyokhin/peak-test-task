import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
