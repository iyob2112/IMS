import { useTranslation } from "react-i18next";

export default function ProductTable() {
  const { t } = useTranslation();
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
      quantity: 8,
    },
  ];

  return (
    <div className="overflow-x-auto">

      {/* Desktop Table */}
      <table className="w-full hidden md:table text-sm text-slate-300">

        <thead className="bg-[#1A2742] text-slate-300">
          <tr>
            <th className="p-4 text-left">{t("products")}</th>
            <th className="p-4 text-left">{t("categories")}</th>
            <th className="p-4 text-left">{t("purchase")}</th>
            <th className="p-4 text-left">{t("selling")}</th>
            <th className="p-4 text-left">{t("qty")}</th>
            <th className="p-4 text-left">{t("actions")}</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="border-t border-slate-800 hover:bg-[#1A2742]"
            >
              <td className="p-4 text-white font-medium">{p.name}</td>
              <td className="p-4 text-slate-400">{p.category}</td>
              <td className="p-4">{p.purchase}</td>
              <td className="p-4">{p.selling}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-xl text-xs ${
                    p.quantity > 20
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {p.quantity}
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <button className="bg-indigo-600 px-3 py-1 rounded-lg text-white">
                    {t("edit")}
                  </button>
                  <button className="bg-red-600 px-3 py-1 rounded-lg text-white">
                    {t("delete")}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">

        {products.map((p) => (
          <div
            key={p.id}
            className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4"
          >
            <div className="flex justify-between">
              <h2 className="text-white font-bold">{p.name}</h2>

              <span className="text-xs px-3 py-1 rounded-xl bg-red-500/20 text-red-400">
                {p.quantity}
              </span>
            </div>

            <p className="text-slate-400 text-sm mt-2">
              {p.category}
            </p>

            <p className="text-slate-300 text-sm">
              {t("purchase")}: {p.purchase}
            </p>

            <p className="text-slate-300 text-sm">
              {t("selling")}: {p.selling}
            </p>

            <div className="flex gap-2 mt-3">
              <button className="w-full bg-indigo-600 py-2 rounded-xl">
                {t("edit")}
              </button>
              <button className="w-full bg-red-600 py-2 rounded-xl">
                {t("delete")}
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}