interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="bg-[#131C31] border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        {icon}

      </div>

    </div>
  );
}