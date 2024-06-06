<script setup lang="ts">
const country = useCountryStore();
</script>

<template>
  <div class="w-full h-full p-6 flex-1 flex flex-col">
    <div
      class="bg-gray-10 w-full h-full flex-1 rounded-xl p-10 flex justify-center items-center shadow-md"
    >
      <CountryDetails v-if="country.details" />
      <CountryDetailsError v-else-if="country.error" />
      <CountryDetailsLoading v-else-if="country.loading" class="hidden" />
      <CountryDetailsEmpty v-else />
    </div>
  </div>
</template>
