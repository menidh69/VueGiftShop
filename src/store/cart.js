import { addToCart, getCart, removeFromCart } from '../api/userCart';

const cart = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  actions: {
    async addItem({ commit, rootState }, item) {
      if (rootState.user.isLoggedIn) {
        console.log('Im logged in');
        try {
          await addToCart(item.id);
        } catch (e) {
          console.log(e);
        }
      }
      commit('addItem', item);
    },
    async removeItem({ commit, rootState }, itemId) {
      if (rootState.user.isLoggedIn) {
        console.log('Im logged in');
      }
      try {
        await removeFromCart(itemId);
        commit('removeItem', itemId);
      } catch (e) {
        console.log(e);
      }
    },
    async getCartFromApi({ commit, rootState }) {
      const data = await getCart(rootState.user.userData.id);
      console.log(data);
      commit('setCart', data.cartProducts);
    },
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    cartItemsQuantity(state) {
      const amount = state.items.reduce((a, b) => a + b.quantity, 0);
      return amount;
    },
    getTotal(state) {
      const total = state.items.reduce((a, b) => a + b.quantity * b.price, 0);
      return total;
    },
  },
  mutations: {
    addItem(state, item) {
      const existingItem = state.items.filter((i) => i.name === item.name);
      if (existingItem.length > 0) {
        existingItem[0].quantity += 1;
      } else {
        state.items = [...state.items, { ...item, quantity: 1 }];
      }
    },
    removeItem(state, itemId) {
      const itemRef = state.items.filter((item) => item.id === itemId);
      if (itemRef[0].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        itemRef[0].quantity -= 1;
      }
    },
    setCart(state, items) {
      const newItems = items.map((i) => ({ ...i.product, ...i }));
      state.items = newItems;
    },
  },
};
export default cart;
