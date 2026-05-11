function Projects() {

     const projects = [
        {
            title: "Google Clone",
            description:
            "A responsive Google homepage clone built using HTML5, CSS3, and JavaScript",
        },

        {
             title: "Portafolio Website",
             description:
             "My personal Frontend Developer Portafolio created with React and Vite.",
        }
     ]

     return (
    <section className="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <button>
              View Project
            </button>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects
        