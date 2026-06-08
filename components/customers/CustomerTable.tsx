"use client";

import { Customer } from "@/types/customer";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface Props {
  customers: Customer[];
}

export default function CustomerTable({
  customers,
}: Props) {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b border-slate-700 text-slate-400">
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Purchases</th>
            <th className="text-left p-4">Spent</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>

          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-slate-800"
            >
              <td className="p-4 text-white">
                {customer.name}
              </td>

              <td className="p-4 text-slate-300">
                {customer.email}
              </td>

              <td className="p-4 text-slate-300">
                {customer.phone}
              </td>

              <td className="p-4 text-slate-300">
                {customer.purchases}
              </td>

              <td className="p-4 text-green-400">
                ${customer.totalSpent}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    customer.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {customer.status}
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
  );
}