<template>
  <div>
    <h1>Products</h1>
    <w-button class="ma4" bg-color="purple-light4" xl>Create product</w-button>
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
