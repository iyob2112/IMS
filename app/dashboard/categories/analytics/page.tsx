"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function CategoryAnalyticsPage() {
  const categories = [
    {
      name: "Electronics",
      products: 45,
      sales: 320,
      revenue: "$15,000",
      growth: "+15%",
    },
    {
      name: "Fashion",
      products: 35,
      sales: 250,
      revenue: "$10,500",
      growth: "+8%",
    },
    {
      name: "Food",
      products: 40,
      sales: 410,
      revenue: "$8,200",
      growth: "+5%",
    },
    {
      name: "Furniture",
      products: 18,
      sales: 120,
      revenue: "$6,800",
      growth: "+3%",
    },
  ];
const revenueData = [
  { name: "Electronics", revenue: 15000 },
  { name: "Fashion", revenue: 10500 },
  { name: "Food", revenue: 8200 },
  { name: "Furniture", revenue: 6800 },
];

const distributionData = [
  { name: "Electronics", value: 45 },
  { name: "Fashion", value: 35 },
  { name: "Food", value: 40 },
  { name: "Furniture", value: 18 },
];

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#10B981",
  "#A855F7",
];
  return (
    <div className="space-y-6 pt-10 p-3 text-white min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Category Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Category performance insights and trends
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <p className="text-slate-400">
            Categories
          </p>

          <h2 className="text-4xl font-bold mt-2">
            18
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <p className="text-slate-400">
            Products
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            150
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <p className="text-slate-400">
            Revenue
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            $45K
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <p className="text-slate-400">
            Growth
          </p>

          <h2 className="text-4xl font-bold text-purple-400 mt-2">
            +12%
          </h2>
        </div>

      </div>

      {/* Analytics Cards */}
<div className="grid lg:grid-cols-2 gap-6">

        <div className="lg:col-span-2 bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h2 className="text-xl font-semibold mb-4">
            Revenue by Category
          </h2>

      <div className="h-72">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={revenueData}>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke="#334155"
      />

      <XAxis
        dataKey="name"
        stroke="#94A3B8"
      />

      <YAxis stroke="#94A3B8" />

      <Tooltip />

      <Bar
        dataKey="revenue"
        fill="#3B82F6"
        radius={[8, 8, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
</div>
        </div>
<div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
  <h2 className="text-xl font-semibold mb-4">
    Product Distribution
  </h2>

  <div className="h-72">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={distributionData}
          cx="50%"
          cy="50%"
          outerRadius={90}
          dataKey="value"
          label
        >
          {distributionData.map((entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index % COLORS.length
                ]
              }
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h2 className="text-xl font-semibold mb-6">
            Top Categories
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Electronics</span>
              <span className="text-green-400">
                $15,000
              </span>
            </div>

            <div className="flex justify-between">
              <span>Fashion</span>
              <span className="text-cyan-400">
                $10,500
              </span>
            </div>

            <div className="flex justify-between">
              <span>Food</span>
              <span className="text-yellow-400">
                $8,200
              </span>
            </div>

            <div className="flex justify-between">
              <span>Furniture</span>
              <span className="text-purple-400">
                $6,800
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Insights */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h2 className="text-lg font-semibold mb-3">
            Fastest Growing Category
          </h2>

          <h3 className="text-3xl font-bold text-green-400">
            Electronics
          </h3>

          <p className="text-slate-400 mt-2">
            Increased sales by 15% compared to last month.
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h2 className="text-lg font-semibold mb-3">
            Lowest Performing Category
          </h2>

          <h3 className="text-3xl font-bold text-red-400">
            Stationery
          </h3>

          <p className="text-slate-400 mt-2">
            Revenue decreased by 6% this month.
          </p>
        </div>

      </div>

      {/* Category Performance Table */}
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 overflow-hidden">

        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-semibold">
            Category Performance
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Products
                </th>

                <th className="p-4 text-left">
                  Sales
                </th>

                <th className="p-4 text-left">
                  Revenue
                </th>

                <th className="p-4 text-left">
                  Growth
                </th>
              </tr>
            </thead>

            <tbody>

              {categories.map((category) => (
                <tr
                  key={category.name}
                  className="border-b border-slate-800 hover:bg-slate-800/30"
                >
                  <td className="p-4">
                    {category.name}
                  </td>

                  <td className="p-4">
                    {category.products}
                  </td>

                  <td className="p-4">
                    {category.sales}
                  </td>

                  <td className="p-4">
                    {category.revenue}
                  </td>

                  <td className="p-4 text-green-400">
                    {category.growth}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}