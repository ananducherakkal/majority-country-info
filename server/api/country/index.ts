import { CountryListing } from "@/types/country";
import { getCountryData } from "@/services/country";

export default defineEventHandler(
  async (event): Promise<CountryListing[] | undefined> => {
    const rawCountryList = await getCountryData();

    // Convert and transform the raw country data into the format required by CountryListing
    const countryList: CountryListing[] | undefined = rawCountryList?.map(
      (country) => ({
        name: country.name.official,
        common_nmae: country.name.common,
        flag: country.flag,
        id: country.ccn3,
      })
    );

    return countryList;
  }
);
