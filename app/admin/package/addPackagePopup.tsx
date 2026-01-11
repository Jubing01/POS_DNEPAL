//@ts-nocheck
"use client";
import { useAddPackage } from "@/lib/hooks/usePackage";
import axios from "axios";
import { useState } from "react";

const AddPackagePopup = ({ setAddPackagePopup }) => {
  const addPackageMutation = useAddPackage();

  const [packageData, setPackageData] = useState({
    name: "",
    type: "monthly",
    maxCustomer: 0,
    maxProduct: 0,
    price: 0,
  });

  const addDataToPackageData = (e) => {
    const { name, value } = e.target;
    setPackageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePackageSubmit = async (event) => {
    event.preventDefault();
    addPackageMutation.mutate(packageData, {
      onSuccess: () => {
        setAddPackagePopup(false)
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setAddPackagePopup(false)}
      ></div>

      <div className="relative bg-gray-100 z-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Package</h2>
        <form className="flex flex-col">
          <div className="mb-2">Plan Name</div>
          <input
            type="text"
            name="name"
            placeholder="Add New Package Plan Name"
            className="border p-2 rounded w-96 mb-4"
            onChange={addDataToPackageData}
          />

          <div className="mb-2">Plan Type</div>
          <select
            name="type"
            className="border p-2 rounded w-96 mb-4"
            defaultValue={""}
            onChange={addDataToPackageData}
          >
            <option value="" disabled>
              Select Package Type
            </option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>

          <div className="mb-2">Max Customer</div>
          <input
            type="number"
            name="maxCustomer"
            placeholder="Maximum Number of Customer"
            className="border p-2 rounded w-96 mb-4"
            onChange={addDataToPackageData}
          />

          <div className="mb-2">Max Product</div>
          <input
            type="number"
            name="maxProduct"
            placeholder="Maximum Number of Product"
            className="border p-2 rounded w-96 mb-4"
            onChange={addDataToPackageData}
          />

          <div className="mb-2">Price</div>
          <input
            type="number"
            name="price"
            placeholder="Price of the Package"
            className="border p-2 rounded w-96 mb-4"
            onChange={addDataToPackageData}
          />

          <button
            className="bg-blue-500 text-white py-2 rounded cursor-pointer px-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handlePackageSubmit}
            disabled={addPackageMutation.isPending}
          >
            {addPackageMutation.isPending ? "Adding Package..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackagePopup;
