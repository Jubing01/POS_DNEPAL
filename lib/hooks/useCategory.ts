import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getCategoriesColumns } from "../clientSchema/category/columns";
import { CategoryType } from "../clientSchema/category/schema";
import { getColumnsWithActions } from "../clientSchema/crud/columns";
import { createCrudHooks } from "./useCrudHooks";

import { useMemo } from "react";

const categoryCrud = createCrudHooks<CategoryType>({
  endpoint: "category",
  queryKey: "categories",
});

export const {
  useGetAll: useGetAllCategories,
  useCreate: useCreateCategory,
  useUpdate: useUpdateCategory,
  useDelete: useDeleteCategory,
} = categoryCrud;

export function useCategoriesTable({
  onEdit,
  onDelete,
}: {
  onEdit: (item: CategoryType) => void;
  onDelete: (item: CategoryType) => void;
}) {
  const { data: allCategories } = useGetAllCategories();

  const categories = allCategories?.categories || [];
  
  const columns = useMemo(
    () =>
      getColumnsWithActions(getCategoriesColumns(), {
        onEdit,
        onDelete,
      }),
    [onEdit, onDelete]
  );

  return useReactTable({
    data: categories,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
}
