import Link from "next/link";
import { AdminDashboard } from "@/components/admin-dashboard";

export default function AdminPage() {
  return (
    <main className="page-shell admin-page">
      <div className="admin-topbar">
        <div>
          <p className="eyebrow">KAJARIA SANITARY MART</p>
          <h1>Control Panel</h1>
        </div>
        <Link href="/" className="ghost-button">
          View Website
        </Link>
      </div>
      <AdminDashboard />
    </main>
  );
}
