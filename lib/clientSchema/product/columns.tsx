import { ProductFormType } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getProductColumns = (): ColumnDef<ProductFormType>[] => [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "costPrice",
    header: "CostPrice",
    cell: ({ row }) => row.getValue("costPrice"),
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => row.getValue("sku "),
  },
  {
    accessorKey: "sellingPrice",
    header: "SellingPrice",
    cell: ({ row }) => row.getValue("sellingPrice"),
  },
  {
    accessorKey: "unit",
    header: "Unit",
    cell: ({ row }) => row.getValue("unit"),
  },
  {
    accessorKey: "minStock",
    header: "MinStock",
    cell: ({ row }) => row.getValue("minStock"),
  },
  {
    accessorKey: "openingStock",
    header: "OpeningStock",
    cell: ({ row }) => row.getValue("openingStock"),
  },
  {
    accessorKey: "expiryDate",
    header: "ExpiryDate",
    cell: ({ row }) => row.getValue("expiryDate"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.getValue("status"),
  },
  {
    accessorKey: "categoryId",
    header: "CateogryId",
    cell: ({ row }) => row.getValue("categoryId"),
  },
  {
    accessorKey: "brandId",
    header: "BrandId",
    cell: ({ row }) => row.getValue("brandId"),
  },
];
