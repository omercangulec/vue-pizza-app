<template>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <TheHeader />
    <div class="overflow-auto">
      <main class="max-w-3xl mx-auto">
        <router-view></router-view>
      </main>
    </div>
    <CartOverview />
  </div>
</template>

<script>
import CartOverview from "./components/cart/CartOverview.vue";
import TheHeader from "./components/nav/TheHeader.vue";

export default { components: { TheHeader, CartOverview } };
</script>

<style scoped></style>
