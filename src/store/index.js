import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { getProducts } from '@/api/products';

// eslint-disable-next-line import/no-cycle
import user from './user';
import cart from './cart';
import admin from './admin';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user'],
});

export default createStore({
  state: () => ({
    products: [],
    loading: false,
  }),
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productById: (state) => (id) => {
      console.log(id);
      const selectedItem = state.products.filter((i) => i.id === id);

      return selectedItem[0];
    },
  },
  actions: {
    async getItemsFromApi({ commit, state }) {
      state.loading = true;
      const data = await getProducts();
      commit('setProducts', data);
      state.loading = false;
    },
  },
  modules: { cart, user, admin },
  plugins: [vuexLocal.plugin],
});
