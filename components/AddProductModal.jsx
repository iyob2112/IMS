"use client";

export default function AddProductModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-[#131C31] border border-slate-800 w-full max-w-2xl rounded-3xl p-6 text-white">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Product Name"
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <select className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white">
            <option>Select Category</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>

          <input
            placeholder="Purchase Price"
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <input
            placeholder="Selling Price"
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <input
            placeholder="Quantity"
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
          />

          <input
            type="file"
            className="bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white"
          />

        </div>

        <textarea
          rows={4}
          placeholder="Description"
          className="w-full mt-4 bg-[#1A2742] border border-slate-700 p-3 rounded-xl text-white outline-none"
        />

        <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl">
          Save Product
        </button>

      </div>
    </div>
  );
}