<template>
  <div
    v-if="cartItems.length"
    class="flex items-center justify-between px-4 py-4 text-sm uppercase bg-stone-800 text-stone-200 sm:px-16 md:text-base"
  >
    <p class="space-x-4 font-semibold text-stone-300 sm:space-x-6">
      <span>{{ cartQty }} pizzas</span>
      <span>${{ cartTotal.toFixed(2) }}</span>
    </p>
    <LinkButtonCart>Open Cart &rarr;</LinkButtonCart>
  </div>
</template>

<script>
import LinkButtonCart from "../../ui/LinkButtonCart.vue";

export default {
  computed: {
    cartQty() {
      return this.$store.getters["cart/quantity"];
    },
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
    cartItems() {
      return this.$store.getters["cart/pizzas"];
    },
  },
  components: { LinkButtonCart },
};
</script>
