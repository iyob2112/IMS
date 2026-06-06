"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Box,
  Tags,
  Truck,
  PackagePlus,
  ShoppingCart,
  FileText,
} from "lucide-react";

// 👇 ADD THIS TYPE
type SidebarProps = {
  onNavigate?: () => void;
};

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Products", path: "/dashboard/products", icon: Box },
    { name: "Categories", path: "/dashboard/categories", icon: Tags },
    { name: "Suppliers", path: "/dashboard/suppliers", icon: Truck },
    { name: "Stock In", path: "/dashboard/stock-in", icon: PackagePlus },
    { name: "Sales", path: "/dashboard/sales", icon: ShoppingCart },
    { name: "Reports", path: "/dashboard/reports", icon: FileText },

      
  ];

  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen p-6">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-bold tracking-wide">
          Shop Inventory
        </h1>
        <p className="text-slate-400 text-sm">
          Admin Panel
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