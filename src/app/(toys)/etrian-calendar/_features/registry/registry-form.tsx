"use client";

import {
  RegistryFormValues,
  registryFormSchema,
} from "@/app/(toys)/etrian-calendar/_schemas/registry-form-schema";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRoundPlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

type EtrianFormProps = {
  onSubmit: (values: RegistryFormValues) => void;
};

export function RegistryForm({ onSubmit }: EtrianFormProps) {
  const form = useForm<RegistryFormValues>({
    resolver: zodResolver(registryFormSchema),
    defaultValues: {
      name: "",
      memo: "",
      dateOfBirth: {
        month: undefined,
        day: undefined,
      },
      affiliations: "",
    },
  });

  const handleSubmit = (values: RegistryFormValues) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <form id="etrian-add" onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="flex gap-2">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id="etrian-name"
                aria-invalid={fieldState.invalid}
                placeholder="ししょー"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit" form="etrian-add">
          <UserRoundPlus />
          登録
        </Button>
      </div>
    </form>
  );
}
