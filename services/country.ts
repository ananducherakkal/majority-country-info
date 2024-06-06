/*
To fetch and cache country list from api
*/

import axios from "axios";
import NodeCache from "node-cache";
import type { CountryRaw } from "@/types/country";
import countryBackup from "@/assets/json/country_backup.json";
import { daysToMilliseconds, daysToSeconds } from "~/lib/time";

const cacheKey = "country-cache"; // Define the cache key
const status = { executing: false }; // To avoid multiple frequent calls
const daysToExpire = 15; // Cache days to expire

// Initialize the cache with a standard TTL of 15 days and a check period of 1 hour
const cache = new NodeCache({
  stdTTL: daysToSeconds(daysToExpire),
  checkperiod: 60 * 60,
});

// Background function to fetch country data from the REST API and set it in the cache
const fetchAndSetCountryCache = async () => {
  try {
    if (status.executing) {
      return false;
    }

    status.executing = true;
    console.log("fethichg data from restcountries");
    const response = await axios.get(`${process.env.REST_COUNTRY_URI}/all`);

    if (response.data) {
      cache.del(cacheKey);
      cache.set(cacheKey, response.data);
      console.log("succesfully fetched data from restcountries");
    } else {
      console.error("failed to fetch country details");
    }
    status.executing = false;
    return null;
  } catch (error) {
    console.error("failed to fetch country details");
    return null;
  }
};

// Get created date from expired date
const getDateCreated = (expiryDate?: number) => {
  return (expiryDate || 0) - daysToMilliseconds(daysToExpire);
};

// Function to get country data, either from cache or by fetching from the API
export const getCountryData = async (): Promise<CountryRaw[] | undefined> => {
  let cachedData = cache.get(cacheKey);

  if (cachedData) {
    if (
      getDateCreated(cache.getTtl(cacheKey)) + daysToMilliseconds(1) >
      Date.now()
    ) {
      fetchAndSetCountryCache();
    }
    console.log("returning data from cache");
  } else {
    fetchAndSetCountryCache();
    cachedData = countryBackup;
    console.log("returning data from backup");
  }

  return cachedData as CountryRaw[];
};
