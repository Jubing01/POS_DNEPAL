//@ts-nocheck
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPackage,
  deletePackage,
  updatePackage,
  getPackages,
} from "@/apiClient/packageApi";
import { toast } from "react-toastify";

export function useGetPackages() {
  return useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });
}

export function useAddPackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPackage,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast.success(response?.data?.message || "Created Successfully");
    },
    onError: (error) => {
      toast.error("Error while adding Package");
      console.log("The error is", error);
    },
  });
}

export function useUpdatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePackage,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast.success(response?.data?.message || "Update Successfull");
    },
    onError: (error) => {
      toast.error("Error while updating Package");
      console.log("The error is", error);
    },
  });
}

export function useDeletePackage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePackage,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
      toast.success(response?.data?.message || "Deleted Successfully");
    },
    onError: (error) => {
      toast.error("Error while Deleting Package");
      console.log("The error is", error);
    },
  });
}
