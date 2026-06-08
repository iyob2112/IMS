"use client";

import {
  PackagePlus,
  DollarSign,
  Calendar,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import StockInForm from "@/components/StockInForm";
import StockTable from "@/components/StockTable";

export default function StockInPage() {
  return (
    <div className="space-y-6 pt-10 p-3 text-white min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Stock In Management
          </h1>

          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Receive inventory and manage stock entries
          </p>
        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

        <div className="bg-[#131C31] p-5 md:p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between items-start">

            <div>
              <p className="text-slate-400 text-sm">
                Stock Received
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mt-2">
                2,540
              </h2>
            </div>

            <PackagePlus className="text-cyan-400" />
          </div>

        </div>

        <div className="bg-[#131C31] p-5 md:p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between items-start">

            <div>
              <p className="text-slate-400 text-sm">
                Today`s Receipts
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-green-400 mt-2">
                42
              </h2>
            </div>

            <Calendar className="text-green-400" />
          </div>

        </div>

        <div className="bg-[#131C31] p-5 md:p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between items-start">

            <div>
              <p className="text-slate-400 text-sm">
                Inventory Value
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-purple-400 mt-2">
                $34K
              </h2>
            </div>

            <DollarSign className="text-purple-400" />
          </div>

        </div>

        <div className="bg-[#131C31] p-5 md:p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between items-start">

            <div>
              <p className="text-slate-400 text-sm">
                Pending Receipts
              </p>

              <h2 className="text-2xl md:text-4xl font-bold text-red-400 mt-2">
                5
              </h2>
            </div>

            <AlertCircle className="text-red-400" />
          </div>

        </div>

      </div>

      {/* Quick Actions (mobile scroll friendly) */}
   <div className="py-2">

  <div className="flex gap-3 overflow-x-auto md:overflow-x-auto lg:overflow-visible w-90 ">

    <div className="flex gap-3 ">

      <Link
        href="/dashboard/stock-in"
        className="min-w-[140px] bg-cyan-600 p-4 rounded-2xl text-center whitespace-nowrap"
      >
        Add Stock
      </Link>

      <Link
        href="/dashboard/stock-in/history"
        className="min-w-[140px] bg-violet-600 p-4 rounded-2xl text-center whitespace-nowrap"
      >
        History
      </Link>

      <Link
        href="/dashboard/stock-in/grn"
        className="min-w-[140px] bg-green-600 p-4 rounded-2xl text-center whitespace-nowrap"
      >
        GRN
      </Link>

      <Link
        href="/dashboard/stock-in/batches"
        className="min-w-[140px] bg-orange-600 p-4 rounded-2xl text-center whitespace-nowrap"
      >
        Batches
      </Link>

      <Link
        href="/dashboard/stock-in/barcodes"
        className="min-w-[140px] bg-pink-600 p-4 rounded-2xl text-center whitespace-nowrap"
      >
        Barcodes
      </Link>

      <button className="min-w-[140px] bg-indigo-600 p-4 rounded-2xl whitespace-nowrap">
        Import CSV
      </button>

    </div>

  </div>

</div>
      {/* Stock Form */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 md:p-6">

        <h2 className="text-lg md:text-xl font-bold text-white mb-6">
          Receive Inventory
        </h2>

        <StockInForm />

      </div>

      {/* Stock Table */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 md:p-6">

        <h2 className="text-lg md:text-xl font-bold text-white mb-6">
          Recent Stock Entries
        </h2>

        <StockTable />

      </div>

    </div>
  );
}