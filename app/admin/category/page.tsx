//@ts-nocheck
"use client";

import { useGetCategory } from "@/hooks/useCategory";
import AddCategory from "./addCategory";
import { useState } from "react";

const CategoryPage = () => {
	const [addCategoryPopup, setAddCategoryPopup] = useState(false);
	const {
		data: categoryData,
		isLoading: categoryDataisLoading,
		isError: categoryDataisError,
	} = useGetCategory();

	console.log(categoryData);
	return (
		<div className="py-4  px-12">
			<div className="flex justify-between">
				<div className="">Category Page</div>
				<button
					onClick={() => setAddCategoryPopup(!addCategoryPopup)}
					className="border-1 cursor-pointer bg-green-400 px-4 py-2 rounded-xl hover:bg-green-500"
				>
					Add Category
				</button>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Created At</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{categoryDataisLoading
							? "is loading..."
							: categoryData.map((category) => (
									<tr>
										<td>{category.category}</td>
										<td>2004</td>
										<th>Edit, Delete</th>
									</tr>
							))}
					</tbody>
				</table>
			</div>
			{addCategoryPopup && <AddCategory />}
		</div>
	);
};

export default CategoryPage;
