//@ts-nocheck
import axios from "axios";

export async function addCategory(body) {
	console.log(body);
	const response = await axios.post("/api/category", body);
	return response;
}

export async function getCategories() {
	const response = await axios.get("/api/category");
	return response.data.categories;
}
