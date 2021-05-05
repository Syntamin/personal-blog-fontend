import { createRouter, createWebHistory } from 'vue-router';
import font from '../views/layout/font.vue';
import Home from '../views/Home.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/',
    name: 'font',
    component: font,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/map',
        name: 'Map',
        component: () => import('../views/Map.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('../views/Message.vue'),
      },
    ],
  },
  {
    path: '/end',
    name: 'end',
    redirect: '/login',
    component: () => import('../views/layout/end.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/manage',
        name: 'manage',
        component: () => import('../views/Manage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
