"use client";
import { CrudPage } from "@/components/crud/CrudPage";
import { packageConfig } from "@/lib/clientSchema/package/packageConfig";

const PackagePage = () => {
  return <CrudPage config={packageConfig} />;
};

export default PackagePage;
