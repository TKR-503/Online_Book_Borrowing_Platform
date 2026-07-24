"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1e293b", color: "#94a3b8", paddingTop: 48, paddingBottom: 24 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" fill="white" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#fff", lineHeight: 1.2 }}>BookVerse</div>
                <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.2 }}>Your Digital Library</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b", marginBottom: 18 }}>
              Empowering readers by providing seamless access to knowledge anytime, anywhere.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["f", "t", "in", "ig"].map((s, i) => (
                <a key={i} href="#" style={{ width: 32, height: 32, borderRadius: 8, background: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", textDecoration: "none", transition: "background 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.background = "#4f46e5"}
                  onMouseOut={e => e.currentTarget.style.background = "#334155"}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18 }}>Quick Links</h4>
            {[{ label: "Home", href: "/" }, { label: "All Books", href: "/books" }, { label: "My Profile", href: "/profile" }].map(l => (
              <div key={l.href} style={{ marginBottom: 10 }}>
                <Link href={l.href} style={{ fontSize: 13, color: "#64748b", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "color 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.color = "#a5b4fc"}
                  onMouseOut={e => e.currentTarget.style.color = "#64748b"}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4f46e5", flexShrink: 0 }}/>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18 }}>Contact Us</h4>
            {[
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "support@bookverse.com" },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+880 1234 567 890" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "123 Library Lane, Dhaka, Bangladesh" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                <svg width="15" height="15" fill="none" stroke="#4f46e5" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 1 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                </svg>
                <span style={{ fontSize: 13, color: "#64748b" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #334155", paddingTop: 20, textAlign: "center", fontSize: 13, color: "#475569" }}>
          © {new Date().getFullYear()} BookVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
