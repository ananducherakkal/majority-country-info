import type { CountryDetails, CountryListing } from "~/types/country";

type State = {
  countryList?: CountryListing[];
  countryDetails?: CountryDetails;
  selectedCountryId?: string;
};

const initialState: State = {
  countryList: [],
  countryDetails: undefined,
  selectedCountryId: undefined,
};

export const useCountryStore = defineStore("countryStore", {
  state: () => initialState,
  getters: {
    list: (state) => state.countryList,
    details: (state) => state.countryDetails,
    selectedId: (state) => state.selectedCountryId,
  },
  actions: {
    async fetchList() {
      const { data } = await useFetch("/api/country");
      this.countryList = data.value || undefined;
    },
    async fetchDetails() {
      const { data } = await useFetch(`/api/country/${this.selectedCountryId}`);
      this.countryDetails = data.value || undefined;
    },
    async setSelectedId(id?: string) {
      this.selectedCountryId = id;
    },
  },
});
