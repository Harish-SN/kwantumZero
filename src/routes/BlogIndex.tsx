import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getPostMeta } from "../lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogIndex() {
  const allPosts = getPostMeta();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    allPosts.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [allPosts]);

  const posts = activeTag ? allPosts.filter((p) => p.tags.includes(activeTag)) : allPosts;

  return (
    <div className="shell" style={{ paddingTop: "22vh", paddingBottom: 120 }}>
      <div className="label" style={{ marginBottom: 24 }}>── writing</div>
      <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", marginBottom: 24 }}>
        Notes<span style={{ color: "var(--accent)" }}>.</span>
      </h1>
      <p style={{ fontSize: 16, maxWidth: "54ch", marginBottom: 56 }}>
        Things I'm learning on the road to Golden Kubestronaut.
      </p>

      {allTags.length > 0 && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48, paddingBottom: 32, borderBottom: "1px solid var(--line-soft)" }}>
          <button onClick={() => setActiveTag(null)} style={tagStyle(activeTag === null)}>All</button>
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)} style={tagStyle(activeTag === tag)}>{tag}</button>
          ))}
        </div>
      )}

      <div>
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(140px, 160px) 1fr",
              gap: 32,
              padding: "32px 0",
              borderTop: i === 0 ? "1px solid var(--line-soft)" : "none",
              borderBottom: "1px solid var(--line-soft)",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", paddingTop: 6 }}>
              {formatDate(p.date)}
            </div>
            <div>
              <h3 style={{ color: "var(--text)", marginBottom: 8, fontSize: 24 }}>{p.title}</h3>
              <p style={{ margin: 0, marginBottom: 12, color: "var(--text-dim)" }}>{p.summary}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", padding: "2px 8px", border: "1px solid var(--line-soft)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function tagStyle(active: boolean): React.CSSProperties {
  return {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "6px 12px",
    background: active ? "var(--accent)" : "transparent",
    color: active ? "var(--bg)" : "var(--text-dim)",
    border: "1px solid",
    borderColor: active ? "var(--accent)" : "var(--line-soft)",
    cursor: "pointer",
  };
}