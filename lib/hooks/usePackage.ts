import { getPackageColumns } from "../clientSchema/package/columns";
import { PackageFormType } from "../clientSchema/package/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

const packageCrud = createCrudHooks<PackageFormType>({
  endpoint: "package",
  queryKey: "packages",
});

export const {
  useGetAll: useGetAllPackages,
  useCreate: useCreatePackage,
  useUpdate: useUpdatePackage,
  useDelete: useDeletePackage,
} = packageCrud;

export const usePackageTable = createCrudTableHook<PackageFormType>({
  useGetAll: useGetAllPackages,
  getColumns: getPackageColumns,
  dataKey: "packages",
});
