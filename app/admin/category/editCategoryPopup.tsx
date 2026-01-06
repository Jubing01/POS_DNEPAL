//@ts-nocheck
"use client";
import { useUpdateCategory } from "@/hooks/useCategory";
import { useState } from "react";

const EditCategoryPopup = ({ currentCategory, setEditCategoryPopup }) => {
	const updateCategoryMutation = useUpdateCategory();

	const [categoryData, setCategoryData] = useState({
		category: currentCategory?.category,
		categorySlug: currentCategory?.categorySlug,
		status: currentCategory?.status,
	});

	const addDataToCategoryData = (e) => {
		const { name, value } = e.target;
		setCategoryData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCategoryUpdate = async (event) => {
		event.preventDefault();
		updateCategoryMutation.mutate(
			{ id: currentCategory.id, categoryData },
			{
				onSuccess: () => {
					setEditCategoryPopup(null);
				},
			}
		);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black opacity-50"
				onClick={() => setEditCategoryPopup(null)}
			></div>

			<div className="relative bg-gray-100 z-50 p-8 rounded-lg shadow-lg">
				<h2 className="text-xl font-bold mb-4">Edit Category</h2>
				<form className="flex flex-col">
					<div className="mb-2">Category Name</div>
					<input
						type="text"
						name="category"
						value={categoryData.category}
						placeholder="Enter Category Name"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToCategoryData}
					/>

					<div className="mb-2">Category Slug</div>
					<input
						type="text"
						name="categorySlug"
						value={categoryData.categorySlug}
						placeholder="Enter Category Slug"
						className="border p-2 rounded w-96 mb-4"
						onChange={addDataToCategoryData}
					/>

					<div className="mb-2">Status</div>
					<select
						name="status"
						className="border p-2 rounded w-96 mb-4"
						value={categoryData.status}
						onChange={addDataToCategoryData}
					>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>

					<button
						className="bg-blue-500 text-white py-2 rounded cursor-pointer px-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
						onClick={handleCategoryUpdate}
						disabled={updateCategoryMutation.isPending}
					>
						{updateCategoryMutation.isPending
							? "Updating Category..."
							: "Update"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditCategoryPopup;
