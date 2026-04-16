"use client";

import { useState } from "react";
import { useGetAllProducts } from "@/lib/hooks/useProduct";
import ProductGrid from "@/components/cashier/ViewProducts";
import CartPanel from "@/components/cashier/AddToCart";
import { ProductFormType } from "@/lib/clientSchema/product/schema";

type CartItem = {
  product: ProductFormType;
  quantity: number;
};

export default function CashierPage() {
  const { data } = useGetAllProducts();
  const products = data?.products || [];

  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product: ProductFormType) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.product.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.product.id === productId ? { ...p, quantity: p.quantity - 1 } : p,
        )
        .filter((p) => p.quantity > 0),
    );
  };

  return (
    <div className="flex h-screen gap-4 p-4 bg-gray-50">
      <ProductGrid products={products} onAdd={addToCart} />

      <CartPanel
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        discount={discount}
        setDiscount={setDiscount}
      />
    </div>
  );
}
