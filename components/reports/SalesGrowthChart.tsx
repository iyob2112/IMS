"use client";

const growth = [
  "12%",
  "18%",
  "9%",
  "24%",
  "31%",
  "42%",
];

export default function SalesGrowthChart() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Sales Growth
      </h2>

      <div className="space-y-4">

        {growth.map((g, index) => (
          <div
            key={index}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <span>Month {index + 1}</span>

            <span className="text-green-400">
              {g}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}