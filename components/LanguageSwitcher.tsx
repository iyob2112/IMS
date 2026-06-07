"use client";

import { useState } from "react";
import i18n from "@/lib/i18n";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="flex items-center bg-[#131C31] border border-slate-700 rounded-xl p-1 w-fit">
      <Languages
        size={18}
        className="text-slate-400 mx-2 hidden sm:block"
      />

      <button
        onClick={() => changeLang("en")}
        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLang("ti")}
        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
          lang === "ti"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        ትግ
      </button>
    </div>
  );
}