<template>
  <button
    @click="goBack"
    class="text-sm text-blue-500 hover:text-blue-600 hover:underline"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.replace("/menu");
    },
  },
};
</script>
