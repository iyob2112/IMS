"use client";

import { useState } from "react";
import ProductTable from "@/components/ProductTable";
import AddProductModal from "@/components/AddProductModal";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120]  pt-10 p-3 text-white">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Products Management
          </h1>
          <p className="text-slate-400 mt-1">
            Manage your inventory products
          </p>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search Product..."
            className="bg-[#131C31] border border-slate-800 text-white px-4 py-2 rounded-xl outline-none"
          />

          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl"
          >
            + Add Product
          </button>
        </div>
      </div>

      {/* Main Card (same as dashboard style) */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 shadow-lg">

        <ProductTable />

      </div>

      <AddProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}