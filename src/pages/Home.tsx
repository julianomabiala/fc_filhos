import { Link } from "react-router-dom";
import { Hero } from "../app/components/Hero";
import { Areas } from "../app/components/Areas";
import { Contact } from "../app/components/Contact";

export function Home() {
  return (
    <main>
      <Hero />

      <section style={{ padding: "4rem 1.5rem", background: "#eef6ff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem", borderRadius: 24, background: "#ffffff", boxShadow: "0 24px 70px rgba(15, 50, 119, 0.08)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2rem", alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#4DA6FF", marginBottom: "0.75rem", display: "inline-block" }}>
                Solicite o seu orçamento
              </span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#0B1F3B", lineHeight: 1.15, marginBottom: "1rem" }}>
                Orçamento rápido e personalizado para o seu projeto
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4a6080", lineHeight: 1.8, maxWidth: 620 }}>
                Fale connosco sobre o seu serviço ou obra e receba uma proposta clara e objetiva sem compromisso.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link to="/orcamento" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#4DA6FF", color: "#fff", padding: "1rem 1.5rem", borderRadius: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15 }}>
                Pedir Orçamento
              </Link>
              <Link to="/contactos" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "transparent", color: "#0B1F3B", padding: "1rem 1.5rem", borderRadius: 12, border: "1.5px solid #0B1F3B", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15 }}>
                Contactar a empresa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Areas />
      <Contact />
    </main>
  );
}
