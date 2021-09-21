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
        <tr v-for="(product, index) in data" :key="product.name">
          <td>
            <router-link to="/admin/products/1" tag="tr"
              >{{ index + 1 }}
            </router-link>
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description || '' }}</td>
          <td><w-button bg-color="warning">edit</w-button></td>
          <td><w-button bg-color="error">delete</w-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    return {
      data: props.products,
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
