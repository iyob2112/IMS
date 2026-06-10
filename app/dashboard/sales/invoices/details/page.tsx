"use client";

import { Printer } from "lucide-react";
interface Props {
  open: boolean;
  onClose: () => void;
}
export default function InvoiceDetailsPage({ open, onClose }: Props) {
   if (!open) return null;
  return (
   <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
<div className="bg-[#0B1120] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-10 relative">
       <button
  onClick={onClose}
  className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl pb-10 "
>
  ✕
</button>  


      <div className="bg-white text-black rounded-3xl p-10">
        <div className="flex justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              INVOICE
            </h1>

            <p>INV-001</p>
      
          </div>

          <div>
            <h2 className="font-bold">
              Shop Inventory
            </h2>

            <p>Mekele, Ethiopia</p>
          </div>

        </div>

        <div className="mt-8">

          <p>
            Customer: John Doe
          </p>

          <p>
            Date: 2026-06-08
          </p>

        </div>

        <table className="w-full mt-8 border">

          <thead>
            <tr>
              <th className="border p-3">
                Product
              </th>

              <th className="border p-3">
                Qty
              </th>

              <th className="border p-3">
                Price
              </th>

              <th className="border p-3">
                Total
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border p-3">
                Gaming Laptop
              </td>

              <td className="border p-3">
                1
              </td>

              <td className="border p-3">
                $1200
              </td>

              <td className="border p-3">
                $1200
              </td>
            </tr>

          </tbody>

        </table>

        <div className="mt-8 text-right">

          <h2 className="text-3xl font-bold">
            $1200
          </h2>

        </div>

      </div>

      <button
        onClick={() => window.print()}
        className="mt-6 bg-cyan-600 px-5 py-3 rounded-xl flex items-center gap-2 text-white"
      >
        <Printer size={18} />
        Print Invoice
      </button>

    </div>
    </div>
  );
}