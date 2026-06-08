"use client";

const inventory = [
  {
    warehouse: "Main",
    value: "$54K",
  },
  {
    warehouse: "Branch A",
    value: "$28K",
  },
  {
    warehouse: "Branch B",
    value: "$16K",
  },
];

export default function InventoryValueChart() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Inventory Value
      </h2>

      <div className="space-y-4">

        {inventory.map((item) => (
          <div
            key={item.warehouse}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <span>{item.warehouse}</span>

            <span className="text-green-400">
              {item.value}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}