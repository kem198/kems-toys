"use client";

import { isNabeatsu } from "@/app/(toys)/nabeatsu-assessmenter/_utilities/nabeatsu";
import { LabeledInputController } from "@/components/shared/labeled-input-controller";
import { ResetButton } from "@/components/shared/reset-button";
import { ResultDisplay } from "@/components/shared/result-display";
import { FormProvider, useForm } from "react-hook-form";

interface FormValues {
  count: string;
}

function NabeatsuAssessmenter() {
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
      <div className="my-8 flex max-w-sm flex-col gap-4 max-lg:mx-auto">
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
        <ResetButton size="lg" className="w-24" onClick={resetCount} />
      </div>
    </FormProvider>
  );
}

export { NabeatsuAssessmenter };
