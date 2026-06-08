"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddUserModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#131C31] p-6 rounded-3xl border border-slate-700 w-full max-w-xl">

        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold text-white">
            Add User
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
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white"
          />

          <select className="w-full p-3 rounded-xl bg-[#0B1120] border border-slate-700 text-white">
            <option>Admin</option>
            <option>Manager</option>
            <option>Cashier</option>
            <option>Storekeeper</option>
          </select>

          <button
            type="button"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-xl"
          >
            Save User
          </button>

        </form>

      </div>

    </div>
  );
}