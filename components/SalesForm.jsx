"use client";
import { useTranslation } from "react-i18next";
export default function SalesForm() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 sm:p-6 text-white">

      <h2 className="text-xl font-bold mb-6">
        {t("recordNewSale")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <select className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none">
                 <option>{t("selectProduct")}</option>
          <option>laptop</option>
          <option>mouse</option>
          <option>keyboard</option>
        </select>

        <input
          type="number"
          placeholder={t("quantity")}
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <input
          type="number"
          placeholder={t("unitPrice")}
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <input
          type="date"
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none sm:col-span-2"
        />

      </div>

      <textarea
        placeholder={t("notes")}
        rows={3}
        className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl w-full mt-4 text-white outline-none"
      />

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full sm:w-auto">
        {t("saveSale")}
      </button>

    </div>
  );
}