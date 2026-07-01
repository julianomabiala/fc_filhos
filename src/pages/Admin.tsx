import { useState } from "react";

export function Admin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoggedIn(true);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0B1F3B" }}>
      <section style={{ padding: "6rem 1.5rem", display: "grid", placeItems: "center" }}>
        <div style={{ width: "100%", maxWidth: 460, background: "#fff", borderRadius: 24, padding: "3rem", boxShadow: "0 24px 70px rgba(11,31,59,0.12)" }}>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 3vw, 2.6rem)", marginBottom: "1rem", color: "#0B1F3B" }}>
            Painel Administrativo
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4a6080", marginBottom: "2rem", lineHeight: 1.75 }}>
            Faça login para aceder à área de administração e gerir pedidos, contactos e conteúdos.
          </p>

          {loggedIn ? (
            <div style={{ padding: "2rem", borderRadius: 18, background: "#eef6ff", border: "1px solid #b3d4ff" }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22, color: "#0B1F3B", marginBottom: "0.75rem" }}>
                Acesso aprovado
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4a6080", lineHeight: 1.7 }}>
                O seu login foi registado. Em produção, seria aqui onde se carregaria a interface de gestão.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                Email
                <input
                  type="email"
                  required
                  value={credentials.email}
                  onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                  style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15 }}
                  placeholder="email@empresa.com"
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4a6080" }}>
                Palavra-passe
                <input
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                  style={{ padding: "0.95rem 1rem", borderRadius: 14, border: "1px solid #cbd5e1", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15 }}
                  placeholder="••••••••••"
                />
              </label>
              <button type="submit" style={{ padding: "1rem 1.25rem", borderRadius: 14, background: "#4DA6FF", color: "#fff", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                Entrar
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
