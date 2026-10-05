import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo-horizontal.svg?react'
import { homeLink, navLinks } from '../content/site'
import Button from './Button'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`header ${open ? 'header--open' : ''}`}>
      <div className="header__bar">
        <Link to="/" className="header__logo" aria-label="Kezdőlap">
          <Logo />
        </Link>
        <nav className="header__nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <Button href={homeLink('contact')} tone="light" className="header__cta">
          Kapcsolat
        </Button>
        <button
          type="button"
          className="header__burger"
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav className="header__mobile" aria-hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={homeLink('contact')} onClick={() => setOpen(false)}>
          Kapcsolat
        </a>
      </nav>
    </header>
  )
}
