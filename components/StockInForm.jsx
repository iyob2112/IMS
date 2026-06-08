"use client";

export default function StockInForm() {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Receive Inventory
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

        <select className="bg-[#0B1120] p-3 rounded-xl">
          <option>Select Supplier</option>
        </select>

        <select className="bg-[#0B1120] p-3 rounded-xl">
          <option>Select Warehouse</option>
        </select>

        <select className="bg-[#0B1120] p-3 rounded-xl">
          <option>Select Product</option>
        </select>

        <input
          placeholder="Batch Number"
          className="bg-[#0B1120] p-3 rounded-xl"
        />

        <input
          placeholder="Barcode"
          className="bg-[#0B1120] p-3 rounded-xl"
        />

        <input
          placeholder="Quantity"
          type="number"
          className="bg-[#0B1120] p-3 rounded-xl"
        />

        <input
          placeholder="Unit Cost"
          className="bg-[#0B1120] p-3 rounded-xl"
        />

        <input
          type="date"
          className="bg-[#0B1120] p-3 rounded-xl"
        />

        <input
          type="date"
          className="bg-[#0B1120] p-3 rounded-xl"
        />

      </div>

      <textarea
        placeholder="Notes"
        rows={4}
        className="bg-[#0B1120] p-3 rounded-xl w-full mt-4"
      />

      <div className="flex gap-3 mt-6">

        <button className="bg-cyan-600 px-6 py-3 rounded-xl">
          Receive Stock
        </button>

        <button className="bg-slate-700 px-6 py-3 rounded-xl">
          Save Draft
        </button>

      </div>

    </div>
  );
}