"use client";

import { useState } from "react";
import { Plus, Users } from "lucide-react";

import CustomerTable from "@/components/customers/CustomerTable";
import AddCustomerModal from "@/components/customers/AddCustomerModal";

import { customers } from "@/data/customers";

export default function CustomersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] pt-10 p-3">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Customers
          </h1>

          <p className="text-slate-400">
            Manage customer records
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add Customer
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-slate-400">
                Total Customers
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                540
              </h2>
            </div>

            <Users className="text-cyan-400" size={30} />
          </div>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <p className="text-slate-400">
            Active Customers
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            488
          </h2>
        </div>

        <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-800">
          <p className="text-slate-400">
            Total Revenue
          </p>

          <h2 className="text-4xl font-bold text-emerald-400 mt-2">
            $92,450
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6 mb-6">

        <input
          placeholder="Search customer..."
          className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
        />

      </div>

      {/* Table */}
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

        <CustomerTable customers={customers} />

      </div>

      <AddCustomerModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}