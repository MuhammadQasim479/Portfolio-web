import React, { useRef } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'

const Nav = () => {
  let menu = useRef();
  let mobile = useRef();  
  // NOW WE WILL USE GSAP FOR ANIMATION OUR WEBSITE 
  useGSAP(() =>{
    let tl = gsap.timeline()
    tl.from("nav, h1",{
      y:-100,
      duration:1,
      opacity:0,
    })
    tl.from("nav ul li", {
    y:-100,
    duration:1,
    opacity:0,
    stagger:1
    })
  })
  
  return (
    <nav>
       <Link to='home' ><h1>PORTFOLIO</h1></Link> 
        <ul className='desktop-menu'>
           <Link to='home' smooth= {true} duration={600}
            activeClass='active' spy={true}><li>Home</li></Link>
           <Link to='about' smooth={true} duration={600}
            activeClass='active'spy={true} ><li>About</li></Link> 
           <Link to='projects' smooth ={true} duration={600}
            activeClass='active' spy={true}><li>projects</li></Link>
           <Link to='contact' smooth = {true} duration={600}
            activeClass='active' spy={true}><li>contact</li></Link> 
        </ul>
        <div className="hamburger" ref={menu} onClick={() =>{
          mobile.current.classList.toggle("activemobile");
          menu.current.classList.toggle("activeham");
        }}>
            <div className="ham"></div>
            <div className="ham"></div> 
            <div className="ham"></div>
        </div>
        <ul className='mobile-menu' ref={mobile}>
           <Link to='home' smooth= {true} duration={600}
            activeClass='active' spy={true}><li>Home</li></Link>
           <Link to='about' smooth={true} duration={600}
            activeClass='active'spy={true} ><li>About</li></Link> 
           <Link to='projects' smooth ={true} duration={600}
            activeClass='active' spy={true}><li>projects</li></Link>
           <Link to='contact' smooth = {true} duration={600}
            activeClass='active' spy={true}><li>contact</li></Link> 
        </ul>
    </nav>
  )
}

export default Nav