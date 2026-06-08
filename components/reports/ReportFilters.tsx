"use client";

export default function ReportFilters() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="date"
          className="bg-[#1A2742] p-3 rounded-xl"
        />

        <input
          type="date"
          className="bg-[#1A2742] p-3 rounded-xl"
        />

        <select className="bg-[#1A2742] p-3 rounded-xl">
          <option>All Categories</option>
        </select>

        <select className="bg-[#1A2742] p-3 rounded-xl">
          <option>All Warehouses</option>
        </select>

      </div>

    </div>
  );
}