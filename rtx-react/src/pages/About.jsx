import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/style.css'

export default function About() {
  return (
    <div>

      <section className="page-hero">
        <svg className="route-line" viewBox="0 0 1120 300" preserveAspectRatio="none">
          <path
            d="M -50 260 C 200 260, 300 60, 600 60 S 900 200, 1180 200"
            stroke="#F0A202"
            strokeWidth="2"
            strokeDasharray="14 12"
            fill="none"
            opacity="0.5"
          />
        </svg>
        <div className="wrap">
          <div className="kicker"><span className="dash" />À propos</div>
          <h1>Une SAS de transport et de déménagement basée à Lamorlaye</h1>
          <p>
            Road Truck Express pilote des tournées de transport routier et des opérations de déménagement,
            avec une flotte adaptée à chaque volume, du véhicule léger au 44 tonnes.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: 20 }}>Notre métier</h2>
            <p>
              Road Truck Express est une société de transport routier et de déménagement (SAS) implantée à Lamorlaye,
              dans l'Oise. Nous organisons et exécutons des tournées pour des clients dont l'activité repose sur la
              ponctualité et la fiabilité des flux, ainsi que des opérations de déménagement pour particuliers et professionnels.
            </p>
            <p>
              Notre flotte va du véhicule utilitaire léger au semi-remorque 44 tonnes, en passant par les porteurs 7T5,
              12T et 19T. Selon les véhicules, nos équipements incluent hayon élévateur et porte latérale, pour s'adapter
              à chaque marchandise et contrainte d'accès.
            </p>
            <p>
              Nos chauffeurs sont compétents, professionnels et bien formés — une exigence centrale, du transport routier
              au déménagement.
            </p>
          </div>

          <div className="value-list">
            <div className="value-item">
              <h3>Basés à Lamorlaye (60)</h3>
              <p>21 Avenue de la Libération, 60260 Lamorlaye — pour desservir l'Île-de-France et au-delà.</p>
            </div>
            <div className="value-item">
              <h3>Flotte VL à 44T</h3>
              <p>Utilitaires, porteurs 7T5 / 12T / 19T et semi-remorques 44T, avec ou sans hayon, porte latérale selon les véhicules.</p>
            </div>
            <div className="value-item">
              <h3>Transport & déménagement</h3>
              <p>Une double compétence : logistique professionnelle exigeante et déménagement pour particuliers et entreprises.</p>
            </div>
            <div className="value-item">
              <h3>Chauffeurs professionnels</h3>
              <p>Une équipe compétente et bien formée, garante du soin apporté à chaque chargement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" style={{ paddingTop: 0, background: 'transparent' }}>
        <div className="wrap" style={{ display: 'block', textAlign: 'center', padding: '0 0 40px' }}>
          <Link to="/contact" className="cta-btn amber">Nous contacter</Link>
        </div>
      </section>

      
    </div>
  )
}