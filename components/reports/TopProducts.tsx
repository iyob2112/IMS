"use client";

const products = [
  {
    name: "Laptop",
    sales: 520,
  },
  {
    name: "Mouse",
    sales: 420,
  },
  {
    name: "Keyboard",
    sales: 380,
  },
  {
    name: "Monitor",
    sales: 280,
  },
];

export default function TopProducts() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Top Products
      </h2>

      <div className="space-y-4">

        {products.map((item) => (
          <div
            key={item.name}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <span>{item.name}</span>

            <span className="text-green-400">
              {item.sales}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}