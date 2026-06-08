"use client";

const items = [
  {
    product: "Printer Ink",
    sku: "SKU-001",
    stock: 3,
    minimum: 10,
    warehouse: "Main",
  },
  {
    product: "Monitor",
    sku: "SKU-002",
    stock: 2,
    minimum: 5,
    warehouse: "Main",
  },
  {
    product: "USB Cable",
    sku: "SKU-003",
    stock: 5,
    minimum: 20,
    warehouse: "Branch A",
  },
];

export default function LowStockReport() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Low Stock Report
      </h2>

      <div className="space-y-3">

        {items.map((item) => (
          <div
            key={item.sku}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <div>
              <p className="font-semibold text-white">
                {item.product}
              </p>

              <p className="text-sm text-slate-400">
                {item.sku}
              </p>
            </div>

            <div className="text-right">
              <p className="text-red-400 font-bold">
                {item.stock}
              </p>

              <p className="text-xs text-slate-500">
                Min: {item.minimum}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}