"use client";

import { useState } from "react";
import SupplierTable from "@/components/SupplierTable";
import AddSupplierModal from "@/components/AddSupplierModal";
import { Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SuppliersPage() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#0B1120]  pt-10 p-3 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Truck className="text-orange-400" />
            {t("suppliersManagement")}
          </h1>

          <p className="text-slate-400 mt-1">
            {t("manageYourSupplierNetwork")}
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl"
        >
           {t("addSupplier")}
        </button>

      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

  <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
    <h3 className="text-slate-400">
      Total Suppliers
    </h3>

    <h2 className="text-4xl font-bold text-white mt-2">
      24
    </h2>
  </div>

  <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
    <h3 className="text-slate-400">
      Active Suppliers
    </h3>

    <h2 className="text-4xl font-bold text-green-400 mt-2">
      20
    </h2>
  </div>

  <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
    <h3 className="text-slate-400">
      Total Purchases
    </h3>

    <h2 className="text-4xl font-bold text-cyan-400 mt-2">
      $54K
    </h2>
  </div>

  <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
    <h3 className="text-slate-400">
      Outstanding Due
    </h3>

    <h2 className="text-4xl font-bold text-red-400 mt-2">
      $7K
    </h2>
  </div>

</div>

      {/* Main Card */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 shadow-lg mt-5 pt-8">

        <SupplierTable />

      </div>

      {/* Modal */}
      <AddSupplierModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}