import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assests/img/logo.svg';
import navIcon1 from '../assests/img/nav-icon1.svg';
import github from '../assests/img/github.svg';
import navIcon3 from '../assests/img/nav-icon3.svg';
import { AiOutlineArrowDown } from "react-icons/ai";
export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
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
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    return (
      // <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              {/* <img src={logo} alt="Logo" /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/surbhi-somnathe-32475a222"><img src={ navIcon1 } alt="" /></a>
                  <a href="https://github.com/SurbhiSomanathe"><img src={ github} alt="" /></a>
                  {/* <a href="https://www.instagram.com/sur_jun_bhi/?hl=en"><img src={ navIcon3 } alt="" /></a> */}
                </div>
                 {/* <HashLink to='#connect'> 
                  <button className="vvd"><span>Let’s Connect</span></button> 
                 </HashLink>  */}
              </span>
            </Navbar.Collapse>
          </Container>
          {        
        
            <a
                href="https://docs.google.com/document/d/1BcYVCZgnRQQ4TensJQxrBc1rCOUguZhbXbDBVcsCjxc/edit"
                target={"_blank"}
                className="background-color: transparent" rel="noreferrer">
                <AiOutlineArrowDown className="text-white transform transition-transform ml-2" />
                <span className="text-sm">MY RESUME</span>
            </a>
      
    
}

        </Navbar>
      // </Router>
    )
  }
  