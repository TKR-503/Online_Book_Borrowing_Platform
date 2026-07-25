"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Logged in successfully!");
      router.push("/profile");
    }, 800);
  };

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      toast.success("Signed in with Google!");
      router.push("/profile");
    }, 800);
  };

  return (
    <div style={{ background: "#f0f4ff", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <div style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", padding: "36px 32px", boxShadow: "0 4px 20px rgba(79,70,229,0.08)" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>Welcome Back</h1>
          <p style={{ fontSize: 13, color: "#64748b" }}>Sign in to access your BookVerse digital library</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{ width: "100%", height: 44, padding: "0 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, background: "#f8faff", outline: "none", color: "#1e293b" }}
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
              style={{ width: "100%", height: 44, padding: "0 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, background: "#f8faff", outline: "none", color: "#1e293b" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: "100%", height: 46, background: "#4f46e5", color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 6, opacity: loading ? 0.7 : 1, transition: "opacity 0.15s" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0 18px", color: "#94a3b8", fontSize: 12, fontWeight: 600 }}>
          <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
          <span>OR</span>
          <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
        </div>

        {/* Google Sign In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          style={{
            width: "100%", height: 46, background: "#ffffff", color: "#374151",
            border: "1.5px solid #e2e8f0", borderRadius: 8, fontSize: 14, fontWeight: 600,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)", transition: "background 0.15s, border-color 0.15s",
            opacity: googleLoading ? 0.7 : 1
          }}
          onMouseOver={e => { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.borderColor = "#cbd5e1"; }}
          onMouseOut={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          {googleLoading ? "Signing in with Google..." : "Sign in with Google"}
        </button>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#64748b" }}>
          Don&apos;t have an account?{" "}
          <Link href="/register" style={{ color: "#4f46e5", fontWeight: 700, textDecoration: "none" }}>
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
}
