<template>
  <EmptyCart v-if="cartItems.length === 0" />
  <div v-else class="px-4 py-3">
    <h2 class="text-xl font-semibold mt-7">
      Your Order Summary, {{ username }}
    </h2>

    <ul class="mt-3 border-b divide-y divide-stone-200">
      <OrderItem
        v-for="item in cartItems"
        :key="item.pizzaId"
        :pizzaId="item.pizzaId"
        :name="item.name"
        :unitPrice="item.unitPrice"
        :qty="item.qty"
      />
    </ul>
    <p class="mt-5 text-center">Order Total: ${{ cartTotal.toFixed(2) }}</p>
    <div class="mt-5">
      <p><span class="font-bold">Email:</span> {{ email }}</p>
      <p><span class="font-bold">Address:</span> {{ address }}</p>
    </div>
    <BaseButton class="text-center mt-7" type="primary" @click="backHome"
      >Back to home</BaseButton
    >
  </div>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue";

import EmptyCart from "../cart/EmptyCart.vue";
import OrderItem from "./OrderItem.vue";

export default {
  components: { OrderItem, EmptyCart, BaseButton },

  computed: {
    username() {
      return this.$store.getters.firstname;
    },
    email() {
      return this.$store.getters.email;
    },
    address() {
      return this.$store.getters.address;
    },

    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },

    cartItems() {
      return this.$store.getters["cart/pizzas"];
    },
  },

  methods: {
    clearCart() {
      return this.$store.dispatch("cart/removeAll");
    },
    backHome() {
      this.clearCart();
      this.$router.replace("/");
    },
  },
};
</script>
