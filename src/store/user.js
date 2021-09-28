import { login, logout } from '../api/auth';
// eslint-disable-next-line import/no-cycle
import router from '../router';
import { setBearerToken } from '../api/axiosConfig';

const user = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      userData: null,
      error: null,
      bearer: null,
    };
  },
  getters: {
    userData(state) {
      return state.userData;
    },
    isAdmin(state) {
      if (state.userData && state.userData.isAdmin) {
        return true;
      }
      return false;
    },
    error(state) {
      return state.error;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    bearer(state) {
      return state.bearer;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      console.log(credentials);
      commit('setLoading', true, { root: true });
      const resp = await login(credentials);
      if (resp.status === 201) {
        // call login method
        if (resp.data.admin) {
          commit('setAdmin');
        }
        setBearerToken(resp.data.accessToken);
        console.log(resp.data.accessToken);
        commit('setCartItems', resp.data.shoppingCart.cartProducts);
        commit('setUser', resp.data);
        router.push('/');
      } else {
        commit('setError', resp);
      }
      commit('setLoading', false, { root: true });
    },
    async logout({ commit }) {
      commit('setLoading', true, { root: true });
      await logout();
      commit('logout');
      commit('setLoading', false, { root: true });
    },
  },
  mutations: {
    setUser(state, data) {
      state.userData = data;
      state.isLoggedIn = true;
      state.bearer = data.accessToken;
    },
    logout(state) {
      state.userData = null;
      state.isLoggedIn = false;
      state.isAdmin = false;
    },
    setError(state, message) {
      state.error = message;
    },
    setAdmin(state) {
      state.isAdmin = true;
    },
    setBearer(state, payload) {
      state.bearer = payload;
    },
  },
};

export default user;
