import PackagesFormView from "@/components/packages/PackagesFormView";
import { packageSchema, PackageType } from "../clientSchema/package/schema";
import { CrudConfig } from "../clientSchema/crud/schema";
import {
	usePackagesTable,
	useCreatePackage,
	useDeletePackage,
	useGetAllPackages,
	useUpdatePackage,
} from "../hooks/usePackage";

export const packagesConfig: CrudConfig<PackageType, PackageType> = {
	entityName: "Package",
	entityNamePlural: "Packages",
	description: "Manage system subscription packages",
	schema: {
		create: packageSchema,
		update: packageSchema,
		row: packageSchema,
	},
	defaultValues: {
		name: "",
		price: 0,
		interval: "MONTHLY",
		maxProducts: 0,
		maxStaff: 0,
		enableReports: true,
		enableAdvanced: false,
	},
	FormView: PackagesFormView,
	formId: "form-rhf-packages",
	hooks: {
		useTable: usePackagesTable,
		useUpdate: useUpdatePackage,
		useCreate: useCreatePackage,
		useDelete: useDeletePackage,
		useGetAll: useGetAllPackages,
	},
};
