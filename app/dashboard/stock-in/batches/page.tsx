"use client";
import {

  Warehouse,
  ArrowRightLeft,
  ShoppingCart,
  RotateCcw,

  Clock3,
} from "lucide-react";
import {
  Layers3,
  Package,
  AlertTriangle,
  Calendar,
  Search,
  Download,


} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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
    const movements = [
    {
      type: "Stock In",
      qty: "+100",
      warehouse: "Main Warehouse",
      date: "2026-06-01",
    },
    {
      type: "Transfer",
      qty: "-20",
      warehouse: "Branch A",
      date: "2026-06-04",
    },
    {
      type: "Sale",
      qty: "-15",
      warehouse: "POS Store",
      date: "2026-06-05",
    },
    {
      type: "Return",
      qty: "+5",
      warehouse: "Main Warehouse",
      date: "2026-06-07",
    },
  ];
  type Batch = (typeof batches)[number];
const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);
const [openView, setOpenView] = useState(false);
const [openEdit, setOpenEdit] = useState(false);
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

            {/* <button className="bg-cyan-600 px-5 rounded-xl flex items-center gap-2">
              <Download size={18} />
              Export
            </button> */}

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
<button
  onClick={() => {
    setSelectedBatch(batch);
    setOpenView(true);
  }}
  className="bg-cyan-600 px-5 py-2 rounded-xl"
>
  View
</button>
                    {/* <button className="bg-cyan-600 px-3 py-1 rounded-lg">
                      View
                    </button> */}

                <button
  onClick={() => {
    setSelectedBatch(batch);
    setOpenEdit(true);
  }}
  className="bg-indigo-600 px-3 py-1 rounded-lg"
>
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
{openEdit && selectedBatch && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-3xl rounded-3xl p-6 relative">

      <button
        onClick={() => setOpenEdit(false)}
        className="absolute top-4 right-4 text-slate-400"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6">
        Edit Batch
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {/* Product */}
        <div>
          <label className="text-sm text-slate-400">Product</label>
          <input
            value={selectedBatch.product}
            readOnly
            className="w-full mt-2 p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-slate-400"
          />
        </div>

        {/* Warehouse */}
        <div>
          <label className="text-sm text-slate-400">Warehouse</label>
          <select
            value={selectedBatch.warehouse}
            onChange={(e) =>
              setSelectedBatch({
                ...selectedBatch,
                warehouse: e.target.value,
              })
            }
            className="w-full mt-2 p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          >
            <option>Main Warehouse</option>
            <option>Branch A</option>
          </select>
        </div>

        {/* Qty */}
        <div>
          <label className="text-sm text-slate-400">Quantity</label>
          <input
            type="number"
            value={selectedBatch.qty}
            onChange={(e) =>
              setSelectedBatch({
                ...selectedBatch,
                qty: Number(e.target.value),
              })
            }
            className="w-full mt-2 p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          />
        </div>

        {/* Status */}
        <div>
          <label className="text-sm text-slate-400">Status</label>
          <select
            value={selectedBatch.status}
            onChange={(e) =>
              setSelectedBatch({
                ...selectedBatch,
                status: e.target.value,
              })
            }
            className="w-full mt-2 p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          >
            <option>Active</option>
            <option>Expiring Soon</option>
            <option>Expired</option>
          </select>
        </div>

      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-6">

        <button
          onClick={() => {
            console.log("Updated Batch:", selectedBatch);
            setOpenEdit(false);
          }}
          className="flex-1 bg-indigo-600 p-3 rounded-xl"
        >
          Save
        </button>

        <button
          onClick={() => setOpenEdit(false)}
          className="flex-1 bg-slate-800 p-3 rounded-xl"
        >
          Cancel
        </button>

      </div>

    </div>
  </div>
)}
{openView && selectedBatch && (
     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">

 <button
        onClick={() => setOpenView(false)}
        className="absolute top-4 right-4 text-slate-400"
      >
        ✕
      </button>
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Batch BT-1001
        </h1>

        <p className="text-slate-400 mt-2">
          Complete batch lifecycle tracking
        </p>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between bg-[#1A2742] rounded-xl p-4 flex ">
            <div>
              <p className="text-slate-400">Current Qty</p>
              <h2 className="text-4xl font-bold mt-2">
                70
              </h2>
            </div>

            <Package className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl  ">
          <div className="flex justify-between bg-[#1A2742] rounded-xl p-4 flex">
            <div>
              <p className="text-slate-400">Warehouse</p>
              <h2 className="text-xl font-bold mt-2">
                Main
              </h2>
            </div>

            <Warehouse className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between bg-[#1A2742] rounded-xl p-4 flex ">
            <div>
              <p className="text-slate-400">Expiry Date</p>
              <h2 className="text-xl font-bold mt-2">
                2027-01-10
              </h2>
            </div>

            <Calendar className="text-orange-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between bg-[#1A2742] rounded-xl p-4 flex ">
            <div>
              <p className="text-slate-400">
                Days Remaining
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                216
              </h2>
            </div>

            <Clock3 className="text-green-400" />
          </div>
        </div>

      </div>

      {/* Batch Information */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <h2 className="text-xl font-bold mb-6">
          Batch Information
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 bg-[#1A2742] rounded-xl p-4 flex">

          <div>
            <p className="text-slate-400">Batch Number</p>
            <p className="font-semibold mt-1">BT-1001</p>
          </div>

          <div>
            <p className="text-slate-400">Product</p>
            <p className="font-semibold mt-1">
              Printer Ink
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              Manufacturing Date
            </p>
            <p className="font-semibold mt-1">
              2026-01-10
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              Supplier
            </p>
            <p className="font-semibold mt-1">
              Tech Distributor
            </p>
          </div>

        </div>

      </div>

      {/* Timeline */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <h2 className="text-xl font-bold mb-6">
          Batch Movement Timeline
        </h2>

        <div className="space-y-4">

          {movements.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A2742] rounded-xl p-4 flex justify-between"
            >
              <div>

                <p className="font-semibold">
                  {item.type}
                </p>

                <p className="text-slate-400 text-sm">
                  {item.warehouse}
                </p>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  {item.qty}
                </p>

                <p className="text-slate-400 text-sm">
                  {item.date}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className=" p-6 rounded-3xl bg-[#1A2742] ">
          <ShoppingCart className="text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold">15</h3>
          <p className="text-slate-400">
            Sold
          </p>
        </div>

        <div className=" bg-[#1A2742] p-6 rounded-3xl">
          <ArrowRightLeft className="text-violet-400 mb-4" />
          <h3 className="text-3xl font-bold">20</h3>
          <p className="text-slate-400">
            Transferred
          </p>
        </div>

        <div className=" bg-[#1A2742] p-6 rounded-3xl">
          <RotateCcw className="text-green-400 mb-4" />
          <h3 className="text-3xl font-bold">5</h3>
          <p className="text-slate-400">
            Returned
          </p>
        </div>

        <div className=" bg-[#1A2742] p-6 rounded-3xl">
          <AlertTriangle className="text-orange-400 mb-4" />
          <h3 className="text-3xl font-bold">0</h3>
          <p className="text-slate-400">
            Damaged
          </p>
        </div>

      </div>

    </div>
    </div>
)}
    </div>
  );
}