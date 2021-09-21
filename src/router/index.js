// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import store from '../store';

// const isAdmin = () => {
//   const b = store.getters('user/isAdmin');
//   console.log(b);
//   return b;
// };

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAdmin'] && from.path === '/login') {
        return next('/admin');
      }
      return next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "Auth" */ '../views/Login.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: '<h1>Profile</h1>',
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "Auth" */ '../views/SignUp.vue'),
  },
  {
    path: '/my-cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.getters['user/isAdmin'] && to.meta.requiresAdmin) {
    return next({ name: 'Home' });
  }
  return next();
});

export default router;
