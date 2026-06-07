import { useTranslation } from "react-i18next";
export default function StockTable() {
  const { t } = useTranslation();
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
    <div className="overflow-x-auto mt-6">

      {/* ================= DESKTOP TABLE ================= */}
      <table className="w-full hidden md:table text-sm text-slate-300">

        <thead className="bg-[#1A2742] text-slate-300">
          <tr>
            <th className="p-4 text-left">{t("products")}</th>
            <th className="p-4 text-left">{t("supplier")}</th>
            <th className="p-4 text-left">{t("quantity")}</th>
            <th className="p-4 text-left">{t("purchasePrice")}</th>
            <th className="p-4 text-left">{t("date")}</th>
            <th className="p-4 text-left">{t("actions")}</th>
          </tr>
        </thead>

        <tbody>
          {stock.map((item) => (
            <tr
              key={item.id}
              className="border-t border-slate-800 hover:bg-[#1A2742] transition"
            >

              <td className="p-4 font-medium text-white">
                {item.product}
              </td>

              <td className="p-4 text-slate-400">
                {item.supplier}
              </td>

              <td className="p-4 text-slate-300">
                {item.qty}
              </td>

              <td className="p-4 text-slate-300">
                {item.price}
              </td>

              <td className="p-4 text-slate-400">
                {item.date}
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

        {stock.map((item) => (
          <div
            key={item.id}
            className="bg-[#1A2742] border border-slate-800 rounded-2xl p-4"
          >

            <h2 className="font-bold text-white text-lg">
              {item.product}
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              {t("supplier")}: {item.supplier}
            </p>

            <p className="text-sm text-slate-300">
              {t("quantity")}: {item.qty}
            </p>

            <p className="text-sm text-slate-300">
              {t("Price")}: {item.price}
            </p>

            <p className="text-sm text-slate-400">
              {t("date")}: {item.date}
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