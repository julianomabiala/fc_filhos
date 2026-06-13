import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda",
    role: "Ex-aluna de Pastelaria",
    location: "Lubango",
    text: "A formação de Pastelaria na FC & Filhos foi transformadora. Em apenas 2 meses aprendi técnicas profissionais e hoje tenho o meu próprio negócio. Recomendo a todos!",
    stars: 5,
    initials: "MF",
    color: "#4DA6FF",
  },
  {
    name: "Carlos Domingos",
    role: "Ex-aluno de Electricidade",
    location: "Luanda",
    text: "Excelentes professores e material didáctico actualizado. Após o curso fui contratado imediatamente. A FC & Filhos realmente prepara para o mercado de trabalho.",
    stars: 5,
    initials: "CD",
    color: "#4CAF50",
  },
  {
    name: "Ana Paula",
    role: "Cliente do Salão de Beleza",
    location: "Namibe",
    text: "Atendimento impecável e profissionalismo excelente. O salão de beleza da FC & Filhos tem os melhores profissionais. Saio sempre satisfeita!",
    stars: 5,
    initials: "AP",
    color: "#e91e8c",
  },
  {
    name: "João Sebastião",
    role: "Ex-aluno de Informática",
    location: "Cabinda",
    text: "Tinha medo de computadores, mas os formadores foram muito pacientes. Hoje uso ferramentas de escritório com confiança total. Obrigado FC & Filhos!",
    stars: 5,
    initials: "JS",
    color: "#9c27b0",
  },
  {
    name: "Rosária Tchilanda",
    role: "Ex-aluna de Cocktails",
    location: "Lubango",
    text: "O curso de Cocktails superou todas as minhas expectativas. Aprendi técnicas internacionais e hoje trabalho em eventos de luxo. Formação de qualidade!",
    stars: 5,
    initials: "RT",
    color: "#ff6f00",
  },
  {
    name: "António Lopes",
    role: "Cliente de Construção Civil",
    location: "Luanda",
    text: "Contratei a FC & Filhos para obras na minha casa. Trabalho impecável, prazo cumprido e preço justo. São verdadeiros profissionais!",
    stars: 5,
    initials: "AL",
    color: "#00bcd4",
  },
];

export function Testimonials() {
  return (
    <section id="testemunhos" style={{ padding: "6rem 1.5rem", background: "#0B1F3B", position: "relative", overflow: "hidden" }}>
      {/* Decoration */}
      <div style={{
        position: "absolute", top: "20%", left: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(77,166,255,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700,
            color: "#4DA6FF", letterSpacing: "0.1em", textTransform: "uppercase",
            display: "block", marginBottom: "0.75rem",
          }}>O Que Dizem Sobre Nós</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#ffffff",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>Testemunhos</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.65)",
            maxWidth: 520, margin: "1rem auto 0", lineHeight: 1.7,
          }}>
            A satisfação dos nossos alunos e clientes é a nossa maior conquista.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18, padding: "1.75rem",
                position: "relative",
                transition: "all 0.3s",
              }}
              whileHover={{ y: -4, background: "rgba(255,255,255,0.08)" }}
            >
              {/* Quote icon */}
              <div style={{ position: "absolute", top: 20, right: 20, color: `${t.color}40` }}>
                <Quote size={36} />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15,
                color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "1.5rem",
                fontStyle: "italic",
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `${t.color}25`,
                  border: `2px solid ${t.color}50`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: t.color,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
