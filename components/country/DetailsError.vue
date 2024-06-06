<!--
Component: CountryDetailsError
Description: This component displays error screen when there is data fetching error. It is used in CountryDetailsSection.
-->

<template>
  <div class="p-10 flex flex-col justify-center items-center space-y-6">
    <div class="w-full max-w-[40%] h-auto">
      <IconSadEarth class="w-full h-full" />
    </div>
    <p
      class="font-semibold text-lg text-gray-70 max-w-96 text-center leading-relaxed"
    >
      <span class="font-bold text-gray-90"> Something went wrong!</span
      ><br />Please try again
    </p>
  </div>
</template>
