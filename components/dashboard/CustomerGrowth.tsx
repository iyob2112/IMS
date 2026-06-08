"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Jan", customers: 200 },
  { month: "Feb", customers: 250 },
  { month: "Mar", customers: 300 },
  { month: "Apr", customers: 450 },
  { month: "May", customers: 550 },
  { month: "Jun", customers: 700 },
];

export default function CustomerGrowth() {
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

      <h2 className="text-white text-xl font-bold mb-6">
        Customer Growth
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="customers"
              stroke="#8B5CF6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}