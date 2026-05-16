import weatherApp from "../assets/weather-app.png"
import ecommerceApp from "../assets/ecommerce-app.png"
import portfolio from "../assets/portfolio.png"

import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { useState } from "react"

import Reveal from "../components/Reveal"

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [

    {
      title: "Weather Forecast App",

      description:
        "Modern weather application built with JavaScript using API data and responsive design.",

      image: weatherApp,

      tech: ["React", "CSS", "API"],

      live:
        "https://weather-app-nu-swart-60.vercel.app/",

      github:
        "https://weather-app-nu-swart-60.vercel.app/"
    },

    {
      title: "Modern Ecommerce Store",

      description:
        "Responsive ecommerce interface with modern UI, product sections and clean frontend structure.",

      image: ecommerceApp,

      tech: ["React", "CSS", "JavaScript"],

      live:
        "https://ecommerce-react-app-tawny.vercel.app/",

      github:
        "https://ecommerce-react-app-tawny.vercel.app/"
    },

    {
      title: "Developer Portfolio",

      description:
        "Personal portfolio developed with React, animations and responsive modern design.",

      image: portfolio,

      tech: ["React", "Framer Motion", "CSS"],

      live:
        "https://my-portfolio-delta-two-97.vercel.app/",

      github:
        "https://my-portfolio-delta-two-97.vercel.app/"
    }

  ]

  return (

    <>

      <Reveal>

        <section
          className="projects"
          id="projects"
        >

          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <div className="projects-container">

            {projects.map((project, index) => (

              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.02}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                perspective={1200}
                transitionSpeed={1500}
                gyroscope={true}
                key={index}
              >

                <motion.div
                  className="project-card"

                  onMouseMove={(e) => {

                    const rect =
                      e.currentTarget.getBoundingClientRect()

                    const x =
                      e.clientX - rect.left

                    const y =
                      e.clientY - rect.top

                    e.currentTarget.style.setProperty(
                      "--x",
                      `${x}px`
                    )

                    e.currentTarget.style.setProperty(
                      "--y",
                      `${y}px`
                    )

                  }}

                  initial={{
                    opacity: 0,
                    y: 80,
                    rotateX: 15
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0
                  }}

                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}

                  whileHover={{
                    y: -12,
                    scale: 1.02
                  }}

                  viewport={{ once: false }}

                  onClick={() =>
                    setSelectedProject(project)
                  }
                >

               
                  <div className="project-glow"></div>

                  
                  <div className="project-floating-circle"></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-stack">

                    {project.tech.map((tech, index) => (

                      <span key={index}>
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="project-buttons">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >

                      <button>
                        Live Demo
                      </button>

                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >

                      <button className="btn-outline">
                        GitHub
                      </button>

                    </a>

                  </div>

                </motion.div>

              </Tilt>

            ))}

          </div>

        </section>

      </Reveal>

      {/* MODAL */}

      {selectedProject && (

        <motion.div
          className="modal-overlay"

          onClick={() =>
            setSelectedProject(null)
          }

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}
        >

          <motion.div
            className="modal-content"

            onClick={(e) =>
              e.stopPropagation()
            }

            initial={{
              scale: 0.7,
              opacity: 0,
              rotateX: 20
            }}

            animate={{
              scale: 1,
              opacity: 1,
              rotateX: 0
            }}

            transition={{
              duration: 0.5
            }}
          >

            <button
              className="close-modal"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              X
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />

            <h2>
              {selectedProject.title}
            </h2>

            <p>
              {selectedProject.description}
            </p>

            <div className="tech-stack">

              {selectedProject.tech.map((tech, index) => (

                <span key={index}>
                  {tech}
                </span>

              ))}

            </div>

            <div className="modal-buttons">

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
              >

                <button>
                  Live Demo
                </button>

              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >

                <button className="btn-outline">
                  GitHub
                </button>

              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </>

  )
}

export default Projects