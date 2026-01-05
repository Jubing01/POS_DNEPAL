//@ts-nocheck
"use client";
import { useAddProduct } from "@/hooks/useProduct";
import { useState } from "react";

const AddProductPopup = ({ setAddProductPopup }) => {
	const addProductMutation = useAddProduct();

	const [productData, setProductData] = useState({
		sku: "",
		productName: "",
		category: "",
		brand: "",
		price: 0,
		unit: "",
		quantity: 0,
		companyId: 0,
		createdBy: "",
	});

	const addDataToProductData = (e) => {
		const { name, value } = e.target;
		setProductData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleProductSubmit = async (event) => {
		event.preventDefault();
		addProductMutation.mutate(productData, {
			onSuccess: () => {
				setAddProductPopup(false);
			},
		});
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={() => setAddProductPopup(false)}
			></div>

			<div className="relative bg-gray-100 z-50 p-8 rounded-lg shadow-lg max-h-96 overflow-y-auto">
				<h2 className="text-xl font-bold mb-4">Add New Product</h2>
				<form className="flex flex-col">
					<div className="mb-2">SKU</div>
					<input
						type="text"
						name="sku"
						placeholder="Enter SKU"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Product Name</div>
					<input
						type="text"
						name="productName"
						placeholder="Enter Product Name"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Category</div>
					<input
						type="text"
						name="category"
						placeholder="Enter Category"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Brand</div>
					<input
						type="text"
						name="brand"
						placeholder="Enter Brand"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Price (Rs)</div>
					<input
						type="number"
						name="price"
						placeholder="Enter Price"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Unit</div>
					<input
						type="text"
						name="unit"
						placeholder="Enter Unit (e.g., kg, liter, piece)"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Quantity</div>
					<input
						type="number"
						name="quantity"
						placeholder="Enter Quantity"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Company ID</div>
					<input
						type="number"
						name="companyId"
						placeholder="Enter Company ID"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<div className="mb-2">Created By</div>
					<input
						type="text"
						name="createdBy"
						placeholder="Enter Creator Name"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToProductData}
					/>

					<button
						className="bg-blue-500 text-white py-2 rounded cursor-pointer px-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
						onClick={handleProductSubmit}
						disabled={addProductMutation.isPending}
					>
						{addProductMutation.isPending ? "Adding Product..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProductPopup;
