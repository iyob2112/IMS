"use client";

import { Purchase } from "@/types/purchase";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  purchases: Purchase[];
}
export default function PurchaseTable({ purchases }: Props) {
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editForm, setEditForm] = useState<Purchase | null>(null);
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(null);
  return (
    <div className="w-full">

      {/* ================= MOBILE CARDS ================= */}
      <div className="grid gap-4 md:hidden">

        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="bg-[#131C31] border border-slate-800 rounded-2xl p-4"
          >

            <div className="flex justify-between items-start">

              <div>
                <p className="text-white font-semibold">
                  {purchase.purchaseNo}
                </p>

                <p className="text-slate-400 text-sm">
                  {purchase.supplier}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs ${purchase.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : purchase.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
              >
                {purchase.status}
              </span>

            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">

              <p className="text-slate-400">
                Date:{" "}
                <span className="text-white">
                  {purchase.date}
                </span>
              </p>

              <p className="text-slate-400">
                Items:{" "}
                <span className="text-white">
                  {purchase.items?.length || 0}
                </span>
              </p>

              <p className="text-slate-400 col-span-2">
                Total:{" "}
                <span className="text-green-400">
                  ${purchase.total}
                </span>
              </p>

            </div>

            <div className="flex gap-2 mt-4">

              <button className="flex-1 bg-slate-800 py-2 rounded-lg">
                <Eye size={16} className="mx-auto" />
              </button>

              <button className="flex-1 bg-slate-800 py-2 rounded-lg">
                <Pencil size={16} className="mx-auto" />
              </button>

              <button className="flex-1 bg-red-500/20 text-red-400 py-2 rounded-lg">
                <Trash2 size={16} className="mx-auto" />
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
              <th className="text-left p-4">Purchase No</th>
              <th className="text-left p-4">Supplier</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Items</th>
              <th className="text-left p-4">Total</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {purchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="border-b border-slate-800"
              >
                <td className="p-4 text-white">
                  {purchase.purchaseNo}
                </td>

                <td className="p-4 text-slate-300">
                  {purchase.supplier}
                </td>

                <td className="p-4 text-slate-300">
                  {purchase.date}
                </td>

                <td className="p-4 text-slate-300">
                  {purchase.items?.length || 0} items
                </td>

                <td className="p-4 text-green-400">
                  ${purchase.total}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${purchase.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : purchase.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                  >
                    {purchase.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button
                      onClick={() => {
                        // setSelectedPurchase(purchase);
                        // setEditForm(purchase);
                        setOpenView(true);
                      }}
                      className="p-2 rounded-lg bg-slate-800 text-white"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedPurchase(purchase);
                        setOpenEdit(true);
                      }}
                      className="p-2 rounded-lg bg-slate-800 text-white"
                    >
                      <Pencil size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-red-500/20 text-red-400 text-red">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
      {openView && selectedPurchase && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 text-white">

          <div className="bg-[#131C31] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">

            <button
              onClick={() => setOpenView(false)}
              className="absolute top-4 right-4 text-slate-400"
            >
              ✕
            </button>

            <h1 className="text-3xl font-bold">
              Purchase {selectedPurchase.purchaseNo}
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>
                <p className="text-slate-400">Supplier</p>
                <p className="font-semibold">{selectedPurchase.supplier}</p>
              </div>

              <div>
                <p className="text-slate-400">Date</p>
                <p className="font-semibold">{selectedPurchase.date}</p>
              </div>

              <div>
                <p className="text-slate-400">Items</p>
                <p className="font-semibold">{selectedPurchase.items?.length || 0}</p>
              </div>

              <div>
                <p className="text-slate-400">Total</p>
                <p className="font-semibold text-green-400">
                  ${selectedPurchase.total}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-slate-400">Status</p>
                <p className="font-semibold">{selectedPurchase.status}</p>
              </div>

            </div>

          </div>
        </div>
      )}
      {openEdit && editForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 text-white ">

          <div className="bg-[#131C31] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">

            <button
              onClick={() => setOpenEdit(false)}
              className="absolute top-4 right-4 text-slate-400"
            >
              ✕
            </button>

            <h1 className="text-2xl font-bold mb-6">
              Edit Purchase
            </h1>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-slate-400 text-sm">Supplier</label>
                <input
                  value={editForm.supplier}
                  onChange={(e) =>
                    setEditForm({ ...editForm, supplier: e.target.value })
                  }
                  className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm">Date</label>
                <input
                  value={editForm.date}
                  onChange={(e) =>
                    setEditForm({ ...editForm, date: e.target.value })
                  }
                  className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm">Total</label>
                <input
                  value={editForm.total}
                  onChange={(e) =>
                    setEditForm({ ...editForm, total: Number(e.target.value), })
                  }
                  className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm">Status</label>
                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm({ ...editForm, status: e.target.value as "Pending" | "Completed" | "Partial", })
                  }
                  className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700"
                >
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => {
                  console.log(editForm);
                  setOpenEdit(false);
                }}
                className="flex-1 bg-indigo-600 p-3 rounded-xl"
              >
                Save
              </button>

              <button
                onClick={() => setOpenEdit(false)}
                className="flex-1 bg-slate-800 p-3 rounded-xl"
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