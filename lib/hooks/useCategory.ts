import { getCategoriesColumns } from "../clientSchema/category/columns";
import { CategoryType } from "../clientSchema/category/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

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

export const useCategoriesTable = createCrudTableHook<CategoryType>({
  useGetAll: useGetAllCategories,
  getColumns: getCategoriesColumns,
  dataKey: "categories",
});