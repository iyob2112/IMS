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
import {User} from "@/types/user"

export default function UsersPage() {
  const [open, setOpen] = useState(false);
const [selectedUser, setSelectedUser] = useState<User | null>(null);
const [editMode, setEditMode] = useState(false);
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

<UserTable
  users={users}
  onView={(user) => {
    setSelectedUser(user);
    setEditMode(false);
  }}
  onEdit={(user) => {
    setSelectedUser(user);
    setEditMode(true);
  }}
/>

      </div>

      <AddUserModal
        open={open}
        onClose={() => setOpen(false)}
      />
{selectedUser && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

    <div className="bg-[#131C31] w-full max-w-lg rounded-2xl p-6 border border-slate-800 relative">

      {/* Close */}
      <button
        onClick={() => setSelectedUser(null)}
        className="absolute top-3 right-3 text-slate-400 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">
        {editMode ? "Edit User" : "User Details"}
      </h2>

      {!editMode ? (
        /* VIEW MODE */
 <div className="space-y-5">

  {/* NAME */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Name</p>
    <div className="p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white">
      {selectedUser.name}
    </div>
  </div>

  {/* EMAIL */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Email</p>
    <div className="p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white">
      {selectedUser.email}
    </div>
  </div>

  {/* ROLE */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Role</p>
    <div className="p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white">
      {selectedUser.role}
    </div>
  </div>

  {/* STATUS */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Status</p>

    <span
      className={`inline-block px-3 py-1 rounded-full text-xs ${
        selectedUser.status === "Active"
          ? "bg-green-500/20 text-green-400"
          : "bg-red-500/20 text-red-400"
      }`}
    >
      {selectedUser.status}
    </span>
  </div>

</div>
      ) : (
        /* EDIT MODE */
     <div className="space-y-4">

  {/* NAME */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Name</p>
    <input
      className="w-full p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
      defaultValue={selectedUser.name}
    />
  </div>

  {/* EMAIL */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Email</p>
    <input
      className="w-full p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
      defaultValue={selectedUser.email}
    />
  </div>

  {/* ROLE */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Role</p>
    <select
      defaultValue={selectedUser.role}
      className="w-full p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 appearance-none"
    >
      <option value="Admin">Admin</option>
      <option value="Manager">Manager</option>
      <option value="User">User</option>
    </select>
  </div>

  {/* STATUS */}
  <div>
    <p className="text-sm text-slate-400 mb-1">Status</p>
    <select
      defaultValue={selectedUser.status}
      className="w-full p-3 bg-[#0B1120] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 appearance-none"
    >
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>

  {/* SAVE BUTTON */}
  <button className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-medium transition">
    Save Changes
  </button>

</div>
      )}

    </div>

  </div>
)}
    </div>
  );
}