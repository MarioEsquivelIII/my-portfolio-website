import './MyWork.css'
import NotedImg from '../../assets/noted.png'
import SplitViewImg from '../../assets/Screenshot 2025-06-27 170544.png'

const projects = [
  {
    name: 'CapsuleAlert',
    kind: 'Startup / Android',
    description:
      'A startup building an Android app to improve medication adherence by up to 35% for users managing 5+ prescriptions. Features reliable reminders, local prescription access, and secure cloud sync.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'AlarmManager', 'Supabase'],
    image: null,
    github: 'https://github.com/MarioEsquivelIII/CapsuleAlert',
    demo: null,
    highlights: ['35% better adherence', '1,000+ prescription records', '500+ users supported'],
  },
  {
    name: 'Noted',
    kind: 'Web app / LLM',
    description:
      'AI-powered calendar application that converts natural-language user input into structured, editable weekly schedules. Features prompt-based refinement, Supabase auth, persistent storage, and revision tracking.',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    image: NotedImg,
    github: 'https://github.com/MarioEsquivelIII/Noted',
    demo: null,
    highlights: ['70% less manual planning', '100+ event records', '60% fewer errors'],
  },
  {
    name: 'AI Agent Research Job Finder',
    kind: 'Autonomous agent',
    description:
      'Autonomous AI agent that discovers undergraduate research opportunities by searching university lab websites, scraping pages, and extracting faculty contact emails using LangChain tool-calling.',
    tech: ['Python', 'LangChain', 'LLM Agents', 'Tavily API', 'BeautifulSoup'],
    image: null,
    github: 'https://github.com/MarioEsquivelIII/AI_Agent_Research_Position_Finder',
    demo: null,
    highlights: ['80%+ faster search', 'Pydantic outputs', 'Auto email extraction'],
  },
  {
    name: 'Split View',
    kind: 'Chrome extension',
    description:
      'Chrome extension that splits a browser tab into multiple resizable panels for improved multitasking. Features responsive CSS Grid layouts, keyboard shortcuts, and a privacy-first architecture with zero data collection.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: SplitViewImg,
    github: 'https://github.com/MarioEsquivelIII/active-tab-split',
    demo: null,
    highlights: ['200+ active users', 'Zero data collection', 'Keyboard shortcuts'],
  },
]

const MyWork = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">
            Four things I <span className="gradient-text">shipped</span>
          </h2>
        </div>

        <div className="entries">
          {projects.map((project, i) => (
            <article key={project.name} className="entry">
              <div className="entry__num">{String(i + 1).padStart(2, '0')}</div>

              <div className="entry__body">
                <h3 className="entry__name">{project.name}</h3>
                <p className="entry__kind">{project.kind}</p>
                <p className="entry__desc">{project.description}</p>

                <div className="entry__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Source <span aria-hidden="true">&#8599;</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live demo <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                </div>
              </div>

              <aside className="entry__notes">
                {project.highlights.map(h => {
                  const match = h.match(/^([\d,]+%?\+?|Zero)\s+(.*)$/i)
                  return (
                    <p key={h} className="entry__note">
                      {match ? (
                        <>
                          <span className="entry__note-figure">{match[1]}</span>
                          <span className="entry__note-text">{match[2]}</span>
                        </>
                      ) : (
                        <span className="entry__note-text">{h}</span>
                      )}
                    </p>
                  )
                })}
              </aside>

              {project.image ? (
                <figure className="entry__figure">
                  <img src={project.image} alt={`${project.name} interface`} loading="lazy" />
                </figure>
              ) : (
                <div className="entry__spec">
                  <span className="entry__spec-label">Built with</span>
                  <ul>
                    {project.tech.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.image && (
                <p className="entry__tech">{project.tech.join('  ·  ')}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWork
