"use client";
import Link from "next/link";
import {
  FileText,
  Search,
  Eye,
  Printer,
  Download,
  CheckCircle,
  Clock,

} from "lucide-react";
import { useState } from "react";
import InvoiceDetailsPage from "@/app/dashboard/sales/invoices/details/page";
import CreateInvoicePage from "@/app/dashboard/sales/invoices/create/page";
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
const [viewOpen, setViewOpen] = useState(false);
const [createOpen, setCreateOpen] = useState(false);
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
 {/* <Link
                      href="/dashboard/sales/invoices/create"
                      className="bg-cyan-600 px-6 py-3 rounded-xl"
                    >
                             Create Invoice
                    </Link> */}

        <button 
          onClick={() => {

    setCreateOpen(true);
  }}
        className="bg-cyan-600 px-6 py-3 rounded-xl">
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
  {/* Desktop Table */}
<div className="bg-[#131C31] rounded-3xl overflow-hidden hidden lg:block">
  <table className="w-full">
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
        <tr key={invoice.id} className="border-t border-slate-800">
          <td className="p-4 font-semibold">{invoice.id}</td>
          <td className="p-4">{invoice.customer}</td>
          <td className="p-4 text-green-400">{invoice.total}</td>
          <td className="p-4">{invoice.paid}</td>
          <td className="p-4">{invoice.status}</td>
          <td className="p-4">{invoice.date}</td>
          <td className="p-4">
            <div className="flex gap-2">
              {/* <Link href="/dashboard/sales/invoices/details" className="bg-cyan-600 p-2 rounded-lg">
                <Eye size={16} />
              </Link> */}
         <button
  onClick={() => {

    setViewOpen(true);
  }}
  className="bg-cyan-600 p-2 rounded-lg"
>
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
{/* Mobile Cards */}
<div className="lg:hidden space-y-4">
  {invoices.map((invoice) => (
    <div
      key={invoice.id}
      className="bg-[#131C31] p-4 rounded-2xl border border-slate-800"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">{invoice.id}</h2>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            invoice.status === "Paid"
              ? "bg-green-500/20 text-green-400"
              : invoice.status === "Partial"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {invoice.status}
        </span>
      </div>

      <p className="text-slate-400 text-sm">{invoice.customer}</p>

      <div className="flex justify-between mt-3 text-sm">
        <span>Total: {invoice.total}</span>
        <span>Paid: {invoice.paid}</span>
      </div>

      <div className="flex justify-between mt-3 text-xs text-slate-400">
        <span>{invoice.date}</span>

        <div className="flex gap-2">
         <button
  onClick={() => {

    setViewOpen(true);
  }}
  className="bg-cyan-600 p-2 rounded-lg"
>
  <Eye size={16} />
</button>

          <button className="bg-green-600 p-2 rounded-lg">
            <Printer size={14} />
          </button>

          <button className="bg-orange-600 p-2 rounded-lg">
            <Download size={14} />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
<InvoiceDetailsPage
        open={viewOpen}
        onClose={() => setViewOpen(false)}
      />
<CreateInvoicePage
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />
    </div>
  );
}