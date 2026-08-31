import './Hero.css'
import profile_img from '../../assets/hero_img.jpg'
import resume from '../../assets/Mario_s_Resume (20).pdf'

const facts = [
  ['Role', 'IT Backend Developer, Georgia Tech'],
  ['Study', 'B.S. Computer Science, Class of 2027'],
  ['Focus', 'Backend systems, AI agents, automation'],
  ['Based', 'Atlanta, Georgia'],
]

const proof = [
  ['500+', 'people kept on their meds by CapsuleAlert'],
  ['200+', 'active installs of Split View'],
  ['20', 'students taught to program'],
]

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid section-container">
        <p className="hero__eyebrow">
          <span>Portfolio</span>
          <span className="hero__eyebrow-rule" aria-hidden="true"></span>
          <span>Atlanta, GA</span>
          <span className="hero__eyebrow-rule" aria-hidden="true"></span>
          <span>Open to Summer 2027 internships</span>
        </p>

        <h1 className="hero__name">
          Mario
          <br />
          Esquivel <span className="hero__name-numeral">III</span>
        </h1>

        <figure className="hero__portrait">
          <img src={profile_img} alt="Mario Esquivel" />
          <figcaption>Fig. 1 &mdash; the author, mid-semester</figcaption>
        </figure>

        <div className="hero__lede">
          <p className="hero__lede-text">
            I build software people actually use. A medication app that keeps
            <em> 500 people </em> on schedule, a browser extension running in
            <em> 200+ </em> installs, and an LLM agent that hunts down research
            positions without being asked twice.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              See the work
            </a>
            <a href={resume} download className="hero__btn">
              Resume <span aria-hidden="true">&darr;</span>
            </a>
            <a
              href="https://github.com/MarioEsquivelIII"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn"
            >
              GitHub <span aria-hidden="true">&#8599;</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mario-esquivel-iii-9b6900239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn"
            >
              LinkedIn <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>

        <div className="hero__meta">
          <dl className="hero__facts">
            {facts.map(([term, def]) => (
              <div key={term} className="hero__fact">
                <dt>{term}</dt>
                <dd>{def}</dd>
              </div>
            ))}
          </dl>

          <ul className="hero__proof">
            {proof.map(([figure, note]) => (
              <li key={figure}>
                <span className="hero__proof-figure">{figure}</span>
                <span className="hero__proof-note">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span className="hero__scroll-line" aria-hidden="true"></span>
        Scroll
      </a>
    </section>
  )
}

export default Hero
