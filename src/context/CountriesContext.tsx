"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";
import { City, Country } from "types";
import { countries as countriesData } from "data";

export type CountriesContextType = {
  countries: Country[];
  selectedCountry: string;
  selectedCity: string;
  setSelectedCountry: (country: string) => void;
  setSelectedCity: (city: string) => void;
  getCitiesByCountry: (value: string) => City[];
  getCountryByValue: (value: string) => Country | undefined;
};

export const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [countries] = useState<Country[]>(countriesData);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const getCitiesByCountry = (value: string): City[] => {
    const country = countries.find((country) => country.value === value);
    return country ? country.cities : [];
  };

  useEffect(() => {
    // Reset selected city when selected country changes
    setSelectedCity("");
  }, [selectedCountry]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        selectedCountry,
        selectedCity,
        setSelectedCountry,
        setSelectedCity,
        getCitiesByCountry,
        getCountryByValue: (value: string) =>
          countries.find((country) => country.value === value),
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = (): CountriesContextType => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
};
