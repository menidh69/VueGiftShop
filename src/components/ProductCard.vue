<template>
  <div v-if="data" class="product-card">
    <img :src="data.imgUrl" alt="" />
    <p>{{ data.name }}</p>
    <button v-if="!inCart" @click="add">Add</button>
    <div v-if="inCart">
      <p>Quantity: {{ data.quantity }}</p>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions('cart', ['addItem', 'removeItem']),
    add() {
      this.$waveui.notify('Added product', 'success', 4000);

      this.addItem(this.data);
    },
    remove() {
      this.removeItem(this.data.id);
      this.$waveui.notify('Removed product', 'success');
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
p {
  text-transform: lowercase;
}
button {
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  background-color: salmon;
  padding: 10px 10px;
  cursor: pointer;
}
.product-card {
  width: 250px;
  margin: 0 auto;
}
</style>
