"use client";

import {
  Layers3,
  Package,
  DollarSign,
  TrendingUp,
} from "lucide-react";
interface Props {
  open: boolean;
  onClose: () => void;
}
export default function CategoryDetailsPage({ open, onClose }: Props) {
    if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
<div className="bg-[#0B1120] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Electronics
        </h1>

        <p className="text-slate-400 mt-2">
          Devices and gadgets
        </p>
<button
  onClick={onClose}
  className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
>
  ✕
</button> 
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <Package className="text-cyan-400 mb-3" />
          <h2 className="text-3xl font-bold text-white">
            54
          </h2>
          <p className="text-slate-400">
            Products
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <DollarSign className="text-green-400 mb-3" />
          <h2 className="text-3xl font-bold text-green-400">
            $12,500
          </h2>
          <p className="text-slate-400">
            Inventory Value
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <TrendingUp className="text-purple-400 mb-3" />
          <h2 className="text-3xl font-bold text-purple-400">
            $8,400
          </h2>
          <p className="text-slate-400">
            Revenue
          </p>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <Layers3 className="text-orange-400 mb-3" />
          <h2 className="text-3xl font-bold text-orange-400">
            Active
          </h2>
          <p className="text-slate-400">
            Status
          </p>
        </div>

      </div>

      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 mt-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Products in Category
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4">Gaming Laptop</td>
              <td className="p-4">15</td>
              <td className="p-4">$1200</td>
            </tr>

            <tr>
              <td className="p-4">Monitor</td>
              <td className="p-4">30</td>
              <td className="p-4">$350</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
    </div>
  );
}