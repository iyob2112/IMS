export default function ReportCard({
  title,
  value,
  color,
  icon: Icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6 flex items-center justify-between hover:bg-[#1A2742] transition">

      {/* Text */}
      <div>
        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <h2 className={`text-3xl font-bold mt-2 ${color || "text-white"}`}>
          {value}
        </h2>
      </div>

      {/* Icon */}
      <div className={`p-3 rounded-2xl ${iconBg}`}>
        <Icon className={iconColor} size={22} />
      </div>

    </div>
  );
}