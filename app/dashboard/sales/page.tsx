"use client";

import Link from "next/link";
import {
  ShoppingCart,
  DollarSign,
  Users,
  Receipt,
  TrendingUp,
  RotateCcw,
  CreditCard,
  Wallet,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function SalesPage() {
  const recentSales = [
    { invoice: "INV-1001", customer: "John Doe", amount: 1250, status: "Paid" },
    { invoice: "INV-1002", customer: "Michael Smith", amount: 450, status: "Pending" },
    { invoice: "INV-1003", customer: "Sarah Johnson", amount: 820, status: "Paid" },
    { invoice: "INV-1004", customer: "David Brown", amount: 980, status: "Paid" },
  ];

  const salesData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 15000 },
    { month: "Mar", sales: 18000 },
    { month: "Apr", sales: 16000 },
    { month: "May", sales: 22000 },
    { month: "Jun", sales: 25000 },
  ];

  const paymentData = [
    { name: "Cash", value: 45 },
    { name: "Card", value: 35 },
    { name: "Mobile Money", value: 20 },
  ];

  const COLORS = ["#22C55E", "#3B82F6", "#A855F7"];

  const topProducts = [
    { name: "iPhone 15", sold: 250 },
    { name: "Samsung S24", sold: 190 },
    { name: "AirPods Pro", sold: 140 },
    { name: "MacBook Air", sold: 120 },
  ];

  const topCustomers = [
    { name: "John Doe", spent: 5200 },
    { name: "Sarah Johnson", spent: 4100 },
    { name: "Michael Smith", spent: 3900 },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Sales Dashboard</h1>
        <p className="text-slate-400 mt-2">
          Monitor revenue, invoices, customers and sales performance
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Today’s Sales</p>
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
        <p className="text-white/80">Monthly Revenue</p>
        <h2 className="text-5xl font-bold mt-2">$52,480</h2>
        <p className="text-green-200 mt-3">+18.5% from last month</p>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Sales Trend */}
        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">Sales Trend</h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid stroke="#334155" />
                <XAxis dataKey="month" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#22C55E"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">Payment Methods</h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  label
                >
                  {paymentData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        <Link href="#" className="bg-[#131C31] p-5 rounded-2xl text-center hover:bg-[#1A2742]">
          New Sale
        </Link>
        <Link href="#" className="bg-[#131C31] p-5 rounded-2xl text-center hover:bg-[#1A2742]">
          Customers
        </Link>
        <Link href="#" className="bg-[#131C31] p-5 rounded-2xl text-center hover:bg-[#1A2742]">
          Invoices
        </Link>
        <Link href="#" className="bg-[#131C31] p-5 rounded-2xl text-center hover:bg-[#1A2742]">
          Reports
        </Link>
      </div>

      {/* Top Products & Customers */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((p) => (
              <div key={p.name} className="flex justify-between">
                <span>{p.name}</span>
                <span className="text-green-400">{p.sold} Sold</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">Top Customers</h2>
          <div className="space-y-4">
            {topCustomers.map((c) => (
              <div key={c.name} className="flex justify-between">
                <span>{c.name}</span>
                <span className="text-cyan-400">${c.spent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-[#131C31] rounded-3xl p-6">
        <h2 className="text-xl font-bold mb-6">Recent Sales</h2>

        <div className="space-y-4">
          {recentSales.map((sale) => (
            <div
              key={sale.invoice}
              className="bg-[#1A2742] rounded-xl p-4 flex justify-between"
            >
              <div>
                <p className="font-semibold">{sale.invoice}</p>
                <p className="text-slate-400 text-sm">{sale.customer}</p>
              </div>

              <div className="text-right">
                <p className="text-green-400 font-bold">
                  ${sale.amount}
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