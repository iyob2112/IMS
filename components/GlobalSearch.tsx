"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Package,
  Users,
  Truck,
  ShoppingCart,
  FileText,
  Receipt,
  X,
  LucideIcon,
} from "lucide-react";

type Category =
  | "All"
  | "Product"
  | "Customer"
  | "Supplier"
  | "Sale"
  | "Invoice"
  | "Purchase";

interface SearchItem {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  route: string;
}

const searchData: SearchItem[] = [
  { id: 1, title: "Dell XPS Laptop", category: "Product", route: "/dashboard/products" },
  { id: 2, title: "HP EliteBook", category: "Product", route: "/dashboard/products" },
  { id: 3, title: "John Doe", category: "Customer", route: "/dashboard/customers" },
  { id: 4, title: "ABC Supplier", category: "Supplier", route: "/dashboard/suppliers" },
  { id: 5, title: "Sale #102", category: "Sale", route: "/dashboard/sales" },
  { id: 6, title: "INV-1001", category: "Invoice", route: "/dashboard/invoices" },
  { id: 7, title: "PO-001", category: "Purchase", route: "/dashboard/purchases" },
];

const categoryIcons: Record<Exclude<Category, "All">, LucideIcon> = {
  Product: Package,
  Customer: Users,
  Supplier: Truck,
  Sale: ShoppingCart,
  Invoice: FileText,
  Purchase: Receipt,
};

interface Props {
  mobileMode?: boolean;
}

export default function GlobalSearch({ mobileMode }: Props) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      (category === "All" || item.category === category)
  );

  const categories: Category[] = [
    "All",
    "Product",
    "Customer",
    "Supplier",
    "Sale",
    "Invoice",
    "Purchase",
  ];

  return (
    <div className={mobileMode ? "w-full" : "relative w-96"}>

      {/* INPUT */}
      <div className="flex items-center bg-[#0B1120] rounded-xl px-4 py-2 border border-slate-700">
        <Search size={18} className="text-slate-400" />

        <input
          autoFocus={mobileMode}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="bg-transparent outline-none text-white ml-3 w-full"
        />
      </div>

      {/* RESULTS */}
      {query && (
        <div className={mobileMode
          ? "mt-4 flex-1 overflow-y-auto"
          : "absolute top-14 left-0 w-full bg-[#131C31] border border-slate-700 rounded-2xl shadow-2xl z-50"
        }>

          {/* categories (desktop only) */}
          {!mobileMode && (
            <div className="flex gap-2 p-3 border-b border-slate-700 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
                    category === cat
                      ? "bg-cyan-500 text-white"
                      : "bg-[#0B1120] text-slate-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* LIST */}
          <div className="max-h-96 overflow-y-auto">
            {filtered.length === 0 && (
              <div className="p-5 text-slate-400">No results found</div>
            )}

            {filtered.map((item) => {
              const Icon = categoryIcons[item.category];

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    router.push(item.route);
                    setQuery("");
                  }}
                  className="w-full p-4 text-left hover:bg-[#0B1120] border-b border-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-cyan-400" />
                    <div>
                      <p className="text-white">{item.title}</p>
                      <p className="text-slate-400 text-xs">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}