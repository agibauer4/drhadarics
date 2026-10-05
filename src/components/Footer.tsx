import { Link } from 'react-router-dom'
import Logo from '../assets/logo-horizontal.svg?react'
import { contact } from '../content/site'
import { openCookieSettings } from './CookieBanner'
import { Heart, LinkedIn } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link to="/" className="footer__logo" aria-label="Kezdőlap">
          <Logo />
        </Link>
        <a className="footer__social" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedIn />
        </a>
      </div>

      <div className="footer__links">
        <div>
          <a href="/#expertise">Szakterületek</a>
          <a href="/#intro">Bemutatkozás</a>
        </div>
        <div>
          <a href="/#consultation">Online konzultáció</a>
          <a href="/#contact">Kapcsolat</a>
        </div>
        <div>
          <Link to="/adatkezelesi-tajekoztato">Adatvédelmi tájékoztató</Link>
          <button type="button" onClick={openCookieSettings}>
            Cookie Beállítások
          </button>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Copyright 2025 © dr. Hadarics. All rights reserved</p>
        <p className="footer__made">
          Made with <Heart className="footer__heart" /> by Odx &amp; Yamit Design
        </p>
      </div>

      <p className="footer__legal">
        Ezt a honlapot a Győr-Moson-Sopron Megyei Ügyvédi Kamarában bejegyzett Dr. Hadarics Dóra tartja fenn az
        ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó
        tájékoztatással együtt a{' '}
        <a href="http://www.magyarugyvedikamara.hu/" target="_blank" rel="noreferrer">
          www.magyarugyvedikamara.hu
        </a>{' '}
        honlapon találhatóak.
      </p>
    </footer>
  )
}
