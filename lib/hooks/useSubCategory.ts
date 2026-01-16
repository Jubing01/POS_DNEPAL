import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getColumnsWithActions } from "../clientSchema/crud/columns";
import { createCrudHooks } from "./useCrudHooks";

import { useMemo } from "react";
import { SubCategoryType } from "../clientSchema/subCategory/schema";
import { getSubCategoriesColumns } from "../clientSchema/subCategory/columns";

const categoryCrud = createCrudHooks<SubCategoryType>({
  endpoint: "category",
  queryKey: "categories",
});

export const {
  useGetAll: useGetAllSubCategories,
  useCreate: useCreateSubCategory,
  useUpdate: useUpdateSubCategory,
  useDelete: useDeleteSubCategory,
} = categoryCrud;

export function useSubCategoriesTable({
  onEdit,
  onDelete,
}: {
  onEdit: (item: SubCategoryType) => void;
  onDelete: (item: SubCategoryType) => void;
}) {
  const { data: allSubCategories } = useGetAllSubCategories();

  const subCategories = allSubCategories?.categories || [];

  const columns = useMemo(
    () =>
      getColumnsWithActions(getSubCategoriesColumns(), {
        onEdit,
        onDelete,
      }),
    [onEdit, onDelete]
  );

  return useReactTable({
    data: subCategories,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
}
