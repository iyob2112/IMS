"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6200 },
  { month: "Jun", sales: 7500 },
];

const topProducts = [
  { name: "Laptop", value: 45 },
  { name: "Keyboard", value: 25 },
  { name: "Mouse", value: 20 },
  { name: "Monitor", value: 10 },
];

const COLORS = [
  "#06B6D4",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-10 p-3">

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Sales and business insights
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <p className="text-slate-400">
            Revenue
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            $25,480
          </h2>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <p className="text-slate-400">
            Profit
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            $8,230
          </h2>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <p className="text-slate-400">
            Orders
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            742
          </h2>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <p className="text-slate-400">
            Growth
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            +12%
          </h2>
        </div>

      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Revenue Trend */}
        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

          <h2 className="text-xl font-bold text-white mb-4">
            Revenue Trend
          </h2>

          <div className="h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#06B6D4"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/* Monthly Sales */}
        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

          <h2 className="text-xl font-bold text-white mb-4">
            Monthly Sales
          </h2>

          <div className="h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="sales"
                  fill="#8B5CF6"
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Product Performance */}
        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800 lg:col-span-2">

          <h2 className="text-xl font-bold text-white mb-4">
            Top Selling Products
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={topProducts}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {topProducts.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </div>
  );
}