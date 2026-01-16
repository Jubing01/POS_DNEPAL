import { ProductFormType } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getProductColumns = (): ColumnDef<ProductFormType>[] => [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => row.getValue("price"),
  },
];
