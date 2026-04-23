import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>── 02 / experience</div>
        <h2 style={{ marginBottom: 56 }}>What I'm building.</h2>

        <div style={{ display: "grid", gap: 48 }}>
          {experience.map((e, i) => (
            <article
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: 32,
                paddingBottom: 32,
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  paddingTop: 6,
                }}
              >
                {e.period}
              </div>
              <div>
                <h3 style={{ color: "var(--text)", marginBottom: 4 }}>{e.role}</h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)", marginBottom: 18 }}>
                  {e.org}
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-dim)" }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: 8, lineHeight: 1.6 }}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
