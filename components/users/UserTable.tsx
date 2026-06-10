"use client";

import { User } from "@/types/user";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface Props {
  users: User[];
    onView: (user: User) => void;
  onEdit: (user: User) => void;
}

export default function UserTable({ users, onView, onEdit }: Props){
  return (
    <div className="w-full">

      {/* ================= MOBILE CARDS ================= */}
      <div className="grid gap-4 md:hidden">

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-[#131C31] border border-slate-800 rounded-2xl p-4"
          >

            <div className="flex justify-between items-start">

              <div>
                <p className="text-white font-semibold">
                  {user.name}
                </p>

                <p className="text-slate-400 text-sm">
                  {user.email}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  user.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {user.status}
              </span>

            </div>

            <div className="mt-3 flex gap-2">

              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                {user.role}
              </span>

            </div>

            <div className="flex gap-2 mt-4">

           <button
  onClick={() => onView(user)}
  className="flex-1 bg-slate-800 py-2 rounded-lg"
>
  <Eye size={16} className="mx-auto" />
</button>

<button
  onClick={() => onEdit(user)}
  className="flex-1 bg-slate-800 py-2 rounded-lg"
>
  <Pencil size={16} className="mx-auto" />
</button>
              <button className="flex-1 bg-red-500/20 text-red-400 py-2 rounded-lg">
                <Trash2 size={16} className="mx-auto" />
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-800"
              >
                <td className="p-4 text-white">
                  {user.name}
                </td>

                <td className="p-4 text-slate-300">
                  {user.email}
                </td>

                <td className="p-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                    {user.role}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">

             <button
  onClick={() => onView(user)}
  className="p-2 rounded-lg bg-slate-800"
>
  <Eye size={16} />
</button>

<button
  onClick={() => onEdit(user)}
  className="p-2 rounded-lg bg-slate-800"
>
  <Pencil size={16} />
</button>

                    <button className="p-2 rounded-lg bg-red-500/20 text-red-400">
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}