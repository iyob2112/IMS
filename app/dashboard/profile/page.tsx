"use client";

import { UserCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto text-white h-full min-h-screen pt-10 p-3">
      
      <h1 className="text-2xl font-bold mb-6">
        {t("profile")}
      </h1>

      <div className="bg-[#131C31] border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
        
        <UserCircle2 size={60} className="text-cyan-400" />

        <div>
          <h2 className="text-lg font-semibold">
            {t("adminUser")}
          </h2>
          <p className="text-slate-400 text-sm">
            admin@shopinventory.com
          </p>
        </div>
      </div>

      <div className="mt-6 bg-[#131C31] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-white font-medium mb-4">
          {t("accountInfo")}
        </h3>

        <div className="space-y-3 text-sm text-slate-300">
          <p>
            <span className="text-slate-500">{t("role")}:</span> {t("administrator")}
          </p>
          <p>
            <span className="text-slate-500">{t("status")}:</span> {t("active")}
          </p>
          <p>
            <span className="text-slate-500">{t("joined")}:</span> June 2026
          </p>
        </div>
      </div>

    </div>
  );
}