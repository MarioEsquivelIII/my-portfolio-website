import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile3.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Mario Esquivel,</span> Aspiring Software Engineer/Developer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore enim doloremque, quas pariatur reiciendis dolor nostrum eos quo quidem minima earum officiis aliquam vel sed. Id praesentium fugit quis quas.</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect with Me</div>
            <Link to="/resume" id='hero-resume'>My Resume</Link>
        </div>
    </div>
  )
}

export default Hero