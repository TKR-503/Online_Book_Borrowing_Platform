"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("Demo Reader");
  const [email, setEmail] = useState("reader@bookverse.com");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully!");
      router.push("/profile");
    }, 800);
  };

  return (
    <div style={{ background: "#f0f4ff", minHeight: "calc(100vh - 64px)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 540, margin: "0 auto", background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", padding: "36px 32px", boxShadow: "0 4px 20px rgba(79,70,229,0.08)" }}>
        
        {/* Top Back Link */}
        <Link href="/profile" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4f46e5", textDecoration: "none", fontWeight: 600, fontSize: 13, marginBottom: 20 }}>
          ← Back to Profile
        </Link>

        <h1 style={{ fontSize: 24, fontWeight: 800, color: "#1e293b", marginBottom: 6 }}>Update Profile</h1>
        <p style={{ fontSize: 13, color: "#64748b", marginBottom: 24 }}>Update your personal information below</p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ width: "100%", height: 44, padding: "0 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, background: "#f8faff", outline: "none" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", height: 44, padding: "0 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, background: "#f8faff", outline: "none" }}
            />
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <button
              type="submit"
              disabled={loading}
              style={{ flex: 1, height: 44, background: "#4f46e5", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
            <Link
              href="/profile"
              style={{ padding: "12px 20px", background: "#f1f5f9", color: "#475569", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none", textAlign: "center" }}
            >
              Cancel
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
}
