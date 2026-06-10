"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { searchItems } from "@/data/searchData";

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex justify-center items-start pt-32">

      <Command className="w-full max-w-2xl bg-[#131C31] rounded-3xl border border-slate-700 overflow-hidden">

        <div className="flex items-center px-4 border-b border-slate-700">
          <Search size={18} className="text-slate-400" />

          <Command.Input
            autoFocus
            placeholder="Search products, customers, invoices..."
            className="w-full p-4 bg-transparent outline-none text-white"
          />
        </div>

        <Command.List className="max-h-96 overflow-y-auto">

          <Command.Empty className="p-4 text-slate-400">
            No results found.
          </Command.Empty>

          {searchItems.map((item) => (
            <Command.Item
              key={item.id}
              onSelect={() => {
                router.push(item.url);
                setOpen(false);
              }}
              className="p-4 cursor-pointer hover:bg-[#0B1120] text-white"
            >
              <div>
                <p>{item.title}</p>

                <p className="text-xs text-slate-400">
                  {item.type}
                </p>
              </div>
            </Command.Item>
          ))}
        </Command.List>

      </Command>
    </div>
  );
}