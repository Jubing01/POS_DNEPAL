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
