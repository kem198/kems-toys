"use client";

import { fizzBuzz } from "@/app/(toys)/fizz-buzz/_utilities/fizz-buzz";
import { LabeledInputController } from "@/components/atoms/labeled-input-controller";
import { ResetButton } from "@/components/atoms/reset-button";
import { ResultDisplay } from "@/components/atoms/result-display";
import { isPositiveInteger } from "@/utilities/math";
import { FormProvider, useForm } from "react-hook-form";

interface FormValues {
  num: string;
}

const FizzBuzzCalc = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      num: "",
    },
    mode: "onChange",
  });

  const { reset, watch } = methods;

  const num = watch("num");

  const resetNum = () => {
    reset({ num: "" });
  };

  const calculateFizzBuzz = () => {
    const parsedNum = parseInt(num, 10);
    if (Number.isNaN(parsedNum) || !isPositiveInteger(parsedNum)) return "";
    return fizzBuzz(parsedNum);
  };

  return (
    <FormProvider {...methods}>
      <div className="container my-8 max-w-sm max-lg:mx-auto">
        <form>
          <LabeledInputController
            name="num"
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
          <ResetButton onClick={resetNum} />
        </form>
      </div>
    </FormProvider>
  );
};

export { FizzBuzzCalc };
