<script setup lang="ts">
import { useSelectorSection } from "~/composables/useSelectorSection";

const { country, countryDropDownOptions, onSelect, onSubmit } =
  useSelectorSection();
</script>

<template>
  <section
    class="w-full h-fit md:h-full flex flex-col justify-center items-center p-10"
    aria-label="country selection section"
  >
    <div class="w-full max-w-96 flex flex-col justify-center items-center">
      <h2 class="mb-16 text-3xl font-bold text-gray-90">Country Info</h2>

      <Combobox
        placeholder="Select country"
        class=""
        :options="countryDropDownOptions"
        :onSelect="onSelect"
        aria-label="country selector"
      />
      <Button
        class="mt-4 ml-auto"
        type="submit"
        aria-label="submit country selection"
        @click="onSubmit"
      >
        Submit
      </Button>
    </div>
  </section>
</template>
