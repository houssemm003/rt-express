import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'

export default function Layout({children}){
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenu = () => setMobileOpen(false)

  return (
    <div className="min-h-screen">
      <header>
        <div className="wrap">
          <div className="nav">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={logo} alt="Road Truck Express" className="logo-img" />
              <div>Road Truck <span style={{color:'var(--accent-1)'}}>Express</span></div>
            </Link>

            <nav className={`nav-links${mobileOpen ? ' show' : ''}`}>
              <NavLink to="/" className={({isActive})=> isActive? 'active':''} onClick={closeMenu}>Accueil</NavLink>
              <NavLink to="/services" className={({isActive})=> isActive? 'active':''} onClick={closeMenu}>Services</NavLink>
              <NavLink to="/flotte" className={({isActive})=> isActive? 'active':''} onClick={closeMenu}>Flotte</NavLink>
              <NavLink to="/a-propos" className={({isActive})=> isActive? 'active':''} onClick={closeMenu}>À propos</NavLink>
              <NavLink to="/contact" className={({isActive})=> 'nav-cta'} onClick={closeMenu}>Demander un devis</NavLink>
            </nav>

            <button
              className="nav-toggle"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo" style={{display:'flex',alignItems:'center',gap:12}}>
              <img src={logo} alt="Road Truck Express" className="logo-img" />
              <div style={{fontWeight:700}}>Road Truck <span style={{color:'var(--accent-1)'}}>Express</span></div>
            </Link>
            <p style={{marginTop:12,color:'var(--text-dim)'}}>SAS basée à Lamorlaye — transport routier, groupage, déménagement et suivi 24/7.</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/flotte">Flotte</NavLink></li>
              <li><NavLink to="/a-propos">À propos</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <address className="footer-contact">
              <div>21 Avenue de la Libération, 60260 Lamorlaye</div>
              <div>07 58 24 15 78</div>
              <div>roadtruck.expresstransport@gmail.com</div>
            </address>
          </div>

          <div className="footer-col">
            <h4>Nous suivre</h4>
            <div className="socials" style={{marginTop:8}}>
              <a href="#" aria-label="LinkedIn" className="social" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 4-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="social" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.9v-2.9h1.54V9.41c0-1.52.9-2.36 2.28-2.36.66 0 1.36.12 1.36.12v1.5h-.77c-.76 0-1 .48-1 0v1.17h1.7l-.27 2.9h-1.43V22c4.78-.81 8.44-4.94 8.44-9.93z" stroke="currentColor" strokeWidth="0.5"/></svg>
              </a>
            </div>
            <div style={{marginTop:18}}><NavLink to="/contact" className="cta-btn amber">Demander un devis</NavLink></div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="wrap" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{color:'var(--text-dim)'}}>© 2026 Road Truck Express — Tous droits réservés</div>
            <div style={{color:'var(--text-dim)'}}>SAS · Lamorlaye (60)</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
