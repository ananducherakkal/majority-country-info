import { CountryDetails } from "@/types/country";
import { getCountryData } from "@/services/country";

export default defineEventHandler(
  async (event): Promise<CountryDetails | undefined> => {
    const id = event.context.params?.id;
    if (id == undefined) {
      return undefined;
    }

    const rawCountryList = await getCountryData();
    const rawCountry = rawCountryList?.find((country) => country.ccn3 === id);

    if (!rawCountry) {
      return undefined;
    }

    // Convert the raw country data to the format required by CountryDetails
    const countryDetails: CountryDetails = {
      name: rawCountry.name.common,
      official_name: rawCountry.name.official,
      currencies: Object.values(rawCountry.currencies),
      capital: rawCountry.capital,
      languages: Object.values(rawCountry.languages),
      area: rawCountry.area,
      latlng: rawCountry.latlng,
      flag: rawCountry.flag,
      googleMaps: rawCountry.maps.googleMaps,
      openStreetMaps: rawCountry.maps.openStreetMaps,
      population: rawCountry.population.toString(),
      timezones: rawCountry.timezones.join(", "),
      flags: {
        png: rawCountry.flags.png,
        svg: rawCountry.flags.svg,
        alt: rawCountry.flags.alt,
      },
    };

    return countryDetails;
  }
);
