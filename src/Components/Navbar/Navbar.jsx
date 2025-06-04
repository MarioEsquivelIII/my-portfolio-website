import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import active_tab from '../../assets/right-now.png';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import underline from '../../assets/underline.png';
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div id='navbar'>
      <img src={logo} alt='' />
      <img src={menu_open} alt='' onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
        <li><a className='anchor-link' href='#home' onClick={() => setMenu("home")}><p>Home</p></a>{menu === "home" && <img src={isMobile ?active_tab : underline} alt='' />}</li>
        <li><a className='anchor-link' href='#about' onClick={() => setMenu("about")}><p>About Me</p></a>{menu === "about" && <img src={isMobile ?active_tab : underline} alt='' />}</li>
        <li><a className='anchor-link' href='#services' onClick={() => setMenu("services")}><p>Services</p></a>{menu === "services" && <img src={isMobile ?active_tab : underline} alt='' />}</li>
        <li><a className='anchor-link' href='#mywork' onClick={() => setMenu("work")}><p>Portfolio</p></a>{menu === "work" && <img src={isMobile ?active_tab : underline} alt='' />}</li>
        <li><a className='anchor-link' href='#contact' onClick={() => setMenu("contact")}><p>Contact</p></a>{menu === "contact" && <img src={isMobile ?active_tab : underline} alt='' />}</li>
      </ul>
      <div className='nav-connect'>
        <a className='anchor-link' href='#contact'>Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;