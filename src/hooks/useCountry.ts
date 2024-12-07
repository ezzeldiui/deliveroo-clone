// src/hooks/useCountry.ts
import { useCountryContext } from '@/context/CountryContext';

export const useCountry = () => {
  const { country, cities, setCountry, getCitiesByCountry, getCityLabelByKey, isCityInThisCountry } = useCountryContext();
  return { country, cities, setCountry, getCitiesByCountry, getCityLabelByKey, isCityInThisCountry };
};