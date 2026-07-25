import Link from "next/link";
import { getFeaturedBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";
import Marquee from "@/components/Marquee";
import TestimonialsSlider from "@/components/TestimonialSlider";
import CategoryCard from "@/components/CategoryCard";
import Image from "next/image";

export default function HomePage() {
  const featured = getFeaturedBooks();

  const stats = [
    { value: "2500+", label: "Books Available", color: "#4f46e5", path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { value: "1500+", label: "Active Readers", color: "#f97316", path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "500+", label: "Books Borrowed", color: "#f59e0b", path: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" },
    { value: "99%", label: "Satisfaction Rate", color: "#10b981", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  const categories = [
    { name: "Story Books", desc: "Dive into imaginative worlds and timeless tales.", cls: "cat-story", cat: "Story" },
    { name: "Technology", desc: "Stay ahead with the latest in tech and innovation.", cls: "cat-tech", cat: "Tech" },
    { name: "Science", desc: "Explore the wonders of science and the universe.", cls: "cat-science", cat: "Science" },
  ];

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="hero-gradient" style={{ position: "relative", overflow: "hidden", padding: "20px 0" }}>
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div id="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(255,255,255,0.12)", borderRadius: 20, fontSize: 13, fontWeight: 700, color: "#a5b4fc", marginBottom: 18, border: "1px solid rgba(255,255,255,0.15)" }}>
              <span>📚</span> Digital Library Platform
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.12, marginBottom: 18, letterSpacing: "-0.02em" }}>
              Find Your<br />Next Read
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
              Discover thousands of books across Science, Story, and Technology. Borrow instantly and start reading today.
            </p>
            <Link href="/books" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 32px", background: "#fff", color: "#4f46e5",
              borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none",
              boxShadow: "0 6px 25px rgba(0,0,0,0.30)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease"
            }}>
              Browse Now
              <svg width="16" height="16" fill="none" stroke="#4f46e5" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>

          {/* Right: styled image with shadow & background */}
          <div className="hero-img-container">
            <div className="hero-img-card">
              <Image
                src="/Book_photo.png"
                alt="BookVerse Digital Library"
                className="hero-img-style"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* Responsive hero on mobile */}
        <style>{`@media(max-width:767px){#hero-grid{grid-template-columns:1fr!important;text-align:center}#hero-grid a{justify-content:center}}`}</style>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── FEATURED BOOKS ── */}
      <section style={{ background: "#fff", padding: "52px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>Featured Books</h2>
              <p style={{ fontSize: 13, color: "#94a3b8" }}>Most borrowed books this month</p>
            </div>
            <Link href="/books" style={{ fontSize: 13, fontWeight: 700, color: "#4f46e5", textDecoration: "none" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 20 }}>
            {featured.map(book =><BookCard key={book.id} book={book} showViewDetails />)}
          </div>
        </div>
      </section>

      {/* ── EXPLORE CATEGORIES ── */}
      <section style={{ background: "#f0f4ff", padding: "52px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>Explore Categories</h2>
            <p style={{ fontSize: 13, color: "#94a3b8" }}>Browse books by your favorite categories</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))", gap: 20 }}>
            {categories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#fff", padding: "48px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: 24 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                  <svg width="38" height="38" fill="none" stroke={s.color} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.path}/>
                  </svg>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#1e293b", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#f0f4ff", padding: "52px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>What Readers Say</h2>
            <p style={{ fontSize: 13, color: "#94a3b8" }}>Loved by thousands of book lovers</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>
    </>
  );
}
