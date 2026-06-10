"use client";

const growthData = [
  { month: "Jan", growth: 12 },
  { month: "Feb", growth: 18 },
  { month: "Mar", growth: 9 },
  { month: "Apr", growth: 24 },
  { month: "May", growth: 31 },
  { month: "Jun", growth: 42 },
];

export default function SalesGrowthChart() {
  const maxGrowth = Math.max(
    ...growthData.map((item) => item.growth)
  );

  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          Sales Growth
        </h2>

        <span className="text-green-400">
          +42%
        </span>
      </div>

      <div className="h-[300px] flex items-end gap-4">
        {growthData.map((item) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center h-full"
          >
            <div className="flex-1 w-full flex items-end">
              <div
                style={{
                  height: `${(item.growth / maxGrowth) * 100}%`,
                }}
                className="w-full rounded-t-xl bg-gradient-to-t from-green-600 to-emerald-400 transition-all duration-500"
              />
            </div>

            <span className="text-green-400 text-xs mt-2">
              {item.growth}%
            </span>

            <span className="text-slate-400 text-xs">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}