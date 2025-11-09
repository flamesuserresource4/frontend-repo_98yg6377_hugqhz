import { useState } from "react";

export default function DemoForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    nik: "",
    kk: "",
    address: "",
    rt: "",
    status: "Tetap",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm({ name: "", nik: "", kk: "", address: "", rt: "", status: "Tetap" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600">Nama</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900/10"
            placeholder="Nama lengkap"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600">NIK</label>
          <input
            name="nik"
            value={form.nik}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900/10"
            placeholder="Nomor Induk Kependudukan"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600">No. KK</label>
          <input
            name="kk"
            value={form.kk}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900/10"
            placeholder="Nomor Kartu Keluarga"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600">Alamat</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900/10"
            placeholder="Alamat domisili"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600">RT</label>
          <input
            name="rt"
            value={form.rt}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900/10"
            placeholder="01"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900/10"
          >
            <option>Tetap</option>
            <option>Sementara</option>
            <option>Pendatang</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition">
          Simpan Data
        </button>
      </div>
    </form>
  );
}
