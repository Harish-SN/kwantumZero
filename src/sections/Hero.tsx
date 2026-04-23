import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: "22vh" }}>
      <div className="shell" style={{ display: "grid", gap: 28 }}>
        <div className="label">
          ── {profile.location} · {profile.role}
        </div>

        <h1 style={{ color: "var(--text)" }}>
          {profile.name}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <p style={{ fontSize: 16, maxWidth: "54ch", color: "var(--text-dim)" }}>
          {profile.tagline}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
