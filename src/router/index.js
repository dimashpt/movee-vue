import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/home.vue';
import Favourites from '@/views/favourites/favourites.vue';
import Settings from '@/views/settings/settings.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
