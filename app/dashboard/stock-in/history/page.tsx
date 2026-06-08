"use client";

import { useState } from "react";
import {
  History,
  Search,
  Download,
  PackagePlus,
  DollarSign,
  Calendar,
  User,
} from "lucide-react";

export default function StockHistoryPage() {
  const [search, setSearch] = useState("");

  const stockHistory = [
    {
      id: "STK-1001",
      product: "Gaming Laptop",
      supplier: "Tech Distributor",
      warehouse: "Main Warehouse",
      qty: 20,
      cost: "$17,000",
      receivedBy: "Admin",
      status: "Completed",
      date: "2026-06-08",
    },
    {
      id: "STK-1002",
      product: "Monitor",
      supplier: "Global Electronics",
      warehouse: "Branch Warehouse",
      qty: 15,
      cost: "$4,500",
      receivedBy: "Manager",
      status: "Pending",
      date: "2026-06-07",
    },
    {
      id: "STK-1003",
      product: "Keyboard",
      supplier: "Office Supplies",
      warehouse: "Main Warehouse",
      qty: 50,
      cost: "$2,000",
      receivedBy: "Storekeeper",
      status: "Completed",
      date: "2026-06-06",
    },
  ];

  const filtered = stockHistory.filter(
    (item) =>
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <History className="text-cyan-400" />
          Stock History
        </h1>

        <p className="text-slate-400 mt-2">
          Complete inventory receiving history
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Total Entries
              </p>
              <h2 className="text-4xl font-bold mt-2">
                2,540
              </h2>
            </div>

            <PackagePlus className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Today`s Entries
              </p>
              <h2 className="text-4xl font-bold text-green-400 mt-2">
                42
              </h2>
            </div>

            <Calendar className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Inventory Added
              </p>
              <h2 className="text-4xl font-bold text-purple-400 mt-2">
                $34K
              </h2>
            </div>

            <DollarSign className="text-purple-400" />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Active Users
              </p>
              <h2 className="text-4xl font-bold text-orange-400 mt-2">
                8
              </h2>
            </div>

            <User className="text-orange-400" />
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

        <div className="flex flex-col md:flex-row gap-4 justify-between">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search stock history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0B1120] border border-slate-700 rounded-xl pl-12 pr-4 py-3"
            />

          </div>

          <div className="flex gap-3">

            <select className="bg-[#0B1120] border border-slate-700 rounded-xl px-4 py-3">
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>

            <button className="bg-cyan-600 px-5 py-3 rounded-xl flex items-center gap-2">
              <Download size={18} />
              Export
            </button>

          </div>

        </div>

      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-[#131C31] border border-slate-800 rounded-3xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Supplier</th>
              <th className="p-4 text-left">Warehouse</th>
              <th className="p-4 text-left">Qty</th>
              <th className="p-4 text-left">Cost</th>
              <th className="p-4 text-left">Received By</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-800 hover:bg-[#1A2742]"
              >
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.product}</td>
                <td className="p-4">{item.supplier}</td>
                <td className="p-4">{item.warehouse}</td>
                <td className="p-4">{item.qty}</td>
                <td className="p-4 text-green-400">
                  {item.cost}
                </td>
                <td className="p-4">{item.receivedBy}</td>

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

                <td className="p-4">{item.date}</td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button className="bg-cyan-600 px-3 py-1 rounded-lg">
                      View
                    </button>

                    <button className="bg-violet-600 px-3 py-1 rounded-lg">
                      Print
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-[#131C31] border border-slate-800 rounded-3xl p-5"
          >
            <div className="flex justify-between">

              <div>
                <h2 className="font-bold text-lg">
                  {item.product}
                </h2>

                <p className="text-slate-400 text-sm">
                  {item.id}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs h-fit ${
                  item.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {item.status}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">

              <div>
                <p className="text-slate-500">Supplier</p>
                <p>{item.supplier}</p>
              </div>

              <div>
                <p className="text-slate-500">Warehouse</p>
                <p>{item.warehouse}</p>
              </div>

              <div>
                <p className="text-slate-500">Quantity</p>
                <p>{item.qty}</p>
              </div>

              <div>
                <p className="text-slate-500">Cost</p>
                <p className="text-green-400">
                  {item.cost}
                </p>
              </div>

            </div>

            <div className="flex gap-2 mt-4">

              <button className="flex-1 bg-cyan-600 py-2 rounded-xl">
                View
              </button>

              <button className="flex-1 bg-violet-600 py-2 rounded-xl">
                Print
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">

        <button className="bg-[#131C31] border border-slate-700 px-4 py-2 rounded-xl">
          Prev
        </button>

        <button className="bg-cyan-600 px-4 py-2 rounded-xl">
          1
        </button>

        <button className="bg-[#131C31] border border-slate-700 px-4 py-2 rounded-xl">
          2
        </button>

        <button className="bg-[#131C31] border border-slate-700 px-4 py-2 rounded-xl">
          Next
        </button>

      </div>

    </div>
  );
}