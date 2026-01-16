import { SubCategoryType } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getSubCategoriesColumns = (): ColumnDef<SubCategoryType>[] => [
  {
    accessorKey: "name",
    header: "Sub Category Name",
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => row.getValue("slug"),
  },
];
