"use client";

import {
  RotateCcw,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";

export default function SalesReturnsPage() {
  const returns = [
    {
      id: "RET-1001",
      invoice: "INV-1001",
      customer: "John Doe",
      product: "Laptop",
      amount: "$1200",
      reason: "Defective",
      status: "Approved",
      date: "2026-06-08",
    },
    {
      id: "RET-1002",
      invoice: "INV-1002",
      customer: "Sarah Smith",
      product: "Mouse",
      amount: "$50",
      reason: "Wrong Item",
      status: "Pending",
      date: "2026-06-07",
    },
    {
      id: "RET-1003",
      invoice: "INV-1003",
      customer: "Michael Johnson",
      product: "Keyboard",
      amount: "$80",
      reason: "Damaged",
      status: "Rejected",
      date: "2026-06-06",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <RotateCcw className="text-orange-400" />
          Sales Returns
        </h1>

        <p className="text-slate-400 mt-2">
          Manage product returns and customer refunds
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Total Returns</p>
          <h2 className="text-4xl font-bold mt-2">234</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Approved</p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">180</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Pending</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">34</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Rejected</p>
          <h2 className="text-4xl font-bold text-red-400 mt-2">20</h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] p-6 rounded-3xl">
        <div className="relative">

          <Search
            className="absolute left-4 top-4 text-slate-400"
            size={18}
          />

          <input
            placeholder="Search return..."
            className="w-full bg-[#0B1120] py-3 pl-12 rounded-xl"
          />

        </div>
      </div>

      {/* Returns Table */}
      <div className="bg-[#131C31] rounded-3xl overflow-hidden">

        <table className="w-full hidden lg:table">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">Return ID</th>
              <th className="p-4 text-left">Invoice</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Reason</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>

            {returns.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.invoice}</td>
                <td className="p-4">{item.customer}</td>
                <td className="p-4">{item.product}</td>
                <td className="p-4 text-green-400">{item.amount}</td>
                <td className="p-4">{item.reason}</td>

                <td className="p-4">

                  {item.status === "Approved" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                      Approved
                    </span>
                  )}

                  {item.status === "Pending" && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                      Pending
                    </span>
                  )}

                  {item.status === "Rejected" && (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">
                      Rejected
                    </span>
                  )}

                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button className="bg-cyan-600 p-2 rounded-lg">
                      <Eye size={16} />
                    </button>

                    <button className="bg-green-600 p-2 rounded-lg">
                      <CheckCircle size={16} />
                    </button>

                    <button className="bg-red-600 p-2 rounded-lg">
                      <XCircle size={16} />
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