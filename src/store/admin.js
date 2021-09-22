import { createNewProduct, editProduct, deleteProduct } from '../api/admin';

const admin = {
  namespaced: true,
  state: () => ({
    error: null,
    success: false,
    loading: false,
  }),
  actions: {
    async createProduct({ commit }, data) {
      commit('setLoading', true);
      const resp = await createNewProduct(data);
      console.log(`ejecutado ${resp}`);
      commit('addProduct', data);
    },
    async editProduct({ commit }, data) {
      const resp = await editProduct(data);
      commit('editProduct', data);
      console.log(`ejecutado ${resp}`);
    },
    async deleteProduct({ commit }, data) {
      try {
        await deleteProduct(data);
        commit('deleteProduct', data);
      } catch (e) {
        commit('setAdminError', e);
      }
    },
  },
  getters: {
    success(state) {
      return state.success;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    addProduct(state, payload) {
      this.state.products = [...this.state.products, payload];
      state.success = true;
    },
    restart(state) {
      state.success = false;
      state.loading = false;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setAdminError(state, payload) {
      state.error = payload;
    },
  },
};
export default admin;
