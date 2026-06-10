"use client";

import Link from "next/link";
import { notifications } from "@/data/notificationsData";

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 top-12 w-96 bg-[#131C31] border border-slate-700 rounded-2xl shadow-xl z-50">

      <div className="p-4 border-b border-slate-700">
        <h3 className="text-white font-bold">
          Notifications
        </h3>
      </div>

      <div className="max-h-96 overflow-y-auto">

        {notifications.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className={`p-4 border-b border-slate-800 hover:bg-[#0B1120] cursor-pointer ${
              !item.read ? "bg-[#0f1b36]" : ""
            }`}
          >
            <p className="text-white text-sm font-medium">
              {item.title}
            </p>

            <p className="text-slate-400 text-xs mt-1">
              {item.message}
            </p>

            <p className="text-cyan-400 text-xs mt-2">
              {item.time}
            </p>
          </div>
        ))}

      </div>

      <Link
        href="/dashboard/notifications"
        className="block text-center text-cyan-400 py-3 hover:bg-[#0B1120]"
      >
        View All Notifications
      </Link>
    </div>
  );
}