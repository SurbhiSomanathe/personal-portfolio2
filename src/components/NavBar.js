import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assests/img/nav-icon1.svg';
import github from '../assests/img/github.svg';
import resume from '../assests/img/resume.png';
// import { AiOutlineArrowDown } from "react-icons/ai";



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
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/surbhi-somanathe/"target = {"_blank"} rel="noreferrer"><img src={ navIcon1 } alt="" /></a>
                  <a href="https://github.com/SurbhiSomanathe" target = {"_blank"} rel="noreferrer"><img src={ github} alt="" /></a> 
                  <a href="https://drive.google.com/file/d/1NNo-AK1c8IZxiHb60v55Vqrpv9iI7KJP/view?usp=share_link" target = {"_blank"} rel="noreferrer"><img src={resume} color="white" size="30px" alt="" /></a>       
                </div>                 
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      // </Router>
    )
  }
  