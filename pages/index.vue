<script setup lang="ts">
import { useCountryStore } from "~/stores/country";

const country = useCountryStore();
await country.fetchCountryList();
</script>

<template>
  <main
    class="w-full flex-1 flex flex-col md:grid md:grid-cols-2 bg-primary/10"
  >
    <CountrySelector />
    <CountryDetails />
  </main>
</template>
