<!-- Home page
To select and view details about country -->

<script setup lang="ts">
import { useCountryStore } from "~/stores/country";

const country = useCountryStore();
await country.fetchList();
</script>

<template>
  <main class="w-full flex-1 flex flex-col md:grid md:grid-cols-2 bg-primary/5">
    <CountrySelectorSection />
    <CountryDetailsSection />
  </main>
</template>
