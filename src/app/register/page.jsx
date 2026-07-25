"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully!");
      router.push("/profile");
    }, 800);
  };

  return (
    <div style={{ background: "#f0f4ff", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <div style={{ width: "100%", maxWidth: 440, background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", padding: "36px 32px", boxShadow: "0 4px 20px rgba(79,70,229,0.08)" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>Create Account</h1>
          <p style={{ fontSize: 13, color: "#64748b" }}>Join BookVerse and start borrowing books today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="John Doe"
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
              placeholder="you@example.com"
              style={{ width: "100%", height: 44, padding: "0 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, background: "#f8faff", outline: "none" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: "100%", height: 44, padding: "0 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, background: "#f8faff", outline: "none" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: "100%", height: 46, background: "#4f46e5", color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8, opacity: loading ? 0.7 : 1, transition: "opacity 0.15s" }}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#64748b" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#4f46e5", fontWeight: 700, textDecoration: "none" }}>
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}
