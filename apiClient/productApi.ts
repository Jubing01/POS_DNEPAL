//@ts-nocheck
import axios from "axios";

export const getProducts = async () => {
	const response = await axios.get("/api/product");
	return response.data.data;
};

export const addProduct = async (body: {
	sku: String;
	productName: String;
	category: String;
	brand: String;
	price: Number;
	unit: String;
	quantity: Number;
}) => {
	const response = await axios.post("/api/product", body);
	return response;
};

export const deleteProduct = async (id) => {
	const response = await axios.delete(`/api/product/${id}`);
	return response;
};

export const updateProduct = async ({ id, productData }) => {
	const response = await axios.patch(`/api/product/${id}`, productData);
	return response;
};
