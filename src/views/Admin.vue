<template>
  <div>
    <h1>Welcome Admin!</h1>
    <h2>What would you want to do?</h2>
    <router-link to="/admin/products">
      <w-button class="ma4" bg-color="purple-light4" xl
        >View all products</w-button
      >
    </router-link>
    <router-link to="/admin/newProduct">
      <w-button class="ma4" bg-color="purple-light4" xl
        >Create a new product</w-button
      >
    </router-link>
    <router-link to="/admin/orders">
      <w-button class="ma4" bg-color="purple-light4" xl>Manage orders</w-button>
    </router-link>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
a {
  color: black;
}
</style>
