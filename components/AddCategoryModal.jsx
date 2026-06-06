"use client";

export default function AddCategoryModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

      <div className="bg-[#131C31] border border-slate-800 w-full max-w-md rounded-3xl p-6 text-white">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">
            Add Category
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 text-xl"
          >
            ✕
          </button>

        </div>

        {/* Inputs */}
        <input
          placeholder="Category Name"
          className="w-full bg-[#1A2742] border border-slate-700 text-white p-3 rounded-xl mb-4 outline-none"
        />

        <textarea
          rows={4}
          placeholder="Description"
          className="w-full bg-[#1A2742] border border-slate-700 text-white p-3 rounded-xl outline-none"
        />

        {/* Button */}
        <button className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl">
          Save Category
        </button>

      </div>

    </div>
  );
}