"use client";

import ReportCard from "@/components/ReportCard";
import { TrendingUp, Box, Package, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function ReportsPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#0B1120] text-white  pt-10 p-3">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
      {t("ReportsandAnalytics")}
        </h1>

        <p className="text-slate-400 mt-1">
        {t("Overviewofsalesstockandperformance")}
        </p>
      </div>

      {/* Summary Cards */}
   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">

  <ReportCard
    title={t("TotalSales")}
    value="$12,450"
    color="text-green-400"
    icon={TrendingUp}
    iconBg="bg-green-500/10"
    iconColor="text-green-400"
  />

  <ReportCard
    title={t("TotalProducts")}
    value="120"
    color="text-cyan-400"
    icon={Box}
    iconBg="bg-cyan-500/10"
    iconColor="text-cyan-400"
  />

  <ReportCard
    title={t("TotalStockValue")}
    value="$8,300"
    color="text-blue-400"
    icon={Package}
    iconBg="bg-blue-500/10"
    iconColor="text-blue-400"
  />

  <ReportCard
    title={t("LowStockItems")}
    value="7"
    color="text-red-400"
    icon={AlertTriangle}
    iconBg="bg-red-500/10"
    iconColor="text-red-400"
  />

</div>

      {/* Sales Report */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 sm:p-6 mt-6 sm:mt-8">

        <h2 className="text-xl font-bold mb-4">
          {t("SalesReport")}
        </h2>

        {/* TABLE */}
        <div className="hidden md:block overflow-x-auto">

          <table className="w-full text-sm text-slate-300">

            <thead className="bg-[#1A2742] text-slate-300">
              <tr>
              <th className="p-4 text-left">{t("products")}</th>
                <th className="p-4 text-left">{t("quantity")}</th>
                <th className="p-4 text-left">{t("revenue")}</th>
                <th className="p-4 text-left">{t("date")}</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t border-slate-800 hover:bg-[#1A2742]">
                <td className="p-4 text-white">Laptop</td>
                <td className="p-4">5</td>
                <td className="p-4 text-green-400 font-bold">$4000</td>
                <td className="p-4 text-slate-400">2026-06-01</td>
              </tr>

              <tr className="border-t border-slate-800 hover:bg-[#1A2742]">
                <td className="p-4 text-white">Mouse</td>
                <td className="p-4">20</td>
                <td className="p-4 text-green-400 font-bold">$300</td>
                <td className="p-4 text-slate-400">2026-06-02</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* MOBILE */}
        <div className="md:hidden space-y-4">

          <div className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4">
            <h3 className="font-bold text-white">Laptop</h3>
            <p className="text-sm text-slate-300 mt-1">{t("quantity")}: 5</p>
            <p className="text-sm text-green-400 font-bold">{t("revenue")}: $4000</p>
            <p className="text-sm text-slate-400">{t("date")}: 2026-06-01</p>
          </div>

          <div className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4">
            <h3 className="font-bold text-white">Mouse</h3>
            <p className="text-sm text-slate-300 mt-1">{t("quantity")}: 20</p>
            <p className="text-sm text-green-400 font-bold">{t("revenue")}: $300</p>
            <p className="text-sm text-slate-400">{t("date")}: 2026-06-02</p>
          </div>

        </div>

      </div>

      {/* Low Stock */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 sm:p-6 mt-6 sm:mt-8">

        <h2 className="text-xl font-bold mb-4">
          {t("LowStockReport")}
        </h2>

        <div className="space-y-3 sm:space-y-4">

          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <span className="text-slate-300">Printer Ink</span>
            <span className="text-red-400 font-bold">3 {t("left")}</span>
          </div>

          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <span className="text-slate-300">Monitor</span>
            <span className="text-red-400 font-bold">2 {t("left")}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-300">USB Cable</span>
            <span className="text-red-400 font-bold">5 {t("left")}</span>
          </div>

        </div>

      </div>

    </div>
  );
}