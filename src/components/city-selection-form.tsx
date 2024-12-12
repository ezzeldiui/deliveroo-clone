"use client";

import React, { useState } from "react";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "ui";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "lib";
import { useCountries } from "hooks";

export function CitySelectionForm() {
  const { selectedCountry, selectedCity, setSelectedCity, getCitiesByCountry } =
    useCountries();
  const [open, setOpen] = useState(false);
  const cities = getCitiesByCountry(selectedCountry);

  return (
    <>
      <h1 className="my-8 text-xl font-bold">
        Select the city you are based in
      </h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedCity ? selectedCity : "Select city..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search city..." />
            <CommandList>
              <CommandEmpty>No city found.</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.label}
                    onSelect={(currentValue) => {
                      setSelectedCity(
                        currentValue === selectedCity ? "" : currentValue
                      );
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCity === city.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {city.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
