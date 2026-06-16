import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/fc/logo-fc-filhos.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#areas" },
  { label: "Cursos", href: "#cursos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contactos", href: "#contactos" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "#0B1F3B" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(11,31,59,0.3)" : "none",
      }}
    >
      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <img
              src={logo}
              alt="FC & Filhos"
              style={{
              height: "55px",
              width: "auto",
              objectFit: "contain"
          }}
/>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", lineHeight: 1.1 }}>FC & Filhos</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: "#4DA6FF", letterSpacing: "0.08em", lineHeight: 1 }}>COMÉRCIO & SERVIÇOS</div>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14, fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4DA6FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:936301597"
          className="hidden-mobile"
          style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            background: "#4DA6FF", color: "#fff",
            padding: "0.5rem 1.25rem", borderRadius: 8,
            textDecoration: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14, fontWeight: 600,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#2a7fd4")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#4DA6FF")}
        >
          <Phone size={15} />
          Ligar Agora
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "0.5rem" }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#0B1F3B",
          borderTop: "1px solid rgba(77,166,255,0.2)",
          padding: "1rem 1.5rem 1.5rem",
        }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 16, fontWeight: 500,
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:936301597"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: "#4DA6FF", color: "#fff",
                  padding: "0.6rem 1.4rem", borderRadius: 8,
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15, fontWeight: 600,
                }}
              >
                <Phone size={15} />
                Ligar Agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
