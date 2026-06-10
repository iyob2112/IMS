"use client";

import { notifications } from "@/data/notificationsData";
import {
  Bell,
  Package,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6 pt-24">

      <h1 className="text-3xl font-bold mb-6">
        Notification Center
      </h1>

      <div className="space-y-4">

        {notifications.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl border ${
              item.read
                ? "bg-[#131C31] border-slate-700"
                : "bg-[#16213f] border-cyan-500"
            }`}
          >
            <div className="flex justify-between">

              <div className="flex gap-3">

                {item.type === "stock" && (
                  <Package className="text-yellow-400" />
                )}

                {item.type === "sale" && (
                  <ShoppingCart className="text-green-400" />
                )}

                {item.type === "purchase" && (
                  <Bell className="text-cyan-400" />
                )}

                {item.type === "system" && (
                  <AlertTriangle className="text-red-400" />
                )}

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-400">
                    {item.message}
                  </p>
                </div>
              </div>

              <span className="text-sm text-slate-500">
                {item.time}
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}