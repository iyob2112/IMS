export default function CategoryTable() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Devices and gadgets",
      date: "2026-06-01",
    },
    {
      id: 2,
      name: "Accessories",
      description: "Phone & computer accessories",
      date: "2026-06-02",
    },
    {
      id: 3,
      name: "Furniture",
      description: "Home and office furniture",
      date: "2026-06-03",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm">

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Created Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t hover:bg-slate-50 transition">

                <td className="p-4 font-medium">
                  {cat.name}
                </td>

                <td className="p-4 text-slate-600">
                  {cat.description}
                </td>

                <td className="p-4">
                  {cat.date}
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
      <div className="md:hidden  space-y-4">

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="border rounded-xl p-4 shadow-sm"
          >

            <h2 className="font-bold text-lg">
              {cat.name}
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              {cat.description}
            </p>

            <p className="text-sm mt-2">
              Created: {cat.date}
            </p>

            <div className="flex gap-2 mt-4">

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