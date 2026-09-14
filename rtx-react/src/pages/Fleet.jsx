import React from 'react'
import '../../../assets/css/style.css'

export default function Fleet(){
  return (
    <div>
      

      <section className="page-hero">
        <svg className="route-line" viewBox="0 0 1120 300" preserveAspectRatio="none">
          <path d="M -50 260 C 200 260, 300 60, 600 60 S 900 200, 1180 200" stroke="#F0A202" strokeWidth="2" strokeDasharray="14 12" fill="none" opacity="0.5"/>
        </svg>
        <div className="wrap">
          <div className="kicker"><span className="dash"></span>Flotte</div>
          <h1>Des véhicules pour chaque besoin</h1>
          <p>Une flotte polyvalente — du VL au 44T — équipée pour le transport de marchandises et le déménagement.</p>
        </div>
      </section>

      <section className="fleet">
        <div className="wrap section-head">
          <div className="kicker">Notre flotte</div>
          <h2>Véhicules adaptés à vos volumes</h2>
          <p>Choisissez le véhicule qui convient à votre envoi : utilitaire léger, porteur 7T5/12T/19T ou semi-remorque 44T.</p>
        </div>

        <div className="wrap fleet-row">
          <div className="fleet-card">
            <div className="tag">VL</div>
            <h3>Véhicule léger</h3>
            <p>Idéal pour petits enlèvements, accessibilité urbaine et livraisons rapides.</p>
            <ul>
              <li>Volume : jusqu'à 3 m³</li>
              <li>Accès facile en centre-ville</li>
              <li>Chargement par porte latérale</li>
            </ul>
          </div>
          <div className="fleet-card">
            <div className="tag">Porteur</div>
            <h3>7T5 / 12T / 19T</h3>
            <p>Polyvalents pour palettes, mobiliers et remplacements partiels de chargements.</p>
            <ul>
              <li>Configurations hayon ou porte latérale</li>
              <li>Volumes intermédiaires</li>
            </ul>
          </div>
          <div className="fleet-card">
            <div className="tag">44T</div>
            <h3>Semi-remorque</h3>
            <p>Pour les transports FTL et les gros volumes avec trajets longue distance.</p>
            <ul>
              <li>Capacité importante</li>
              <li>Conforme aux réglementations routières</li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  )
}
 
