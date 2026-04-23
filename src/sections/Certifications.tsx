import { certifications } from "../data/resume";

const statusStyles: Record<string, React.CSSProperties> = {
  passed: { color: "var(--accent)", borderColor: "var(--accent)" },
  "in-progress": { color: "#fff", borderColor: "var(--accent)" },
  planned: { color: "var(--text-faint)", borderColor: "var(--line-soft)" },
};

export default function Certifications() {
  return (
    <section id="certs">
      <div className="shell">
        <div className="label" style={{ marginBottom: 24 }}>── 01 / certifications</div>
        <h2 style={{ marginBottom: 48, maxWidth: "18ch" }}>
          On the road to <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Golden Kubestronaut</em>.
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 1,
            background: "var(--line-soft)",
            border: "1px solid var(--line-soft)",
          }}
        >
          {certifications.map((c) => (
            <li
              key={c.code}
              style={{
                background: "var(--bg)",
                padding: "22px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 130,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>
                  {c.code}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    border: "1px solid",
                    ...statusStyles[c.status],
                  }}
                >
                  {c.status}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.4 }}>{c.name}</div>
              {c.year && (
                <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: "auto", fontFamily: "var(--font-mono)" }}>
                  {c.year}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
