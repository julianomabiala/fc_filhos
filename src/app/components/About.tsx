import { motion } from "motion/react";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import alunosFC from "../assets/fc/logo-fc-filhos.png";

const values = [
  "Excelência na formação e prestação de serviços",
  "Comprometimento com o desenvolvimento de Angola",
  "Respeito e valorização dos nossos colaboradores",
  "Inovação e melhoria contínua",
  "Integridade e ética profissional",
];

export function About() {
  return (
    <section id="sobre" style={{ padding: "6rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700,
            color: "#4DA6FF", letterSpacing: "0.1em", textTransform: "uppercase",
            display: "block", marginBottom: "0.75rem",
          }}>Quem Somos</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#0B1F3B",
            letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.2,
          }}>Sobre a FC & Filhos</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#4a6080",
            maxWidth: 600, margin: "0 auto", lineHeight: 1.7,
          }}>
            Uma empresa angolana construída sobre pilares de confiança, dedicação e resultados concretos.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(11,31,59,0.15)",
              aspectRatio: "4/3",
              background: "#e8f0fe",
            }}>
              <img
                src={alunosFC}
                alt="Alunos formados pela FC & Filhos"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
              }}
            />
            </div>
            {/* Floating card */}
            <div style={{
              position: "absolute", top: -24, right: -24,
              background: "#0B1F3B",
              borderRadius: 16, padding: "1.25rem 1.5rem",
              boxShadow: "0 10px 30px rgba(11,31,59,0.3)",
              minWidth: 160,
            }} className="about-float-card">
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 36, color: "#4DA6FF", lineHeight: 1 }}>8+</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Anos de Actividade</div>
            </div>
            {/* Green accent */}
            <div style={{
              position: "absolute", bottom: -16, right: "30%",
              width: 60, height: 60, borderRadius: "50%",
              background: "#4CAF50",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 20px rgba(76,175,80,0.4)",
            }}>
              <CheckCircle size={28} color="#fff" />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4a6080",
              lineHeight: 1.8, marginBottom: "2rem",
            }}>
              A <strong style={{ color: "#0B1F3B" }}>FC & Filhos Comércio e Prestação de Serviços</strong> é uma empresa angolana com mais de 8 anos de actividade, Comércio e Prestação de Serviços de qualidade. Com cerca de 40 colaboradores e presença nas províncias de Lubango, Luanda, Namibe e Cabinda, somos uma empresa edicada à forenecer resultados profissional.
            </p>

            {/* Mission / Vision / Values cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: <Target size={20} />, title: "Missão", desc: "Formar profissionais competentes e prestar serviços de excelência que contribuam para o desenvolvimento sustentável de Angola." },
                { icon: <Eye size={20} />, title: "Visão", desc: "Ser a empresa de referência nacional em Comércio e prestação de serviços multissetorial." },
                { icon: <Heart size={20} />, title: "Valores", desc: "Excelência, Integridade, Inovação, Comprometimento e Responsabilidade Social." },
              ].map((item) => (
                <div key={item.title} style={{
                  display: "flex", gap: "1rem", alignItems: "flex-start",
                  padding: "1.1rem 1.25rem",
                  background: "#f8fafc", borderRadius: 12,
                  border: "1px solid rgba(11,31,59,0.07)",
                  transition: "box-shadow 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(77,166,255,0.12)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: "#e8f0fe",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#4DA6FF",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#0B1F3B", marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#4a6080", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values list */}
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#0B1F3B", marginBottom: "0.75rem" }}>Os nossos compromissos:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                {values.map((v) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#4CAF50", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle size={12} color="#fff" />
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
