<template>
  <header
    class="grid items-center justify-center grid-cols-2 px-4 py-3 uppercase bg-yellow-400 border-b sm:grid-cols-3 border-stone-200 sm:px-8"
  >
    <h1 class="self-start tracking-widest">
      <router-link class="px-4 py-2 transition-all duration-200 rounded" to="/"
        >Vue Pizza Co.</router-link
      >
    </h1>

    <nav class="justify-self-end sm:justify-self-center">
      <ul class="flex items-center gap-1">
        <li>
          <router-link
            class="px-4 py-2 transition-all duration-200 rounded-lg"
            to="/menu"
            >Menu</router-link
          >
        </li>
        <li>
          <router-link
            class="relative px-4 py-2 transition-all duration-200 rounded-lg"
            to="/cart"
            >Cart
            <span
              v-if="cartQty > 0"
              class="text-sm bg-red-500 text-stone-200 rounded-full px-1.5 absolute top-0 -right-1.5"
              >{{ cartQty }}</span
            ></router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    cartQty() {
      return this.$store.getters["cart/quantity"];
    },
  },
};
</script>

<style scoped>
a:hover,
a:active,
a.router-link-active {
  background-color: #fde047;
}
</style>
