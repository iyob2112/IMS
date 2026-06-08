"use client";

import {
  FileText,
  Search,
  Eye,
  Printer,
  Download,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function InvoicesPage() {
  const invoices = [
    {
      id: "INV-1001",
      customer: "John Doe",
      total: "$1,250",
      paid: "$1,250",
      status: "Paid",
      date: "2026-06-08",
    },
    {
      id: "INV-1002",
      customer: "Sarah Smith",
      total: "$850",
      paid: "$500",
      status: "Partial",
      date: "2026-06-07",
    },
    {
      id: "INV-1003",
      customer: "Michael Johnson",
      total: "$2,100",
      paid: "$0",
      status: "Unpaid",
      date: "2026-06-05",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <FileText className="text-cyan-400" />
            Invoice Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage customer invoices and payments
          </p>
        </div>

        <button className="bg-cyan-600 px-6 py-3 rounded-xl">
          Create Invoice
        </button>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Total Invoices</p>
          <h2 className="text-4xl font-bold mt-2">1,245</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Paid</p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">
            1,050
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Pending</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            120
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Overdue</p>
          <h2 className="text-4xl font-bold text-red-400 mt-2">
            75
          </h2>
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
            placeholder="Search invoice..."
            className="w-full bg-[#0B1120] rounded-xl py-3 pl-12"
          />

        </div>

      </div>

      {/* Invoice Table */}
      <div className="bg-[#131C31] rounded-3xl overflow-hidden">

        <table className="w-full hidden lg:table">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">Invoice</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Paid</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-semibold">
                  {invoice.id}
                </td>

                <td className="p-4">
                  {invoice.customer}
                </td>

                <td className="p-4 text-green-400">
                  {invoice.total}
                </td>

                <td className="p-4">
                  {invoice.paid}
                </td>

                <td className="p-4">

                  {invoice.status === "Paid" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                      Paid
                    </span>
                  )}

                  {invoice.status === "Partial" && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                      Partial
                    </span>
                  )}

                  {invoice.status === "Unpaid" && (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">
                      Unpaid
                    </span>
                  )}

                </td>

                <td className="p-4">
                  {invoice.date}
                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <button className="bg-cyan-600 p-2 rounded-lg">
                      <Eye size={16} />
                    </button>

                    <button className="bg-green-600 p-2 rounded-lg">
                      <Printer size={16} />
                    </button>

                    <button className="bg-orange-600 p-2 rounded-lg">
                      <Download size={16} />
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