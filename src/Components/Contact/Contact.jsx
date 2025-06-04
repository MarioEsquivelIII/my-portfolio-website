import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
        </div>

        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, nobis! Exercitationem quod quam molestiae nemo.</p>
                <div className='contact-details'>

                    <div className='contact-detail'>
                        <img src={mail_icon} alt=''/> <p>mario.esquivel13795@gmail.com</p>
                    </div>

                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/> <p>404-988-4352</p>
                    </div>

                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/> <p>United States</p>
                    </div>

                </div>
            </div>

            <form className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>

                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter Your Email' name='email'/>

                <label htmlFor="">Write your message here</label>
                <textarea type='message' placeholder='Enter Your Message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact