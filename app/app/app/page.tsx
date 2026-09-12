import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const c = await cookies();
  redirect(c.get("iqtf_auth")?.value === "1" ? "/dashboard" : "/login");
}
