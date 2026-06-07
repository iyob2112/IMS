"use client";
import { useTranslation } from "react-i18next";


export default function AddProductModal({
  isOpen,
  onClose,
}) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-[#131C31] border border-slate-800 w-full max-w-2xl rounded-3xl p-6 text-white">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {t("AddProduct")}
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder={t("productName")}
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <select className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white">
            <option>{t("selectCategory")}</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>

          <input
            placeholder={t("purchasePrice")}
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <input
            placeholder={t("sellingPrice")}
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <input
            placeholder={t("quantity")}
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          {/* <input
            type="file"
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white"
          /> */}

        </div>

        <textarea
          rows={4}
          placeholder={t("description")}
          className="w-full mt-4 bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl">
          {t("saveProduct")}
        </button>

      </div>
    </div>
  );
}