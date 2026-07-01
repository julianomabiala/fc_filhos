import { useState } from "react";

export function Orcamento() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 950, margin: "0 auto", background: "#fff", borderRadius: 24, padding: "3rem", boxShadow: "0 24px 70px rgba(11,31,59,0.08)" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#4DA6FF", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Pedido de Orçamento
            </span>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 3rem)", color: "#0B1F3B", marginTop: "0.75rem" }}>
              Faça o seu pedido de orçamento agora
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4a6080", lineHeight: 1.8, marginTop: "1rem" }}>
              Envie-nos as informações do seu projeto e nós responderemos com uma proposta detalhada o mais rápido possível.
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: "2rem", borderRadius: 18, background: "#e8f7ff", border: "1px solid #b3e3ff" }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 24, color: "#0B1F3B", marginBottom: "0.75rem" }}>
                Pedido enviado!
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "#4a6080", lineHeight: 1.8 }}>
                Recebemos o seu pedido de orçamento. Em breve um membro da nossa equipa irá contactá-lo para finalizar os detalhes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                  Nome completo
                  <input
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    required
                    style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15 }}
                    placeholder="Nome"
                  />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                  Telefone
                  <input
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    required
                    style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15 }}
                    placeholder="9XX XXX XXX"
                  />
                </label>
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15 }}
                  placeholder="email@empresa.com"
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                Serviço de interesse
                <select
                  value={form.service}
                  required
                  onChange={(event) => setForm({ ...form, service: event.target.value })}
                  style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, background: "#fff" }}
                >
                  <option value="">Selecionar serviço</option>
                  <option value="construcao">Construção Civil</option>
                  <option value="electricidade">Electricidade</option>
                  <option value="canalizacao">Canalização</option>
                  <option value="pintura">Pintura</option>
                  <option value="pladur">Pladur</option>
                  <option value="tectos">Tectos Falsos</option>
                  <option value="serralharia">Serralharia</option>
                  <option value="aluminios">Alumínios</option>
                  <option value="carpintaria">Carpintaria</option>
                  <option value="eventos">Eventos</option>
                  <option value="cocktails">Cocktails</option>
                  <option value="formacao">Formação Profissional</option>
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                Descrição do projeto
                <textarea
                  value={form.details}
                  onChange={(event) => setForm({ ...form, details: event.target.value })}
                  required
                  rows={6}
                  style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, resize: "vertical" }}
                  placeholder="Descreva brevemente o serviço que pretende, prazo e orçamentos esperados."
                />
              </label>

              <button
                type="submit"
                style={{ padding: "1rem 1.25rem", borderRadius: 14, background: "#4DA6FF", color: "#fff", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
              >
                Enviar pedido de orçamento
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
