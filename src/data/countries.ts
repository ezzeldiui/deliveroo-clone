import { Country } from "types";

export const countries: Country[] = [
  {
    value: "ae",
    label: "United Arab Emirates",
    cities: [
      { value: "dxb", label: "Dubai" },
      { value: "shj", label: "Sharjah" },
    ],
  },
  {
    value: "us",
    label: "United States",
    cities: [
      { value: "ny", label: "New York" },
      { value: "sf", label: "San Francisco" },
    ],
  },
  {
    value: "uk",
    label: "United Kingdom",
    cities: [
      { value: "ldn", label: "London" },
      { value: "mcr", label: "Manchester" },
    ],
  },
  {
    value: "fr",
    label: "France",
    cities: [
      { value: "par", label: "Paris" },
      { value: "mrs", label: "Marseille" },
    ],
  },
  {
    value: "de",
    label: "Germany",
    cities: [
      { value: "ber", label: "Berlin" },
      { value: "ham", label: "Hamburg" },
    ],
  },
];
