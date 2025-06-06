import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.png'
import linkedin_icon from '../../assets/linkedin.png'
import GitHubImg from '../../assets/2572-logo-github.svg'

const About = () => {
  return (
    <div id='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt='' />
          <div className='about-social'>
            <a href='https://www.linkedin.com/in/mario-esquivel-9b6900239/' target='_blank' rel="noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
            <a href='https://github.com/MarioEsquivelIII' target='_blank' rel="noreferrer">
              <img src={GitHubImg} alt="GitHub" />
            </a>
          </div>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <ul className='about-points'>
              <li>🎓 CS student at Georgia Tech passionate about building real-world tech solutions</li>
              <li>🎮 Dream: Become a game developer — love creating immersive, interactive experiences</li>
              <li>💻 Currently a ARCS technician at Georgia Tech — troubleshoot systems & deploy tools</li>
              <li>🤝 Learned reliability and teamwork from fast-paced roles like Chick-fil-A</li>
              <li>🌐 Enjoy building web apps, exploring AI/ML, and bringing ideas to life</li>
              <li>🚀 Always eager to learn, grow, and take on new challenges in software engineering</li>
            </ul>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>Software Development (Full Stack)</p><hr style={{ width: '50%' }} /></div>
            <div className='about-skill'><p>Artificial Intelligence & Machine Learning</p><hr style={{ width: '50%' }} /></div>
            <div className='about-skill'><p>Cloud & DevOps Tools</p><hr style={{ width: '50%' }} /></div>
            <div className='about-skill'><p>Problem Solving & Technical Support</p><hr style={{ width: '50%' }} /></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'><h1>3+</h1><p>YEARS OF EXPERIENCE</p></div>
        <div className='about-achievement'><h1>20+</h1><p>PROJECT COMPLETED</p></div>
      </div>
    </div>
  )
}

export default About