//@ts-nocheck
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import AddCompanyPopup from "./addCompanyPopup";
import { useGetCompanies } from "@/hooks/useCompany";
import { useGetUsers } from "@/hooks/useUser";

const CompanyPage = () => {
  const [addCompanyPopup, setAddCompanyPopup] = useState(false);

  const {
    data: companyData,
    isLoading: isCompanyDataLoading,
    isError: isCompanyDataError,
  } = useGetCompanies();

  if (isCompanyDataLoading) {
    return <>is Loading</>;
  }

  console.log(companyData);
  return (
    <div>
      <div className="flex justify-between px-12">
        <h1 className="text-3xl font-bold">Company Page</h1>
        <button
          onClick={() => setAddCompanyPopup(!addCompanyPopup)}
          className="cursor-pointer bg-green-500 px-2 rounded-xl"
        >
          + Add Company
        </button>
      </div>
      {addCompanyPopup && (
        <AddCompanyPopup setAddCompanyPopup={setAddCompanyPopup} />
      )}
      <div className="mt-8 mx-12 border rounded-xl border-gray-200">
        <table className="min-w-full max-w-full rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Pan</th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((company) => {
              const user = company.users.find((user) => user.role == "admin");
              return (
                <tr key={company.id} className="hover:bg-gray-50">
                  <td className="p-2">{company.name}</td>
                  <td className="p-2">{company.address}</td>
                  <td className="p-2">{company.phone}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{company.pan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyPage;
