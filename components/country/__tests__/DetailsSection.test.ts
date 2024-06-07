import { it, describe, expect } from "vitest";
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import DetailsSection from "../DetailsSection.vue";

const countryDetails = {
  name: "Country name",
  official_name: "Country official name",
  currencies: { AOA: { name: "Angolan kwanza", symbol: "Kz" } },
  capital: ["Country capital1", "Country capital2"],
  languages: ["Country language1", "Country language2"],
  area: 1,
  latlng: [2, 3],
  flag: "\uD83C\uDDE6\uD83C\uDDF4",
  googleMaps: "https://goo.gl/maps/q42Qbf1BmQL3fuZg9",
  openStreetMaps: "https://goo.gl/maps/q42Qbf1BmQL3fuZg9",
  population: 32866268,
  timezones: ["UTC+01:00"],
  flags: {
    png: "https://flagcdn.com/w320/ao.png",
    svg: "https://flagcdn.com/ao.svg",
    alt: "flag alt",
  },
};

mockNuxtImport("useCountryStore", () => {
  return () => ({
    details: countryDetails,
    error: false,
    loading: false,
  });
});

describe("CountryDetailsSection", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(DetailsSection);
    expect(component.findComponent({ name: "Details" }).exists()).toBe(true);
  });
});
