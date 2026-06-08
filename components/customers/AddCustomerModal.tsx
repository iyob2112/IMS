"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddCustomerModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
      <div className="bg-[#131C31] p-6 rounded-3xl w-full max-w-lg border border-slate-700">

        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Add Customer
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
            placeholder="Customer Name"
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
          />

          <input
            placeholder="Email"
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
          />

          <input
            placeholder="Phone"
            className="w-full bg-[#0B1120] border border-slate-700 rounded-xl p-3 text-white"
          />

          <button
            type="button"
            className="w-full bg-cyan-600 hover:bg-cyan-700 rounded-xl p-3 text-white font-medium"
          >
            Save Customer
          </button>

        </form>
      </div>
    </div>
  );
}