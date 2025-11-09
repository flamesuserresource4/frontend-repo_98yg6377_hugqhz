import { useMemo } from "react";

export default function ResidentTable({ residents = [] }) {
  const columns = useMemo(
    () => [
      { key: "name", label: "Nama" },
      { key: "nik", label: "NIK" },
      { key: "kk", label: "No. KK" },
      { key: "address", label: "Alamat" },
      { key: "rt", label: "RT" },
      { key: "status", label: "Status" },
    ],
    []
  );

  const sample = residents.length
    ? residents
    : [
        {
          name: "Siti Aminah",
          nik: "3273xxxxxxxxx1",
          kk: "3273xxxxxxxxx0",
          address: "Jl. Melati No.12",
          rt: "01",
          status: "Tetap",
        },
        {
          name: "Budi Santoso",
          nik: "3273xxxxxxxxx2",
          kk: "3273xxxxxxxxx1",
          address: "Jl. Anggrek No.5",
          rt: "03",
          status: "Sementara",
        },
        {
          name: "Dewi Lestari",
          nik: "3273xxxxxxxxx3",
          kk: "3273xxxxxxxxx2",
          address: "Jl. Kenanga No.7",
          rt: "02",
          status: "Tetap",
        },
      ];

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {sample.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-sm text-slate-700">
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
