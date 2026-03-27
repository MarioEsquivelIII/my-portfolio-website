import './About.css'

const About = () => {
  const experiences = [
    {
      role: 'IT Backend Developer',
      company: 'Georgia Institute of Technology',
      period: 'Jan 2025 - Present',
      type: 'Part-time',
      bullets: [
        'Automated account provisioning and device setup workflows across Windows, macOS, and Linux, supporting 50+ users weekly',
        'Reduced manual troubleshooting time by 30% through scripting-based solutions for recurring operational tasks',
        'Standardized workstation configurations, contributing to 100+ successful device setups weekly',
      ],
    },
    {
      role: 'Coding Instructor',
      company: 'Black Student Computing Organization @ Georgia Tech',
      period: 'Jan 2026 - Present',
      type: 'Volunteer',
      bullets: [
        'Teaching 20+ students introductory programming concepts using Scratch at ABC Learning Academy',
      ],
    },
  ]

  return (
    <section id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">
            A bit about <span className="gradient-text">me</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm a Computer Science student at the <strong>Georgia Institute of Technology</strong> (Class of 2027)
              with a passion for building software that makes a difference. From AI-powered applications to
              Chrome extensions used by hundreds, I love turning ideas into real products.
            </p>
            <p>
              Currently working as an IT Backend Developer at Georgia Tech, where I automate workflows
              and support infrastructure. Outside of work, I teach coding to students and constantly explore
              new technologies in AI/ML, full-stack development, and cloud computing.
            </p>
            <div className="about__education">
              <div className="about__edu-icon">&#127891;</div>
              <div>
                <h4>Georgia Institute of Technology</h4>
                <p className="about__edu-detail">B.S. Computer Science | Aug 2023 - May 2027</p>
                <p className="about__edu-courses">
                  Data Structures &amp; Algorithms, Linear Algebra, Machine Learning, Probability, Discrete Math
                </p>
              </div>
            </div>
          </div>

          <div className="about__experience">
            <h3 className="about__experience-title">Experience</h3>
            {experiences.map((exp, i) => (
              <div key={i} className="about__exp-card">
                <div className="about__exp-header">
                  <div>
                    <h4 className="about__exp-role">{exp.role}</h4>
                    <p className="about__exp-company">{exp.company}</p>
                  </div>
                  <div className="about__exp-meta">
                    <span className="about__exp-period">{exp.period}</span>
                    {exp.type && <span className="about__exp-type">{exp.type}</span>}
                  </div>
                </div>
                <ul className="about__exp-bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
