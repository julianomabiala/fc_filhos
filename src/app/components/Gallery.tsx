import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageIcon, PlayCircle, X } from "lucide-react";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selected, setSelected] = useState<any>(null);

  // 🔥 AQUI ESTÃO AS TUAS FOTOS E VÍDEOS
  const galleryItems = [
    { id: 1, type: "image", src: "src/app/gallery/img1.jpg",  category: "Formações" },
    { id: 2, type: "image", src: "src/app/gallery/img2.jpg",  category: "Certificados" },
    { id: 3, type: "image", src: "src/app/gallery/img3.jpg",  category: "Mixologia" },
    { id: 4, type: "image", src: "src/app/gallery/img4.jpg",  category: "Formações" },
    { id: 5, type: "image", src: "src/app/gallery/img5.jpg",  category: "Formações" },
    { id: 6, type: "image", src: "src/app/gallery/img6.jpg",  category: "Certificados" },
    { id: 7, type: "image", src: "src/app/gallery/img7.jpg",  category: "Mixologia" },
    { id: 8, type: "image", src: "src/app/gallery/img8.jpg",  category: "Formações" },
    

    { id: 5, type: "video", src: "src/app/gallery/video1.mp4", category: "Mixologia" },
    { id: 6, type: "video", src: "src/app/gallery/video2.mp4",  category: "Formações" },
    { id: 7, type: "video", src: "src/app/gallery/video3.mp4",  category: "Mixologia" },
    { id: 8, type: "video", src: "src/app/gallery/video4.mp4",  category: "Formações" },
    { id: 9, type: "video", src: "src/app/gallery/video5.mp4", category: "Mixologia" },
    { id: 10, type: "video", src: "src/app/gallery/video6.mp4", category: "Formações" },
    { id: 11, type: "video", src: "src/app/gallery/video7.mp4", category: "Mixologia" },
    { id: 12, type: "video", src: "src/app/gallery/video8.mp4", category: "Formações" },
  ];

  const filters = ["Todos", "Formações", "Mixologia", "Certificados", "Vídeos"];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Vídeos") return item.type === "video";
    return item.category === activeFilter;
  });

  return (
    <section style={{ padding: "5rem 1.5rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* TITULO */}
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800 }}>
          Galeria
        </h2>

        {/* FILTROS */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: activeFilter === f ? "#4DA6FF" : "#fff",
                color: activeFilter === f ? "#fff" : "#000",
                fontWeight: 600,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div style={{ columnCount: 3, columnGap: "16px", marginTop: 30 }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              style={{
                breakInside: "avoid",
                marginBottom: "16px",
                cursor: "pointer",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              {item.type === "image" ? (
                <img src={item.src} style={{ width: "100%" }} />
              ) : (
                <div style={{ position: "relative" }}>
                  <video src={item.src} style={{ width: "100%" }} />
                  <PlayCircle
                    size={40}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                    }}
                  />
                </div>
              )}

              <div style={{ padding: 10, fontWeight: 600 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <div
              onClick={() => setSelected(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <X
                  onClick={() => setSelected(null)}
                  style={{ position: "absolute", top: 20, right: 20, color: "#fff" }}
                />

                {selected.type === "image" ? (
                  <img src={selected.src} style={{ maxHeight: "80vh" }} />
                ) : (
                  <video controls autoPlay style={{ maxHeight: "80vh" }}>
                    <source src={selected.src} />
                  </video>
                )}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}