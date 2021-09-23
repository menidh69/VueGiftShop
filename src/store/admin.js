import { addProduct, updateProduct, deleteProduct } from '../api/admin';
// eslint-disable-next-line import/no-cycle
import router from '../router';

const admin = {
  namespaced: true,
  state: () => ({
    error: null,
    success: false,
    loading: false,
  }),
  actions: {
    async createProduct({ commit }, body) {
      commit('setLoading', true);
      try {
        const resp = await addProduct(body);
        commit('addProduct', resp);
      } catch (e) {
        console.log(e);
      }
    },
    async editProduct({ commit }, body) {
      const { id } = body;
      try {
        await updateProduct(id, body);
        commit('editProduct', body);
        router.push('/admin/products');
      } catch (e) {
        commit('setAdminError', e.response.data.message);
      }
    },
    async deleteProduct({ commit }, id) {
      try {
        await deleteProduct(id);
        commit('deleteProduct', id);
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
    deleteProduct(state, id) {
      console.log(this.state.products);
      const newData = [...this.state.products].filter(
        (product) => product.id !== id,
      );
      console.log(newData);
      this.state.products = newData;
    },
    editProduct(state, body) {
      const { id } = body;
      const newData = [...this.state.products].filter(
        (product) => product.id !== id,
      );
      newData.push(body);
      this.state.products = newData;
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
