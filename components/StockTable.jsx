"use client";

const stockEntries = [
  {
    id: "GRN-1001",
    product: "Gaming Laptop",
    supplier: "Tech Distributors",
    warehouse: "Main Warehouse",
    qty: 10,
    unitCost: "$850",
    total: "$8,500",
    receivedBy: "Admin",
    status: "Completed",
    date: "2026-06-08",
  },
  {
    id: "GRN-1002",
    product: "Monitor",
    supplier: "Global Electronics",
    warehouse: "Warehouse A",
    qty: 20,
    unitCost: "$200",
    total: "$4,000",
    receivedBy: "Manager",
    status: "Pending",
    date: "2026-06-08",
  },
];

export default function StockTable() {
  return (
    <div className="w-full">

      {/* ================= MOBILE CARDS ================= */}
      <div className="grid gap-4 md:hidden">

        {stockEntries.map((item) => (
          <div
            key={item.id}
            className="bg-[#131C31] border border-slate-800 rounded-2xl p-4"
          >

            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white font-semibold">
                  {item.product}
                </p>

                <p className="text-slate-400 text-sm">
                  {item.id}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  item.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Info */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">

              <p className="text-slate-400">
                Supplier:{" "}
                <span className="text-white">
                  {item.supplier}
                </span>
              </p>

              <p className="text-slate-400">
                Warehouse:{" "}
                <span className="text-white">
                  {item.warehouse}
                </span>
              </p>

              <p className="text-slate-400">
                Qty:{" "}
                <span className="text-white">
                  {item.qty}
                </span>
              </p>

              <p className="text-slate-400">
                Cost:{" "}
                <span className="text-white">
                  {item.unitCost}
                </span>
              </p>

              <p className="text-slate-400 col-span-2">
                Total:{" "}
                <span className="text-green-400">
                  {item.total}
                </span>
              </p>

            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">

              <button className="flex-1 bg-cyan-600 py-2 rounded-lg">
                View
              </button>

              <button className="flex-1 bg-indigo-600 py-2 rounded-lg">
                Edit
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">GRN</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Supplier</th>
              <th className="p-4 text-left">Warehouse</th>
              <th className="p-4 text-left">Qty</th>
              <th className="p-4 text-left">Cost</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {stockEntries.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-800 hover:bg-[#1A2742]"
              >
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.product}</td>
                <td className="p-4">{item.supplier}</td>
                <td className="p-4">{item.warehouse}</td>
                <td className="p-4">{item.qty}</td>
                <td className="p-4">{item.unitCost}</td>
                <td className="p-4 text-green-400">{item.total}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      item.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="bg-cyan-600 px-3 py-1 rounded-lg">
                      View
                    </button>

                    <button className="bg-indigo-600 px-3 py-1 rounded-lg">
                      Edit
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}