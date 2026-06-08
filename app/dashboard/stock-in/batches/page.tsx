"use client";

import {
  Layers3,
  Package,
  AlertTriangle,
  Calendar,
  Search,
  Download,


} from "lucide-react";
import Link from "next/link";
export default function BatchPage() {
  const batches = [
    {
      id: "BT-1001",
      product: "Printer Ink",
      warehouse: "Main Warehouse",
      qty: 120,
      mfg: "2026-01-10",
      expiry: "2027-01-10",
      status: "Active",
    },
    {
      id: "BT-1002",
      product: "USB Cable",
      warehouse: "Branch A",
      qty: 50,
      mfg: "2026-02-15",
      expiry: "2026-08-15",
      status: "Expiring Soon",
    },
    {
      id: "BT-1003",
      product: "Office Paper",
      warehouse: "Main Warehouse",
      qty: 0,
      mfg: "2025-01-01",
      expiry: "2026-01-01",
      status: "Expired",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Layers3 className="text-orange-400" />
          Batch Management
        </h1>

        <p className="text-slate-400 mt-2">
          Track inventory batches and expiry dates
        </p>
      </div>

      {/* KPI */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Total Batches</p>
              <h2 className="text-4xl font-bold mt-2">245</h2>
            </div>
            <Layers3 className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Active</p>
              <h2 className="text-4xl font-bold text-green-400 mt-2">
                210
              </h2>
            </div>
            <Package className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Expiring Soon</p>
              <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                28
              </h2>
            </div>
            <AlertTriangle className="text-yellow-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Expired</p>
              <h2 className="text-4xl font-bold text-red-400 mt-2">
                7
              </h2>
            </div>
            <Calendar className="text-red-400" />
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

        <div className="flex flex-col md:flex-row gap-4 justify-between">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              placeholder="Search Batch..."
              className="w-full bg-[#0B1120] border border-slate-700 rounded-xl pl-12 py-3"
            />

          </div>

          <div className="flex gap-3">

            <select className="bg-[#0B1120] border border-slate-700 rounded-xl px-4">
              <option>All Status</option>
              <option>Active</option>
              <option>Expiring Soon</option>
              <option>Expired</option>
            </select>

            <button className="bg-cyan-600 px-5 rounded-xl flex items-center gap-2">
              <Download size={18} />
              Export
            </button>

          </div>

        </div>

      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-[#131C31] rounded-3xl overflow-hidden border border-slate-800">

        <table className="w-full">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">Batch</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Warehouse</th>
              <th className="p-4 text-left">Qty</th>
              <th className="p-4 text-left">MFG</th>
              <th className="p-4 text-left">Expiry</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {batches.map((batch) => (
              <tr
                key={batch.id}
                className="border-t border-slate-800 hover:bg-[#1A2742]"
              >
                <td className="p-4">{batch.id}</td>
                <td className="p-4">{batch.product}</td>
                <td className="p-4">{batch.warehouse}</td>
                <td className="p-4">{batch.qty}</td>
                <td className="p-4">{batch.mfg}</td>
                <td className="p-4">{batch.expiry}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      batch.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : batch.status === "Expiring Soon"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {batch.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
<Link
   href={`/dashboard/stock-in/batches/${batch.id}`}
  className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-xl flex items-center "
>
  View
</Link>
                    {/* <button className="bg-cyan-600 px-3 py-1 rounded-lg">
                      View
                    </button> */}

                    <button className="bg-indigo-600 px-3 py-1 rounded-lg">
                      Edit
                    </button>

                    <button className="bg-orange-600 px-3 py-1 rounded-lg">
                      Track
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}