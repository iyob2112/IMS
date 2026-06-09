"use client";

import Image from "next/image";
import {
  Package,
  Barcode,
  TrendingUp,
  ShoppingCart,
  Truck,
} from "lucide-react";
interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProductDetailsPage({ open, onClose }: Props) {
   if (!open) return null;
  return (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
<div className="bg-[#0B1120] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">
      {/* Header */}
      <div className=" mb-6">
        <h1 className="text-4xl font-bold text-white ">
          Gaming Laptop
        </h1>

        <p className="text-slate-400 mt-2">
          Product Details & Analytics
        </p>
<button
  onClick={onClose}
  className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
>
  ✕
</button>      </div>

      {/* Product Info */}
      <div className="grid lg:grid-cols-3 gap-6 ">

        {/* Product Card */}
        <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

          <img
            src="https://png.pngtree.com/png-clipart/20241120/original/pngtree-a-realistic-black-mouse-png-image_17269470.png"
            alt="Laptop"
            width={400}
            height={400}
            className="rounded-2xl"
          />

          <div className="mt-6 space-y-3">

            <div className="flex justify-between">
              <span className="text-slate-400">
                SKU
              </span>

              <span className="text-white">
                LAP-001
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Barcode
              </span>

              <span className="text-cyan-400">
                123456789
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Category
              </span>

              <span className="text-white">
                Electronics
              </span>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

          <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

            <div className="flex justify-between">

              <div>
                <p className="text-slate-400">
                  Stock
                </p>

                <h2 className="text-4xl font-bold text-white mt-2">
                  25
                </h2>
              </div>

              <Package className="text-cyan-400" />
            </div>

          </div>

          <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

            <div className="flex justify-between">

              <div>
                <p className="text-slate-400">
                  Total Sales
                </p>

                <h2 className="text-4xl font-bold text-green-400 mt-2">
                  120
                </h2>
              </div>

              <ShoppingCart className="text-green-400" />
            </div>

          </div>

          <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

            <div className="flex justify-between">

              <div>
                <p className="text-slate-400">
                  Revenue
                </p>

                <h2 className="text-4xl font-bold text-purple-400 mt-2">
                  $54,000
                </h2>
              </div>

              <TrendingUp className="text-purple-400" />
            </div>

          </div>

          <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">

            <div className="flex justify-between">

              <div>
                <p className="text-slate-400">
                  Supplier
                </p>

                <h2 className="text-xl font-bold text-orange-400 mt-2">
                  Tech Supplier
                </h2>
              </div>

              <Truck className="text-orange-400" />
            </div>

          </div>

        </div>

      </div>

      {/* Stock History */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 mt-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Stock History
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between bg-[#0B1120] p-4 rounded-xl">
            <span className="text-white">
              Stock Added
            </span>

            <span className="text-green-400">
              +50
            </span>
          </div>

          <div className="flex justify-between bg-[#0B1120] p-4 rounded-xl">
            <span className="text-white">
              Sale Completed
            </span>

            <span className="text-red-400">
              -10
            </span>
          </div>

        </div>

      </div>

      {/* Purchase History */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 mt-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Purchase History
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="text-left p-4">
                Date
              </th>

              <th className="text-left p-4">
                Supplier
              </th>

              <th className="text-left p-4">
                Qty
              </th>

              <th className="text-left p-4">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-4 text-white">
                2026-06-01
              </td>

              <td className="p-4 text-white">
                Tech Supplier
              </td>

              <td className="p-4 text-white">
                50
              </td>

              <td className="p-4 text-green-400">
                $45,000
              </td>
            </tr>

          </tbody>

        </table>

      </div>
    </div>
</div>
  );
}