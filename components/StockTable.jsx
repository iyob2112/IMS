export default function StockTable() {
  const stock = [
    {
      id: 1,
      product: "Laptop",
      supplier: "Tech Distributors",
      qty: 10,
      price: "$700",
      date: "2026-06-01",
    },
    {
      id: 2,
      product: "Mouse",
      supplier: "Global Electronics",
      qty: 50,
      price: "$10",
      date: "2026-06-02",
    },
    {
      id: 3,
      product: "Keyboard",
      supplier: "Tech Distributors",
      qty: 30,
      price: "$25",
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
              <th className="p-4 text-left">Supplier</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Purchase Price</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {stock.map((item) => (
              <tr key={item.id} className="border-t hover:bg-slate-50">

                <td className="p-4 font-medium">
                  {item.product}
                </td>

                <td className="p-4 text-slate-600">
                  {item.supplier}
                </td>

                <td className="p-4">
                  {item.qty}
                </td>

                <td className="p-4">
                  {item.price}
                </td>

                <td className="p-4">
                  {item.date}
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

        {stock.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow-sm"
          >

            <h2 className="font-bold text-lg">
              {item.product}
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              Supplier: {item.supplier}
            </p>

            <p className="text-sm">
              Quantity: {item.qty}
            </p>

            <p className="text-sm">
              Price: {item.price}
            </p>

            <p className="text-sm">
              Date: {item.date}
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