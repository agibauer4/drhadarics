import content from '../content/privacy.json'

type Block = { tag: string; html: string }

export default function Privacy() {
  return (
    <section className="section section--light privacy">
      <div className="container privacy__body">
        {(content as Block[]).map((b, i) => {
          const Tag = (b.tag === 'h1' ? 'h1' : b.tag === 'h4' ? 'h2' : 'p') as 'h1' | 'h2' | 'p'
          return <Tag key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
        })}
      </div>
    </section>
  )
}
