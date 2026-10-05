import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'cookie-consent'
const OPEN_EVENT = 'open-cookie-settings'

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

function readConsent() {
  try {
    return localStorage.getItem(KEY) === 'accepted'
  } catch {
    return false
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !readConsent())

  useEffect(() => {
    const show = () => setVisible(true)
    window.addEventListener(OPEN_EVENT, show)
    return () => window.removeEventListener(OPEN_EVENT, show)
  }, [])

  if (!visible) return null

  const accept = () => {
    try {
      localStorage.setItem(KEY, 'accepted')
    } catch {
      // storage unavailable: just hide for this visit
    }
    setVisible(false)
  }

  return (
    <div className="cookie" role="dialog" aria-label="Cookie tájékoztató">
      <p>
        Ez a weboldal cookie-kat használ, amelyek segítik a weboldal működését. Read our{' '}
        <Link to="/adatkezelesi-tajekoztato">Cookie Policy</Link>.
      </p>
      <button type="button" onClick={accept}>
        Rendben
      </button>
    </div>
  )
}
