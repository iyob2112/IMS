"use client";

import { useState } from "react";
import CategoryTable from "@/components/CategoryTable";
import AddCategoryModal from "@/components/AddCategoryModal";

export default function CategoriesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">


      <main className="flex-1  bg-slate-100 min-h-screen">


        <div className="bg-white mt-0 p-3 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold">
              Categories Management
            </h1>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              + Add Category
            </button>
          </div>

          <CategoryTable />
        </div>

        <AddCategoryModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </main>
    </div>
  );
}