'use client'
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { companyConfig } from "@/lib/config/companyConfig";

export default function CompanyPage() {
  return <GenericCrudPage config={companyConfig} />;
}
