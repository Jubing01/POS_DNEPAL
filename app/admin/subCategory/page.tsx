//@ts-nocheck
"use client";

import { useState } from "react";
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { subCategoriesConfig } from "@/lib/config/subCategoriesConfig";

const SubCategoryPage = () => {
  return <GenericCrudPage config={subCategoriesConfig} />;
};

export default SubCategoryPage;