//@ts-nocheck
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {addCategory, deleteCategory, updateCategory, getCategories,} from "@/apiClient/categoryApi";
import { toast } from "react-toastify";

export function useGetCategories() {
	return useQuery({
		queryKey: ["categories"],
		queryFn: getCategories,
	});
}

export function useAddCategory() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addCategory,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: ["categories"] });
			toast.success(response?.data?.message || "Created Successfully");
		},
		onError: (error) => {
			toast.error("Error while adding Category");
			console.log("The error is", error);
		},
	});
}

export function useUpdateCategory() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateCategory,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: ["categories"] });
			toast.success(response?.data?.message || "Update Successful");
		},
		onError: (error) => {
			toast.error("Error while updating Category");
			console.log("The error is", error);
		},
	});
}

export function useDeleteCategory() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteCategory,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: ["categories"] });
			toast.success(response?.data?.message || "Deleted Successfully");
		},
		onError: (error) => {
			toast.error("Error while Deleting Category");
			console.log("The error is", error);
		},
	});
}
