import { useTranslation } from "react-i18next";

export default function CategoryTable() {
  const { t } = useTranslation();
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
    <div className="overflow-x-auto">

      {/* ================= DESKTOP TABLE ================= */}
      <table className="w-full hidden md:table text-sm text-slate-300">

        <thead className="bg-[#1A2742] text-slate-300">
          <tr>
            <th className="p-4 text-left">{t("categoryName")}</th>
            <th className="p-4 text-left">{t("description")}</th>
            <th className="p-4 text-left">{t("createdDate")}</th>
            <th className="p-4 text-left">{t("actions")}</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr
              key={cat.id}
              className="border-t border-slate-800 hover:bg-[#1A2742] transition"
            >
              <td className="p-4 font-medium text-white">
                {cat.name}
              </td>

              <td className="p-4 text-slate-400">
                {cat.description}
              </td>

              <td className="p-4 text-slate-300">
                {cat.date}
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

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4"
          >

            <h2 className="font-bold text-white text-lg">
              {cat.name}
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              {cat.description}
            </p>

            <p className="text-sm text-slate-300 mt-2">
              {t("Created")}: {cat.date}
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