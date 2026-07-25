"use client";
import { useState } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  // Fallback profile if session is pending or demo mode
  const user = session?.user || {
    name: "Demo Reader",
    email: "reader@bookverse.com",
    image: "",
  };

  const [name, setName] = useState(user.name || "");
  const [image, setImage] = useState(user.image || "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (isPending) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4ff" }}>
        <div style={{ width: 36, height: 36, border: "4px solid #e0e7ff", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }}/>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  const avatarUrl = !imgError && (image || user.image)
    ? (image || user.image)
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(name || user.name || "U")}&background=ffffff&color=4f46e5&size=80`;

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      if (authClient?.updateUser) {
        await authClient.updateUser({ name, image: image || undefined });
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff", padding: "44px 0" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>

        {/* Back link */}
        <Link href="/profile" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4f46e5", textDecoration: "none", fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
          <svg width="14" height="14" fill="none" stroke="#4f46e5" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Profile
        </Link>

        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", boxShadow: "0 4px 20px rgba(79,70,229,0.08)", overflow: "hidden" }}>

          {/* Header */}
          <div style={{ background: "linear-gradient(135deg,#3730a3,#4f46e5,#7c3aed)", padding: "28px 32px", display: "flex", alignItems: "center", gap: 16 }}>
            <img
              width={56}
              height={56}
              src={avatarUrl}
              alt={user.name || "Avatar"}
              onError={() => setImgError(true)}
              style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(255,255,255,0.4)" }}
            />
            <div>
              <h1 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 2 }}>Edit Profile</h1>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>Update your personal details & profile photo</p>
            </div>
          </div>

          <div style={{ padding: "32px 32px 36px" }}>

            {/* Success banner */}
            {success && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 9, padding: "12px 16px", marginBottom: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="18" height="18" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#16a34a" }}>Profile updated successfully!</span>
                </div>
                <button onClick={() => setSuccess(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: 16 }}>✕</button>
              </div>
            )}

            <form onSubmit={handleUpdate}>
              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 7 }}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="inp"
                  style={{ height: 46, padding: "0 16px", borderRadius: 9, fontSize: 14, color: "#1e293b" }}
                />
              </div>

              {/* Email (read-only) */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 7 }}>
                  Email Address <span style={{ fontWeight: 400, color: "#94a3b8", fontSize: 12 }}>(read-only)</span>
                </label>
                <input
                  type="email"
                  value={user.email || ""}
                  readOnly
                  className="inp"
                  style={{ height: 46, padding: "0 16px", borderRadius: 9, fontSize: 14, background: "#f8faff", color: "#94a3b8", cursor: "not-allowed", border: "1.5px solid #e2e8f0" }}
                />
              </div>

              {/* Photo URL */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 7 }}>
                  Profile Image URL
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="url"
                    value={image}
                    onChange={e => { setImage(e.target.value); setImgError(false); }}
                    placeholder="https://example.com/avatar.jpg"
                    className="inp"
                    style={{ height: 46, padding: "0 44px 0 16px", borderRadius: 9, fontSize: 14, color: "#1e293b" }}
                  />
                  <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: "100%", height: 48, background: "#4f46e5", color: "#fff", border: "none", borderRadius: 9, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: loading ? 0.7 : 1, boxShadow: "0 3px 12px rgba(79,70,229,0.30)", transition: "background 0.15s ease" }}
              >
                {loading ? (
                  <>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ animation: "spin 0.8s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" opacity="0.25"/>
                      <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Updating...
                  </>
                ) : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
