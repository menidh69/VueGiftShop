<template>
  <div class="">
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      <tbody v-if="data">
        <tr v-for="product in data" :key="product.name">
          <td>
            <router-link :to="`/admin/products/${product.id}`" tag="tr"
              >{{ product.id }}
            </router-link>
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description || '' }}</td>
          <td>
            <router-link :to="`/admin/products/${product.id}/edit`"
              ><w-button bg-color="warning">edit</w-button></router-link
            >
          </td>
          <td>
            <w-button bg-color="error" @click="deleteProduct(product.id)"
              >delete</w-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  props: {
    products: {
      type: Object,
      default: () => {},
    },
  },

  setup(props) {
    const store = useStore();
    return {
      data: computed(() => props.products),
      deleteProduct: (id) => store.dispatch('admin/deleteProduct', id),
    };
  },
};
</script>

<style lang="scss" scoped>
table {
  border-spacing: 10px;
  margin: 30px auto;
}
</style>
