"use client";

const customers = [
  {
    name: "John Doe",
    amount: "$12,500",
  },
  {
    name: "Sarah Smith",
    amount: "$9,200",
  },
  {
    name: "Michael",
    amount: "$8,700",
  },
];

export default function TopCustomers() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Top Customers
      </h2>

      <div className="space-y-4">

        {customers.map((customer) => (
          <div
            key={customer.name}
            className="bg-[#1A2742] p-4 rounded-xl flex justify-between"
          >
            <span>{customer.name}</span>

            <span className="text-cyan-400">
              {customer.amount}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}