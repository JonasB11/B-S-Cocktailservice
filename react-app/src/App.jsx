import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Galerie from './pages/Galerie'
import Kontakt from './pages/Kontakt'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
