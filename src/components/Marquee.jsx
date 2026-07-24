"use client";
export default function Marquee() {
  const text = "New Arrivals:   •   The Silent Patient   |   Atomic Habits   |   Think Again   |   Special Discount on Memberships – 20% OFF!   •   Deep Work   |   Sapiens   |   Rich Dad Poor Dad   |   Join Now for Free!   •   ";
  return (
    <div style={{ background: "#1e293b", overflow: "hidden", display: "flex", alignItems: "center", height: 40 }}>
      {/* Speaker badge */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 6, padding: "0 14px 0 12px", height: "100%", background: "#4f46e5", borderRadius: "0 20px 20px 0", marginRight: 16 }}>
        <svg width="14" height="14" fill="white" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd"/>
        </svg>
      </div>
      <div style={{ overflow: "hidden", flex: 1 }}>
        <div className="marquee-track" style={{ fontSize: 13, color: "#cbd5e1", gap: 0 }}>
          <span>{text}</span>
          <span style={{ color: "#f97316", fontWeight: 700 }}> 20% OFF! </span>
          <span>{text}</span>
          <span style={{ color: "#f97316", fontWeight: 700 }}> 20% OFF! </span>
        </div>
      </div>
    </div>
  );
}
