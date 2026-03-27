import { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.send('service_jwttats', 'template_6ctfmqj', {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    }, 'P33Z9HmASsubNtj2h')
    .then(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    })
    .catch(() => {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    })
  }

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">connect</span>
          </h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              Have a project in mind or just want to chat? I'm always open to new opportunities and conversations.
            </p>

            <div className="contact__details">
              <a href="mailto:mario.esquivel13795@gmail.com" className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">mario.esquivel13795@gmail.com</span>
                </div>
              </a>

              <a href="tel:404-988-4352" className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span className="contact__detail-value">404-988-4352</span>
                </div>
              </a>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Atlanta, GA</span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/MarioEsquivelIII" target="_blank" rel="noopener noreferrer" className="contact__social">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mario-esquivel-iii-9b6900239/" target="_blank" rel="noopener noreferrer" className="contact__social">
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="contact__status contact__status--success">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        <div className="contact__footer">
          <p>Designed &amp; Built by Mario Esquivel</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
