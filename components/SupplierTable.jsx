export default function SupplierTable() {
  const suppliers = [
    {
      id: 1,
      name: "Tech Distributors Ltd",
      phone: "+251911223344",
      address: "Mekelle, Tigray",
      contact: "Abebe Tesfaye",
    },
    {
      id: 2,
      name: "Global Electronics",
      phone: "+251922334455",
      address: "Addis Ababa",
      contact: "Sara Mekonnen",
    },
    {
      id: 3,
      name: "Office Supplies Co",
      phone: "+251933445566",
      address: "Hawassa",
      contact: "Kebede Alemu",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm">

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">Supplier</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Address</th>
              <th className="p-4 text-left">Contact Person</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((s) => (
              <tr key={s.id} className="border-t hover:bg-slate-50 transition">

                <td className="p-4 font-medium">
                  {s.name}
                </td>

                <td className="p-4">
                  {s.phone}
                </td>

                <td className="p-4 text-slate-600">
                  {s.address}
                </td>

                <td className="p-4">
                  {s.contact}
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

        {suppliers.map((s) => (
          <div
            key={s.id}
            className="border rounded-xl p-4 shadow-sm"
          >

            <h2 className="font-bold text-lg">
              {s.name}
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              📞 {s.phone}
            </p>

            <p className="text-sm">
              📍 {s.address}
            </p>

            <p className="text-sm">
              👤 {s.contact}
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