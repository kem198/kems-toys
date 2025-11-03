"use client";

import {
  RegistryFormValues,
  registryFormSchema,
} from "@/app/(toys)/etrian-calendar/_features/registry/schemas/registry-form-schema";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRoundPlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

type EtrianRegistryFormProps = {
  onSubmit: (values: RegistryFormValues) => void;
  showActions: boolean;
};

export function EtrianRegistryForm({
  onSubmit,
  showActions,
}: EtrianRegistryFormProps) {
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
                disabled={showActions}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit" form="etrian-add" disabled={showActions}>
          <UserRoundPlus />
          登録
        </Button>
      </div>
    </form>
  );
}
