import { computed } from "vue";
import type { ComboboxOption } from "~/types/ui";

export const useSelectorSection = () => {
  const country = useCountryStore();

  const countryDropDownOptions = computed((): ComboboxOption[] => {
    return (
      country.list?.map((eachCountry) => ({
        label: eachCountry.common_name,
        value: eachCountry.id,
        icon: eachCountry.flag,
      })) || []
    );
  });

  const onSelect = (value: string) => {
    country.setSelectedId(value);
  };

  const onSubmit = () => {
    country.fetchDetails();
  };

  return {
    country,
    countryDropDownOptions,
    onSelect,
    onSubmit,
  };
};
