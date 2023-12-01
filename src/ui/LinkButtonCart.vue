<template>
  <button
    @click="goCart"
    class="uppercase text-md text-stone-200 hover:text-stone-100 hover:underline"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    goCart() {
      return this.$router.replace("/cart");
    },
  },
};
</script>
