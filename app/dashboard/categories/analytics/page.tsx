"use client";

export default function CategoryAnalyticsPage() {
  return (
    <div className="space-y-6 pt-10 p-3 text-white h-full min-h-screen">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Category Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Category performance insights
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            Categories
          </h3>

          <h2 className="text-4xl font-bold text-white mt-2">
            18
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            Products
          </h3>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">
            150
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            Revenue
          </h3>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            $45K
          </h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            Growth
          </h3>

          <h2 className="text-4xl font-bold text-purple-400 mt-2">
            +12%
          </h2>
        </div>

      </div>

    </div>
  );
}