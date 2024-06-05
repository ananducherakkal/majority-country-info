<template>
  <div class="w-full min-h-screen flex flex-col">
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "CountryInfo",
  meta: [
    { name: "country info", content: "To get information about countries." },
  ],
});
</script>

<style lang="scss" scoped></style>
