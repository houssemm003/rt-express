import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/style.css'

export default function Services(){
  return (
    <div>
      

      <section className="page-hero">
        <svg className="route-line" viewBox="0 0 1120 300" preserveAspectRatio="none">
          <path d="M -50 260 C 200 260, 300 60, 600 60 S 900 200, 1180 200" stroke="#F0A202" strokeWidth="2" strokeDasharray="14 12" fill="none" opacity="0.5"/>
        </svg>
        <div className="wrap">
          <div className="kicker"><span className="dash"></span>Services</div>
          <h1>Huit métiers, un seul interlocuteur</h1>
          <p>De la prise en charge à la livraison finale, chaque étape du trajet est couverte par une compétence dédiée.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><path d="M2 16V6a1 1 0 0 1 1-1h9v11H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 9h4.5l3.5 3.5V16h-8V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="6" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/></svg></div>
            <div>
              <div className="pk">PK 01</div>
              <h3>Transport FTL</h3>
              <p>Camion complet dédié à votre marchandise, sans rupture de charge, pour des trajets directs et des délais tenus sur les longues distances comme sur les liaisons régulières.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg></div>
            <div>
              <div className="pk">PK 02</div>
              <h3>Groupage & milkrun</h3>
              <p>Plusieurs enlèvements et livraisons regroupés sur une tournée optimisée, pour réduire vos coûts logistiques tout en garantissant les créneaux horaires.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><path d="M3 13l3-7h5l2 4h5l3 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 17h20" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.3"/><circle cx="17" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.3"/></svg></div>
            <div>
              <div className="pk">PK 03</div>
              <h3>Flotte polyvalente</h3>
              <p>Du véhicule utilitaire léger au poids lourd, une capacité adaptée à chaque volume et type de marchandise — sans avoir à multiplier les prestataires.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.4"/></svg></div>
            <div>
              <div className="pk">PK 04</div>
              <h3>Suivi en temps réel</h3>
              <p>Visibilité continue sur la position et l'avancement de vos envois, du départ jusqu'à la preuve de livraison, pour anticiper plutôt que subir.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M3 12h18M12 3c2.2 2.3 3.4 5.6 3.4 9s-1.2 6.7-3.4 9c-2.2-2.3-3.4-5.6-3.4-9S9.8 5.3 12 3z" stroke="currentColor" strokeWidth="1.3"/></svg></div>
            <div>
              <div className="pk">PK 05</div>
              <h3>National & international</h3>
              <p>Des liaisons routières fiables sur le territoire français et vers l'Europe, adaptées à vos flux réguliers comme à vos besoins ponctuels.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.3"/><path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
            <div>
              <div className="pk">PK 06</div>
              <h3>Partenaire e-commerce</h3>
              <p>Une expérience opérationnelle éprouvée auprès de grands donneurs d'ordre logistiques exigeants sur les délais et la conformité des process.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div>
              <div className="pk">PK 07</div>
              <h3>Sécurité des marchandises</h3>
              <p>Procédures rigoureuses et véhicules entretenus pour garantir l'intégrité de chaque chargement, du départ à l'arrivée.</p>
            </div>
          </div>

          <div className="service-wide">
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><path d="M4 15v-3a8 8 0 0 1 16 0v3" stroke="currentColor" strokeWidth="1.5"/><rect x="2.5" y="14" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="17.5" y="14" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg></div>
            <div>
              <div className="pk">PK 08</div>
              <h3>Service client réactif</h3>
              <p>Une équipe joignable pour ajuster une tournée, gérer un imprévu ou répondre rapidement à une demande de devis.</p>
            </div>
          </div>

          <div className="service-wide" style={{borderBottom:'none'}}>
            <div className="icon-box"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8v6M12 8v6M16 8v6" stroke="currentColor" strokeWidth="1.3"/><path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
            <div>
              <div className="pk">PK 09</div>
              <h3>Déménagement</h3>
              <p>Déménagement de particuliers et de professionnels, avec véhicules équipés (hayon élévateur, porte latérale) et chauffeurs formés à la manutention du mobilier.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="contact" style={{paddingTop:0, background:'transparent'}}>
        <div className="wrap" style={{display:'block', textAlign:'center', padding:'40px 0 0'}}>
          <Link to="/contact" className="cta-btn amber">Demander un devis pour l'un de ces services</Link>
        </div>
      </section>

      
    </div>
  )
}
 
