export default function ProductTable() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      purchase: "$700",
      selling: "$900",
      quantity: 15,
    },
    {
      id: 2,
      name: "Mouse",
      category: "Accessories",
      purchase: "$10",
      selling: "$15",
      quantity: 80,
    },
    {
      id: 3,
      name: "Keyboard",
      category: "Accessories",
      purchase: "$25",
      selling: "$40",
      quantity: 45,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm">

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm lg:text-base">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Purchase</th>
              <th className="text-left p-4">Selling</th>
              <th className="text-left p-4">Quantity</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4 text-slate-600">{product.category}</td>
                <td className="p-4">{product.purchase}</td>
                <td className="p-4">{product.selling}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      product.quantity > 20
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {product.quantity}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden p-0 space-y-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold">{product.name}</h2>

              <span
                className={`px-2 py-1 text-xs rounded text-white ${
                  product.quantity > 20
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {product.quantity}
              </span>
            </div>

            <p className="text-sm text-slate-600">
              Category: {product.category}
            </p>

            <p className="text-sm">
              Purchase: {product.purchase}
            </p>

            <p className="text-sm">
              Selling: {product.selling}
            </p>

            <div className="flex gap-2 mt-3">
              <button className="bg-blue-500 text-white px-3 py-1 rounded w-full">
                Edit
              </button>

              <button className="bg-red-500 text-white px-3 py-1 rounded w-full">
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}