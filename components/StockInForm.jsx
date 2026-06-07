"use client";
import { useTranslation } from "react-i18next";
export default function StockInForm() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 sm:p-6 text-white">

      <h2 className="text-xl font-bold mb-6">
        {t("addStockIn")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <select className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none">
          <option>{t("selectProduct")}</option>
          <option>Laptop</option>
          <option>Mouse</option>
          <option>Keyboard</option>
        </select>

        <select className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none">
                   <option>{t("selectSupplier")}</option>
          <option>Tech Distributors</option>
          <option>Global Electronics</option>
        </select>

        <input
          type="number"
          placeholder= {t("quantity")}
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <input
          type="number"
          placeholder={t("purchasePrice")}
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <input
          type="date"
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none sm:col-span-2"
        />

      </div>

      <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl w-full sm:w-auto">
        {t("saveStockIn")}
      </button>

    </div>
  );
}