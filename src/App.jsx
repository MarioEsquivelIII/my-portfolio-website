import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router basename="/my-portfolio-website">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
