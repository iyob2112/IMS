"use client";

const transactions = [
  {
    id: "#INV001",
    customer: "John",
    amount: "$450",
  },
  {
    id: "#INV002",
    customer: "Sarah",
    amount: "$1200",
  },
  {
    id: "#INV003",
    customer: "Mike",
    amount: "$850",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-[#131C31] rounded-3xl border border-slate-800 p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-4">

        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-[#0B1120] p-4 rounded-xl"
          >
            <div>
              <p className="text-white">
                {item.id}
              </p>

              <p className="text-slate-400 text-sm">
                {item.customer}
              </p>
            </div>

            <p className="text-green-400">
              {item.amount}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}