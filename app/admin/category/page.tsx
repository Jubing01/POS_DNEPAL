//@ts-nocheck
"use client";

import { useState } from "react";
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { categoriesConfig } from "@/lib/config/categoriesConfig";

const CategoryPage = () => {
  return <GenericCrudPage config={categoriesConfig} />;
};

export default CategoryPage;
