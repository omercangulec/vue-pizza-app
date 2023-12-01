<template>
  <div class="flex flex-col items-center justify-center pt-10">
    <p class="my-4 text-center text-stone-600 sm:text-xl">
      Welcome, how about ordering a pizza? <br />
      We have 16 kinds of pizzas. <br />You can see from the photos below.
    </p>
    <BaseButton @click="goToMenu" type="primary"
      >Let's order now &rarr;</BaseButton
    >

    <ul
      class="grid grid-cols-3 gap-2 p-3 mt-12 sm:grid-cols-6 bg-stone-200 rounded-3xl"
    >
      <li v-for="pizza in pizzas[0]" :key="pizza.id">
        <img
          :src="pizza.imageUrl"
          alt="pizza"
          class="h-32 transition-all duration-300 cursor-pointer sm:h-auto rounded-2xl hover:scale-95"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: { BaseButton },

  computed: {
    pizzas() {
      return this.$store.getters["menu/pizzas"];
    },
  },

  methods: {
    goToMenu() {
      this.$router.push("/menu");
    },

    async getMenu() {
      this.isLoading = true;
      await this.$store.dispatch("menu/getMenu");
      this.isLoading = false;
    },
  },

  created() {
    this.getMenu();
  },
};
</script>

<style scoped></style>
