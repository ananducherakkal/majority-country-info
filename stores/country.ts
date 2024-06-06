import type { CountryDetails, CountryListing } from "~/types/country";

type State = {
  countryList?: CountryListing[];
  countryDetails?: CountryDetails;
};

const initialState: State = {
  countryList: [],
  countryDetails: undefined,
};

export const useCountryStore = defineStore("countryStore", {
  state: () => initialState,
  getters: {
    list: (state) => state.countryList,
    details: (state) => state.countryDetails,
  },
  actions: {
    async fetchCountryList() {
      const { data } = await useFetch("/api/country");
      this.countryList = data.value || undefined;
    },
    async fetchCountryDetails(id: string) {
      const { data } = await useFetch(`/api/country/${id}`);
      this.countryDetails = data.value || undefined;
    },
  },
});
