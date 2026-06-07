"use client";

import { useState } from "react";
import ProductTable from "@/components/ProductTable";
import AddProductModal from "@/components/AddProductModal";
import { useTranslation } from "react-i18next";

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

        <div className="flex gap-3">
          <input
            type="text"
            placeholder={t("searchProduct")}
            className="bg-[#131C31] border border-slate-800 text-white px-4 py-2 rounded-xl outline-none"
          />

          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl"
          >
            {t("addProduct")}
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