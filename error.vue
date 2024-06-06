<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

useHead({
  title: "CountryInfo",
  meta: [
    { name: "country info", content: "To get information about countries." },
  ],
});
</script>

<template>
  <div
    class="w-full h-screen flex flex-col justify-center items-center space-y-6"
  >
    <h1 class="text-4xl text-gray-70 font-bold">{{ error?.statusCode }}</h1>
    <div>
      <IconSadEarth class="w-40 h-auto" />
    </div>
    <NuxtLink to="/" class="underline">Go back home</NuxtLink>
  </div>
</template>
