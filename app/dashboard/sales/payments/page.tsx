"use client";

import {
  Wallet,
  Search,
  DollarSign,
  Building2,
  Smartphone,
  Receipt,
  Eye,
} from "lucide-react";
import { useState } from "react";
export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-001",
      customer: "John Doe",
      invoice: "INV-1001",
      amount: "$500",
      method: "Cash",
      status: "Paid",
      date: "2026-06-08",
    },
    {
      id: "PAY-002",
      customer: "Sarah Smith",
      invoice: "INV-1002",
      amount: "$350",
      method: "Bank",
      status: "Partial",
      date: "2026-06-07",
    },
    {
      id: "PAY-003",
      customer: "Michael Johnson",
      invoice: "INV-1003",
      amount: "$120",
      method: "Mobile Money",
      status: "Pending",
      date: "2026-06-06",
    },
  ];
const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Wallet className="text-green-400" />
          Payment Management
        </h1>

        <p className="text-slate-400 mt-2">
          Manage customer payments and outstanding balances
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Collected Today</p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">
            $4,250
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Outstanding Due</p>
          <h2 className="text-4xl font-bold text-red-400 mt-2">
            $8,540
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Partial Payments</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            42
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Receipts Issued</p>
          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            1,240
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
            placeholder="Search payment..."
            className="w-full bg-[#0B1120] py-3 pl-12 rounded-xl"
          />

        </div>

      </div>
{/* Desktop View */}
      {/* Table */}
      <div className="bg-[#131C31] rounded-3xl overflow-hidden">

        <table className="w-full hidden lg:table">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">Payment ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Invoice</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Method</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">{payment.id}</td>
                <td className="p-4">{payment.customer}</td>
                <td className="p-4">{payment.invoice}</td>

                <td className="p-4 text-green-400">
                  {payment.amount}
                </td>

                <td className="p-4">
                  {payment.method}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      payment.status === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : payment.status === "Partial"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {payment.status}
                  </span>

                </td>

                <td className="p-4">
                  <div className="flex gap-2">

              <button
  onClick={() => setSelectedPayment(payment)}
  className="bg-cyan-600 p-2 rounded-lg"
>
  <Eye size={16} />
</button>

                    <button className="bg-green-600 p-2 rounded-lg">
                      <Receipt size={16} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      

      </div>
      {/* Mobile View */}
<div className="lg:hidden space-y-4">
  {payments.map((payment) => (
    <div
      key={payment.id}
      className="bg-[#131C31] border border-slate-800 rounded-2xl p-4 space-y-2"
    >
      {/* Top row */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{payment.id}</h2>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            payment.status === "Paid"
              ? "bg-green-500/20 text-green-400"
              : payment.status === "Partial"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {payment.status}
        </span>
      </div>

      <p className="text-slate-400 text-sm">{payment.customer}</p>

      <div className="flex justify-between text-sm">
        <span>Invoice: {payment.invoice}</span>
        <span className="text-green-400">{payment.amount}</span>
      </div>

      <div className="flex justify-between text-xs text-slate-400">
        <span>{payment.method}</span>
        <span>{payment.date}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <button
          onClick={() => setSelectedPayment(payment)}
          className="bg-cyan-600 p-2 rounded-lg"
        >
          <Eye size={16} />
        </button>

        <button className="bg-green-600 p-2 rounded-lg">
          <Receipt size={16} />
        </button>
      </div>
    </div>
  ))}
</div>
{selectedPayment && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    
    <div className="bg-[#131C31] w-full max-w-lg rounded-2xl p-6 border border-slate-800 relative">

      {/* Close button */}
      <button
        onClick={() => setSelectedPayment(null)}
        className="absolute top-3 right-3 text-slate-400 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">
        Payment Details
      </h2>

      <div className="space-y-3 text-slate-300">

        <p><span className="text-slate-400">Payment ID:</span> {selectedPayment.id}</p>
        <p><span className="text-slate-400">Customer:</span> {selectedPayment.customer}</p>
        <p><span className="text-slate-400">Invoice:</span> {selectedPayment.invoice}</p>
        <p><span className="text-slate-400">Amount:</span> {selectedPayment.amount}</p>
        <p><span className="text-slate-400">Method:</span> {selectedPayment.method}</p>
        <p><span className="text-slate-400">Status:</span> {selectedPayment.status}</p>
        <p><span className="text-slate-400">Date:</span> {selectedPayment.date}</p>

      </div>

    </div>

  </div>
)}
    </div>
  );
}