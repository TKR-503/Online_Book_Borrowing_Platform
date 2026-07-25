"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { books } from "@/lib/books";
import BookCard from "@/components/BookCard";

const CATS = ["All Books", "Story", "Tech", "Science"];

const catIcon = {
  "All Books": <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>,
  Story: <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/></svg>,
  Tech: <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>,
  Science: <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7z" clipRule="evenodd"/></svg>,
};

function BooksContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const activeCat = searchParams.get("category") || "All Books";

  const handleCategoryClick = (cat) => {
    if (cat === "All Books") {
      router.push("/books");
    } else {
      router.push(`/books?category=${encodeURIComponent(cat)}`);
    }
  };

  const filtered = books.filter(b =>
    (activeCat === "All Books" || b.category === activeCat) &&
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#f0f4ff", minHeight: "100vh", padding: "28px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

        {/* Search bar */}
        <div style={{ position: "relative", marginBottom: 24 }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search books by title..."
            className="inp"
            style={{ width: "100%", paddingLeft: 16, paddingRight: 52, fontSize: 14, color: "#1e293b", height: 48, borderRadius: 10, outline: "none" }}
          />
          <button type="button" onClick={() => setSearch(search)} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 34, height: 34, borderRadius: 8, background: "#4f46e5", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>

        {/* Responsive Layout */}
        <div className="books-layout" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

          {/* Sidebar */}
          <aside className="books-sidebar" style={{ width: 180, flexShrink: 0, background: "#fff", borderRadius: 12, padding: "16px 12px", border: "1px solid #e8ecf0", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", position: "sticky", top: 80 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 12, padding: "0 4px" }}>Categories</div>
            <div className="cat-buttons-wrapper">
              {CATS.map(cat => {
                const active = activeCat === cat;
                return (
                  <button key={cat} onClick={() => handleCategoryClick(cat)}
                    className={`cat-btn ${active ? "active" : ""}`}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", gap: 8,
                      padding: "9px 12px", borderRadius: 8, marginBottom: 4,
                      background: active ? "#4f46e5" : "transparent",
                      color: active ? "#fff" : "#64748b",
                      border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                      textAlign: "left", transition: "background 0.15s, color 0.15s", flexShrink: 0,
                    }}>
                    <span style={{ color: active ? "#fff" : "#4f46e5", display: "flex" }}>{catIcon[cat]}</span>
                    {cat}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: 16 }}>
              <h1 style={{ fontSize: 20, fontWeight: 800, color: "#1e293b" }}>All Books</h1>
              <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>Showing {filtered.length} books</p>
            </div>

            {filtered.length === 0 ? (
              <div style={{ background: "#fff", borderRadius: 12, padding: "60px 20px", textAlign: "center", border: "1px solid #e8ecf0" }}>
                <div style={{ fontSize: 56, marginBottom: 12 }}>📭</div>
                <div style={{ fontWeight: 700, color: "#374151", marginBottom: 4 }}>No books found</div>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>Try a different search query or category.</div>
              </div>
            ) : (
              <div className="books-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 20 }}>
                {filtered.map(book => <BookCard key={book.id} book={book} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .books-layout {
            flex-direction: column !important;
          }
          .books-sidebar {
            width: 100% !important;
            position: relative !important;
            top: 0 !important;
            padding: 12px !important;
            margin-bottom: 20px;
          }
          .cat-buttons-wrapper {
            display: flex !important;
            gap: 8px !important;
            overflow-x: auto !important;
            white-space: nowrap !important;
            padding-bottom: 4px;
          }
          .cat-btn {
            width: auto !important;
            margin-bottom: 0 !important;
            padding: 8px 14px !important;
          }
        }
        @media(max-width: 480px) {
          .books-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function BooksPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 36, height: 36, border: "4px solid #e0e7ff", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }}/></div>}>
      <BooksContent />
    </Suspense>
  );
}
