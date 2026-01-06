//@ts-nocheck
import axios from "axios";

export const getCategories = async () => {
	const response = await axios.get("/api/category");
	return response.data.data;
};

export const addCategory = async (body: {
	category: String;
	categorySlug: String;
	status: String;
}) => {
	const response = await axios.post("/api/category", body);
	return response;
};

export const deleteCategory = async (id) => {
	const response = await axios.delete(`/api/category/${id}`);
	return response;
};

export const updateCategory = async ({ id, categoryData }) => {
	const response = await axios.patch(`/api/category/${id}`, categoryData);
	return response;
};
