<!--
Component: CountryDetailsEmpty
Description: This component displays empty screen when no country is selected. It is used in CountryDetailsSection.
-->

<template>
  <div class="p-10 flex flex-col justify-center items-center space-y-6">
    <div class="w-full max-w-[40%] h-auto">
      <IconEarth class="w-full h-full" />
    </div>
    <p class="font-medium text-gray-70 max-w-96 text-center">
      Please choose a couuntry from drop down<br />and click on submit to view
      country details.
    </p>
  </div>
</template>
