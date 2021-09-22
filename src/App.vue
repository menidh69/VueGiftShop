<template>
  <w-app>
    <navbar v-if="!isAdmin" />
    <admin-navbar v-else />
    <div id="mainContent">
      <div v-if="loading">
        <w-spinner fade xl></w-spinner>
      </div>
      <router-view v-if="!loading" />
    </div>
  </w-app>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Navbar from './components/Navbar.vue';
import AdminNavbar from './components/admin/AdminNavbar.vue';

export default {
  components: { Navbar, AdminNavbar },
  setup() {
    const store = useStore();
    store.dispatch('getItemsFromApi');
    return {
      loading: computed(() => store.state.loading),
      isAdmin: computed(() => store.getters['user/isAdmin']),
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#mainContent {
  padding: 50px 0;
}
.inputGroup {
  text-align: left;
  width: 200px;
  margin: 20px auto;
  input {
    width: 100%;
  }
  label {
    display: block;
    width: max-content;
  }
}
.flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
</style>
