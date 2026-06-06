export default function Header() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-slate-500">
          Welcome back, Admin
        </p>
      </div>

      <button className="bg-red-500 text-white px-4 py-2 rounded-xl">
        Logout
      </button>
    </div>
  );
}