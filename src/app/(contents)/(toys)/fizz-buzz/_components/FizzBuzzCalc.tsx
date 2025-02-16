"use client";

import { fizzBuzz } from "@/app/(contents)/(toys)/fizz-buzz/_utilities/fizzbuzz";
import { LabeledInputController } from "@/components/Atoms/LabeledInputController";
import { ResetButton } from "@/components/Atoms/ResetButton";
import { ResultDisplay } from "@/components/Atoms/ResultDisplay";
import { FormProvider, useForm } from "react-hook-form";

interface FormValues {
  count: string;
}

const FizzBuzzCalc = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      count: "",
    },
    mode: "onChange",
  });

  const { reset, watch } = methods;
  const count = watch("count");

  const resetCount = () => {
    reset({ count: "" });
  };

  const calculateFizzBuzz = () => {
    const num = parseInt(count, 10);
    if (Number.isNaN(num) || num <= 0) {
      return "";
    }
    return fizzBuzz(num);
  };

  return (
    <FormProvider {...methods}>
      <div className="container my-8 max-w-sm max-lg:mx-auto">
        <form>
          <LabeledInputController
            name="count"
            type="number"
            labelText="n ="
            placeholder="0"
            rules={{
              required: "このフィールドは必須です",
              validate: {
                isNaturalNumber: (value: string) =>
                  /^[1-9]\d*$/.test(value) || "自然数を入力してください",
              },
            }}
          />
          <ResultDisplay>{calculateFizzBuzz()}</ResultDisplay>
          <ResetButton onClick={resetCount} />
        </form>
      </div>
    </FormProvider>
  );
};

export { FizzBuzzCalc };
