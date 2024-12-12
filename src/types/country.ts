import { City } from "types";

export type Country = {
  value: string;
  label: string;
  cities: City[];
};
