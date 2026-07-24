"use client";
import Link from "next/link";

export default function CategoryCard({ name, desc, cls, cat }) {
  return (
    <Link href={`/books?category=${cat}`} style={{ textDecoration: "none", display: "block" }}>
      <div className={cls}
        style={{ borderRadius: 16, padding: "28px 24px", minHeight: 185, cursor: "pointer", transition: "transform 0.18s, box-shadow 0.18s", position: "relative", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}
        onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.20)"; }}
        onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)"; }}>
        <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{name}</h3>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 26, lineHeight: 1.65 }}>{desc}</p>
        <div style={{ display: "inline-block", padding: "8px 22px", background: "rgba(255,255,255,0.22)", borderRadius: 8, fontSize: 13, fontWeight: 700, color: "#fff" }}>
          Explore
        </div>
      </div>
    </Link>
  );
}
