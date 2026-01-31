import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-accent">B&S</span> Cocktailservice
          </h1>
          <p className="hero-subtitle">
            Professionelles Cocktail-Catering für Ihre unvergessliche Veranstaltung
          </p>
          <p className="hero-region">
            Pfalz • Mannheim • Kaiserslautern • Rheinland-Pfalz
          </p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn btn-primary">Jetzt anfragen</Link>
            <Link to="/leistungen" className="btn btn-outline">Unsere Leistungen</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <h2 className="section-title">Willkommen bei B&S Cocktailservice</h2>
          <p className="section-subtitle">
            Aus Erfahrung wissen wir, wie aufwendig die Organisation einer Veranstaltung ist.
            Deshalb nehmen wir Ihnen alle Aufgaben ab, die mit professionellem Getränke-Catering verbunden sind.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🍸</div>
              <h3>Individuelle Beratung</h3>
              <p>Wir beraten Sie in der Getränkeauswahl und erstellen auf Anfrage eine spezielle Cocktailkarte.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🎨</div>
              <h3>Kreative Cocktails</h3>
              <p>Wir kreieren neue Cocktails speziell für Ihr Event - "firmeneigene" Kreationen inklusive.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🎉</div>
              <h3>Full-Service</h3>
              <p>Vom Einkauf bis zur persönlichen Bewirtung Ihrer Gäste - wir kümmern uns um alles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-subtitle">
            Alles aus einer Hand für Ihre perfekte Veranstaltung
          </p>
          <div className="services-grid">
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Kompetente Beratung</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Mobile Cocktailbar (1,5 x 3m bis 9 x 3m)</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Gläserservice</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Individuell gestaltete Cocktailkarte</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Professionelle Servicekräfte</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Eiswürfelservice</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>Musikanlage auf Wunsch</span>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <span>"Firmeneigene" Cocktails</span>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/leistungen" className="btn btn-primary">Alle Leistungen ansehen</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Bereit für Ihre perfekte Veranstaltung?</h2>
            <p>Kontaktieren Sie uns für ein unverbindliches Angebot!</p>
            <Link to="/kontakt" className="btn btn-primary">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
