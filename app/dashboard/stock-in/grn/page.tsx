"use client";
import { useState } from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Download,
} from "lucide-react";

export default function GrnPage() {
  const grns = [
    {
      id: "GRN-1001",
      supplier: "Tech Distributor",
      warehouse: "Main Warehouse",
      products: 12,
      total: "$8,500",
      status: "Approved",
      date: "2026-06-08",
    },
    {
      id: "GRN-1002",
      supplier: "Global Electronics",
      warehouse: "Branch Warehouse",
      products: 6,
      total: "$4,200",
      status: "Pending",
      date: "2026-06-07",
    },
    {
      id: "GRN-1003",
      supplier: "Office Supplies Co",
      warehouse: "Main Warehouse",
      products: 4,
      total: "$2,300",
      status: "Rejected",
      date: "2026-06-06",
    },
  ];
const [selectedGrn, setSelectedGrn] =
  useState<Grn | null>(null);
const [openView, setOpenView] = useState(false);
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <FileText className="text-cyan-400" />
          Goods Received Notes
        </h1>

        <p className="text-slate-400 mt-2">
          Manage and track all inventory receiving documents
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Total GRNs</p>
              <h2 className="text-4xl font-bold mt-2">156</h2>
            </div>
            <FileText className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Approved</p>
              <h2 className="text-4xl font-bold text-green-400 mt-2">
                132
              </h2>
            </div>
            <CheckCircle className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Pending</p>
              <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                18
              </h2>
            </div>
            <Clock className="text-yellow-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Rejected</p>
              <h2 className="text-4xl font-bold text-red-400 mt-2">
                6
              </h2>
            </div>
            <XCircle className="text-red-400" />
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

        <div className="flex flex-col md:flex-row gap-4 justify-between">

          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={18}
            />

            <input
              placeholder="Search GRN..."
              className="w-full bg-[#0B1120] border border-slate-700 rounded-xl pl-12 py-3"
            />
          </div>

          <div className="flex gap-3">

            <select className="bg-[#0B1120] border border-slate-700 rounded-xl px-4">
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
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
              <th className="p-4 text-left">GRN</th>
              <th className="p-4 text-left">Supplier</th>
              <th className="p-4 text-left">Warehouse</th>
              <th className="p-4 text-left">Products</th>
              <th className="p-4 text-left">Total Cost</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {grns.map((grn) => (
              <tr
                key={grn.id}
                className="border-t border-slate-800 hover:bg-[#1A2742]"
              >
                <td className="p-4">{grn.id}</td>
                <td className="p-4">{grn.supplier}</td>
                <td className="p-4">{grn.warehouse}</td>
                <td className="p-4">{grn.products}</td>
                <td className="p-4 text-green-400">{grn.total}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      grn.status === "Approved"
                        ? "bg-green-500/20 text-green-400"
                        : grn.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {grn.status}
                  </span>
                </td>

                <td className="p-4">{grn.date}</td>

                <td className="p-4">
                  <div className="flex gap-2">

    <button
  onClick={() => {
    setSelectedGrn(grn);
    setOpenView(true);
  }}
  className="bg-cyan-600 px-3 py-1 rounded-lg"
>
  View
</button>

                    <button className="bg-violet-600 px-3 py-1 rounded-lg">
                      Print
                    </button>

                    <button className="bg-green-600 px-3 py-1 rounded-lg">
                      PDF
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
{openView && selectedGrn && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">

      <button
        onClick={() => setOpenView(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-white">
        Goods Received Note
      </h2>

      <p className="text-slate-400 mt-1 mb-6">
        {selectedGrn.id}
      </p>

      {/* Summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-[#0B1120] p-4 rounded-2xl">
          <p className="text-slate-500 text-sm">
            Supplier
          </p>
          <h3 className="font-semibold mt-2">
            {selectedGrn.supplier}
          </h3>
        </div>

        <div className="bg-[#0B1120] p-4 rounded-2xl">
          <p className="text-slate-500 text-sm">
            Warehouse
          </p>
          <h3 className="font-semibold mt-2">
            {selectedGrn.warehouse}
          </h3>
        </div>

        <div className="bg-[#0B1120] p-4 rounded-2xl">
          <p className="text-slate-500 text-sm">
            Products
          </p>
          <h3 className="font-semibold mt-2">
            {selectedGrn.products}
          </h3>
        </div>

        <div className="bg-[#0B1120] p-4 rounded-2xl">
          <p className="text-slate-500 text-sm">
            Total Cost
          </p>
          <h3 className="font-semibold text-green-400 mt-2">
            {selectedGrn.total}
          </h3>
        </div>

      </div>

      {/* Details */}
      <div className="bg-[#0B1120] rounded-2xl p-6 border border-slate-800">

        <h3 className="text-xl font-semibold mb-4">
          GRN Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <p className="text-slate-500">
              GRN Number
            </p>
            <p>{selectedGrn.id}</p>
          </div>

          <div>
            <p className="text-slate-500">
              Date
            </p>
            <p>{selectedGrn.date}</p>
          </div>

          <div>
            <p className="text-slate-500">
              Status
            </p>

            <span
              className={`px-3 py-1 rounded-full text-xs ${
                selectedGrn.status === "Approved"
                  ? "bg-green-500/20 text-green-400"
                  : selectedGrn.status === "Pending"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {selectedGrn.status}
            </span>
          </div>

          <div>
            <p className="text-slate-500">
              Warehouse
            </p>
            <p>{selectedGrn.warehouse}</p>
          </div>

        </div>

      </div>

      {/* Products Table */}
      <div className="mt-6 bg-[#0B1120] rounded-2xl p-6 border border-slate-800">

        <h3 className="text-xl font-semibold mb-4">
          Received Products
        </h3>

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left p-3">
                Product
              </th>
              <th className="text-left p-3">
                Qty
              </th>
              <th className="text-left p-3">
                Cost
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">
                Gaming Laptop
              </td>
              <td className="p-3">
                12
              </td>
              <td className="p-3 text-green-400">
                $8,500
              </td>
            </tr>
          </tbody>

        </table>

      </div>

      <div className="flex gap-3 mt-6">

        <button className="flex-1 bg-violet-600 p-3 rounded-xl">
          Print GRN
        </button>

        <button className="flex-1 bg-green-600 p-3 rounded-xl">
          Export PDF
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}