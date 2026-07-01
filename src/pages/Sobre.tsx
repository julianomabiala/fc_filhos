import { About } from "../app/components/About";
import { Link } from "react-router-dom";

export function Sobre() {
  return (
    <main>
      <About />

      <section style={{ padding: "4rem 1.5rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
            <div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#0B1F3B", marginBottom: "1rem" }}>
                A nossa história
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4a6080", lineHeight: 1.8 }}>
                A FC & Filhos nasceu com a visão de oferecer soluções integradas em comércio e prestação de serviços. Ao longo de anos, a empresa ampliou a sua equipa, conquistou confiança em várias províncias e consolidou processos que garantem qualidade e transparência.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#0B1F3B", marginBottom: "1rem" }}>
                Missão, visão e valores
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4a6080", lineHeight: 1.8 }}>
                A nossa missão é prestar serviços de forma eficiente, ética e próxima do cliente. Buscamos ser reconhecidos pela excelência e pela capacidade de transformar ideias em projetos realizados.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "História", description: "Mais de 8 anos de atividade em Angola, com presença em várias províncias e clientes satisfeitos." },
              { title: "Equipa", description: "Profissionais qualificados, dinamismo e atenção personalizada para cada projeto." },
              { title: "Parceiros", description: "Fornecedores e aliados selecionados que garantem materiais e serviços de confiança." },
              { title: "Serviços", description: "Soluções em construção, eletricidade, formação, beleza, eventos e muito mais." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "2rem", borderRadius: 20, background: "#fff", boxShadow: "0 24px 50px rgba(11,31,59,0.08)" }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 20, color: "#0B1F3B", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "#4a6080", lineHeight: 1.75 }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link to="/servicos" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#4DA6FF", color: "#fff", padding: "1rem 1.75rem", borderRadius: 12, textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
              Ver serviços detalhados
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
