"use client";

import { useState } from "react";
import Link from "next/link";
import { notifications } from "@/data/notificationsData";
import { X } from "lucide-react";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="
        absolute right-0 top-12 w-96
        max-sm:fixed max-sm:inset-0 max-sm:w-full
        bg-[#131C31] border border-slate-700
        max-sm:rounded-none rounded-2xl
        shadow-xl z-50 flex flex-col
      "
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-white font-bold">Notifications</h3>

        {/* Close button (mobile friendly) */}
        <button
          onClick={() => setOpen(false)}
          className="text-slate-400 hover:text-white"
        >
          <X size={22} />
        </button>
      </div>

      {/* List */}
      <div className="flex-1 max-h-96 max-sm:max-h-[calc(100vh-120px)] overflow-y-auto">
        {notifications.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className={`p-4 border-b border-slate-800 hover:bg-[#0B1120] cursor-pointer ${
              !item.read ? "bg-[#0f1b36]" : ""
            }`}
          >
            <p className="text-white text-sm font-medium">{item.title}</p>
            <p className="text-slate-400 text-xs mt-1">{item.message}</p>
            <p className="text-cyan-400 text-xs mt-2">{item.time}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Link
        href="/dashboard/notifications"
        className="block text-center text-cyan-400 py-3 border-t border-slate-700 hover:bg-[#0B1120]"
      >
        View All Notifications
      </Link>
    </div>
  );
}