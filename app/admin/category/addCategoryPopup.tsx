//@ts-nocheck
"use client";
import { useAddCategory } from "@/hooks/useCategory";
import { useState } from "react";

const AddCategoryPopup = ({ setAddCategoryPopup }) => {
	const addCategoryMutation = useAddCategory();

	const [categoryData, setCategoryData] = useState({
		category: "",
		categorySlug: "",
		status: "active",
	});

	const addDataToCategoryData = (e) => {
		const { name, value } = e.target;
		setCategoryData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCategorySubmit = async (event) => {
		event.preventDefault();
		addCategoryMutation.mutate(categoryData, {
			onSuccess: () => {
				setAddCategoryPopup(false);
			},
		});
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={() => setAddCategoryPopup(false)}
			></div>

			<div className="relative bg-gray-100 z-50 p-8 rounded-lg shadow-lg">
				<h2 className="text-xl font-bold mb-4">Add New Category</h2>
				<form className="flex flex-col">
					<div className="mb-2">Category Name</div>
					<input
						type="text"
						name="category"
						placeholder="Enter Category Name"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToCategoryData}
					/>

					<div className="mb-2">Category Slug</div>
					<input
						type="text"
						name="categorySlug"
						placeholder="Enter Category Slug (e.g., electronics)"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToCategoryData}
					/>

					<div className="mb-2">Status</div>
					<select
						name="status"
						className="border p-2 rounded w-96 mb-4"
						defaultValue="active"
						onChange={addDataToCategoryData}
					>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>

					<button
						className="bg-blue-500 text-white py-2 rounded cursor-pointer px-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
						onClick={handleCategorySubmit}
						disabled={addCategoryMutation.isPending}
					>
						{addCategoryMutation.isPending ? "Adding Category..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddCategoryPopup;
