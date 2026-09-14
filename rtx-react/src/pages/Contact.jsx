import React from 'react'
import '../../../assets/css/style.css'

export default function Contact(){
  return (
    <div>
      

      <section className="page-hero">
        <svg className="route-line" viewBox="0 0 1120 300" preserveAspectRatio="none">
          <path d="M -50 260 C 200 260, 300 60, 600 60 S 900 200, 1180 200" stroke="#F0A202" strokeWidth="2" strokeDasharray="14 12" fill="none" opacity="0.5"/>
        </svg>
        <div className="wrap">
          <div className="kicker"><span className="dash"></span>Contact</div>
          <h1>Parlons de votre trajet</h1>
          <p>Décrivez votre besoin — trajet, volume, fréquence — et nous revenons vers vous avec une proposition adaptée.</p>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <div className="contact-info">
            <div className="row">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
              <div><h3>Adresse</h3><p>21 Avenue de la Libération, 60260 Lamorlaye</p></div>
            </div>
            <div className="row">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 5h16v14H4z" stroke="currentColor" strokeWidth="1.5"/><path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.5"/></svg>
              <div><h3>E-mail</h3><p>roadtruck.expresstransport@gmail.com</p></div>
            </div>
            <div className="row">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
              <div><h3>Téléphone</h3><p>07 58 24 15 78</p></div>
            </div>
            <div className="row">
              <svg className="icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.3"/></svg>
              <div><h3>Disponibilité</h3><p>Du lundi au samedi, réponse sous 24h ouvrées.</p></div>
            </div>
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); e.currentTarget.querySelector('button').textContent='Message envoyé'}}>
            <input type="text" placeholder="Nom de la société" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Trajet ou besoin (ex : Lamorlaye → Lyon, FTL ou déménagement)" />
            <textarea placeholder="Détails de la demande"></textarea>
            <button type="submit" className="cta-btn amber">Envoyer la demande</button>
          </form>
        </div>
      </section>

      
    </div>
  )
}
 
