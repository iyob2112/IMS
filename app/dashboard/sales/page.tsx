"use client";

import SalesForm from "@/components/SalesForm";
import SalesTable from "@/components/SalesTable";

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white  pt-10 p-3">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Sales Management
        </h1>

        <p className="text-slate-400 mt-1">
          Record sales and track transactions
        </p>
      </div>

      {/* Form */}
      <div className="mb-6">
        <SalesForm />
      </div>

      {/* Table */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-2 sm:p-6">
        <SalesTable />
      </div>

    </div>
  );
}