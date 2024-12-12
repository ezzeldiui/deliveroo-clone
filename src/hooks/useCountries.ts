"use client";

import { CountriesContext, CountriesContextType } from "contexts";
import { useContext } from "react";

export const useCountries = (): CountriesContextType => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
};
