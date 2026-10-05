import Button from '../components/Button'
import { Envelope, LocationDot, Phone } from '../components/Icons'
import { contact, expertise } from '../content/site'
import sopron from '../assets/sopron.png'
import portrait from '../assets/portrait.jpg'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__bg" src={sopron} alt="Sopron" />
        <div className="hero__content">
          <h1 className="hero__name">Dr. Hadarics Dóra</h1>
          <p className="hero__title">ügyvéd</p>
          <h2 className="hero__lead">Szakszerű ügyvédi segítség Sopronban és környékén</h2>
          <div className="buttons">
            <Button href="#expertise" variant="secondary" icon="down">
              Tudjon meg többet
            </Button>
            <Button href="#contact">Kapcsolat</Button>
          </div>
        </div>
        <p className="hero__credit">
          fotó: <strong>Dr. Hadarics Tibor</strong>
        </p>
      </section>

      <section id="expertise" className="section section--light">
        <div className="container">
          <h2 className="h-section">Szakterületeim</h2>
          <div className="cards">
            {expertise.map((area) => (
              <article key={area.title} className="card">
                <h3>{area.title}</h3>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="section section--dark consult">
        <div className="container">
          <h2 className="h-section">Online konzultáció</h2>
          <p className="consult__text">
            Az ügyön túl számomra az ügyfél a legfontosabb: a története, a kérdései, az aggodalmai. Vegye fel velem a
            kapcsolatot és foglaljon időpontot most!
          </p>
          <div className="buttons buttons--left">
            <Button href={`mailto:${contact.email}`} variant="secondary" tone="light" icon="down">
              Írjon emailt
            </Button>
            <Button href={contact.phoneHref} tone="light">
              Keressen fel telefonon
            </Button>
          </div>
        </div>
      </section>

      <section id="intro" className="intro section--light">
        <div className="intro__image">
          <img src={portrait} alt="Dr. Hadarics Dóra" />
        </div>
        <div className="intro__text">
          <h2 className="h-section">Bemutatkozás</h2>
          <p>
            Jogi diplomámat 2018-ban szereztem meg a budapesti Pázmány Péter Katolikus Egyetem Jog- és
            Államtudományi Karán „cum laude” minősítéssel. Az egyetem elvégzését követően jogi gyakornokként egyéves
            szakmai gyakorlatot folytattam egy nemzetközi ügyfélkörrel rendelkező bécsi ügyvédi irodában, majd
            2019-ben megkezdtem ügyvédjelölti pályafutásomat, amely időszak alatt széleskörű tapasztalatot szereztem
            az építési jog, a végrehajtási jog, a családjog, az ingatlanjog továbbá kirendelt védőként a büntetőjog
            területén. Az önálló ügyvédi praxisomat 2023-ban kezdtem el, irodám Sopron belvárosában található.
          </p>
          <p>
            Alapelvem a rám bízott ügyek szakszerű, precíz es hatékony megoldása, illetve az ügyfélközpontú légkör
            megteremtése.
          </p>
        </div>
      </section>

      <section id="contact" className="section section--dark contact">
        <div className="contact__inner">
          <div className="contact__info">
            <h2 className="h-section">Kapcsolat</h2>
            <ul className="contact__list">
              <li>
                <Phone className="contact__icon" />
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </li>
              <li>
                <LocationDot className="contact__icon" />
                <a href={contact.mapsLink} target="_blank" rel="noreferrer">
                  {contact.address}
                </a>
              </li>
              <li>
                <Envelope className="contact__icon" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>
          <div className="contact__map">
            <iframe title="Térkép" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  )
}
