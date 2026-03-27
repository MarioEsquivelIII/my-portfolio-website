import './Photos.css'

const baseUrl = import.meta.env.BASE_URL

const row1 = [
  'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.png', 'photo5.jpg', 'photo11.jpg', 'photo12.jpg',
]

const row2 = [
  'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg', 'photo10.jpg', 'photo13.jpg', 'photo14.jpg',
]

const Photos = () => {
  return (
    <section id="photos" className="photos">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Life</span>
          <h2 className="section-title">
            Beyond the <span className="gradient-text">code</span>
          </h2>
        </div>
      </div>

      <div className="photos__marquee">
        <div className="photos__track">
          {[...row1, ...row1].map((photo, i) => (
            <div key={i} className="photos__item">
              <img src={`${baseUrl}photos/${photo}`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="photos__marquee photos__marquee--reverse">
        <div className="photos__track photos__track--reverse">
          {[...row2, ...row2].map((photo, i) => (
            <div key={i} className="photos__item">
              <img src={`${baseUrl}photos/${photo}`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Photos
