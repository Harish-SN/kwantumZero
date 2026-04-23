import { profile } from "../data/resume";

export default function Footer() {
  return (
    <section id="contact" style={{ paddingBottom: 120 }}>
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>
          ── 05 / contact
        </div>

        {/* ✅ Updated heading */}
        <h2 style={{ marginBottom: 32, maxWidth: "14ch" }}>
          Found something worth discussing?
        </h2>

        {/* 🔥 ALL LINKS IN ONE LINE (ALL HIGHLIGHTED) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            style={{
              fontSize: 14,
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "14px 22px",
              textDecoration: "none",
            }}
          >
            {profile.email} →
          </a>

          {/* All socials (also highlighted now) */}
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 14,
                color: "var(--bg)",
                background: "var(--accent)",
                padding: "14px 22px",
                textDecoration: "none",
              }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        {/* Footer bottom */}
        <div
          style={{
            marginTop: 120,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
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

          {/* ✅ GitHub source */}
          <a
            href="https://github.com/Harish-SN/kwantumZero"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-faint)",
              textDecoration: "none",
              borderBottom: "1px solid var(--line-soft)",
            }}
          >
            Source: github.com/Harish-SN/kwantumZero
          </a>
        </div>
      </div>
    </section>
  );
}