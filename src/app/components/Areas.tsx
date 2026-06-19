import { motion } from "motion/react";
import { GraduationCap, Zap, Hammer, Scissors, Wine } from "lucide-react";
import formacaoImg from "../assets/fc/cer1.jpg";
import cocktailsImg from "../assets/fc/kok44.jpg";
import belezaImg from "../assets/fc/kok1.jpg";
import construcaoImg from "../assets/fc/kok7.jpeg";
import electricidadeImg from "../assets/fc/kok12.jpeg";

const areas = [
  {
    icon: <Hammer size={32} />,
    title: "Construção Civil",
    desc: "Execução de obras, remodelações, acabamentos, manutenção e diversos serviços ligados à construção civil.",
    color: "#ff6f00",
    bg: "rgba(255,111,0,0.08)",
    border: "rgba(255,111,0,0.2)",
    img: construcaoImg,
  },

  {
    icon: <Zap size={32} />,
    title: "Instalações Eléctricas",
    desc: "Montagem, manutenção e reparação de sistemas eléctricos residenciais, comerciais e industriais.",
    color: "#4CAF50",
    bg: "rgba(76,175,80,0.08)",
    border: "rgba(76,175,80,0.2)",
    img: electricidadeImg,
  },

  {
    icon: <Scissors size={32} />,
    title: "Salão de Beleza",
    desc: "Serviços de cabeleireiro, manicure, pedicure, estética e cuidados de beleza para homens e mulheres.",
    color: "#e91e8c",
    bg: "rgba(233,30,140,0.08)",
    border: "rgba(233,30,140,0.2)",
    img: belezaImg,
  },

  {
    icon: <Wine size={32} />,
    title: "Eventos e Mixologia",
    desc: "Serviços de bartending, cocktails, apoio a eventos e formação especializada em mixologia.",
    color: "#9c27b0",
    bg: "rgba(156,39,176,0.08)",
    border: "rgba(156,39,176,0.2)",
    img: cocktailsImg,
  },

  {
    icon: <Hammer size={32} />,
    title: "Comércio Geral",
    desc: "Comercialização de diversos produtos e fornecimento de materiais para empresas, instituições e particulares.",
    color: "#4DA6FF",
    bg: "rgba(77,166,255,0.08)",
    border: "rgba(77,166,255,0.2)",
    img: formacaoImg,
  },

  {
    icon: <GraduationCap size={32} />,
    title: "Formação Profissional",
    desc: "Capacitação profissional em diversas áreas técnicas e práticas, contribuindo para o desenvolvimento de competências.",
    color: "#00BCD4",
    bg: "rgba(0,188,212,0.08)",
    border: "rgba(0,188,212,0.2)",
    img: formacaoImg,
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
            Áreas de Negócio e Serviços
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 17,
            color: "#4a6080",
            maxWidth: 560,
            margin: "1rem auto 0",
            lineHeight: 1.7,
          }}>
            Actuamos nas áreas de comércio, prestação de serviços e capacitação profissional, oferecendo soluções completas para empresas e particulares.
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