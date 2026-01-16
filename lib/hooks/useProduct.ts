import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";
import { getProductColumns } from "../clientSchema/product/columns";
import { ProductFormType } from "../clientSchema/product/schema";

const productCrud = createCrudHooks<ProductFormType>({
  endpoint: "product",
  queryKey: "products",
});

export const {
  useGetAll: useGetAllProducts,
  useCreate: useCreateProduct,
  useUpdate: useUpdateProduct,
  useDelete: useDeleteProduct,
} = productCrud;

export const useProductTable = createCrudTableHook<ProductFormType>({
  useGetAll: useGetAllProducts,
  getColumns: getProductColumns,
  dataKey: "products",
});
