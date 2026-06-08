"use client";

import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Link
          href="/dashboard/products"
          className="bg-cyan-600 p-4 rounded-xl text-center text-white"
        >
          Add Product
        </Link>

        <Link
          href="/dashboard/sales"
          className="bg-green-600 p-4 rounded-xl text-center text-white"
        >
          New Sale
        </Link>

        <Link
          href="/dashboard/purchases"
          className="bg-purple-600 p-4 rounded-xl text-center text-white"
        >
          Purchase
        </Link>

        <Link
          href="/dashboard/customers"
          className="bg-orange-600 p-4 rounded-xl text-center text-white"
        >
          Customer
        </Link>

      </div>
    </div>
  );
}