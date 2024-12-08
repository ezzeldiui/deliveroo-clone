import { parseAsString, useQueryState } from "nuqs";
import { useCountry } from "@/hooks/useCountry";

export function useLocation(){
    const [locationInUrl, setLocationInUrl] = useQueryState("country", parseAsString.withDefault("ae"));
    const { country, setCountry, getCitiesByCountry, isCityInThisCountry } = useCountry();

    const cityLabel = locationInUrl === "ae" ? "United Arab Emirates" : locationInUrl === "uk" ? "United Kingdom" : "United States"

    return {
        locationInUrl,
        setLocationInUrl,
        cityLabel,
        country,
        setCountry,
        getCitiesByCountry,
        isCityInThisCountry
    }
}