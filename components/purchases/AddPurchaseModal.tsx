"use client";

import { useState } from "react";

interface Item {
  product: string;
  quantity: number;
  costPrice: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddPurchaseModal({ open, onClose }: Props) {
  const [supplier, setSupplier] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const [items, setItems] = useState<Item[]>([
    { product: "", quantity: 1, costPrice: 0 },
  ]);

  if (!open) return null;

  // ➕ add new product row
  const addItem = () => {
    setItems([...items, { product: "", quantity: 1, costPrice: 0 }]);
  };

  // ❌ remove row
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // ✏️ update item
  const updateItem = (
    index: number,
    field: keyof Item,
    value: string | number
  ) => {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setItems(updated);
  };

  // 💰 calculate totals
  const getTotal = () => {
    return items.reduce((sum, item) => {
      return sum + item.quantity * item.costPrice;
    }, 0);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-[#131C31] border border-slate-700 rounded-3xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">New Purchase</h2>
          <button onClick={onClose} className="text-slate-400">✕</button>
        </div>

        {/* Supplier + Date + Status */}
        <div className="space-y-3 mb-6">

          <input
            placeholder="Supplier Name"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
          >
            <option>Pending</option>
            <option>Completed</option>
            <option>Partial</option>
          </select>
        </div>

        {/* Items Section */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Products</h3>

          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-2 items-center"
            >
              <input
                placeholder="Product"
                value={item.product}
                onChange={(e) =>
                  updateItem(index, "product", e.target.value)
                }
                className="bg-[#0B1120] border border-slate-700 rounded-xl p-2 text-white"
              />

              <input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) =>
                  updateItem(index, "quantity", Number(e.target.value))
                }
                className="bg-[#0B1120] border border-slate-700 rounded-xl p-2 text-white"
              />

              <input
                type="number"
                placeholder="Cost"
                value={item.costPrice}
                onChange={(e) =>
                  updateItem(index, "costPrice", Number(e.target.value))
                }
                className="bg-[#0B1120] border border-slate-700 rounded-xl p-2 text-white"
              />

              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-400 col-span-3 text-left"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className="text-cyan-400"
          >
            + Add Product
          </button>
        </div>

        {/* Total */}
        <div className="mt-6 text-white">
          <p className="text-lg">
            Total:{" "}
            <span className="font-bold">${getTotal()}</span>
          </p>
        </div>

        {/* Save */}
        <button
          type="button"
          className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl text-white"
        >
          Save Purchase
        </button>
      </div>
    </div>
  );
}