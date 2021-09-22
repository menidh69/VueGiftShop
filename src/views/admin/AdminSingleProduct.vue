<template>
  <div>
    <h1>
      <h2>{{ product.name }}</h2>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
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
