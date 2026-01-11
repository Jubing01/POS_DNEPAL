import { getSubscriptions } from "@/apiClient/subscriptionApi";
import { useQuery } from "@tanstack/react-query";

export function useGetSubscription() {
  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: getSubscriptions,
  });
}
