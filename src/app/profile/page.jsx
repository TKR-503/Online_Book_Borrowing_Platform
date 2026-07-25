"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  const user = {
    name: "Demo Reader",
    email: "reader@bookverse.com",
    role: "Member",
    joinedDate: "January 2026",
    borrowedCount: 3,
    avatar: "https://ui-avatars.com/api/?name=Demo+Reader&background=4f46e5&color=fff&size=128",
  };

  const activity = [
    { title: "Clean Code", date: "2 days ago", status: "Borrowed" },
    { title: "The Great Gatsby", date: "1 week ago", status: "Returned" },
    { title: "Sapiens", date: "2 weeks ago", status: "Returned" },
  ];

  return (
    <div style={{ background: "#f0f4ff", minHeight: "calc(100vh - 64px)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        
        {/* Profile Card */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", padding: "32px", boxShadow: "0 4px 20px rgba(79,70,229,0.08)", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Image
                src={user.avatar}
                alt={user.name}
                width={80}
                height={80}
                style={{ borderRadius: "50%", border: "3px solid #e0e7ff" }}
              />
              <div>
                <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{user.name}</h1>
                <p style={{ fontSize: 14, color: "#64748b", marginBottom: 6 }}>{user.email}</p>
                <span style={{ display: "inline-block", padding: "3px 10px", background: "#eef2ff", color: "#4f46e5", borderRadius: 12, fontSize: 12, fontWeight: 700 }}>
                  {user.role}
                </span>
              </div>
            </div>

            <Link
              href="/profile/update"
              style={{ padding: "10px 20px", background: "#4f46e5", color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Details Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 24 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "20px", border: "1px solid #e8ecf0" }}>
            <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>Books Borrowed</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#4f46e5" }}>{user.borrowedCount}</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: "20px", border: "1px solid #e8ecf0" }}>
            <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>Member Since</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#1e293b" }}>{user.joinedDate}</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1e293b", marginBottom: 16 }}>Borrow History</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {activity.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: 10, background: "#f8faff", border: "1px solid #eef2ff" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>{item.date}</div>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: item.status === "Borrowed" ? "#4f46e5" : "#10b981", background: item.status === "Borrowed" ? "#eef2ff" : "#ecfdf5", padding: "4px 10px", borderRadius: 12 }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
