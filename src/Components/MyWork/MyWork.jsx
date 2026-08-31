import './MyWork.css'
import NotedImg from '../../assets/noted.png'

const projects = [
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
    name: 'Brain Tumor MRI Classifier',
    kind: 'Deep learning / PyTorch',
    description:
      'A ResNet18 transfer-learning model that reads a brain MRI and classifies it as glioma, meningioma, pituitary tumor, or no tumor. Ships with a confusion matrix, per-class precision and recall, and a measured robustness table across eight image perturbations.',
    tech: ['Python', 'PyTorch', 'torchvision', 'ResNet18', 'NumPy'],
    image: null,
    github: 'https://github.com/MarioEsquivelIII/BrianTumorNeuralNetwork',
    demo: null,
    highlights: [
      '94.7% test accuracy over 4 classes',
      '7,200 labeled MRI scans',
      'Robustness measured, not assumed',
    ],
  },
  {
    name: 'YouTubeTrades',
    kind: 'Web app / data pipeline',
    description:
      'A stock-hype dashboard that ranks tickers by what finance YouTubers are actually talking about this week. Pulls recent uploads, reads their spoken transcripts, extracts mentioned tickers with rules rather than an LLM, and attaches live quotes.',
    tech: ['TypeScript', 'Next.js 15', 'React 19', 'Tailwind CSS', 'YouTube Data API', 'Finnhub'],
    image: null,
    github: 'https://github.com/MarioEsquivelIII/YoutubeTrades',
    demo: null,
    highlights: [
      '26 finance channels tracked',
      '11 investment themes',
      'Transcript-level attribution',
    ],
  },
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
                  const match = h.match(/^([\d,.]+%?\+?|Zero)\s+(.*)$/i)
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
