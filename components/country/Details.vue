<script setup lang="ts">
import { useCountryStore } from "~/stores/country";

const country = useCountryStore();
</script>

<template>
  <div
    v-if="country.details"
    class="sm:w-full sm:max-w-96 h-fit flex flex-col space-y-10 items-center sm:items-start"
  >
    <div class="flex items-end space-x-2">
      <h3 class="text-2xl font-bold">
        {{ country.details.name }}
      </h3>
      <div class="text-lg">
        {{ country.details.flag }}
      </div>
    </div>
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
        width="150px"
        height="100px"
        class="h-32 w-40 object-contain"
      />
      <a
        :href="country.details.googleMaps"
        target="_blank"
        class="text-primary text-xl font-bold mt-6 flex items-end space-x-2 cursor-pointer"
      >
        <div>Google maps</div>
        <div><IconArrowBox /></div>
      </a>
    </div>
  </div>
</template>
