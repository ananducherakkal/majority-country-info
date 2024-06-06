<!--
Component: CountryDetails
Description: This component displays information about the selected country. It is used in CountryDetailsSection.
-->

<script setup lang="ts">
import { useCountryStore } from "~/stores/country";

const country = useCountryStore();
</script>

<template>
  <div
    v-if="country.details"
    class="sm:w-full sm:max-w-96 h-fit flex flex-col space-y-10 items-center sm:items-start"
  >
    <h3 class="text-2xl font-bold" aria-label="selected country name">
      {{ country.details.name }}
      <span class="text-lg" aria-label="selected country flag">
        {{ country.details.flag }}
      </span>
    </h3>
    <div class="w-full grid sm:grid-cols-2auto gap-6 sm:justify-between">
      <CountryDetailsItem
        label="Official name"
        :value="country.details.official_name"
      />
      <CountryDetailsItem
        label="Capital"
        :value="country.details.capital.join(', ')"
      />
      <CountryDetailsItem
        label="Languages"
        :value="country.details.languages.join(', ')"
      />
      <CountryDetailsItem
        label="Coordinates"
        :value="country.details.latlng.join(', ')"
      />
    </div>
    <div
      class="flex items-center space-x-4 justify-center sm:justify-between w-fit sm:w-full flex-wrap"
    >
      <NuxtImg
        :src="country.details.flags.png"
        :alt="country.details.flags.alt"
        :aria-label="country.details.flags.alt"
        width="150px"
        height="100px"
        class="h-32 w-40 object-contain"
      />
      <a
        :href="country.details.googleMaps"
        target="_blank"
        aria-label="open google maps in new tab"
        class="text-blue-700 text-xl font-bold mt-6 flex items-end space-x-2 cursor-pointer"
      >
        <div>Google maps</div>
        <div><IconArrowBox /></div>
      </a>
    </div>
  </div>
</template>
