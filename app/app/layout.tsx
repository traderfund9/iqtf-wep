import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IQTF — Institutional Quantitative Trading Framework",
  description: "Executive trading dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-[#0d1117] text-gray-200 antialiased">{children}</body>
    </html>
  );
}
