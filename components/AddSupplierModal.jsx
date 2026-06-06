"use client";

export default function AddSupplierModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
     <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

      <div className="bg-[#131C31] border border-slate-800 w-full max-w-lg rounded-3xl p-6 text-white">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">
            Add Supplier
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 text-xl"
          >
            ✕
          </button>

        </div>

        {/* Inputs */}
        <div className="space-y-4">

          <input
            placeholder="Supplier Name"
            className="w-full bg-[#1A2742] border border-slate-700 text-white p-3 rounded-xl outline-none"
          />

          <input
            placeholder="Phone Number"
            className="w-full bg-[#1A2742] border border-slate-700 text-white p-3 rounded-xl outline-none"
          />

          <input
            placeholder="Address"
            className="w-full bg-[#1A2742] border border-slate-700 text-white p-3 rounded-xl outline-none"
          />

          <input
            placeholder="Contact Person"
            className="w-full bg-[#1A2742] border border-slate-700 text-white p-3 rounded-xl outline-none"
          />

        </div>

        {/* Save Button */}
        <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl">
          Save Supplier
        </button>

      </div>

    </div>
  );
}