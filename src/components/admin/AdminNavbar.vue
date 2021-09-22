<template>
  <div>
    <div id="nav">
      <div>
        <router-link to="/admin">Last Minute Gifts Admin</router-link> |
      </div>
      <div class="flex flex-row">
        <router-link to="/admin/products"> Products |</router-link>
        <router-link to="/profile">{{ userData.fullName }}</router-link> |
        <button @click="logout">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    return {
      items: computed(() => store.getters['cart/cartItemsQuantity']),
      user: computed(() => store.state.user.isLoggedIn),
      userData: computed(() => store.state.user.userData),
      logout: () => store.dispatch('user/logout'),
    };
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background-color: steelblue;
  color: white;
  align-items: center;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: coral;
    }
  }
}
.cartSpan {
  background-color: coral;
  padding: 5px;
  border-radius: 10px;
  color: white;
}
</style>
