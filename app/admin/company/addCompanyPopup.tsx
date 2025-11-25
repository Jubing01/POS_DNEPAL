//@ts-nocheck
"use client";
import axios from "axios";
import { useState } from "react";

const AddCompanyPopup = ({ setAddCompanyPopup }) => {
  const [companyData, setCompanyData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const addDataToCompanyData = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanySubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/company", companyData);
    console.log(response.data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setAddCompanyPopup(false)}
      ></div>

      <div className="relative bg-gray-100 z-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Company</h2>
        <form>
          <div className="mb-2">Company Name</div>
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            className="border p-2 rounded w-full mb-4"
            onChange={addDataToCompanyData}
          />

          <div className="mb-2">Company Address</div>
          <input
            type="text"
            name="address"
            placeholder="Company Address"
            className="border p-2 rounded w-full mb-4"
            onChange={addDataToCompanyData}
          />

          <div className="mb-2">Phone</div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border p-2 rounded w-full mb-4"
            onChange={addDataToCompanyData}
          />

          <div className="mb-2">Email Address</div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border p-2 rounded w-full mb-4"
            onChange={addDataToCompanyData}
          />

          <div className="mb-2">Password</div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="border p-2 rounded w-full mb-4"
            onChange={addDataToCompanyData}
          />

          <div className="mb-2">Pan</div>
          <input
            type="text"
            name="pan"
            placeholder="Pan Number"
            className="border p-2 rounded w-full mb-4"
            onChange={addDataToCompanyData}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleCompanySubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyPopup;
