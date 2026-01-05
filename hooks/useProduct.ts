//@ts-nocheck
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	addProduct,
	deleteProduct,
	updateProduct,
	getProducts,
} from "@/apiClient/productApi";
import { toast } from "react-toastify";

export function useGetProducts() {
	return useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});
}

export function useAddProduct() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addProduct,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			toast.success(response?.data?.message || "Created Successfully");
		},
		onError: (error) => {
			toast.error("Error while adding Product");
			console.log("The error is", error);
		},
	});
}

export function useUpdateProduct() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateProduct,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			toast.success(response?.data?.message || "Update Successful");
		},
		onError: (error) => {
			toast.error("Error while updating Product");
			console.log("The error is", error);
		},
	});
}

export function useDeleteProduct() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteProduct,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
			toast.success(response?.data?.message || "Deleted Successfully");
		},
		onError: (error) => {
			toast.error("Error while Deleting Product");
			console.log("The error is", error);
		},
	});
}
