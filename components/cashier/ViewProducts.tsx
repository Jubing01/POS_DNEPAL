"use client";

import { ProductFormType } from "@/lib/clientSchema/product/schema";

export default function ProductGrid({
  products,
  onAdd,
}: {
  products: ProductFormType[];
  onAdd: (product: ProductFormType) => void;
}) {
  return (
    <div className="w-2/3">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-3 rounded-lg shadow flex flex-col gap-2"
          >
            <div className="font-semibold">{product.name}</div>
            <div className="text-gray-600">Rs. {product.sellingPrice}</div>

            <button
              onClick={() => onAdd(product)}
              className="bg-black text-white py-1 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}