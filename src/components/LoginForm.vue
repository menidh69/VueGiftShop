<template>
  <div>
    <form @submit.prevent="login">
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

      <button @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { mapActions } from 'vuex';
import { email, required } from '@vuelidate/validators';
import Error from './Error.vue';

export default {
  components: { Error },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required },
    };
  },
  methods: {
    ...mapActions({ login: 'user/login' }),
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      // eslint-disable-next-line no-useless-return
      if (!isFormCorrect) return;
      await this.login({ email: this.email, password: this.password });

      this.$router.push('/');
      this.$waveui.notify('Welcome back!', 'success', 4000);
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
};
</script>

<style lang="scss" scoped></style>
