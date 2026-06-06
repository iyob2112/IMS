"use client";

import { useState } from "react";
import ProductTable from "@/components/ProductTable";
import AddProductModal from "@/components/AddProductModal";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
   

      <main className="flex-1  bg-slate-100 min-h-screen">

        <div className="bg-white mt-3 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <h1 className="text-2xl font-bold">
              Products Management
            </h1>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search Product..."
                className="border rounded-xl px-4 py-2"
              />

              <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded-xl "
              >
                + Add Product
              </button>
            </div>
          </div>

          <ProductTable />
        </div>

        <AddProductModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </main>
    </div>
  );
}