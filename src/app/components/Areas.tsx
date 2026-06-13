import { motion } from "motion/react";
import { GraduationCap, Zap, Hammer, Scissors, Wine } from "lucide-react";

const areas = [
  {
    icon: <GraduationCap size={32} />,
    title: "Formação Profissional",
    desc: "Cursos certificados em diversas áreas: Informática, Electricidade, Construção Civil, Pastelaria, Culinária, Manicure e mais.",
    color: "#4DA6FF",
    bg: "rgba(77,166,255,0.08)",
    border: "rgba(77,166,255,0.2)",
    img: "https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: <Wine size={32} />,
    title: "Mixologia e Coquetelaria",
    desc: "Formação especializada em técnicas de bartending, criação de cocktails e gestão de bar profissional.",
    color: "#9c27b0",
    bg: "rgba(156,39,176,0.08)",
    border: "rgba(156,39,176,0.2)",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: <Scissors size={32} />,
    title: "Salão de Beleza",
    desc: "Serviços completos de beleza e estética, incluindo cabeleireiro, manicure, pedicure e tratamentos especializados.",
    color: "#e91e8c",
    bg: "rgba(233,30,140,0.08)",
    border: "rgba(233,30,140,0.2)",
    img: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: <Hammer size={32} />,
    title: "Construção Civil",
    desc: "Execução de obras, reformas e projetos de construção civil com materiais de qualidade e mão de obra especializada.",
    color: "#ff6f00",
    bg: "rgba(255,111,0,0.08)",
    border: "rgba(255,111,0,0.2)",
    img: "https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: <Zap size={32} />,
    title: "Instalações Eléctricas",
    desc: "Instalação, manutenção e reparação de sistemas eléctricos residenciais e industriais com total segurança.",
    color: "#4CAF50",
    bg: "rgba(76,175,80,0.08)",
    border: "rgba(76,175,80,0.2)",
    img: "https://images.unsplash.com/photo-1655337690778-694dda7f4454?w=400&h=280&fit=crop&auto=format",
  },
];

export function Areas() {
  return (
    <section id="areas" style={{ padding: "6rem 1.5rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#4DA6FF",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
          }}>
            O Que Fazemos
          </span>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#0B1F3B",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}>
            Áreas de Actuação
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 17,
            color: "#4a6080",
            maxWidth: 560,
            margin: "1rem auto 0",
            lineHeight: 1.7,
          }}>
            Actuamos em múltiplas áreas para oferecer soluções completas de formação e serviços.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                border: `1px solid ${area.border}`,
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(11,31,59,0.12)" }}
            >
              {/* Image */}
              <div style={{ height: 180, overflow: "hidden", background: "#e8f0fe" }}>
                <img
                  src={area.img}
                  alt={area.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ padding: "1.5rem" }}>

                {/* Icon */}
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: area.bg,
                  border: `1.5px solid ${area.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: area.color,
                  marginBottom: "1rem",
                  marginTop: "-2.5rem",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 4px 12px rgba(11,31,59,0.1)",
                }}>
                  <div style={{ color: area.color }}>
                    {area.icon}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: "#0B1F3B",
                  marginBottom: "0.6rem",
                  lineHeight: 1.3,
                }}>
                  {area.title}
                </h3>

                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  color: "#4a6080",
                  lineHeight: 1.65,
                }}>
                  {area.desc}
                </p>

                <div style={{
                  marginTop: "1.2rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: area.color,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                }}>
                  <a href="#contactos" style={{ color: "inherit", textDecoration: "none" }}>
                    Saber mais →
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}