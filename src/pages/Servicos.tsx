import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Hammer, Zap, Droplet, Brush, Layers, Square, Wrench, Box, Scissors, Sparkles, GlassWater, GraduationCap } from "lucide-react";
import { serviceCatalog } from "../data/siteContent";

const services = [
  { icon: <Hammer size={24} />, slug: "construcao-civil", title: "Construção Civil", desc: "Obras, remodelações, acabamentos, reparações e manutenção civil." },
  { icon: <Zap size={24} />, slug: "electricidade", title: "Electricidade", desc: "Instalações elétricas residenciais, comerciais e industriais com segurança." },
  { icon: <Droplet size={24} />, slug: "canalizacao", title: "Canalização", desc: "Sistemas hidráulicos, saneamento, reparação de tubagens e instalação de redes." },
  { icon: <Brush size={24} />, slug: "pintura", title: "Pintura", desc: "Pintura de interiores e exteriores com acabamentos de alta qualidade." },
  { icon: <Layers size={24} />, slug: "pladur", title: "Pladur", desc: "Montagem de divisórias, plafonds e soluções em pladur para interiores." },
  { icon: <Square size={24} />, slug: "tectos-falsos", title: "Tectos Falsos", desc: "Instalação de tectos falsos em gesso, metálicos e soluções acústicas." },
  { icon: <Wrench size={24} />, slug: "serralharia", title: "Serralharia", desc: "Portões, grades, estruturas metálicas e trabalhos de serralharia personalizada." },
  { icon: <Box size={24} />, slug: "aluminios", title: "Alumínios", desc: "Janelas, portas e esquadrias em alumínio com montagem profissional." },
  { icon: <Scissors size={24} />, slug: "carpintaria", title: "Carpintaria", desc: "Mobiliário, portas, armários e acabamentos em madeira sob medida." },
  { icon: <Sparkles size={24} />, slug: "eventos", title: "Eventos", desc: "Apoio completo para eventos corporativos, sociais e celebrações." },
  { icon: <GlassWater size={24} />, slug: "cocktails", title: "Cocktails", desc: "Serviço de bartending, coquetelaria e eventos de mixologia." },
  { icon: <GraduationCap size={24} />, slug: "formacao-profissional", title: "Formação Profissional", desc: "Cursos técnicos e práticos para jovens e profissionais em ascensão." },
];

export function Servicos() {
  return (
    <main style={{ background: "#f8fafc" }}>
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#4DA6FF", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              Serviços completos
            </span>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0B1F3B", lineHeight: 1.1 }}>
              Todos os nossos serviços
            </h1>
            <p style={{ maxWidth: 680, margin: "1rem auto 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "#4a6080", lineHeight: 1.8 }}>
              Projetos de comércio e prestação de serviços com suporte técnico, formação profissional e assistência contínua em Angola.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                style={{ background: "#fff", borderRadius: 20, padding: "1.75rem", border: "1px solid rgba(11,31,59,0.08)", boxShadow: "0 20px 40px rgba(11,31,59,0.06)" }}
              >
                <Link to={`/servicos/${service.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(77,166,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4DA6FF", marginBottom: "1rem" }}>
                    {service.icon}
                  </div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 19, color: "#0B1F3B", marginBottom: "0.75rem" }}>{service.title}</h2>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "#4a6080", lineHeight: 1.75 }}>{service.desc}</p>
                  <p style={{ marginTop: "0.75rem", color: "#4DA6FF", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ver detalhes →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
