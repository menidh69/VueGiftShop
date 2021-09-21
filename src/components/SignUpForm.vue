<template>
  <div>
    <form @click.prevent="">
      <div class="inputGroup">
        <label for="fullname">Full name</label>
        <input id="fullname" type="text" v-model="fullName" />
        <error
          v-if="v$.fullName.$errors.length > 0"
          :errorProp="v$.fullName.$errors[0]"
        />
      </div>
      <div class="inputGroup">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" />
        <error
          v-if="v$.email.$errors.length > 0"
          :errorProp="v$.email.$errors[0]"
        />
      </div>
      <div class="inputGroup">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
        <error
          v-if="v$.password.$errors.length > 0"
          :errorProp="v$.password.$errors[0]"
        />
      </div>
      <div class="inputGroup">
        <label for="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" v-model="repeatPassword" />
        <error
          v-if="v$.repeatPassword.$errors.length > 0"
          :errorProp="v$.repeatPassword.$errors[0]"
        />
      </div>
      <button @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import Error from './Error.vue';

export default {
  components: { Error },
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  },
  validations() {
    return {
      fullName: { required },
      email: { email, required },
      password: { required },
      repeatPassword: { required },
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      // eslint-disable-next-line no-useless-return
      if (!isFormCorrect) return;
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
};
</script>

<style lang="scss" scoped></style>
