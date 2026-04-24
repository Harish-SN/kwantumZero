import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills">
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>── 05 / toolkit</div>
        <h2 style={{ marginBottom: 56 }}>Toolkit.</h2>

        <div style={{ display: "grid", gap: 10 }}>
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: 32,
                alignItems: "baseline",
                paddingBottom: 28,
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
                }}
              >
                {group}
              </div>
              <div style={{ display: "flex", gap: "14px 22px", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 13 }}>
                {items.map((s) => (
                  <span key={s} style={{ color: "var(--text)" }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
