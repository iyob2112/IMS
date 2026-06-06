"use client";

import StockInForm from "@/components/StockInForm";
import StockTable from "@/components/StockTable";

export default function StockInPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Stock Management
        </h1>

        <p className="text-slate-400 mt-1">
          Add new stock and track inventory history
        </p>
      </div>

      {/* Form */}
      <div className="mb-6">
        <StockInForm />
      </div>

      {/* Table */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-2 sm:p-6">
        <StockTable />
      </div>

    </div>
  );
}