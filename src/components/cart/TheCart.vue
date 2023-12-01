<template>
  <TheLoader v-if="ordering" />
  <EmptyCart v-if="cartItems.length === 0" />
  <div v-else class="px-4 py-3">
    <h2 class="mt-7 text-xl font-semibold">Your cart</h2>
    <ul class="mt-3 divide-y divide-stone-200 border-b">
      <CartItem
        v-for="item in cartItems"
        :key="item.pizzaId"
        :pizzaId="item.pizzaId"
        :name="item.name"
        :unitPrice="item.unitPrice"
        :qty="item.qty"
      />
    </ul>
    <p class="mt-5 text-center">Cart Total: ${{ cartTotal.toFixed(2) }}</p>

    <div class="mt-6 space-x-2">
      <BaseButton type="primary" @click="order">Order pizzas</BaseButton>
      <BaseButton type="secondary" @click="clearCart">Clear Cart</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue";
import TheLoader from "../../ui/TheLoader.vue";
import CartItem from "./CartItem.vue";
import EmptyCart from "./EmptyCart.vue";
export default {
  components: { BaseButton, CartItem, EmptyCart, TheLoader },

  data() {
    return {
      ordering: false,
    };
  },

  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },

    cartItems() {
      return this.$store.getters["cart/pizzas"];
    },
  },

  methods: {
    order() {
      this.ordering = true;
      setTimeout(() => {
        return this.$router.push("/form");
      }, 2000);
    },
    clearCart() {
      return this.$store.dispatch("cart/removeAll");
    },
  },
};
</script>
