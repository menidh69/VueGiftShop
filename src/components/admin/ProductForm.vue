<template>
  <div>
    <form @click.prevent="">
      <div class="inputGroup">
        <label for="fullname">Name</label>
        <input id="fullname" type="text" v-model="name" />
        <error
          v-if="v$.name.$errors.length > 0"
          :errorProp="v$.name.$errors[0]"
        />
      </div>
      <div class="inputGroup">
        <label for="email">imgUrl</label>
        <input id="email" type="text" v-model="imgUrl" />
        <error
          v-if="v$.imgUrl.$errors.length > 0"
          :errorProp="v$.imgUrl.$errors[0]"
        />
      </div>
      <div class="inputGroup">
        <label for="password">Price</label>
        <input id="password" type="number" v-model="price" />
        <error
          v-if="v$.price.$errors.length > 0"
          :errorProp="v$.price.$errors[0]"
        />
      </div>

      <button @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import Error from '../Error.vue';

export default {
  components: { Error },
  props: {
    product: {
      type: Object,
      default: null,
    },
    save: {
      type: Function,
      default: () => null,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      imgUrl: '',
      price: '',
    };
  },
  validations() {
    return {
      name: { required },
      imgUrl: { required },
      price: { required },
    };
  },
  watch: {
    product: {
      handler(newData, old) {
        console.log(old);
        this.mapPropsToData(newData);
      },
    },
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      // eslint-disable-next-line no-useless-return
      if (!isFormCorrect) return;
      await this.save({
        name: this.name,
        imgUrl: this.imgUrl,
        price: this.price,
      });
    },
    mapPropsToData() {
      this.name = this.product.name;
      this.imgUrl = this.product.imgUrl;
      this.price = this.product.price;
    },
  },
  mounted() {
    if (this.product) {
      console.log('yeah');
      this.mapPropsToData();
    }
  },

  setup() {
    return { v$: useVuelidate() };
  },
};
</script>

<style lang="scss" scoped></style>
