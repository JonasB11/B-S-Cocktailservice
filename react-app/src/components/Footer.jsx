import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">B&S</span>
              <span className="logo-subtext">Cocktailservice</span>
            </div>
            <p className="footer-description">
              Ihr professioneller Partner für Cocktail-Catering in der Pfalz,
              Mannheim und Umgebung. Wir machen Ihre Veranstaltung unvergesslich!
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/leistungen">Leistungen</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/kontakt">Kontakt & Impressum</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <span className="contact-icon">📍</span>
                67305 Ramsen / 67304 Eisenberg
              </li>
              <li>
                <span className="contact-icon">📞</span>
                +49 173 / 31 77 58 7
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                info@b-s-cocktailservice.de
              </li>
            </ul>
          </div>

          <div className="footer-service">
            <h4>Service Region</h4>
            <p>
              Pfalz • Mannheim • Kaiserslautern • Grünstadt • Kirchheimbolanden •
              Eisenberg • Rheinland-Pfalz
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} B&S Cocktailservice. Alle Rechte vorbehalten.</p>
          <p>
            <Link to="/kontakt">Impressum</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
