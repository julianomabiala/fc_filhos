import { useState } from "react";
import { motion } from "motion/react";
import { ImageIcon, PlayCircle } from "lucide-react";

// IMAGENS
import alunosCertificados from "../assets/fc/cer1.jpg";
import cursoCocktails from "../assets/fc/kok44.jpg";

// VÍDEOS
import workshopVideo from "../assets/fc/work1.mp4";
import formacaoVideo from "../assets/fc/vid1.mp4";

const galleryItems = [
  {
    type: "image",
    src: alunosCertificados,
    label: "Entrega de Certificados",
    category: "Certificados",
    fit: "contain",
  },
  {
    type: "image",
    src: cursoCocktails,
    label: "Curso de Cocktails",
    category: "Mixologia",
    fit: "cover",
  },
  {
    type: "video",
    src: workshopVideo,
    label: "Workshop de Mixologia",
    category: "Mixologia",
  },
  {
    type: "video",
    src: formacaoVideo,
    label: "Formação Profissional",
    category: "Formações",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = [
    "Todos",
    "Formações",
    "Mixologia",
    "Certificados",
    "Vídeos",
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === "Todos") return true;

    if (activeFilter === "Vídeos") {
      return item.type === "video";
    }

    return item.category === activeFilter;
  });

  return (
    <section
      id="galeria"
      style={{
        padding: "6rem 1.5rem",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#4DA6FF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            O Nosso Trabalho
          </span>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0B1F3B",
              marginBottom: "1rem",
            }}
          >
            Galeria FC & Filhos
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4a6080",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Conheça alguns momentos das nossas formações,
            workshops, actividades práticas e serviços realizados
            em várias províncias de Angola.
          </p>
        </motion.div>

        {/* FILTROS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "0.8rem 1.5rem",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "all .3s ease",

                background:
                  activeFilter === filter
                    ? "#4DA6FF"
                    : "#ffffff",

                color:
                  activeFilter === filter
                    ? "#ffffff"
                    : "#0B1F3B",

                boxShadow:
                  activeFilter === filter
                    ? "0 8px 20px rgba(77,166,255,.35)"
                    : "0 2px 10px rgba(0,0,0,.08)",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.label}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(11,31,59,0.08)",
                border: "1px solid rgba(11,31,59,0.05)",
              }}
            >
              {/* MEDIA */}
              <div
                style={{
                  height: "280px",
                  background: "#eef3fa",
                  overflow: "hidden",
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: item.fit || "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                ) : (
                  <video
                    controls
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      background: "#000",
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* LEGENDA */}
              <div
                style={{
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                }}
              >
                {item.type === "image" ? (
                  <ImageIcon size={18} color="#4DA6FF" />
                ) : (
                  <PlayCircle size={18} color="#4CAF50" />
                )}

                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#0B1F3B",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}