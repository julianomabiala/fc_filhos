import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/fc/logo-fc-filhos.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#060f1e", padding: "4rem 1.5rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
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
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: "#4DA6FF", letterSpacing: "0.08em" }}>COMÉRCIO & PRESTAÇÃO <br /> DE SERVIÇOS</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.5rem" }}>
                A FC & Filhos Comércio e Prestação de Serviços é uma empresa angolana
  dedicada a fornecer soluções profissionais nas áreas de comércio,
  formação, gráfica, construção civil, salão de beleza e mixologia,
  contribuindo para o desenvolvimento de pessoas e organizações.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: <Facebook size={17} />, href: "https://www.facebook.com/share/18dCYdriXN/", label: "Facebook" },
                { icon: <Instagram size={17} />, href: "https://www.instagram.com/felizardo_casimiro?igsh=MWdkN3QxOXAxcnFxcQ==", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.6)", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#4DA6FF"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#4DA6FF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: "1.25rem" }}>Links Rápidos</h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
         {[
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portfólio", to: "/portfolio" },
  { label: "Formação", to: "/formacao" },
  { label: "Contactos", to: "/contactos" },
  { label: "Orçamento", to: "/orcamento" },
].map((link) => (
  <li key={link.label}>
    <Link
      to={link.to}
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 14,
        color: "rgba(255,255,255,0.55)",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "#4DA6FF")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color =
          "rgba(255,255,255,0.55)")
      }
    >
      {link.label}
    </Link>
  </li>
))}
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: "1.25rem" }}>Áreas de Actuação</h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
 "Formação Profissional",
 "Gráfica e Impressão",
 "Construção Civil",
 "Salão de Beleza",
 "Mixologia & Cocktails",
 "Consultoria",
 "Prestação de Serviços"
].map((course) => (
                <li key={course}>
                  <a href="#cursos" style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14,
                    color: "rgba(255,255,255,0.55)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4CAF50")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: "1.25rem" }}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { icon: <MapPin size={14} />, text: "Lubango, Huíla (Sede)" },
                { icon: <Phone size={14} />, text: "936 301 597" },
                { icon: <Phone size={14} />, text: "928 506 070" },
                { icon: <Mail size={14} />, text: "felizardocasimiri97@gmail.com" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ color: "#4DA6FF", flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "1.5rem 0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "0.75rem",
        }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {year} FC & Filhos Comércio e Prestação de Serviços. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            Presença Nacional • Angola 🇦🇴
          </p>
        </div>
      </div>
    </footer>
  );
}
