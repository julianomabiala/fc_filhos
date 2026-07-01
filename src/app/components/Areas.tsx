import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { serviceCatalog } from "../../data/siteContent";
import { Hammer, Zap, Scissors, Wine, Box } from "lucide-react";
import formacaoImg from "../assets/fc/cer1.jpg";
import comercioImg from "../assets/fc/canalisacao.jpg";
import cocktailsImg from "../assets/fc/kok44.jpg";
import belezaImg from "../assets/fc/salao.jpeg";
import construcaoImg from "../assets/fc/construcao.jpeg";
import electricidadeImg from "../assets/fc/instalacao.jpg";
import pinturaImg from "../assets/fc/pintura.jpg";

// Build a simplified areas list from serviceCatalog for display
const areas = serviceCatalog.map((s) => ({
  slug: s.slug,
  title: s.title,
  desc: s.summary,
  category: s.category,
  icon: (
    s.slug.includes("construcao") ? <Hammer size={32} /> :
    s.slug.includes("electricidade") ? <Zap size={32} /> :
    s.slug.includes("manicure") || s.slug.includes("sumo") ? <Scissors size={32} /> :
    s.slug.includes("cocktail") ? <Wine size={32} /> : <Box size={32} />
  ),
  img: (
    s.slug.includes("construcao") ? construcaoImg :
    s.slug.includes("electricidade") ? electricidadeImg :
    s.slug.includes("pintura") ? pinturaImg :
    s.slug.includes("eventos") || s.slug.includes("cocktail") ? cocktailsImg :
    s.slug.includes("formacao") ? formacaoImg :
    s.slug.includes("sumo") || s.slug.includes("pastelaria") || s.slug.includes("culinaria") ? belezaImg : comercioImg
  ),
  color: "#4DA6FF",
  bg: "rgba(77,166,255,0.08)",
  border: "rgba(77,166,255,0.2)",
}));
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

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: '1.5rem' }}>
            <Link
              to="/servicos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.95rem 1.7rem",
                borderRadius: 999,
                background: "#4DA6FF",
                color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 18px 40px rgba(77,166,255,0.18)",
              }}
            >
              Ver mais serviços
            </Link>

            
          </div>
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
                  <Link to={`/servicos/${area.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    Saber mais →
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}