"use client";

import {
  FileSpreadsheet,
  FileText,
  Printer,
  Mail,
} from "lucide-react";

export default function ExportCenter() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Export Center
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        <button className="bg-green-600 p-4 rounded-xl flex items-center justify-center gap-2">
          <FileSpreadsheet size={18} />
          Excel
        </button>

        <button className="bg-red-600 p-4 rounded-xl flex items-center justify-center gap-2">
          <FileText size={18} />
          PDF
        </button>

        <button className="bg-blue-600 p-4 rounded-xl flex items-center justify-center gap-2">
          <Printer size={18} />
          Print
        </button>

        <button className="bg-cyan-600 p-4 rounded-xl flex items-center justify-center gap-2">
          <Mail size={18} />
          Email
        </button>

      </div>

    </div>
  );
}