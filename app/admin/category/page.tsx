//@ts-nocheck
"use client";
import axios from "axios";
import { useState } from "react";
import AddCategoryPopup from "./addCategoryPopup";
import { useDeleteCategory, useGetCategories } from "@/hooks/useCategory";
import EditCategoryPopup from "./editCategoryPopup";

const CategoryPage = () => {
	const [addCategoryPopup, setAddCategoryPopup] = useState(false);
	const [editCategoryPopup, setEditCategoryPopup] = useState(null);

	const deleteCategoryMutation = useDeleteCategory();
	const { data: categoryData = [], isLoading: isCategoryLoading } =
		useGetCategories();

	if (isCategoryLoading) {
		return <>Categories are loading</>;
	}

	const handleDeleteCategory = (id) => {
		deleteCategoryMutation.mutate(id);
	};

	return (
		<div>
			<div className="flex justify-between px-12">
				<h1 className="text-3xl font-bold">Category Page</h1>
				<button
					onClick={() => setAddCategoryPopup(!addCategoryPopup)}
					className="cursor-pointer bg-green-500 px-2 rounded-xl"
				>
					+ Add Category
				</button>
			</div>
			{addCategoryPopup && (
				<AddCategoryPopup setAddCategoryPopup={setAddCategoryPopup} />
			)}
			{editCategoryPopup != null && (
				<EditCategoryPopup
					currentCategory={editCategoryPopup}
					setEditCategoryPopup={setEditCategoryPopup}
				/>
			)}
			<div className="mt-8 mx-12 border rounded-xl border-gray-200">
				<table className="w-full rounded-xl overflow-hidden">
					<thead className="bg-gray-100">
						<tr>
							<th className="p-2 text-left">id</th>
							<th className="p-2 text-left">Category Name</th>
							<th className="p-2 text-left">Slug</th>
							<th className="p-2 text-left">Status</th>
							<th className="p-2 text-left">Created On</th>
							<th className="p-2 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{categoryData.map((category) => (
							<tr key={category.id} className="hover:bg-gray-50">
								<td className="p-2">{category.category}</td>
								<td className="p-2">{category.categorySlug}</td>
								<td className="p-2">
									<span
										className={`px-3 py-1 rounded ${
											category.status === "active"
												? "bg-green-200 text-green-800"
												: "bg-red-200 text-red-800"
										}`}
									>
										{category.status}
									</span>
								</td>
								<td className="p-2">
									{new Date(category.createdOn).toLocaleDateString()}
								</td>
								<td className="p-2 flex items-center justify-center gap-2">
									<button
										onClick={() => handleDeleteCategory(category.id)}
										className="bg-red-300 hover:bg-red-500 hover:cursor-pointer px-3 rounded-xl py-2 disabled:bg-gray-200 disabled:cursor-disabled"
										disabled={deleteCategoryMutation.isPending}
									>
										{deleteCategoryMutation.isPending
											? "Deleting..."
											: "Delete"}
									</button>
									<button
										onClick={() => setEditCategoryPopup(category)}
										className="bg-blue-300 hover:bg-blue-500 hover:cursor-pointer px-3 rounded-xl py-2 disabled:bg-gray-200 disabled:cursor-disabled"
									>
										{editCategoryPopup ? "Editing..." : "Edit"}
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

export default CategoryPage;
