<template>
  <div>
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
