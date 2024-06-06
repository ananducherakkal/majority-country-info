<!--
Component: CountryDetailsItem
Description: This component displays label and value for displaying country details. It is used in CountryDetailsSection.
-->

<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
}>();
</script>

<template>
  <div class="w-full sm:w-fit text-center sm:text-left min-h-20">
    <div class="font-semibold text-lg text-gray-80">{{ props.label }}:</div>
    <div class="font-medium text-gray-70">
      {{ props.value }}
    </div>
  </div>
</template>
