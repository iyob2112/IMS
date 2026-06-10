"use client";
import { useState } from "react";

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

  const [selectedStock, setSelectedStock] = useState(null);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
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
                className={`px-3 py-1 rounded-full text-xs ${item.status === "Completed"
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
              <button
                onClick={() => {
                  setSelectedStock(item);
                  setOpenView(true);
                }}
                className="flex-1 bg-cyan-600 py-2 rounded-lg"
              >
                View
              </button>

              <button
                onClick={() => {
                  setSelectedStock(item);
                  setOpenEdit(true);
                }}
                className="flex-1 bg-indigo-600 py-2 rounded-lg"
              >
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
                    className={`px-3 py-1 rounded-full text-xs ${item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedStock(item);
                        setOpenView(true);
                      }}
                      className="bg-cyan-600 px-3 py-1 rounded-lg"
                    >
                      View
                    </button>

                    <button
                      onClick={() => {
                        setSelectedStock(item);
                        setOpenEdit(true);
                      }}
                      className="bg-indigo-600 px-3 py-1 rounded-lg"
                    >
                      Edit
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
      {openView && selectedStock && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-[#131C31] w-full max-w-3xl rounded-3xl p-6 relative">

            <button
              onClick={() => setOpenView(false)}
              className="absolute top-4 right-4 text-slate-400"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              Stock Receipt Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <p className="text-slate-500">GRN</p>
                <p>{selectedStock.id}</p>
              </div>

              <div>
                <p className="text-slate-500">Product</p>
                <p>{selectedStock.product}</p>
              </div>

              <div>
                <p className="text-slate-500">Supplier</p>
                <p>{selectedStock.supplier}</p>
              </div>

              <div>
                <p className="text-slate-500">Warehouse</p>
                <p>{selectedStock.warehouse}</p>
              </div>

              <div>
                <p className="text-slate-500">Quantity</p>
                <p>{selectedStock.qty}</p>
              </div>

              <div>
                <p className="text-slate-500">Unit Cost</p>
                <p>{selectedStock.unitCost}</p>
              </div>

              <div>
                <p className="text-slate-500">Total</p>
                <p className="text-green-400">
                  {selectedStock.total}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Received By</p>
                <p>{selectedStock.receivedBy}</p>
              </div>

              <div>
                <p className="text-slate-500">Date</p>
                <p>{selectedStock.date}</p>
              </div>

              <div>
                <p className="text-slate-500">Status</p>
                <p>{selectedStock.status}</p>
              </div>

            </div>

          </div>

        </div>
      )}
  {openEdit && selectedStock && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 relative">

      <button
        onClick={() => setOpenEdit(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-white mb-2">
        Edit Stock Receipt
      </h2>

      <p className="text-slate-400 mb-6">
        GRN: {selectedStock.id}
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        {/* Product */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Product
          </label>
          <input
            value={selectedStock.product}
           onChange={(e) =>
    setSelectedHistory({
      ...selectedStock,
      product: e.target.value,
    })
  }
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          />
        </div>

        {/* Supplier */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Supplier
          </label>
          <select className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700">
            <option>Tech Distributors</option>
            <option>Global Electronics</option>
          </select>
        </div>

        {/* Warehouse */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Warehouse
          </label>
          <select className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700">
            <option>Main Warehouse</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={selectedStock.qty}
            onChange={(e) =>
    setSelectedHistory({
      ...selectedStock,
      qty: e.target.value,
    })
  }
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          />
        </div>

        {/* Unit Cost */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Unit Cost
          </label>
          <input
            value={selectedStock.unitCost}
           onChange={(e) =>
    setSelectedHistory({
      ...selectedStock,
      unitCost: e.target.value,
    })
  }
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          />
        </div>

        {/* Total */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Total Cost
          </label>
          <input
            value={selectedStock.total}
                    onChange={(e) =>
    setSelectedHistory({
      ...selectedStock,
      total: e.target.value,
    })
  }
            disabled
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-400"
          />
        </div>

        {/* Received By */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Received By
          </label>
          <input
            value={selectedStock.receivedBy}
                    onChange={(e) =>
    setSelectedHistory({
      ...selectedStock,
      receivedBy: e.target.value,
    })
  }
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Status
          </label>
          <select className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700">
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm text-slate-400 mb-2">
            Notes
          </label>
          <textarea
            rows={4}
            placeholder="Additional notes..."
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
          />
        </div>

      </div>

      {/* Buttons OUTSIDE the grid */}
      <div className="flex gap-3 mt-6">

        <button
          onClick={() => {
            console.log(selectedStock);
            setOpenEdit(false);
          }}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl"
        >
          Save Changes
        </button>

        <button
          onClick={() => setOpenEdit(false)}
          className="flex-1 bg-slate-800 hover:bg-slate-700 p-3 rounded-xl"
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}