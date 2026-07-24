import BookCard from "@/components/BookCard";

export default function Home() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <section style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#1e293b", marginBottom: 12 }}>
          Welcome to <span style={{ color: "#4f46e5" }}>BookVerse</span>
        </h1>
        <p style={{ fontSize: 16, color: "#64748b", maxWidth: 600, margin: "0 auto" }}>
          Explore thousands of books, borrow digitally, read instantly.
        </p>
      </section>
    </div>
  );
}
