import { motion } from "framer-motion"
import profile from "../assets/profile.png"

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3>Hello, I'm</h3>

        <h1>Julian David</h1>

        <h2>Frontend Developer</h2>

        <p>
          I build modern, responsive and attractive web interfaces
          using JavaScript, React and frontend technologies.
        </p>

        <div className="hero-buttons">

          <a href="#contact">
            <button className="btn-outline">
              Contact Me
            </button>
          </a>

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