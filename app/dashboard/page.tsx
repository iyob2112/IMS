import {
  Package,
  Layers3,
  Truck,
  DollarSign,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function DashboardPage() {
  return (
<div className="min-h-screen bg-[#0B1120] pt-10 p-3">
  {/* Header */}
  <div className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-4xl font-bold text-white">
        Dashboard
      </h1>
      <p className="text-slate-400 mt-2">
        Inventory overview and sales performance
      </p>
    </div>

    <div className="bg-[#131C31] px-5 py-3 rounded-2xl border border-slate-800">
      <span className="text-slate-300">
        June 2026
      </span>
    </div>
  </div>

  {/* Stats */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

  {/* Products */}
  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 flex items-center justify-between">

    <div>
      <p className="text-slate-400">Products</p>
      <h2 className="text-4xl font-bold text-white mt-2">150</h2>
    </div>

    <div className="bg-cyan-500/10 p-3 rounded-2xl">
      <Package className="text-cyan-400" size={28} />
    </div>

  </div>

  {/* Categories */}
  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 flex items-center justify-between">

    <div>
      <p className="text-slate-400">Categories</p>
      <h2 className="text-4xl font-bold text-white mt-2">12</h2>
    </div>

    <div className="bg-violet-500/10 p-3 rounded-2xl">
      <Layers3 className="text-violet-400" size={28} />
    </div>

  </div>

  {/* Suppliers */}
  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 flex items-center justify-between">

    <div>
      <p className="text-slate-400">Suppliers</p>
      <h2 className="text-4xl font-bold text-white mt-2">24</h2>
    </div>

    <div className="bg-orange-500/10 p-3 rounded-2xl">
      <Truck className="text-orange-400" size={28} />
    </div>

  </div>

  {/* Sales */}
  <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 flex items-center justify-between">

    <div>
      <p className="text-slate-400">Sales</p>
      <h2 className="text-4xl font-bold text-white mt-2">$5,400</h2>
    </div>

    <div className="bg-emerald-500/10 p-3 rounded-2xl">
      <DollarSign className="text-emerald-400" size={28} />
    </div>

  </div>

</div>

  {/* Revenue Card */}
  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 mb-8">
    <p className="text-white/80">
      Monthly Revenue
    </p>

    <h2 className="text-5xl font-bold text-white mt-2">
      $25,480
    </h2>

    <div className="flex items-center gap-2 mt-4">
      <TrendingUp className="text-green-300" />
      <span className="text-green-200">
        +12.5% this month
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="grid lg:grid-cols-2 gap-6">

    {/* Recent Sales */}
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        Recent Sales
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between bg-[#1A2742] p-4 rounded-xl">
          <span className="text-slate-300">Laptop</span>
          <span className="text-green-400">$1200</span>
        </div>

        <div className="flex justify-between bg-[#1A2742] p-4 rounded-xl">
          <span className="text-slate-300">Mouse</span>
          <span className="text-green-400">$100</span>
        </div>

        <div className="flex justify-between bg-[#1A2742] p-4 rounded-xl">
          <span className="text-slate-300">Keyboard</span>
          <span className="text-green-400">$150</span>
        </div>
      </div>
    </div>

    {/* Low Stock */}
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        Low Stock Alerts
      </h2>

      <div className="space-y-4">

        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between">
          <span className="text-red-300">
            Printer Ink
          </span>
          <span className="text-red-400 font-bold">
            3 Left
          </span>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between">
          <span className="text-red-300">
            Monitor
          </span>
          <span className="text-red-400 font-bold">
            2 Left
          </span>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex justify-between">
          <span className="text-yellow-300">
            USB Cable
          </span>
          <span className="text-yellow-400 font-bold">
            5 Left
          </span>
        </div>

      </div>
    </div>

  </div>
</div>
  );
}