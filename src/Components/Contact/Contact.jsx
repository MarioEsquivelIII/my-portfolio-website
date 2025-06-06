import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_jwttats',    // from EmailJS dashboard
      'template_6ctfmqj',   // from EmailJS dashboard
      formData,
      'P33Z9HmASsubNtj2h'        // from EmailJS dashboard
    ).then((result) => {
      console.log(result.text);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div id='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
      </div>

      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>mario.esquivel13795@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' /> <p>404-988-4352</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' /> <p>United States</p>
            </div>
          </div>
        </div>

        <form className='contact-right' onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' value={formData.name} onChange={handleChange} required />

          <label>Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleChange} required />

          <label>Write your message here</label>
          <textarea placeholder='Enter Your Message' name='message' value={formData.message} onChange={handleChange} required></textarea>

          <button type='submit' className='contact-submit'>Submit now</button>
          {submitted && <p className="success-message">Thanks for reaching out! 🚀</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
