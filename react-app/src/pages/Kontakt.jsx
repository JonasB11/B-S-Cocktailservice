import './Kontakt.css'

function Kontakt() {
  return (
    <div className="kontakt">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Kontakt & Impressum</h1>
          <p>Wir freuen uns auf Ihre Anfrage</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <h2 className="section-title">Ihre Ansprechpartner</h2>
          <p className="section-subtitle">
            Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot.
          </p>

          <div className="contact-grid">
            {/* Bernhard */}
            <div className="contact-card">
              <div className="contact-avatar">
                <span>BF</span>
              </div>
              <h3>Bernhard Filusch</h3>
              <div className="contact-details">
                <p className="contact-address">
                  Bahnhofstraße 10<br />
                  67305 Ramsen
                </p>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+491733177587">+49 173 / 31 77 58 7</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:BernhardFilusch@b-s-cocktailservice.de">
                    BernhardFilusch@b-s-cocktailservice.de
                  </a>
                </div>
              </div>
            </div>

            {/* Sven */}
            <div className="contact-card">
              <div className="contact-avatar">
                <span>SB</span>
              </div>
              <h3>Sven Berst</h3>
              <div className="contact-details">
                <p className="contact-address">
                  Rosenweg 1<br />
                  67304 Eisenberg
                </p>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+491733213407">+49 173 / 32 13 40 7</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:SvenBerst@b-s-cocktailservice.de">
                    SvenBerst@b-s-cocktailservice.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="company-section section">
        <div className="container">
          <div className="company-card">
            <div className="company-logo">
              <span className="logo-text">B&S</span>
              <span className="logo-subtext">Cocktailservice</span>
            </div>
            <div className="company-info">
              <p><strong>Standorte:</strong> 67305 Ramsen / 67304 Eisenberg</p>
              <p><strong>Internet:</strong> <a href="http://www.b-s-cocktailservice.de">www.b-s-cocktailservice.de</a></p>
              <p><strong>Vertretungsberechtigte:</strong> Hr. Bernhard Filusch und Hr. Sven Berst</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum Section */}
      <section className="impressum-section section">
        <div className="container">
          <h2 className="section-title">Impressum</h2>

          <div className="impressum-content">
            <div className="impressum-block">
              <h3>Angaben gemäß § 5 TMG</h3>
              <p>
                B & S Cocktailservice<br />
                67305 Ramsen / 67304 Eisenberg<br />
                Vertretungsberechtigte: Hr. Bernhard Filusch und Hr. Sven Berst
              </p>
            </div>

            <div className="impressum-block">
              <h3>Kontakt</h3>
              <p>
                Internet: <a href="http://www.b-s-cocktailservice.de">www.b-s-cocktailservice.de</a><br />
                E-Mail: BernhardFilusch@b-s-cocktailservice.de<br />
                E-Mail: SvenBerst@b-s-cocktailservice.de
              </p>
            </div>

            <div className="impressum-block">
              <h3>Haftungshinweis</h3>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kontakt
