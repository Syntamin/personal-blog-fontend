import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';
import font from '../views/layout/font.vue';
import Home from '../views/Home.vue';

const routes = [
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
        redirect: { name: 'manageBlog' },
        component: () => import('../views/Manage.vue'),
        children: [
          {
            path: 'manageBlog',
            name: 'manageBlog',
            component: () => import('../views/ManageBlog.vue'),
          },
          {
            path: 'addBlog',
            name: 'addBlog',
            component: () => import('../views/AddBlog.vue'),
          },
          {
            path: 'addDaySentence',
            name: 'addDaySentence',
            component: () => import('../views/AddDaySentence.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 验证权限
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.name === 'login') {
    // 登录页面
    if (store.state.token !== '' && token === store.state.token) {
      next({ name: 'manage' });
    } else {
      next();
    }
  } else if (to.matched[0].path === '/end') {
    // 将要进入管理后台的非登录页面
    if (store.state.token !== '' && token === store.state.token) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    // 前台页面
    next();
  }
});

export default router;
