import axios from 'axios';
import {
  transformCountriesData,
  transformCountryData,
} from '../helpers/transformCountries.js';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  const { data } = await axios.get('/region/europe');
  const countries = transformCountriesData(data);

  return countries;
};

export const fetchCountry = async (id) => {
  try {
    const encodedId = encodeURIComponent(id); // кодуємо назву країни
    const { data } = await axios.get(`/name/${encodedId}`);

    if (!data || data.length === 0) {
      console.warn(`No country found for id: ${id}`);
      return null;
    }

    const country = transformCountryData(data);
    return country[0]; // повертаємо перший елемент
  } catch (error) {
    console.error(`Failed to fetch country: ${id}`, error.message);
    return null;
  }
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);

  return countries;
};
