import { Users, Baby, Heart, Home } from "lucide-react";

const Stat = ({ icon: Icon, label, value, trend }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-content-center">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
      </div>
      {trend && (
        <span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
          {trend}
        </span>
      )}
    </div>
  </div>
);

export default function StatsCards({ stats }) {
  const defaultStats = [
    { icon: Users, label: "Jumlah Penduduk", value: "1.245", trend: "+2.1%" },
    { icon: Baby, label: "Kelahiran", value: "12", trend: "+1" },
    { icon: Heart, label: "Kematian", value: "3", trend: "-1" },
    { icon: Home, label: "Kartu Keluarga", value: "356" },
  ];

  const data = stats?.length ? stats : defaultStats;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {data.map((s, idx) => (
        <Stat key={idx} {...s} />
      ))}
    </section>
  );
}
