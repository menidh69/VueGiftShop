<template>
  <div>
    <product-form :product="product" :save="save" />
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
    save(body) {
      const newBody = { id: this.$route.params.id, ...body };
      this.$store.dispatch('admin/editProduct', newBody);
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
