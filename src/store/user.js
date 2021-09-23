import { login, logout, signUp } from '@/api/auth';

const user = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      userData: null,
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
  },
  actions: {
    async login({ commit }, credentials) {
      commit('setLoading', true, { root: true });
      const auth = await login(credentials);
      // call login method
      commit('setUser', auth);
      commit('setLoading', false, { root: true });
    },
    async signUp(body) {
      const newUser = await signUp(body);
      return newUser;
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
    },
    logout(state) {
      state.userData = null;
      state.isLoggedIn = false;
    },
  },
};

export default user;
