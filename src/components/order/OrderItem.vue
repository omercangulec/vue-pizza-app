<template>
  <li class="py-3 sm:flex sm:items-center sm:justify-between">
    <p class="mb-1 sm:mb-0">{{ qty }}&times; {{ name }}</p>
    <div class="flex items-center justify-between sm:gap-6">
      <p class="text-sm font-bold">${{ totalPrice.toFixed(2) }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["pizzaId", "name", "unitPrice", "qty"],

  computed: {
    totalPrice() {
      return this.unitPrice * this.qty;
    },
  },
};
</script>
