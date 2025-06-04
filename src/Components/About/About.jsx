import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.png'
import linkedin_icon from '../../assets/linkedin.png'
const About = () => {
  return (
    <div id='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <h1>Aspiring Software Engineer/Developer!</h1>
                    <p> 👋 Hey there! 
                        Hi, I’m Mario A. Esquivel III, a Computer Science student at Georgia Tech with a passion for creating, building, and solving real-world problems through technology. While I’m currently gaining experience across a wide range of software engineering roles, my ultimate dream is to become a game developer — crafting immersive worlds and interactive experiences. Until then, I’m excited to grow as a software engineer, applying my creativity and problem-solving skills wherever I can.
                        I currently work part-time at Georgia Tech providing technical support for the College of Sciences, where I troubleshoot systems, deploy tools, and ensure everything runs smoothly behind the scenes. I’ve also worked in high-pressure team environments, like Chick-fil-A, where I learned the value of reliability and collaboration.
                        Whether it’s building web apps to help others or diving into AI-powered projects, I love the feeling of turning ideas into something real. I'm always looking for new opportunities to learn and grow and maybe one day, make that leap into game development.📧 mesquivel30@gatech.edu | 🔗 <a href='https://www.linkedin.com/in/mario-esquivel-9b6900239/' target='_blank'><img src={linkedin_icon} width={30}/></a></p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>Software Development (Full Stack)</p><hr style={{width:'50%'}}/></div>
                    <div className='about-skill'><p>Artificial Intelligence & Machine Learning</p><hr style={{width:'50%'}}/></div>
                    <div className='about-skill'><p>Cloud & DevOps Tools</p><hr style={{width:'50%'}}/></div>
                    <div className='about-skill'><p>Problem Solving & Technical Support</p><hr style={{width:'50%'}}/></div>
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