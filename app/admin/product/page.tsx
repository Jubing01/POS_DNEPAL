"use client";
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { productConfig } from "@/lib/config/productConfig";

export default function ProductPage() {
    return <GenericCrudPage config={productConfig} />;
}
