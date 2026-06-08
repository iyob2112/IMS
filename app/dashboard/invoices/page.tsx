"use client";

import Link from "next/link";
import { Plus, FileText, Printer } from "lucide-react";

const invoices = [
  {
    id: "INV-001",
    customer: "John Doe",
    total: "$1200",
    status: "Paid",
    date: "2026-06-08",
  },
  {
    id: "INV-002",
    customer: "Sarah",
    total: "$850",
    status: "Pending",
    date: "2026-06-08",
  },
];

export default function InvoicesPage() {
  return (
    <div className="space-y-6 pt-10 p-3 text-white  h-full min-h-screen">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Invoices
          </h1>

          <p className="text-slate-400">
            Manage customer invoices
          </p>
        </div>

        <Link
          href="/dashboard/invoices/create"
          className="bg-cyan-600 px-5 py-3 rounded-xl flex items-center gap-2 text-white"
        >
          <Plus size={18} />
          New Invoice
        </Link>

      </div>

      <div className="bg-[#131C31] rounded-3xl border border-slate-800 overflow-hidden">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-left">Invoice</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-slate-800"
              >
                <td className="p-4 text-white">
                  {invoice.id}
                </td>

                <td className="p-4 text-white">
                  {invoice.customer}
                </td>

                <td className="p-4 text-white">
                  {invoice.date}
                </td>

                <td className="p-4 text-green-400">
                  {invoice.total}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      invoice.status === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <Link
                      href="/dashboard/invoices/details"
                      className="bg-slate-800 p-2 rounded-lg"
                    >
                      <FileText size={16} />
                    </Link>

                    <button className="bg-slate-800 p-2 rounded-lg">
                      <Printer size={16} />
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