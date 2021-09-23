<template>
  <div>
    <p v-if="error" class="error">{{ error }}</p>
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
import { mapActions, useStore } from 'vuex';
import { computed } from 'vue';
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
    },
  },

  setup() {
    const store = useStore();
    return {
      v$: useVuelidate(),
      error: computed(() => store.getters['user/error']),
    };
  },
};
</script>

<style lang="scss" scoped></style>
