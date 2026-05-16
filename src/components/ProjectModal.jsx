function ProjectModal({ project, closeModal }) {

  if(!project) return null

  return (

    <div className="modal-overlay" onClick={closeModal}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="modal-buttons">

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

        <button
          className="close-modal"
          onClick={closeModal}
        >
          X
        </button>

      </div>

    </div>
  )
}

export default ProjectModal