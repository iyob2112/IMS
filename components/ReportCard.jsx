export default function ReportCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-[#131C31] rounded-2xl shadow-sm p-6">
      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h2
        className={`text-3xl font-bold mt-2 ${
          color || "text-slate-800"
        }`}
      >
        {value}
      </h2>
    </div>
  );
}