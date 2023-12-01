<template>
  <div class="px-4 py-6">
    <TheLoader v-if="ordering" />
    <div v-else>
      <h2 class="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>
      <form @submit.prevent="submitForm">
        <div class="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label for="firstname" class="sm:basis-40">First Name</label>
          <input
            type="firstname"
            id="firstname"
            v-model.trim="firstname"
            class="input grow"
          />
        </div>
        <div class="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label for="email" class="sm:basis-40">E-mail</label>
          <input
            type="email"
            id="email"
            v-model.trim="email"
            class="input grow"
          />
        </div>
        <div class="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label for="address" class="sm:basis-40">Address</label>
          <input
            type="address"
            id="address"
            v-model.trim="address"
            class="input grow"
          />
        </div>
        <p class="mb-2 text-red-500" v-if="!formIsValid">
          Please fill in all the information requested on the form.
        </p>
        <BaseButton type="primary">Order</BaseButton>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue";

import TheLoader from "../../ui/TheLoader.vue";

export default {
  data() {
    return {
      firstname: "",
      email: "",
      address: "",
      formIsValid: true,
      ordering: false,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("setUser", {
        firstname: this.firstname,
        email: this.email,
        address: this.address,
      });
      this.ordering = true;

      setTimeout(() => {
        this.$router.replace("/order");
      }, 2000);
    },
  },
  components: { BaseButton, TheLoader },
};
</script>
