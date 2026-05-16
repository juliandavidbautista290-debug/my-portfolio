import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import cv from "../assets/cv-julian.pdf"
import ParticlesBackground from "../components/ParticlesBackground"
import { TypeAnimation } from "react-type-animation"
import { useEffect } from "react"
import MagneticButton from "../components/MagneticButton"

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa"

function Hero() {

       useEffect(() => {

  const handleMouseMove = (e) => {

    const hero = document.querySelector(".hero-content")

    const image = document.querySelector(".hero-image")

    const x =
      (window.innerWidth / 2 - e.clientX) / 25

    const y =
      (window.innerHeight / 2 - e.clientY) / 25

    hero.style.transform =
      `translate(${x}px, ${y}px)`

    image.style.transform =
      `translate(${-x}px, ${-y}px)`
  }

  window.addEventListener(
    "mousemove",
    handleMouseMove
  )

  return () => {

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    )
  }

}, [])

  return (
    <section className="hero" id="home" data-aos="fade-up">

        <ParticlesBackground />

        <div className="floating-icons">

  <FaReact className="floating react-icon" />

  <FaHtml5 className="floating html-icon" />

  <FaCss3Alt className="floating css-icon" />

  <FaJs className="floating js-icon" />

</div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3>Hello, I'm</h3>

        <h1>Julian David</h1>

                <TypeAnimation
  sequence={[

    "Frontend Developer",
    2000,

    "React Developer",
    2000,

    "JavaScript Developer",
    2000,

    "UI Designer",
    2000,

  ]}

  wrapper="h2"

  speed={50}

  repeat={Infinity}
/>

        <p>
          I build modern, responsive and attractive web interfaces
          using JavaScript, React and frontend technologies.
        </p>

       <div className="hero-buttons">

        <MagneticButton>

            <a href="#contact">
             <button className="btn-outline">
               Contact Me
        </button>
            </a>

            </MagneticButton>

                 <MagneticButton>
            
            <a href={cv} download>
          <button className="btn-orange">
      Download CV
             </button>
           </a>

           </MagneticButton>

         </div>

      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <img src={profile} alt="profile" />

      </motion.div>

    </section>
  )
}

export default Hero