import { ColumnDef } from "@tanstack/react-table";
import { CreateCompanyFormType } from "./schema";

export const getCompanyColumns = (): ColumnDef<CreateCompanyFormType>[] => [
  {
    id: "companyName",
    header: "Company Name",
    accessorFn: (row) => row.company?.name,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "companyAddress",
    header: "Company Address",
    accessorFn: (row) => row.company?.address,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "companyPhone",
    header: "Company Phone",
    accessorFn: (row) => row.company?.phone,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "companyPan",
    header: "Company PAN",
    accessorFn: (row) => row.company?.pan,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "companyLogo",
    header: "Company Logo",
    accessorFn: (row) => row.company?.logoUrl,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "companyCurrency",
    header: "Company Currency",
    accessorFn: (row) => row.company?.currency,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "companyRounding",
    header: "Company Rounding",
    accessorFn: (row) => row.company?.rounding,
    cell: ({ getValue }) => getValue(),
  },
];
