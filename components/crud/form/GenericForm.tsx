"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CrudConfig } from "@/lib/clientSchema/crud/schema";
import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const GenericForm = <T extends FieldValues>({
  config,
  editData,
  isEditMode,
}: {
  config: CrudConfig<T>;
  editData: T | null;
  isEditMode: boolean;
}) => {
  const form = useForm<T>({
    resolver: zodResolver(config.schema),
    defaultValues: config.defaultValues,
  });
  const updateMutation = config.hooks.useUpdate();

  useEffect(() => {
    if (editData) {
      form.reset(editData);
    } else {
      form.reset(config.defaultValues);
    }
  }, [editData]);

  const onSubmit = (data: T) => {
    console.log(`Submitted ${config.entityName}:`, data);
    if (isEditMode) {
      updateMutation.mutate({ id: data?.id, data });
    }
  };

  const FormView = config.FormView;

  return (
    <form id={config.formId} onSubmit={form.handleSubmit(onSubmit)}>
      <FormView form={form} />
      <div className="flex gap-2 mt-4">
        <Button
          variant="secondary"
          type="button"
          onClick={() => form.reset(config.defaultValues)}
        >
          Reset
        </Button>
        <Button type="submit">{isEditMode ? "Update" : "Submit"}</Button>
      </div>
    </form>
  );
};

export default GenericForm;
