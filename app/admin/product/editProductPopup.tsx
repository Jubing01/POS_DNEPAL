//@ts-nocheck
"use client";
import { useUpdateProduct } from "@/hooks/useProduct";
import { useState } from "react";

const EditProductPopup = ({ currentProduct, setEditProductPopup }) => {
	const updateProductMutation = useUpdateProduct();

	const [productData, setProductData] = useState({
		sku: currentProduct?.sku,
		productName: currentProduct?.productName,
		category: currentProduct?.category,
		brand: currentProduct?.brand,
		price: currentProduct?.price,
		unit: currentProduct?.unit,
		quantity: currentProduct?.quantity,
		companyId: currentProduct?.companyId,
		createdBy: currentProduct?.createdBy,
	});

	const addDataToProductData = (e) => {
		const { name, value } = e.target;
		setProductData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleProductUpdate = async (event) => {
		event.preventDefault();
		updateProductMutation.mutate(
			{ id: currentProduct.id, productData },
			{
				onSuccess: () => {
					setEditProductPopup(null);
				},
			}
		);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={() => setEditProductPopup(null)}
			></div>

			<div className="relative bg-gray-100 z-50 p-8 rounded-lg shadow-lg max-h-96 overflow-y-auto">
				<h2 className="text-xl font-bold mb-4">Edit Product</h2>
				<form className="flex flex-col">
					<div className="mb-2">SKU</div>
					<input
						type="text"
						name="sku"
						value={productData.sku}
						placeholder="Enter SKU"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Product Name</div>
					<input
						type="text"
						name="productName"
						value={productData.productName}
						placeholder="Enter Product Name"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Category</div>
					<input
						type="text"
						name="category"
						value={productData.category}
						placeholder="Enter Category"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Brand</div>
					<input
						type="text"
						name="brand"
						value={productData.brand}
						placeholder="Enter Brand"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Price (Rs)</div>
					<input
						type="number"
						name="price"
						value={productData.price}
						placeholder="Enter Price"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Unit</div>
					<input
						type="text"
						name="unit"
						value={productData.unit}
						placeholder="Enter Unit (e.g., kg, liter, piece)"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Quantity</div>
					<input
						type="number"
						name="quantity"
						value={productData.quantity}
						placeholder="Enter Quantity"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Company ID</div>
					<input
						type="number"
						name="companyId"
						value={productData.companyId}
						placeholder="Enter Company ID"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Created By</div>
					<input
						type="text"
						name="createdBy"
						value={productData.createdBy}
						placeholder="Enter Creator Name"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<button
						className="bg-blue-500 text-white py-2 rounded cursor-pointer px-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
						onClick={handleProductUpdate}
						disabled={updateProductMutation.isPending}
					>
						{updateProductMutation.isPending ? "Updating Product..." : "Update"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProductPopup;
