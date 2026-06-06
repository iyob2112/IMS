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
    <div className="bg-white rounded-2xl shadow-sm mt-6">

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">

        <table className="w-full">
          <thead className="bg-slate-50">
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
              <tr key={s.id} className="border-t hover:bg-slate-50">

                <td className="p-4 font-medium">
                  {s.product}
                </td>

                <td className="p-4">
                  {s.qty}
                </td>

                <td className="p-4">
                  {s.unitPrice}
                </td>

                <td className="p-4 font-bold text-green-600">
                  {s.total}
                </td>

                <td className="p-4">
                  {s.date}
                </td>

                <td className="p-4">
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden p-4 space-y-4">

        {sales.map((s) => (
          <div
            key={s.id}
            className="border rounded-xl p-4 shadow-sm"
          >

            <h2 className="font-bold text-lg">
              {s.product}
            </h2>

            <p className="text-sm mt-1">
              Quantity: {s.qty}
            </p>

            <p className="text-sm">
              Unit Price: {s.unitPrice}
            </p>

            <p className="text-sm font-bold text-green-600">
              Total: {s.total}
            </p>

            <p className="text-sm">
              Date: {s.date}
            </p>

            <div className="mt-4">
              <button className="bg-red-500 text-white px-3 py-2 rounded w-full">
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}