"use client"

import React, { createContext, useContext } from 'react';
import { useCountryStore } from '@/store/countryStore';

interface CountryContextType {
  country: 'ae' | 'uk' | 'us';
  cities: { label: string; value: string; country: 'ae' | 'uk' | 'us' }[];
  setCountry: (country: 'ae' | 'uk' | 'us') => void;
  getCitiesByCountry: (country: 'ae' | 'uk' | 'us') => { label: string; value: string; country: 'ae' | 'uk' | 'us' }[];
  getCityLabelByKey: (key: string) => string | undefined;
  isCityInThisCountry: (city: string, country: 'ae' | 'uk' | 'us') => boolean;
}

const CountryContext = createContext<CountryContextType | null>(null);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { country, cities, setCountry, getCitiesByCountry, getCityLabelByKey, isCityInThisCountry } = useCountryStore();
  return (
    <CountryContext.Provider value={{ country, cities, setCountry, getCitiesByCountry, getCityLabelByKey, isCityInThisCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};