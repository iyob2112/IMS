"use client";


import ReportCard from "@/components/ReportCard";


export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex">


   

      <main className="flex-1 p-0 sm:p-4 md:p-0 lg:p-8">

 

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-6">

          <ReportCard
            title="Total Sales"
            value="$12,450"
            color="text-green-600"
          />

          <ReportCard
            title="Total Products"
            value="120"
            color=""
          />

          <ReportCard
            title="Total Stock Value"
            value="$8,300"
            color="text-blue-600"
          />

          <ReportCard
            title="Low Stock Items"
            value="7"
            color="text-red-600"
          />

        </div>

        {/* Sales Report Table */}
{/* Sales Report */}
<div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-6 sm:mt-8">

  <h2 className="text-lg sm:text-xl font-bold mb-4">
    Sales Report
  </h2>

  {/* ================= TABLE ================= */}
  <div className="hidden md:block overflow-x-auto">

    <table className="w-full">
      <thead className="bg-slate-50">
        <tr>
          <th className="p-4 text-left">Product</th>
          <th className="p-4 text-left">Quantity</th>
          <th className="p-4 text-left">Revenue</th>
          <th className="p-4 text-left">Date</th>
        </tr>
      </thead>

      <tbody>

        <tr className="border-t hover:bg-slate-50">
          <td className="p-4">Laptop</td>
          <td className="p-4">5</td>
          <td className="p-4 text-green-600 font-bold">$4000</td>
          <td className="p-4">2026-06-01</td>
        </tr>

        <tr className="border-t hover:bg-slate-50">
          <td className="p-4">Mouse</td>
          <td className="p-4">20</td>
          <td className="p-4 text-green-600 font-bold">$300</td>
          <td className="p-4">2026-06-02</td>
        </tr>

      </tbody>
    </table>

  </div>

  {/* ================= MOBILE CARDS ================= */}
  <div className="md:hidden space-y-4">

    <div className="border rounded-xl p-4">
      <h3 className="font-bold">Laptop</h3>
      <p className="text-sm mt-1">Quantity: 5</p>
      <p className="text-sm text-green-600 font-bold">Revenue: $4000</p>
      <p className="text-sm text-slate-600">Date: 2026-06-01</p>
    </div>

    <div className="border rounded-xl p-4">
      <h3 className="font-bold">Mouse</h3>
      <p className="text-sm mt-1">Quantity: 20</p>
      <p className="text-sm text-green-600 font-bold">Revenue: $300</p>
      <p className="text-sm text-slate-600">Date: 2026-06-02</p>
    </div>

  </div>

</div>

{/* ================= LOW STOCK ================= */}
<div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-6 sm:mt-8">

  <h2 className="text-lg sm:text-xl font-bold mb-4">
    Low Stock Report
  </h2>

  <div className="space-y-3 sm:space-y-4">

    <div className="flex justify-between items-center border-b pb-3">
      <span>Printer Ink</span>
      <span className="text-red-500 font-bold">3 left</span>
    </div>

    <div className="flex justify-between items-center border-b pb-3">
      <span>Monitor</span>
      <span className="text-red-500 font-bold">2 left</span>
    </div>

    <div className="flex justify-between items-center">
      <span>USB Cable</span>
      <span className="text-red-500 font-bold">5 left</span>
    </div>

  </div>
</div>

      </main>
    </div>
  );
}