"use client";

const categories = [
  {
    name: "Electronics",
    revenue: "$52K",
  },
  {
    name: "Accessories",
    revenue: "$21K",
  },
  {
    name: "Furniture",
    revenue: "$14K",
  },
];

export default function CategoryPerformance() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Category Performance
      </h2>

      <div className="space-y-4">

        {categories.map((item) => (
          <div
            key={item.name}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <span>{item.name}</span>

            <span className="text-cyan-400">
              {item.revenue}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}