//@ts-nocheck
"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetSubscription } from "@/hooks/useSubscription";

const getTimeLeft = (endDate, now) => {
  const diff = new Date(endDate) - now;

  if (diff <= 0) return "Expired";

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const SubscriptionPage = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const {
    data: subscriptionData,
    isLoading: subscriptionDataisLoading,
    isError: subscriptionDataisError,
  } = useGetSubscription();

  if (subscriptionDataisLoading) {
    return <>...loading</>;
  }
  if (subscriptionDataisError) {
    return <>Error fetching data</>;
  }

  const subscriptions = subscriptionData?.subscriptions || [];

  console.log(subscriptions);
  return (
    <div className="flex flex-col gap-8 px-2">
      <div className="font-bold text-xl">Subscriptions</div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Package Name</TableHead>
              <TableHead>Package Type</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>Expiring On</TableHead>
              <TableHead>Time Left</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((subscription) => {
              return (
                <TableRow key={subscription.company.name}>
                  <TableCell>{subscription.company?.name}</TableCell>
                  <TableCell>{subscription.package?.name}</TableCell>
                  <TableCell>{subscription.package?.type}</TableCell>
                  <TableCell>{formatDate(subscription.startDate)}</TableCell>
                  <TableCell>{formatDate(subscription.endDate)}</TableCell>
                  <TableCell className="font-mono">
                    {getTimeLeft(subscription.endDate, now)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SubscriptionPage;
