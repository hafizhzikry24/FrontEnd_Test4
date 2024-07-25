
import { createRouter, createWebHistory } from 'vue-router';
import MapView from '@/views/MapView.vue';

const routes = [
  {
    path: '/',
    name: 'MapView',
    component: MapView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
