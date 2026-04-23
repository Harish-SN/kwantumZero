import { Link } from "react-router-dom";
import { getPostMeta } from "../lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogTeaser() {
  const posts = getPostMeta().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="writing">
      <div className="shell">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
          <div>
            <div className="label" style={{ marginBottom: 24 }}>── 01 / writing</div>
            <h2>Recent posts.</h2>
          </div>
          <Link to="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", borderBottom: "none" }}>
            All writing →
          </Link>
        </div>

        <div>
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(140px, 160px) 1fr auto",
                gap: 32,
                padding: "28px 0",
                borderTop: i === 0 ? "1px solid var(--line-soft)" : "none",
                borderBottom: "1px solid var(--line-soft)",
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", paddingTop: 4 }}>
                {formatDate(p.date)}
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ margin: 0, color: "var(--text-dim)", fontSize: 13 }}>{p.summary}</p>
              </div>
              <div style={{ color: "var(--text-faint)", fontSize: 20, alignSelf: "center" }}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}