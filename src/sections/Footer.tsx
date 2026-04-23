import { profile } from "../data/resume";

export default function Footer() {
  return (
    <section id="contact" style={{ paddingBottom: 120 }}>
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>
          ── 05 / contact
        </div>

        <h2 style={{ marginBottom: 32, maxWidth: "14ch" }}>
          Found something worth discussing?
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
          }}
        >
          {profile.email} →
        </a>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--text-dim)",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>

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
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Source:github.com/Harish-SN/kwantumZero</span>
        </div>
      </div>
    </section>
  );
}