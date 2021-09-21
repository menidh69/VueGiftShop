<template>
  <div class="container">
    <h2>Your total:</h2>
    <hr />
    <div>
      <h2>Subtotal: ${{ subtotal }}</h2>
      <h2>Taxes: ${{ taxes.toFixed(2) }}</h2>
    </div>
    <hr />
    <h2>Total: ${{ total }}</h2>
    <button>Checkout</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const subtotal = computed(() => store.getters['cart/getTotal']);
    const taxes = computed(() => subtotal.value * 0.16);
    const total = computed(() => subtotal.value + taxes.value);

    return {
      subtotal,
      taxes,
      total,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 10px;
  background-color: seagreen;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 15px;
  button {
    padding: 10px;
    background-color: salmon;
    color: white;
    border-radius: 10px;
    border: none;
  }
}
</style>
