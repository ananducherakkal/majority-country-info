import type { CountryDetails, CountryListing } from "~/types/country";

type State = {
  countryList?: CountryListing[];
  countryDetails?: CountryDetails;
  selectedCountryId?: string;
  error: boolean;
  loading: boolean;
};

const initialState: State = {
  countryList: [],
  countryDetails: undefined,
  selectedCountryId: undefined,
  error: false,
  loading: false,
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
      this.error = false;
      this.countryDetails = undefined;
      this.loading = true;
      const { data, error } = await useFetch(
        `/api/country/${this.selectedCountryId}`
      );
      this.countryDetails = data.value || undefined;
      this.error = Boolean(error);
      this.loading = false;
    },
    async setSelectedId(id?: string) {
      this.selectedCountryId = id;
    },
  },
});
