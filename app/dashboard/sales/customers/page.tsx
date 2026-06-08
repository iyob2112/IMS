"use client";

import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Eye,
  Edit,
  Trash2,
  DollarSign,
  Star,
} from "lucide-react";

export default function CustomersPage() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      phone: "+251911111111",
      email: "john@example.com",
      purchases: "$12,500",
      due: "$500",
      delivery: "Delivery",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      phone: "+251922222222",
      email: "sarah@example.com",
      purchases: "$8,200",
      due: "$0",
      delivery: "Pending",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Johnson",
      phone: "+251933333333",
      email: "michael@example.com",
      purchases: "$3,500",
      due: "$200",
      delivery: "Pending",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Users className="text-cyan-400" />
            Customers
          </h1>

          <p className="text-slate-400 mt-2">
            Manage customer relationships and sales history
          </p>
        </div>

        <button className="bg-cyan-600 px-6 py-3 rounded-xl flex items-center gap-2">
          <Plus size={18} />
          Add Customer
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Total Customers</p>
          <h2 className="text-4xl font-bold mt-2">1,254</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">VIP Customers</p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">84</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Customer Due</p>
          <h2 className="text-4xl font-bold text-red-400 mt-2">$4,500</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <p className="text-slate-400">Loyalty Members</p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">742</h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-[#131C31] p-6 rounded-3xl">

        <div className="relative">

          <Search
            className="absolute left-4 top-4 text-slate-400"
            size={18}
          />

          <input
            placeholder="Search customer..."
            className="w-full bg-[#0B1120] py-3 pl-12 rounded-xl"
          />

        </div>

      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-[#131C31] rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#1A2742]">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Purchases</th>
              <th className="p-4 text-left">Due</th>
              <th className="p-4 text-left">Delivery</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">
                  <div>
                    <p className="font-semibold">
                      {customer.name}
                    </p>

                    <p className="text-sm text-slate-400">
                      {customer.email}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {customer.phone}
                </td>

                <td className="p-4 text-green-400">
                  {customer.purchases}
                </td>

                <td className="p-4 text-red-400">
                  {customer.due}
                </td>

                <td className="p-4 text-yellow-400">
                  {customer.delivery}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                    {customer.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

                    <button className="bg-cyan-600 p-2 rounded-lg">
                      <Eye size={16} />
                    </button>

                    <button className="bg-indigo-600 p-2 rounded-lg">
                      <Edit size={16} />
                    </button>

                    <button className="bg-red-600 p-2 rounded-lg">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">

        {customers.map((customer) => (
          <div
            key={customer.id}
            className="bg-[#131C31] rounded-3xl p-5"
          >
            <div className="flex justify-between">

              <div>
                <h3 className="font-bold text-lg">
                  {customer.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {customer.email}
                </p>
              </div>

              <Star className="text-yellow-400" />
            </div>

            <div className="mt-4 space-y-2">

              <p className="flex items-center gap-2">
                <Phone size={15} />
                {customer.phone}
              </p>

              <p className="flex items-center gap-2">
                <Mail size={15} />
                {customer.email}
              </p>

              <p className="text-green-400">
                Purchases: {customer.purchases}
              </p>

              <p className="text-red-400">
                Due: {customer.due}
              </p>

            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">

              <button className="bg-cyan-600 py-2 rounded-xl">
                View
              </button>

              <button className="bg-indigo-600 py-2 rounded-xl">
                Edit
              </button>

              <button className="bg-red-600 py-2 rounded-xl">
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}