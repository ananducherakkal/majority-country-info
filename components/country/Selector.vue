<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useCountryStore } from "~/stores/country";

const country = useCountryStore();
const mouted = ref(false);

const options = computed(() => {
  return (
    country.list?.map((eachCountry) => ({
      label: eachCountry.common_name,
      value: eachCountry.id,
    })) || []
  );
});

const onSelect = (value: string) => {
  country.fetchCountryDetails(value);
};
</script>

<template>
  <div
    class="w-full h-fit md:h-full flex flex-col justify-center items-center p-10"
  >
    <div class="w-full max-w-96 flex flex-col justify-center items-center">
      <h2 class="mb-16 text-3xl font-bold text-primary">Country Info</h2>

      <Combobox
        placeholder="Select country"
        class=""
        :options="options"
        :onSelect="onSelect"
      />
      <Button class="mt-4 ml-auto"> Submit </Button>
    </div>
  </div>
</template>
