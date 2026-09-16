import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/style.css'

export default function Home(){
  return (
    <div>

      <section className="hero">
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orb orb-one" />
          <div className="visual-orb orb-two" />
          <div className="visual-grid" />
        </div>
        <svg className="route-line" viewBox="0 0 1120 480" preserveAspectRatio="none" style={{position:'absolute', inset:0, zIndex:1, opacity:0.5}}>
          <path d="M -50 420 C 200 420, 260 200, 500 200 S 800 60, 1180 60" stroke="#F0A202" strokeWidth="2" strokeDasharray="14 12" fill="none" opacity="0.55"/>
          <path d="M -50 420 C 200 420, 260 200, 500 200 S 800 60, 1180 60" stroke="#ECE9E2" strokeWidth="1" fill="none" opacity="0.12"/>
        </svg>
        <div className="wrap">
          <div className="kicker"><span className="dash"></span>SAS · Lamorlaye (60) · Transport & déménagement</div>
          <h1 className="hero-title">La route, <em>maîtrisée</em> du départ à l'arrivée.</h1>
          <p className="hero-sub">Road Truck Express organise et exécute vos transports FTL, groupage, milkrun et vos déménagements, avec une flotte du véhicule utilitaire au semi-remorque 44T — pour des clients qui n'ont pas droit à l'approximation.</p>
          <div className="hero-actions">
            <Link to="/contact" className="cta-btn amber">Demander un devis</Link>
            <Link to="/services" className="cta-btn outline">Voir nos services</Link>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="wrap">
          <div className="stat"><div className="num">VL → PL</div><div className="lbl">Flotte polyvalente</div></div>
          <div className="stat"><div className="num">FR · EU</div><div className="lbl">Couverture nationale et internationale</div></div>
          <div className="stat"><div className="num">24/7</div><div className="lbl">Suivi et disponibilité opérationnelle</div></div>
          <div className="stat"><div className="num">100%</div><div className="lbl">Traçabilité des envois</div></div>
        </div>
      </div>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker" style={{color:'#C98600'}}><span className="dash" style={{background:'#C98600'}}></span>Nos services</div>
            <h2>Un point d'appui à chaque étape du trajet</h2>
            <p>Transport routier et déménagement : neuf compétences qui couvrent l'ensemble de la chaîne, de la prise en charge à la livraison finale.</p>
          </div>
        </div>
        <div className="services-grid">
          <div className="service">
            <div className="pk">PK 01</div>
            <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M2 16V6a1 1 0 0 1 1-1h9v11H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 9h4.5l3.5 3.5V16h-8V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="6" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/></svg>
            <h3>Transport FTL</h3>
            <p>Camion complet dédié à votre marchandise, sans rupture de charge.</p>
          </div>
          <div className="service">
            <div className="pk">PK 02</div>
            <svg className="icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
            <h3>Groupage & milkrun</h3>
            <p>Plusieurs enlèvements et livraisons sur une même tournée optimisée.</p>
          </div>
          <div className="service">
            <div className="pk">PK 03</div>
            <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M3 13l3-7h5l2 4h5l3 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 17h20" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.3"/><circle cx="17" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.3"/></svg>
            <h3>Flotte polyvalente</h3>
            <p>Du véhicule utilitaire léger au poids lourd, une capacité adaptée à chaque volume.</p>
          </div>
          <div className="service">
            <div className="pk">PK 04</div>
            <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.4"/></svg>
            <h3>Suivi en temps réel</h3>
            <p>Visibilité continue sur vos envois, du départ jusqu'à la preuve de livraison.</p>
          </div>
        </div>
        <div className="wrap section-foot">
          <Link to="/services" className="cta-btn">Voir les 9 services en détail</Link>
        </div>
      </section>

      <section className="fleet">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker"><span className="dash" style={{background:'#F0A202'}}></span>Notre flotte</div>
            <h2>Un véhicule pour chaque mission</h2>
            <p>Du VL au semi-remorque 44T, en passant par les porteurs 7T5, 12T et 19T — avec ou sans hayon, porte latérale selon les besoins.</p>
          </div>
          <div className="fleet-row">
            <div className="fleet-card">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="14" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>
              <div className="tag">VL</div>
              <h3>Livraisons urbaines & express</h3>
            </div>
            <div className="fleet-card">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M2 16V7a1 1 0 0 1 1-1h11v10H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 10h4l3 3v3h-7v-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="6" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="17" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>
              <div className="tag">Porteur 7T5 / 12T / 19T</div>
              <h3>Groupage & tournées régionales</h3>
            </div>
            <div className="fleet-card">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M16 9h4l3 3.5v2.5h-7V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="6.5" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3"/><circle cx="19" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3"/></svg>
              <div className="tag">Semi-remorque 44T</div>
              <h3>Transport FTL longue distance</h3>
            </div>
          </div>
          <div className="section-foot">
            <Link to="/flotte" className="cta-btn outline">Découvrir la flotte</Link>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <div>
            <div className="section-head" style={{marginBottom:0}}>
              <div className="kicker" style={{color:'#C98600'}}><span className="dash" style={{background:'#C98600'}}></span>Pourquoi Road Truck Express</div>
              <h2>La fiabilité d'abord</h2>
            </div>
            <div className="trust-list">
              <div className="trust-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div><h3>Respect des délais</h3><p>Des tournées planifiées et suivies, même sur les volumes élevés.</p></div>
              </div>
              <div className="trust-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div><h3>Conformité opérationnelle</h3><p>Des process alignés sur les exigences des grands donneurs d'ordre.</p></div>
              </div>
              <div className="trust-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div><h3>Interlocuteur unique</h3><p>Une équipe basée à Lamorlaye, joignable directement.</p></div>
              </div>
              <div className="trust-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div><h3>Chauffeurs professionnels</h3><p>Une équipe compétente et bien formée, du transport routier au déménagement.</p></div>
              </div>
            </div>
          </div>
          <div className="trust-panel">
            <div className="quote-mark">"</div>
            <p className="quote">Chaque trajet est piloté comme s'il était le seul qui comptait.</p>
            <div className="attr">— Road Truck Express, SAS</div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
