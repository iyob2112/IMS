"use client";

import { InventoryItem } from "@/types/inventory";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  inventory: InventoryItem[];
}

export default function InventoryTable({ inventory }: Props) {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="w-full">

      {/* ================= MOBILE CARDS ================= */}
      <div className="grid gap-4 md:hidden">

        {inventory.map((item) => (
          <div
            key={item.id}
            className="bg-[#131C31] border border-slate-800 rounded-2xl p-4"
          >

            {/* Top */}
            <div className="flex justify-between items-start">

              <div>
                <p className="text-white font-semibold">
                  {item.product}
                </p>

                <p className="text-slate-400 text-sm">
                  SKU: {item.sku}
                </p>
              </div>

            </div>

            {/* Details */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">

              <p className="text-slate-400">
                Warehouse:{" "}
                <span className="text-white">
                  {item.warehouse}
                </span>
              </p>

              <p className="text-slate-400">
                Qty:{" "}
                <span className="text-white">
                  {item.quantity}
                </span>
              </p>

              <p className="text-slate-400">
                Price:{" "}
                <span className="text-green-400">
                  ${item.price}
                </span>
              </p>

            </div>

            {/* Status */}
            <div className="mt-3">
              <span
                className={`px-3 py-1 rounded-full text-xs ${item.status === "In Stock"
                    ? "bg-green-500/20 text-green-400"
                    : item.status === "Low Stock"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
              >
                {item.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">

              <button
                onClick={() => {
                  setSelectedItem(item);
                  setOpenView(true);
                }}
                className="p-2 bg-slate-800 rounded-lg"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setOpenEdit(true);
                }}
                className="p-2 bg-slate-800 rounded-lg"
              >
                <Pencil size={16} />
              </button>

              <button className="flex-1 bg-red-500/20 text-red-400 p-2 rounded-lg">
                <Trash2 size={16} />
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">SKU</th>
              <th className="text-left p-4">Warehouse</th>
              <th className="text-left p-4">Quantity</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-800"
              >

                <td className="p-4 text-white">
                  {item.product}
                </td>

                <td className="p-4 text-slate-300">
                  {item.sku}
                </td>

                <td className="p-4 text-slate-300">
                  {item.warehouse}
                </td>

                <td className="p-4 text-slate-300">
                  {item.quantity}
                </td>

                <td className="p-4 text-green-400">
                  ${item.price}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${item.status === "In Stock"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "Low Stock"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setOpenView(true);
                      }}
                      className="p-2 bg-slate-800 rounded-lg"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setOpenEdit(true);
                      }}
                      className="p-2 bg-slate-800 rounded-lg"
                    >
                      <Pencil size={16} />
                    </button>

                    <button className="p-2 bg-red-500/20 rounded-lg text-red-400">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
{openView && selectedItem && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-2xl rounded-3xl p-6 relative">

      <button
        onClick={() => setOpenView(false)}
        className="absolute top-4 right-4 text-slate-400"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-white mb-6">
        Inventory Details
      </h2>

      <div className="grid gap-4 text-slate-300">

        <p>
          <span className="text-slate-500">Product:</span>{" "}
          {selectedItem.product}
        </p>

        <p>
          <span className="text-slate-500">SKU:</span>{" "}
          {selectedItem.sku}
        </p>

        <p>
          <span className="text-slate-500">Warehouse:</span>{" "}
          {selectedItem.warehouse}
        </p>

        <p>
          <span className="text-slate-500">Quantity:</span>{" "}
          {selectedItem.quantity}
        </p>

        <p>
          <span className="text-slate-500">Price:</span>{" "}
          <span className="text-green-400">
            ${selectedItem.price}
          </span>
        </p>

        <p>
          <span className="text-slate-500">Status:</span>{" "}
          {selectedItem.status}
        </p>

      </div>

    </div>

  </div>
)}
{openEdit && selectedItem && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-2xl rounded-3xl p-6 relative">

      <button
        onClick={() => setOpenEdit(false)}
        className="absolute top-4 right-4 text-slate-400"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-white mb-6">
        Edit Inventory Item
      </h2>

      <div className="space-y-4">

        <input
          value={selectedItem.product}
          onChange={(e) =>
            setSelectedItem({
              ...selectedItem,
              product: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
        />

        <input
          value={selectedItem.sku}
          onChange={(e) =>
            setSelectedItem({
              ...selectedItem,
              sku: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
        />
<div>
  <label className="block text-sm text-slate-400 mb-2">
    Warehouse
  </label>

  <select
    value={selectedItem.warehouse}
    onChange={(e) =>
      setSelectedItem({
        ...selectedItem,
        warehouse: e.target.value,
      })
    }
    className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
  >
    <option value="">Select Warehouse</option>
    <option value="Main Warehouse">Main Warehouse</option>
    <option value="Branch 1">Branch A</option>
    <option value="Branch 2">Branch A</option>
  </select>
</div>

        <input
          type="number"
          value={selectedItem.quantity}
          onChange={(e) =>
            setSelectedItem({
              ...selectedItem,
              quantity: Number(e.target.value),
            })
          }
          className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
        />

        <div className="flex gap-3">

          <button
            onClick={() => {
              console.log("Updated:", selectedItem);
              setOpenEdit(false);
            }}
            className="flex-1 bg-indigo-600 p-3 rounded-xl text-white"
          >
            Save
          </button>

          <button
            onClick={() => setOpenEdit(false)}
            className="flex-1 bg-slate-800 p-3 rounded-xl text-white"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  </div>
)}
    </div>
  );
}