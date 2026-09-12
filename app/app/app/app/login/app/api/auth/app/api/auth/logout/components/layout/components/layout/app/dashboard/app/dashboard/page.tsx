import Header from "../../components/layout/Header";

export default function DashboardPage() {
  return (
    <>
      <Header title="Executive Command Center" subtitle="Institutional market intelligence and decision support" />
      <main className="p-4 lg:p-6 space-y-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "XAUUSD", value: "—", sub: "twelvedata" },
            { label: "GC FUTURES", value: "—", sub: "yahoo" },
            { label: "SIGNAL", value: "—", sub: "รอชุดที่ 2" },
            { label: "CONFIDENCE", value: "—", sub: "รอชุดที่ 2" },
          ].map((c) => (
            <div key={c.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[10px] tracking-wider text-gray-500">{c.label}</div>
              <div className="text-xl font-bold mt-1">{c.value}</div>
              <div className="text-[10px] text-gray-600 mt-1">{c.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">🏗️</div>
          <p className="text-sm text-gray-400">โครงเว็บพร้อมทำงานแล้ว — แท็บอื่นๆ จะเติมในชุดถัดไป</p>
          <p className="text-xs text-gray-600 mt-1">ชุด 2 = Dashboard ข้อมูลจริง · ชุด 3 = Market + EM Zones</p>
        </div>
      </main>
    </>
  );
}
