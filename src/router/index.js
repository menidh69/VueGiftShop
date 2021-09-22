// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
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
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/products',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(
        /* webpackChunkName: "admin" */ '../views/admin/AdminProducts.vue'
      ),
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/products/:id',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(
        /* webpackChunkName: "admin" */ '../views/admin/AdminSingleProduct.vue'
      ),
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/products/:id/edit',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "admin" */ '../views/admin/EditProduct.vue'),
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/newProduct',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "admin" */ '../views/admin/NewProduct.vue'),
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
    return next({ name: 'Login' });
  }
  return next();
});

export default router;
