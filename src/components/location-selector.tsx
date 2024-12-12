"use client";

import React, { FormEvent } from "react";
import { useCountries } from "hooks";
import { useMultistepForm } from "hooks";
import { Button, Card, CardContent, CardFooter, Progress } from "ui";
import { CountrySelectionForm, CitySelectionForm } from "components";
import { redirect } from "next/navigation";

export function LocationSelector() {
  const { selectedCountry, setSelectedCountry, selectedCity } = useCountries();

  const {
    currentStepIndex,
    steps,
    step,
    isFirstStep,
    isLastStep,
    progress,
    goToStepWithIndex,
    next,
    back,
  } = useMultistepForm([<CountrySelectionForm />, <CitySelectionForm />]);

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
