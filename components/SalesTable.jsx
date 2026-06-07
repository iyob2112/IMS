import { useTranslation } from "react-i18next";
export default function SalesTable() {
  const { t } = useTranslation();
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
            <th className="p-4 text-left">{t("product")}</th>
            <th className="p-4 text-left">{t("quantity")}</th>
            <th className="p-4 text-left">{t("unitPrice")}</th>
            <th className="p-4 text-left">{t("total")}</th>
            <th className="p-4 text-left">{t("date")}</th>
            <th className="p-4 text-left">{t("actions")}</th>
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
                  {t("delete")}
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
              {t("quantity")}: {s.qty}
            </p>

            <p className="text-sm text-slate-300">
              {t("unitPrice")}: {s.unitPrice}
            </p>

            <p className="text-sm font-bold text-green-400">
              {t("total")}: {s.total}
            </p>

            <p className="text-sm text-slate-400">
              {t("date")}: {s.date}
            </p>

            <div className="mt-4">
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