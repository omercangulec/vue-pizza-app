<template>
  <li class="flex gap-4 py-2">
    <img :src="imageUrl" alt="pizza" class="h-24" :class="soldOutStyle" />
    <div class="flex grow flex-col pt-0.5">
      <p class="font-medium">{{ name }}</p>
      <p class="text-sm italic text-stone-500">
        {{ ingredients.join(", ") }}
      </p>
      <div class="flex items-center justify-between mt-auto">
        <p v-if="!soldOut" class="text-sm">${{ unitPrice.toFixed(2) }}</p>
        <p v-else class="text-sm font-medium uppercase text-stone-500">
          sold out
        </p>

        <BaseButton v-if="!soldOut" type="small" @click="addToCart"
          >add to cart</BaseButton
        >
      </div>
    </div>
  </li>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue";

export default {
  props: ["id", "name", "unitPrice", "imageUrl", "ingredients", "soldOut"],
  components: { BaseButton },

  computed: {
    soldOutStyle() {
      return { "opacity-70 grayscale": this.soldOut };
    },

    cartQty() {
      return this.$store.getters["cart/quantity"];
    },
    cartItems() {
      return this.$store.getters["cart/pizzas"];
    },
  },

  methods: {
    addToCart() {
      return this.$store.dispatch("cart/addCart", {
        id: this.id,
      });
    },

    remove() {
      this.$store.dispatch("cart/removeItem", { pizzaId: this.id });
    },
  },
};
</script>
