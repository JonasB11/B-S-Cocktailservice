import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">B&S</span>
          <span className="logo-subtext">Cocktailservice</span>
        </Link>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/leistungen" className="nav-link" onClick={closeMenu}>
            Leistungen
          </NavLink>
          <NavLink to="/galerie" className="nav-link" onClick={closeMenu}>
            Galerie
          </NavLink>
          <NavLink to="/kontakt" className="nav-link" onClick={closeMenu}>
            Kontakt
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
