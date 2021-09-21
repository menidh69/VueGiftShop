<template>
  <div v-if="error">
    <p class="error">{{ error.$message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorProp: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    return {
      error: props.errorProp,
    };
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
