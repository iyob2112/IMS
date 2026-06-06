"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="lg:hidden flex items-center justify-between bg-slate-950 text-white p-4 fixed w-full z-50">
        <h1 className="font-bold">Shop Inventory</h1>

        <button
          onClick={() => setOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-950 text-white z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-800">
          <h2 className="font-bold">Menu</h2>

          <button onClick={closeSidebar}>
            ✕
          </button>
        </div>

        {/* PASS CLOSE FUNCTION */}
        <Sidebar onNavigate={closeSidebar} />
      </div>
    </>
  );
}