"use client";

import { useState } from "react";
import {
  Plus,
  Warehouse,
  AlertTriangle,
  Package,
  DollarSign,
} from "lucide-react";

import { inventory } from "@/data/inventory";

import InventoryTable from "@/components/inventory/InventoryTable";
import AddStockModal from "@/components/inventory/AddStockModal";

export default function InventoryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] pt-10 p-3 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Inventory
          </h1>

          <p className="text-slate-400">
            Manage warehouse stock
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl flex gap-2 items-center"
        >
          <Plus size={18} />
          Add Stock
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Total Products
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                150
              </h2>
            </div>

            <Package
              size={30}
              className="text-cyan-400"
            />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">
          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Inventory Value
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                $85K
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
                Low Stock
              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                8
              </h2>
            </div>

            <AlertTriangle
              size={30}
              className="text-yellow-400"
            />

          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">
          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Warehouses
              </p>

              <h2 className="text-4xl font-bold text-cyan-400 mt-2">
                3
              </h2>
            </div>

            <Warehouse
              size={30}
              className="text-cyan-400"
            />

          </div>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6 mb-6">

        <input
          placeholder="Search inventory..."
          className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
        />

      </div>

      {/* Table */}
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

        <InventoryTable inventory={inventory} />

      </div>

      <AddStockModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}