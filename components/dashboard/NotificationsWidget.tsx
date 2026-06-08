"use client";

export default function NotificationsWidget() {
  const alerts = [
    "Laptop stock running low",
    "New purchase received",
    "Supplier payment due",
    "Inventory audit tomorrow",
  ];

  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Notifications
      </h2>

      <div className="space-y-3">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-[#0B1120] p-3 rounded-xl text-slate-300"
          >
            {alert}
          </div>
        ))}

      </div>
    </div>
  );
}