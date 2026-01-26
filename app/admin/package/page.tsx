//@ts-nocheck
"use client";

import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { packagesConfig } from "@/lib/config/packagesConfig";

const PackagePage = () => {
  return <GenericCrudPage config={packagesConfig} />;
};

export default PackagePage;
