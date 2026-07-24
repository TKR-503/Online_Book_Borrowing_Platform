export default async function BookDetailPage({ params }) {
  const { id } = await params;
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Book Details (ID: {id})</h1>
      <p style={{ color: "#64748b" }}>Details for book {id}.</p>
    </div>
  );
}
