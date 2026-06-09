"use client";

export default function CreateInvoicePage() {
  return (
    <div className="space-y-6 pt-10 p-3 text-white  h-full min-h-screen">

      <h1 className="text-4xl font-bold text-white">
        Create Invoice
      </h1>

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
  );
}