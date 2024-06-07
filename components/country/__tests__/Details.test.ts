import { it, describe, expect } from "vitest";
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import Details from "../Details.vue";

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
  });
});

describe("CountryDetails", () => {
  it("can mount the component and display country details", async () => {
    const component = await mountSuspended(Details);

    // Check for the country name and flag
    expect(component.html()).toContain(countryDetails.name);
    expect(component.html()).toContain(countryDetails.flag);

    // Check for the official name
    expect(component.html()).toContain("Official name");
    expect(component.html()).toContain(countryDetails.official_name);

    // Check for the capital
    expect(component.html()).toContain("Capital");
    expect(component.html()).toContain(countryDetails.capital.join(", "));

    // Check for the languages
    expect(component.html()).toContain("Languages");
    expect(component.html()).toContain(countryDetails.languages.join(", "));

    // Check for the coordinates
    expect(component.html()).toContain("Coordinates");
    expect(component.html()).toContain(countryDetails.latlng.join(", "));

    // Check for the flag image
    const flagImg = component.find(
      `img[aria-label="${countryDetails.flags.alt}"]`
    );
    expect(flagImg.exists()).toBe(true);
    expect(flagImg.attributes("src")).toBe(countryDetails.flags.png);

    // Check for the Google Maps link
    const googleMapsLink = component.find(
      'a[aria-label="open google maps in new tab"]'
    );
    expect(googleMapsLink.exists()).toBe(true);
    expect(googleMapsLink.attributes("href")).toBe(countryDetails.googleMaps);
  });
});
