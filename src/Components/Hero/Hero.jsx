import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile3.jpg'
import { Link } from 'react-router-dom';
import resume from '../../assets/marioresume.pdf'

const Hero = () => {
  return (
    <div id='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Mario Esquivel,</span> Aspiring Software Engineer/Developer</h1>
        <div className='hero-action'>
            <div className='hero-connect'>Connect with Me</div>
            <a href={resume} id='hero-resume' download='marioresume.pdf'>My Resume</a>
        </div>
    </div>
  )
}

export default Hero