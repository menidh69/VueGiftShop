<template>
  <div>
    <product-form :save="createProduct" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, useStore } from 'vuex';
import ProductForm from '../../components/admin/ProductForm.vue';

export default {
  components: { ProductForm },
  computed: {
    ...mapGetters('admin', ['success', 'loading']),
  },
  methods: {
    ...mapMutations('admin', ['restart']),
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    success(newVal, oldval) {
      if (newVal) {
        this.$router.push('/admin/products');
        this.restart();
      }
    },
  },
  setup() {
    const store = useStore();

    return {
      createProduct: (data) => store.dispatch('admin/createProduct', data),
    };
  },
};
</script>

<style lang="scss" scoped></style>
