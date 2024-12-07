// src/store/countryStore.ts
import { create } from 'zustand';

interface City {
  label: string;
  value: string;
  country: 'ae' | 'uk' | 'us';
}

interface CountryState {
  country: 'ae' | 'uk' | 'us';
  cities: City[];
  setCountry: (country: 'ae' | 'uk' | 'us') => void;
  getCitiesByCountry: (country: 'ae' | 'uk' | 'us') => City[];
  getCityLabelByKey: (key: string) => string | undefined;
  isCityInThisCountry: (city: string, country: 'ae' | 'uk' | 'us') => boolean;
}

const citiesData: City[] = [
  { label: 'Dubai', value: 'dubai', country: 'ae' },
  { label: 'Abu Dhabi', value: 'abu-dhabi', country: 'ae' },
  { label: 'Sharjah', value: 'sharjah', country: 'ae' },
  { label: 'Ajman', value: 'ajman', country: 'ae' },
  { label: 'Ras Al Khaimah', value: 'ras-al-khaimah', country: 'ae' },
  { label: 'Fujairah', value: 'fujairah', country: 'ae' },
  { label: 'Umm Al Quwain', value: 'umm-al-quwain', country: 'ae' },
  { label: 'London', value: 'london', country: 'uk' },
  { label: 'Birmingham', value: 'birmingham', country: 'uk' },
  { label: 'Glasgow', value: 'glasgow', country: 'uk' },
  { label: 'Liverpool', value: 'liverpool', country: 'uk' },
  { label: 'Bristol', value: 'bristol', country: 'uk' },
  { label: 'Manchester', value: 'manchester', country: 'uk' },
  { label: 'Sheffield', value: 'sheffield', country: 'uk' },
  { label: 'New York', value: 'new-york', country: 'us' },
  { label: 'Los Angeles', value: 'los-angeles', country: 'us' },
  { label: 'Chicago', value: 'chicago', country: 'us' },
  { label: 'Houston', value: 'houston', country: 'us' },
  { label: 'Phoenix', value: 'phoenix', country: 'us' },
  { label: 'Philadelphia', value: 'philadelphia', country: 'us' },
  { label: 'San Antonio', value: 'san-antonio', country: 'us' },
];

export const useCountryStore = create<CountryState>((set) => ({
  country: 'ae', // default value
  cities: citiesData.filter((city) => city.country === 'ae'),
  setCountry: (country) => set({ country, cities: citiesData.filter((city) => city.country === country) }),
  getCitiesByCountry: (country) => citiesData.filter((city) => city.country === country),
  getCityLabelByKey: (key) => citiesData.find((city) => city.value === key)?.label,
  isCityInThisCountry: (city, country) => citiesData.some((c) => c.value === city && c.country === country),
}));