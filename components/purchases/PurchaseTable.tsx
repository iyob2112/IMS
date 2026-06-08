"use client";

import { Purchase } from "@/types/purchase";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface Props {
  purchases: Purchase[];
}

export default function PurchaseTable({ purchases }: Props) {
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
                className={`px-3 py-1 rounded-full text-xs ${
                  purchase.status === "Completed"
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
                    className={`px-3 py-1 rounded-full text-xs ${
                      purchase.status === "Completed"
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

                    <button className="p-2 rounded-lg bg-slate-800">
                      <Eye size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-slate-800">
                      <Pencil size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-red-500/20 text-red-400">
                      <Trash2 size={16} />
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