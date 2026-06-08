"use client";

import { useState } from "react";
import {
  Search,
  ScanLine,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";

export default function PosPage() {
  // 👤 Customers
  const customers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Sarah Smith" },
    { id: 3, name: "Michael Johnson" },
  ];

  const [selectedCustomer, setSelectedCustomer] = useState("");

  const cart = [
    {
      id: 1,
      product: "Laptop",
      price: 1200,
      qty: 1,
    },
    {
      id: 2,
      product: "Mouse",
      price: 25,
      qty: 2,
    },
  ];

  const subtotal = 1250;
  const tax = 50;
  const discount = 20;
  const total = subtotal + tax - discount;

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-3 pt-10">

      <div className="grid xl:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="xl:col-span-2 space-y-6">

          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold">
              POS Terminal
            </h1>

            <p className="text-slate-400 mt-2">
              Fast product sales and checkout
            </p>
          </div>

          {/* Search */}
          <div className="bg-[#131C31] p-6 rounded-3xl">

            <div className="flex gap-3">

              <div className="relative flex-1">

                <Search
                  className="absolute left-4 top-4 text-slate-400"
                  size={18}
                />

                <input
                  placeholder="Search product..."
                  className="w-full bg-[#0B1120] rounded-xl py-3 pl-12"
                />

              </div>

              <button className="bg-orange-600 px-5 rounded-xl">
                <ScanLine />
              </button>

            </div>

          </div>

          {/* Products */}
          <div className="grid md:grid-cols-3 gap-4">

            {[
              "Laptop",
              "Mouse",
              "Keyboard",
              "Monitor",
              "Printer",
              "USB Cable",
            ].map((product) => (
              <div
                key={product}
                className="bg-[#131C31] rounded-3xl p-5 cursor-pointer hover:border-cyan-500 border border-slate-800"
              >
                <h3 className="font-semibold">
                  {product}
                </h3>

                <p className="text-green-400 mt-2">
                  $120
                </p>

                <button className="mt-4 bg-cyan-600 w-full py-2 rounded-xl">
                  Add To Cart
                </button>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div className="bg-[#131C31] rounded-3xl p-6 sticky top-24">

            {/* Cart Header */}
            <div className="flex items-center gap-2 mb-6">
              <ShoppingCart className="text-cyan-400" />
              <h2 className="text-2xl font-bold">
                Cart
              </h2>
            </div>

            {/* 👤 Customer SELECT */}
            <select
              value={selectedCustomer}
              onChange={(e) => setSelectedCustomer(e.target.value)}
              className="w-full bg-[#0B1120] p-3 rounded-xl mb-3"
            >
              <option value="">Select Customer</option>

              {customers.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Show selected customer */}
            {selectedCustomer && (
              <div className="text-sm text-cyan-400 mb-4">
                Customer: {selectedCustomer}
              </div>
            )}

            {/* Cart Items */}
            <div className="space-y-3">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1A2742] p-4 rounded-xl"
                >
                  <div className="flex justify-between">

                    <div>
                      <p>{item.product}</p>

                      <p className="text-slate-400 text-sm">
                        ${item.price}
                      </p>
                    </div>

                    <button>
                      <Trash2
                        size={18}
                        className="text-red-400"
                      />
                    </button>

                  </div>

                  <div className="flex items-center gap-3 mt-3">

                    <button className="bg-red-600 p-1 rounded">
                      <Minus size={16} />
                    </button>

                    <span>{item.qty}</span>

                    <button className="bg-green-600 p-1 rounded">
                      <Plus size={16} />
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* Totals */}
            <div className="border-t border-slate-700 mt-6 pt-6 space-y-3">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span>-${discount}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax}</span>
              </div>

              <div className="flex justify-between text-xl font-bold text-green-400">
                <span>Total</span>
                <span>${total}</span>
              </div>

            </div>

            {/* Payment */}
            <div className="mt-6 space-y-3">

              <select className="w-full bg-[#0B1120] p-3 rounded-xl">
                <option>Cash</option>
                <option>Card</option>
                <option>Bank Transfer</option>
                <option>Mobile Money</option>
              </select>

              <button className="w-full bg-green-600 py-4 rounded-xl text-lg font-bold">
                Complete Sale
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}