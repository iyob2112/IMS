"use client";

import Link from "next/link";
import { notifications } from "@/data/notificationsData";

export default function NotificationsWidget() {
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          Notifications
        </h2>

        <Link
          href="/dashboard/notifications"
          className="text-cyan-400 text-sm"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3">
        {notifications.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="bg-[#0B1120] p-3 rounded-xl"
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
    </div>
  );
}