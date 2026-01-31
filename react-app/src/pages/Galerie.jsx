import { useState } from 'react'
import './Galerie.css'

function Galerie() {
  const [selectedGallery, setSelectedGallery] = useState(null)

  const galleries = [
    {
      id: 'tsg',
      title: '125 Jahre TSG Eisenberg',
      description: 'Jubiläumsfeier des TSG Eisenberg',
      images: 7,
      thumbnail: '🎉'
    },
    {
      id: 'apres-ski',
      title: 'Après Ski Party Hall 102',
      description: 'Winterliche Party-Stimmung',
      images: 13,
      thumbnail: '⛷️'
    },
    {
      id: 'benefiz',
      title: 'Benefizveranstaltung Wattenheim',
      description: 'Charity Event',
      images: 10,
      thumbnail: '❤️'
    },
    {
      id: 'christmas',
      title: 'Christmas Party Hall 102',
      description: 'Weihnachtsfeier mit festlicher Stimmung',
      images: 13,
      thumbnail: '🎄'
    },
    {
      id: 'flugnacht',
      title: 'Flugnacht 2007',
      description: 'Spektakuläres Nacht-Event',
      images: 5,
      thumbnail: '✈️'
    },
    {
      id: 'hochzeit-juni',
      title: 'Hochzeit Juni 2007',
      description: 'Romantische Sommerhochzeit',
      images: 7,
      thumbnail: '💒'
    },
    {
      id: 'hochzeit-mueller',
      title: 'Hochzeit Müller 2007',
      description: 'Elegante Hochzeitsfeier',
      images: 13,
      thumbnail: '💍'
    }
  ]

  return (
    <div className="galerie">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Galerie</h1>
          <p>Eindrücke von unseren Events und Veranstaltungen</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section section">
        <div className="container">
          <h2 className="section-title">Unsere Bildergalerien</h2>
          <p className="section-subtitle">
            Werfen Sie einen Blick auf vergangene Events und lassen Sie sich von unserer Arbeit inspirieren.
          </p>

          <div className="gallery-grid">
            {galleries.map((gallery) => (
              <div
                key={gallery.id}
                className="gallery-card"
                onClick={() => setSelectedGallery(gallery)}
              >
                <div className="gallery-thumbnail">
                  <span className="gallery-emoji">{gallery.thumbnail}</span>
                </div>
                <div className="gallery-info">
                  <h3>{gallery.title}</h3>
                  <p>{gallery.description}</p>
                  <span className="gallery-count">{gallery.images} Bilder</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="gallery-info-section section">
        <div className="container">
          <div className="info-card">
            <h2>Ihr Event könnte hier sein!</h2>
            <p>
              Wir dokumentieren gerne auch Ihre Veranstaltung. Kontaktieren Sie uns
              für ein unverbindliches Angebot und werden Sie Teil unserer Galerie.
            </p>
            <a href="/kontakt" className="btn btn-primary">Jetzt anfragen</a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedGallery && (
        <div className="gallery-modal" onClick={() => setSelectedGallery(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGallery(null)}>×</button>
            <h2>{selectedGallery.title}</h2>
            <p>{selectedGallery.description}</p>
            <div className="modal-placeholder">
              <span className="modal-emoji">{selectedGallery.thumbnail}</span>
              <p>Diese Galerie enthält {selectedGallery.images} Bilder.</p>
              <p className="modal-note">
                Die Original-Bilder können von der Website
                <a href="http://www.b-s-cocktailservice.de" target="_blank" rel="noopener noreferrer">
                  www.b-s-cocktailservice.de
                </a>
                übernommen werden.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galerie
