import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const primaryPhone = "936 301 597";
const secondaryPhone = "928 506 070";
const whatsappNumber = "244936301597";
const contactEmail = "felizardocasimiri97@gmail.com";

const offices = [
  { city: "Lubango", province: "Huíla", tag: "SEDE", color: "#4DA6FF", phones: [primaryPhone, secondaryPhone] },
  { city: "Luanda", province: "Luanda", tag: "", color: "#4CAF50", phones: [primaryPhone] },
  { city: "Namibe", province: "Namibe", tag: "", color: "#9c27b0", phones: [primaryPhone] },
  { city: "Cabinda", province: "Cabinda", tag: "", color: "#ff6f00", phones: [primaryPhone] },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Olá, FC & Filhos.",
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.service ? `Serviço: ${form.service}` : "",
      `Mensagem: ${form.message}`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.8rem 1rem",
    background: "rgba(255,255,255,0.05)",
    border: "1.5px solid rgba(255,255,255,0.12)",
    borderRadius: 10,
    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15,
    color: "#fff", outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section id="contactos" style={{ padding: "6rem 1.5rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700,
            color: "#4DA6FF", letterSpacing: "0.1em", textTransform: "uppercase",
            display: "block", marginBottom: "0.75rem",
          }}>Fale Connosco</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#0B1F3B",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>Contactos e Localização</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#4a6080",
            maxWidth: 540, margin: "1rem auto 0", lineHeight: 1.7,
          }}>
            Estamos presentes em várias províncias de Angola. Entre em contacto connosco hoje mesmo.
          </p>
        </motion.div>

        {/* Province cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem", marginBottom: "4rem",
        }}>
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "#fff",
                border: `2px solid ${office.color}25`,
                borderRadius: 16, padding: "1.5rem",
                boxShadow: "0 4px 16px rgba(11,31,59,0.06)",
                transition: "all 0.3s",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(11,31,59,0.12)" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 11,
                  background: `${office.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: office.color,
                }}>
                  <MapPin size={22} />
                </div>
                {office.tag && (
                  <span style={{
                    background: office.color, color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700,
                    padding: "0.2rem 0.65rem", borderRadius: 6, letterSpacing: "0.05em",
                  }}>{office.tag}</span>
                )}
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, color: "#0B1F3B", marginBottom: 4 }}>{office.city}</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#4a6080", marginBottom: "0.75rem" }}>{office.province}</p>
              {office.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600,
                  color: office.color, textDecoration: "none", marginBottom: 4,
                }}>
                  <Phone size={13} />
                  {phone}
                </a>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Contact form + info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, #0B1F3B, #1a3557)",
              borderRadius: 20, padding: "2.5rem",
              color: "#fff",
            }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 24, marginBottom: "0.5rem" }}>Informações de Contacto</h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Estamos disponíveis para responder às suas questões sobre formações, inscrições e serviços.
            </p>

            {[
              { icon: <Phone size={18} />, label: "Telefones", values: [primaryPhone, secondaryPhone] },
              { icon: <Mail size={18} />, label: "Email", values: [contactEmail] },
              { icon: <Clock size={18} />, label: "Horário", values: ["Segunda – Sexta: 8h – 18h", "Sábado: 8h – 13h"] },
            ].map((info) => (
              <div key={info.label} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(77,166,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#4DA6FF", flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 4, letterSpacing: "0.04em" }}>{info.label}</div>
                  {info.values.map((v) => (
                    <div key={v} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "#fff" }}>{v}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                background: "#25D366", color: "#fff",
                padding: "0.9rem", borderRadius: 12,
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700,
                marginTop: "1rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1fb855")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: "#0B1F3B",
              borderRadius: 20, padding: "2.5rem",
            }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: "0.5rem" }}>Envie-nos uma Mensagem</h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>
              Responderemos em até 24 horas úteis.
            </p>

            {sent ? (
              <div style={{
                background: "rgba(76,175,80,0.15)", border: "1.5px solid rgba(76,175,80,0.4)",
                borderRadius: 12, padding: "2rem", textAlign: "center",
              }}>
                <div style={{ fontSize: 40, marginBottom: "0.5rem" }}>✓</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: "#4CAF50" }}>Mensagem preparada!</div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 8 }}>
                  Continue o envio na conversa do WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Nome *</label>
                    <input required style={inputStyle} placeholder="O seu nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#4DA6FF")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Telefone *</label>
                    <input required style={inputStyle} placeholder="9XX XXX XXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#4DA6FF")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Email</label>
                  <input type="email" style={inputStyle} placeholder="email@exemplo.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#4DA6FF")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Serviço de interesse</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#4DA6FF")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}>
                    <option value="" style={{ background: "#0B1F3B" }}>Selecionar...</option>
                    <option value="informatica" style={{ background: "#0B1F3B" }}>Informática</option>
                    <option value="electricidade" style={{ background: "#0B1F3B" }}>Electricidade</option>
                    <option value="construcao" style={{ background: "#0B1F3B" }}>Construção Civil</option>
                    <option value="pastelaria" style={{ background: "#0B1F3B" }}>Pastelaria</option>
                    <option value="culinaria" style={{ background: "#0B1F3B" }}>Culinária</option>
                    <option value="manicure" style={{ background: "#0B1F3B" }}>Manicure e Pedicure</option>
                    <option value="cocktails" style={{ background: "#0B1F3B" }}>Cocktails / Mixologia</option>
                    <option value="salao" style={{ background: "#0B1F3B" }}>Salão de Beleza</option>
                    <option value="orcamento" style={{ background: "#0B1F3B" }}>Solicitar Orçamento</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 6 }}>Mensagem *</label>
                  <textarea
                    required rows={4} style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Descreva o que procura..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#4DA6FF")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                    background: "#4DA6FF", color: "#fff",
                    padding: "0.9rem", borderRadius: 12,
                    border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#2a7fd4")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#4DA6FF")}
                >
                  <Send size={17} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
