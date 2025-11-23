//@ts-nocheck
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import AddPackagePopup from "./addPackagePopup";

const PackagePage = () => {
  const [packageData, setPackageData] = useState([]);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("/api/package");
      setPackageData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };
  useEffect(() => {
    fetchPackages();
  }, []);

  const [addPackagePopup, setAddPackagePopup] = useState(false);
  return (
    <div>
      <div className="flex justify-between px-12">
        <h1 className="text-3xl font-bold">Package Page</h1>
        <button
          onClick={() => setAddPackagePopup(!addPackagePopup)}
          className="cursor-pointer bg-green-500 px-2 rounded-xl"
        >
          + Add Package
        </button>
      </div>
      {addPackagePopup && (
        <AddPackagePopup setAddPackagePopup={setAddPackagePopup} />
      )}
      <div className="mt-8 px-12">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Max Customers</th>
              <th className="border p-2 text-left">Max Products</th>
              <th className="border p-2 text-left">Price (Rs)</th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((pkg) => (
              <tr key={pkg._id} className="hover:bg-gray-50">
                <td className="border p-2">{pkg.name}</td>
                <td className="border p-2">{pkg.type}</td>
                <td className="border p-2">{pkg.maxCustomer}</td>
                <td className="border p-2">{pkg.maxProduct}</td>
                <td className="border p-2">{pkg.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackagePage;
