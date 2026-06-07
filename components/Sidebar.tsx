"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Box,
  Tags,
  Truck,
  PackagePlus,
  ShoppingCart,
  FileText,
  UserCircle2,
} from "lucide-react";

// 👇 ADD THIS TYPE
type SidebarProps = {
  onNavigate?: () => void;
};

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
    const { t } = useTranslation();
  const menu = [
    { name: t("profile"), path: "/dashboard/profile", icon: UserCircle2 },
    { name: t("dashboard"), path: "/dashboard", icon: LayoutDashboard },
    { name: t("products"), path: "/dashboard/products", icon: Box },
    { name: t("categories"), path: "/dashboard/categories", icon: Tags },
    { name: t("suppliers"), path: "/dashboard/suppliers", icon: Truck },
    { name: t("stockIn"), path: "/dashboard/stock-in", icon: PackagePlus },
    { name: t("sales"), path: "/dashboard/sales", icon: ShoppingCart },
    { name: t("reports"), path: "/dashboard/reports", icon: FileText },

      
  ];

  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen h-full p-6 pt-20 fixed  ">

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
      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition relative overflow-hidden ${
                active
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              {/* Active indicator */}
              {active && (
                <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r" />
              )}

              <Icon size={18} />
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
<button className="bg-red-500 text-white px-4 py-2 rounded-xl w-full">
  Logout
</button>
    </aside>
  );
}