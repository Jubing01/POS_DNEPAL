import { ProductFormType } from "@/lib/clientSchema/product/schema";
import axios from "axios";

type CartItem = {
  product: ProductFormType;
  quantity: number;
};

export const checkoutProducts = async (body: {
  cart: CartItem[];
  subtotal: number;
  discount: number;
  vat: number;
  total: number;
}) => {
  const response = await axios.post("/api/checkout", body);
  return response.data;
};
