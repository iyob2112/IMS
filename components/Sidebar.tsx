"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, CreditCard, RotateCcw } from "lucide-react";
import {
  LayoutDashboard,
  Box,
  Tags,
  Truck,
  PackagePlus,
  ShoppingCart,
  FileText,
  UserCircle2,
  Users,
  Receipt,
  Warehouse,
  BarChart3,
  Monitor,
  Shield,
  Settings,

} from "lucide-react";

// 👇 ADD THIS TYPE
type SidebarProps = {
  onNavigate?: () => void;
};
import { useState } from "react";
export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useTranslation();
//   const menu = [
//     { name: t("profile"), path: "/dashboard/profile", icon: UserCircle2 },
//     { name: t("dashboard"), path: "/dashboard", icon: LayoutDashboard },
//     { name: t("products"), path: "/dashboard/products", icon: Box },
//     { name: t("categories"), path: "/dashboard/categories", icon: Tags },
//     { name: t("suppliers"), path: "/dashboard/suppliers", icon: Truck },
//     { name: t("stockIn"), path: "/dashboard/stock-in", icon: PackagePlus },
//    {
//   name: "Sales",
//   icon: ShoppingCart,
//   children: [
//     {
//       name: "Overview",
//       path: "/dashboard/sales",
//     },
//     {
//       name: "POS",
//       path: "/dashboard/sales/pos",
//     },
//     {
//       name: "Customers",
//       path: "/dashboard/sales/customers",
//     },
//     {
//       name: "Invoices",
//       path: "/dashboard/sales/invoices",
//     },
//     {
//       name: "Payments",
//       path: "/dashboard/sales/payments",
//     },
//     {
//       name: "Returns",
//       path: "/dashboard/sales/returns",
//     },
//     {
//       name: "Analytics",
//       path: "/dashboard/sales/analytics",
//     },
//   ],
// },
//     { name: t("reports"), path: "/dashboard/reports", icon: FileText },
//     {
//       name: t("customers"),
//       path: "/dashboard/customers",
//       icon: Users,
//     },
//     {
//       name: t("purchases"),
//       path: "/dashboard/purchases",
//       icon: Receipt,
//     },
//     {
//       name: t("inventory"),
//       path: "/dashboard/inventory",
//       icon: Warehouse,
//     },
//     {
//       name: t("analytics"),
//       path: "/dashboard/analytics",
//       icon: BarChart3,
//     },
//     {
//       name: "POS",
//       path: "/dashboard/pos",
//       icon: Monitor,
//     },
//     {
//       name: t("users"),
//       path: "/dashboard/users",
//       icon: Shield,
//     },
//     {
//       name: t("settings"),
//       path: "/dashboard/settings",
//       icon: Settings,
//     },
//     // {
//     //   name: "Warehouses",
//     //   path: "/dashboard/warehouses",
//     //   icon: Warehouse,
//     // }
//     {
//       name: "Invoices",
//       path: "/dashboard/invoices",
//       icon: Receipt,
//     }
//   ];
const menu = [
  {
    title: "MAIN",
    items: [
      {
        name: t("dashboard"),
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "POS",
        path: "/dashboard/pos",
        icon: Monitor,
      },
    ],
  },

  {
    title: "PRODUCTS",
    items: [
      {
        name: t("products"),
        path: "/dashboard/products",
        icon: Box,
      },
      {
        name: t("categories"),
        path: "/dashboard/categories",
        icon: Tags,
      },
      {
        name: t("suppliers"),
        path: "/dashboard/suppliers",
        icon: Truck,
      },
    ],
  },

  {
    title: "INVENTORY",
    items: [
      {
        name: t("inventory"),
        path: "/dashboard/inventory",
        icon: Warehouse,
      },
      {
        name: t("stockIn"),
        path: "/dashboard/stock-in",
        icon: PackagePlus,
      },
      {
        name: t("purchases"),
        path: "/dashboard/purchases",
        icon: Receipt,
      },
    ],
  },

{
  title: "SALES",
  items: [
    {
      name: t("salesOverview"),
      path: "/dashboard/sales",
      icon: ShoppingCart,
    },
    {
      name: t("customers"),
      path: "/dashboard/sales/customers",
      icon: Users,
    },
    {
      name: t("invoices"),
      path: "/dashboard/sales/invoices",
      icon: FileText,
    },
    {
      name: t("payments"),
      path: "/dashboard/sales/payments",
      icon: CreditCard,
    },
    {
      name: t("returns"),
      path: "/dashboard/sales/returns",
      icon: RotateCcw,
    },
    {
      name: t("salesAnalytics"),
      path: "/dashboard/sales/analytics",
      icon: BarChart3,
    },
  ],
},

  {
    title: "SYSTEM",
    items: [
      {
        name: t("users"),
        path: "/dashboard/users",
        icon: Shield,
      },
      {
        name: t("settings"),
        path: "/dashboard/settings",
        icon: Settings,
      },
      {
        name: t("profile"),
        path: "/dashboard/profile",
        icon: UserCircle2,
      },
    ],
  },
];

  return (
    <aside className="w-72 bg-slate-950 text-white h-screen p-6 pt-20 fixed overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-bold tracking-wide">
          {t("ShopInventory")}
        </h1>
        <p className="text-slate-400 text-sm">
          {t("AdminPanel")}
        </p>
      </div>

      {/* Menu */}
 <nav className="space-y-6">
  {menu.map((group) => (
    <div key={group.title}>
      <p className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase">
        {group.title}
      </p>

      <div className="space-y-2">
        {group.items.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  ))}
</nav>
      <button className="bg-red-500 text-white px-4 py-2 rounded-xl w-full">
        Logout
      </button>
    </aside>
  );
}