import './Leistungen.css'

function Leistungen() {
  const services = [
    {
      icon: '💬',
      title: 'Kompetente Beratung',
      description: 'Wir beraten Sie umfassend in der Getränkeauswahl und planen gemeinsam Ihr perfektes Event.'
    },
    {
      icon: '🍹',
      title: '"Firmeneigene" Cocktails',
      description: 'Wir kreieren individuelle Cocktails speziell für Ihr Unternehmen oder Ihre Veranstaltung.'
    },
    {
      icon: '🥂',
      title: 'Gläserservice',
      description: 'Professionelle Gläser für jeden Cocktail - von uns gestellt und gespült.'
    },
    {
      icon: '🏪',
      title: 'Mobile Cocktailbar',
      description: 'Komplett ausgestattete mobile Cocktailbar in verschiedenen Größen (1,5 x 3 Meter bis 9 x 3 Meter).'
    },
    {
      icon: '📋',
      title: 'Individuelle Cocktailkarte',
      description: 'Auf Anfrage erstellen wir eine speziell für Sie gestaltete Cocktailkarte.'
    },
    {
      icon: '👨‍🍳',
      title: 'Professionelle Servicekräfte',
      description: 'Unsere erfahrenen Barkeeper sorgen für beste Unterhaltung und perfekte Drinks.'
    },
    {
      icon: '🧊',
      title: 'Eiswürfelservice',
      description: 'Immer genügend Eis für Ihre Cocktails - frisch und in Top-Qualität.'
    },
    {
      icon: '🎵',
      title: 'Musikanlage',
      description: 'Auf Wunsch stellen wir auch die passende Musikanlage für Ihre Veranstaltung.'
    }
  ]

  return (
    <div className="leistungen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Unsere Leistungen</h1>
          <p>Professionelles Getränke-Catering für Ihre Veranstaltung</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Wir nehmen Ihnen die Arbeit ab</h2>
            <p>
              Aus Erfahrung wissen wir, wie aufwendig die Organisation einer Veranstaltung ist.
              Deshalb nehmen wir Ihnen die Aufgaben, die mit professionellem Getränke-Catering
              verbunden sind, ab.
            </p>
            <p>
              Wir beraten Sie in der Getränkeauswahl, erstellen auf Anfragen eine spezielle
              Cocktailkarte, kreieren neue Cocktails, erledigen den Einkauf und kümmern uns
              um die persönliche Bewirtung Ihrer Gäste.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">Zu unseren Leistungen gehören</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements section">
        <div className="container">
          <div className="requirements-card">
            <h2>Wir benötigen vor Ort</h2>
            <div className="requirements-list">
              <div className="requirement-item">
                <span className="requirement-icon">🔌</span>
                <div>
                  <h4>Stromanschluss</h4>
                  <p>Für unsere Geräte und Beleuchtung</p>
                </div>
              </div>
              <div className="requirement-item">
                <span className="requirement-icon">💧</span>
                <div>
                  <h4>Wasseranschluss und -ablauf</h4>
                  <p>Für die Zubereitung und Reinigung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leistungen
