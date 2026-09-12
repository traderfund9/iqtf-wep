export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 bg-[#0d1117]/90 backdrop-blur border-b border-[#30363d] pl-14 pr-4 py-3 lg:pl-6">
      <div>
        <h1 className="text-base font-semibold">{title}</h1>
        {subtitle && <p className="text-[11px] text-gray-500">{subtitle}</p>}
      </div>
      <span className="ml-auto flex items-center gap-1.5 text-[10px] text-green-400 bg-green-400/10 rounded-full px-2.5 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> LIVE
      </span>
      <a href="/api/auth/logout" className="text-[11px] text-gray-400 border border-[#30363d] rounded-lg px-2.5 py-1.5 hover:text-gray-200">
        ออกจากระบบ
      </a>
    </header>
  );
}
