import { checkoutProducts } from "@/apiClient/checkout";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useCheckoutProducts() {
  return useMutation({
    mutationFn: checkoutProducts,
    onSuccess: (response) => {
      toast.success(response.data?.message || "Checkout successfully");
    //   queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Some error occured");
    },
  });
}
