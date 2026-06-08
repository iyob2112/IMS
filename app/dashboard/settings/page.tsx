"use client";

import {
  Building2,
  Globe,
  Bell,
  Shield,
  Palette,
  DollarSign,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-10 p-3">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your application settings
        </p>
      </div>

      <div className="grid gap-6">

        {/* Company */}
        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-cyan-400" />
            <h2 className="text-xl font-bold text-white">
              Company Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              placeholder="Company Name"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

            <input
              placeholder="Business Email"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

            <input
              placeholder="Phone Number"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

            <input
              placeholder="Address"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

          </div>
        </div>

        {/* Currency */}
        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-green-400" />
            <h2 className="text-xl font-bold text-white">
              Currency & Tax
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <select className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>ETB (Birr)</option>
            </select>

            <input
              placeholder="VAT %"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

          </div>

        </div>

        {/* Language */}
        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-purple-400" />
            <h2 className="text-xl font-bold text-white">
              Language Settings
            </h2>
          </div>

          <select className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white w-full">
            <option>English</option>
            <option>Amharic</option>
            <option>Tigrinya</option>
          </select>

        </div>

        {/* Notifications */}
        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-yellow-400" />
            <h2 className="text-xl font-bold text-white">
              Notifications
            </h2>
          </div>

          <div className="space-y-4">

            <label className="flex justify-between items-center text-white">
              Low Stock Alerts
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center text-white">
              New Sales Alerts
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center text-white">
              Purchase Alerts
              <input type="checkbox" defaultChecked />
            </label>

          </div>

        </div>

        {/* Theme */}
        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-pink-400" />
            <h2 className="text-xl font-bold text-white">
              Appearance
            </h2>
          </div>

          <select className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white w-full">
            <option>Dark Theme</option>
            <option>Light Theme</option>
            <option>System Theme</option>
          </select>

        </div>

        {/* Security */}
        <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-red-400" />
            <h2 className="text-xl font-bold text-white">
              Security
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="password"
              placeholder="New Password"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
            />

          </div>

        </div>

        {/* Save Button */}
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 rounded-2xl font-semibold">
          Save Settings
        </button>

      </div>
    </div>
  );
}