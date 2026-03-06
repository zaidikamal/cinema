export default function Home() {
  const movies = [
    { title: "Inception", year: "2010", rating: "8.8" },
    { title: "Interstellar", year: "2014", rating: "8.7" },
    { title: "The Dark Knight", year: "2008", rating: "9.0" },
    { title: "Avatar", year: "2009", rating: "7.9" },
    { title: "Gladiator", year: "2000", rating: "8.5" },
    { title: "Titanic", year: "1997", rating: "7.9" }
  ];

  return (
    <main
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif"
      }}
    >
      
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #1e293b"
        }}
      >
        <h1 style={{ fontSize: "28px" }}>🎬 Cinema Universe</h1>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a style={{ color: "white", textDecoration: "none" }}>الأفلام</a>
          <a style={{ color: "white", textDecoration: "none" }}>الممثلون</a>
          <a style={{ color: "white", textDecoration: "none" }}>التقييمات</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: "80px 40px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "50px", marginBottom: "20px" }}>
          اكتشف عالم السينما
        </h2>

        <p style={{ fontSize: "20px", opacity: 0.8 }}>
          آلاف الأفلام، تقييمات، ممثلين، وأحدث الإصدارات السينمائية
        </p>
      </section>

      {/* Movies Grid */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ marginBottom: "30px" }}>🔥 أفلام مشهورة</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
            gap: "20px"
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "20px",
                borderRadius: "10px",
                transition: "0.3s"
              }}
            >
              <div
                style={{
                  height: "300px",
                  background: "#1e293b",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px"
                }}
              >
                🎬
              </div>

              <h3>{movie.title}</h3>

              <p style={{ opacity: 0.7 }}>
                {movie.year} • ⭐ {movie.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          padding: "30px",
          textAlign: "center",
          borderTop: "1px solid #1e293b",
          opacity: 0.7
        }}
      >
        © 2026 Cinema Universe
      </footer>
    </main>
  );
}