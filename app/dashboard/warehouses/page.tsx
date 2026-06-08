"use client";

import {
  Warehouse,
  Package,
  ArrowRightLeft,
  Users,
  Plus,
} from "lucide-react";

export default function WarehousesPage() {
  const warehouses = [
    {
      id: 1,
      name: "Main Warehouse",
      manager: "John Doe",
      capacity: "85%",
      products: 1250,
      status: "Active",
    },
    {
      id: 2,
      name: "Branch Warehouse",
      manager: "Sarah Smith",
      capacity: "60%",
      products: 850,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Warehouses
          </h1>

          <p className="text-slate-400 mt-2">
            Manage warehouse inventory
          </p>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-xl flex items-center gap-2 text-white">
          <Plus size={18} />
          Add Warehouse
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Warehouses
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                5
              </h2>
            </div>

            <Warehouse className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Products Stored
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                5,420
              </h2>
            </div>

            <Package className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Transfers
              </p>

              <h2 className="text-4xl font-bold text-purple-400 mt-2">
                124
              </h2>
            </div>

            <ArrowRightLeft className="text-purple-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Managers
              </p>

              <h2 className="text-4xl font-bold text-orange-400 mt-2">
                5
              </h2>
            </div>

            <Users className="text-orange-400" />
          </div>
        </div>

      </div>

      {/* Warehouse Cards */}
      <div className="grid lg:grid-cols-2 gap-6">

        {warehouses.map((warehouse) => (
          <div
            key={warehouse.id}
            className="bg-[#131C31] border border-slate-800 rounded-3xl p-6"
          >
            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  {warehouse.name}
                </h2>

                <p className="text-slate-400 mt-2">
                  Manager: {warehouse.manager}
                </p>
              </div>

              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                {warehouse.status}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-slate-400 text-sm">
                  Capacity
                </p>

                <h3 className="text-xl font-bold text-white mt-2">
                  {warehouse.capacity}
                </h3>
              </div>

              <div className="bg-[#0B1120] rounded-xl p-4">
                <p className="text-slate-400 text-sm">
                  Products
                </p>

                <h3 className="text-xl font-bold text-white mt-2">
                  {warehouse.products}
                </h3>
              </div>

            </div>

            <div className="mt-6 flex gap-3">

              <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl text-white">
                View
              </button>

              <button className="flex-1 bg-purple-600 hover:bg-purple-700 p-3 rounded-xl text-white">
                Transfer
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}