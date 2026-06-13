import { motion } from "motion/react";
import { Monitor, Zap, Hammer, ChefHat, UtensilsCrossed, Sparkles, GlassWater, Wine, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const courses = [
  { icon: <Monitor size={28} />, title: "Informática", desc: "Domine as ferramentas essenciais de computação: Windows, Office, Internet e muito mais.", duration: "3 meses", level: "Iniciante" },
  { icon: <Zap size={28} />, title: "Electricidade", desc: "Aprenda instalações eléctricas residenciais e industriais com segurança e técnica.", duration: "4 meses", level: "Básico ao Avançado" },
  { icon: <Hammer size={28} />, title: "Construção Civil", desc: "Técnicas modernas de construção, acabamentos e supervisão de obras.", duration: "6 meses", level: "Básico" },
  { icon: <ChefHat size={28} />, title: "Pastelaria", desc: "Arte da confeitaria: bolos, doces, pães e sobremesas especiais com técnica profissional.", duration: "2 meses", level: "Todos os níveis" },
  { icon: <UtensilsCrossed size={28} />, title: "Culinária", desc: "Gastronomia angolana e internacional. Do básico ao gourmet com chef certificado.", duration: "3 meses", level: "Todos os níveis" },
  { icon: <Sparkles size={28} />, title: "Manicure e Pedicure", desc: "Técnicas modernas de estética das mãos e pés, incluindo unhas artísticas e gel.", duration: "2 meses", level: "Iniciante" },
  { icon: <GlassWater size={28} />, title: "Sumo Natural", desc: "Produção e comercialização de sumos naturais saudáveis com técnicas profissionais.", duration: "1 mês", level: "Iniciante" },
  { icon: <Wine size={28} />, title: "Cocktails", desc: "Arte da coquetelaria: técnicas de bartending, mistura de bebidas e apresentação.", duration: "2 meses", level: "Básico" },
];

export function Courses() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="cursos" style={{ padding: "6rem 1.5rem", background: "#0B1F3B", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: 500, height: 500,
        background: "radial-gradient(circle, rgba(77,166,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: 400, height: 400,
        background: "radial-gradient(circle, rgba(76,175,80,0.06) 0%, transparent 70%)",
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
          }}>Formação Certificada</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#ffffff",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>Cursos Disponíveis</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.65)",
            maxWidth: 540, margin: "1rem auto 0", lineHeight: 1.7,
          }}>
            Invista no seu futuro com os nossos cursos profissionais certificados. Aprenda com os melhores e transforme a sua carreira.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "1.25rem",
        }}>
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: hoveredIdx === i ? "rgba(77,166,255,0.12)" : "rgba(255,255,255,0.05)",
                border: hoveredIdx === i ? "1.5px solid rgba(77,166,255,0.4)" : "1.5px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "1.75rem",
                transition: "all 0.3s",
                cursor: "default",
                display: "flex", flexDirection: "column", gap: "0.8rem",
              }}
            >
              {/* Icon */}
              <div style={{
                width: 54, height: 54, borderRadius: 13,
                background: hoveredIdx === i ? "rgba(77,166,255,0.25)" : "rgba(77,166,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#4DA6FF", transition: "background 0.3s",
              }}>
                {course.icon}
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                  fontSize: 20, color: "#fff", marginBottom: "0.4rem", lineHeight: 1.2,
                }}>{course.title}</h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6,
                }}>{course.desc}</p>
              </div>

              {/* Meta */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "auto" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.3rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600,
                  color: "#4CAF50", background: "rgba(76,175,80,0.12)",
                  padding: "0.25rem 0.65rem", borderRadius: 6,
                }}>
                  <Clock size={11} />
                  {course.duration}
                </span>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 500,
                  color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.06)",
                  padding: "0.25rem 0.65rem", borderRadius: 6,
                }}>
                  {course.level}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#contactos"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  background: hoveredIdx === i ? "#4DA6FF" : "transparent",
                  color: hoveredIdx === i ? "#fff" : "#4DA6FF",
                  border: "1.5px solid #4DA6FF",
                  padding: "0.65rem 1rem", borderRadius: 9,
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14, fontWeight: 700,
                  transition: "all 0.25s",
                  marginTop: "0.5rem",
                }}
              >
                Quero Inscrever-me
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
