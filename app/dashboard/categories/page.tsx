"use client";

import { useState } from "react";
import CategoryTable from "@/components/CategoryTable";
import AddCategoryModal from "@/components/AddCategoryModal";
import { Layers3 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CategoriesPage() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#0B1120]  pt-10 p-3 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Layers3 className="text-violet-400" />
            {t("categoriesManagement")}
          </h1>

          <p className="text-slate-400 mt-1">
            {t("organizeAndManageProductCategories")}
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl"
        >
          {t("addCategory")}
        </button>

      </div>

      {/* Main Card */}
      <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 shadow-lg">

        <CategoryTable />

      </div>

      {/* Modal */}
      <AddCategoryModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}