import { useState } from "react";
import { motion } from "motion/react";
import { ImageIcon, PlayCircle } from "lucide-react";

// IMAGENS
import img1 from "../assets/fc/img1.jpg";
import img2 from "../assets/fc/img2.jpg";
import img3 from "../assets/fc/img3.jpg";
import img4 from "../assets/fc/img4.jpg";
import img5 from "../assets/fc/img5.jpg";
import img6 from "../assets/fc/img6.jpg";
import img7 from "../assets/fc/img7.jpg";
import img8 from "../assets/fc/img8.jpg";

import kok1 from "../assets/fc/kok1.jpg";
import kok2 from "../assets/fc/kok2.jpg";
import kok3 from "../assets/fc/kok3.jpg";
import kok4 from "../assets/fc/kok8.jpg";
import kok5 from "../assets/fc/kok5.jpg";
import kok6 from "../assets/fc/kok9.jpg";

// CERTIFICADOS
import certificado1 from "../assets/fc/cer1.jpg";

// VÍDEOS
import video1 from "../assets/fc/video1.mp4";
import video2 from "../assets/fc/video2.mp4";
import video3 from "../assets/fc/video3.mp4";
import video4 from "../assets/fc/video4.mp4";
const galleryItems = [
  // FORMAÇÕES
  {
    type: "image",
    src: img1,
    category: "Formações",
  },
  {
    type: "image",
    src: img2,
    category: "Formações",
  },
  {
    type: "image",
    src: img3,
    category: "Formações",
  },
  {
    type: "image",
    src: img4,
    category: "Formações",
  },

  // COMÉRCIO
  {
    type: "image",
    src: img5,
    category: "Comércio",
  },
  {
    type: "image",
    src: img6,
    category: "Comércio",
  },

  // PRESTAÇÃO DE SERVIÇOS
  {
    type: "image",
    src: img7,
    category: "Serviços",
  },
  {
    type: "image",
    src: img8,
    category: "Serviços",
  },

  // MIXOLOGIA
  {
    type: "image",
    src: kok1,
    category: "Mixologia",
  },
  {
    type: "image",
    src: kok2,
    category: "Mixologia",
  },
  {
    type: "image",
    src: kok3,
    category: "Mixologia",
  },
  {
    type: "image",
    src: kok4,
    category: "Mixologia",
  },
  {
    type: "image",
    src: kok5,
    category: "Mixologia",
  },
  {
    type: "image",
    src: kok6,
    category: "Mixologia",
  },

  // CERTIFICADOS
  {
    type: "image",
    src: certificado1,
    category: "Certificados",
    fit: "contain",
  },

  // VÍDEOS
  {
    type: "video",
    src: video1,
    category: "Vídeos",
  },
  {
    type: "video",
    src: video2,
    category: "Vídeos",
  },
  {
    type: "video",
    src: video3,
    category: "Vídeos",
  },
  {
    type: "video",
    src: video4,
    category: "Vídeos",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");

const filters = [
  "Todos",
  "Formações",
  "Comércio",
  "Serviços",
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
  Explore a nossa galeria de actividades, formações,
  comércio, prestação de serviços, projectos executados,
  workshops de mixologia e momentos marcantes da FC & Filhos
  Comércio e Prestação de Serviços.
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