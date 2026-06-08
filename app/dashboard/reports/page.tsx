"use client";

import ReportStats from "@/components/reports/ReportStats";
import ReportFilters from "@/components/reports/ReportFilters";
import ExecutiveSummary from "@/components/reports/ExecutiveSummary";
import RevenueChart from "@/components/reports/RevenueChart";
import SalesGrowthChart from "@/components/reports/SalesGrowthChart";
import TopProducts from "@/components/reports/TopProducts";
import TopCustomers from "@/components/reports/TopCustomers";
import LowStockReport from "@/components/reports/LowStockReport";
import ExpiryReport from "@/components/reports/ExpiryReport";
import InventoryValueChart from "@/components/reports/InventoryValueChart";
import CategoryPerformance from "@/components/reports/CategoryPerformance";
import ExportCenter from "@/components/reports/ExportCenter";
export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10 space-y-6">

      <div>
        <h1 className="text-4xl font-bold">
          Reports & Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Business intelligence dashboard
        </p>
      </div>

      <ReportStats />

      <ReportFilters />

      <ExecutiveSummary />
      <div className="grid xl:grid-cols-2 gap-6">
        <RevenueChart />
        <SalesGrowthChart />
      </div>

      <div className="grid xl:grid-cols-2 gap-6">
        <TopProducts />
        <TopCustomers />
      </div>
      <div className="grid xl:grid-cols-2 gap-6">
        <LowStockReport />
        <ExpiryReport />
      </div>

      <div className="grid xl:grid-cols-2 gap-6">
        <InventoryValueChart />
        <CategoryPerformance />
      </div>

      <ExportCenter />
    </div>
  );
}