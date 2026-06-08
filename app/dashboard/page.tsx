"use client";

import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  Wallet,
} from "lucide-react";

import StatCard from "@/components/StatCard";

import RevenueExpenseChart from "@/components/dashboard/RevenueExpenseChart";
import SalesByBranch from "@/components/dashboard/SalesByBranch";
import CustomerGrowth from "@/components/dashboard/CustomerGrowth";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import NotificationsWidget from "@/components/dashboard/NotificationsWidget";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="space-y-6 text-white pt-10 p-3">

      {/* Welcome */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor your business performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <StatCard
          title="Revenue"
          value="$25,480"
          icon={
            <DollarSign
              size={30}
              className="text-green-400"
            />
          }
        />

        <StatCard
          title="Profit"
          value="$8,230"
          icon={
            <TrendingUp
              size={30}
              className="text-cyan-400"
            />
          }
        />

        <StatCard
          title="Orders"
          value="742"
          icon={
            <ShoppingCart
              size={30}
              className="text-purple-400"
            />
          }
        />

        <StatCard
          title="Customers"
          value="1,254"
          icon={
            <Users
              size={30}
              className="text-yellow-400"
            />
          }
        />

        <StatCard
          title="Expenses"
          value="$12,400"
          icon={
            <Wallet
              size={30}
              className="text-red-400"
            />
          }
        />

      </div>

      {/* Revenue Chart */}
      <RevenueExpenseChart />

      {/* Second Row */}
      <div className="grid lg:grid-cols-2 gap-6">

        <SalesByBranch />

        <CustomerGrowth />

      </div>

      {/* Third Row */}
      <div className="grid lg:grid-cols-3 gap-6">

        <RecentTransactions />

        <NotificationsWidget />

        <QuickActions />

      </div>

    </div>
  );
}