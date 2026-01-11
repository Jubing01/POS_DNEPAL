import {
  addCompany,
  deleteCompany,
  getCompanies,
  updateCompany,
} from "@/apiClient/companyApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useGetCompanies() {
  return useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
}

export function useAddCompany() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addCompany,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      toast.success(response?.data?.message || "Created Successfully");
    },
    onError: (error) => {
      toast.error("Error while creating...");
      console.log(error);
    },
  });
}

export function useDeleteCompany() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompany,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      toast.success("Successfully Deleted Company");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error Deleting Company");
    },
  });
}

export function useUpdateCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCompany,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      toast.success("Successfully updated company");
    },
    onError: (error) => {
      console.log(error);
      toast.success("Failed to update company");
    },
  });
}
