<template>
  <li class="py-3 sm:flex sm:items-center sm:justify-between">
    <p class="mb-1 sm:mb-0">{{ qty }}&times; {{ name }}</p>
    <div class="flex items-center justify-between sm:gap-6">
      <p class="text-sm font-bold">${{ totalPrice.toFixed(2) }}</p>
      <UpdateItemQty :qty="qty" :pizzaId="pizzaId" />
      <BaseButton type="small" @click="remove">Delete</BaseButton>
    </div>
  </li>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue";
import UpdateItemQty from "./UpdateItemQty.vue";

export default {
  props: ["pizzaId", "name", "unitPrice", "qty"],
  components: { BaseButton, UpdateItemQty },

  computed: {
    totalPrice() {
      return this.unitPrice * this.qty;
    },
  },
  methods: {
    remove() {
      this.$store.dispatch("cart/removeItem", { pizzaId: this.pizzaId });
    },
    decreaseItemQty() {
      this.$store.dispatch("cart/decreaseItem", { pizzaId: this.pizzaId });
    },
    increaseItemQty() {
      this.$store.dispatch("cart/increaseItem", { pizzaId: this.pizzaId });
    },
  },
};
</script>
