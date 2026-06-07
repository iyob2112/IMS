"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);
useEffect(() => {
  const openHandler = () => setOpen(true);
  window.addEventListener("open-sidebar", openHandler);
  return () => window.removeEventListener("open-sidebar", openHandler);
}, []);
  return (
  <>
    {open && (
      <div onClick={closeSidebar} className="fixed inset-0 bg-black/60 z-40" />
    )}

    <div
      className={`fixed top-0 left-0 h-full w-72 bg-slate-950 text-white z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-slate-800">
        <h2 className="font-bold">Menu</h2>

        <button onClick={closeSidebar}>✕</button>
      </div>

      <Sidebar onNavigate={closeSidebar} />
    </div>
  </>
);
}