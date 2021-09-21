<template>
  <div>
    <h1>My Shopping Cart</h1>
    <div v-if="products.length > 0" id="mainCartView">
      <products-grid :products="products" :cartItems="true" />
      <checkout-preview />
    </div>
    <h2 v-if="!products || products.length < 1" class="my8">
      You haven't added items
    </h2>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProductsGrid from '../components/ProductsGrid.vue';
import CheckoutPreview from '../components/CheckoutPreview.vue';

export default {
  components: { ProductsGrid, CheckoutPreview },
  setup() {
    const store = useStore();

    return {
      products: computed(() => store.getters['cart/cartItems']),
    };
  },
};
</script>

<style lang="scss" scoped>
#mainCartView {
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: auto;
  padding: 0 25px;
}
</style>
