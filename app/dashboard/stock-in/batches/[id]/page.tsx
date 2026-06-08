"use client";

import {
  Package,
  Calendar,
  Warehouse,
  ArrowRightLeft,
  ShoppingCart,
  RotateCcw,
  AlertTriangle,
  Clock3,
} from "lucide-react";

export default function BatchDetailsPage() {
  const movements = [
    {
      type: "Stock In",
      qty: "+100",
      warehouse: "Main Warehouse",
      date: "2026-06-01",
    },
    {
      type: "Transfer",
      qty: "-20",
      warehouse: "Branch A",
      date: "2026-06-04",
    },
    {
      type: "Sale",
      qty: "-15",
      warehouse: "POS Store",
      date: "2026-06-05",
    },
    {
      type: "Return",
      qty: "+5",
      warehouse: "Main Warehouse",
      date: "2026-06-07",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Batch BT-1001
        </h1>

        <p className="text-slate-400 mt-2">
          Complete batch lifecycle tracking
        </p>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Current Qty</p>
              <h2 className="text-4xl font-bold mt-2">
                70
              </h2>
            </div>

            <Package className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Warehouse</p>
              <h2 className="text-xl font-bold mt-2">
                Main
              </h2>
            </div>

            <Warehouse className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">Expiry Date</p>
              <h2 className="text-xl font-bold mt-2">
                2027-01-10
              </h2>
            </div>

            <Calendar className="text-orange-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Days Remaining
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                216
              </h2>
            </div>

            <Clock3 className="text-green-400" />
          </div>
        </div>

      </div>

      {/* Batch Information */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <h2 className="text-xl font-bold mb-6">
          Batch Information
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div>
            <p className="text-slate-400">Batch Number</p>
            <p className="font-semibold mt-1">BT-1001</p>
          </div>

          <div>
            <p className="text-slate-400">Product</p>
            <p className="font-semibold mt-1">
              Printer Ink
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              Manufacturing Date
            </p>
            <p className="font-semibold mt-1">
              2026-01-10
            </p>
          </div>

          <div>
            <p className="text-slate-400">
              Supplier
            </p>
            <p className="font-semibold mt-1">
              Tech Distributor
            </p>
          </div>

        </div>

      </div>

      {/* Timeline */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <h2 className="text-xl font-bold mb-6">
          Batch Movement Timeline
        </h2>

        <div className="space-y-4">

          {movements.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A2742] rounded-xl p-4 flex justify-between"
            >
              <div>

                <p className="font-semibold">
                  {item.type}
                </p>

                <p className="text-slate-400 text-sm">
                  {item.warehouse}
                </p>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  {item.qty}
                </p>

                <p className="text-slate-400 text-sm">
                  {item.date}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <ShoppingCart className="text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold">15</h3>
          <p className="text-slate-400">
            Sold
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <ArrowRightLeft className="text-violet-400 mb-4" />
          <h3 className="text-3xl font-bold">20</h3>
          <p className="text-slate-400">
            Transferred
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <RotateCcw className="text-green-400 mb-4" />
          <h3 className="text-3xl font-bold">5</h3>
          <p className="text-slate-400">
            Returned
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <AlertTriangle className="text-orange-400 mb-4" />
          <h3 className="text-3xl font-bold">0</h3>
          <p className="text-slate-400">
            Damaged
          </p>
        </div>

      </div>

    </div>
  );
}