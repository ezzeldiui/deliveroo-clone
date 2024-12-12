"use client";

import { CitySelectionForm, CountrySelectionForm } from "components";
import { useCountries, useMultistepForm } from "hooks";
import { redirect } from "next/navigation";
import { FormEvent, useId } from "react";
import { Button, Card, CardContent, CardFooter, Progress } from "ui";

export function LocationSelector() {
  const { selectedCountry, setSelectedCountry, selectedCity } = useCountries();
  const id = useId();

  const { step, isFirstStep, isLastStep, progress, next, back } =
    useMultistepForm([
      <CountrySelectionForm key={id} />,
      <CitySelectionForm key={id} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    redirect(`/location/${selectedCountry}/${selectedCity}`);
  }

  return (
    <Card className="relative min-w-[450px]">
      <CardContent>
        <Progress value={progress} className="mt-4" />
        {step}
      </CardContent>
      <CardFooter className="gap-4">
        <Button
          className="w-full font-bold"
          onClick={back}
          disabled={isFirstStep}
          type="button"
        >
          Back
        </Button>
        <Button
          className="w-full font-bold"
          onClick={isFirstStep ? next : onSubmit}
          type="button"
          disabled={
            (!selectedCountry && isFirstStep) || (isLastStep && !selectedCity)
          }
        >
          {isLastStep ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
}
