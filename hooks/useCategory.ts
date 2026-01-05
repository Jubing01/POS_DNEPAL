import { addCategory, getCategories } from "@/apiClient/categoryApi";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAddCategory(){
    return useMutation({
        mutationFn: addCategory

    })
    
}

export function useGetCategory(){
    return useQuery({
        queryKey : ['categories'],
        queryFn : getCategories
    })
}