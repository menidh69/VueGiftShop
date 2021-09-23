<template>
  <div>
    <h1>Products</h1>
    <router-link to="/admin/newProduct">
      <w-button class="ma4" bg-color="purple-light4" xl
        >Create product</w-button
      >
    </router-link>
    <product-table :products="products" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProductTable from '@/components/ProductTable.vue';

export default {
  components: { ProductTable },
  setup() {
    const store = useStore();
    return {
      products: computed(() => store.getters.products),
    };
  },
};
</script>

<style lang="scss" scoped></style>
