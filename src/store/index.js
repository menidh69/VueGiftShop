import { createStore } from 'vuex';
import { getProducts } from '@/api/products';
import user from './user';
import cart from './cart';

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
  },
  actions: {
    async getItemsFromApi({ commit, state }) {
      state.loading = true;
      const data = await getProducts();
      commit('setProducts', data.arrayOfProducts);
      state.loading = false;
    },
  },
  modules: { cart, user },
});
