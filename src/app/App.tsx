import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Areas } from "./components/Areas";
import { Courses } from "./components/Courses";
import { WhyUs } from "./components/WhyUs";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }

        .hero-grid { grid-template-columns: 1fr 1fr !important; }
        .about-grid { grid-template-columns: 1fr 1fr !important; }
        .contact-grid { grid-template-columns: 1fr 1.2fr !important; }
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; }
        .gallery-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          grid-template-rows: repeat(2, 240px) !important;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-col { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .about-float-card { display: none !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 180px) !important;
          }
          .gallery-grid > div:first-child { grid-column: span 1 !important; }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
          }
          .gallery-grid > div { height: 180px !important; }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(77,166,255,0.35); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(77,166,255,0.65); }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <Courses />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
