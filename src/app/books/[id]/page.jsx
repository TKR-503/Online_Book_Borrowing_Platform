"use client";
import { useParams, useRouter } from "next/navigation";
import { getBookById } from "@/lib/books";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Image from "next/image";

const badgeClass = { Story: "badge-story", Tech: "badge-tech", Science: "badge-science" };

export default function BookDetailPage() {
    const { id } = useParams();
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const [borrowed, setBorrowed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imgError, setImgError] = useState(false);
    const book = getBookById(id);

    // Redirect unauthenticated users via useEffect
    useEffect(() => {
        if (!isPending && !session?.user) {
            router.push("/login");
        }
    }, [isPending, session?.user, router]);

    if (isPending) return (
        <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 36, height: 36, border: "4px solid #e0e7ff", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
    );

    // Fallback demo session check
    const currentUser = session?.user || { name: "Demo Reader" };

    if (!book) return (
        <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ fontSize: 56 }}>📭</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#374151" }}>Book not found</div>
            <Link href="/books" style={{ color: "#4f46e5", textDecoration: "none", fontWeight: 600 }}>← Back to All Books</Link>
        </div>
    );

    const handleBorrow = () => {
        setLoading(true);
        setTimeout(() => { setBorrowed(true); setLoading(false); toast.success("Book borrowed successfully!"); }, 800);
    };

    const coverUrl = !imgError && book.image_url
        ? book.image_url
        : `https://placehold.co/200x270/4f46e5/fff?text=${encodeURIComponent(book.title.slice(0, 8))}`;

    return (
        <div style={{ background: "#f0f4ff", minHeight: "100vh", padding: "28px 0" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>

                {/* Back link */}
                <Link href="/books" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4f46e5", textDecoration: "none", fontWeight: 700, fontSize: 14, marginBottom: 20 }}>
                    <svg width="16" height="16" fill="none" stroke="#4f46e5" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Books
                </Link>

                {/* Book Detail Grid Container */}
                <div className="book-detail-card-grid" style={{ background: "#fff", borderRadius: 16, border: "1px solid #e8ecf0", overflow: "hidden", boxShadow: "0 4px 20px rgba(79,70,229,0.08)", display: "grid", gridTemplateColumns: "1fr 1.6fr" }}>

                    {/* Left: Book cover */}
                    <div className="book-cover-container" style={{ background: "linear-gradient(135deg,#f0f4ff 0%,#e8eaf6 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 48, minHeight: 400 }}>
                        <div style={{ position: "relative" }}>s
                            <Image
                                src={coverUrl}
                                alt={book.title}
                                width={200}
                                height={270}
                                onError={() => setImgError(true)}
                                style={{ width: 200, height: 270, objectFit: "cover", borderRadius: 12, boxShadow: "0 20px 60px rgba(0,0,0,0.22)" }}
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="book-info-container" style={{ padding: "36px 40px", display: "flex", flexDirection: "column" }}>
                        <h1 style={{ fontSize: 26, fontWeight: 900, color: "#1e293b", marginBottom: 6, lineHeight: 1.3 }}>{book.title}</h1>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <span style={{ fontSize: 14, color: "#64748b" }}>By {book.author}</span>
                            <span className={badgeClass[book.category] || "badge-tech"}>{book.category}</span>
                        </div>
                        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, marginBottom: 28 }}>{book.description}</p>

                        {/* Details grid */}
                        <div className="book-details-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                            {[
                                { label: "Category", value: book.category, icon: "🏷️" },
                                { label: "Available Quantity", value: `${book.available_quantity} Copies`, icon: "✅" },
                                { label: "Borrowed", value: "18 Times", icon: "📖" },
                                { label: "Publisher", value: "Avery", icon: "🏢" },
                                { label: "Published Year", value: "2018", icon: "📅" },
                            ].map(item => (
                                <div key={item.label} style={{ background: "#f8faff", borderRadius: 10, padding: "12px 14px", border: "1px solid #e8ecf0" }}>
                                    <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.icon} {item.label}</div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>{item.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Borrow button */}
                        {borrowed ? (
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 10, padding: "14px 18px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <svg width="18" height="18" fill="none" stroke="#16a34a" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span style={{ fontSize: 14, fontWeight: 700, color: "#16a34a" }}>Book borrowed successfully!</span>
                                </div>
                                <button onClick={() => setBorrowed(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8" }}>✕</button>
                            </div>
                        ) : (
                            <button
                                onClick={handleBorrow}
                                disabled={loading || book.available_quantity === 0}
                                style={{
                                    padding: "15px 24px", background: "#4f46e5", color: "#fff", border: "none",
                                    borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                    opacity: loading ? 0.7 : 1, boxShadow: "0 4px 16px rgba(79,70,229,0.35)", transition: "opacity 0.15s"
                                }}
                            >
                                {loading ? (
                                    <>
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ animation: "spin 0.8s linear infinite" }}>
                                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" opacity="0.25" />
                                            <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        Borrow This Book
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        @media (max-width: 768px) {
          .book-detail-card-grid {
            grid-template-columns: 1fr !important;
          }
          .book-cover-container {
            padding: 32px 20px !important;
            min-height: 280px !important;
          }
          .book-info-container {
            padding: 24px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .book-details-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
