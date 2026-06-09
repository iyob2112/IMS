"use client";

import { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Download,
  Calendar,
} from "lucide-react";
import RevenueChart from "@/components/reports/RevenueChart";

export default function SalesAnalyticsPage() {
  const [range, setRange] = useState<"daily" | "weekly" | "monthly">(
    "monthly"
  );

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold">
            Sales Analytics
          </h1>

          <p className="text-slate-400 mt-2">
            Revenue insights, growth trends and performance metrics
          </p>

          <p className="text-slate-500 mt-1">
            Showing: {range.toUpperCase()}
          </p>
        </div>

        <div className="flex gap-3">

          <button className="bg-[#131C31] px-4 py-3 rounded-xl border border-slate-700 h-14">
            <Calendar size={18} />
          </button>

          <button className="bg-green-600 px-5 py-3 rounded-xl flex items-center gap-2 h-14">
            <Download size={18} />
            Export Excel
          </button>

          <button className="bg-red-600 px-5 py-3 rounded-xl flex items-center gap-2 h-14">
            <Download size={18} />
            Export PDF
          </button>

        </div>
      </div>

      {/* 🔥 RANGE FILTER */}
      <div className="flex gap-3">

        <button
          onClick={() => setRange("daily")}
          className={`px-4 py-2 rounded-xl transition ${
            range === "daily"
              ? "bg-cyan-600"
              : "bg-[#131C31] border border-slate-700"
          }`}
        >
          Daily
        </button>

        <button
          onClick={() => setRange("weekly")}
          className={`px-4 py-2 rounded-xl transition ${
            range === "weekly"
              ? "bg-cyan-600"
              : "bg-[#131C31] border border-slate-700"
          }`}
        >
          Weekly
        </button>

        <button
          onClick={() => setRange("monthly")}
          className={`px-4 py-2 rounded-xl transition ${
            range === "monthly"
              ? "bg-cyan-600"
              : "bg-[#131C31] border border-slate-700"
          }`}
        >
          Monthly
        </button>

      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <DollarSign className="text-green-400 mb-3" />
          <p className="text-slate-400">Revenue</p>
          <h2 className="text-4xl font-bold">$254,500</h2>
          <span className="text-green-400 text-sm">+12.4%</span>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <ShoppingCart className="text-cyan-400 mb-3" />
          <p className="text-slate-400">Orders</p>
          <h2 className="text-4xl font-bold">8,245</h2>
          <span className="text-green-400 text-sm">+8.1%</span>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <Users className="text-orange-400 mb-3" />
          <p className="text-slate-400">Customers</p>
          <h2 className="text-4xl font-bold">3,124</h2>
          <span className="text-green-400 text-sm">+15.7%</span>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <TrendingUp className="text-purple-400 mb-3" />
          <p className="text-slate-400">Profit</p>
          <h2 className="text-4xl font-bold">$84,200</h2>
          <span className="text-green-400 text-sm">+11.2%</span>
        </div>

      </div>

      {/* Charts */}
      <div className="grid xl:grid-cols-2 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">
            Revenue Trend ({range})
          </h2>

      <RevenueChart />
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">
            Sales Growth ({range})
          </h2>

          <div className="h-[350px] rounded-2xl bg-[#1A2742] flex items-center justify-center">
            Growth Chart ({range})
          </div>
        </div>

      </div>

      {/* Performance Tables */}
      <div className="grid xl:grid-cols-2 gap-6">

        {/* Top Products */}
        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">
            Top Selling Products
          </h2>

          <div className="space-y-4">

            {["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
                >
                  <span>{item}</span>
                  <span className="text-green-400">
                    {500 - index * 50} Sales
                  </span>
                </div>
              )
            )}

          </div>
        </div>

        {/* Top Customers */}
        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">
            Top Customers
          </h2>

          <div className="space-y-4">

            {["John Doe", "Sarah Smith", "Michael Johnson", "David Wilson"].map(
              (customer, index) => (
                <div
                  key={index}
                  className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
                >
                  <span>{customer}</span>
                  <span className="text-cyan-400">
                    ${(12000 - index * 1500).toLocaleString()}
                  </span>
                </div>
              )
            )}

          </div>
        </div>

      </div>

      {/* Breakdown */}
      <div className="grid xl:grid-cols-3 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">
            Payment Methods
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Cash</span>
              <span className="text-green-400">45%</span>
            </div>

            <div className="flex justify-between">
              <span>Bank</span>
              <span className="text-cyan-400">30%</span>
            </div>

            <div className="flex justify-between">
              <span>Mobile Money</span>
              <span className="text-orange-400">25%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">
            Sales Forecast
          </h2>

          <div className="h-[200px] rounded-2xl bg-[#1A2742] flex items-center justify-center">
            Forecast Chart ({range})
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Executive Summary
          </h2>

          <p className="mt-4 text-white/90">
            Revenue increased this {range}. Top category remains Electronics
            with strong performance. Customer growth continues upward.
          </p>
        </div>

      </div>

    </div>
  );
}