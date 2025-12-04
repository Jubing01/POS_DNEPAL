//@ts-nocheck
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const verifyAuth = async () => {
  const token = (await cookies()).get("auth")?.value;

  if (!token) throw new Error("Not Authenticated");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
