import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import ReactTypingEffect from 'react-typing-effect'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'


const Home = () => {
  // NOW WE WILL APPLY GSAP FOR ANIMATION
useGSAP(() =>{
  let tl1= gsap.timeline();
  tl1.from(".l1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".l2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".l3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:2,
    opacity:0
  })
})
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="l1">I'Am</div>
          <div className="l2">MUHAMMAD QASIM</div>
          <div className="l3">
            <ReactTypingEffect 
            text={["WEB DEVELOPER", "FRONT END DEVELOPER"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            cursor='|'
            />
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home