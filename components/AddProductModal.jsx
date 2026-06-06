"use client";

export default function AddProductModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 font-bold"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Product Name"
            className="border p-3 rounded-xl"
          />

          <select className="border p-3 rounded-xl">
            <option>Select Category</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>

          <input
            placeholder="Purchase Price"
            className="border p-3 rounded-xl"
          />

          <input
            placeholder="Selling Price"
            className="border p-3 rounded-xl"
          />

          <input
            placeholder="Quantity"
            className="border p-3 rounded-xl"
          />

          <input
            type="file"
            className="border p-3 rounded-xl"
          />
        </div>

        <textarea
          rows="4"
          placeholder="Description"
          className="border p-3 rounded-xl w-full mt-4"
        />

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Save Product
        </button>
      </div>
    </div>
  );
}