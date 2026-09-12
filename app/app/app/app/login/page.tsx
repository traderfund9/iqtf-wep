"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) router.push("/dashboard");
    else {
      setError("รหัสผ่านไม่ถูกต้อง");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400">IQTF</div>
          <div className="text-xs text-gray-500 mt-1">Institutional Quantitative Trading Framework</div>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="รหัสผ่านแอดมิน"
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500"
        />
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg py-2.5 text-sm font-semibold">
          {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>
    </main>
  );
}
