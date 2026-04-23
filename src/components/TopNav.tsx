import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/resume";

export default function TopNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: "20px var(--gutter)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        background: "linear-gradient(to bottom, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0) 100%)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Link to="/" style={{ color: "var(--text)", borderBottom: "none", fontWeight: 500 }}>
        {profile.name}
        <span style={{ color: "var(--accent)" }}>.</span>
      </Link>
      <nav style={{ display: "flex", gap: 28 }}>
        <Link to="/" style={{ color: isHome ? "var(--accent)" : "var(--text-faint)", borderBottom: "none" }}>
          Index
        </Link>
        <Link to="/blog" style={{ color: !isHome ? "var(--accent)" : "var(--text-faint)", borderBottom: "none" }}>
          Writing
        </Link>
      </nav>
    </div>
  );
}