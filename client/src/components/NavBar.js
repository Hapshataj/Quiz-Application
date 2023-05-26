import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../src/assets/img/logo hap.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import axios from "axios";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  

  return (
  
    
    <Router>
     
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/Home">
            <img src={logo}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
              <Nav.Link href="/Home" className={activeLink === '/Home' ? 'active navbar-link' : 'navbar-link'} onClick={() =>window.location.href='/Home'} >Home</Nav.Link>
              <Nav.Link href="/Skills" className={activeLink === '/Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => window.location.href='/Skills'}>Skills</Nav.Link>
              <Nav.Link href="/Projects"  className={activeLink === '/Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => window.location.href='/Projects'} >Categories</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div> 
             
             
   
      <div>
         <button onClick={() => window.location.href = '/Contact'}>Login</button>
      </div>   </span>
            
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </Router>
  )
}
