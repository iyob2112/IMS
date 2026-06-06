"use client";

export default function SalesForm() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-4 sm:p-6 text-white">

      <h2 className="text-xl font-bold mb-6">
        Record New Sale
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <select className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none">
          <option>Select Product</option>
          <option>Laptop</option>
          <option>Mouse</option>
          <option>Keyboard</option>
        </select>

        <input
          type="number"
          placeholder="Quantity"
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <input
          type="number"
          placeholder="Unit Price"
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <input
          type="date"
          className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none sm:col-span-2"
        />

      </div>

      <textarea
        placeholder="Notes (optional)"
        rows={3}
        className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl w-full mt-4 text-white outline-none"
      />

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full sm:w-auto">
        Save Sale
      </button>

    </div>
  );
}