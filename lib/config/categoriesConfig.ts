import CategoriesFormView from "@/components/categories/CategoriesFormView";
import { categorySchema, CategoryType } from "../clientSchema/category/schema";
import { CrudConfig } from "../clientSchema/crud/schema";
import {
  useCategoriesTable,
  useCreateCategory,
  useDeleteCategory,
  useGetAllCategories,
  useUpdateCategory,
} from "../hooks/useCategory";

export const categoriesConfig: CrudConfig<CategoryType, CategoryType> = {
  entityName: "Category",
  entityNamePlural: "Categories",
  description: "Add new Categories to the system",
  schema: {
    create: categorySchema,
    update: categorySchema,
    row: categorySchema,
  },
  defaultValues: {
    name: "",
  },
  FormView: CategoriesFormView,
  formId: "form-rhf-categories",
  hooks: {
    useTable: useCategoriesTable,
    useUpdate: useUpdateCategory,
    useCreate: useCreateCategory,
    useDelete: useDeleteCategory,
    useGetAll: useGetAllCategories,
  },
};
