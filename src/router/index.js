import { createRouter, createWebHistory } from 'vue-router';
// import store from '@/store/index';
// import { message } from 'ant-design-vue';
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
      {
        path: '/article/:id',
        name: 'artilce',
        component: () => import('../views/Article.vue'),
      },
      {
        path: '/articleList/:tag',
        name: 'articleList',
        component: () => import('../views/blogList.vue'),
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

// ????????????
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token');
//   // console.log(to, 'to');
//   // console.log(from, 'from');
//   // console.log(token);
//   // console.log(store.state.token);

//   if (to.name === 'login') {
//     if (!store.state.token) {
//       // ????????????????????????
//       // 1. ????????????????????????????????? / -> login
//       if (token) {
//         next({ name: '/manage' });
//       } else {
//         next();
//       }
//       // 2. ?????????????????????????????????/manage -> login
//       next();
//     } else {
//       // 2. ????????????????????????????????????????????????
//       next({ name: 'manage' });
//     }
//   } else if (to.matched[1].path === '/manage' && from.matched[1].path === '/manage') {
//     // ??????????????????
//     if (token !== '' && store.state.token !== '' && token === store.state.token) {
//       // 1. ???????????????????????????????????????token
//       next();
//     } else {
//       // 2. ??????????????????????????????????????????
//       message.error('????????????????????????????????????');
//       next({ name: 'login' });
//     }
//   } else {
//   // ????????????
//     next();
//   }
// });

export default router;
