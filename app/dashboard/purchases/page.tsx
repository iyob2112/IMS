"use client";

import { useState } from "react";
import {
  Plus,
  Receipt,
  DollarSign,
  Clock,
} from "lucide-react";

import { purchases } from "@/data/purchases";

import PurchaseTable from "@/components/purchases/PurchaseTable";
import AddPurchaseModal from "@/components/purchases/AddPurchaseModal";

export default function PurchasesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] pt-10 p-3">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Purchases
          </h1>

          <p className="text-slate-400">
            Manage supplier purchases
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-xl text-white flex items-center gap-2"
        >
          <Plus size={18} />
          Add Purchase
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Total Purchases
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                128
              </h2>
            </div>

            <Receipt
              size={30}
              className="text-cyan-400"
            />
          </div>

        </div>

        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Purchase Value
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                $25,480
              </h2>
            </div>

            <DollarSign
              size={30}
              className="text-green-400"
            />

          </div>

        </div>

        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Pending Orders
              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                12
              </h2>
            </div>

            <Clock
              size={30}
              className="text-yellow-400"
            />

          </div>

        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 mb-6">

        <input
          placeholder="Search purchases..."
          className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
        />

      </div>

      {/* Table */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

        <PurchaseTable purchases={purchases} />

      </div>

      <AddPurchaseModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}