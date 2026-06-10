import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
export default function SupplierTable() {
  const { t } = useTranslation();
  const suppliers = [
    {
      id: 1,
      name: "Tech Distributors Ltd",
      contact: "Abebe Tesfaye",
      phone: "+251911223344",
      address: "Mekelle",
      purchases: "$12,500",
      balance: "$2,300",
      status: "Active",
    },
    {
      id: 2,
      name: "Global Electronics",
      contact: "Sara Mekonnen",
      phone: "+251922334455",
      address: "Addis Ababa",
      purchases: "$8,400",
      balance: "$0",
      status: "Active",
    },
  ];
  // const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [openView, setOpenView] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  return (
    <div className="overflow-x-auto">

      {/* ================= DESKTOP TABLE ================= */}
      <table className="w-full hidden md:table text-sm text-slate-300">

        <thead className="bg-[#1A2742] text-slate-300">
          <tr>
            <th className="p-4 text-left">{t("supplier")}</th>
            <th className="p-4 text-left">{t("phone")}</th>
            <th className="p-4 text-left">{t("address")}</th>
            <th className="p-4 text-left">{t("contactPerson")}</th>
            <th className="p-4 text-left">{t("actions")}</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((s) => (
            <tr
              key={s.id}
              className="border-t border-slate-800 hover:bg-[#1A2742] transition"
            >

              <td className="p-4 font-medium text-white">
                {s.name}
              </td>

              <td className="p-4 text-slate-300">
                {s.phone}
              </td>

              <td className="p-4 text-slate-400">
                {s.address}
              </td>

              <td className="p-4 text-slate-300">
                {s.contact}
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedSupplier(s);
                      setOpenView(true);
                    }}
                    className="bg-cyan-600 px-3 py-1 rounded-lg text-white"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSupplier(s);
                      setOpenEdit(true);
                    }}
                    className="bg-indigo-600 px-3 py-1 rounded-lg text-white"
                  >
                    Edit
                  </button>

                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg">
                    {t("delete")}
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">

        {suppliers.map((s) => (
          <div
            key={s.id}
            className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4"
          >

            <h2 className="font-bold text-white text-lg">
              {s.name}
            </h2>

            <p className="text-sm text-slate-300 mt-1">
              📞 {s.phone}
            </p>

            <p className="text-sm text-slate-400">
              📍 {s.address}
            </p>

            <p className="text-sm text-slate-300">
              👤 {s.contact}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setSelectedSupplier(s);
                  setOpenView(true);
                }}
                className="bg-cyan-600 px-3 py-1 rounded-lg text-white"
              >
                View
              </button>
              <button
                onClick={() => {
                  setSelectedSupplier(s);
                  setOpenEdit(true);
                }}
                className="bg-indigo-600 px-3 py-1 rounded-lg text-white"
              >
                Edit
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl w-full">
                {t("delete")}
              </button>

            </div>

          </div>
        ))}

      </div>
      {openView && selectedSupplier && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-[#131C31] w-full max-w-xl rounded-3xl p-6 relative">

            {/* close */}


            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
              <div className="bg-[#0B1120] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 relative">

                <h1 className="text-4xl font-bold text-white">
                  Supplier 1
                </h1>
                <button
                  onClick={() => setOpenView(false)}
                  className="absolute top-3 right-3 text-slate-400 text-xl"
                >
                  ✕
                </button>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

                  <div className="bg-[#131C31] p-6 rounded-3xl">
                    <h3>Total Purchases</h3>
                    <h2>$12,500</h2>
                  </div>

                  <div className="bg-[#131C31] p-6 rounded-3xl">
                    <h3>Due Balance</h3>
                    <h2>$2,300</h2>
                  </div>

                  <div className="bg-[#131C31] p-6 rounded-3xl">
                    <h3>Orders</h3>
                    <h2>43</h2>
                  </div>

                  <div className="bg-[#131C31] p-6 rounded-3xl">
                    <h3>Status</h3>
                    <h2>Active</h2>
                  </div>

                </div>



                {/* content */}
                <div className="space-y-3 text-slate-300 mt-4 ">

                  <p>
                    <span className="text-slate-400">Name:</span>{" "}
                    {selectedSupplier.name}
                  </p>

                  <p>
                    <span className="text-slate-400">Contact:</span>{" "}
                    {selectedSupplier.contact}
                  </p>

                  <p>
                    <span className="text-slate-400">Phone:</span>{" "}
                    {selectedSupplier.phone}
                  </p>

                  <p>
                    <span className="text-slate-400">Address:</span>{" "}
                    {selectedSupplier.address}
                  </p>

                  <p>
                    <span className="text-slate-400">Purchases:</span>{" "}
                    {selectedSupplier.purchases}
                  </p>

                  <p>
                    <span className="text-slate-400">Balance:</span>{" "}
                    {selectedSupplier.balance}
                  </p>

                  <p>
                    <span className="text-slate-400">Status:</span>{" "}
                    <span className="text-green-400">
                      {selectedSupplier.status}
                    </span>
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      )}
      {openEdit && selectedSupplier && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-[#131C31] w-full max-w-xl rounded-3xl p-6 relative">

            {/* close */}
            <button
              onClick={() => setOpenEdit(false)}
              className="absolute top-3 right-3 text-slate-400 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              Edit Supplier
            </h2>

            <div className="space-y-4">

              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.name}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.phone}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    phone: e.target.value,
                  })
                }
              />

              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.contact}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    contact: e.target.value,
                  })
                }
              />
              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.phone}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    phone: e.target.value,
                  })
                }
              />
              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.address}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    address: e.target.value,
                  })
                }
              />
              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.purchases}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    purchases: e.target.value,
                  })
                }
              />
              <input
                className="w-full p-3 rounded-xl bg-[#0B1120] text-white border border-slate-700"
                value={selectedSupplier.balance}
                onChange={(e) =>
                  setSelectedSupplier({
                    ...selectedSupplier,
                    balance: e.target.value,
                  })
                }
              />

              <div className="flex gap-3 pt-4">

                <button
                  onClick={() => {
                    console.log("Updated supplier:", selectedSupplier);
                    setOpenEdit(false);
                  }}
                  className="flex-1 bg-indigo-600 p-3 rounded-xl"
                >
                  Save
                </button>

                <button
                  onClick={() => setOpenEdit(false)}
                  className="flex-1 bg-slate-800 p-3 rounded-xl"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}