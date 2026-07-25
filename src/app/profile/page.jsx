"use client";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  if (isPending) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4ff" }}>
        <div style={{ width: 36, height: 36, border: "4px solid #e0e7ff", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }}/>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  // Fallback profile if session is pending or demo mode
  const user = session?.user || {
    name: "Demo Reader",
    email: "reader@bookverse.com",
    image: "",
    createdAt: new Date("2026-01-15T00:00:00.000Z"),
  };

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "January 2026";
  const avatarUrl = !imgError && user.image ? user.image : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "U")}&background=4f46e5&color=fff&size=128`;

  const handleLogout = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully!");
            router.push("/");
          },
        },
      });
    } catch {
      toast.success("Logged out successfully!");
      router.push("/");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff", padding: "40px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>

        {/* Profile Card */}
        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #e8ecf0", boxShadow: "0 4px 20px rgba(79,70,229,0.08)" }}>

          {/* Top layout grid */}
          <div className="profile-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 0, padding: "32px 32px 12px" }}>

            {/* Left avatar column */}
            <div style={{ paddingRight: 28, display: "flex", flexDirection: "column", alignItems: "center", minWidth: 160 }}>
              <div style={{ position: "relative", marginBottom: 14 }}>
                {/* Standard img tag for avatar to handle onError cleanly without React DOM warnings */}
                <Image
                  width={100}
                  height={100}
                  src={avatarUrl}
                  alt={user.name || "User Avatar"}
                  onError={() => setImgError(true)}
                  style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", border: "3px solid #e0e7ff", boxShadow: "0 4px 16px rgba(79,70,229,0.15)" }}
                />
                <span style={{ position: "absolute", bottom: 4, right: 4, width: 14, height: 14, borderRadius: "50%", background: "#22c55e", border: "2px solid #fff" }}/>
              </div>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#1e293b", textAlign: "center" }}>{user.name}</div>
              <div style={{ fontSize: 13, color: "#64748b", textAlign: "center", marginTop: 2 }}>{user.email}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", marginTop: 4 }}>Member since {memberSince}</div>
            </div>

            {/* Right: Profile details */}
            <div style={{ borderLeft: "1px solid #f1f5f9", paddingLeft: 28 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1e293b" }}>My Profile</h2>
                  <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>Account details and status</p>
                </div>
              </div>

              {/* Info rows */}
              {[
                { label: "Email Address", value: user.email || "—", right: memberSince },
                { label: "Security", value: "•••••••••••", right: "Protected" },
                { label: "Account Status", value: "Active Member", status: true },
              ].map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16, paddingBottom: 16, borderBottom: i < 2 ? "1px solid #f8faff" : "none" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, marginBottom: 3 }}>{row.label}</div>
                    <div style={{ fontSize: 13, color: "#334155", fontWeight: 500 }}>{row.value}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {row.status ? (
                      <span style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>Active</span>
                    ) : (
                      <div style={{ fontSize: 13, color: "#64748b" }}>{row.right}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 14, padding: "20px 32px 28px" }}>
            <Link href="/profile/update" className="btn-update-profile">
              Update Profile
            </Link>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} @media(max-width:640px){.profile-grid{grid-template-columns:1fr!important;padding:24px 20px 0!important} .profile-grid > div:first-child{padding-right:0!important;margin-bottom:24px} .profile-grid > div:last-child{border-left:none!important;padding-left:0!important}}`}</style>
    </div>
  );
}
