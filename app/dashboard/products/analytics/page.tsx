"use client";

import {
  TrendingUp,
  Package,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { name: "Laptop", sales: 120 },
  { name: "Mouse", sales: 95 },
  { name: "Keyboard", sales: 84 },
  { name: "Monitor", sales: 65 },
];

const categoryData = [
  { name: "Electronics", value: 55 },
  { name: "Accessories", value: 25 },
  { name: "Office", value: 20 },
];

const COLORS = [
  "#06B6D4",
  "#8B5CF6",
  "#10B981",
];

export default function ProductAnalyticsPage() {
  return (
    <div className="space-y-6 pt-10 p-3 text-white">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Product Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Product performance insights
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Inventory Value
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                $45,000
              </h2>
            </div>

            <DollarSign className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Total Products
              </p>

              <h2 className="text-4xl font-bold text-cyan-400 mt-2">
                150
              </h2>
            </div>

            <Package className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Top Seller
              </p>

              <h2 className="text-xl font-bold text-white mt-2">
                Laptop
              </h2>
            </div>

            <TrendingUp className="text-purple-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Low Stock Items
              </p>

              <h2 className="text-4xl font-bold text-red-400 mt-2">
                12
              </h2>
            </div>

            <AlertTriangle className="text-red-400" />
          </div>
        </div>

      </div>

      {/* Charts */}
      <div className="grid xl:grid-cols-2 gap-6">

        {/* Best Selling */}
        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

          <h2 className="text-xl font-bold text-white mb-6">
            Best Selling Products
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={salesData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  fill="#06B6D4"
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Category Performance */}
        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

          <h2 className="text-xl font-bold text-white mb-6">
            Category Performance
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>

                <Pie
                  data={categoryData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {categoryData.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* Slow Moving Products */}
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

        <h2 className="text-xl font-bold text-white mb-6">
          Slow Moving Products
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left p-4 text-slate-400">
                Product
              </th>

              <th className="text-left p-4 text-slate-400">
                Stock
              </th>

              <th className="text-left p-4 text-slate-400">
                Sold
              </th>

              <th className="text-left p-4 text-slate-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b border-slate-800">
              <td className="p-4 text-white">
                Webcam
              </td>

              <td className="p-4 text-white">
                40
              </td>

              <td className="p-4 text-white">
                3
              </td>

              <td className="p-4">
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                  Slow
                </span>
              </td>
            </tr>

            <tr>
              <td className="p-4 text-white">
                Printer
              </td>

              <td className="p-4 text-white">
                25
              </td>

              <td className="p-4 text-white">
                5
              </td>

              <td className="p-4">
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                  Medium
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}