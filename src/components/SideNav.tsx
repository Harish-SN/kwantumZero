const items = [
  { href: "#top", label: "00" },
  { href: "#certs", label: "01" },
  { href: "#experience", label: "02" },
  { href: "#projects", label: "03" },
  { href: "#skills", label: "04" },
  { href: "#contact", label: "05" },
];

export default function SideNav() {
  return (
    <nav
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.14em",
      }}
    >
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          style={{
            color: "var(--text-faint)",
            borderBottom: "none",
            padding: "4px 0",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-faint)")}
        >
          {it.label}
        </a>
      ))}
    </nav>
  );
}
