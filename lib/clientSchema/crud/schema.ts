import { DefaultValues, FieldValues } from "react-hook-form";
import { ZodType } from "zod";
import { UseFormReturn } from "react-hook-form";
import { Table } from "@tanstack/react-table";
import { UseMutationResult } from "@tanstack/react-query";

export type UpdateInput<T> = {
  id: string;
  data: Partial<T>;
};

export type CrudConfig<T extends FieldValues> = {
  entityName: string;
  entityNamePlural: string;
  description: string;
  schema: ZodType<T, any, any>;
  defaultValues: DefaultValues<T>;
  FormView: React.ComponentType<{
    form: UseFormReturn<T>;
  }>;
  formId: string;
  hooks: {
    useTable: (args: {
      onEdit: (item: T) => void;
      onDelete: (item: T) => void;
    }) => Table<T>;
    useUpdate: () => UseMutationResult<
      any,
      Error, // error
      { id: string; data: T },
      unknown
    >;
  };
};
