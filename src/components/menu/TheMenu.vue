<template>
  <ul class="divide-y divide-stone-200 px-2">
    <TheLoader v-if="isLoading" />
    <menu-item
      v-for="pizza in pizzas[0]"
      :id="pizza.id"
      :key="pizza.id"
      :name="pizza.name"
      :unitPrice="pizza.unitPrice"
      :imageUrl="pizza.imageUrl"
      :ingredients="pizza.ingredients"
      :soldOut="pizza.soldOut"
    ></menu-item>
  </ul>
</template>

<script>
import TheLoader from "../../ui/TheLoader.vue";
import MenuItem from "./MenuItem.vue";

export default {
  components: { MenuItem, TheLoader },
  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    pizzas() {
      return this.$store.getters["menu/pizzas"];
    },
  },

  methods: {
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
