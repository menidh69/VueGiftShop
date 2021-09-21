<template>
  <div>
    <div v-if="products" class="product-grid">
      <product-card
        :data="p"
        v-for="p in products"
        :key="p.name"
        :inCart="cartItems"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
  props: {
    products: {
      type: Object,
      default: () => {},
    },
    cartItems: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.product-grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: auto;
  grid-gap: 50px 5%;
}
</style>
