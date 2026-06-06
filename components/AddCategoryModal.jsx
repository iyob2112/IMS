"use client";

export default function AddCategoryModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Add Category
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <input
          placeholder="Category Name"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <textarea
          rows="4"
          placeholder="Description"
          className="w-full border p-3 rounded-xl"
        />

        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl">
          Save Category
        </button>
      </div>
    </div>
  );
}