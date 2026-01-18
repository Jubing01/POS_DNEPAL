import CompanyFormView from "@/components/company/CompanyFormView";
import {
  CreateCompanyFormType,
  CreateCompanyInputType,
  CreateCompanySchema,
} from "../clientSchema/company/schema";
import { CrudConfig } from "../clientSchema/crud/schema";
import {
  useCompanyTable,
  useCreateCompany,
  useGetAllCompanies,
  useDeleteCompany,
  useUpdateCompany,
} from "../hooks/useCompany";

export const companyConfig: CrudConfig<
  CreateCompanyFormType,
  CreateCompanyInputType
> = {
  entityName: "Company",
  entityNamePlural: "Companies",
  description: "Add new Company to the system",
  schema: {
    create: CreateCompanySchema,
    update: CreateCompanySchema,
    row: CreateCompanySchema,
  },
  defaultValues: {
    company: {
      name: "",
      address: "",
      phone: "",
      pan: "",
      logoUrl: "",
      currency: "NPR",
      rounding: 2,
    },
    adminUser: {
      name: "",
      email: "",
      password: "",
    },
    subscription: {
      packageId: "",
    },
  },
  FormView: CompanyFormView,
  formId: "form-rhf-company",
  hooks: {
    useTable: useCompanyTable,
    useGetAll: useGetAllCompanies,
    useUpdate: useUpdateCompany,
    useCreate: useCreateCompany,
    useDelete: useDeleteCompany,
  },
};
