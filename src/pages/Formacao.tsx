import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { courseCatalog } from "../data/siteContent";

export function Formacao() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#4DA6FF", letterSpacing: "0.14em", textTransform: "uppercase" }}>Cursos profissionais</span>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0B1F3B", marginTop: "0.75rem" }}>Formação que prepara para o futuro</h1>
            <p style={{ maxWidth: 720, margin: "1rem auto 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#4a6080", lineHeight: 1.8 }}>Explore os cursos disponíveis na FC & Filhos e escolha a formação ideal para a sua carreira ou negócio.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {courseCatalog.map((course, index) => (
              <motion.div key={course.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} style={{ background: "#fff", borderRadius: 20, padding: "1.75rem", boxShadow: "0 20px 45px rgba(11,31,59,0.08)" }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#4DA6FF", letterSpacing: "0.14em", textTransform: "uppercase" }}>{course.category}</p>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 21, color: "#0B1F3B", marginTop: "0.45rem" }}>{course.title}</h2>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "#4a6080", lineHeight: 1.75, marginTop: "0.75rem" }}>{course.summary}</p>
                <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1rem" }}>
                  <span style={{ padding: "0.45rem 0.7rem", borderRadius: 999, background: "#eef6ff", color: "#0B1F3B", fontSize: 13, fontWeight: 700 }}>{course.duration}</span>
                  <span style={{ padding: "0.45rem 0.7rem", borderRadius: 999, background: "#eef6ff", color: "#0B1F3B", fontSize: 13, fontWeight: 700 }}>{course.level}</span>
                </div>
                <Link to={`/formacao/${course.slug}`} style={{ display: "inline-flex", marginTop: "1.25rem", color: "#4DA6FF", fontWeight: 700, textDecoration: "none" }}>Ver detalhes →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
