import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Photos from './Components/Photos/Photos'
import Contact from './Components/Contact/Contact'
import './App.css'

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Photos />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename="/my-portfolio-website">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
