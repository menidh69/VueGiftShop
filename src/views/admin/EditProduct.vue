<template>
  <div>
    <product-form :product="product" />
  </div>
</template>

<script>
import ProductForm from '../../components/admin/ProductForm.vue';

export default {
  components: { ProductForm },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    setCurrentProduct(id) {
      this.product = this.$store.getters.productById(id);
    },
  },
  created() {
    this.setCurrentProduct(this.$route.params.id);
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log(previousParams);
      },
    );
  },
};
</script>

<style lang="scss" scoped></style>
