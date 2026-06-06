"use client";

import { useState } from "react";
import SupplierTable from "@/components/SupplierTable";
import AddSupplierModal from "@/components/AddSupplierModal";
import { Truck } from "lucide-react";

export default function SuppliersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120]  pt-10 p-3 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Truck className="text-orange-400" />
            Suppliers Management
          </h1>

          <p className="text-slate-400 mt-1">
            Manage your supplier network
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl"
        >
          + Add Supplier
        </button>

      </div>

      {/* Main Card */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 shadow-lg">

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