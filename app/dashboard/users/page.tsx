"use client";

import { useState } from "react";
import {
  Plus,
  Users,
  Shield,
  UserCheck,
} from "lucide-react";

import { users } from "@/data/users";

import UserTable from "@/components/users/UserTable";
import AddUserModal from "@/components/users/AddUserModal";

export default function UsersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-10 p-3">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Users
          </h1>

          <p className="text-slate-400">
            Manage system users
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add User
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between">
            <div>
              <p className="text-slate-400">
                Total Users
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                12
              </h2>
            </div>

            <Users className="text-cyan-400" size={30} />
          </div>

        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Admins
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">
                2
              </h2>
            </div>

            <Shield className="text-green-400" size={30} />

          </div>

        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-800">

          <div className="flex justify-between">

            <div>
              <p className="text-slate-400">
                Active Users
              </p>

              <h2 className="text-4xl font-bold text-cyan-400 mt-2">
                10
              </h2>
            </div>

            <UserCheck
              className="text-cyan-400"
              size={30}
            />

          </div>

        </div>

      </div>

      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6 mb-6">

        <input
          placeholder="Search users..."
          className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
        />

      </div>

      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

        <UserTable users={users} />

      </div>

      <AddUserModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}