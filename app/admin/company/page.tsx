//@ts-nocheck
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import AddCompanyPopup from "./addCompanyPopup";
import { useDeleteCompany, useGetCompanies } from "@/lib/hooks/useCompany";
import { useGetUsers } from "@/lib/hooks/useUser";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete, MdEdit } from "react-icons/md";

const CompanyPage = () => {
  const [addCompanyPopup, setAddCompanyPopup] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const deleteCompanyMutation = useDeleteCompany();

  const {
    data: companyData,
    isLoading: isCompanyDataLoading,
    isError: isCompanyDataError,
  } = useGetCompanies();

  if (isCompanyDataLoading) {
    return <>is Loading</>;
  }

  const handleDeleteCompany = (id) => {
    deleteCompanyMutation.mutate(id);
  };

  const handleEditCompany = (company) => {
    setAddCompanyPopup(true);
    setIsEdit(company);
  };

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
        <AddCompanyPopup
          setAddCompanyPopup={setAddCompanyPopup}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      )}
      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Pan</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Plan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companyData.map((company) => {
            const user = company.users.find((user) => user.role == "admin");
            return (
              <TableRow key={company.id} className="">
                <TableCell className="">{company.name}</TableCell>
                <TableCell className="">{company.address}</TableCell>
                <TableCell className="">{company.phone}</TableCell>
                <TableCell className="">{user.email}</TableCell>
                <TableCell className="">{company.pan}</TableCell>
                <TableCell className="">
                  <div className="flex gap-4">
                    <MdDelete
                      onClick={() => handleDeleteCompany(company.id)}
                      className="hover:border-1 hover:cursor-pointer"
                      color="red"
                      size={24}
                    />
                    <MdEdit
                      size={24}
                      color="blue"
                      className="hover:border-1 hover:cursor-pointer"
                      onClick={() => handleEditCompany(company)}
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  {company.currentSubscription?.package ? (
                    <div>
                      {company.currentSubscription.package.name} (
                      {company.currentSubscription.package.type})
                    </div>
                  ) : (
                    "no current subscription"
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanyPage;
