import { CompanyTypeForm } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getCompanyColumns = (): ColumnDef<CompanyTypeForm>[] => [
  {
    accessorKey: "name",
    header: "Company Name",
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => row.getValue("address"),
  },
];
