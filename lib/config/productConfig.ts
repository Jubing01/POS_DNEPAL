import { CrudConfig } from "../clientSchema/crud/schema";
import ProductFormView from "@/components/product/ProductFormView";
import { useProductTable, useUpdateProduct } from "../hooks/useProduct";
import {
	productFormSchema,
	ProductFormType,
} from "../clientSchema/product/schema";

export const productConfig: CrudConfig<ProductFormType, ProductFormType> = {
	entityName: "Product",
	entityNamePlural: "Products",
	description: "Add new Product to the system",
	schema: {
		create: productFormSchema,
		update: productFormSchema,
		row: productFormSchema,
	},
	defaultValues: {
		name: "",
	},
	FormView: ProductFormView,
	formId: "form-rhf-product",
	hooks: {
		useTable: useProductTable,
		useUpdate: useUpdateProduct,
	},
};
