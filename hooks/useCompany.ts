import { addCompany, getCompanies } from "@/apiClient/companyApi";
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
