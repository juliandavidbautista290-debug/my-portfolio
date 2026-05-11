import googleClone from "../assets/google-clone.png"
import digitalClock from "../assets/digital-clock.png"
import portfolio from "../assets/portfolio.png"

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">

          <img src={googleClone} alt="Google Clone" />

          <h3>Google Clone</h3>

          <p>
            Responsive Google homepage clone built with
            HTML, CSS and JavaScript.
          </p>

          <div className="project-buttons">

  <a
    href="https://juliandavidbautista290-debug.github.io/REELOJ-DIGITAL/"
    target="_blank"
  >
    <button>Live Demo</button>
  </a>

  <a
    href="https://github.com/juliandavidbautista290-debug/REELOJ-DIGITAL"
    target="_blank"
  >
    <button>GitHub</button>
  </a>

</div>

        </div>

        <div className="project-card">

          <img src={digitalClock} alt="Digital Clock" />

          <h3>Digital Clock</h3>

          <p>
            Dynamic digital clock application created
            using JavaScript DOM manipulation.
          </p>

          <div className="project-buttons">

            <a
              href="https://github.com/juliandavidbautista290-debug"
              target="_blank"
            >
              <button>GitHub</button>
            </a>

          </div>

        </div>

        <div className="project-card">

          <img src={portfolio} alt="Portfolio" />

          <h3>React Portfolio</h3>

          <p>
            Modern responsive portfolio developed with
            React and Framer Motion.
          </p>

          <div className="project-buttons">

            <a
              href="https://github.com/juliandavidbautista290-debug"
              target="_blank"
            >
              <button>GitHub</button>
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects