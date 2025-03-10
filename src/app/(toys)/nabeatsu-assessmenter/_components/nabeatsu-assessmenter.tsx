"use client";

import { isNabeatsu } from "@/app/(toys)/nabeatsu-assessmenter/_utilities/nabeatsu";
import { LabeledInputController } from "@/components/atoms/labeled-input-controller";
import { ResetButton } from "@/components/atoms/reset-button";
import { ResultDisplay } from "@/components/atoms/result-display";
import { FormProvider, useForm } from "react-hook-form";

interface FormValues {
  count: string;
}

const NabeatsuAssessmenter = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      count: "",
    },
    mode: "onChange",
  });

  const { reset, watch } = methods;
  const count = watch("count");

  /**
   * count をリセットする関数
   */
  const resetCount = () => {
    reset({ count: "" });
  };

  /**
   * 結果を取得する関数
   */
  const getResult = () => {
    if (count === "") {
      return "";
    }
    return isNabeatsu(Number(count)) ? `${count}!!!` : count.toString();
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
                isNumber: (value: string) =>
                  /^-?\d+$/.test(value) || "半角数字のみ入力できます",
              },
            }}
          />
          <ResultDisplay>{getResult()}</ResultDisplay>
          <ResetButton onClick={resetCount} />
        </form>
      </div>
    </FormProvider>
  );
};

export { NabeatsuAssessmenter };
