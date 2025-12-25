//@ts-nocheck
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import AddPackagePopup from "./addPackagePopup";
import { useDeletePackage, useGetPackages } from "@/hooks/usePackage";
import EditPackagePopup from "./editPackagePopup";

const PackagePage = () => {
  const [addPackagePopup, setAddPackagePopup] = useState(false);
  const [editPackagePopup, setEditPackagePopup] = useState(null);

  const deletePackageMutation = useDeletePackage();
  const { data: packageData, isLoading: isPackageLoading } = useGetPackages();
  if (isPackageLoading) {
    return <>Packages are loading</>;
  }

  const handleDeletePackage = (id) => {
    deletePackageMutation.mutate(id);
  };

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
      {editPackagePopup != null && (
        <EditPackagePopup
          currentPackage={editPackagePopup}
          setEditPackagePopup={setEditPackagePopup}
        />
      )}
      <div className="mt-8 mx-12 border rounded-xl border-gray-200">
        <table className="w-full rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Max Customers</th>
              <th className="p-2 text-left">Max Products</th>
              <th className="p-2 text-left">Price (Rs)</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <td className=" p-2">{pkg.name}</td>
                <td className=" p-2">{pkg.type}</td>
                <td className=" p-2">{pkg.maxCustomer}</td>
                <td className=" p-2">{pkg.maxProduct}</td>
                <td className=" p-2">{pkg.price}</td>
                <td className="p-2 flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleDeletePackage(pkg.id)}
                    className="bg-red-300 hover:bg-red-500 hover:cursor-pointer px-3 rounded-xl py-2 disabled:bg-gray-200 disabled:cursor-disabled"
                    disabled={deletePackageMutation.isPending}
                  >
                    {deletePackageMutation.isPending ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setEditPackagePopup(pkg)}
                    className="bg-red-300 hover:bg-red-500 hover:cursor-pointer px-3 rounded-xl py-2 disabled:bg-gray-200 disabled:cursor-disabled"
                  >
                    {editPackagePopup ? "Editing..." : "Edit"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackagePage;
