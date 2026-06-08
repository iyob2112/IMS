"use client";

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

                    <button className="bg-cyan-600 px-3 py-1 rounded-lg">
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

    </div>
  );
}