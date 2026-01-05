//@ts-nocheck
"use client";
import axios from "axios";
import { useState } from "react";
import AddProductPopup from "./addProductPopup";
import { useDeleteProduct, useGetProducts } from "@/hooks/useProduct";
import EditProductPopup from "./editProductPopup";

const ProductPage = () => {
	const [addProductPopup, setAddProductPopup] = useState(false);
	const [editProductPopup, setEditProductPopup] = useState(null);

	const deleteProductMutation = useDeleteProduct();
	const { data: productData = [], isLoading: isProductLoading } = useGetProducts();


	if (isProductLoading) {
		return <>Products are loading</>;
	}

	const handleDeleteProduct = (id) => {
		deleteProductMutation.mutate(id);
	};

	return (
		<div>
			<div className="flex justify-between px-12">
				<h1 className="text-3xl font-bold">Product Page</h1>
				<button
					onClick={() => setAddProductPopup(!addProductPopup)}
					className="cursor-pointer bg-green-500 px-2 rounded-xl"
				>
					+ Add Product
				</button>
			</div>
			{addProductPopup && (
				<AddProductPopup setAddProductPopup={setAddProductPopup} />
			)}
			{editProductPopup != null && (
				<EditProductPopup
					currentProduct={editProductPopup}
					setEditProductPopup={setEditProductPopup}
				/>
			)}
			<div className="mt-8 mx-12 border rounded-xl border-gray-200">
				<table className="w-full rounded-xl overflow-hidden">
					<thead className="bg-gray-100">
						<tr>
							<th className="p-2 text-left">SKU</th>
							<th className="p-2 text-left">Product Name</th>
							<th className="p-2 text-left">Category</th>
							<th className="p-2 text-left">Brand</th>
							<th className="p-2 text-left">Price (Rs)</th>
							<th className="p-2 text-left">Unit</th>
							<th className="p-2 text-left">Quantity</th>
                            <th className="p-2 text-left">Company ID</th>
                            <th className="p-2 text-left">Created By</th>
							<th className="p-2 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{productData.map((product) => (
							<tr key={product.id} className="hover:bg-gray-50">
								<td className="p-2">{product.sku}</td>
								<td className="p-2">{product.productName}</td>
								<td className="p-2">{product.category}</td>
								<td className="p-2">{product.brand}</td>
								<td className="p-2">{product.price}</td>
								<td className="p-2">{product.unit}</td>
								<td className="p-2">{product.quantity}</td>
                                <td className="p-2">{product.companyId}</td>
                                <td className="p-2">{product.createdBy}</td>
								<td className="p-2 flex items-center justify-center gap-2">
									<button
										onClick={() => handleDeleteProduct(product.id)}
										className="bg-red-300 hover:bg-red-500 hover:cursor-pointer px-3 rounded-xl py-2 disabled:bg-gray-200 disabled:cursor-disabled"
										disabled={deleteProductMutation.isPending}
									>
										{deleteProductMutation.isPending ? "Deleting..." : "Delete"}
									</button>
									<button
										onClick={() => setEditProductPopup(product)}
										className="bg-blue-300 hover:bg-blue-500 hover:cursor-pointer px-3 rounded-xl py-2 disabled:bg-gray-200 disabled:cursor-disabled"
									>
										{editProductPopup ? "Editing..." : "Edit"}
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductPage;
