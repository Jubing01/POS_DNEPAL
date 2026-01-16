import { CompanyTypeForm } from "./schema";
import { ColumnDef } from "@tanstack/react-table";

export const getCompanyColumns = (): ColumnDef<CompanyTypeForm>[] => [
  {
    accessorKey: "name",
    header: "Company Name",
    cell: ({ row }) => row.getValue("name"),
  },
];
