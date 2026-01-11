import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function createCrudHooks<T extends { id?: string }>({
  endpoint,
  queryKey,
}: {
  endpoint: string;
  queryKey: string;
}) {
  const baseUrl = `/api/${endpoint}`;

  const useGetAll = () => {
    return useQuery({
      queryKey: [queryKey],
      queryFn: async () => {
        const response = await axios.get(baseUrl);
        return response.data;
      },
    });
  };
  const useCreate = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (data) => {
        const response = await axios.post(baseUrl, data);
        return response.data;
      },
      onSuccess: (response) => {
        console.log(response);
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const useUpdate = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async ({ id, data }: { id: string; data: T }) => {
        const response = await axios.patch(`${baseUrl}/${id}`, data);
        return response.data;
      },
      onSuccess: (response) => {
        console.log(response);
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const useDelete = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (id) => {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
      },
      onSuccess: (response) => {
        console.log(response);
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return {
    useGetAll,
    useCreate,
    useUpdate,
    useDelete,
  };
}
