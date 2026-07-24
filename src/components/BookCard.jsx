"use client";
import Image from "next/image";
import Link from "next/link";

const badgeClass = { Story: "badge-story", Tech: "badge-tech", Science: "badge-science" };

export default function BookCard({ book, showViewDetails = false }) {
  return (
    <div className="book-card" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
      {/* Cover image */}
      <div style={{ background: "#f8f9fc", display: "flex", alignItems: "center", justifyContent: "center", height: 180, padding: "16px 12px" }}>
        <Image
          src={book.image_url} alt={book.title}
          style={{ height: 150, width: "auto", maxWidth: 110, objectFit: "cover", borderRadius: 6, boxShadow: "0 4px 12px rgba(0,0,0,0.18)" }}
          onError={e => { e.target.src = `https://placehold.co/110x150/4f46e5/fff?text=${encodeURIComponent(book.title.slice(0,6))}`; }}
        />
      </div>
      {/* Info */}
      <div style={{ padding: "12px 14px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 3, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {book.title}
        </h3>
        <p style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>{book.author}</p>
        <span className={badgeClass[book.category] || "badge-tech"} style={{ marginBottom: 6 }}>{book.category}</span>
        <p style={{ fontSize: 12, color: "#64748b", marginBottom: 12 }}>Available: {book.available_quantity} Copies</p>
        <div style={{ marginTop: "auto" }}>
          <Link href={`/books/${book.id}`} style={{
            display: "block", textAlign: "center", padding: "8px", fontSize: 13, fontWeight: 600,
            color: "#4f46e5", border: "1.5px solid #4f46e5", borderRadius: 7, textDecoration: "none",
            transition: "background 0.15s, color 0.15s",
          }}
            onMouseOver={e => { e.currentTarget.style.background = "#4f46e5"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4f46e5"; }}>
            {showViewDetails ? "View Details" : "Details"}
          </Link>
        </div>
      </div>
    </div>
  );
}
