"use client";

import {
  Barcode,
  ScanLine,
  Download,
  Printer,
  Search,
  Package,
  TrendingUp,
  QrCode,
} from "lucide-react";

export default function BarcodePage() {
  const barcodes = [
    {
      code: "890123456789",
      sku: "LAP-001",
      product: "Gaming Laptop",
      created: "2026-06-08",
      status: "Active",
    },
    {
      code: "890123456790",
      sku: "MON-001",
      product: "Monitor",
      created: "2026-06-07",
      status: "Active",
    },
    {
      code: "890123456791",
      sku: "KEY-001",
      product: "Keyboard",
      created: "2026-06-06",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Barcode className="text-cyan-400" />
          Barcode Center
        </h1>

        <p className="text-slate-400 mt-2">
          Generate, manage and print product barcodes
        </p>
      </div>

      {/* KPI */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Total Barcodes
              </p>
              <h2 className="text-4xl font-bold mt-2">
                2,560
              </h2>
            </div>

            <Barcode className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Generated Today
              </p>
              <h2 className="text-4xl font-bold text-green-400 mt-2">
                52
              </h2>
            </div>

            <QrCode className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Printed Labels
              </p>
              <h2 className="text-4xl font-bold text-orange-400 mt-2">
                920
              </h2>
            </div>

            <Printer className="text-orange-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Scan Count
              </p>
              <h2 className="text-4xl font-bold text-purple-400 mt-2">
                5,320
              </h2>
            </div>

            <ScanLine className="text-purple-400" />
          </div>
        </div>

      </div>

      {/* Generator */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <h2 className="text-2xl font-bold mb-6">
          Generate Barcode
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <select className="bg-[#0B1120] p-3 rounded-xl">
            <option>Select Product</option>
          </select>

          <input
            placeholder="SKU"
            className="bg-[#0B1120] p-3 rounded-xl"
          />

          <input
            placeholder="Barcode Number"
            className="bg-[#0B1120] p-3 rounded-xl"
          />

          <button className="bg-cyan-600 rounded-xl">
            Generate
          </button>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">

        <button className="bg-cyan-600 p-4 rounded-2xl">
          Generate Labels
        </button>

        <button className="bg-green-600 p-4 rounded-2xl">
          Print Labels
        </button>

        <button className="bg-orange-600 p-4 rounded-2xl">
          Scan Product
        </button>

        <button className="bg-violet-600 p-4 rounded-2xl">
          Download PDF
        </button>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            placeholder="Search barcode..."
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl pl-12 py-3"
          />

        </div>

      </div>

      {/* Barcode Table */}
      <div className="bg-[#131C31] rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">Barcode</th>
              <th className="p-4 text-left">SKU</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Created</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {barcodes.map((item) => (

              <tr
                key={item.code}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                  {item.code}
                </td>

                <td className="p-4">
                  {item.sku}
                </td>

                <td className="p-4">
                  {item.product}
                </td>

                <td className="p-4">
                  {item.created}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      item.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
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

                    <button className="bg-green-600 px-3 py-1 rounded-lg">
                      Print
                    </button>

                    <button className="bg-violet-600 px-3 py-1 rounded-lg">
                      PDF
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