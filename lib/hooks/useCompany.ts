import { getCompanyColumns } from "../clientSchema/company/columns";
import { CompanyTypeForm } from "../clientSchema/company/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

const companyCrud = createCrudHooks<CompanyTypeForm>({
  endpoint: "company",
  queryKey: "companies",
});

export const {
  useGetAll: useGetAllCompanies,
  useCreate: useCreateCompany,
  useUpdate: useUpdateCompany,
  useDelete: useDeleteCompany,
} = companyCrud;

export const useCompanyTable = createCrudTableHook<CompanyTypeForm>({
  useGetAll: useGetAllCompanies,
  getColumns: getCompanyColumns,
  dataKey: "companies",
});
