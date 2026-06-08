"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddStockModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-[#131C31] rounded-3xl p-6 border border-slate-700 w-full max-w-xl">

        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold text-white">
            Add Stock
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400"
          >
            ✕
          </button>

        </div>

        <form className="space-y-4">

          <input
            placeholder="Product Name"
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
          />

          <input
            placeholder="SKU"
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
          />

          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
          />

          <button
            type="button"
            className="w-full bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl text-white"
          >
            Save Stock
          </button>

        </form>

      </div>

    </div>
  );
}