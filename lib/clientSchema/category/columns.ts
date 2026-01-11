import { CategoryType } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getCategoriesColumns = (): ColumnDef<CategoryType>[] => [
  {
    accessorKey: "name",
    header: "Category Name",
    cell: ({ row }) => row.getValue("name"),
  },
];