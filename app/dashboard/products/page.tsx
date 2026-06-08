"use client";

import { useState } from "react";
import ProductTable from "@/components/ProductTable";
import AddProductModal from "@/components/AddProductModal";
import { useTranslation } from "react-i18next";
import  Link  from "next/link";

export default function ProductsPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120]  pt-10 p-3 text-white">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            {t("productsManagement")}
          </h1>
          <p className="text-slate-400 mt-1">
            {t("manageYourInventoryProducts")}
          </p>
        </div>

    <div className="flex flex-col lg:flex-row gap-3 mb-6">

  <input
    type="text"
    placeholder="Search product..."
    className="flex-1 bg-[#131C31] border border-slate-800 rounded-xl px-4 py-3"
  />

  <select className="bg-[#131C31] border border-slate-800 rounded-xl px-4 py-3">
    <option>All Categories</option>
    <option>Electronics</option>
    <option>Accessories</option>
  </select>

  <select className="bg-[#131C31] border border-slate-800 rounded-xl px-4 py-3">
    <option>All Stock</option>
    <option>In Stock</option>
    <option>Low Stock</option>
    <option>Out Of Stock</option>
  </select>

  <button className="bg-green-600 px-5 rounded-xl">
    Export
  </button>

  <button className="bg-blue-600 px-5 rounded-xl">
    Import
  </button>
<Link
  href="/dashboard/products/analytics"
  className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-xl flex items-center justify-center "
>
  Analytics
</Link>
  <button
    onClick={() => setOpen(true)}
    className="bg-indigo-600 px-5 rounded-xl"
  >
    Add Product
  </button>

</div>
      </div>
<div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mb-6">

  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-5">
    <p className="text-slate-400">Total Products</p>
    <h2 className="text-3xl font-bold mt-2">150</h2>
  </div>

  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-5">
    <p className="text-slate-400">Low Stock</p>
    <h2 className="text-3xl font-bold text-yellow-400 mt-2">12</h2>
  </div>

  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-5">
    <p className="text-slate-400">Out Of Stock</p>
    <h2 className="text-3xl font-bold text-red-400 mt-2">4</h2>
  </div>

  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-5">
    <p className="text-slate-400">Categories</p>
    <h2 className="text-3xl font-bold text-cyan-400 mt-2">18</h2>
  </div>

  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-5">
    <p className="text-slate-400">Inventory Value</p>
    <h2 className="text-3xl font-bold text-green-400 mt-2">
      $45,000
    </h2>
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