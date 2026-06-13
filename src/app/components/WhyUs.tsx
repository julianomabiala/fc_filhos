import { motion } from "motion/react";
import { Award, Users, MapPin, Shield, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  { icon: <Award size={28} />, title: "+5 Anos de Experiência", desc: "Meio decénio de excelência na formação profissional e prestação de serviços em Angola.", color: "#4DA6FF" },
  { icon: <Users size={28} />, title: "+40 Colaboradores", desc: "Uma equipa dedicada de profissionais qualificados prontos para servir com excelência.", color: "#4CAF50" },
  { icon: <MapPin size={28} />, title: "Presença Nacional", desc: "Lubango, Luanda, Namibe e Cabinda. A crescer para servir todo o território angolano.", color: "#9c27b0" },
  { icon: <Shield size={28} />, title: "Formação Certificada", desc: "Todos os nossos cursos possuem certificação profissional reconhecida pelas entidades competentes.", color: "#ff6f00" },
  { icon: <HeartHandshake size={28} />, title: "Atendimento Personalizado", desc: "Cada aluno e cliente recebe atenção individualizada adaptada às suas necessidades específicas.", color: "#e91e8c" },
  { icon: <TrendingUp size={28} />, title: "Resultados Comprovados", desc: "Centenas de profissionais formados com emprego garantido e crescimento de carreira.", color: "#00bcd4" },
];

export function WhyUs() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

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
          }}>As Nossas Vantagens</span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#0B1F3B",
            letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>Porque Escolher a FC & Filhos?</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#4a6080",
            maxWidth: 560, margin: "1rem auto 0", lineHeight: 1.7,
          }}>
            Somos mais do que uma empresa de formação. Somos parceiros no seu crescimento profissional.
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #0B1F3B, #1a3557)",
            borderRadius: 20,
            padding: "2.5rem 3rem",
            marginBottom: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { value: "+500", label: "Formandos" },
            { value: "+40", label: "Colaboradores" },
            { value: "4", label: "Províncias" },
            { value: "5+", label: "Anos" },
            { value: "8+", label: "Cursos" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 40, color: "#4DA6FF", lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: "flex", gap: "1.1rem", alignItems: "flex-start",
                padding: "1.5rem",
                background: "#f8fafc",
                borderRadius: 16,
                border: "1px solid rgba(11,31,59,0.07)",
                transition: "all 0.3s",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(11,31,59,0.1)" }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: `${reason.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: reason.color, flexShrink: 0,
              }}>
                {reason.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: "#0B1F3B", marginBottom: 6, lineHeight: 1.3 }}>{reason.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080", lineHeight: 1.65 }}>{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
