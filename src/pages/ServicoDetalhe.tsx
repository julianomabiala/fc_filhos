import { useParams, Link } from "react-router-dom";
import { serviceCatalog } from "../data/siteContent";
import { useState } from "react";

const whatsappNumber = "244936301597";

export function ServicoDetalhe() {
  const { slug } = useParams();
  const service = serviceCatalog.find((item) => item.slug === slug);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  if (!service) {
    return (
      <main style={{ minHeight: "100vh", padding: "6rem 1.5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", color: "#0B1F3B" }}>Serviço não encontrado</h1>
          <Link to="/servicos" style={{ display: "inline-block", marginTop: "1rem", color: "#4DA6FF", fontWeight: 700, textDecoration: "none" }}>Voltar aos serviços</Link>
        </div>
      </main>
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = [
      `Olá, FC & Filhos. Quero informações sobre ${service.title}.`,
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Mensagem: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#4DA6FF", letterSpacing: "0.12em", textTransform: "uppercase" }}>{service.category}</p>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#0B1F3B", marginTop: "0.35rem" }}>{service.title}</h1>
          </div>
          <Link to="/servicos" style={{ color: "#4DA6FF", fontWeight: 700, textDecoration: "none" }}>← Voltar aos serviços</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem" }}>
          <section style={{ background: "#fff", borderRadius: 24, padding: "2rem", boxShadow: "0 24px 70px rgba(11,31,59,0.08)" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4a6080", lineHeight: 1.8 }}>{service.description}</p>
            <div style={{ marginTop: "1.5rem" }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, color: "#0B1F3B", marginBottom: "0.8rem" }}>Pontos principais</h2>
              <ul style={{ paddingLeft: "1.2rem", color: "#4a6080", lineHeight: 1.8 }}>
                {service.highlights.map((item) => (<li key={item}>{item}</li>))}
              </ul>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, color: "#0B1F3B", marginBottom: "0.8rem" }}>Benefícios</h2>
              <ul style={{ paddingLeft: "1.2rem", color: "#4a6080", lineHeight: 1.8 }}>
                {service.benefits.map((item) => (<li key={item}>{item}</li>))}
              </ul>
            </div>
          </section>

          <section style={{ background: "#0B1F3B", borderRadius: 24, padding: "2rem", color: "#fff" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, marginBottom: "0.75rem" }}>Solicitar informação</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.25rem" }}>Preencha o formulário e a nossa equipa responderá pelo WhatsApp.</p>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.9rem" }}>
              <input required placeholder="Seu nome" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} style={{ padding: "0.9rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
              <input required placeholder="Telefone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} style={{ padding: "0.9rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
              <input type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} style={{ padding: "0.9rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "#fff" }} />
              <textarea required rows={5} placeholder="Descreva o que pretende" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} style={{ padding: "0.9rem 1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "#fff", resize: "vertical" }} />
              <button type="submit" style={{ background: "#4DA6FF", color: "#fff", border: "none", padding: "0.95rem 1rem", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>Enviar por WhatsApp</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
