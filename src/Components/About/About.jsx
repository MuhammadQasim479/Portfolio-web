import React from 'react';
import './About.css';
import Card from '../Card/Card';
import mern from '../../assets/mern.png';
import java from '../../assets/java.png';
import dsa from '../../assets/dsa.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  React.useEffect(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scrub: 2,
        start: "top 60%",
        end: "top 20%"
      }
    });
  }, []);

  return (
    <div id="about">
      <div className="aboutleft">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetail">
          <div className="personalinfo">
            <h1>Personal Info:</h1>
            <ul>
              <li>
                <span>NAME:</span> MUHAMMAD QASIM
              </li>
              <li>
                <span>AGE:</span> 24
              </li>
              <li>
                <span>GENDER:</span> MALE
              </li>
              <li>
                <span>LANGUAGE:</span> URDU ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education Information:</h1>
            <ul>
              <li>
                <span>DEGREE:</span> COMPUTER SCIENCE
              </li>
              <li>
                <span>UNIVERSITY:</span> KFUEIT
              </li>
              <li>
                <span>CGPA:</span> 3.2
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills:</h1>
            <ul>
              <li>FRONT END DEVELOPER</li>
              <li>WORDPRESS DEVELOPER</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aboutright">
        <Card title="FRONT END DEVELOPER" image={mern} />
        <Card title="JAVA DEVELOPER" image={java} />
        <Card title="WORDPRESS DEVELOPER" image={dsa} />
      </div>
    </div>
  );
};

export default About;
