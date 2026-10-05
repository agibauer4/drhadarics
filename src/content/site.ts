export const contact = {
  phoneDisplay: '+36 (30) 899 0577',
  phoneHref: 'tel:+36308990577',
  email: 'ugyved@drhadarics.com',
  address: '9400 Sopron, Patak utca 13.',
  mapsLink: 'https://maps.app.goo.gl/NohNY4NNYpJA7DGi6',
  mapEmbed: 'https://maps.google.com/maps?q=47.68897743681039,16.58781246817589&z=15&output=embed',
  linkedin: 'https://www.linkedin.com/in/d%C3%B3ra-dr-hadarics-57a8bb29b/',
}

// Links to sections on the home page; BASE_URL keeps them working when the
// site is served from a subfolder (e.g. the GitHub Pages staging build).
export const homeLink = (id: string) => `${import.meta.env.BASE_URL}#${id}`

export const navLinks = [
  { label: 'Szakterületek', href: homeLink('expertise') },
  { label: 'Online konzultáció', href: homeLink('consultation') },
  { label: 'Bemutatkozás', href: homeLink('intro') },
]

export const expertise = [
  {
    title: 'Polgári jog',
    items: [
      'Tipikus és atipikus szerződéses megállapodások szerkesztése, véleményezése',
      'Hagyatéki ügyintézés',
      'Társasházak jogi képviselete',
      'Peres és perenkívüli eljárásban való jogi képviselet',
    ],
  },
  {
    title: 'Társasági jog',
    items: [
      'Gazdasági társaságok alapítása',
      'Gazdasági társaságok változásbejegyzése',
      'Gazdasági társaságok peres és peren kívüli jogi képviselete',
      'Cégbíróság előtti képviselet',
      'Végelszámolási-, felszámolási-, csődeljárásban való képviselet',
      'Civil szervezetek képviselete',
    ],
  },
  {
    title: 'Büntető- és szabálysértési jog',
    items: [
      'Kirendelt és meghatalmazott védői képviselet',
      'Sértetti képviselet',
      'Feljelentés, panasz, indítvány, beadvány szerkesztés és benyújtás',
      'Eljárási cselekményeken való részvétel',
      'Hatóságokkal való kapcsolattartás',
      'Polgári jogi igény érvényesítése',
    ],
  },
  {
    title: 'Ingatlanjog',
    items: [
      'Ingatlan adásvételi szerződések, termőföld adásvételi szerződések, ajándékozási szerződések, bérleti szerződések szerkesztése és véleményezése',
      'Teljeskörű földhivatali ügyintézés',
      'Tanácsadás',
    ],
  },
  {
    title: 'Végrehajtási jog',
    items: [
      'Fizetési felszólítás megküldése',
      'Fizetési meghagyásos eljárásban való jogi képviselet',
      'Végrehajtási eljárásban való jogi képviselet',
    ],
  },
  {
    title: 'Munkajog',
    items: [
      'Munkaszerződések, egyéb munkajogi dokumentumok szerkesztése, véleményezése',
      'Munkajogi tanácsadás',
      'Bíróság előtti jogi képviselet',
    ],
  },
]
