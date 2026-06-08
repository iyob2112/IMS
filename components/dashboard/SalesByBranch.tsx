"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Main Branch", value: 45 },
  { name: "Branch A", value: 30 },
  { name: "Branch B", value: 25 },
];

const COLORS = [
  "#06B6D4",
  "#8B5CF6",
  "#10B981",
];

export default function SalesByBranch() {
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

      <h2 className="text-white text-xl font-bold mb-6">
        Sales By Branch
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}