import './MyWork.css'
import Kronos from '../../assets/Kronos.png'
import SplitViewImg from '../../assets/Screenshot 2025-06-27 170544.png'

const projects = [
  {
    name: 'Kronos',
    description: 'AI-powered calendar application that converts natural-language user input into structured, editable weekly schedules. Features prompt-based refinement, Supabase auth, persistent storage, and revision tracking.',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    image: Kronos,
    github: 'https://github.com/MarioEsquivelIII/Kronos',
    demo: null,
    highlights: ['70% less manual planning', '100+ event records', '60% fewer errors'],
  },
  {
    name: 'AI Agent Research Job Finder',
    description: 'Autonomous AI agent that discovers undergraduate research opportunities by searching university lab websites, scraping pages, and extracting faculty contact emails using LangChain tool-calling.',
    tech: ['Python', 'LangChain', 'LLM Agents', 'Tavily API', 'BeautifulSoup'],
    image: null,
    github: 'https://github.com/MarioEsquivelIII/AI_Agent_Research_Position_Finder',
    demo: null,
    highlights: ['80%+ faster search', 'Pydantic outputs', 'Auto email extraction'],
  },
  {
    name: 'Split View',
    description: 'Chrome extension that splits a browser tab into multiple resizable panels for improved multitasking. Features responsive CSS Grid layouts, keyboard shortcuts, and a privacy-first architecture with zero data collection.',
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
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              {project.image && (
                <div className="project-card__image">
                  <img src={project.image} alt={project.name} />
                </div>
              )}
              <div className="project-card__content">
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__highlights">
                  {project.highlights.map((h, j) => (
                    <span key={j} className="project-card__highlight">{h}</span>
                  ))}
                </div>

                <div className="project-card__tech">
                  {project.tech.map(t => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--demo">
                      Live Demo &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWork
