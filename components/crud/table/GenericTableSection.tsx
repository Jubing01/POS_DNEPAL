import { CrudConfig } from "@/lib/clientSchema/crud/schema";
import { FieldValues } from "react-hook-form";
import GenericTableView from "./GenericTableView";
import GenericPaginationView from "./GenericPaginationView";
import React, { useCallback } from "react";

export function GenericTableSection<T extends FieldValues>({
  config,
  setEditData,
}: {
  config: CrudConfig<T>;
  setEditData: (data: T | null) => void;
}) {
  const table = config.hooks.useTable({
    onEdit: (item: T) => {
      setEditData(item);
    },
    onDelete: (data: T) => {
      console.log(data);
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <GenericTableView table={table} />
      <GenericPaginationView table={table} />
    </div>
  );
}
