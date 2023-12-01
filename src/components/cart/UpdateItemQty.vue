<template>
  <div class="space-x-1 md:space-x-2">
    <BaseButton type="round" @click="decreaseItemQty">-</BaseButton>
    <span class="text-sm font-medium">{{ qty }}</span>
    <BaseButton type="round" @click="increaseItemQty">+</BaseButton>
  </div>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue";

export default {
  props: ["pizzaId", "qty"],
  components: { BaseButton },
  methods: {
    decreaseItemQty() {
      this.$store.dispatch("cart/decreaseItem", { pizzaId: this.pizzaId });
    },
    increaseItemQty() {
      this.$store.dispatch("cart/increaseItem", { pizzaId: this.pizzaId });
    },
  },
};
</script>
