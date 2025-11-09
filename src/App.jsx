import { useMemo, useState } from "react";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import ResidentTable from "./components/ResidentTable";
import DemoForm from "./components/DemoForm";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</div>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [localResidents, setLocalResidents] = useState([]);

  const filtered = useMemo(() => {
    if (!search) return localResidents;
    const q = search.toLowerCase();
    return localResidents.filter(
      (r) =>
        r.name?.toLowerCase().includes(q) ||
        r.nik?.toLowerCase().includes(q) ||
        r.address?.toLowerCase().includes(q)
    );
  }, [localResidents, search]);

  const handleAdd = (data) => {
    setLocalResidents((prev) => [
      ...prev,
      { ...data, id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString() },
    ]);
  };

  return (
    <>
      <Header onSearch={setSearch} search={search} />
      <Layout>
        <div className="space-y-6">
          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold mb-3">Data Warga</h2>
              <ResidentTable residents={filtered} />
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold mb-3">Input Cepat</h2>
              <DemoForm onSubmit={handleAdd} />
              <p className="text-xs text-slate-500 mt-2">
                Catatan: Form ini bersifat demo lokal. Integrasi simpan-ke-server akan
                ditambahkan pada tahap berikutnya.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
