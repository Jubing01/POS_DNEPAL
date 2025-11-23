//@ts-nocheck
"use client";

import AddCategory from "./addCategory";
import { useState } from "react";

const CategoryPage = () => {
  const [addCategoryPopup, setAddCategoryPopup] = useState(false);
  return (
    <div className="bg-gray-200 py-4">
      <div className="flex justify-between px-12">
        <div className="">Category Page</div>
        <button
          onClick={() => setAddCategoryPopup(!addCategoryPopup)}
          className="border-1 cursor-pointer"
        >
          Add Category
        </button>
      </div>
      {addCategoryPopup && <AddCategory />}
    </div>
  );
};

export default CategoryPage;
