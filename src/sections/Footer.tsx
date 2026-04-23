import { profile } from "../data/resume";

export default function Footer() {
  return (
    <section id="contact" style={{ paddingBottom: 120 }}>
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>── 05 / contact</div>
        <h2 style={{ marginBottom: 32, maxWidth: "14ch" }}>
          Got a cluster that needs a hand?
        </h2>
        <a
          href={`mailto:${profile.email}`}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--accent)",
            padding: "14px 22px",
            border: "none",
            borderBottom: "none",
          }}
        >
          {profile.email} →
        </a>

        <div
          style={{
            marginTop: 120,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            paddingTop: 24,
            borderTop: "1px solid var(--line-soft)",
          }}
        >
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Vite · React · Three.js</span>
        </div>
      </div>
    </section>
  );
}
