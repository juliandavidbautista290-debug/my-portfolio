import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaStar
} from "react-icons/fa"

import Reveal from "../components/Reveal"

import { motion } from "framer-motion"

function Skills() {

  const skills = [

    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS3"
    },

    {
      icon: <FaJs />,
      name: "JavaScript"
    },

    {
      icon: <FaReact />,
      name: "React"
    },

    {
      icon: <FaGitAlt />,
      name: "Git"
    },

    {
      icon: <FaGithub />,
      name: "GitHub"
    }

  ]

  const containerVariants = {

    hidden: {},

    visible: {

      transition: {
        staggerChildren: 0.2
      }

    }

  }

  const cardVariants = {

    hidden: {
      opacity: 0,
      y: 80
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7
      }
    }

  }

  return (

    <Reveal>

      <section
        className="skills"
        id="skills"
      >

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-decorations">

          <FaCode className="skill-shape shape1" />

          <FaStar className="skill-shape shape2" />

          <div className="glow-circle glow1"></div>

          <div className="glow-circle glow2"></div>

        </div>

        <motion.div
          className="skills-container"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: false }}
        >

          {skills.map((skill, index) => (

            <motion.div

              className="skill-card"

              key={index}

              variants={cardVariants}

              whileHover={{
                scale: 1.08,
                rotate: 2
              }}

            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

            </motion.div>

          ))}

        </motion.div>

      </section>

    </Reveal>
  )
}

export default Skills