import { getCompanyColumns } from "../clientSchema/company/columns";
import { CreateCompanyFormType } from "../clientSchema/company/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

const companyCrud = createCrudHooks<CreateCompanyFormType>({
  endpoint: "company",
  queryKey: "companies",
});

export const {
  useGetAll: useGetAllCompanies,
  useCreate: useCreateCompany,
  useUpdate: useUpdateCompany,
  useDelete: useDeleteCompany,
} = companyCrud;

export const useCompanyTable = createCrudTableHook<CreateCompanyFormType>({
  useGetAll: useGetAllCompanies,
  getColumns: getCompanyColumns,
  dataKey: "companies",
});
