import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format", alt: "Sessão de formação profissional", label: "Formações" },
  { src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&h=400&fit=crop&auto=format", alt: "Serviços de salão de beleza", label: "Salão de Beleza" },
  { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop&auto=format", alt: "Aula de cocktails e mixologia", label: "Mixologia" },
  { src: "https://images.unsplash.com/photo-1694521787673-28cbd8830ea5?w=600&h=400&fit=crop&auto=format", alt: "Obra de construção civil", label: "Construção Civil" },
  { src: "https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=600&h=400&fit=crop&auto=format", alt: "Workshop de grupo", label: "Workshops" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=400&fit=crop&auto=format", alt: "Serviços de beleza profissionais", label: "Serviços" },
];

export function Gallery() {
  return (
    <section id="galeria" style={{ padding: "6rem 1.5rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

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
          }}>O Nosso Trabalho</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#0B1F3B",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>Galeria</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#4a6080",
            maxWidth: 540, margin: "1rem auto 0", lineHeight: 1.7,
          }}>
            Momentos que capturam o nosso compromisso com a excelência — formações, eventos e serviços realizados.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 240px)",
          gap: "1rem",
        }} className="gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                position: "relative", borderRadius: 16, overflow: "hidden",
                background: "#dde5f0",
                gridColumn: i === 0 ? "span 2" : "span 1",
                cursor: "pointer",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(11,31,59,0.65) 0%, transparent 50%)",
                transition: "opacity 0.3s",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "1rem 1.25rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}>
                <ImageIcon size={14} color="rgba(255,255,255,0.7)" />
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600,
                  color: "#fff",
                }}>{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center", marginTop: "2rem",
            padding: "1rem",
            background: "rgba(77,166,255,0.08)",
            border: "1px dashed rgba(77,166,255,0.35)",
            borderRadius: 12,
          }}
        >
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080",
          }}>
            📸 Esta secção será actualizada com fotos reais das nossas formações, workshops e eventos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
