"use client";
interface Props {
  open: boolean;
  onClose: () => void;
}
export default function CreateInvoicePage({ open, onClose }: Props) {
  if (!open) return null;
  return (
   <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
<div className="bg-[#0B1120] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-10 relative">
      <h1 className="text-4xl font-bold text-white mb-6">
        Create Invoice
      </h1>
    <button
  onClick={onClose}
  className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl pb-10 "
>
  ✕
</button>  
      <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Customer Name"
            className="bg-[#0B1120] p-3 rounded-xl"
          />

          <input
            placeholder="Phone"
            className="bg-[#0B1120] p-3 rounded-xl"
          />

        </div>

        <div className="mt-6">

          <table className="w-full">

            <thead>
              <tr>
                <th className="text-left p-4">
                  Product
                </th>

                <th className="text-left p-4">
                  Qty
                </th>

                <th className="text-left p-4">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4">
                  Gaming Laptop
                </td>

                <td className="p-4">
                  1
                </td>

                <td className="p-4">
                  $1200
                </td>
              </tr>
            </tbody>

          </table>

        </div>

        <div className="mt-6 text-right">

          <h2 className="text-2xl font-bold text-green-400">
            Total: $1200
          </h2>

        </div>

        <button className="mt-6 bg-cyan-600 px-5 py-3 rounded-xl text-white">
          Generate Invoice
        </button>

      </div>

    </div>
    </div>
  );
}