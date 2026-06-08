"use client";

import {
  DollarSign,
  TrendingUp,
  Package,
  Users,
  Truck,
  AlertTriangle,
  Wallet,
  ShoppingCart,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "$254,000",
    icon: DollarSign,
    color: "text-green-400",
  },
  {
    title: "Profit",
    value: "$84,200",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    title: "Products",
    value: "1,245",
    icon: Package,
    color: "text-orange-400",
  },
  {
    title: "Customers",
    value: "856",
    icon: Users,
    color: "text-purple-400",
  },
  {
    title: "Suppliers",
    value: "42",
    icon: Truck,
    color: "text-yellow-400",
  },
  {
    title: "Orders",
    value: "5,421",
    icon: ShoppingCart,
    color: "text-blue-400",
  },
  {
    title: "Expenses",
    value: "$41,000",
    icon: Wallet,
    color: "text-red-400",
  },
  {
    title: "Low Stock",
    value: "17",
    icon: AlertTriangle,
    color: "text-pink-400",
  },
];

export default function ReportStats() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-[#131C31] border border-slate-800 rounded-3xl p-6"
          >
            <div className="flex justify-between">

              <div>
                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className={`text-4xl font-bold mt-2 ${item.color}`}>
                  {item.value}
                </h2>
              </div>

              <Icon className={item.color} />
            </div>
          </div>
        );
      })}
    </div>
  );
}