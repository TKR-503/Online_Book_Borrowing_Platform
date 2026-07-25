"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const logout = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully!");
            router.push("/");
            setOpen(false);
            setDropdownOpen(false);
          },
        },
      });
    } catch {
      toast.success("Logged out successfully!");
      router.push("/");
      setOpen(false);
      setDropdownOpen(false);
    }
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "All Books", href: "/books" },
    { label: "My Profile", href: "/profile" },
  ];

  // User fallback for preview/demo
  const user = session?.user || {
    name: "Demo Reader",
    email: "reader@bookverse.com",
    image: "",
  };

  const avatarUrl = !imgError && user.image
    ? user.image
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "U")}&background=4f46e5&color=fff&size=80`;

  return (
    <nav style={{ background: "#fff", borderBottom: "1px solid #e8ecf0", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" fill="white" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#4f46e5", lineHeight: 1.2 }}>BookVerse</div>
              <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.2 }}>Your Digital Library</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex" style={{ gap: 32 }}>
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{
                  fontSize: 15, fontWeight: 500, textDecoration: "none",
                  color: active ? "#4f46e5" : "#374151",
                  borderBottom: active ? "2px solid #4f46e5" : "2px solid transparent",
                  paddingBottom: 2, transition: "color 0.15s",
                }}>
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 14 }}>
            {session?.user ? (
              <>
                {/* User Dropdown Trigger */}
                <div style={{ position: "relative" }}>
                  <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                      padding: "4px 10px 4px 6px", borderRadius: 20, transition: "background 0.2s ease",
                      background: dropdownOpen ? "#eef2ff" : "transparent"
                    }}
                    onMouseOver={e => { if (!dropdownOpen) e.currentTarget.style.background = "#f8fafc"; }}
                    onMouseOut={e => { if (!dropdownOpen) e.currentTarget.style.background = "transparent"; }}
                  >
                    <img
                      src={avatarUrl}
                      alt="avatar"
                      width={34}
                      height={34}
                      onError={() => setImgError(true)}
                      style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e7ff" }}
                    />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", maxWidth: 110, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {user.name}
                    </span>
                    <svg width="12" height="12" fill="#64748b" viewBox="0 0 20 20" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>

                  {/* Dropdown Card */}
                  {dropdownOpen && (
                    <div style={{
                      position: "absolute", right: 0, top: 46, width: 230,
                      background: "#ffffff", borderRadius: 12, border: "1px solid #e2e8f0",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.12)", padding: 14, zIndex: 100,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12, borderBottom: "1px solid #f1f5f9", marginBottom: 8 }}>
                        <img src={avatarUrl} alt="avatar" width={38} height={38} style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover" }} />
                        <div style={{ overflow: "hidden" }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{user.name}</div>
                          <div style={{ fontSize: 11, color: "#64748b", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{user.email}</div>
                        </div>
                      </div>

                      <Link href="/profile" onClick={() => setDropdownOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, fontSize: 13, color: "#334155", textDecoration: "none", fontWeight: 600, transition: "background 0.15s ease" }}
                        onMouseOver={e => e.currentTarget.style.background = "#f8faff"}
                        onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                        <span>👤</span> My Profile
                      </Link>

                      <Link href="/profile/update" onClick={() => setDropdownOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, fontSize: 13, color: "#334155", textDecoration: "none", fontWeight: 600, transition: "background 0.15s ease" }}
                        onMouseOver={e => e.currentTarget.style.background = "#f8faff"}
                        onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                        <span>✏️</span> Edit Profile
                      </Link>

                      <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 6, paddingTop: 6 }}>
                        <button onClick={logout} style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, fontSize: 13, color: "#ef4444", background: "#fef2f2", border: "none", cursor: "pointer", fontWeight: 700, transition: "background 0.15s ease" }}
                          onMouseOver={e => e.currentTarget.style.background = "#fee2e2"}
                          onMouseOut={e => e.currentTarget.style.background = "#fef2f2"}>
                          <span>🚪</span> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navbar Logout Button with hover effect */}
                <button
                  onClick={logout}
                  style={{
                    padding: "8px 20px", background: "#4f46e5", color: "#fff",
                    border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600,
                    cursor: "pointer", boxShadow: "0 2px 10px rgba(79, 70, 229, 0.25)",
                    transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease"
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = "#4338ca";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(79, 70, 229, 0.4)";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = "#4f46e5";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(79, 70, 229, 0.25)";
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" style={{ padding: "8px 20px", background: "#4f46e5", color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                Login
              </Link>
            )}
          </div>

          {/* Mobile burger */}
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
            <svg width="22" height="22" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ background: "#fff", borderTop: "1px solid #f1f5f9", padding: "8px 16px 16px" }}>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "10px 12px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none",
              color: pathname === href ? "#4f46e5" : "#475569",
              background: pathname === href ? "#eef2ff" : "transparent",
              marginBottom: 2,
            }}>
              {label}
            </Link>
          ))}
          <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 8, paddingTop: 12 }}>
            {session?.user ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <img src={avatarUrl} alt="avatar" width={32} height={32} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#374151" }}>{user.name}</span>
                </div>
                <button onClick={logout} style={{ padding: "7px 16px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" onClick={() => setOpen(false)} style={{ display: "block", textAlign: "center", padding: "11px", background: "#4f46e5", color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
