"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 5000, expense: 2000 },
  { month: "Feb", revenue: 6500, expense: 2500 },
  { month: "Mar", revenue: 7200, expense: 3100 },
  { month: "Apr", revenue: 8100, expense: 3500 },
  { month: "May", revenue: 9500, expense: 4200 },
  { month: "Jun", revenue: 11000, expense: 4800 },
];

export default function RevenueExpenseChart() {
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">
      <h2 className="text-white text-xl font-bold mb-6">
        Revenue vs Expenses
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06B6D4"
              fill="#06B6D4"
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="#EF4444"
              fill="#EF4444"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}