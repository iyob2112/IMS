"use client";

export default function StockInForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      <h2 className="text-lg sm:text-xl font-bold mb-6">
        Add Stock In
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <select className="border p-3 rounded-xl w-full">
          <option>Select Product</option>
          <option>Laptop</option>
          <option>Mouse</option>
          <option>Keyboard</option>
        </select>

        <select className="border p-3 rounded-xl w-full">
          <option>Select Supplier</option>
          <option>Tech Distributors</option>
          <option>Global Electronics</option>
        </select>

        <input
          type="number"
          placeholder="Quantity"
          className="border p-3 rounded-xl w-full"
        />

        <input
          type="number"
          placeholder="Purchase Price"
          className="border p-3 rounded-xl w-full"
        />

        <input
          type="date"
          className="border p-3 rounded-xl w-full sm:col-span-2"
        />

      </div>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl w-full sm:w-auto">
        Save Stock In
      </button>

    </div>
  );
}