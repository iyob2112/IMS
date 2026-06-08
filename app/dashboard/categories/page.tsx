"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers3,
  Package,
  DollarSign,
  AlertTriangle,
  BarChart3,
  Plus,
} from "lucide-react";

import CategoryTable from "@/components/CategoryTable";
import AddCategoryModal from "@/components/AddCategoryModal";

export default function CategoriesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6 pt-10 p-3 text-white h-full min-h-screen">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <Layers3 className="text-violet-400" />
            Categories Management
          </h1>

          <p className="text-slate-400 mt-2">
            Organize and manage inventory categories
          </p>
        </div>

        <div className="flex gap-3">

          <Link
            href="/dashboard/categories/analytics"
            className="bg-cyan-600 px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <BarChart3 size={18} />
            Analytics
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="bg-violet-600 px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Plus size={18} />
            Add Category
          </button>

        </div>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Total Categories
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                18
              </h2>
            </div>

            <Layers3 className="text-violet-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Products
              </p>

              <h2 className="text-4xl font-bold text-cyan-400 mt-2">
                150
              </h2>
            </div>

            <Package className="text-cyan-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Inventory Value
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                $45,000
              </h2>
            </div>

            <DollarSign className="text-green-400" />
          </div>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Uncategorized
              </p>

              <h2 className="text-4xl font-bold text-red-400 mt-2">
                3
              </h2>
            </div>

            <AlertTriangle className="text-red-400" />
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4">

        <div className="flex flex-col lg:flex-row gap-3">

          <input
            type="text"
            placeholder="Search category..."
            className="flex-1 bg-[#0B1120] border border-slate-700 px-4 py-3 rounded-xl text-white"
          />

          <select className="bg-[#0B1120] border border-slate-700 px-4 py-3 rounded-xl">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="bg-green-600 px-5 rounded-xl">
            Export
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">
        <CategoryTable />
      </div>

      {/* Analytics Preview */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

          <h2 className="text-xl font-bold text-white mb-4">
            Top Categories
          </h2>

          <div className="space-y-4">

            <div>
              <div className="flex justify-between">
                <span>Electronics</span>
                <span>54 Products</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full mt-2">
                <div className="h-2 bg-cyan-500 rounded-full w-[90%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Accessories</span>
                <span>33 Products</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full mt-2">
                <div className="h-2 bg-violet-500 rounded-full w-[70%]" />
              </div>
            </div>

          </div>

        </div>

        <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

          <h2 className="text-xl font-bold text-white mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-3">

            <button className="bg-[#0B1120] p-4 rounded-xl">
              Add Category
            </button>

            <button className="bg-[#0B1120] p-4 rounded-xl">
              Import
            </button>

            <button className="bg-[#0B1120] p-4 rounded-xl">
              Export
            </button>

            <Link
              href="/dashboard/categories/analytics"
              className="bg-[#0B1120] p-4 rounded-xl text-center"
            >
              Analytics
            </Link>

          </div>

        </div>

      </div>

      <AddCategoryModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}