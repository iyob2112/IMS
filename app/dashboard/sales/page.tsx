"use client";
import Link from "next/link";
import {
  ShoppingCart,
  DollarSign,
  Users,
  Receipt,
  TrendingUp,
  RotateCcw,
} from "lucide-react";

export default function SalesPage() {
  const recentSales = [
    {
      invoice: "INV-1001",
      customer: "John Doe",
      amount: "$1,250",
      status: "Paid",
    },
    {
      invoice: "INV-1002",
      customer: "Michael",
      amount: "$450",
      status: "Pending",
    },
    {
      invoice: "INV-1003",
      customer: "Sarah",
      amount: "$820",
      status: "Paid",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Sales Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor revenue, invoices, customers and sales performance
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Today`s Sales</p>
              <h2 className="text-3xl font-bold mt-2">$2,540</h2>
            </div>
            <DollarSign className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Orders</p>
              <h2 className="text-3xl font-bold mt-2">84</h2>
            </div>
            <ShoppingCart className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Customers</p>
              <h2 className="text-3xl font-bold mt-2">420</h2>
            </div>
            <Users className="text-violet-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Invoices</p>
              <h2 className="text-3xl font-bold mt-2">115</h2>
            </div>
            <Receipt className="text-orange-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Profit</p>
              <h2 className="text-3xl font-bold mt-2">$8,200</h2>
            </div>
            <TrendingUp className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Returns</p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>
            <RotateCcw className="text-red-400" />
          </div>
        </div>

      </div>

      {/* Revenue Banner */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 rounded-3xl p-8">

        <p className="text-white/80">
          Monthly Revenue
        </p>

        <h2 className="text-5xl font-bold mt-2">
          $52,480
        </h2>

        <p className="text-green-200 mt-3">
          +18.5% from last month
        </p>

      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">

        {/* <button className="bg-cyan-600 p-4 rounded-2xl">
          New Sale
        </button>

        <button className="bg-violet-600 p-4 rounded-2xl">
          POS Terminal
        </button>

        <button className="bg-green-600 p-4 rounded-2xl">
          Create Invoice
        </button>

        <button className="bg-orange-600 p-4 rounded-2xl">
          Customer Payment
        </button> */}
        

{/* <Link className="bg-cyan-600 p-4 rounded-2xl" href="/dashboard/sales/pos">
  POS Terminal
</Link>

<Link className="bg-violet-600 p-4 rounded-2xl" href="/dashboard/sales/customers">
  Customers
</Link>

<Link className="bg-green-600 p-4 rounded-2xl" href="/dashboard/sales/invoices">
  Invoices
</Link>

<Link className="bg-orange-600 p-4 rounded-2xl" href="/dashboard/sales/payments">
  Payments
</Link>

<Link className="bg-red-600 p-4 rounded-2xl" href="/dashboard/sales/returns">
  Returns
</Link>

<Link className="bg-blue-600 p-4 rounded-2xl" href="/dashboard/sales/analytics">
  Analytics
</Link> */}

      </div>

      {/* Recent Sales */}
      <div className="bg-[#131C31] rounded-3xl p-6">

        <h2 className="text-xl font-bold mb-6">
          Recent Sales
        </h2>

        <div className="space-y-4">

          {recentSales.map((sale) => (
            <div
              key={sale.invoice}
              className="bg-[#1A2742] rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {sale.invoice}
                </p>

                <p className="text-slate-400 text-sm">
                  {sale.customer}
                </p>
              </div>

              <div className="text-right">

                <p className="text-green-400 font-bold">
                  {sale.amount}
                </p>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    sale.status === "Paid"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {sale.status}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}