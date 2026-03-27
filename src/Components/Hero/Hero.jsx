import './Hero.css'
import profile_img from '../../assets/hero_img.jpg'
import resume from '../../assets/Mario_s_Resume (16).pdf'
import GitHubImg from '../../assets/2572-logo-github.svg'
import linkedinImg from '../../assets/linkedin.png'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container section-container">
        <div className="hero__content">
          <div className="hero__greeting">Hello, I'm</div>
          <h1 className="hero__name"> 
            Mario <span className="gradient-text">Esquivel</span>
          </h1>
          <p className="hero__title">
            Computer Science Student at <strong>Georgia Tech</strong>
          </p>
          <p className="hero__description">
            IT Backend Developer, AI/ML enthusiast, and full-stack builder.
            Passionate about creating software that solves real problems.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
            </a>
            <a href={resume} download className="hero__btn hero__btn--secondary">
              Download Resume
            </a>
            <a href="https://github.com/MarioEsquivelIII" target="_blank" rel="noopener noreferrer" className="hero__social hero__social--github">
              <img src={GitHubImg} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/mario-esquivel-iii-9b6900239/" target="_blank" rel="noopener noreferrer" className="hero__social">
              <img src={linkedinImg} alt="LinkedIn" />
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">20+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Users Reached</span>
            </div>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <div className="hero__image-ring">
            <img src={profile_img} alt="Mario Esquivel" className="hero__image" />
          </div>
          <div className="hero__image-decoration hero__image-decoration--1"></div>
          <div className="hero__image-decoration hero__image-decoration--2"></div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
