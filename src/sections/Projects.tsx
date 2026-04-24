import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>── 02 / projects</div>
        <h2 style={{ marginBottom: 56 }}>Open-source & lab work.</h2>

        <div style={{ display: "grid", gap: 0 }}>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(180px, 240px) 1fr auto",
                gap: 1,
                padding: "8px 0",
                borderTop: i === 0 ? "1px solid var(--line-soft)" : "none",
                borderBottom: "1px solid var(--line-soft)",
                color: "var(--text)",
                textDecoration: "none",
                borderLeft: 0,
                borderRight: 0,
                transition: "background 180ms ease, padding-left 180ms ease",
                paddingLeft: 0,
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.background = "rgba(241, 253, 0, 0.03)";
                ev.currentTarget.style.paddingLeft = "16px";
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.background = "transparent";
                ev.currentTarget.style.paddingLeft = "0";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                {p.name}
              </div>
              <div>
                <p style={{ margin: 0, marginBottom: 10, color: "var(--text-dim)" }}>{p.blurb}</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-faint)",
                        padding: "3px 8px",
                        border: "1px solid var(--line-soft)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ color: "var(--text-faint)", fontSize: 20, alignSelf: "center" }}>↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
