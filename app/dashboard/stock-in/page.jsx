"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StockInForm from "@/components/StockInForm";
import StockTable from "@/components/StockTable";

export default function StockInPage() {
  return (
    <div className="flex">
  

      <main className="flex-1 p-0 bg-slate-100 min-h-screen">

        <StockInForm />

        <StockTable />
      </main>
    </div>
  );
}