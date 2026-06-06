export default function SalesTable() {
  const sales = [
    {
      id: 1,
      product: "Laptop",
      qty: 1,
      unitPrice: "$800",
      total: "$800",
      date: "2026-06-01",
    },
    {
      id: 2,
      product: "Mouse",
      qty: 3,
      unitPrice: "$15",
      total: "$45",
      date: "2026-06-02",
    },
    {
      id: 3,
      product: "Keyboard",
      qty: 2,
      unitPrice: "$40",
      total: "$80",
      date: "2026-06-03",
    },
  ];

  return (
    <div className="overflow-x-auto mt-6">

      {/* ================= DESKTOP TABLE ================= */}
      <table className="w-full hidden md:table text-sm text-slate-300">

        <thead className="bg-[#1A2742] text-slate-300">
          <tr>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Quantity</th>
            <th className="p-4 text-left">Unit Price</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((s) => (
            <tr
              key={s.id}
              className="border-t border-slate-800 hover:bg-[#1A2742] transition"
            >

              <td className="p-4 font-medium text-white">
                {s.product}
              </td>

              <td className="p-4 text-slate-300">
                {s.qty}
              </td>

              <td className="p-4 text-slate-300">
                {s.unitPrice}
              </td>

              <td className="p-4 font-bold text-green-400">
                {s.total}
              </td>

              <td className="p-4 text-slate-400">
                {s.date}
              </td>

              <td className="p-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg">
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4 p-2">

        {sales.map((s) => (
          <div
            key={s.id}
            className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4"
          >

            <h2 className="font-bold text-white text-lg">
              {s.product}
            </h2>

            <p className="text-sm text-slate-300 mt-1">
              Quantity: {s.qty}
            </p>

            <p className="text-sm text-slate-300">
              Unit Price: {s.unitPrice}
            </p>

            <p className="text-sm font-bold text-green-400">
              Total: {s.total}
            </p>

            <p className="text-sm text-slate-400">
              Date: {s.date}
            </p>

            <div className="mt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl w-full">
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}