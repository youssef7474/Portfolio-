import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/imges/logo.svg"
import icon1 from "../../assets/imges/nav-icon1.svg"
import icon2 from "../../assets/imges/icons8-github.svg"


const NavBarCompo = () => {

  const [activeLink,SetActiveLink]=useState("home")
  const [scrolled,setScrolled]=useState(false)

  useEffect(()=>{
    const onscroll=()=>{
      if (window.scrollY >50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll",onscroll)
    return ()=> window.removeEventListener("scroll",onscroll)
  },[])

  const onUpdateActiveLink=(link)=>{
    SetActiveLink(link)
  }


  return (
  <>
  <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <h1 style={{ color: "transparent", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" }}>Youssef</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#Expirence" className={activeLink === 'Expirence' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Expirence')}>Expirence</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={icon1} alt="" /></a>
                <a href="#"><img src={icon2} alt="" /></a>

              </div>
              
                <button className="vvd"><span>Let’s Connect</span></button>
          
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
  )
}

export default NavBarCompo
