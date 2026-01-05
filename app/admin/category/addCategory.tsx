//@ts-nocheck
import { useAddCategory } from "@/hooks/useCategory";
import { useGetCompanies } from "@/hooks/useCompany";
import { useState } from "react";

const AddCategory = () => {
	const [categoryData, setCategoryData] = useState({
		name: "",
		company: null,
	});
	const {
		data: companyData,
		isLoading: companyDataisLoading,
		isError: companyDataisError,
	} = useGetCompanies();

	const addCategoryMutation = useAddCategory();

	const handleChange = (event) => {
		setCategoryData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
    const handleCategorySubmit = ()=> {
        addCategoryMutation.mutate(categoryData)
    }

	return (
		<div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 p-4">
			<div className="flex flex-col gap-8">
				<div className="text-2xl text-center">Add Category</div>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<div>Name</div>
						<div>
							<input
								className="border-1 shadow-lg p-2"
								type="text"
								name="name"
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<div>Select Company</div>
						<div>
							<select
								className="border-1 shadow-lg p-2"
								name="company"
								onChange={handleChange}
							>
								<option value="" disabled>
									{" "}
									---Select Company---
								</option>
								{companyDataisLoading
									? "isloadig"
									: companyData.map((company) => {
											return (
												<option key={company.id} value={`${company.id}`}>
													{company.name}
												</option>
											);
									})}
							</select>
						</div>
					</div>
					<button className="bg-green-400 px-4 py-2 rounded-xl hover:bg-green-500" onClick={handleCategorySubmit}>
						{" "}
						Add Category
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddCategory;
