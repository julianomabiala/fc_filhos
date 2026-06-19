import { motion } from "motion/react";
import heroImage from "../assets/fc/aa.jpg";
import {
  ArrowRight,
  ChevronDown,
  Briefcase,
  Users,
  MapPin,
  GraduationCap,
} from "lucide-react";
export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0B1F3B",
      }}
    >
      {/* Background image with overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.18,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #0B1F3B 0%, #0B1F3B 50%, #1a3557 100%)",
        opacity: 0.92,
      }} />

      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(77,166,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "2%",
        width: 250, height: 250, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "7rem 1.5rem 4rem", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
            Comércio e{" "}
              <span style={{ color: "#4DA6FF" }}>
                Prestação de Serviços
              </span>
              {" "}com Excelência
          </h1>
            <p
              style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              marginBottom: "2.25rem",
              maxWidth: 620,
            }}
            >
              A FC & Filhos Comércio e Prestação de Serviços actua há mais de
              8 anos em diversas áreas de actividade, incluindo Formação
              Profissional, Gráfica, Salão de Beleza, Mixologia e outras
              soluções empresariais que impulsionam o crescimento de pessoas,
              empresas e comunidades em Angola.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#cursos"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#4DA6FF", color: "#fff",
                  padding: "0.85rem 2rem", borderRadius: 10,
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15, fontWeight: 700,
                  transition: "all 0.25s",
                  boxShadow: "0 4px 24px rgba(77,166,255,0.35)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#2a7fd4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#4DA6FF"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Conhecer Serviços
                <ArrowRight size={17} />
              </a>
              <a
                href="#contactos"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "transparent", color: "#fff",
                  padding: "0.85rem 2rem", borderRadius: 10,
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15, fontWeight: 600,
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4DA6FF"; e.currentTarget.style.color = "#4DA6FF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
          >
              {[
                {
                 icon: <Briefcase size={18} />,
                  value: "+8",
                  label: "Anos de Actividade",
                },
                {
                  icon: <Users size={18} />,
                  value: "40+",
                  label: "Colaboradores",
                },
                {
                  icon: <MapPin size={18} />,
                  value: "4",
                  label: "Províncias",
                },
              ].map((stat) => (
          <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
                minWidth: 120,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#4DA6FF",
                }}
              >
                {stat.icon}

                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#fff",
                  }}
                >
                  {stat.value}
                </span>
              </div>

              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
          </motion.div>

          {/* Right — image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-image-col"
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(77,166,255,0.2)",
              aspectRatio: "4/3",
              background: "#1a3557",
            }}>
              <img
                src={heroImage}
                alt="Alunos formados pela FC & Filhos"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
              />
            </div>
            {/* Badge */}
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              background: "#4CAF50", borderRadius: 14,
              padding: "1rem 1.4rem",
              boxShadow: "0 8px 24px rgba(76,175,80,0.4)",
              display: "flex", alignItems: "center", gap: "0.6rem",
            }} className="hero-badge">
              <GraduationCap size={22} color="#fff" />
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", lineHeight: 1 }}>+500</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>Formandos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{
          position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.4)", cursor: "pointer", zIndex: 1,
        }}
        onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
