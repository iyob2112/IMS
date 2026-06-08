"use client";

const expiryProducts = [
  {
    product: "Milk",
    batch: "BAT-001",
    expiry: "2026-07-10",
    days: 32,
  },
  {
    product: "Juice",
    batch: "BAT-002",
    expiry: "2026-06-20",
    days: 12,
  },
];

export default function ExpiryReport() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Expiry Report
      </h2>

      <div className="space-y-4">

        {expiryProducts.map((item) => (
          <div
            key={item.batch}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <div>
              <p className="font-semibold">
                {item.product}
              </p>

              <p className="text-sm text-slate-400">
                {item.batch}
              </p>
            </div>

            <div className="text-right">
              <p>{item.expiry}</p>

              <p className="text-yellow-400">
                {item.days} days
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}