<template>
  <div class="home">
    <h1>Welcome to Last Minute Gifts!</h1>
    <products-grid v-if="products" :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'Home',
  components: { ProductsGrid },
  setup() {
    const store = useStore();

    return {
      products: computed(() => store.getters.products),
    };
  },
};
</script>
