//@ts-nocheck
import axios from "axios";

export async function getCompanies() {
  const response = await axios.get("/api/company");
  return response.data.companies;
}

export async function addCompany(body) {
  const response = await axios.post("/api/company", body);
  return response;
}

export async function deleteCompany(id) {
  const response = await axios.delete(`/api/company/${id}`);
  return response.data;
}

export async function updateCompany({ body, id }) {
  const response = await axios.patch(`/api/company/${id}`, body);
  return response.data;
}
