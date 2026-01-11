//@ts-nocheck
import { getUsers } from "@/apiClient/userApi";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers () {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    })
}
