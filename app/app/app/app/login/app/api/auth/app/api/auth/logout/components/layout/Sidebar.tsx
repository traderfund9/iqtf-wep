"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MENU = [
  { href: "/dashboard", label: "Dashboard", icon: "▣", ready: true },
  { href: "/dashboard/market", label: "Market", icon: "📈", ready: false },
  { href: "/dashboard/ai", label: "AI Analysis", icon: "🤖", ready: false },
  { href: "/dashboard/journal", label: "Trading Journal", icon: "📓", ready: false },
  { href: "/dashboard/backtest", label: "Backtest", icon: "🧪", ready: false },
  { href: "/dashboard/portfolio", label: "Portfolio", icon: "💼", ready: false },
  { href: "/dashboard/risk", label: "Risk Manager", icon: "🛡", ready: false },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙", ready: false },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const nav = (
    <nav className="flex flex-col gap-1 p-3">
      {MENU.map((m) =>
        m.ready ? (
          <Link
            key={m.href}
            href={m.href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
              path === m.href ? "bg-blue-600/20 text-blue-400" : "text-gray-400 hover:bg-white/5"
            }`}
          >
            <span>{m.icon}</span>
            {m.label}
          </Link>
        ) : (
          <div key={m.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 cursor-not-allowed">
            <span>{m.icon}</span>
            {m.label}
            <span className="ml-auto text-[10px] bg-white/5 rounded px-1.5 py-0.5">เร็วๆ นี้</span>
          </div>
        )
      )}
    </nav>
  );

  return (
    <>
      <button onClick={() => setOpen(true)} className="lg:hidden fixed top-3 left-3 z-40 bg-[#161b22] border border-[#30363d] rounded-lg w-10 h-10 text-lg">
        ☰
      </button>
      {open && <div onClick={() => setOpen(false)} className="lg:hidden fixed inset-0 bg-black/60 z-40" />}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-[#0d1117] border-r border-[#30363d] z-50 transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
          <div className="text-xl font-bold text-blue-400">IQTF</div>
          <button onClick={() => setOpen(false)} className="lg:hidden text-gray-500">✕</button>
        </div>
        {nav}
        <div className="absolute bottom-4 left-0 w-full text-center text-[10px] text-gray-600">IQTF Enterprise v1.0</div>
      </aside>
    </>
  );
}
