import { Plus, Download, Search, Settings } from "lucide-react";
import { useState } from "react";

export default function Header({ onSearch, search }) {
  const [query, setQuery] = useState(search || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Dashboard Pendataan Warga RW 08
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Kelola data penduduk, pembaruan, dan laporan demografi secara cepat dan akurat.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition">
              <Plus size={16} /> Tambah Warga
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50 transition">
              <Download size={16} /> Export
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-2.5 py-2 hover:bg-slate-50 transition" aria-label="Pengaturan">
              <Settings size={18} />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                className="w-full rounded-md border border-slate-200 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
                placeholder="Cari nama, NIK, atau alamat..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Cari
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
