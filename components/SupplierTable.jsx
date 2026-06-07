import { useTranslation } from "react-i18next";

export default function SupplierTable() {
  const { t } = useTranslation();
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

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg">
                    {t("edit")}
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

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-xl w-full">
                {t("edit")}
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl w-full">
                {t("delete")}
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}