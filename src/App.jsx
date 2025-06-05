import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter basename="/my-portfolio-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
