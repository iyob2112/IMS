"use client";

const revenueData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 50 },
  { month: "Apr", value: 90 },
  { month: "May", value: 70 },
  { month: "Jun", value: 100 },
];

export default function RevenueChart() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          Revenue Trend
        </h2>

        <span className="text-green-400">
          +18%
        </span>
      </div>

      <div className="h-[300px] flex items-end gap-4">
{revenueData.map((item) => (
  <div
    key={item.month}
    className="flex-1 flex flex-col items-center h-full"
  >
    <div className="flex-1 w-full flex items-end">
      <div
        style={{
          height: `${item.value}%`,
        }}
        className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500"
      />
    </div>

    <span className="text-slate-400 text-xs mt-2">
      {item.month}
    </span>
  </div>
))}
      </div>

    </div>
  );
}