<script setup lang="ts">
import { useCountryStore } from "~/stores/country";

const country = useCountryStore();
</script>

<template>
  <div class="w-full h-full p-6 flex-1 flex flex-col">
    <div
      class="bg-gray-10 w-full h-full flex-1 rounded-xl p-10 flex justify-center items-center"
    >
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
          <div class="w-full sm:w-fit text-center sm:text-left">
            <div class="font-semibold text-lg text-gray-80">Official name:</div>
            <div class="font-medium text-gray-70">
              {{ country.details.official_name }}
            </div>
          </div>
          <div class="w-full sm:w-fit text-center sm:text-left">
            <div class="font-semibold text-lg text-gray-80">Capital:</div>
            <div class="font-medium text-gray-70">
              {{ country.details.capital.join(", ") }}
            </div>
          </div>
          <div class="w-full sm:w-fit text-center sm:text-left">
            <div class="font-semibold text-lg text-gray-80">Languages:</div>
            <div class="font-medium text-gray-70">
              {{ country.details.languages.join(", ") }}
            </div>
          </div>
          <div class="w-full sm:w-fit text-center sm:text-left">
            <div class="font-semibold text-lg text-gray-80">Coordinates:</div>
            <div class="font-medium text-gray-70">
              {{ country.details.latlng.join(", ") }}
            </div>
          </div>
        </div>
        <div
          class="flex items-center space-x-4 justify-center sm:justify-between w-fit sm:w-full flex-wrap"
        >
          <NuxtImg
            :src="country.details.flags.png"
            :alt="country.details.flags.alt"
            width="150px"
            height="100px"
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
    </div>
  </div>
</template>
