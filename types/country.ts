// Type definition for raw country data coming from the API
export type CountryRaw = {
  name: {
    common: string;
    official: string;
    nativeName: {
      por: { official: string; common: string };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { AOA: { name: string; symbol: string } };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: {
    [key: string]: { official: string; common: string };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: { f: string; m: string };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: { latlng: [number, number] };
};

// Type definition for a country used in the country listing
export type CountryListing = {
  name: string;
  common_nmae: string;
  flag: string;
  id: string;
};

// Type definition for a country used in the country details
export type CountryDetails = {
  name: string;
  currencies: { name: string; symbol: string }[];
  capital: string[];
  languages: string[];
  area: number;
  latlng: [number, number];
  flag: string;
  googleMaps: string;
  openStreetMaps: string;
  population: string;
  timezones: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};
