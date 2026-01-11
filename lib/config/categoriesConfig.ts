import CategoriesFormView from "@/components/categories/CategoriesFormView";
import { categorySchema, CategoryType } from "../clientSchema/category/schema";
import { CrudConfig } from "../clientSchema/crud/schema";
import { useCategoriesTable, useUpdateCategory } from "../hooks/useCategory";

export const categoriesConfig: CrudConfig<CategoryType> = {
  entityName: "Category",
  entityNamePlural: "Categories",
  description: "Add new Categories to the system",
  schema: categorySchema,
  defaultValues: {
    name: "",
  },
  FormView: CategoriesFormView,
  formId: "form-rhf-countries",
  hooks: {
    useTable: useCategoriesTable,
    useUpdate: useUpdateCategory,
  },
};
