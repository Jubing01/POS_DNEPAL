//@ts-nocheck
"use client";
import { verifyAuth } from "@/lib/auth";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProtectedRoutes({ children }) {
  const [user, setUser] = useState(null);
  const CheckRoutes = async () => {
    try {
      const response = await axios
        .get("/api/protected")
        .then((result) => result.data.userInfo);
      console.log(response);
      setUser(response);
    } catch {
      return new Response("Unauthorized", { status: 401 });
    }
  };
  useEffect(() => {
    CheckRoutes();
  }, []);
  if (user) {
    return <>{children}</>;
  }
  return (
    <div>
      <Link href="/login">Please Login first</Link>
    </div>
  );
}
