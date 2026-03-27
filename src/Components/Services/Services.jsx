import './Services.css'

const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Go', 'C#', 'HTML/CSS', 'Assembly'],
  Frameworks: ['React.js', 'Next.js', 'Django', 'Spring Boot', 'Node.js', 'Express.js', 'NumPy', 'Pandas', 'OpenCV'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase'],
  'Tools & Platforms': ['Git', 'Docker', 'AWS', 'PyTorch', 'TensorFlow', 'RESTful APIs', 'Jira', 'PowerBI'],
}

const Services = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
        </div>

        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills__category">
              <h3 className="skills__category-title">{category}</h3>
              <div className="skills__tags">
                {items.map(skill => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
