"use client";

export default function AddSupplierModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Add Supplier
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <input
            placeholder="Supplier Name"
            className="w-full border p-3 rounded-xl"
          />

          <input
            placeholder="Phone Number"
            className="w-full border p-3 rounded-xl"
          />

          <input
            placeholder="Address"
            className="w-full border p-3 rounded-xl"
          />

          <input
            placeholder="Contact Person"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl">
          Save Supplier
        </button>
      </div>
    </div>
  );
}